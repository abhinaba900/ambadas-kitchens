"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Factory, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function AboutProcessConnection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 -z-0" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
            {/* Content Area */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-accent rounded-full text-sm font-semibold tracking-wide"
              >
                <Factory size={16} /> Fully Integrated System
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-bold text-white leading-tight"
              >
                We Design, Manufacture, <br />
                & Install — <span className="text-accent underline decoration-white/20 underline-offset-8 decoration-4">All Under One Roof.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
              >
                Our factory-first approach means you get transparency, speed, and 
                precision that local carpenters simply cannot match. Experience 
                the reliability of a professional system.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <Link href="/factory">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto text-primary group">
                    Explore Our Factory
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            {/* Visual Area */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1774638641766-7eae5fc3b64c?q=80&w=2070&auto=format&fit=crop"
                    alt="Factory Machinery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-accent p-6 rounded-3xl text-primary flex flex-col justify-center">
                  <ShieldCheck size={40} className="mb-4" />
                  <p className="font-bold text-lg leading-tight">20-Year Warranty Guaranteed</p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-white flex flex-col justify-center">
                  <Settings size={40} className="mb-4 text-accent" />
                  <p className="font-bold text-lg leading-tight">Precision Manufacturing</p>
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1667400104764-a5fd01a919b0?q=80&w=2070&auto=format&fit=crop"
                    alt="Design Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
