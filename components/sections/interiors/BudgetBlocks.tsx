"use client";

import React from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const plans = [
  {
    title: "TYPICAL 2 BHK",
    subtitle: "(For New Units only)",
    includes: [
      "Modular Kitchen with basic Accessories",
      "Bedrooms with Hinged Wardrobes and lofts",
      "Entertainment Unit",
      "Crockery Unit",
      "Vanity Counter for Bathrooms",
    ],
    materials: [
      "BWP Ply with Laminate finish HDHMR Shutters for Kitchen",
      "MR Ply with Laminate finish HDHMR Shutters for Bedrooms, Entertainment Unit and Crockery Unit",
      "BWP Ply with Laminate finish BWP Shutters for Vanity counters",
    ],
    hardware: "Hettich",
    pricing: {
      elegance: "4.50 lacs",
      marbello: "5.50 lacs",
      ultima: "6.50 lacs",
    },
    highlight: false,
  },
  {
    title: "TYPICAL 3 BHK",
    subtitle: "(For New Units only)",
    includes: [
      "Modular Kitchen with basic Accessories",
      "Bedrooms with Hinged Wardrobes and lofts",
      "Entertainment Unit",
      "Crockery Unit",
      "Vanity Counter for Bathrooms",
    ],
    materials: [
      "BWP Ply with Laminate finish HDHMR Shutters for Kitchen",
      "MR Ply with Laminate finish HDHMR Shutters for Rooms, Entertainment Unit and Crockery Unit",
      "BWP Ply with Laminate finish BWP Shutters for Vanity counters",
    ],
    hardware: "Hettich",
    pricing: {
      elegance: "5.50 lacs",
      marbello: "6.50 lacs",
      ultima: "7.50 lacs",
    },
    highlight: true,
  },
  {
    title: "TYPICAL VILLA",
    subtitle: "(For New Units only)",
    includes: [
      "Modular Kitchen with basic Accessories",
      "Kitchen Utility with wall cabinets",
      "Bedrooms Hinged Wardrobes with lofts",
      "Entertainment Unit",
      "Crockery Unit",
      "Vanity Counter for Bathrooms",
    ],
    materials: [
      "BWP Ply with Laminate finish HDHMR Shutters for Kitchen",
      "MR Ply with Laminate finish HDHMR Shutters for Rooms, Entertainment Unit and Crockery Unit",
      "BWP Ply with Laminate finish BWP Shutters for Vanity counters",
    ],
    hardware: "Hettich",
    pricing: {
      elegance: "9.00 lacs",
      marbello: "10.00 lacs",
      ultima: "11.00 lacs",
    },
    highlight: false,
  },
];

export function BudgetBlocks() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Real Estate Packages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Transparent <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Estimations</span>
          </motion.h2>
          <p className="text-slate-500 text-lg">
            Comprehensive interior packages tailored for new properties, completely transparent with no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 md:p-10 rounded-3xl bg-white flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight 
                ? "shadow-2xl border-2 border-accent z-10" 
                : "shadow-lg border border-slate-100 hover:shadow-2xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-primary font-black px-6 py-2 rounded-full text-xs uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center border-b border-slate-100 pb-6">
                <h3 className="text-2xl font-display font-black text-primary tracking-wide">{plan.title}</h3>
                <p className="text-sm text-slate-400 font-bold mt-1">{plan.subtitle}</p>
              </div>

              <div className="flex-1 space-y-8">
                {/* Costing Includes */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4 bg-primary/5 inline-block px-3 py-1 rounded-md">Costing Includes</h4>
                  <ul className="space-y-3">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-accent mt-1 shrink-0" strokeWidth={3} />
                        <span className="text-slate-600 text-sm leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials Used */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4 bg-primary/5 inline-block px-3 py-1 rounded-md">Materials Used</h4>
                  <ul className="space-y-3">
                    {plan.materials.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                        <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hardwares Used */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3 bg-primary/5 inline-block px-3 py-1 rounded-md">Hardware Used</h4>
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-bold bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <ShieldCheck size={18} className="text-primary" />
                    {plan.hardware}
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mt-10 pt-8 border-t-2 border-dashed border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 text-center">Estimated Pricing</h4>
                <div className="grid grid-cols-3 gap-2 bg-primary text-white rounded-2xl p-4 shadow-inner">
                  <div className="text-center">
                    <p className="text-[9px] uppercase font-bold text-white/50 mb-1 tracking-wider">Elegance</p>
                    <p className="font-black text-sm">{plan.pricing.elegance}</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <p className="text-[9px] uppercase font-black text-accent mb-1 tracking-wider">Marbello</p>
                    <p className="font-black text-sm">{plan.pricing.marbello}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] uppercase font-bold text-white/50 mb-1 tracking-wider">Ultima</p>
                    <p className="font-black text-sm">{plan.pricing.ultima}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  variant={plan.highlight ? "accent" : "outline"} 
                  size="lg" 
                  className={`w-full font-black uppercase tracking-widest text-xs py-6 group ${!plan.highlight && "border-2 border-primary text-primary hover:bg-primary hover:text-white"}`}
                >
                  Consult Designer
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
