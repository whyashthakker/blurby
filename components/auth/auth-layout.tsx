'use client';

import Image from 'next/image';
import { Shield, Eye, Lock, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "AI-Powered Protection",
    description: "Automatically detects and blurs sensitive information during screen sharing"
  },
  {
    icon: Eye,
    title: "Real-Time Privacy",
    description: "One-click protection that works with Zoom, Meet, Teams, and more"
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Your data stays private - nothing is stored or transmitted to our servers"
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Press Ctrl+Shift+P to activate protection during any screen share"
  }
];

const benefits = [
  "Never accidentally expose passwords, API keys, or personal data",
  "Works seamlessly with all video conferencing platforms",
  "Lightweight browser extension with no performance impact",
  "Team collaboration features for enterprise users"
];

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left side - Features */}
        <div className="hidden lg:flex lg:w-1/2 bg-white p-12 flex-col justify-center">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logo.svg"
                alt="Blurby"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-cal font-semibold">Blurby</span>
            </div>
            
            <h2 className="text-3xl font-cal font-bold text-gray-900 mb-4">
              Protect Your Privacy During Screen Sharing
            </h2>
            
            <p className="text-lg text-gray-600 font-cal mb-8">
              Join thousands of professionals who trust Blurby to keep their sensitive data private during presentations and calls.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-cal font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-cal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-cal">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="lg:hidden text-center mb-8">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Blurby"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-cal font-semibold">Blurby</span>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-2xl font-cal font-bold text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-gray-600 font-cal">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}