"use client"

import { FadeIn } from "./fade-in"
import { CheckCircle2 } from "lucide-react"

export function NoShadowbansSection() {
  const badges = [
    "Full reach to all followers",
    "No niche penalties",
    "Clear transparent rules",
    "Appeal any moderation decision",
  ]

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <FadeIn>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
            Your content, your audience
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-balance">
            No shadowbans.{" "}
            <span className="gradient-text">No restrictions.</span>
          </h2>
        </FadeIn>

        {/* Body */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Your content reaches every single follower. Every time. No algorithm quietly burying 
            your posts because it doesn&apos;t like your niche. On Tiptoe, legal content is always 
            fully visible — unless it violates our clear community guidelines (explicit nudity, 
            hate speech, the obvious stuff). That&apos;s it.
          </p>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
