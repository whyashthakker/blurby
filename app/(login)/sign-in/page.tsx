import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SignInForm } from '@/components/auth/sign-in-form';

export default function SignInPage() {
  return (
    <Suspense>
      <AuthLayout
        title="Welcome back"
        subtitle="Sign in to your Blurby account to access your privacy dashboard"
      >
        <SignInForm />
      </AuthLayout>
    </Suspense>
  );
}
