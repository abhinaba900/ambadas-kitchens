"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Clock, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ProcessFinalCTA() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none p-10 select-none">
              <div className="w-full h-full border-2 border-white/50 rounded-2xl rotate-2" />
              <div className="w-full h-full border-2 border-white/50 rounded-2xl -rotate-2 absolute inset-0 m-10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent text-sm font-bold uppercase tracking-widest">
                <Clock size={16} /> Ready to Transform?
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Let’s Start Your <br /> <span className="text-accent underline decoration-4 underline-offset-8">Project Today.</span>
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Experience a smooth, professional, and transparent interior journey. Join 1000+ happy families in Bangalore.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto text-primary font-black shadow-xl hover:scale-105 transition-transform group">
                     <FaWhatsapp size={20} className="mr-2" />
                     WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+919448396322">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary transition-colors group">
                     Book Consultation
                     <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
              
              <p className="text-white/50 text-sm mt-8 animate-pulse italic">
                “We handle everything so you don’t have to worry.”
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
