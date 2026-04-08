"use client";

import React from "react";
import { Search, PenTool, Factory, Hammer } from "lucide-react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Consultation",
      description: "We discuss your needs and measure your space meticulously.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Design",
      description: "Custom 3D designs tailored to your style and functionality.",
    },
    {
      icon: <Factory size={24} />,
      title: "Factory Production",
      description: "Precision manufacturing of your modular components in our facility.",
    },
    {
      icon: <Hammer size={24} />,
      title: "Installation",
      description: "Professional assembly and seamless fitting at your site.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            The <span className="text-primary/70">Ambadas Journey</span>
          </h2>
          <p className="text-slate-600">
            Our streamlined process ensures a stress-free experience from the first meeting to the final handover.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[2px] bg-slate-100 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(244,196,48,0.2)] transition-all duration-500 mb-8 relative">
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    0{index + 1}
                  </span>
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
