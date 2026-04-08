"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calculator, ArrowRight } from "lucide-react";

export function WardrobePriceIndication() {
  return (
    <section className="section-padding bg-accent/20 border-y border-accent/20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative z-10 border-4 border-accent/10"
        >
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-primary rounded-full font-black text-sm uppercase tracking-widest border border-accent/20">
              <Calculator size={18} />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
              Premium Wardrobes starting from <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">₹1,400</span> per sq.ft.
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-bold italic">
              Get a precise quote based on your specific layout and material choices.
            </p>
          </div>

          <div className="md:w-2/5 flex flex-col gap-6">
            <Button size="lg" className="w-full bg-primary text-white py-8 rounded-full text-xl font-black shadow-2xl shadow-primary/30 hover:scale-105 transition-all group flex items-center justify-center gap-4">
              Calculate Your Cost
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Button>
            <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-widest">*T&C Apply. Prices vary by finishes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
