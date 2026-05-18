"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
    style: "Modern Minimalist",
  },
  {
    name: "Master Bedroom",
    image: "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?q=80&w=2070&auto=format&fit=crop",
    style: "Luxury Comfort",
  },
  {
    name: "Designer Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    style: "Ergonomic & Chic",
  },
  {
    name: "Dining Area",
    image: "https://images.unsplash.com/photo-1769140771440-e691bc16bf8e?q=80&w=2070&auto=format&fit=crop",
    style: "Sophisticated Dining",
  },
];

export function RoomShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Visual Experience</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            A Glimpse Into <span className="text-primary/70">Beautiful Living</span>
          </h2>
        </div>
        <p className="text-slate-500 max-w-sm">
          Explore our signature interior styles designed for modern Indian homes.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="h-[350px] sm:h-[450px] md:h-[500px] relative rounded-3xl overflow-hidden group shadow-xl"
          >
            <Image
              src={room.image}
              alt={room.name}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">{room.style}</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">{room.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
