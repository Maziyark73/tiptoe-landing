"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="text-primary">✦</span>
            <span className="text-sm text-muted-foreground">
              Invite-only — founding creators now open
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-balance">
            The platform that{" "}
            <span className="gradient-text">works for you</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Keep 65% to 90% of what your fans spend. No shadowbans, no restrictions. 
            And meet Aura — your AI producer who never sleeps.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#invite"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            >
              Get your invite
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-card transition-colors"
            >
              See how it works ↓
            </a>
          </div>
        </FadeIn>

        {/* Phone Mockups */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Left phone - Feed */}
            <PhoneMockup rotation={-4} className="hidden md:block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.45.01%E2%80%AFAM.png-2giNZ2PRSmi5Cdtrgh5qHQ3u6zgrbF.jpeg"
                alt="Tiptoe feed with video content"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>

            {/* Right phone - Live Stream */}
            <PhoneMockup rotation={2}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.46.13%E2%80%AFAM-pDJd8SUe4EG8kSYkVDP7uoxo5p1J4o.png"
                alt="Tiptoe live streaming"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
