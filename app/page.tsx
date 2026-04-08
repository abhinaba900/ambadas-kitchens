import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickLead } from "@/components/sections/QuickLead";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { FactoryUSP } from "@/components/sections/FactoryUSP";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <QuickLead />
        <Portfolio />
        <WhyUs />
        <FactoryUSP />
        <Services />
        <Process />
        <PricingCalculator />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
      
      {/* Conversion Overlays */}
      <WhatsAppButton />
      <StickyMobileBar />
    </div>
  );
}
