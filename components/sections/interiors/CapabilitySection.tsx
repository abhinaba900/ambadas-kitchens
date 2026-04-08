"use client";

import React from "react";
import Image from "next/image";
import { Search, Factory, Hammer, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: <Search className="w-6 h-6 text-accent" />,
    title: "In-house Design Studio",
    description: "Our team of expert interior designers works with you to create tailored 3D visualizations and technical plans.",
  },
  {
    icon: <Factory className="w-6 h-6 text-accent" />,
    title: "Massive Factory Production",
    description: "Precision-engineered modular components manufactured in our state-of-the-art facility for superior finish and durability.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-accent" />,
    title: "Professional On-site Installation",
    description: "Our trained technicians ensure that every piece is fitted perfectly, maintaining the integrity of the design.",
  },
];

export function CapabilitySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Capability</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              Design + Manufacturing <br />
              <span className="text-primary/70">+ Seamless Installation</span>
            </h2>
            
            <div className="space-y-10">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6">
               <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle2 size={24} />
               </div>
               <p className="text-slate-600 font-medium">
                 100% In-house team. No sub-contracting. No hidden delays.
               </p>
            </div>
          </div>
          
          {/* Right: Visuals */}
          <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
               >
                  <Image 
                    src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2070&auto=format&fit=crop" 
                    alt="Design Process" 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 }}
                 className="relative h-48 rounded-3xl overflow-hidden shadow-xl"
               >
                  <Image 
                    src="https://images.unsplash.com/photo-1615974680408-a20e4a345341?q=80&w=2070&auto=format&fit=crop" 
                    alt="Installation" 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
               </motion.div>
            </div>
            <div className="space-y-4">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.1 }}
                 className="relative h-48 rounded-3xl overflow-hidden shadow-xl"
               >
                  <Image 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Factory" 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 }}
                 className="relative h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-accent"
               >
                  <Image 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                    alt="Quality Control" 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
