"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Zap, ShieldCheck, Heart } from "lucide-react";

const StorageFeatures = [
  {
    title: "More storage in same space",
    description: "Built-in loft and optimized cabinet depth for maximum use.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    title: "Clutter-free layouts",
    description: "Concealed shelving and specialized organizers for every item.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    title: "Functional compartments",
    description: "Adjustable shelving to adapt to your changing needs.",
    icon: <Heart className="w-8 h-8 text-white" />,
  },
];

export function SmartStorage() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background image */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-primary/5 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,61,46,0.3)] border-8 border-white group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop" 
                alt="Smart Storage Section" 
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent flex items-end p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 text-white font-black text-2xl drop-shadow-xl">
                  <CheckCircle size={32} />
                  <span>Maximized for Real Households</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold uppercase tracking-widest text-sm"
              >
                Smart Engineering
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight"
              >
                Designed for <br />
                <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Real Storage</span> Needs
              </motion.h2>
              <p className="text-slate-500 text-lg leading-relaxed font-bold italic">
                From tricky corners to oversized vertical spaces, we turn every challenge into a beautiful, functional storage solution.
              </p>
            </div>

            <div className="space-y-8">
              {StorageFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors shadow-lg shadow-primary/20 group-hover:shadow-accent/40 group-hover:rotate-6">
                    <div className="group-hover:scale-110 transition-transform transform group-hover:-rotate-6">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-primary leading-tight">{feature.title}</h3>
                    <p className="text-slate-500 font-bold leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="pt-8 border-t border-slate-200"
            >
              <p className="text-primary font-black flex items-center gap-3 text-xl bg-accent/10 p-6 rounded-[2rem] border border-accent/20 italic">
                “Confused between sliding and hinged? Talk to our expert now.”
                <a href="https://wa.me/919448396322" className="px-6 py-3 bg-primary text-white rounded-full font-black text-sm not-italic uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">WhatsApp</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
