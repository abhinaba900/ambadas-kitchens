"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Indiranagar",
      text: "The factory finish is truly impressive. Our kitchen looks exactly like the 3D design they shared. Highly recommend Ambadas Kitchens for their transparency and quality.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      location: "HSR Layout",
      text: "Managed everything from design to installation flawlessly. The team was professional, and the 20-year warranty gives us great peace of mind.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      location: "Whitefield",
      text: "Exceptional craftsmanship. The soft-close mechanisms and edge-banding quality is far superior to what other vendors were offering.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(#0F3D2E_1px,transparent_1px)] [background-size:20px_20px] -z-10" />
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Loved by Bangalore <br />
            <span className="text-primary/70 italic">Families</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-slate-500 font-medium">4.9/5 Average Customer Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col group"
            >
              <Quote size={48} className="absolute top-8 right-8 text-primary/5 group-hover:text-accent/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-8 grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium flex items-center gap-1 uppercase tracking-widest">
                    {t.location}, Bangalore
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
