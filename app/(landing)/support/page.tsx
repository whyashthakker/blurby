import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Mail, Shield, Clock, AlertCircle } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cal mb-4">Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need help with Blurby? We're here to assist you with any questions or issues you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-cal mb-6">Get Support</h2>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-cal text-lg mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Send us an email and we'll get back to you as soon as possible. We typically respond within 24 hours during business days.
                    </p>
                    <Button asChild>
                      <a href="mailto:support@explainx.ai" className="inline-flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        support@explainx.ai
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-cal mb-6">Privacy First</h2>
              <div className="space-y-4">
                <Card className="p-6 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-cal text-lg mb-2 text-green-800 dark:text-green-200">Your Data Stays Local</h3>
                      <p className="text-green-700 dark:text-green-300 leading-relaxed">
                        Blurby processes everything locally on your device. We don't capture, store, or transmit any of your sensitive information, API keys, passwords, or screen content. Your privacy is our priority.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-cal text-lg mb-2">Not Our Responsibility</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Since all data processing happens locally on your device, we cannot be held responsible for any data exposure or privacy issues that may occur. Blurby is a tool to help protect your privacy, but you remain responsible for your own data security practices.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-cal mb-6">Response Time</h2>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-cal text-lg mb-2">Support Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We aim to respond to all support emails within 24 hours during business days (Monday-Friday, 9 AM - 6 PM EST). For urgent issues, please include "URGENT" in your email subject line.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-cal mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-cal mb-2">How does Blurby protect my data?</h3>
                  <p className="text-sm text-muted-foreground">
                    All processing happens locally on your device. Your sensitive data never leaves your computer, ensuring complete privacy and security. We don't store or transmit any of your information.
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-cal mb-2">Which platforms does Blurby work with?</h3>
                  <p className="text-sm text-muted-foreground">
                    Blurby works with all major screen sharing platforms including Zoom, Google Meet, Microsoft Teams, Discord, and any screen recording software.
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-cal mb-2">What if Blurby doesn't work properly?</h3>
                  <p className="text-sm text-muted-foreground">
                    If you encounter any issues, please email us at support@explainx.ai with details about the problem. Include your browser version and operating system for faster troubleshooting.
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-cal mb-2">Do you offer refunds?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Blurby, contact us within 30 days of purchase for a full refund.
                  </p>
                </Card>

                <Card className="p-4">
                  <h3 className="font-cal mb-2">How do I report a bug or request a feature?</h3>
                  <p className="text-sm text-muted-foreground">
                    Send us an email at support@explainx.ai with details about the bug or feature request. We appreciate your feedback and use it to improve Blurby.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-cal mb-6">Company Information</h2>
              <Card className="p-6">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Company:</strong> AISOLO TECHNOLOGIES PRIVATE LIMITED
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Support Email:</strong> <a href="mailto:support@explainx.ai" className="text-primary hover:underline">support@explainx.ai</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Website:</strong> <a href="https://blurby.xyz" className="text-primary hover:underline">blurby.xyz</a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}