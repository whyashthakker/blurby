import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Video, Code, Users, Shield, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LiveCodingTutorials() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mb-6">
            <Video className="w-5 h-5" />
            <span className="font-cal">For Content Creators</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Live Coding Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Perfect for YouTubers, educators, and developers teaching programming. Keep API keys, database credentials, and personal info hidden while your audience learns from real code examples.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Teach with Real Code, Protect Real Secrets</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best coding tutorials use real applications and authentic development environments. But this often means exposing sensitive information like API keys, database URLs, and personal data. Blurby lets you teach with confidence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">No More Fake Demos</h4>
                    <p className="text-sm text-muted-foreground">Use your real development environment without worry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Focus on Teaching</h4>
                    <p className="text-sm text-muted-foreground">Stop worrying about what's on screen and focus on your content</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Professional Quality</h4>
                    <p className="text-sm text-muted-foreground">Your audience sees polished, professional presentations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <h3 className="font-cal text-xl mb-6">Common Tutorial Scenarios:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">API Integration Tutorials</h4>
                  <p className="text-sm text-muted-foreground">Show real API calls without exposing keys</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Database Connections</h4>
                  <p className="text-sm text-muted-foreground">Demonstrate database setup with real credentials hidden</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Authentication Systems</h4>
                  <p className="text-sm text-muted-foreground">Build login systems without revealing secrets</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Play className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Live Debugging</h4>
                  <p className="text-sm text-muted-foreground">Debug real issues without exposing sensitive logs</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Perfect for Every Tutorial Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-cal mb-2">YouTube</h3>
              <p className="text-sm text-muted-foreground">Coding tutorials and programming courses</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-cal mb-2">Twitch</h3>
              <p className="text-sm text-muted-foreground">Live coding streams and development sessions</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-cal mb-2">Zoom</h3>
              <p className="text-sm text-muted-foreground">Online classes and workshop presentations</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-cal mb-2">Discord</h3>
              <p className="text-sm text-muted-foreground">Community coding sessions and help desk</p>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="p-8">
            <h3 className="font-cal text-2xl mb-6">Before Blurby</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-sm text-muted-foreground">Constantly worried about exposing secrets</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-sm text-muted-foreground">Used fake data that felt unrealistic</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-sm text-muted-foreground">Spent hours editing out mistakes</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-sm text-muted-foreground">Lost focus during live streams</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 border-green-200 dark:border-green-800">
            <h3 className="font-cal text-2xl mb-6">With Blurby</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Complete confidence during live coding</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Use real, production-like environments</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Zero post-processing required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Focus entirely on teaching quality content</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Start Teaching with Confidence</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who use Blurby to create professional, engaging programming tutorials without worrying about privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                View All Use Cases
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}