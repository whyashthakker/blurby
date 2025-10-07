import { Card } from "@/components/ui/card"

export function TargetSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cal text-center mb-12">Who is this for?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-cal mb-3">Course Creators</h3>
            <p className="text-muted-foreground">
              Safely demonstrate code and applications without exposing sensitive credentials during tutorials.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-cal mb-3">Solution Architects</h3>
            <p className="text-muted-foreground">
              Present client demos and proofs of concept while keeping configuration details private.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-cal mb-3">Product Managers</h3>
            <p className="text-muted-foreground">
              Share your screen during meetings without worrying about exposing sensitive business data.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
