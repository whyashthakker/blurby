import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Video, Users, Monitor, Settings, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Zoom & Google Meet Privacy Integration | Blurby - Video Conference Security",
  description: "Seamless privacy protection for Zoom, Google Meet, Microsoft Teams, and all video conferencing platforms. Hide sensitive data during meetings.",
  keywords: "Zoom privacy, Google Meet security, video conference protection, meeting privacy, screen sharing security, Teams integration"
}

export default function ZoomGoogleMeetIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mb-6">
            <Video className="w-5 h-5" />
            <span className="font-cal">Video Conference Integration</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Zoom & Google Meet Privacy Integration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seamless privacy protection for all major video conferencing platforms. Blurby works automatically with Zoom, Google Meet, Microsoft Teams, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Universal Platform Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blurby automatically activates when you start screen sharing on any video conferencing platform. No configuration needed - just share your screen and your sensitive information is instantly protected.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">One-Click Activation</h4>
                    <p className="text-sm text-muted-foreground">Works the moment you start screen sharing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Zero Performance Impact</h4>
                    <p className="text-sm text-muted-foreground">No lag or delay in your video calls</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Background Operation</h4>
                    <p className="text-sm text-muted-foreground">Runs silently without interrupting meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <h3 className="font-cal text-xl mb-6">Supported Platforms:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                  <Video className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-cal mb-1">Zoom</h4>
                  <p className="text-sm text-muted-foreground">Full integration with screen sharing features</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded flex items-center justify-center">
                  <Users className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-cal mb-1">Google Meet</h4>
                  <p className="text-sm text-muted-foreground">Seamless browser-based protection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-cal mb-1">Microsoft Teams</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade privacy protection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center">
                  <Settings className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-cal mb-1">All Others</h4>
                  <p className="text-sm text-muted-foreground">Discord, Slack, WebEx, and more</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Perfect for Every Meeting Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Team Meetings</h3>
              <p className="text-muted-foreground text-sm">
                Share your screen during daily standups, sprint reviews, and team collaboration sessions with confidence.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Client Presentations</h3>
              <p className="text-muted-foreground text-sm">
                Demonstrate your software to clients and prospects without exposing internal data or sensitive information.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Training Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Conduct employee training and educational webinars with built-in privacy protection for all participants.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-cal text-2xl mb-4">Customer Success Story</h3>
            </div>
            <blockquote className="text-center text-lg text-muted-foreground italic mb-6">
              "We use Zoom for all our client demos. Before Blurby, we had to create fake environments just to avoid showing real customer data. Now we can use our actual platform with confidence. It's been a game-changer for our sales process."
            </blockquote>
            <div className="text-center">
              <p className="font-cal">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">VP of Sales, TechFlow Solutions</p>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Setup is Simple</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cal text-primary">1</span>
              </div>
              <h3 className="font-cal text-lg mb-2">Install Blurby</h3>
              <p className="text-sm text-muted-foreground">One-click installation from Chrome Web Store</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cal text-primary">2</span>
              </div>
              <h3 className="font-cal text-lg mb-2">Start Screen Sharing</h3>
              <p className="text-sm text-muted-foreground">Use any video platform as you normally would</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-cal text-primary">3</span>
              </div>
              <h3 className="font-cal text-lg mb-2">Automatic Protection</h3>
              <p className="text-sm text-muted-foreground">AI instantly protects your sensitive information</p>
            </div>
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Start Your Next Meeting with Confidence</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join professionals worldwide who trust Blurby to protect their privacy during video conferences and screen sharing sessions.
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