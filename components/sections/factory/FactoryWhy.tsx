"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export function FactoryWhy() {
  const points = [
    {
      title: "Precision Finish",
      description: "Unlike manual carpentry, CNC machines ensure millimeter-level accuracy for perfect alignment.",
      icon: <CheckCircle className="text-accent" size={24} />,
    },
    {
      title: "Superior Durability",
      description: "Factory-pressed boards and edge banding prevent water ingress and last much longer than hand-joined units.",
      icon: <ShieldCheck className="text-accent" size={24} />,
    },
    {
      title: "Faster Execution",
      description: "Automated production cuts down the timeline significantly. Most projects are completed within 45 days.",
      icon: <Clock className="text-accent" size={24} />,
    },
    {
      title: "Dust-Free Installation",
      description: "Modules are built in the factory and only assembled on-site, ensuring your home stays clean.",
      icon: <Hammer className="text-accent" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-semibold tracking-wider">
              Educational
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-primary">
              Why Factory-Built <br /> <span className="text-accent italic">Matters.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Many local vendors rely on on-site carpentry, which is prone to manual errors, dust, and inconsistent finish. At Ambadas Kitchens, our factory-first approach ensures every unit is perfect before it reaches your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {points.map((point, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{point.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl skew-y-1"
            >
              <img 
                src="/images/factory-built.png" 
                alt="State-of-the-art precision woodworking factory floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10" />
              
              <div className="absolute bottom-8 left-8 z-20 space-y-2">
                 <p className="text-4xl font-bold font-display text-white">0%</p>
                 <p className="text-sm uppercase tracking-widest font-bold text-accent">Manual Error Rate</p>
              </div>
            </motion.div>
            
            {/* Decal */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent rounded-2xl -z-10 -rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
