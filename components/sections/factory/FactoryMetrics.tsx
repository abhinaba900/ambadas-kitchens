"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Ruler } from "lucide-react";

export function FactoryMetrics() {
  const metrics = [
    {
      label: "Years of Experience",
      value: "10+",
      icon: <Award className="text-accent" size={32} />,
    },
    {
      label: "Projects Completed",
      value: "1000+",
      icon: <Briefcase className="text-accent" size={32} />,
    },
    {
      label: "Skilled Workforce",
      value: "50+",
      icon: <Users className="text-accent" size={32} />,
    },
    {
      label: "Factory Area",
      value: "15k Sq. Ft.",
      icon: <Ruler className="text-accent" size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-primary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  {metric.icon}
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                {metric.value}
              </h3>
              <p className="text-white/50 text-sm md:text-base font-medium uppercase tracking-widest leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
