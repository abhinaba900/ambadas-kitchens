"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const finishes = [
  {
    title: "Premium Laminates",
    description: "Wide range of textures from high-gloss to wood-grain finishes.",
    properties: ["Scratch Resistant", "Easy Maintenance", "Highly Durable"],
    color: "bg-amber-100",
  },
  {
    title: "Sophisticated Acrylic",
    description: "Ultra-glossy, mirror-like finish for a contemporary, luxurious look.",
    properties: ["UV Resistant", "Water Proof", "Mirror Finish"],
    color: "bg-blue-100",
  },
  {
    title: "Designer Glass",
    description: "Tinted, frosted, or lacquered glass for a sophisticated modern vibe.",
    properties: ["Opaque & Translucent", "Sleek Look", "Easy to Clean"],
    color: "bg-emerald-100",
  },
  {
    title: "Matte & Gloss Mix",
    description: "A combination of textures for a unique, customized aesthetic.",
    properties: ["Unique Styling", "Modern Feel", "Versatile"],
    color: "bg-slate-100",
  },
];

export function FinishesMaterials() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Exquisite Finishes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Finishes that Define <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Luxury</span>
          </motion.h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            Choose from our curated collection of premium materials that ensure both aesthetic brilliance and long-lasting durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {finishes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] group-hover:bg-accent/20 transition-colors" />
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-slate-500 mb-6 font-medium leading-relaxed">{item.description}</p>
              
              <ul className="space-y-3">
                {item.properties.map((prop, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase italic">
                    <Check size={16} className="text-accent font-black" />
                    {prop}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
