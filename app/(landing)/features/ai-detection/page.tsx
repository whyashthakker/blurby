import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Brain, Shield, Zap, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AiDetectionFeature() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5" />
            <span className="font-cal">AI-Powered Feature</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Smart AI Detection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced artificial intelligence automatically identifies and protects sensitive information like API keys, passwords, credit cards, and personal data in real-time as you share your screen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Never Forget to Protect Sensitive Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Human memory is fallible, especially during high-pressure presentations or live demos. Our AI never forgets and never misses sensitive information, providing consistent protection every time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">99.7% Accuracy Rate</h4>
                    <p className="text-sm text-muted-foreground">Trained on millions of data patterns for exceptional precision</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Millisecond Response Time</h4>
                    <p className="text-sm text-muted-foreground">Protects information faster than human perception</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Improves detection capabilities with each update</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8">
            <h3 className="font-cal text-xl mb-6">AI Detects These Data Types:</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-mono text-sm">API Keys: sk-1234567890abcdef...</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-mono text-sm">Credit Cards: 4242 4242 4242 4242</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="font-mono text-sm">Emails: john.doe@company.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-mono text-sm">Passwords: ••••••••••••</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-mono text-sm">Database URLs: postgresql://...</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-mono text-sm">Tokens: Bearer eyJ0eXAiOiJKV1...</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">How AI Detection Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-cal text-xl mb-4">1. Screen Analysis</h3>
              <p className="text-muted-foreground">
                AI continuously scans screen content using advanced computer vision and pattern recognition algorithms.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-cal text-xl mb-4">2. Pattern Matching</h3>
              <p className="text-muted-foreground">
                Machine learning models identify sensitive data patterns based on format, context, and visual characteristics.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-cal text-xl mb-4">3. Instant Protection</h3>
              <p className="text-muted-foreground">
                Sensitive areas are immediately blurred in real-time, protecting information before it becomes visible to viewers.
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-r from-primary/5 to-primary/10 text-center">
          <h2 className="text-3xl font-cal mb-4">Ready to Experience AI-Powered Privacy?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers, educators, and content creators who trust Blurby's AI to protect their sensitive information during every screen sharing session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                View All Features
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}