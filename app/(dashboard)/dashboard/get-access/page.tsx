'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { lifetimeCheckoutAction, monthlyCheckoutAction } from '@/lib/payments/actions';
import { Suspense, useEffect, useState } from 'react';
import { Shield, Key, Copy, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AccessOptionsContent() {
  const { data: licenseData } = useSWR('/api/user/license', fetcher);
  const { data: teamData } = useSWR('/api/team', fetcher);
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'lifetime_purchased') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [searchParams]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const hasLifetimeAccess = licenseData?.licenseKey;
  const hasActiveSubscription = teamData?.subscriptionStatus === 'active' || teamData?.subscriptionStatus === 'trialing';

  if (hasLifetimeAccess) {
    return (
      <Card className="border-green-200 bg-green-50">
        {showSuccess && (
          <div className="bg-green-500 text-white px-6 py-2 text-sm text-center mb-4">
            ✅ Lifetime access purchased successfully!
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <CardTitle className="text-xl text-green-800">Lifetime Access Active</CardTitle>
              <p className="text-green-600 text-sm">You have lifetime protection</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h4 className="text-lg mb-3 flex items-center gap-2 text-green-800">
              <Key className="w-5 h-5" />
              Your License Key
            </h4>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm break-all relative">
                {licenseData.licenseKey}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0"
                  onClick={() => copyToClipboard(licenseData.licenseKey)}
                >
                  {copied ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </Button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 text-center">
                  License key copied to clipboard!
                </p>
              )}
              <p className="text-xs text-gray-600 text-center">
                Use this key to activate Blurby on your devices
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-cal font-semibold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 font-cal">Simple, transparent pricing for privacy protection</p>
        <p className="text-sm text-gray-500 font-cal mt-2">No refunds policy</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Monthly Plan */}
        <Card className="border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-cal">Monthly</CardTitle>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold font-cal">$2.5</span>
              <span className="text-gray-600 font-cal">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-gray-600" />
                <span>AI-powered data protection</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Key className="w-4 h-4 text-gray-600" />
                <span>Team collaboration</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-gray-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <form action={monthlyCheckoutAction}>
              <input type="hidden" name="priceId" value="monthly" />
              <Button 
                className="w-full font-cal" 
                size="lg" 
                type="submit"
                disabled={hasActiveSubscription}
              >
                {hasActiveSubscription ? 'Active' : 'Start Monthly Plan'}
              </Button>
            </form>
            {hasActiveSubscription && (
              <p className="text-sm text-green-600 text-center font-cal">Currently active</p>
            )}
          </CardContent>
        </Card>

        {/* Lifetime Plan */}
        <Card className="border border-gray-300 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-cal">
              Best Value
            </span>
          </div>
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-xl font-cal">Lifetime</CardTitle>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold font-cal">$19</span>
              <span className="text-gray-600 line-through text-sm font-cal">$49</span>
            </div>
            <p className="text-sm text-gray-600 font-cal">Save $30</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-gray-600" />
                <span>Everything in Monthly</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Key className="w-4 h-4 text-gray-600" />
                <span>Lifetime updates</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-gray-600" />
                <span>One-time payment</span>
              </div>
            </div>
            <form action={lifetimeCheckoutAction}>
              <Button 
                className="w-full font-cal bg-gray-800 hover:bg-gray-900 text-white" 
                size="lg" 
                type="submit"
              >
                Get Lifetime Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function GetAccessPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/logo.svg"
          alt="Blurby"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <div>
          <h1 className="text-lg lg:text-2xl font-medium">Get Access</h1>
          <p className="text-gray-600 text-sm">Choose your privacy protection plan</p>
        </div>
      </div>
      
      <Suspense fallback={
        <Card className="h-[300px]">
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
        </Card>
      }>
        <AccessOptionsContent />
      </Suspense>
    </section>
  );
}