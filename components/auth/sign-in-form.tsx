'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import { signIn } from '@/app/(login)/actions';
import { ActionState } from '@/lib/auth/middleware';

export function SignInForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signIn,
    { error: '' }
  );

  const signUpUrl = `/sign-up${
    redirect ? `?redirect=${redirect}` : ''
  }${priceId ? `&priceId=${priceId}` : ''}${inviteId ? `&inviteId=${inviteId}` : ''}`;

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
              autoComplete="current-password"
              defaultValue={state.password}
              required
              minLength={8}
              maxLength={100}
              className="font-cal"
              placeholder="Enter your password"
            />
          </div>

          {state?.error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-700 font-cal">{state.error}</div>
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
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </div>

      <div className="text-center mt-6">
        <span className="text-gray-600 font-cal text-sm">
          Don't have an account?{' '}
          <Link
            href={signUpUrl}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Create one here
          </Link>
        </span>
      </div>
    </>
  );
}