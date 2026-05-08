"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import Link from "next/link";

export function InteriorsHero() {
  const { openConsultationModal } = useModal();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/interiors/hero.png"
          alt="Complete Home Interiors"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 pt-16 md:pt-0 pb-12">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary font-bold text-sm uppercase tracking-wider rounded-full mb-8 shadow-lg shadow-accent/20">
              Complete Home Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
              Complete Home Interiors, <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">Designed & Delivered</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 max-w-2xl leading-relaxed font-medium"
          >
            From kitchens to wardrobes to living spaces — all under one roof. 
            Experience a stress-free transformation of your entire home.
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
              className="text-primary font-bold group text-lg px-12 h-16"
              onClick={() => openConsultationModal()}
            >
              Get Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-all text-lg px-12 h-16 backdrop-blur-sm">
                View Projects
                <Play className="ml-2 w-4 h-4 fill-current" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-8 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col">
              <span className="text-accent font-bold text-2xl">500+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Homes Delivered</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-accent font-bold text-2xl">10+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-accent font-bold text-2xl">100%</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">In-house Production</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-3 text-white/60"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold [writing-mode:vertical-lr]">Scroll to Explore</span>
        <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
