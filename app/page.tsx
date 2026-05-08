import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickLead } from "@/components/sections/QuickLead";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { FactoryUSP } from "@/components/sections/FactoryUSP";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { PricingCalculator } from "@/components/sections/pricing/PricingCalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <QuickLead />
        <Portfolio />
        <WhyUs />
        <Partners />
        <Services />
        <FactoryUSP />
        <Process />
        <PricingCalculator />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
