"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { Button } from "@/components/ui/Button";

export function KitchensCTA() {
  const { openConsultationModal } = useModal();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Craft Your <span className="text-accent italic">Dream Kitchen</span> with Bangalore's Best
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Book your free consultation today and get a preliminary layout and estimate in just 48 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl group">
                <FaWhatsapp size={24} />
                WhatsApp Now
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-16 px-10 border-white text-white hover:bg-white hover:text-primary transition-all"
                onClick={() => openConsultationModal()}
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-white/40 text-sm italic">
              *Serving all of Bangalore with 100% factory-made precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
