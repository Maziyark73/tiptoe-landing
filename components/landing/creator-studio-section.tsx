"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"

export function CreatorStudioSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone mockup */}
          <FadeIn direction="right">
            <div className="flex items-center justify-center">
              <PhoneMockup rotation={-2}>
                <img loading="eager" fetchpriority="high"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.50.02%E2%80%AFAM-hL39Jchwjr3kbMiptcp5vm6yc5rYwb.png"
                  alt="Tiptoe Creator Studio"
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </FadeIn>

          {/* Right - Text */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                Creator Studio
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-balance">
                Run the room{" "}
                <span className="gradient-text">like a show.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything in one place. Aura, analytics, earnings, settings. 
                Your backstage pass to your own platform.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
