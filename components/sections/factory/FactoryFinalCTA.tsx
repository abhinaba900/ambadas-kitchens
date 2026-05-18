"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FactoryFinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-xs font-black uppercase tracking-widest"
            >
              <ShieldCheck size={16} /> Factory-Direct Advantage
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Honest Quality <br />
              <span className="text-accent italic underline decoration-accent/20 decoration-8 underline-offset-8">Fairly Priced</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cut out the middleman and commissions. Get factory-direct pricing on premium interior solutions for your home.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
             <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer">
               <Button variant="accent" size="lg" className="w-full sm:w-auto h-20 px-12 text-xl font-bold text-primary group shadow-2xl hover:scale-105 transition-all rounded-3xl">
                 <FaWhatsapp size={24} className="mr-3" />
                 WhatsApp Now
               </Button>
             </a>
             <Link href="/pricing#calculator" className="w-full sm:w-auto">
               <Button variant="outline" size="lg" className="w-full h-20 px-12 text-xl font-bold border-white text-white hover:bg-white hover:text-primary transition-all rounded-3xl">
                 Get Estimate
                 <ArrowRight size={22} className="ml-2" />
               </Button>
             </Link>
          </div>
          
          <p className="text-white/40 text-sm font-medium italic">
            Precision engineering. German machinery. Affordable Bangalore homes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
