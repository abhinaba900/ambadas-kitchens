"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Modular Kitchens",
    description: "Ergonomic designs with premium factory finishes.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Wardrobes",
    description: "Custom floor-to-ceiling storage solutions.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "TV Units",
    description: "Modern entertainment centers for your living space.",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Living Room Interiors",
    description: "Complete styling, lighting, and wall treatments.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Designer Bedrooms",
    description: "Cozy, functional, and aesthetically pleasing retreats.",
    image: "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Storage Solutions",
    description: "Clever cabinetry for every corner of your home.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
  },
];

export function InteriorsOffer() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Scope</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            End-to-End <span className="text-primary/70">Interior Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We handle everything from conceptualization to the final touch, ensuring your home reflects your personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {offer.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 gap-2 transition-all">
                  Learn More <span className="w-8 h-[2px] bg-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
