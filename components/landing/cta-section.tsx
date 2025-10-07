import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-cal mb-6">Ready to present with confidence?</h2>
      <Button size="lg" asChild>
        <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
          Install Blurby Now
        </a>
      </Button>
    </section>
  )
}
