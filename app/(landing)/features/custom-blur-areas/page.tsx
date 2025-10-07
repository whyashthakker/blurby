import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Layers, MousePointer, Square, Move, CheckCircle, Palette } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Custom Blur Areas & Manual Selection | Blurby - Precise Privacy Control",
  description: "Create custom blur zones and manually select areas to protect. Perfect for precise privacy control during presentations and demos.",
  keywords: "custom blur areas, manual blur selection, precision privacy control, selective screen protection, presentation privacy"
}

export default function CustomBlurAreas() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full mb-6">
            <Layers className="w-5 h-5" />
            <span className="font-cal">Custom Protection</span>
          </div>
          <h1 className="text-5xl font-cal mb-6">
            Custom Blur Areas & Manual Selection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take complete control of your privacy with custom blur zones and manual selection tools. Perfect for protecting specific areas during presentations and demos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-cal mb-4">Precision Privacy Control</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sometimes you need precise control over what gets protected. Blurby's custom blur areas let you manually select and protect specific regions of your screen with pixel-perfect accuracy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Drag & Drop Selection</h4>
                    <p className="text-sm text-muted-foreground">Draw rectangles around sensitive areas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Persistent Protection</h4>
                    <p className="text-sm text-muted-foreground">Blur areas stay protected across sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cal mb-1">Multiple Zones</h4>
                    <p className="text-sm text-muted-foreground">Create unlimited blur areas on screen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <h3 className="font-cal text-xl mb-6">Selection Tools:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <MousePointer className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Click to Blur</h4>
                  <p className="text-sm text-muted-foreground">Single click on elements to protect them</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Square className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Rectangle Tool</h4>
                  <p className="text-sm text-muted-foreground">Draw custom rectangular blur areas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Move className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Resize & Move</h4>
                  <p className="text-sm text-muted-foreground">Adjust blur areas on the fly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <Palette className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-cal mb-1">Visual Indicators</h4>
                  <p className="text-sm text-muted-foreground">See exactly what's being protected</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Perfect Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Form Protection</h3>
              <p className="text-muted-foreground text-sm">
                Protect entire forms, payment sections, or user input areas during checkout demonstrations and tutorials.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <MousePointer className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Sidebar Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Hide navigation panels, user lists, or sidebar information while keeping main content visible.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Square className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-cal mb-3">Dashboard Sections</h3>
              <p className="text-muted-foreground text-sm">
                Selectively protect sensitive metrics, user data, or financial information in admin dashboards.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cal text-2xl mb-4">Easy Setup Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-cal mb-1">Activate Selection Mode</h4>
                      <p className="text-sm text-muted-foreground">Click the custom blur tool in Blurby</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-cal mb-1">Draw Your Areas</h4>
                      <p className="text-sm text-muted-foreground">Click and drag to create blur zones</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-cal mb-1">Start Sharing</h4>
                      <p className="text-sm text-muted-foreground">Areas automatically blur when you share</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-40 bg-muted rounded-lg mx-auto mb-4 relative overflow-hidden">
                    <div className="absolute inset-4 border-2 border-purple-500 border-dashed rounded bg-purple-100/50 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-700">Protected Area</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Visual preview of custom blur area</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-cal text-center mb-12">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Move className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-cal text-xl mb-3">Dynamic Adjustment</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Resize, move, or delete blur areas anytime during your presentation. Changes apply instantly without interrupting your session.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real-time area adjustments</li>
                <li>• Snap-to-grid alignment</li>
                <li>• Keyboard shortcuts</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <Layers className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-cal text-xl mb-3">Area Management</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Save and reuse blur area configurations for different presentations. Perfect for recurring demos and training sessions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Save area templates</li>
                <li>• Import/export configurations</li>
                <li>• Quick presets</li>
              </ul>
            </Card>
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 text-center">
          <h2 className="text-3xl font-cal mb-4">Take Control of Your Privacy</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get pixel-perfect privacy control with custom blur areas. Perfect for presentations where you need precise protection of specific screen regions.
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