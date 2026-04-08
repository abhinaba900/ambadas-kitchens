"use client";

import React from "react";
import { MessageSquare, PenTool, ClipboardCheck, Factory, Hammer, Key } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Consultation",
    description: "Detailed discussion of your vision and lifestyle needs.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Design & Planning",
    description: "Creative 3D visualizations and spatial layouts for your approval.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Material Selection",
    description: "Choosing finishes, colors, and textures at our experience center.",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Factory Production",
    description: "Precision manufacturing using state-of-the-art machinery.",
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "On-site Installation",
    description: "Seamless fitting by our professionally trained technicians.",
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Handover",
    description: "Final walkthrough and delivery of your dream home.",
  },
];

export function InteriorsProcess() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">The Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Our 6-Step <span className="text-accent">Execution Flow</span>
          </h2>
          <p className="text-white/60 text-lg">
            We follow a structured process to ensure that your home is delivered on time, within budget, and as per design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl group-hover:bg-accent group-hover:text-primary transition-all duration-500 mb-8 relative border-4 border-primary">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary font-bold text-xs flex items-center justify-center border-4 border-primary">
                  0{index + 1}
                </span>
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
