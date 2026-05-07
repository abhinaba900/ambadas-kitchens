"use client";

import React from "react";
import { Factory, Award, Settings, Briefcase, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const features = [
    {
      icon: <Factory size={32} />,
      title: "Unique & Tailor Made",
      description: "Every project is a unique masterpiece, precision-manufactured at our own factory to ensure perfect fit and finish.",
      color: "blue"
    },
    {
      icon: <Settings size={32} />,
      title: "Versatile Designers",
      description: "Our designers are open-minded, using the industry's best software to deliver your requirements with absolute ease.",
      color: "accent"
    },
    {
      icon: <Award size={32} />,
      title: "23+ Years Legacy",
      description: "Over two decades of experience gives you immense trust, quality, and a significant direct-from-factory price advantage.",
      color: "blue"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Immense Trust",
      description: "Being manufacturers ourselves ensures transparency, superior quality control, and a stress-free experience for our clients.",
      color: "accent"
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/10"
          >
            The Ambadas Difference
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">
            Every Project is <span className="text-accent italic">Unique</span> <br />
            & Tailor-Made at Our Factory
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            With 23+ years of experience and being manufacturers ourselves, we offer clients 
            immense Trust, Quality, and a significant Price Advantage that local contractors simply cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[80px] -z-10 group-hover:bg-primary/5 transition-colors" />
              
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-lg",
                feature.color === "accent" ? "bg-accent text-primary" : "bg-primary text-white"
              )}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
