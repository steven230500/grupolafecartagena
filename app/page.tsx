import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompulsiveGamblingSection } from "@/components/compulsive-gambling-section"
import { RecoveryProgramSection } from "@/components/recovery-program-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompulsiveGamblingSection />
      <RecoveryProgramSection />
      <BenefitsSection />
      <ContactSection />
      <MapSection />
      <AboutSection />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
