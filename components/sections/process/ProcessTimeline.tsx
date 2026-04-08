"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

export function ProcessTimeline() {
  return (
    <section className="py-16 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold uppercase tracking-wider">
              <Calendar size={14} /> Efficiency Guaranteed
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Timeline Expectation
            </h2>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed">
              We value your time. Our production and delivery cycles are optimized for speed without compromising on factory precision.
            </p>
          </div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0 bg-accent text-primary p-8 rounded-2xl shadow-2xl flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock size={32} className="text-primary font-bold" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-60 mb-1">Typical project</p>
              <p className="text-4xl md:text-5xl font-display font-black">2–6 Weeks</p>
              <p className="text-sm font-medium mt-1 leading-tight">(depending on project scope)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
