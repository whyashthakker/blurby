import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Calendar, Clock, Video, Users, Shield, Camera, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ContentCreatorPrivacyBestPractices() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>•</span>
            <span>Education</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-cal mb-4">
            Privacy Best Practices for Content Creators and Educators
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-10-03">October 3, 2025</time>
            </div>
            <span>By Blurby Team</span>
          </div>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Content creators, YouTubers, and educators face unique privacy challenges when sharing their screens with audiences. Here are essential privacy tips to protect yourself and your audience while creating engaging content.
          </p>

          <h2 className="text-2xl font-cal mb-4">Pre-Recording Setup</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Before hitting the record button, take these essential steps to protect your privacy:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Video className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-cal text-lg mb-2">Clean Your Desktop</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Remove personal files and documents</li>
                <li>• Clear browser bookmarks toolbar</li>
                <li>• Close unnecessary applications</li>
                <li>• Use a generic wallpaper</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-cal text-lg mb-2">Browser Privacy</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Clear browsing history and autocomplete</li>
                <li>• Use incognito/private browsing mode</li>
                <li>• Disable password autofill</li>
                <li>• Log out of personal accounts</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-2xl font-cal mb-4">Live Streaming Privacy</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Live streaming presents additional challenges since you can't edit out mistakes:
          </p>

          <Card className="p-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-cal text-yellow-800 dark:text-yellow-200 mb-2">Live Stream Checklist</h3>
                <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                  <li>• Turn off all notifications (phone, computer, browser)</li>
                  <li>• Use a dedicated streaming profile or user account</li>
                  <li>• Test your screen share setup before going live</li>
                  <li>• Have a moderator monitoring chat for security alerts</li>
                  <li>• Keep sensitive tabs in a separate browser window</li>
                </ul>
              </div>
            </div>
          </Card>

          <h3 className="text-xl font-cal mb-3">Educational Content Specific Tips</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When creating educational content, you often need to show real applications and tools:
          </p>
          
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li>Use demo accounts with fake but realistic data</li>
            <li>Create test environments separate from production</li>
            <li>Use placeholder content that looks authentic</li>
            <li>Blur out any real user information in screenshots</li>
            <li>Never use real API keys or credentials in tutorials</li>
          </ul>

          <h2 className="text-2xl font-cal mb-4">Protecting Your Audience</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            As a content creator, you're also responsible for protecting your audience's privacy:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-cal text-lg mb-2">Community Guidelines</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Never share viewer personal information</li>
                <li>• Blur usernames in community screenshots</li>
                <li>• Don't read email addresses aloud</li>
                <li>• Moderate chat for personal info sharing</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Camera className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-cal text-lg mb-2">Recording Considerations</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Review recordings before publishing</li>
                <li>• Edit out accidental personal info</li>
                <li>• Consider audio privacy too (notifications)</li>
                <li>• Use consistent privacy standards</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-2xl font-cal mb-4">Platform-Specific Privacy Settings</h2>

          <h3 className="text-xl font-cal mb-3">YouTube</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
            <li>Configure analytics to hide personal information</li>
            <li>Use YouTube Studio's blur face feature for sensitive content</li>
            <li>Set up custom thumbnails to avoid accidental frame exposure</li>
          </ul>

          <h3 className="text-xl font-cal mb-3">Twitch</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
            <li>Use scene transitions to switch between safe and work content</li>
            <li>Set up hotkeys for quick scene switching</li>
            <li>Configure bot commands to handle privacy-related questions</li>
          </ul>

          <h3 className="text-xl font-cal mb-3">Zoom/Teams/Discord</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li>Always use "Share Application" instead of "Share Screen" when possible</li>
            <li>Test screen sharing permissions before starting</li>
            <li>Use virtual backgrounds when showing your workspace</li>
          </ul>

          <h2 className="text-2xl font-cal mb-4">Emergency Protocols</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Even with the best preparation, accidents happen. Have these protocols ready:
          </p>

          <Card className="p-6 border-red-200 dark:border-red-800 mb-6">
            <h4 className="font-cal text-lg mb-2 text-red-800 dark:text-red-200">If You Accidentally Expose Sensitive Information</h4>
            <ol className="text-red-700 dark:text-red-300 text-sm space-y-1 list-decimal list-inside">
              <li>Immediately stop screen sharing or cover the information</li>
              <li>Acknowledge the mistake to your audience</li>
              <li>Change any exposed passwords or API keys immediately</li>
              <li>Edit out the exposure from recorded content before publishing</li>
              <li>Review and improve your privacy setup for next time</li>
            </ol>
          </Card>

          <h2 className="text-2xl font-cal mb-4">Tools and Resources</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Invest in tools that make privacy protection automatic and effortless:
          </p>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-cal mb-4">Automated Privacy Protection</h3>
            <p className="text-muted-foreground mb-6">
              Tools like Blurby use AI to automatically detect and blur sensitive information in real-time, eliminating the risk of human error during live streams and recordings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                  Get Blurby - $19
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  Learn More
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
            <div className="flex gap-4">
              <Link href="/blog/zoom-google-meet-privacy-tips" className="text-primary hover:underline text-sm">
                Next: Platform Comparison →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}