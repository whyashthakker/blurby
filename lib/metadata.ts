import { Metadata } from 'next'

const baseUrl = 'https://blurby.xyz'

export interface PageMetadata {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  twitterImage?: string
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/og-image.png',
  twitterImage = '/twitter-image.png'
}: PageMetadata): Metadata {
  const fullTitle = title === 'Blurby - Privacy-First Screen Sharing Protection' 
    ? title 
    : `${title} | Blurby`
  
  const url = `${baseUrl}${path}`
  
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
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
      'privacy extension',
      ...keywords
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Blurby',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [twitterImage],
    },
    alternates: {
      canonical: url
    },
    authors: [
      {
        name: 'Blurby Team',
        url: baseUrl
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
}

export const pageMetadata = {
  home: {
    title: 'Blurby - Privacy-First Screen Sharing Protection',
    description: 'Protect sensitive information during screen sharing with automatic blurring of emails, API keys, and payment details. Perfect for instructors, developers, and professionals. Get lifetime access for $19.',
    path: '',
    keywords: ['screen sharing', 'privacy protection', 'automatic blur', 'lifetime access']
  },
  about: {
    title: 'About Blurby',
    description: 'Learn about Blurby\'s mission to make screen sharing secure and worry-free for content creators, educators, and professionals worldwide. Discover our privacy-first approach.',
    path: '/about',
    keywords: ['about blurby', 'company story', 'privacy first', 'team', 'mission']
  },
  contact: {
    title: 'Contact Blurby Support',
    description: 'Get help with Blurby privacy protection. Contact our support team for technical issues, billing questions, or feature requests. Fast response within 24 hours.',
    path: '/contact',
    keywords: ['contact support', 'help', 'customer service', 'technical support', 'billing']
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Blurby\'s privacy policy. Learn how we protect your data with local processing and zero data collection. Your privacy is our top priority.',
    path: '/privacy',
    keywords: ['privacy policy', 'data protection', 'local processing', 'no data collection']
  },
  terms: {
    title: 'Terms of Service',
    description: 'Blurby terms of service and user agreement. Understand your rights and responsibilities when using our privacy protection software.',
    path: '/terms',
    keywords: ['terms of service', 'user agreement', 'legal', 'licensing']
  },
  features: {
    aiDetection: {
      title: 'AI-Powered Detection',
      description: 'Advanced AI technology automatically detects and blurs sensitive information like API keys, passwords, and personal data during screen sharing in real-time.',
      path: '/features/ai-detection',
      keywords: ['AI detection', 'automatic blur', 'real-time protection', 'machine learning']
    },
    apiKeyProtection: {
      title: 'API Key Protection',
      description: 'Automatically detect and blur API keys, tokens, and credentials during screen sharing. Perfect for developers and security-conscious professionals.',
      path: '/features/api-key-protection',
      keywords: ['API key protection', 'credential security', 'developer tools', 'token protection']
    },
    customBlurAreas: {
      title: 'Custom Blur Areas',
      description: 'Define custom areas to blur on your screen. Perfect for protecting specific regions with sensitive information during presentations and tutorials.',
      path: '/features/custom-blur-areas',
      keywords: ['custom blur', 'manual selection', 'area protection', 'presentation privacy']
    },
    realTimeBlur: {
      title: 'Real-Time Blur Detection',
      description: 'Instant detection and blurring of sensitive content as it appears on your screen. No delays, no exposure - complete real-time protection.',
      path: '/features/real-time-blur-detection',
      keywords: ['real-time blur', 'instant protection', 'live detection', 'immediate response']
    },
    screenRecording: {
      title: 'Screen Recording Privacy',
      description: 'Protect sensitive information during screen recording sessions. Automatically blur confidential data in recorded content for safe sharing.',
      path: '/features/screen-recording-privacy',
      keywords: ['screen recording', 'recording privacy', 'video protection', 'content security']
    },
    videoIntegration: {
      title: 'Zoom & Google Meet Integration',
      description: 'Seamless integration with Zoom, Google Meet, Microsoft Teams, and other video conferencing platforms. Protect your privacy during video calls.',
      path: '/features/zoom-google-meet-integration',
      keywords: ['zoom integration', 'google meet', 'video conferencing', 'meeting privacy']
    }
  },
  blog: {
    main: {
      title: 'Blurby Blog - Privacy & Screen Sharing Tips',
      description: 'Latest insights on screen sharing privacy, security best practices, and tips for content creators and developers. Stay informed about digital privacy.',
      path: '/blog',
      keywords: ['privacy blog', 'screen sharing tips', 'security insights', 'content creator advice']
    },
    aiPoweredBlur: {
      title: 'AI-Powered Blur Technology Explained',
      description: 'Deep dive into how AI-powered blur technology works to protect sensitive information during screen sharing. Learn about machine learning in privacy protection.',
      path: '/blog/ai-powered-blur-technology-explained',
      keywords: ['AI blur technology', 'machine learning privacy', 'automated detection', 'tech explanation']
    },
    apiKeySecurity: {
      title: 'API Key Security for Developers',
      description: 'Essential guide to API key security best practices for developers. Learn how to protect sensitive credentials during coding tutorials and presentations.',
      path: '/blog/api-key-security-developers',
      keywords: ['API key security', 'developer security', 'credential protection', 'coding best practices']
    },
    contentCreatorPrivacy: {
      title: 'Content Creator Privacy Best Practices',
      description: 'Complete guide to privacy protection for content creators, streamers, and educators. Learn how to share your screen safely without exposing sensitive data.',
      path: '/blog/content-creator-privacy-best-practices',
      keywords: ['content creator privacy', 'streaming security', 'educator protection', 'tutorial privacy']
    },
    screenSharingGuide: {
      title: 'Ultimate Guide to Screen Sharing Privacy',
      description: 'Comprehensive guide to secure screen sharing. Learn advanced techniques to protect sensitive information during presentations, meetings, and tutorials.',
      path: '/blog/ultimate-guide-screen-sharing-privacy',
      keywords: ['screen sharing guide', 'privacy guide', 'secure presentations', 'meeting security']
    }
  },
  compare: {
    blinqo: {
      title: 'Blurby vs Blinqo Comparison',
      description: 'Compare Blurby and Blinqo privacy protection tools. See features, pricing, and capabilities side-by-side to choose the best screen sharing solution.',
      path: '/compare/blinqo',
      keywords: ['blurby vs blinqo', 'privacy tool comparison', 'screen protection comparison']
    },
    blurit: {
      title: 'Blurby vs BlurIt Comparison',
      description: 'Detailed comparison between Blurby and BlurIt privacy solutions. Compare features, performance, and pricing for informed decision making.',
      path: '/compare/blurit',
      keywords: ['blurby vs blurit', 'privacy software comparison', 'blur tool comparison']
    },
    blurpage: {
      title: 'Blurby vs BlurPage Comparison',
      description: 'Compare Blurby and BlurPage privacy protection features. Analyze differences in AI detection, pricing, and screen sharing capabilities.',
      path: '/compare/blurpage',
      keywords: ['blurby vs blurpage', 'privacy comparison', 'screen blur comparison']
    },
    blurweb: {
      title: 'Blurby vs BlurWeb Comparison',
      description: 'Side-by-side comparison of Blurby and BlurWeb privacy tools. Discover which solution offers better protection for your screen sharing needs.',
      path: '/compare/blurweb',
      keywords: ['blurby vs blurweb', 'web privacy comparison', 'privacy tool analysis']
    },
    zeroblur: {
      title: 'Blurby vs ZeroBlur Comparison',
      description: 'Compare Blurby and ZeroBlur privacy protection solutions. Evaluate features, pricing, and effectiveness for secure screen sharing.',
      path: '/compare/zeroblur',
      keywords: ['blurby vs zeroblur', 'zero blur comparison', 'privacy solution comparison']
    }
  },
  useCases: {
    liveCoding: {
      title: 'Live Coding Tutorial Privacy Protection',
      description: 'Protect sensitive code, API keys, and credentials during live coding tutorials. Perfect solution for developers teaching online or streaming code.',
      path: '/use-cases/live-coding-tutorials',
      keywords: ['live coding privacy', 'coding tutorial protection', 'developer streaming', 'code privacy']
    }
  }
} as const