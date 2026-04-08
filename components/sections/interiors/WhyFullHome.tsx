"use client";

import React from "react";
import { Palette, PiggyBank, Zap, UserCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const points = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Consistency",
    description: "Ensure a seamless flow of styles, colors, and textures throughout your entire home.",
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Cost Efficiency",
    description: "Bulk material procurement and optimized labor management lead to significant savings.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Faster Execution",
    description: "Parallel manufacturing and synchronized installation reduce project timelines by 30%.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Single Point of Contact",
    description: "No more juggling multiple vendors. One dedicated team for your whole project.",
  },
];

export function WhyFullHome() {
  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">The Sales Advantage</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Why Choose <br />
              <span className="text-accent">Full Home Interiors?</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12 max-w-xl">
              Doing interiors room by room? You may end up spending more and losing design continuity. 
              Our integrated approach ensures quality, savings, and peace of mind.
            </p>
            
            <div className="space-y-4">
               <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-accent font-bold text-lg italic italic">
                    "Doing interiors room by room? You may end up spending more."
                  </p>
               </div>
               <Button variant="accent" size="lg" className="w-full sm:w-auto text-primary font-bold mt-4">
                 Get Full Home Quote
                 <ChevronRight className="ml-2" />
               </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  {point.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{point.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
