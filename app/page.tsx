import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { NoShadowbansSection } from "@/components/landing/no-shadowbans-section"
import { GetPaidSection } from "@/components/landing/get-paid-section"
import { GoLiveSection } from "@/components/landing/go-live-section"
import { UniversalButtonSection } from "@/components/landing/universal-button-section"
import { ConnectSection } from "@/components/landing/connect-section"
import { AriaSection } from "@/components/landing/aria-section"
import { CreatorStudioSection } from "@/components/landing/creator-studio-section"
import { AuraSection } from "@/components/landing/aura-section"
import { FoundingCreatorCTA } from "@/components/landing/founding-creator-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <NoShadowbansSection />
      <GetPaidSection />
      <GoLiveSection />
      <UniversalButtonSection />
      <ConnectSection />
      <AriaSection />
      <CreatorStudioSection />
      <AuraSection />
      <FoundingCreatorCTA />
      <Footer />
    </main>
  )
}
