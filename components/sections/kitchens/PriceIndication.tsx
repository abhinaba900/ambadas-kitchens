"use client";

import React from "react";
import Link from "next/link";
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
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
           {/* Pricing Table */}
           <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden flex flex-col">
             <div className="bg-primary text-white p-6 text-center">
               <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Transparent Pricing</p>
               <h3 className="text-2xl font-display font-bold mt-1">Modular Kitchen Tiers</h3>
             </div>
             <div className="flex-1 overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[400px]">
                 <thead>
                   <tr className="bg-slate-50 border-b border-slate-100">
                     <th className="py-5 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest border-r border-slate-100">Collection</th>
                     <th className="py-5 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest text-right">Price (per sq.ft.)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   <tr className="hover:bg-slate-50 transition-colors group">
                     <td className="py-6 px-8 text-lg font-black text-primary border-r border-slate-100 tracking-wide group-hover:text-accent transition-colors">ELEGANCE</td>
                     <td className="py-6 px-8 text-2xl font-bold text-primary text-right">₹ 1,500/-</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors group bg-primary/5">
                     <td className="py-6 px-8 text-lg font-black text-primary border-r border-slate-100 tracking-wide flex items-center gap-3">
                       <span className="group-hover:text-accent transition-colors">MARBELLO</span>
                       <span className="bg-accent text-primary text-[10px] uppercase font-black px-3 py-1 rounded-full whitespace-nowrap">Popular Choice</span>
                     </td>
                     <td className="py-6 px-8 text-2xl font-bold text-primary text-right">₹ 1,800/-</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors group">
                     <td className="py-6 px-8 text-lg font-black text-primary border-r border-slate-100 tracking-wide group-hover:text-accent transition-colors">ULTIMA</td>
                     <td className="py-6 px-8 text-2xl font-bold text-primary text-right">₹ 2,200/-</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>

           {/* CTA Card */}
           <div className="bg-accent p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center items-center text-primary group cursor-pointer border-4 border-white h-full">
              <Calculator size={56} className="mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 font-display text-center">Need an Exact Quote?</h3>
              <p className="text-primary/70 mb-8 text-center font-medium">Get a personalized estimate for your kitchen dimensions in seconds.</p>
              <Link href="/pricing#calculator" className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg">
                <Zap size={20} className="text-accent" />
                Calculate Cost
              </Link>
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
