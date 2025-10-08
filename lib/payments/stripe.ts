import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { Team } from '@/lib/db/schema';
import {
  getTeamByStripeCustomerId,
  getUser,
  updateTeamSubscription
} from '@/lib/db/queries';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil'
});

export async function createCheckoutSession({
  team,
  priceId
}: {
  team: Team | null;
  priceId: string;
}) {
  const user = await getUser();

  if (!team || !user) {
    redirect(`/sign-up?redirect=checkout&priceId=${priceId}`);
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'subscription',
    success_url: `${process.env.BASE_URL}/api/stripe/checkout?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/pricing`,
    customer: team.stripeCustomerId || undefined,
    client_reference_id: user.id.toString(),
    allow_promotion_codes: true
  });

  redirect(session.url!);
}

export async function createLifetimeCheckoutSession() {
  const user = await getUser();

  if (!user) {
    redirect('/sign-up?redirect=lifetime');
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Blurby Lifetime Access',
            description: 'One-time payment for lifetime access to Blurby privacy protection',
            images: [`${process.env.BASE_URL}/logo.png`],
          },
          unit_amount: 1900, // $19.00 in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.BASE_URL}/api/stripe/lifetime-checkout?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/dashboard`,
    client_reference_id: user.id.toString(),
    allow_promotion_codes: true,
    metadata: {
      type: 'lifetime_access',
      userId: user.id.toString(),
    },
  });

  redirect(session.url!);
}

export async function createMonthlyCheckoutSession(priceId: string) {
  const user = await getUser();

  if (!user) {
    redirect('/sign-up?redirect=monthly');
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Blurby Monthly Access',
            description: 'Monthly subscription for Blurby privacy protection',
            images: [`${process.env.BASE_URL}/logo.png`],
          },
          unit_amount: 250, // $2.50 in cents
          recurring: {
            interval: 'month',
          },
        },
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.BASE_URL}/api/stripe/checkout?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/dashboard/get-access`,
    client_reference_id: user.id.toString(),
    allow_promotion_codes: true,
  });

  redirect(session.url!);
}

export async function createCustomerPortalSession(team: Team) {
  if (!team.stripeCustomerId || !team.stripeProductId) {
    redirect('/pricing');
  }

  let configuration: Stripe.BillingPortal.Configuration;
  const configurations = await stripe.billingPortal.configurations.list();

  if (configurations.data.length > 0) {
    configuration = configurations.data[0];
  } else {
    const product = await stripe.products.retrieve(team.stripeProductId);
    if (!product.active) {
      throw new Error("Team's product is not active in Stripe");
    }

    const prices = await stripe.prices.list({
      product: product.id,
      active: true
    });
    if (prices.data.length === 0) {
      throw new Error("No active prices found for the team's product");
    }

    configuration = await stripe.billingPortal.configurations.create({
      business_profile: {
        headline: 'Manage your subscription'
      },
      features: {
        subscription_update: {
          enabled: true,
          default_allowed_updates: ['price', 'quantity', 'promotion_code'],
          proration_behavior: 'create_prorations',
          products: [
            {
              product: product.id,
              prices: prices.data.map((price) => price.id)
            }
          ]
        },
        subscription_cancel: {
          enabled: true,
          mode: 'at_period_end',
          cancellation_reason: {
            enabled: true,
            options: [
              'too_expensive',
              'missing_features',
              'switched_service',
              'unused',
              'other'
            ]
          }
        },
        payment_method_update: {
          enabled: true
        }
      }
    });
  }

  return stripe.billingPortal.sessions.create({
    customer: team.stripeCustomerId,
    return_url: `${process.env.BASE_URL}/dashboard`,
    configuration: configuration.id
  });
}

export async function handleSubscriptionChange(
  subscription: Stripe.Subscription
) {
  const customerId = subscription.customer as string;
  const subscriptionId = subscription.id;
  const status = subscription.status;

  const team = await getTeamByStripeCustomerId(customerId);

  if (!team) {
    console.error('Team not found for Stripe customer:', customerId);
    return;
  }

  const updateData: any = {
    subscriptionStatus: status
  };

  // Handle cancellation timestamps
  if (subscription.cancel_at) {
    updateData.subscriptionCancelAt = new Date(subscription.cancel_at * 1000);
  }
  if (subscription.canceled_at) {
    updateData.subscriptionCanceledAt = new Date(subscription.canceled_at * 1000);
  }
  if (subscription.ended_at) {
    updateData.subscriptionEndedAt = new Date(subscription.ended_at * 1000);
  }

  if (status === 'active' || status === 'trialing') {
    const plan = subscription.items.data[0]?.plan;
    updateData.stripeSubscriptionId = subscriptionId;
    updateData.stripeProductId = plan?.product as string;
    updateData.planName = (plan?.product as Stripe.Product).name;
    
    // Update monthly license expiry if it exists
    const { updateMonthlyLicenseExpiry } = await import('@/lib/db/queries');
    await updateMonthlyLicenseExpiry(subscriptionId, status);
  } else if (status === 'canceled' || status === 'unpaid') {
    updateData.stripeSubscriptionId = null;
    updateData.stripeProductId = null;
    updateData.planName = null;
    
    // Expire monthly license if it exists
    const { updateMonthlyLicenseExpiry } = await import('@/lib/db/queries');
    await updateMonthlyLicenseExpiry(subscriptionId, status);
  }

  await updateTeamSubscription(team.id, updateData);
}

export async function getStripePrices() {
  const prices = await stripe.prices.list({
    expand: ['data.product'],
    active: true,
    type: 'recurring'
  });

  return prices.data.map((price) => ({
    id: price.id,
    productId:
      typeof price.product === 'string' ? price.product : price.product.id,
    unitAmount: price.unit_amount,
    currency: price.currency,
    interval: price.recurring?.interval,
    trialPeriodDays: price.recurring?.trial_period_days
  }));
}

export async function getStripeProducts() {
  const products = await stripe.products.list({
    active: true,
    expand: ['data.default_price']
  });

  return products.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    defaultPriceId:
      typeof product.default_price === 'string'
        ? product.default_price
        : product.default_price?.id
  }));
}
