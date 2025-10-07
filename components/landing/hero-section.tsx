"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Eye } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isHeroBlurred, setIsHeroBlurred] = useState(true)

  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full w-fit">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-cal">Privacy First Screen Sharing</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-cal leading-[1.1]">
              Present your screen with{" "}
              <span className="text-primary">confidence</span>
            </h1>
            <p className="text-xl text-muted-foreground font-cal">
              Never worry about exposing sensitive information again. One-click protection 
              for your private data during screen sharing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 font-cal" asChild>
              <a href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" target="_blank" rel="noopener noreferrer">
                Get Lifetime Access - $19
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-cal">
              Watch Demo
            </Button>
          </div>
{/* 
          <div className="grid gap-4">
            <p className="text-sm text-muted-foreground font-cal">Trusted by developers from:</p>
            <div className="grid grid-cols-3 gap-8">
              <Image
                src="/companies/vercel.svg"
                alt="Vercel"
                width={120}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/companies/stripe.svg"
                alt="Stripe"
                width={120}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/companies/linear.svg"
                alt="Linear"
                width={120}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div> */}
        </div>

        <div className="relative aspect-square lg:aspect-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl -z-10" />
          <div className="relative bg-background rounded-xl border shadow-2xl p-6">
            <div className="absolute -top-8 left-8 bg-background rounded-lg border p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <p className="font-cal">Privacy Protection Active</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-cal text-lg">Screen Share Preview</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsHeroBlurred(!isHeroBlurred)}
                  className="font-cal"
                >
                  {isHeroBlurred ? "Show Content" : "Blur Content"}
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-primary">
                    # OpenAI API Key Generation
                  </p>
                  <p className={`font-mono text-sm mt-2 ${isHeroBlurred ? 'blur-sm' : ''} transition-all`}>
                    OPENAI_API_KEY=sk-1234...5678
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-primary">
                    # Payment Information
                  </p>
                  <p className={`font-mono text-sm mt-2 ${isHeroBlurred ? 'blur-sm' : ''} transition-all`}>
                    4242 4242 4242 4242
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm text-primary">
                    # Environment Variables
                  </p>
                  <p className={`font-mono text-sm mt-2 ${isHeroBlurred ? 'blur-sm' : ''} transition-all`}>
                    DATABASE_URL=postgresql://admin:secret@localhost:5432/db
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}