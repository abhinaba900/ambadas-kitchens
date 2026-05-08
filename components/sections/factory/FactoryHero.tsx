"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Factory, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function FactoryHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern manufacturing facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary z-10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary-light/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-accent text-sm font-bold uppercase tracking-widest border border-white/10"
          >
            <Factory size={16} /> Precision Manufacturing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
          >
            Built in Our <br />
            <span className="text-accent italic">Own Factory.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            Say goodbye to local carpentry errors. Experience the power of precision technology and superior quality control at our facility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button variant="accent" size="lg" className="text-primary font-black shadow-xl hover:scale-105 transition-transform group">
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-colors">
              Explore Our Work
            </Button>
          </motion.div>

          {/* Quick Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:py-10 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-bold">100% Quality</p>
                <p className="text-white/50 text-sm">Strict in-house QC</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-white font-bold">45-Day Delivery</p>
                <p className="text-white/50 text-sm">Optimized production</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                <Factory size={24} />
              </div>
              <div>
                <p className="text-white font-bold">CNC Precision</p>
                <p className="text-white/50 text-sm">German technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
