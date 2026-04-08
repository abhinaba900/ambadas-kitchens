"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function FactoryVideo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Inside Our <span className="text-accent italic">Facility.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Ready to witness the precision yourself? Take a virtual walkthrough of our factory and see where the magic happens.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
              alt="Factory video thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(244,196,48,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play size={40} className="text-primary fill-primary ml-1" />
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Virtual Tour</p>
              <h3 className="text-2xl font-bold">2-Min Factory Walkthrough</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
