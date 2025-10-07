'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Key, CreditCard, Mail, Terminal, Zap, Shield, Lock, MousePointer, Layers } from "lucide-react"
import { useState } from "react"

const features = [
  {
    title: "Smart AI Detection",
    description: "Our advanced AI automatically identifies and protects sensitive information like API keys, passwords, credit cards, and personal data in real-time as you share your screen. No manual selection needed.",
    icon: Eye,
    demo: (_isBlurred: boolean) => (
      <div className="space-y-3 font-mono text-sm bg-black/90 text-green-400 rounded p-4">
        <div className="text-white">$ cat .env</div>
        <div className={`${_isBlurred ? 'blur-sm' : ''}`}>
          DATABASE_URL=postgresql://user:pass@localhost:5432/db<br/>
          API_KEY=sk-1234567890abcdef<br/>
          JWT_SECRET=your-secret-key
        </div>
        <div className="text-orange-400">⚡ Blurby detected 3 sensitive items</div>
      </div>
    ),
  },
  {
    title: "One-Click Element Blur",
    description: "Click on any element on your screen to instantly blur it. Perfect for hiding specific UI components, user data, or any content you want to keep private during presentations.",
    icon: MousePointer,
    demo: (isBlurred: boolean) => (
      <div className="p-4 bg-muted rounded">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">User Dashboard</span>
          <div className={`px-2 py-1 bg-primary/10 rounded text-sm ${isBlurred ? 'blur-sm' : ''}`}>
            john.doe@company.com
          </div>
        </div>
        <div className="space-y-2">
          <div className={`p-2 bg-muted rounded ${isBlurred ? 'blur-sm' : ''}`}>
            Account Balance: $15,247.83
          </div>
          <div className="p-2 bg-muted rounded">
            Last Login: Today, 2:30 PM
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Custom Blur Areas",
    description: "Draw rectangles anywhere on your screen to create custom blur zones. Ideal for protecting entire sections, forms, or any area containing sensitive information that needs to be hidden.",
    icon: Layers,
    demo: (isBlurred: boolean) => (
      <div className="p-4 border-2 border-dashed border-primary/30 rounded relative">
        <div className="text-sm text-muted-foreground mb-2">Payment Form</div>
        <div className={`space-y-3 ${isBlurred ? 'blur-sm' : ''}`}>
          <input placeholder="Card Number: 4242 4242 4242 4242" className="w-full p-2 border rounded" disabled />
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="MM/YY: 12/25" className="p-2 border rounded" disabled />
            <input placeholder="CVV: 123" className="p-2 border rounded" disabled />
          </div>
        </div>
        {isBlurred && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/20 px-3 py-1 rounded text-sm">Protected Area</div>
          </div>
        )}
      </div>
    ),
  },
  {
    title: "Zero Latency Performance",
    description: "Blurby works instantly without affecting your screen sharing performance. Built with optimized algorithms that process data locally, ensuring smooth presentations and recordings.",
    icon: Zap,
    demo: (_isBlurred: boolean) => (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-muted rounded">
          <span className="text-sm font-medium">Performance Metrics</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-muted-foreground">Real-time</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-muted rounded">
            <div className="text-lg font-bold text-green-600">0ms</div>
            <div className="text-xs text-muted-foreground">Latency</div>
          </div>
          <div className="p-2 bg-muted rounded">
            <div className="text-lg font-bold text-blue-600">60fps</div>
            <div className="text-xs text-muted-foreground">Framerate</div>
          </div>
          <div className="p-2 bg-muted rounded">
            <div className="text-lg font-bold text-purple-600">100%</div>
            <div className="text-xs text-muted-foreground">Local</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Privacy-First Architecture",
    description: "Your sensitive data never leaves your computer. All processing happens locally on your device with military-grade encryption, ensuring complete privacy and compliance with data protection regulations.",
    icon: Shield,
    demo: (_isBlurred: boolean) => (
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded">
          <Shield className="w-5 h-5 text-green-600" />
          <div>
            <div className="text-sm font-medium text-green-800 dark:text-green-200">Data Protected</div>
            <div className="text-xs text-green-600 dark:text-green-400">Processed locally on your device</div>
          </div>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>Encryption:</span>
            <span className="font-mono text-green-600">AES-256</span>
          </div>
          <div className="flex justify-between">
            <span>Data Transfer:</span>
            <span className="font-mono text-green-600">None</span>
          </div>
          <div className="flex justify-between">
            <span>GDPR Compliant:</span>
            <span className="font-mono text-green-600">Yes</span>
          </div>
        </div>
      </div>
    ),
  },
]

const useCases = [
  {
    title: "Live Coding Tutorials",
    description: "Perfect for YouTubers and educators teaching development. Keep API keys, database credentials, and personal info hidden while your audience learns.",
    icon: Terminal,
    preview: (isBlurred: boolean) => (
      <div className="space-y-3 font-mono text-sm">
        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
          <span>$ openai api keys create</span>
          <Key className="w-4 h-4" />
        </div>
        <div className={`p-3 bg-black/90 text-green-400 rounded ${isBlurred ? 'blur-sm' : ''}`}>
          Created API key: sk-7Ypolk...mB0s
        </div>
        <div className={`p-2 bg-muted/50 rounded ${isBlurred ? 'blur-sm' : ''}`}>
          export OPENAI_API_KEY=sk-7Ypolk...mB0s
        </div>
      </div>
    ),
  },
  {
    title: "Client Presentations",
    description: "Demonstrate your software or SaaS platform to clients while protecting sensitive customer data, internal information, and test credentials.",
    icon: Eye,
    preview: (isBlurred: boolean) => (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-muted rounded">
          <span className="font-medium">Customer Dashboard</span>
          <div className={`px-2 py-1 bg-primary/10 rounded text-sm ${isBlurred ? 'blur-sm' : ''}`}>
            acme-corp-admin@company.com
          </div>
        </div>
        <div className="grid gap-2">
          <div className={`p-2 bg-muted rounded ${isBlurred ? 'blur-sm' : ''}`}>
            Revenue: $2.4M this quarter
          </div>
          <div className="p-2 bg-muted rounded">
            Active Users: 15,847
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "E-commerce & Payment Demos",
    description: "Safely demonstrate payment flows, checkout processes, and financial data without exposing real credit cards, payment keys, or customer information.",
    icon: CreditCard,
    preview: (isBlurred: boolean) => (
      <div className="space-y-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Payment Information</label>
          <div className={`p-3 bg-muted rounded ${isBlurred ? 'blur-sm' : ''}`}>
            <div className="grid gap-1">
              <div className="font-mono">4242 4242 4242 4242</div>
              <div className="font-mono">12/25 - 123</div>
            </div>
          </div>
        </div>
        <Button className="w-full font-cal">Process $299.99</Button>
      </div>
    ),
  },
  {
    title: "Team Meetings & Standups",
    description: "Share your development environment during team meetings, code reviews, or stand-ups without accidentally exposing sensitive project details.",
    icon: Mail,
    preview: (isBlurred: boolean) => (
      <div className="space-y-3">
        <div className="flex items-center gap-2 p-2 bg-muted rounded">
          <span className="text-sm font-medium">slack-integration.js</span>
          <Lock className="w-4 h-4" />
        </div>
        <div className={`p-3 bg-muted rounded font-mono text-sm ${isBlurred ? 'blur-sm' : ''}`}>
          const SLACK_TOKEN = "xoxb-your-token-here"<br/>
          const WEBHOOK_URL = "https://hooks.slack.com/..."<br/>
          const ADMIN_EMAIL = "admin@yourcompany.com"
        </div>
      </div>
    ),
  },
  {
    title: "Database & DevOps Demos",
    description: "Show database configurations, server setups, and DevOps processes while keeping production credentials, connection strings, and infrastructure details secure.",
    icon: Lock,
    preview: (isBlurred: boolean) => (
      <div className="space-y-3 font-mono text-sm">
        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
          <span>docker-compose.yml</span>
          <Lock className="w-4 h-4" />
        </div>
        <div className={`p-3 bg-muted rounded ${isBlurred ? 'blur-sm' : ''}`}>
          <pre className="whitespace-pre-wrap text-xs">
{`environment:
  DB_HOST: prod-db-cluster.region.rds.amazonaws.com
  DB_PASSWORD: super_secure_password_123
  REDIS_URL: redis://prod-cache:6379
  JWT_SECRET: your-256-bit-secret`}
          </pre>
        </div>
      </div>
    ),
  },
]

export function FeaturesSection() {
  const [blurStates, setBlurStates] = useState<Record<string, boolean>>({
    features: true,
    useCases: true
  })

  const toggleBlur = (section: string) => {
    setBlurStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-cal mb-4">
            Protection When You Need It Most
          </h2>
          <p className="text-lg text-muted-foreground font-cal">
            Blurby automatically detects and protects sensitive information during screen sharing,
            letting you focus on what matters - your presentation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {features.map((feature, index) => {
            const featureKey = `feature-${index}`
            const isFeatureBlurred = blurStates[featureKey] ?? true
            
            return (
              <div 
                key={feature.title} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    <feature.icon className="w-16 h-16 text-primary" />
                    <h3 className="text-2xl font-cal">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => toggleBlur(featureKey)}
                    className="font-cal"
                  >
                    {isFeatureBlurred ? "Show Demo" : "Hide Demo"}
                  </Button>
                </div>
                
                {/* Demo Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Card className="p-6">
                    {feature.demo(isFeatureBlurred)}
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-6xl mx-auto mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-cal mb-4">Perfect for Every Use Case</h3>
            <p className="text-lg text-muted-foreground font-cal">
              From content creation to client presentations, Blurby adapts to your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const useCaseKey = `usecase-${index}`
              const isUseCaseBlurred = blurStates[useCaseKey] ?? true
              
              return (
                <Card key={useCase.title} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="space-y-3">
                      <useCase.icon className="w-12 h-12 text-primary" />
                      <h4 className="font-cal text-xl">{useCase.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                    </div>
                    <div className="flex-1">
                      {useCase.preview(isUseCaseBlurred)}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleBlur(useCaseKey)}
                      className="mt-4 font-cal"
                    >
                      {isUseCaseBlurred ? "Show Content" : "Blur Content"}
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}