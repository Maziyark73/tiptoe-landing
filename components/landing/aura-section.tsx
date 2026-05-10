"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"
import { Shield, Mic2, SlidersHorizontal, Clapperboard, Sun, Trophy } from "lucide-react"

export function AuraSection() {
  const features = [
    { icon: Shield, title: "Community guard", description: "Protects your space from trolls and spam" },
    { icon: Mic2, title: "Your voice, her words", description: "Replies to fans in your authentic tone" },
    { icon: SlidersHorizontal, title: "4 moderation levels", description: "From chill to strict, you control the vibe" },
    { icon: Clapperboard, title: "Live command panel", description: "Real-time controls during your streams" },
    { icon: Sun, title: "Morning briefing", description: "Daily summary of your community activity" },
    { icon: Trophy, title: "Post-stream report", description: "Detailed analytics after every live session" },
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Darkest background for dramatic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#050008] to-background pointer-events-none" />
      
      {/* Multiple glows for dramatic effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Floating Aura Orb */}
        <FadeIn>
          <div className="flex justify-center mb-12">
            <div className="aura-orb w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-primary" />
          </div>
        </FadeIn>

        {/* Label */}
        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Aura — Your AI Producer
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            Every creator deserves{" "}
            <span className="gradient-text">a producer.</span>
          </h2>
        </FadeIn>

        {/* Body */}
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Aura learns your voice, manages your community, watches your live streams, 
            and coaches you on what&apos;s working. She never sleeps. She never has a bad day. 
            She never asks for a raise.
          </p>
        </FadeIn>

        {/* Phone mockup with Health Score */}
        <FadeIn delay={0.4}>
          <div className="flex justify-center mb-16">
            <PhoneMockup>
              <img loading="eager" fetchpriority="high"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.48.35%E2%80%AFAM-7cpVs7q2bNg4hgJMaasN9IeTb3dZ7S.png"
                alt="Tiptoe Aura AI producer dashboard"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </div>
        </FadeIn>

        {/* Feature cards grid */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
