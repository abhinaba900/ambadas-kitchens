"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const types = [
  {
    title: "Hinged Type Wardrobes",
    benefit: "Classic appeal & full access",
    image: "/portfolio/wardrobes/wardrobe-01.webp",
    delay: 0.1,
  },
  {
    title: "Sliding Type Wardrobes",
    benefit: "Space-saving & modern look",
    image: "/portfolio/wardrobes/wardrobe-03.webp",
    delay: 0.2,
  },
  {
    title: "Floor to Ceiling Type",
    benefit: "Maximum vertical storage",
    image: "/portfolio/wardrobes/wardrobe-13.webp",
    delay: 0.3,
  },
  {
    title: "L-Type & Customized",
    benefit: "Perfect for corner spaces",
    image: "/portfolio/wardrobes/wardrobe-19.webp",
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
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            We offer various types of wardrobes like <strong className="text-primary">Hinged type, Sliding type, Floor to Ceiling type, L Type</strong> and in many customized manners. From compact spaces to expansive dressing rooms, we have the perfect fit for every layout.
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
