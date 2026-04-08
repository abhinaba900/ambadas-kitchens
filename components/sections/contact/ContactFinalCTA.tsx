"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactFinalCTA() {
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
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/919448396322" className="flex items-center justify-center px-10 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)]">
                <FaWhatsapp size={24} className="mr-3" />
                WhatsApp Now
              </a>
              <a href="tel:+919448396322" className="flex items-center justify-center px-10 py-4 bg-white text-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                <Phone size={24} className="mr-3" />
                Call 94483 96322
              </a>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm">
            Available 10:00 AM — 7:00 PM (Monday to Saturday)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
