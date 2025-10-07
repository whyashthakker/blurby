import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Yash Thakker",
    role: "YouTuber & Educator",
    company: "1M+ Students",
    content: "As a content creator teaching over 1 million students, Blurby has been a game-changer. I can share my screen confidently knowing sensitive data stays protected while my audience gets the full learning experience.",
    avatar: "YT",
  },
  {
    name: "Sarah Chen",
    role: "Senior Developer Advocate",
    company: "TechStream",
    content: "After accidentally exposing an API key during a live stream, I switched to Blurby. Now I can focus on teaching without worrying about sensitive data.",
    avatar: "SC",
  },
  {
    name: "Michael Torres",
    role: "Course Creator",
    company: "CodeMasters",
    content: "Game changer for online tutorials! My students get the same learning experience while my private information stays private. Absolutely essential.",
    avatar: "MT",
  },
  {
    name: "Lisa Johnson",
    role: "Solutions Architect",
    company: "CloudTech",
    content: "Client presentations are so much smoother now. No more awkward moments trying to hide sensitive information. Blurby handles it all automatically.",
    avatar: "LJ",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-cal mb-4">
            Loved by Educators and Developers
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals who trust Blurby to keep their sensitive information private during presentations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
