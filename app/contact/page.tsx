import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOptions } from "@/components/sections/contact/ContactOptions";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { WhatsAppStrip } from "@/components/sections/contact/WhatsAppStrip";
import { LocationMap } from "@/components/sections/contact/LocationMap";
import { BusinessDetails } from "@/components/sections/contact/BusinessDetails";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ambadas Kitchens Bangalore",
  description: "Get in touch with Bangalore's leading modular kitchen specialists. Free consultation and factory-direct pricing for kitchens, wardrobes, and interiors.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <WhatsAppStrip />
        <LocationMap />
        <BusinessDetails />
        <ContactFinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
