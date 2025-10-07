import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Check, X } from "lucide-react"
import Link from "next/link"

const comparison = {
  blurby: {
    name: "Blurby",
    tagline: "AI-powered privacy protection",
    pros: [
      "Advanced AI detection of sensitive data",
      "Zero-click automatic protection", 
      "Custom blur areas with drag & drop",
      "Persistent blur settings",
      "Privacy-first local processing",
      "One-time payment ($19)",
      "Works with all screen sharing apps",
      "Real-time performance optimization"
    ]
  },
  competitor: {
    name: "BlurWeb",
    tagline: "Professional screen sharing protection",
    pros: [
      "Single-click blur functionality",
      "Blur area tool with rectangles",
      "Keep blur persistence",
      "Multi-platform compatibility",
      "Real-time data blurring",
      "Professional use cases"
    ],
    cons: [
      "No AI detection",
      "Manual selection required",
      "Higher pricing ($49+ lifetime)",
      "Limited automation",
      "Basic element recognition",
      "No automatic sensitive data detection"
    ]
  }
}

export default function BlurbyVsBlurWeb() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">
          Blurby vs BlurWeb: Complete Comparison
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compare Blurby's AI-powered automation with BlurWeb's manual professional solution
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <Card className="p-8 border-primary/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-cal text-primary mb-2">{comparison.blurby.name}</h2>
            <p className="text-muted-foreground">{comparison.blurby.tagline}</p>
          </div>
          <ul className="space-y-3">
            {comparison.blurby.pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{pro}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button className="w-full" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Blurby - $19
              </a>
            </Button>
          </div>
        </Card>

        <Card className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-cal mb-2">{comparison.competitor.name}</h2>
            <p className="text-muted-foreground">{comparison.competitor.tagline}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-green-600 mb-3">Pros</h3>
              <ul className="space-y-2">
                {comparison.competitor.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-red-600 mb-3">Cons</h3>
              <ul className="space-y-2">
                {comparison.competitor.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-cal text-center mb-12">Feature Comparison</h2>
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-cal">Feature</th>
                  <th className="text-center p-4 font-cal">Blurby</th>
                  <th className="text-center p-4 font-cal">BlurWeb</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">AI Detection</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Automatic Sensitive Data Recognition</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="w-5 h-5 text-red-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Single-Click Element Blur</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Custom Rectangle Areas</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Keep Blur Persistence</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Local Data Processing</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4 text-center text-sm">$19 lifetime</td>
                  <td className="p-4 text-center text-sm">$49+ lifetime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-cal mb-4">Get More for Less</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Blurby offers advanced AI automation at a fraction of BlurWeb's price, saving you time and money while providing superior protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
      <Footer />
    </div>
  )
}