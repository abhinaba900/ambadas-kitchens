"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Award, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import Link from "next/link";

export function AboutHero() {
  const { openConsultationModal } = useModal();

  return (
    <section id="about-hero" className="relative min-h-[70vh] flex items-center pt-32 pb-20 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide"
          >
            <Award size={16} /> 20+ Years of Craftsmanship
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-primary"
          >
            Built on Experience. <br />
            <span className="text-accent">Driven by Quality.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Delivering modular kitchens and interiors with precision and care. We focus on delivering quality work that lasts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full sm:w-auto text-primary group"
              onClick={openConsultationModal}
            >
              Get in Touch
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl skew-y-1 lg:-skew-y-2 border-8 border-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200"
            alt="Ambadas Kitchens Team at Work"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
