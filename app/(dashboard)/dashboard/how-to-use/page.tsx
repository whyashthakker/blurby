'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle, Download, Key, Monitor, Shield } from 'lucide-react';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function LicenseKeyDisplay() {
  const { data: licenseData } = useSWR('/api/user/license', fetcher);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!licenseData?.licenseKey) {
    return (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <Key className="w-5 h-5 text-amber-600" />
            <div>
              <h3 className="font-cal font-medium text-amber-800">No License Key</h3>
              <p className="text-sm text-amber-600">
                You need to purchase a plan to get your license key
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-cal flex items-center gap-2">
          <Key className="w-5 h-5" />
          Your License Key
        </CardTitle>
      </CardHeader>
      <CardContent>
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
          <p className="text-xs text-green-600 text-center mt-2">
            License key copied to clipboard!
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function HowToUsePage() {
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
          <h1 className="text-lg lg:text-2xl font-cal font-medium">How to Use Blurby</h1>
          <p className="text-gray-600 font-cal text-sm">Set up privacy protection in 3 easy steps</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Download Extension */}
        <Card>
          <CardHeader>
            <CardTitle className="font-cal flex items-center gap-2">
              <Download className="w-5 h-5" />
              Step 1: Install the Browser Extension
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 font-cal mb-4">
              Add the Blurby extension to your browser to start protecting your sensitive data.
            </p>
            <Button asChild className="font-cal">
              <a 
                href="https://chrome.google.com/webstore/detail/blurby" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Install Chrome Extension
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Step 2: License Key */}
        <Card>
          <CardHeader>
            <CardTitle className="font-cal flex items-center gap-2">
              <Key className="w-5 h-5" />
              Step 2: Enter Your License Key
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 font-cal mb-4">
              Copy your license key and add it to the Blurby extension settings.
            </p>
            <Suspense fallback={
              <Card className="h-[120px]">
                <CardContent className="pt-6">
                  <p className="font-cal">Loading license key...</p>
                </CardContent>
              </Card>
            }>
              <LicenseKeyDisplay />
            </Suspense>
          </CardContent>
        </Card>

        {/* Step 3: Activate Protection */}
        <Card>
          <CardHeader>
            <CardTitle className="font-cal flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Step 3: Activate Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600 font-cal">
                Use the keyboard shortcut to automatically blur sensitive information while on calls:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-gray-600" />
                  <div>
                    <h4 className="font-cal font-medium">Keyboard Shortcut</h4>
                    <p className="text-sm text-gray-600 font-cal">
                      Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Ctrl + Shift + P</kbd> to activate automatic blurring
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-cal font-medium text-blue-800 mb-2">How it works:</h4>
                <ul className="text-sm text-blue-700 font-cal space-y-1">
                  <li>• Blurby automatically detects sensitive information on your screen</li>
                  <li>• Press the shortcut when sharing your screen during calls</li>
                  <li>• Sensitive data like passwords, keys, and personal info gets blurred</li>
                  <li>• Your privacy is protected without interrupting your presentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Tips */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="font-cal text-green-800">💡 Pro Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-700 font-cal space-y-2">
              <li>• Test the extension before important calls to ensure it's working correctly</li>
              <li>• The extension works with Zoom, Google Meet, Teams, and other screen sharing tools</li>
              <li>• You can customize blur settings in the extension options</li>
              <li>• The protection is active only when you use the keyboard shortcut</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}