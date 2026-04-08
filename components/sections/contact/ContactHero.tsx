"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Contact Us
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Let's Design Your <span className="text-accent italic">Dream Home</span> Together
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Whether it's a modular kitchen, wardrobe, or full home interior, our experts are ready to bring your vision to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/919448396322" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
                <FaWhatsapp size={24} />
                WhatsApp Now
              </a>
              <a href="tel:+919448396322" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
                <Phone size={24} />
                Call 94483 96322
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
