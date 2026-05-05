import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InteriorsHero } from "@/components/sections/interiors/InteriorsHero";
import { InteriorsOffer } from "@/components/sections/interiors/InteriorsOffer";
import { RoomShowcase } from "@/components/sections/interiors/RoomShowcase";
import { WhyFullHome } from "@/components/sections/interiors/WhyFullHome";
// import { FeaturedProjects } from "@/components/sections/interiors/FeaturedProjects";
import { BudgetBlocks } from "@/components/sections/interiors/BudgetBlocks";
import { CapabilitySection } from "@/components/sections/interiors/CapabilitySection";
import { InteriorsProcess } from "@/components/sections/interiors/InteriorsProcess";
import { InteriorsTestimonials } from "@/components/sections/interiors/InteriorsTestimonials";
import { InteriorsCTA } from "@/components/sections/interiors/InteriorsCTA";
import { ExpertSuggestion } from "@/components/ui/ExpertSuggestion";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Home Interiors Bangalore | End-to-End Home Design Solutions",
  description: "Transform your house into a dream home with Ambadas Kitchens. We provide end-to-end interior solutions including kitchens, wardrobes, living spaces, and more. Quality guaranteed.",
};

export default function InteriorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <InteriorsHero />
        <InteriorsOffer />
        <ExpertSuggestion />
        <WhyFullHome />
        <RoomShowcase />
        <BudgetBlocks />
        <CapabilitySection />
        {/* <FeaturedProjects /> */}
        <InteriorsProcess />
        <InteriorsTestimonials />
        <InteriorsCTA />
      </main>
      
      <Footer />
      
      {/* Conversion Overlays */}
      <WhatsAppButton />
      <StickyMobileBar />
    </div>
  );
}
