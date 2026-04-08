"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const materials = [
  {
    title: "Acrylic Finish",
    description: "Ultra-glossy, mirror-like finish that is durable and non-toxic. Highly resistant to heat and moisture.",
    image: "/kitchens/materials/acrylic.png",
    icon: <Sparkles className="text-accent" size={24} />,
    tag: "Premium Choice"
  },
  {
    title: "Plywood Base",
    description: "The gold standard for kitchen cabinets. Water-resistant (BWP) and strong enough to last a lifetime.",
    image: "/kitchens/materials/plywood.png",
    icon: <ShieldCheck className="text-accent" size={24} />,
    tag: "Robust & Durable"
  },
  {
    title: "Laminate Finish",
    description: "Versatile, affordable, and easy to maintain. Available in thousands of colors and textures.",
    image: "/kitchens/materials/laminate.png",
    icon: <Zap className="text-accent" size={24} />,
    tag: "Versatile"
  },
  {
    title: "Membrane Finish",
    description: "Seamless, elegant finish with a soft touch. Perfect for achieving a smooth, consistent look.",
    image: "/kitchens/materials/membrane.png",
    icon: <CheckCircle2 className="text-accent" size={24} />,
    tag: "Modern Look"
  }
];

export function MaterialOptions() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Built with <span className="text-accent">Premium Materials</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We don't compromise on quality. Every Ambadas kitchen uses factory-tested materials designed for the Indian kitchen environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {materials.map((material, index) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="relative w-full lg:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  {material.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {material.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display">{material.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-accent/10 rounded-2xl border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-xl font-bold">10-Year Warranty on All Materials</h4>
            <p className="text-slate-400 text-sm">Every kitchen we install comes with a factory-backed guarantee for your peace of mind.</p>
          </div>
          <button className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
