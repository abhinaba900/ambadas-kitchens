"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function WhatsAppStrip() {
  return (
    <section className="bg-primary pt-12 pb-12 overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light/30 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:px-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.3)]">
              <FaWhatsapp size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                Prefer quick response?
              </h3>
              <p className="text-green-300 font-medium">
                Chat with our experts on WhatsApp for instant project updates.
              </p>
            </div>
          </div>
          
          <Button variant="accent" size="lg" className="w-full md:w-auto h-16 px-10 group bg-[#25D366] border-none hover:bg-[#20ba5a] shadow-xl transition-all" asChild>
            <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span className="text-white font-bold text-lg">WhatsApp Now</span>
              <ExternalLink className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
