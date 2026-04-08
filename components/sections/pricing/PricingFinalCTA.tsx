"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function PricingFinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50 skew-y-3 origin-top-left -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-10">
              <Sparkles size={14} className="text-secondary" />
               Your Dream Project Starts Here
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-primary mb-8 leading-tight italic">
              Want an <span className="text-primary/70">Exact Quote?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Take the first step towards your stunning new home. Our experts are ready to provide a detailed, itemized quote absolutely free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-20 px-12 bg-[#25D366] text-white text-xl font-black rounded-[2rem] hover:scale-105 transition-all shadow-xl animate-bounce-subtle">
                <FaWhatsapp size={24} className="mr-3" />
                WhatsApp Now
                <ChevronRight className="ml-2" />
              </a>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-20 px-12 text-xl font-black rounded-[2rem] bg-white border-2 border-primary/10 hover:border-primary group"
              >
                <Calendar size={24} className="mr-3" />
                Book Consultation
              </Button>
            </div>
            
            <p className="mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-slate-200"></span>
              Join 500+ Happy Families in Bangalore
              <span className="w-8 h-px bg-slate-200"></span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
