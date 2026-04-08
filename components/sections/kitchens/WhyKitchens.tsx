"use client";

import React from "react";
import { Settings, Ruler, ShieldCheck, Drill } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Settings size={40} className="text-accent" />,
    title: "Factory Precision",
    description: "Machine-cut finishes with zero error. Built in our German-machine facility."
  },
  {
    icon: <Ruler size={40} className="text-accent" />,
    title: "Custom Sizing",
    description: "Every millimeter matters. We design specifically for your unique floor plan."
  },
  {
    icon: <ShieldCheck size={40} className="text-accent" />,
    title: "Durable Materials",
    description: "High-grade BWP plywood and acrylics that last for 15+ years of daily use."
  },
  {
    icon: <Drill size={40} className="text-accent" />,
    title: "Clean Installation",
    description: "Professional, dust-free installation by our trained in-house team."
  }
];

export function WhyKitchens() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Why Bangalore Chooses <span className="text-accent">Ambadas Kitchens</span>
          </h2>
          <p className="text-slate-300 text-lg">
            We bring years of expertise and state-of-the-art manufacturing to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-display">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 relative rounded-3xl overflow-hidden h-64 md:h-80 flex items-center justify-center text-center p-8">
           <div className="absolute inset-0 bg-accent -skew-y-3 origin-left transform translate-y-4" />
           <div className="z-10 text-primary">
             <h3 className="text-2xl md:text-4xl font-bold mb-4 font-display">Ready for a Lifetime Kitchen?</h3>
             <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-80">Stop worrying about termite or moisture damage with our BWP plywood solutions.</p>
             <button className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl">
               Book a Showroom Visit
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
