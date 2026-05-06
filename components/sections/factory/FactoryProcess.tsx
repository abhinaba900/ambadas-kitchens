"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Layout, 
  Target, 
  Box, 
  Hammer, 
  ShieldCheck, 
  Truck, 
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { 
    title: "Pressing", 
    subtitle: "of laminate",
    description: "Applying premium laminate with plywood using high-pressure bonding.", 
    icon: Layers,
    color: "blue"
  },
  { 
    title: "Cutting", 
    subtitle: "of panels",
    description: "Precision CNC cutting as per technical drawings for 0.1mm accuracy.", 
    icon: Layout,
    color: "green"
  },
  { 
    title: "Multi-Boring", 
    subtitle: "drilling",
    description: "Automated drilling for perfect fitting of all hardware components.", 
    icon: Target,
    color: "purple"
  },
  { 
    title: "Edgebanding", 
    subtitle: "of panels",
    description: "Seamless edge finishing using advanced German Homag machines.", 
    icon: Box,
    color: "amber"
  },
  { 
    title: "Assembly", 
    subtitle: "of cabinets",
    description: "Expert modular assembly ensuring every component fits perfectly.", 
    icon: Hammer,
    color: "red"
  },
  { 
    title: "QC Process", 
    subtitle: "Quality check",
    description: "Rigorous 32-point quality inspection for every modular unit.", 
    icon: ShieldCheck,
    color: "emerald"
  },
  { 
    title: "Dispatch", 
    subtitle: "to site",
    description: "Careful packaging and logistics for damage-free site delivery.", 
    icon: Truck,
    color: "primary"
  },
];

export function FactoryProcess() {
  return (
    <section className="pt-32 pb-48 bg-slate-50 overflow-hidden" id="manufacturing-flow">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
              Precision Pipeline
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Our <span className="text-accent">Manufacturing</span> Pipeline
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Experience industrial excellence. Here's how we transform raw materials into precision-engineered modular units.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 opacity-40 grayscale pb-2">
            <span className="text-2xl font-black tracking-tighter text-primary">BIESSE</span>
            <span className="text-2xl font-black tracking-tighter text-primary lowercase">imos</span>
            <span className="text-2xl font-black tracking-tighter text-primary uppercase">HOMAG</span>
          </div>
        </div>

        {/* Manufacturing Flow UI */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-34 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className="mb-8 flex items-center gap-4">
                   <span className="text-5xl font-display font-black text-slate-200 group-hover:text-accent/30 transition-colors duration-500">
                     0{index + 1}
                   </span>
                   <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-0 shadow-lg",
                    index === 0 ? "bg-blue-600 text-white" :
                    index === 1 ? "bg-green-600 text-white" :
                    index === 2 ? "bg-purple-600 text-white" :
                    index === 3 ? "bg-amber-500 text-white" :
                    index === 4 ? "bg-red-500 text-white" :
                    index === 5 ? "bg-emerald-600 text-white" :
                    "bg-primary text-white"
                  )}>
                    <step.icon size={24} />
                  </div>

                  <div className="space-y-1 mb-4">
                    <h4 className="text-xl font-bold text-primary leading-tight uppercase tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="text-slate-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-primary rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold">Factory-Grade Quality, Delivered.</h3>
              <p className="text-white/60 text-lg max-w-2xl">
                Our manufacturing process is integrated with European tech to ensure your home interiors are built to last a lifetime.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20">
              <ShieldCheck size={40} className="text-accent" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Verified Output</p>
                <p className="text-xl font-bold">100% Precision</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
