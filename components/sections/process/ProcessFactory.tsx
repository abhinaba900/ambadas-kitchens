"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Hammer, ArrowRight, Gauge, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function ProcessFactory() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] -z-0 opacity-50" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/10 blur-[100px] -z-0 opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-sm font-semibold tracking-wider">
              <Hammer size={16} className="text-accent" /> In-House
              Manufacturing
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Factory Precision at <br />{" "}
              <span className="text-accent">Our Own Facility.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Unlike many vendors, we manufacture in-house — ensuring better
              quality control and faster delivery. No intermediaries, no delays,
              just pure factory excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                  <Gauge size={24} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-xs">
                    Precise finish
                  </p>
                  <p className="text-sm text-white/50">
                    CNC cutting technology
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-xs">
                    Quality assurance
                  </p>
                  <p className="text-sm text-white/50">
                    Multi-stage inspections
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-xs">
                    Fast delivery
                  </p>
                  <p className="text-sm text-white/50">
                    Optimized production pipeline
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex  gap-1">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="text-primary group"
              >
                <Link href="/factory" className="flex  gap-1">
                  Explore Our Factory
                  <ArrowRight className="ml-2 group-hover:translate-x-0 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video lg:aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl skew-y-2 border-4 border-white/10 bg-slate-800"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Our factory machines"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />

              <div className="absolute bottom-8 left-8 z-20 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs uppercase tracking-widest font-bold text-white/80">
                    Operational
                  </p>
                </div>
                <p className="text-2xl font-bold font-display text-white italic">
                  "Built with CNC Precision."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
