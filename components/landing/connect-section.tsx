"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"
import { Ghost, Eye, Lock, Users, VolumeX } from "lucide-react"

export function ConnectSection() {
  const features = [
    { icon: Ghost, text: "Anonymous posts and comments" },
    { icon: Eye, text: "Whisper posts — visible only to people you choose" },
    { icon: Lock, text: "Secret PIN messaging — keep conversations from prying eyes" },
    { icon: Users, text: "Close Friends circles" },
    { icon: VolumeX, text: "Muted words — your feed, your peace" },
  ]

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone mockup */}
          <FadeIn direction="right">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <PhoneMockup>
                <img loading="eager" fetchpriority="high"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.53.09%E2%80%AFAM-aj3RzOitFywCTJMaySO7Bt6Pp1aB0A.png"
                  alt="Tiptoe Secret PIN messaging"
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </FadeIn>

          {/* Right - Text */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                Connect
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl tracking-tight mb-6 text-balance">
                Your circle.{" "}
                <span className="gradient-text">Your rules.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Post anonymously. Whisper to a chosen few. Keep your private 
                conversations from prying eyes with Secret PIN messaging.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
