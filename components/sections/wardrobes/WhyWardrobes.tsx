"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize, Scissors, ShieldCheck, Factory } from "lucide-react";

const reasons = [
  {
    title: "Space Optimization",
    description: "Every millimeter counts. Our designs maximize storage even in the most challenging layouts.",
    icon: <Maximize className="w-10 h-10 text-accent" />,
  },
  {
    title: "Custom Sizing",
    description: "Tailor-made to fit your wall-to-wall and floor-to-ceiling dimensions perfectly.",
    icon: <Scissors className="w-10 h-10 text-accent" />,
  },
  {
    title: "Premium Finishes",
    description: "Only the finest materials and hardware from top global brands are used in our builds.",
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
  },
  {
    title: "Factory Precision",
    description: "Machine-cut accuracy ensures perfect joinery and a flawless finish every single time.",
    icon: <Factory className="w-10 h-10 text-accent" />,
  },
];

export function WhyWardrobes() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            The Ambadas Edge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Why Choose Our <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Custom Wardrobes</span>?
          </motion.h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            We don't just build storage; we create organized experiences that enhance your daily living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:bg-primary group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <div className="group-hover:scale-110 group-hover:text-white transition-all transform group-hover:rotate-[-6deg]">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{reason.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
