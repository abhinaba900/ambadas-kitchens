import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WardrobeHero } from "@/components/sections/wardrobes/WardrobeHero";
import { WardrobeTypes } from "@/components/sections/wardrobes/WardrobeTypes";
import { InternalConfigurations } from "@/components/sections/wardrobes/InternalConfigurations";
import { FinishesMaterials } from "@/components/sections/wardrobes/FinishesMaterials";
import { WardrobePortfolio } from "@/components/sections/wardrobes/WardrobePortfolio";
import { WhyWardrobes } from "@/components/sections/wardrobes/WhyWardrobes";
import { WardrobePriceIndication } from "@/components/sections/wardrobes/WardrobePriceIndication";
import { SmartStorage } from "@/components/sections/wardrobes/SmartStorage";
import { WardrobeFAQ } from "@/components/sections/wardrobes/WardrobeFAQ";
import { WardrobeCTA } from "@/components/sections/wardrobes/WardrobeCTA";
import { ExpertSuggestion } from "@/components/ui/ExpertSuggestion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Wardrobes Bangalore | Premium Cupboard Design & Manufacturing",
  description: "Maximize your storage with custom wardrobes from Ambadas Kitchens. Floor-to-ceiling designs, sliding and hinged options, and premium factory finishes. Get a free consultation.",
};

export default function WardrobesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <WardrobeHero />
        <WardrobeTypes />
        <ExpertSuggestion />
        <InternalConfigurations />
        <FinishesMaterials />
        <WardrobePortfolio />
        <WhyWardrobes />
        <WardrobePriceIndication />
        <SmartStorage />
        <WardrobeFAQ />
        <WardrobeCTA />
      </main>
      
      <Footer />
    </div>
  );
}
