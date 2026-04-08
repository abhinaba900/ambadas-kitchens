"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Uber Luxury 3BHK",
    location: "Kanakapura Road, Bangalore",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Contemporary", "Luxury"],
  },
  {
    title: "Minimalist Urban Home",
    location: "Whitefield, Bangalore",
    mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
    tags: ["Minimalist", "Space-saving"],
  },
  {
    title: "Modern Classic 2BHK",
    location: "Sarjapur, Bangalore",
    mainImage: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2070&auto=format&fit=crop",
    tags: ["Classic", "Premium"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Featured <span className="text-primary/70">Full Home Projects</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Explore how we transformed empty spaces into beautiful, functional homes across Bangalore.
            </p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 font-bold group">
            View Full Portfolio
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] rounded-3xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                
                {/* Hover overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Maximize2 size={24} strokeWidth={2.5} />
                   </div>
                </div>
                
                <div className="absolute top-6 left-6 flex gap-2">
                   {project.tags.map((tag, tIndex) => (
                     <span key={tIndex} className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg">
                        {tag}
                     </span>
                   ))}
                </div>
              </div>
              
              <div className="max-w-[90%]">
                <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-medium flex items-center gap-2">
                   <span className="w-4 h-[1px] bg-slate-300" /> {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
