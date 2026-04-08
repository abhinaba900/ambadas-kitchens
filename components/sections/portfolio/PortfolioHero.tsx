"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function PortfolioHero() {
  const images = [
    "https://images.unsplash.com/photo-1742280879518-ada47b660ccd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Collage with Overlay */}
      <div className="absolute inset-0 z-0 flex">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-full opacity-30">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-full w-full">
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center lg:text-left py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-bold tracking-wider mb-6 border border-accent/20 uppercase"
          >
            Real Projects. Real Precision.
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-6"
          >
            Our Work Speaks <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">for Itself</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            Explore our curated portfolio of modular kitchens, wardrobes, and full home interiors designed and delivered across Bangalore. Every project is a testament to our factory-first quality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="accent" size="lg" className="w-full sm:w-auto text-primary group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats overlay or decorative element */}
      <div className="absolute right-0 bottom-0 w-full h-24 bg-white hidden lg:block" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
    </section>
  );
}
