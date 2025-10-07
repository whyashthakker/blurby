import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blurby - Privacy-First Screen Sharing Protection',
  description: 'Protect sensitive information during screen sharing with automatic blurring of emails, API keys, and payment details. Perfect for instructors, developers, and professionals. Get lifetime access for $19.',
  metadataBase: new URL('https://blurby.xyz'),
  keywords: [
    'screen sharing protection',
    'privacy tool',
    'blur sensitive data',
    'API key protection',
    'secure screen sharing',
    'online teaching privacy',
    'screen protection',
    'data privacy',
    'presentation privacy',
    'developer privacy tool',
    'screen blur extension',
    'privacy extension'
  ],
  openGraph: {
    title: 'Blurby - Present Your Screen with Confidence',
    description: 'Automatically protect sensitive information during screen sharing. One-time $19 lifetime access.',
    url: 'https://blurby.xyz',
    siteName: 'Blurby',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blurby - Privacy-First Screen Sharing Protection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blurby - Privacy-First Screen Sharing',
    description: 'Protect sensitive data during screen sharing. One-time $19 lifetime access.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://blurby.xyz'
  },
  authors: [
    {
      name: 'Blurby Team',
      url: 'https://blurby.xyz'
    }
  ],
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}