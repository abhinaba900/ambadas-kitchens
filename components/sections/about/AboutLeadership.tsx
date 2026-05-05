"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutLeadership() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
        >
          <Image
            src="/Ambadasa.webp"
            alt="Founder of Ambadas Kitchens"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="text-2xl font-bold">Mr. Ambadas</h4>
              <p className="text-accent font-semibold tracking-widest uppercase text-xs">
                Founder & Lead Designer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Content */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-primary"
          >
            A Vision Rooted in <br />
            <span className="text-accent underline decoration-primary/10 underline-offset-8 decoration-4">
              Reliability
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-slate-600 leading-relaxed font-medium"
          >
            <p className="text-lg">
              Our journey began from Hubli in the year 1999 by trading steel almirahs, driven by a passion to put a strong foothold in the furniture industry.
            </p>
            <p>
              We started our first Modular Kitchen Showroom in Hubli. In just a few months, we expanded to Belgaum, and within a short period, we moved our path to Bangalore, establishing ourselves in Koramangala.
            </p>
            
            <div className="pt-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4 bg-primary/5 inline-block px-3 py-1 rounded-md">Key Milestones</h4>
              <ul className="space-y-3 border-l-2 border-accent/40 pl-5 ml-2">
                <li className="relative">
                  <div className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-slate-50" />
                  <span className="text-slate-700">Started Berloni Showroom in Bangalore.</span>
                </li>
                <li className="relative">
                  <div className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-slate-50" />
                  <span className="text-slate-700">Started our own manufacturing unit in Bangalore with German Machineries.</span>
                </li>
                <li className="relative">
                  <div className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-slate-50" />
                  <span className="text-slate-700">Ventured into Turnkey projects in Gurugram, Odisha, Chennai and Other Southern States.</span>
                </li>
                <li className="relative">
                  <div className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-slate-50" />
                  <span className="text-slate-700">Individual end-client projects spanning various verticals.</span>
                </li>
                <li className="relative">
                  <div className="absolute -left-[27px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-slate-50" />
                  <span className="text-slate-700">Trusted OEM for standalone stores of Chimney manufacturers, Interior Designers, and Retail stores.</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-display font-bold text-primary mt-6 pt-4 border-t border-slate-200">
              Today, Ambadas Interiors stands as a trusted vendor and partner for countless clients across India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
