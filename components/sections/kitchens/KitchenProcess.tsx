"use client";

import React from "react";
import { MessageSquare, PenTool, Factory, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <MessageSquare size={32} className="text-primary" />,
    title: "1. Consultation",
    description: "Personalized design session to understand your space and taste."
  },
  {
    icon: <PenTool size={32} className="text-primary" />,
    title: "2. Visualizing Design",
    description: "Get immersive 3D renders of your dream kitchen before we build it."
  },
  {
    icon: <Factory size={32} className="text-primary" />,
    title: "3. Factory Production",
    description: "Precision manufacturing using state-of-the-art German machinery."
  },
  {
    icon: <Truck size={32} className="text-primary" />,
    title: "4. Installation",
    description: "Hassle-free setup by expert technicians in 4-6 weeks start to finish."
  }
];

export function KitchenProcess() {
  return (
    <section className="section-padding bg-slate-900 border-t border-white/5">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Our <span className="text-accent underline decoration-accent/30 underline-offset-8">Seamless</span> Process
          </h2>
          <p className="text-slate-400 text-lg">
            From the first sketch to the final knob, we handle every detail with care and precision.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Horizontal Line for Desktop */}
           <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
           
           {steps.map((step, index) => (
             <motion.div
               key={step.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="flex flex-col items-center text-center space-y-6 relative z-10"
             >
               <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,196,48,0.2)] border-8 border-slate-900">
                  {step.icon}
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider">{step.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">
                   {step.description}
                 </p>
               </div>
             </motion.div>
           ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <button className="px-10 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all flex items-center gap-2 group">
             View Detailed Process Guide
             <span className="group-hover:translate-x-1 transition-transform">→</span>
           </button>
        </div>
      </div>
    </section>
  );
}
