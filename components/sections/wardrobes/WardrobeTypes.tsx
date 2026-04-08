"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const types = [
  {
    title: "Sliding Door Wardrobes",
    benefit: "Space-saving & modern look",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    delay: 0.1,
  },
  {
    title: "Hinged Wardrobes",
    benefit: "Classic appeal & full access",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    delay: 0.2,
  },
  {
    title: "Walk-in Wardrobes",
    benefit: "Ultimate luxury & organization",
    image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?auto=format&fit=crop&w=1200&q=80",
    delay: 0.3,
  },
  {
    title: "Loft Storage Units",
    benefit: "Utilization of vertical space",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80",
    delay: 0.4,
  },
];

export function WardrobeTypes() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Explore Styles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Choose Your <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Ideal Wardrobe</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From compact spaces to expansive dressing rooms, we have the perfect fit for every layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: type.delay }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={type.image}
                alt={type.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-slate-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center font-medium">
                  {type.benefit}
                </p>
                <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
