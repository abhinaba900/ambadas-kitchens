"use client";

import React from "react";
import { Users, Factory, Hammer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Process() {
  const phases = [
    {
      icon: <Users size={32} />,
      title: "Working Phase",
      description: "From the first meeting to final design approval and décor selection.",
      steps: "7 Steps",
      color: "blue"
    },
    {
      icon: <Factory size={32} />,
      title: "Production Phase",
      description: "Precision manufacturing in our state-of-the-art facility using European tech.",
      steps: "7 Steps",
      color: "green"
    },
    {
      icon: <Hammer size={32} />,
      title: "Installation Phase",
      description: "Expert on-site assembly, quality checks, and seamless final handover.",
      steps: "7 Steps",
      color: "amber"
    },
  ];

  return (
    <section id="process" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            The <span className="text-accent">Ambadas</span> Journey
          </h2>
          <p className="text-slate-600 text-lg">
            Our streamlined process ensures a stress-free experience from the first meeting to the final handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3",
                index === 0 ? "bg-blue-50 text-blue-600" :
                index === 1 ? "bg-green-50 text-green-600" :
                "bg-amber-50 text-amber-600"
              )}>
                {phase.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Phase 0{index + 1}</span>
                <h3 className="text-2xl font-display font-bold text-primary">{phase.title}</h3>
              </div>
              
              <p className="text-slate-500 mb-8 leading-relaxed">
                {phase.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-50 w-full flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">{phase.steps}</span>
                <Link 
                  href={`/our-process?phase=${phase.title.split(' ')[0].toLowerCase()}`} 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors"
                >
                  View Chronology <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function for conditional classes if not imported
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
