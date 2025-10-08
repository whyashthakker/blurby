import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Zap, Shield, Users, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Shield,
    text: "AI-powered sensitive data detection",
    description: "Automatically identifies API keys, passwords, emails"
  },
  {
    icon: Zap,
    text: "Zero-click privacy protection",
    description: "Works instantly without manual configuration"
  },
  {
    icon: Users,
    text: "All screen sharing platforms",
    description: "Zoom, Teams, Google Meet, Discord, OBS"
  },
  {
    icon: Clock,
    text: "Real-time blur controls",
    description: "Individual controls for each component"
  },
  "Custom blur areas with drag & drop",
  "Multiple monitor support",
  "Persistent blur settings",
  "Local processing (privacy-first)",
  "Free lifetime updates",
  "Professional email support",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-cal mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground font-cal">
            One payment, lifetime protection. Join thousands of professionals who chose Blurby for their privacy needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 font-cal text-sm">
              Most Popular
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-1.5 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-cal">Launch Special - 61% Off</span>
                </div>
                
                <h3 className="font-cal text-3xl mb-2">Lifetime Access</h3>
                <div className="flex items-baseline gap-3 justify-center lg:justify-start mb-4">
                  <span className="text-5xl font-cal text-primary">$19</span>
                  <div className="flex flex-col">
                    <span className="text-lg text-muted-foreground line-through">$49</span>
                    <span className="text-sm text-green-600 font-medium">Save $30</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
                  Everything you need to protect your privacy during screen sharing. No monthly fees, no limits.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Instant download & setup</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>Join 10,000+ protected users</span>
                  </div>
                </div>

                <Button size="lg" className="font-cal w-full lg:w-auto" asChild>
                  <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                    Get Lifetime Access - $19
                  </a>
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-cal text-xl mb-6 text-center lg:text-left">Everything Included:</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {typeof feature === 'object' ? (
                        <>
                          <feature.icon className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <div>
                            <div className="font-medium">{feature.text}</div>
                            <div className="text-sm text-muted-foreground">{feature.description}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-4">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-cal mb-1">Secure Payment</h4>
              <p className="text-sm text-muted-foreground">Protected by industry-standard encryption</p>
            </Card>
            <Card className="p-4">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-cal mb-1">Instant Access</h4>
              <p className="text-sm text-muted-foreground">Download immediately after purchase</p>
            </Card>
            <Card className="p-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-cal mb-1">Trusted by Pros</h4>
              <p className="text-sm text-muted-foreground">Used by developers worldwide</p>
            </Card>
          </div>
          
          <p className="text-muted-foreground font-cal text-sm">
            Questions? Contact us at support@explainx.ai • No recurring charges • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}