import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/payments/stripe';
import { createLicenseKey } from '@/lib/db/queries';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.redirect(new URL('/dashboard?error=no_session', request.url));
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent']
    });

    if (session.payment_status === 'paid' && session.client_reference_id) {
      const userId = parseInt(session.client_reference_id);
      const paymentIntent = session.payment_intent as any;
      
      // Create license key for the user
      await createLicenseKey(userId, paymentIntent.id);
      
      return NextResponse.redirect(new URL('/dashboard?success=lifetime_purchased', request.url));
    } else {
      return NextResponse.redirect(new URL('/dashboard?error=payment_failed', request.url));
    }
  } catch (error) {
    console.error('Error processing lifetime checkout:', error);
    return NextResponse.redirect(new URL('/dashboard?error=processing_failed', request.url));
  }
}