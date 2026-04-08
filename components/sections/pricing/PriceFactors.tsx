"use client";

import React from "react";
import { Ruler, Layers, Box, Settings, Sparkles, UserCheck } from "lucide-react";

export function PriceFactors() {
  const factors = [
    {
      title: "Kitchen Size",
      description: "More running feet = more cabinets and hardware materials.",
      icon: <Ruler className="text-primary w-8 h-8" />
    },
    {
      title: "Core Material",
      description: "Choice between Commercial Plywood, Gurjan BWP, or HDMR.",
      icon: <Layers className="text-secondary w-8 h-8" />
    },
    {
      title: "External Finish",
      description: "Laminates are cost-effective; Acrylic and PU Lacquer are premium.",
      icon: <Sparkles className="text-primary w-8 h-8" />
    },
    {
      title: "Hardware Quality",
      description: "Standard vs Soft-Close hinges. Brands like Hafele or Blum.",
      icon: <Settings className="text-secondary w-8 h-8" />
    },
    {
      title: "Accessories",
      description: "Cutlery trays, pull-outs, pantry units, and corner solutions.",
      icon: <Box className="text-primary w-8 h-8" />
    },
    {
      title: "Customization",
      description: "Intricate designs and unique storage needs add to the labor cost.",
      icon: <UserCheck className="text-secondary w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-primary mb-6 leading-tight">
            What <span className="text-primary/60">Affects</span> Pricing?
          </h2>
          <p className="text-slate-600 font-medium">
            Understanding these factors will help you make informed decisions while designing your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {factors.map((factor) => (
            <div 
              key={factor.title}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/10 transition-all hover:shadow-xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                {factor.icon}
              </div>
              <h3 className="text-xl font-black text-primary mb-4 italic underline decoration-transparent group-hover:decoration-accent decoration-4 underline-offset-4 transition-all">
                {factor.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
