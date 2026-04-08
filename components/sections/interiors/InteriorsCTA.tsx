"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import { Button } from "@/components/ui/Button";

export function InteriorsCTA() {
  const { openConsultationModal } = useModal();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 md:p-20 text-center md:text-left text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2" />
          
          <div className="lg:w-3/5 relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Entire <span className="text-accent italic">Living Experience</span>
            </h2>
            <p className="text-xl text-white/70">
              From modular kitchens to statement living rooms, we bring Bangalore's finest craftsmanship to every corner of your home.
            </p>
          </div>
          
          <div className="lg:w-2/5 w-full flex flex-col gap-6 relative z-10">
            <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-20 text-xl font-bold bg-[#25D366] text-white rounded-2xl hover:scale-105 transition-all shadow-xl">
              <FaWhatsapp size={28} />
              WhatsApp Now
            </a>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="h-20 text-xl font-bold border-white text-white hover:bg-white hover:text-primary transition-all duration-500"
              onClick={openConsultationModal}
            >
              <Calendar className="mr-3 w-6 h-6" />
              Book Site Visit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
