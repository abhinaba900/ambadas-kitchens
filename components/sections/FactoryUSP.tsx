"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight, Settings } from "lucide-react";
import { motion } from "framer-motion";

export function FactoryUSP() {
  const points = [
    {
      title: "CNC Precision Cutting",
      description: "Automated panel cutting ensuring 0.1mm tolerance for perfect alignment.",
    },
    {
      title: "German Edge-Banding",
      description: "High-temperature bonding for 100% moisture-sealed, durable edges.",
    },
    {
      title: "Pre-Assembled Quality Check",
      description: "Every module is fully assembled and quality checked before dispatch.",
    },
    {
      title: "On-Time Dispatch",
      description: "Predictable lead times with synchronized manufacturing & logistics.",
    },
  ];

  return (
    <section id="factory" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <div className="flex-1 space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent text-sm font-semibold tracking-wide"
            >
              <Settings size={16} /> Our Core Strength
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-tight"
            >
              Built in Our Own Factory, <br />
              <span className="text-accent italic">Not On-Site</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 leading-relaxed text-lg"
            >
              Unlike most local contractors, we manufacture everything in our specialized facility. This prevents dust, noise, and delays at your home while ensuring industrial-grade durability.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">{point.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto text-primary group font-bold">
                <Link href="/our-process" className="flex items-center">
                  Know Our Process
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Right: Factory Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <Image
              src="/factory-quality.png"
              alt="Ambadas Modular Factory"
              fill
              className="object-cover brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            
            <div className="absolute top-8 left-8 py-2 px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">
              Live Factory View
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
