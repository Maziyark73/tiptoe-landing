"use client"

import { FadeIn } from "./fade-in"

export function FoundingCreatorCTA() {
  return (
    <section id="invite" className="relative py-32 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            Be one of the{" "}
            <span className="gradient-text">first 50.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Founding creators get 3 months of Aura free. Plus your spot at the 
            top of the platform before the crowd arrives.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Get your invite →
            </a>
            <p className="text-sm text-muted-foreground">
              Invite-only. No credit card required.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
