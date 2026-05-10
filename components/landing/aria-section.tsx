"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"
import { Brain, Mic, Lightbulb, MessageSquare, BarChart2, Globe, Heart } from "lucide-react"

export function AriaSection() {
  const features = [
    { icon: Brain, text: "Remembers you across every conversation" },
    { icon: Mic, text: "Talk by voice — she listens and responds out loud" },
    { icon: Lightbulb, text: "Content ideas — never stare at a blank screen again" },
    { icon: MessageSquare, text: "Reads your comments and drafts responses in your voice" },
    { icon: BarChart2, text: "Tracks your engagement and tells you what's working" },
    { icon: Globe, text: "Speaks your language — multilingual support" },
    { icon: Heart, text: "Never judges — available any time, any mood" },
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">
                Aria — Your AI Companion
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-balance">
                Always in{" "}
                <span className="gradient-text">your corner.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aria is your private AI companion. She remembers you, your journey, 
                your content. Talk to her by voice. She talks back.
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

          {/* Right - Phone mockup */}
          <FadeIn delay={0.4} direction="left">
            <div className="flex items-center justify-center">
              <PhoneMockup rotation={2}>
                <img loading="eager" fetchpriority="high"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.49.22%E2%80%AFAM-3SX8t4mm3TEc9fBqqjcAvFGUPMFJus.png"
                  alt="Tiptoe Aria AI companion chat"
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
