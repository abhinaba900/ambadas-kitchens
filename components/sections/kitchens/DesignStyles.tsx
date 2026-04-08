"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const styles = [
  {
    name: "Modern",
    image: "/kitchens/styles/modern.png",
    description: "Sleek, glossy, and futuristic designs."
  },
  {
    name: "Contemporary",
    image: "/kitchens/styles/contemporary.png",
    description: "Warm textures and balanced aesthetics."
  },
  {
    name: "Minimalist",
    image: "/kitchens/styles/minimalist.png",
    description: "Handle-less cabinets and pure functionality."
  },
  {
    name: "Classic",
    image: "/kitchens/styles/classic.png",
    description: "Timeless shaker styles and elegant details."
  }
];

export function DesignStyles() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Our Signature Design Styles
            </h2>
            <p className="text-slate-600 text-lg">
              From the ultra-modern to the timeless classic, we craft kitchens that reflect your personality. Every design is custom-built with precision.
            </p>
          </div>
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap">
            Explore All Designs
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer shadow-lg"
            >
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {style.name}
                </h3>
                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {style.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
