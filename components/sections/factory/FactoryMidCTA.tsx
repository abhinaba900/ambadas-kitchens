"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export function FactoryMidCTA() {
  const { openConsultationModal } = useModal();
  return (
    <section className="py-20 bg-accent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left text-primary">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Want a Factory Tour? <br />
              <span className="text-primary/70 italic underline decoration-primary/20">See where the magic happens.</span>
            </h2>
            <p className="text-primary/80 text-lg md:text-xl font-medium">
              We're proud of our setup. Visit us to see your own project being built with precision.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
               <FaWhatsapp size={20} className="mr-2" />
               Chat on WhatsApp
            </a>
            <button 
              className="flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl group"
              onClick={() => openConsultationModal({ category: "Factory Tour Visit" })}
            >
               Request a Visit
               <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
