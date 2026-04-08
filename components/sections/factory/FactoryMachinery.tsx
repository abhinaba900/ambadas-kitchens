"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Scissors, Layers, CheckCircle } from "lucide-react";

export function FactoryMachinery() {
  const machinery = [
    {
      title: "CNC Cutting Machine",
      description: "German-engineered precision for millimeter-perfect cuts on every panel.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Auto Edge Banding",
      description: "Seamless finish with high-pressure heat bonding for zero-glue edge joints.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1580920461922-ee625ecbfc27?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Multi-Drill Boring",
      description: "Pre-drilled hardware holes ensure perfect fit for all hinges and slides.",
      icon: Scissors,
      image: "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Lamination Press",
      description: "High-pressure bonding for scratch-resistant and long-lasting finishes.",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
            Advanced Technology for <br /> <span className="text-accent italic">Flawless Results.</span>
          </h2>
          <p className="text-slate-600 text-lg mt-4 max-w-xl">
            Our facility is equipped with state-of-the-art machinery that eliminates manual guesswork and delivers consistent quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machinery.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={machine.image} 
                    alt={machine.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                    <Icon className="text-accent" size={24} />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">{machine.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
