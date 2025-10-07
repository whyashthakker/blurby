import { Card } from "@/components/ui/card"

export function StorySection() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-6">
          <h2 className="text-2xl font-cal mb-4">Why we built Blurby</h2>
          <p className="text-muted-foreground">
            It started when one of our students accidentally captured an API key during a tutorial 
            session, resulting in $50 of unexpected charges. This incident inspired us to create 
            Blurby - a tool that automatically protects sensitive information during screen sharing.
          </p>
        </Card>
      </div>
    </section>
  )
}
