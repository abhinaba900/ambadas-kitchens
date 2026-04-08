"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutStats() {
  const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Happy Clients", value: "950+" },
    { label: "Factory Square Feet", value: "5000+" },
  ];

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:30px_30px] -z-10" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <p className="text-white/70 font-semibold tracking-widest uppercase text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
