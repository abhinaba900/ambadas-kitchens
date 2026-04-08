"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Factory, Hammer } from "lucide-react";

export function FactoryComparison() {
  const comparisonData = [
    {
      feature: "Cutting & Sizing",
      factory: "CNC Precision (millimeter-perfect)",
      carpentry: "Manual Handsaw (prone to errors)",
      factoryIcon: <Check className="text-green-500" />,
      carpentryIcon: <X className="text-red-500" />,
    },
    {
      feature: "Edge Banding",
      factory: "High-heat machine (zero glue joints)",
      carpentry: "Manual Glue (yellows/peels over time)",
      factoryIcon: <Check className="text-green-500" />,
      carpentryIcon: <X className="text-red-500" />,
    },
    {
      feature: "Installation Time",
      factory: "45 Days (fully predictive)",
      carpentry: "90+ Days (highly unpredictable)",
      factoryIcon: <Check className="text-green-500" />,
      carpentryIcon: <X className="text-red-500" />,
    },
    {
      feature: "On-site Dust",
      factory: "Clean (modules pre-assembled)",
      carpentry: "Extremely Dirty (cutting on-site)",
      factoryIcon: <Check className="text-green-500" />,
      carpentryIcon: <X className="text-red-500" />,
    },
    {
      feature: "Hardware Fit",
      factory: "Pre-drilled boring holes",
      carpentry: "Manual drilling (screws loosen/sag)",
      factoryIcon: <Check className="text-green-500" />,
      carpentryIcon: <X className="text-red-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Factory vs. <span className="text-accent italic">Local Carpentry.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Not all kitchens are built the same. See why factory-built modules are the superior choice for your home.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-3 bg-primary text-white font-bold p-6 text-center text-sm md:text-lg uppercase tracking-widest">
              <div className="text-left">Feature</div>
              <div className="flex items-center justify-center gap-2 text-accent">
                 <Factory size={20} className="hidden md:block" /> Factory
              </div>
              <div className="flex items-center justify-center gap-2 text-white/50">
                 <Hammer size={20} className="hidden md:block" /> Local Carpentry
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 p-6 items-center text-center hover:bg-slate-50 transition-colors"
                >
                  <div className="text-left font-bold text-primary text-sm md:text-base">{row.feature}</div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                       {row.factoryIcon}
                    </div>
                    <span className="text-xs md:text-sm text-slate-600 font-medium">{row.factory}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                       {row.carpentryIcon}
                    </div>
                    <span className="text-xs md:text-sm text-slate-400">{row.carpentry}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
