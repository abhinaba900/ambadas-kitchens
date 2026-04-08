"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Award, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import Link from "next/link";

export function Hero() {
  const { openConsultationModal } = useModal();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-24 md:pb-32 overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide"
          >
            <MapPin size={16} /> Based in Bangalore
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-primary"
          >
            Custom Modular Kitchens <br />
            <span className="text-accent">Designed for Your Space</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Factory-built precision. Delivered with perfection. Transform your home with Bangalore's leading modular kitchen specialists.
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
              Get Free Design Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                View Our Projects
              </Button>
            </Link>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Award size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-primary">20+ Years</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-primary">1000+ Kitchens</p>
                <p className="text-xs text-slate-500">Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl skew-y-1 lg:-skew-y-2 border-8 border-white"
        >
          <Image
            src="/hero-kitchen.png"
            alt="Ambadas Premium Modular Kitchen"
            fill
            className="object-cover"
            priority
          />
          {/* Floating Element */}
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-between border border-white/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-primary text-sm">Best Modular Design</p>
                <p className="text-xs text-slate-500">Bangalore Architecture Awards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
