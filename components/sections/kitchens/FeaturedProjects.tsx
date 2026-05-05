"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { allKitchenContent } from "./DesignStyles";

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Recently <span className="text-accent underline decoration-accent/30 underline-offset-8">Delivered</span> Kitchens
            </h2>
            <p className="text-slate-600 text-lg">
              Check out some of our real-world modular kitchen installations across Bangalore. Quality you can see.
            </p>
          </div>
          <Link href="/portfolio#portfolio-gallery" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-colors flex items-center gap-2 shrink-0">
            View Full Portfolio
            <ExternalLink size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKitchenContent.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.image}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-1">{project.style} Series</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Before/After Promo */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 border border-slate-200">
           <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
             <Image 
                src="/kitchens/hero.png" 
                alt="After" 
                fill 
                className="object-cover"
             />
             <div className="absolute top-4 left-4 px-4 py-1 bg-accent text-primary font-bold rounded-full flex items-center gap-2">
               <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
               Latest Project
             </div>
           </div>
           <div className="w-full lg:w-1/2 space-y-6">
             <h3 className="text-3xl font-bold text-primary">Transforming Old Spaces</h3>
             <p className="text-slate-600 leading-relaxed">
               We don't just build new kitchens; we transform tired old spaces into modern, functional culinary hubs. Our team handles everything from dismantle to final touch-ups.
             </p>
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                 <p className="font-bold text-primary text-2xl">100%</p>
                 <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Customized</p>
               </div>
               <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                 <p className="font-bold text-primary text-2xl">4 Weeks</p>
                 <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Delivery</p>
               </div>
             </div>
             <button className="w-full py-4 bg-accent text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               Get a Free Transformation Quote
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
