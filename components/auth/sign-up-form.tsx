'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ArrowRight, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { signUp } from '@/app/(login)/actions';
import { ActionState } from '@/lib/auth/middleware';

export function SignUpForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signUp,
    { error: '' }
  );

  const signInUrl = `/sign-in${
    redirect ? `?redirect=${redirect}` : ''
  }${priceId ? `&priceId=${priceId}` : ''}${inviteId ? `&inviteId=${inviteId}` : ''}`;

  // Check if error is about existing user
  const isExistingUserError = state?.error?.toLowerCase().includes('already exists') || 
                             state?.error?.toLowerCase().includes('user already') ||
                             state?.error?.toLowerCase().includes('email is already');

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <form className="space-y-5" action={formAction}>
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-cal text-gray-700">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={state.email}
              required
              maxLength={50}
              className="font-cal"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-cal text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              defaultValue={state.password}
              required
              minLength={8}
              maxLength={100}
              className="font-cal"
              placeholder="Create a strong password"
            />
            <p className="text-xs text-gray-500 font-cal">
              Minimum 8 characters required
            </p>
          </div>

          {state?.error && (
            <div className={`border rounded-lg p-3 flex items-start gap-2 ${
              isExistingUserError 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              {isExistingUserError ? (
                <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              )}
              <div className="space-y-2">
                <div className={`text-sm font-cal ${
                  isExistingUserError ? 'text-blue-700' : 'text-red-700'
                }`}>
                  {isExistingUserError 
                    ? 'This email is already registered.' 
                    : state.error
                  }
                </div>
                {isExistingUserError && (
                  <Link
                    href={signInUrl}
                    className="inline-flex items-center gap-1 text-sm font-cal text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign in instead
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full font-cal gap-2"
            size="lg"
            disabled={pending}
          >
            {pending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating account...
              </>
            ) : (
              <>
                Create account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-gray-600 font-cal">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-gray-600 font-cal text-sm">
          Already have an account?{' '}
          <Link
            href={signInUrl}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Sign in here
          </Link>
        </span>
      </div>
    </>
  );
}