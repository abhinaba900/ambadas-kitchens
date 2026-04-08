"use client";

import React from "react";
import { Factory, Award, Settings, Briefcase, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const features = [
    {
      icon: <Factory size={32} />,
      title: "Factory-Built Precision",
      description: "Our state-of-the-art facility ensures millimeter-perfect cutting and edge-banding.",
    },
    {
      icon: <Award size={32} />,
      title: "20+ Years Experience",
      description: "Two decades of delivering excellence in Bangalore's modular kitchen landscape.",
    },
    {
      icon: <Settings size={32} />,
      title: "Customized Designs",
      description: "Every kitchen is tailored to your unique lifestyle, layout, and storage requirements.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "End-to-End Execution",
      description: "From initial design consultation to final on-site installation, we handle it all.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Why Bangalore Trusts <br />
            <span className="text-primary/70 italic">Ambadas Kitchens</span>
          </h2>
          <p className="text-slate-600">
            We don't just build kitchens; we create the heart of your home. Our commitment to quality and transparency makes us the preferred choice for Bangalore homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-accent flex items-center justify-center text-primary group-hover:text-primary mb-8 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
