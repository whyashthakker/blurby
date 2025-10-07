import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Zap, Brain, Eye, Clock, CheckCircle, Activity } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Real-Time AI Blur Detection | Blurby - Instant Privacy Protection",
  description: "Advanced AI-powered real-time detection and blurring of sensitive information. Zero-latency privacy protection for live streaming and screen sharing.",
  keywords: "real-time blur detection, AI privacy protection, instant blur technology, live stream security, zero latency privacy"
}

export default function RealTimeBlurDetection() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-cal">Real-Time AI Technology</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Real-Time AI Blur Detection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lightning-fast AI detection and blurring of sensitive information in real-time. Zero latency, maximum protection for live streaming and screen sharing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Instant Protection, Zero Delay</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our advanced AI processes your screen content in real-time, detecting and blurring sensitive information instantly. Experience seamless protection without any noticeable delay or performance impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">0ms Latency</h4>
                    <p className="text-sm text-muted-foreground">Process and blur content instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">60 FPS Performance</h4>
                    <p className="text-sm text-muted-foreground">Maintains smooth frame rates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Local Processing</h4>
                    <p className="text-sm text-muted-foreground">All AI computation happens on your device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <h3 className="font-cal text-xl mb-6">How It Works:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Eye className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Screen Analysis</h4>
                  <p className="text-sm text-muted-foreground">AI scans your screen content continuously</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Brain className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Pattern Recognition</h4>
                  <p className="text-sm text-muted-foreground">Identifies sensitive data patterns instantly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Instant Blurring</h4>
                  <p className="text-sm text-muted-foreground">Applies blur protection in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Activity className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Continuous Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Adapts to changes as you work</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Advanced AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Continuously learns and improves detection accuracy based on patterns and user feedback.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Computer Vision</h3>
              <p className="text-muted-foreground text-sm">
                Advanced OCR and image recognition to detect text and visual elements containing sensitive data.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Edge Computing</h3>
              <p className="text-muted-foreground text-sm">
                All processing happens locally on your device for maximum speed and privacy protection.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cal text-2xl mb-4">Performance Metrics</h3>
                <p className="text-muted-foreground mb-6">
                  Blurby's optimized AI engine delivers industry-leading performance for real-time privacy protection.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Detection Accuracy</span>
                    <span className="font-bold text-green-600">99.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Processing Latency</span>
                    <span className="font-bold text-green-600">&lt;1ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="font-bold text-green-600">&lt;5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="font-bold text-green-600">&lt;100MB</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-24 h-24 text-primary mx-auto mb-4" />
                <h4 className="font-cal text-xl mb-2">Real-Time Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Processes 60 frames per second with zero noticeable delay
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">What Gets Detected</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">API</span>
              </div>
              <h4 className="font-cal mb-1">API Keys</h4>
              <p className="text-xs text-muted-foreground">OpenAI, AWS, Google Cloud</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">@</span>
              </div>
              <h4 className="font-cal mb-1">Email Addresses</h4>
              <p className="text-xs text-muted-foreground">Personal and business emails</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">***</span>
              </div>
              <h4 className="font-cal mb-1">Passwords</h4>
              <p className="text-xs text-muted-foreground">Login credentials and secrets</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">💳</span>
              </div>
              <h4 className="font-cal mb-1">Payment Info</h4>
              <p className="text-xs text-muted-foreground">Credit cards and financial data</p>
            </Card>
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Experience Zero-Latency Protection</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't compromise between security and performance. Get instant AI-powered privacy protection that works as fast as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">
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