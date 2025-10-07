import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Key, Code, Shield, AlertTriangle, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "API Key Protection & Security | Blurby - Hide Developer Credentials",
  description: "Automatically detect and hide API keys, tokens, and credentials during screen sharing. Essential protection for developers and software teams.",
  keywords: "API key protection, developer security, credential hiding, token security, programming privacy, code security"
}

export default function ApiKeyProtection() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full mb-6">
            <Key className="w-5 h-5" />
            <span className="font-cal">Developer Security</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            API Key Protection & Security
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Automatically detect and hide API keys, authentication tokens, and sensitive credentials during code reviews, demos, and live coding sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Never Expose Credentials Again</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                API key exposure is one of the most common security vulnerabilities in software development. Blurby's advanced AI recognizes and protects various types of credentials automatically, keeping your applications secure.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Pattern Recognition</h4>
                    <p className="text-sm text-muted-foreground">Detects various API key formats and patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Multi-Platform Support</h4>
                    <p className="text-sm text-muted-foreground">Works with AWS, Google Cloud, OpenAI, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Environment Files</h4>
                    <p className="text-sm text-muted-foreground">Automatically protects .env and config files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
            <h3 className="font-cal text-xl mb-6">Protected Credential Types:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Code className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">OpenAI API Keys</h4>
                  <p className="text-sm text-muted-foreground">sk-*, org-* patterns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Shield className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">AWS Credentials</h4>
                  <p className="text-sm text-muted-foreground">Access keys and secret keys</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Key className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">JWT Tokens</h4>
                  <p className="text-sm text-muted-foreground">Bearer tokens and session keys</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Database URLs</h4>
                  <p className="text-sm text-muted-foreground">Connection strings with credentials</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Essential for Development Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Code Reviews</h3>
              <p className="text-muted-foreground text-sm">
                Share your screen during code reviews without accidentally exposing API keys or secrets in your codebase.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Team Standup</h3>
              <p className="text-muted-foreground text-sm">
                Demonstrate progress and debug issues with your team while keeping credentials secure and protected.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Client Demos</h3>
              <p className="text-muted-foreground text-sm">
                Show your application to clients and stakeholders without revealing internal API keys or system credentials.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-cal text-xl text-yellow-800 dark:text-yellow-200 mb-3">Why API Key Protection Matters</h3>
                <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                  <p>• <strong>$4.35 million</strong> - Average cost of a data breach in 2023</p>
                  <p>• <strong>73%</strong> of security incidents involve exposed credentials</p>
                  <p>• <strong>15 minutes</strong> - Average time for attackers to find exposed API keys</p>
                  <p>• <strong>$50,000+</strong> - Potential costs from compromised cloud accounts</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Protect Your Credentials Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't risk your security. Join thousands of developers who use Blurby to keep their API keys and credentials safe during every screen sharing session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/use-cases/live-coding-tutorials">
                Live Coding Use Case
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}