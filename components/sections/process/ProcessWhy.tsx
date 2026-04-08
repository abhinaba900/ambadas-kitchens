"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Users, 
  Timer,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    title: "Structured Workflow",
    description: "Every phase is planned and documented to eliminate errors and maintain complete transparency.",
    icon: Zap,
  },
  {
    title: "Factory Precision",
    description: "Machine-cut components ensure millimetre-perfect fitting and unmatched finishing every time.",
    icon: Target,
  },
  {
    title: "Experienced Team",
    description: "Our in-house experts bring 20+ years of technical knowledge to every interior project.",
    icon: Users,
  },
  {
    title: "On-time Delivery",
    description: "Our streamlined backend processes ensure we meet project deadlines without compromise.",
    icon: Timer,
  },
];

export function ProcessWhy() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider">
              <CheckCircle2 size={16} className="text-accent" /> Why It Works
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
              A Process Refined Over <span className="text-accent">Two Decades</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We've spent 20+ years perfecting the modular kitchen journey. Our process isn't just a list of steps—it's a commitment to quality, speed, and your peace of mind.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0 border border-slate-100">
                    <reason.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">{reason.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl skew-x-2 border-8 border-white">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
                alt="Expert interior process"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 border border-white/50">
                <p className="text-primary font-bold text-lg mb-1 italic">"We handle everything so you don't have to worry."</p>
                <div className="h-1 w-20 bg-accent rounded-full" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
