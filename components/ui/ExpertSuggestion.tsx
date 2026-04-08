"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function ExpertSuggestion() {
  return (
    <section className="py-12 bg-accent/5 border-y border-accent/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 animate-bounce">
              <HelpCircle size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-primary">Not sure what suits your space?</h3>
              <p className="text-slate-500 font-medium italic">Our experts specialize in maximizing tricky layouts.</p>
            </div>
          </div>
          
          <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-2xl group transform hover:-translate-y-1">
            <FaWhatsapp size={24} className="group-hover:rotate-12 transition-transform" />
            Get Expert Suggestion on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
