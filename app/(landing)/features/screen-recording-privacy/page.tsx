import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Video, Shield, Eye, Clock, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Screen Recording Privacy Protection | Blurby - Hide Sensitive Data",
  description: "Protect sensitive information during screen recordings with AI-powered blur technology. Perfect for tutorials, demos, and content creation.",
  keywords: "screen recording privacy, video privacy protection, tutorial recording, content creation security, sensitive data protection"
}

export default function ScreenRecordingPrivacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-full mb-6">
            <Video className="w-5 h-5" />
            <span className="font-cal">Screen Recording Protection</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Screen Recording Privacy Protection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create professional screen recordings and tutorials without worrying about exposing sensitive information. Blurby automatically protects your privacy during every recording session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Record with Confidence</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're creating educational content, product demos, or tutorial videos, Blurby ensures your sensitive data stays protected. Our AI automatically detects and blurs confidential information in real-time during recording.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Real-Time Protection</h4>
                    <p className="text-sm text-muted-foreground">AI detects sensitive data as you record</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Zero Post-Processing</h4>
                    <p className="text-sm text-muted-foreground">No need to edit out sensitive information later</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Professional Quality</h4>
                    <p className="text-sm text-muted-foreground">Clean recordings ready for immediate publishing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
            <h3 className="font-cal text-xl mb-6">What Gets Protected:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">API Keys & Tokens</h4>
                  <p className="text-sm text-muted-foreground">Authentication credentials and access tokens</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Eye className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Personal Information</h4>
                  <p className="text-sm text-muted-foreground">Email addresses, phone numbers, names</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Database Credentials</h4>
                  <p className="text-sm text-muted-foreground">Connection strings and passwords</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Users className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Customer Data</h4>
                  <p className="text-sm text-muted-foreground">Client information and business details</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Perfect for Content Creators</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">YouTube Tutorials</h3>
              <p className="text-muted-foreground text-sm">
                Create programming and software tutorials without exposing your development credentials or personal information.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Product Demos</h3>
              <p className="text-muted-foreground text-sm">
                Showcase your software or platform while keeping customer data and internal information secure.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Training Videos</h3>
              <p className="text-muted-foreground text-sm">
                Record employee training sessions and educational content with built-in privacy protection.
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Start Recording Securely</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who trust Blurby to protect their sensitive information during screen recordings.
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