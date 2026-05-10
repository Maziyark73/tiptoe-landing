"use client"

import { FadeIn } from "./fade-in"
import { PhoneMockup } from "./phone-mockup"
import { Coins, TrendingUp, Zap, Eye, BarChart3, Timer } from "lucide-react"

export function GetPaidSection() {
  const features = [
    { icon: Coins, text: "Coins and gifting on every post and live stream" },
    { icon: TrendingUp, text: "Tips on any content you create" },
    { icon: Zap, text: "65% to 90% depending on your creator tier" },
    { icon: Eye, text: "No shadowbans — your content always reaches your audience" },
    { icon: BarChart3, text: "Real-time earnings dashboard" },
    { icon: Timer, text: "Keep Me Live — gamified clock that keeps your audience engaged" },
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
              <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                Get Paid
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-6">
                <span className="font-[family-name:var(--font-syne)] font-extrabold text-6xl md:text-7xl lg:text-8xl gradient-text">
                  65–90%
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl tracking-tight mb-6">
                yours to keep
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every coin a fan spends — gifts, tips, live donations — you keep between 
                65% and 90%. TikTok keeps most of it. We don&apos;t.
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

          {/* Right - Phone mockups */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative flex items-center justify-center">
              {/* Main phone - Earnings */}
              <PhoneMockup>
                <img loading="eager" fetchpriority="high"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.56.17%E2%80%AFAM-Qx6O6dEQiZ1VDWfnkNr88uc1GVdoaD.png"
                  alt="Tiptoe earnings dashboard"
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>

              {/* Smaller supporting phone - Analytics */}
              <div className="absolute -bottom-8 -left-16 hidden lg:block scale-75 opacity-80">
                <PhoneMockup rotation={-8}>
                  <img loading="eager" fetchpriority="high"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-10%20at%2012.56.05%E2%80%AFAM-uToTvmASLXDBAmQXzJTozjtjQJst55.png"
                    alt="Tiptoe analytics dashboard"
                    className="w-full h-full object-cover"
                  />
                </PhoneMockup>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
