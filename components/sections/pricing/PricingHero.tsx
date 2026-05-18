"use client";

import React from "react";
import { Calculator, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold tracking-widest uppercase"
          >
            <Calculator size={16} /> Instant Price Estimate
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
          >
            Honest Pricing for <br />
            <span className="text-accent italic">Exceptional Designs</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            No hidden costs. No surprises. Use our calculator to get an instant estimate for your modular kitchen, wardrobes, or full home interiors.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Button variant="accent" size="lg" className="h-16 px-10 text-lg font-bold group shadow-xl" asChild>
              <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center">
                <FaWhatsapp size={20} className="mr-2" />
                Chat with Expert
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold border-white text-white hover:bg-white hover:text-primary transition-all shadow-xl" asChild>
              <a href="#calculator" className="w-full flex items-center justify-center">
                Calculate Pricing
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
