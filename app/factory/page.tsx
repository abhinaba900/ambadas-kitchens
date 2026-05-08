import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FactoryHero } from "@/components/sections/factory/FactoryHero";
import { FactoryWhy } from "@/components/sections/factory/FactoryWhy";
import { FactoryMachinery } from "@/components/sections/factory/FactoryMachinery";
import { FactoryProcess } from "@/components/sections/factory/FactoryProcess";
import { FactoryGallery } from "@/components/sections/factory/FactoryGallery";
import { FactoryQC } from "@/components/sections/factory/FactoryQC";
import { FactoryComparison } from "@/components/sections/factory/FactoryComparison";
import { FactoryMetrics } from "@/components/sections/factory/FactoryMetrics";
import { FactoryVideo } from "@/components/sections/factory/FactoryVideo";
import { FactoryMidCTA } from "@/components/sections/factory/FactoryMidCTA";
import { FactoryLinkProcess } from "@/components/sections/factory/FactoryLinkProcess";
import { FactoryFinalCTA } from "@/components/sections/factory/FactoryFinalCTA";
import { Partners } from "@/components/sections/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Factory | Ambadas Kitchens - Precision Manufacturing facility",
  description: "Explore our state-of-the-art manufacturing facility. We use advanced CNC technology and rigorous quality control to deliver precision-built modular kitchens.",
};

export default function FactoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <FactoryHero />
        <FactoryWhy />
        <FactoryMachinery />
        <Partners />
        <FactoryProcess />
        <FactoryGallery />
        <FactoryQC />
        <FactoryComparison />
        <FactoryMetrics />
        <FactoryVideo />
        <FactoryMidCTA />
        <FactoryLinkProcess />
        <FactoryFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
