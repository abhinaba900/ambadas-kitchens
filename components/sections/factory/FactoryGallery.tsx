"use client";

import React from "react";
import { motion } from "framer-motion";

export function FactoryGallery() {
  const images = [
    {
      src: "/images/gallery/cnc-precision.png",
      title: "CNC Precision",
      category: "Machine",
    },
    {
      src: "/images/gallery/skilled-workforce.png",
      title: "Skilled Workforce",
      category: "Team",
    },
    {
      src: "/images/gallery/production-line.png",
      title: "Production Line",
      category: "Facility",
    },
    {
      src: "/images/gallery/quality-check.png",
      title: "Quality Check",
      category: "Process",
    },
    {
      src: "/images/gallery/edge-finisher.png",
      title: "Edge Finisher",
      category: "Machine",
    },
    {
      src: "/images/gallery/hardware-prep.png",
      title: "Hardware Prep",
      category: "Assembly",
    },
  ];

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 text-white">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Factory <span className="text-accent">Gallery.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Take a look inside our state-of-the-art facility where your dream kitchen comes to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-accent text-xs font-bold uppercase tracking-widest">{image.category}</p>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
