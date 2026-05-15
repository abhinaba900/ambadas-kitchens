"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero } from "@/components/sections/portfolio/PortfolioHero";
import { PortfolioFilter } from "@/components/sections/portfolio/PortfolioFilter";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { BeforeAfterSlider } from "@/components/sections/portfolio/BeforeAfterSlider";
import { PortfolioTrustStrip } from "@/components/sections/portfolio/PortfolioTrustStrip";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Testimonials } from "@/components/sections/Testimonials";
import { useModal } from "@/lib/ModalContext";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const { openConsultationModal } = useModal();

  useEffect(() => {
    // Sync category from URL parameter
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      if (category) {
        setActiveCategory(category);
        
        // Scroll to filters after a small delay to ensure content is rendered
        setTimeout(() => {
          const filterElement = document.getElementById("portfolio-filters");
          if (filterElement) {
            filterElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <PortfolioHero />

        {/* 2. FILTER / CATEGORY BAR */}
        <div id="portfolio-filters" className="scroll-mt-24">
          <PortfolioFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
            activeBudget={activeBudget}
            onBudgetChange={setActiveBudget}
            activeLocation={activeLocation}
            onLocationChange={setActiveLocation}
          />
        </div>

        {/* 3. PROJECT GRID */}
        <PortfolioGrid 
          activeCategory={activeCategory} 
          activeBudget={activeBudget}
          activeLocation={activeLocation}
        />

        {/* 5. BEFORE / AFTER HIGHLIGHT */}
        <BeforeAfterSlider />

        {/* 6. TRUST BUILDING STRIP */}
        <PortfolioTrustStrip />

        {/* 8. MID-PAGE CTA */}
        <section className="py-20 bg-accent overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                  Like What You See? <br />
                  <span className="text-primary/70">Let’s Build Yours.</span>
                </h2>
                <p className="text-primary/80 text-lg md:text-xl font-medium">
                  Our design experts are ready to turn your vision into a reality.
                </p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary-light shadow-2xl px-12 py-8 text-xl rounded-2xl group"
                  onClick={() => openConsultationModal()}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS */}
        <Testimonials />

        {/* 10. FINAL CTA */}
        <section className="section-padding bg-slate-50 pt-24 pb-32">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
                Your Dream Kitchen <br />
                <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Could Be Next</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
                Join 1000+ happy homeowners who trusted Ambadas Kitchens for their modular home interiors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-16 px-12 bg-[#25D366] hover:bg-[#20ba5a] text-white gap-3 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                    <FaWhatsapp size={24} />
                    WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+919448396322" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full h-16 px-12 gap-3 text-lg font-bold rounded-2xl border-2 hover:shadow-xl transition-all">
                    <Phone size={24} />
                    Call Now
                  </Button>
                </a>
              </div>
              <p className="text-slate-400 font-medium pt-8">
                Based in Bangalore | 20+ Years Experience | Factory Perfection
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
