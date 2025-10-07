'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Loader2, ArrowRight } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';
import Image from 'next/image';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.svg"
                alt="Blurby"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-cal">Privacy First</span>
            </div>
            <h1 className="text-3xl font-cal leading-tight mb-2">
              {mode === 'signin' ? 'Welcome back' : 'Join Blurby'}
            </h1>
            <p className="text-muted-foreground font-cal">
              {mode === 'signin'
                ? 'Sign in to access your privacy dashboard'
                : 'Create your account to get started'}
            </p>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-lg">
            <form className="space-y-6" action={formAction}>
              <input type="hidden" name="redirect" value={redirect || ''} />
              <input type="hidden" name="priceId" value={priceId || ''} />
              <input type="hidden" name="inviteId" value={inviteId || ''} />
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-cal">
                  Email
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
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-cal">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={
                    mode === 'signin' ? 'current-password' : 'new-password'
                  }
                  defaultValue={state.password}
                  required
                  minLength={8}
                  maxLength={100}
                  className="font-cal"
                  placeholder="Enter your password"
                />
              </div>

              {state?.error && (
                <div className="text-destructive text-sm">{state.error}</div>
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
                    Loading...
                  </>
                ) : (
                  <>
                    {mode === 'signin' ? 'Sign in' : 'Create Account'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground font-cal">
                    {mode === 'signin'
                      ? 'New to Blurby?'
                      : 'Already have an account?'}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full font-cal" asChild>
                  <Link
                    href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                      redirect ? `?redirect=${redirect}` : ''
                    }${priceId ? `&priceId=${priceId}` : ''}`}
                  >
                    {mode === 'signin'
                      ? 'Create an account'
                      : 'Sign in to existing account'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
