import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about Blurby? Need help with privacy protection? We're here to help you secure your screen sharing experience.
        </p>
        </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-cal mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-cal text-lg mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-2">
                    Get help with technical issues, billing questions, or feature requests.
                  </p>
                  <a href="mailto:support@blurby.app" className="text-primary hover:underline">
                    support@blurby.app
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-cal text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-2">
                    Chat with our team in real-time for immediate assistance.
                  </p>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-cal text-lg mb-2">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-cal text-lg mb-2">Company</h3>
                  <p className="text-muted-foreground">
                    AISOLO TECHNOLOGIES PRIVATE LIMITED
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-cal mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-cal mb-2">How does Blurby protect my data?</h3>
                <p className="text-sm text-muted-foreground">
                  All processing happens locally on your device. Your sensitive data never leaves your computer, ensuring complete privacy and security.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-cal mb-2">Which platforms does Blurby work with?</h3>
                <p className="text-sm text-muted-foreground">
                  Blurby works with all major screen sharing platforms including Zoom, Google Meet, Microsoft Teams, Discord, and any screen recording software.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-cal mb-2">Is there a free trial available?</h3>
                <p className="text-sm text-muted-foreground">
                  Blurby is available for a one-time payment of $19. This gives you lifetime access to all current and future features.
                </p>
              </Card>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-cal mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select a topic</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feature">Feature Request</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  )
}