"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Hettich", logo: "/portfolio/others/other-32.webp" },
  { name: "Blum", logo: "/portfolio/others/other-33.webp" },
  { name: "Hafele", logo: "/portfolio/others/other-34.webp" },
  { name: "Ebco", logo: "/portfolio/others/other-35.webp" },
  { name: "Italiana Ferramenta", logo: "/portfolio/others/other-36.webp" },
  { name: "Century Laminates", logo: "/portfolio/others/other-37.webp" },
  { name: "Greenply", logo: "/portfolio/others/other-38.webp" },
  { name: "Action Tesa", logo: "/portfolio/others/other-30.webp" },
  { name: "Fevicol", logo: "/portfolio/others/other-31.webp" },
];

// Duplicate the list to ensure seamless infinite scroll
const duplicatedPartners = [...partners, ...partners, ...partners];

export function Partners() {
  return (
    <section className="py-32 bg-white border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-100">
             Trust & Quality
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary max-w-3xl leading-tight">
            Our Global <span className="text-accent italic">Associate</span> Partners
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            We collaborate with world-leading European hardware and material brands to ensure every Ambadas Kitchen is built for a lifetime.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center px-16 py-8 transition-all duration-500 opacity-90 hover:opacity-100 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 md:h-28 w-auto object-contain max-w-[240px] mix-blend-multiply brightness-[1.05] contrast-[1.1]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
