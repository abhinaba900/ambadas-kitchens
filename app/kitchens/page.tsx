import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KitchenHero } from "@/components/sections/kitchens/KitchenHero";
import { KitchenTypes } from "@/components/sections/kitchens/KitchenTypes";
import { DesignStyles } from "@/components/sections/kitchens/DesignStyles";
import { MaterialOptions } from "@/components/sections/kitchens/MaterialOptions";
// import { FeaturedProjects } from "@/components/sections/kitchens/FeaturedProjects";
import { WhyKitchens } from "@/components/sections/kitchens/WhyKitchens";
import { PriceIndication } from "@/components/sections/kitchens/PriceIndication";
import { KitchenProcess } from "@/components/sections/kitchens/KitchenProcess";
import { KitchenFAQ } from "@/components/sections/kitchens/KitchenFAQ";
import { KitchensCTA } from "@/components/sections/kitchens/KitchensCTA";
import { ExpertSuggestion } from "@/components/ui/ExpertSuggestion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Modular Kitchens Bangalore | Custom Kitchen Design & Manufacturing",
  description: "Transform your home with Bangalore's leading modular kitchen specialists. Factory-built precision, custom designs, and 10-year warranty. Get a free consultation today.",
};

export default function KitchensPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <KitchenHero />
        <KitchenTypes />
        <ExpertSuggestion />
        <DesignStyles />
        <MaterialOptions />
        {/* <FeaturedProjects /> */}
        <WhyKitchens />
        <PriceIndication />
        <KitchenProcess />
        <KitchenFAQ />
        <KitchensCTA />
      </main>
      
      <Footer />
    </div>
  );
}
