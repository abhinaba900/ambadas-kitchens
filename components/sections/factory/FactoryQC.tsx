"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Ruler, ClipboardCheck, Sparkles } from "lucide-react";

export function FactoryQC() {
  const qcPoints = [
    {
      title: "Precision Cutting",
      description: "Every panel is verified for size within 0.5mm tolerance.",
      icon: <Ruler className="text-accent" size={24} />,
    },
    {
      title: "Edge Strength",
      description: "Rigorous testing to ensure edge bands never peel off.",
      icon: <ShieldCheck className="text-accent" size={24} />,
    },
    {
      title: "Surface Finish",
      description: "Visual inspection for scratches, bubbles, or imperfections.",
      icon: <Sparkles className="text-accent" size={24} />,
    },
    {
      title: "Hardware Check",
      description: "Pre-installation testing of all hinges and drawer slides.",
      icon: <ClipboardCheck className="text-accent" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] -z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-accent rounded-full text-sm font-semibold tracking-wider">
                Our Guarantee
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Every Unit is Checked <br /> <span className="text-accent italic">Before Delivery.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                Quality isn't just a promise; it's a measurable process. Our engineers perform multi-stage inspections to ensure your kitchen arrives in perfect condition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {qcPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-white/50 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
