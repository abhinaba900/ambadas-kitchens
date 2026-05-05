"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { Button } from "@/components/ui/Button";

export function WardrobeCTA() {
  const { openConsultationModal } = useModal();
  
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to <span className="text-accent italic">Maximize Your Storage</span> in Style{"?"}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get a free design consultation and quote for your customized wardrobe solutions today.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full sm:w-auto h-auto py-5 px-10 text-primary uppercase tracking-widest text-sm"
              onClick={() => openConsultationModal()}
            >
              Book Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-transform group shadow-xl uppercase tracking-widest text-sm">
                <FaWhatsapp size={32} className="group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
            </a>
            <a href="tel:+919448396322" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xl uppercase tracking-widest text-sm">
                <Phone size={24} />
                Call 94483 96322
              </button>
            </a>
          </motion.div>
          
          <p className="text-slate-400 text-sm pt-8">
            {"*"}Free consultation | No obligations | Instant estimates
          </p>
        </div>
      </div>
    </section>
  );
}
