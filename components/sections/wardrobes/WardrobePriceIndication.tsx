"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
          className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto relative z-10"
        >
          {/* Table Container */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-white overflow-hidden">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-primary rounded-full font-black text-sm uppercase tracking-widest border border-accent/20 mb-8">
              <Calculator size={18} />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight mb-8">
              Premium Wardrobe <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Tiers</span>
            </h2>
            
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[400px]">
                 <thead>
                   <tr className="bg-slate-50 border-b border-slate-100">
                     <th className="py-4 px-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100">Collection</th>
                     <th className="py-4 px-6 text-sm font-bold text-slate-400 uppercase tracking-widest text-right">Price (per sq.ft.)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   <tr className="hover:bg-slate-50 transition-colors group">
                     <td className="py-5 px-6 text-lg font-black text-primary border-r border-slate-100 tracking-wide group-hover:text-accent transition-colors">ELEGANCE</td>
                     <td className="py-5 px-6 text-2xl font-bold text-primary text-right">₹ 1,250/-</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors group bg-accent/5">
                     <td className="py-5 px-6 text-lg font-black text-primary border-r border-slate-100 tracking-wide flex items-center gap-3">
                       <span className="group-hover:text-accent transition-colors">MARBELLO</span>
                       <span className="bg-primary text-white text-[10px] uppercase font-black px-3 py-1 rounded-full whitespace-nowrap">Popular Choice</span>
                     </td>
                     <td className="py-5 px-6 text-2xl font-bold text-primary text-right">₹ 1,500/-</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors group">
                     <td className="py-5 px-6 text-lg font-black text-primary border-r border-slate-100 tracking-wide group-hover:text-accent transition-colors">ULTIMA</td>
                     <td className="py-5 px-6 text-2xl font-bold text-primary text-right">₹ 1,750/-</td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>

          {/* CTA Container */}
          <div className="lg:w-1/3 flex flex-col justify-center bg-primary p-10 md:p-12 rounded-[3rem] shadow-2xl border-4 border-primary/50 text-center">
            <h3 className="text-3xl font-display font-bold text-white leading-tight mb-4">Need an Exact Quote?</h3>
            <p className="text-white/70 text-lg leading-relaxed font-medium mb-10">
              Get a precise quote based on your specific layout and material choices.
            </p>
            <Link href="/pricing#calculator" className="w-full bg-accent text-primary py-6 rounded-full text-xl font-black shadow-2xl shadow-accent/20 hover:scale-105 transition-all group flex items-center justify-center gap-3">
              Calculate Cost
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="text-white/40 font-bold uppercase text-xs tracking-widest mt-6">*T&C Apply. Prices vary by finishes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
