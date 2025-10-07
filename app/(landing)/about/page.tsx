import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Users, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">About Blurby</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to make screen sharing secure and worry-free for content creators, educators, and professionals worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-cal">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Blurby was born from a common problem experienced by developers and content creators everywhere: the fear of accidentally exposing sensitive information during screen sharing sessions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            After witnessing countless incidents where API keys, passwords, and personal data were inadvertently shared during live streams, tutorials, and client presentations, we knew there had to be a better way.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of privacy-focused engineers and designers created Blurby to solve this problem once and for all, using advanced AI technology to automatically detect and protect sensitive information in real-time.
          </p>
        </div>
        <Card className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-cal mb-2">Privacy First</h3>
              <p className="text-muted-foreground text-sm">
                Your data never leaves your device. Everything is processed locally with military-grade security.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-cal text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-cal mb-3">User-Centric</h3>
            <p className="text-muted-foreground text-sm">
              Every feature we build starts with understanding our users' real-world needs and challenges.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-cal mb-3">Innovation</h3>
            <p className="text-muted-foreground text-sm">
              We leverage cutting-edge AI technology to solve complex privacy challenges in simple, elegant ways.
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-cal mb-3">Community</h3>
            <p className="text-muted-foreground text-sm">
              We're building for a global community of creators, educators, and professionals who share knowledge.
            </p>
          </Card>
        </div>
      </div>

        <div className="text-center bg-muted/30 rounded-xl p-12">
          <h2 className="text-3xl font-cal mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help us make screen sharing safe and secure for everyone. Join thousands of professionals who trust Blurby to protect their sensitive information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Started Today
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}