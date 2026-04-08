"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-primary mb-12"
          >
            Who We Are
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            <p>
              Ambadas Kitchens is a Bangalore-based specialist in premium modular kitchens and home interiors. 
              Founded on the principles of practical design and honest craftsmanship, we have been 
              transforming homes across the city for over two decades.
            </p>
            <p>
              Unlike many in the industry, we operate our own state-of-the-art manufacturing facility. 
              This allows us to maintain absolute control over quality, timelines, and costs, ensuring 
              that every project we deliver meets our rigorous standards of precision and care.
            </p>
            <p className="text-primary font-bold italic">
              "We focus on delivering quality work that lasts."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
