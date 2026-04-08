"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Scissors, CheckCircle, Package, Monitor } from "lucide-react";

export function FactoryProcess() {
  const steps = [
    {
      title: "Digital Planning",
      description: "Precise 3D designs converted into machine-readable code.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Machine Cutting",
      description: "Panels are cut to exact dimensions using German machinery.",
      icon: <Scissors size={24} />,
    },
    {
      title: "Edge Finishing",
      description: "High-pressure edge banding for a seamless, durable look.",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Modular Assembly",
      description: "Modules are put together for a factory-perfect fit.",
      icon: <Hammer size={24} />,
    },
    {
      title: "Quality Inspection",
      description: "Rigorous checks before packaging for onsite delivery.",
      icon: <Package size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Manufacturing <span className="text-accent">Flow.</span>
          </h2>
          <p className="text-slate-600 text-lg">
            From raw material to finished product — our automated process ensures zero waste and maximum quality.
          </p>
        </div>

        <div className="relative">
          {/* Progress line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-slate-100 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-accent shadow-xl border-8 border-white group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
