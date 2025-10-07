import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function FeaturesDemo() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-cal text-center mb-12">See it in action</h2>
      <div className="max-w-2xl mx-auto">
        <RadioGroup defaultValue="email" className="grid gap-8">
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email" className="flex-1">
              <div className="grid gap-1.5">
                <h3 className="font-medium">Email Addresses</h3>
                <p className={cn(
                  "text-muted-foreground font-mono",
                  "hover:blur-sm transition-all"
                )}>
                  user@example.com
                </p>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="apikey" id="apikey" />
            <Label htmlFor="apikey" className="flex-1">
              <div className="grid gap-1.5">
                <h3 className="font-medium">API Keys</h3>
                <p className={cn(
                  "text-muted-foreground font-mono",
                  "hover:blur-sm transition-all"
                )}>
                  sk-1234abcd5678efgh9012ijkl
                </p>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1">
              <div className="grid gap-1.5">
                <h3 className="font-medium">Credit Card Numbers</h3>
                <p className={cn(
                  "text-muted-foreground font-mono",
                  "hover:blur-sm transition-all"
                )}>
                  4242 4242 4242 4242
                </p>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </section>
  )
}
