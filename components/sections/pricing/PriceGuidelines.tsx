"use client";

import React from "react";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriceGuidelines() {
  const tiers = [
    {
      name: "Basic Kitchen",
      price: "1,200 - 1,500",
      description: "Essential, high-quality solution for rental properties or low-use kitchens.",
      features: [
        "Combi Plywood Core",
        "Economic Laminate Finish",
        "Standard SS Hinges",
        "PVC Edge Banding",
        "Basic Wire Baskets"
      ],
      accent: "bg-slate-100",
      border: "border-slate-200"
    },
    {
      name: "Mid-Range Kitchen",
      price: "1,800 - 2,500",
      description: "Most popular choice. Perfectly balances premium aesthetics with durability.",
      features: [
        "Gold Grade Gurjan Plywood",
        "1.0mm Glossy Laminate",
        "Soft-Close German Hinges",
        "Tandem Box Drawers",
        "Extended Warranty"
      ],
      accent: "bg-secondary/10",
      border: "border-secondary/20",
      featured: true
    },
    {
      name: "Premium Kitchen",
      price: "2,800+",
      description: "Luxurious finish and top-of-the-line hardware for high-end homes.",
      features: [
        "BWP HDMR / Solid Wood",
        "Acrylic / PU Lacquer Finish",
        "Blum / Hafele Hardware",
        "High-Gloss Seamless Edge",
        "Premium Integrated Lighting"
      ],
      accent: "bg-primary/5",
      border: "border-primary/10"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-primary mb-6 leading-tight">
            Price <span className="text-primary/60">Guidelines</span>
          </h2>
          <p className="text-slate-600 font-medium">
            Approximate cost per square foot for different kitchen styles. Choose what fits your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "relative bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all hover:shadow-xl group overflow-hidden",
                tier.border,
                tier.featured ? "shadow-lg ring-2 ring-accent" : ""
              )}
            >
              {tier.featured && (
                <div className="absolute top-6 right-6 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className={cn("w-14 h-14 rounded-2xl mb-8 flex items-center justify-center", tier.accent)}>
                <Check size={24} className="text-primary" />
              </div>

              <h3 className="text-2xl font-black text-primary mb-2">
                {tier.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-primary">₹{tier.price}</span>
                <span className="text-slate-400 text-sm font-bold">/ sq.ft.</span>
              </div>

              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                {tier.description}
              </p>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-secondary" />
                    </div>
                    <span className="text-slate-700 text-sm font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <Info size={14} /> Includes Labor & Install
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
