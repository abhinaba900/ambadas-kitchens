import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutLeadership } from "@/components/sections/about/AboutLeadership";
import { AboutJourney } from "@/components/sections/about/AboutJourney";
import { AboutDifferent } from "@/components/sections/about/AboutDifferent";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutProcessConnection } from "@/components/sections/about/AboutProcessConnection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Ambadas Kitchens - 20+ Years of Manufacturing Excellence",
  description: "Learn about Ambadas Kitchens, our journey, our team, and our commitment to delivering high-quality modular kitchens and interiors in Bangalore.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutLeadership />
      <AboutJourney />
      <AboutDifferent />
      <AboutTeam />
      <AboutStats />
      <AboutValues />
      <AboutProcessConnection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
