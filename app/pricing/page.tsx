import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingIntro } from "@/components/sections/pricing/PricingIntro";
import { PricingCalculator } from "@/components/sections/pricing/PricingCalculator";
import { PriceGuidelines } from "@/components/sections/pricing/PriceGuidelines";
import { FullHomePricing } from "@/components/sections/pricing/FullHomePricing";
import { PriceFactors } from "@/components/sections/pricing/PriceFactors";
import { PriceTrust } from "@/components/sections/pricing/PriceTrust";
import { PricingFAQ } from "@/components/sections/pricing/PricingFAQ";
import { PricingFinalCTA } from "@/components/sections/pricing/PricingFinalCTA";

export const metadata: Metadata = {
  title: "Pricing & Cost Calculator | Ambadas Kitchens Bangalore",
  description: "Estimate your modular kitchen and home interior costs instantly with our transparent pricing calculator. No hidden costs, direct factory prices in Bangalore.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <PricingHero />
      <PricingIntro />
      
      <div id="calculator">
        <PricingCalculator />
      </div>
      
      <PriceGuidelines />
      <FullHomePricing />
      <PriceFactors />
      <PriceTrust />
      <PricingFAQ />
      <PricingFinalCTA />
      
      <Footer />
    </main>
  );
}
