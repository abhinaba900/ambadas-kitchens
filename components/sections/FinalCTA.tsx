"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const { openConsultationModal } = useModal();
  
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to transforming your <br />
            <span className="text-accent italic">Living Space?</span>
          </h2>
          <p className="text-xl text-slate-300">
            Our design experts are just a click away. Get a free consultation and estimate today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              variant="accent" 
              size="lg" 
              className="px-10 py-7 font-bold text-primary shadow-xl"
              onClick={() => openConsultationModal()}
            >
              FREE DESIGN CONSULTATION
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-10 py-7 h-auto bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
              <FaWhatsapp size={24} className="mr-3" />
              WHATSAPP NOW
            </a>
            <a href="tel:+919448396322" className="flex items-center justify-center px-10 py-7 h-auto bg-white text-primary rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xl">
              <Phone size={24} className="mr-3" />
                CALL 94483 96322
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            Available 10:00 AM — 7:00 PM (Monday to Saturday)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
