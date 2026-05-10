"use client"

import { FadeIn } from "./fade-in"
import { Camera, Radio, Gift, Swords, Ghost, Eye } from "lucide-react"

export function UniversalButtonSection() {
  const features = [
    { icon: Camera, text: "Create a post — video, photo, text, poll" },
    { icon: Radio, text: "Go live instantly" },
    { icon: Gift, text: "Send a gift to any creator" },
    { icon: Swords, text: "Start a battle challenge" },
    { icon: Ghost, text: "Anonymous post — your secret, kept" },
    { icon: Eye, text: "Whisper post — only certain eyes can see" },
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">
                Patent Pending
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-balance">
                One button.{" "}
                <span className="gradient-text">Everything.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Universal Button — Tiptoe&apos;s signature radial menu. Hold it anywhere 
                and everything you need fans out around it. One tap away.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right - Screenshot (full bleed, dramatic) */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative flex items-center justify-center">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/20">
                <img loading="eager" fetchpriority="high"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.51.45%E2%80%AFAM-XcjUv8vvywPfxBYEiZqavTtvXKHYtg.png"
                  alt="Tiptoe Universal Button radial menu"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
