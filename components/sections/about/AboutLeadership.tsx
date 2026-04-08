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
            <p>
              "When I started Ambadas Kitchens 20 years ago, my goal was simple:
              to build kitchens that don't just look good in photographs, but
              work perfectly in a real Indian home for decades."
            </p>
            <p>
              With over two decades of hands-on experience in woodworking and
              interior design, I have seen the industry evolve. But my core
              philosophy remains unchanged: Quality is non-negotiable. We
              believe in providing honest advice, practical solutions, and
              craftsmanship that stands the test of time.
            </p>
            <p>
              Our leadership is not about corporate boardrooms; it's about being
              on the factory floor and at the project site, ensuring every
              detail is exactly right.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
