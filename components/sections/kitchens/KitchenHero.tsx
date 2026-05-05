"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export function KitchenHero() {
  const { openConsultationModal } = useModal();
  
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kitchens/hero.png"
          alt="Premium Modular Kitchen Design"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Expertly Crafted Modular Kitchens
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Modular Kitchens Designed for <span className="text-accent">Modern Living</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed"
          >
            Custom-built in our factory. Designed for your lifestyle. Experience the perfect blend of aesthetics and functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="accent" 
              size="lg" 
              className="text-primary font-bold group"
              onClick={() => openConsultationModal()}
            >
              Get Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary transition-colors"
              onClick={() => document.getElementById("design-styles")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Designs
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
