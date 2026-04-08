"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

const projects = [
  {
    title: "Modern Minimalist",
    location: "Bellandur, Bangalore",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
  },
  {
    title: "Luxury Walk-in",
    location: "Indiranagar, Bangalore",
    image: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
  },
  {
    title: "Space-Saving Slider",
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
  },
  {
    title: "Hinged Excellence",
    location: "HSR Layout, Bangalore",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
];

export function WardrobePortfolio() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4 text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold uppercase tracking-widest text-sm"
            >
              Recent Installs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight"
            >
              Wardrobe <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Masterpieces</span> <br />Across Bangalore
            </motion.h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-3 group px-8 py-6 rounded-full hover:bg-primary hover:text-white transition-all text-lg font-bold">
            View Full Portfolio
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/95 backdrop-blur-md rounded-[2rem] border border-white/20 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  <div className="flex items-center gap-1 text-accent font-black">
                    <Star size={18} fill="currentColor" />
                    <span>{project.rating}</span>
                  </div>
                </div>
                <p className="text-slate-500 font-bold mb-4">{project.location}</p>
                <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <span>View details</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full py-6 rounded-full text-lg font-bold">View Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
