import { Suspense } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SignUpForm } from '@/components/auth/sign-up-form';

export default function SignUpPage() {
  return (
    <Suspense>
      <AuthLayout
        title="Join Blurby"
        subtitle="Create your account and start protecting your privacy during screen shares"
      >
        <SignUpForm />
      </AuthLayout>
    </Suspense>
  );
}
