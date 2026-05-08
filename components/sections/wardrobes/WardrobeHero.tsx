"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export function WardrobeHero() {
  const { openConsultationModal } = useModal();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Wardrobe Design"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 pt-16 md:pt-0 pb-12">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary font-bold text-sm uppercase tracking-wider rounded-full mb-8 shadow-lg shadow-accent/20">
              Wardrobes Designed for Perfection
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
              Custom Wardrobes <br />
              <span className="text-accent">Designed for Your Space</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed font-medium"
          >
            Maximize storage. Built with precision. Experience the ultimate organization with our custom-fit wardrobe solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <Button 
              variant="accent" 
              size="lg" 
              className="text-primary font-bold group text-lg px-12"
              onClick={() => openConsultationModal()}
            >
              Get Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary transition-all text-lg px-12"
              onClick={() => document.getElementById("wardrobe-types")?.scrollIntoView({ behavior: "smooth" })}
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
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">Explore More</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
