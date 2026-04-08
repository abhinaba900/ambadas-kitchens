"use client";

import React from "react";
import { Calculator, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function PriceIndication() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
          Quality Modular Kitchens that <span className="text-accent underline decoration-accent/30 underline-offset-8">Fit Your Budget</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 scale-100 hover:scale-105 transition-transform duration-500">
           {/* Price Display */}
           <div className="bg-primary p-12 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-white border-8 border-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-accent">Transparent Pricing</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-light opacity-50">Starts from</span>
                <p className="text-5xl md:text-7xl font-bold">₹1,499</p>
                <span className="text-xl md:text-2xl opacity-70">/sq.ft.</span>
              </div>
              <p className="text-slate-300 text-sm">Inclusive of design, materials, and installation.</p>
           </div>

           {/* CTA Card */}
           <div className="bg-accent p-12 rounded-[2rem] shadow-2xl flex flex-col justify-center items-center text-primary group cursor-pointer border-8 border-white">
              <Calculator size={64} className="mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Need an Exact Quote?</h3>
              <p className="text-primary/70 mb-8 max-w-xs font-medium">Get a personalized estimate for your kitchen dimensions in seconds.</p>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg">
                <Zap size={20} className="text-accent" />
                Calculate Your Kitchen Cost
              </button>
           </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            No Hidden Charges
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Free 3D Design
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Factory Direct Pricing
          </div>
        </div>
      </div>
    </section>
  );
}
