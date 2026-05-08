import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProcessHero } from "@/components/sections/process/ProcessHero";
import { ProcessOverview } from "@/components/sections/process/ProcessOverview";
import { ProcessSteps } from "@/components/sections/process/ProcessSteps";
import { ProcessTimeline } from "@/components/sections/process/ProcessTimeline";
import { ProcessWhy } from "@/components/sections/process/ProcessWhy";
import { ProcessTransparency } from "@/components/sections/process/ProcessTransparency";
import { ProcessFactory } from "@/components/sections/process/ProcessFactory";
import { ProcessFAQ } from "@/components/sections/process/ProcessFAQ";
import { ProcessFinalCTA } from "@/components/sections/process/ProcessFinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Ambadas Kitchens - Trusted Interior Journey",
  description: "Experience a seamless, transparent, and efficient process designed to deliver quality without delays. From consultation to installation, we handle everything.",
};

export default function OurProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <ProcessHero />
        <ProcessOverview />
        <Suspense fallback={<div className="h-96 bg-slate-50 animate-pulse rounded-[40px] m-12" />}>
          <ProcessSteps />
        </Suspense>
        <ProcessTimeline />
        <ProcessWhy />
        <ProcessTransparency />
        <ProcessFactory />
        <ProcessFAQ />
        <ProcessFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
