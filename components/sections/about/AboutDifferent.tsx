"use client";

import React from "react";
import { Hammer, Settings, Users, Truck, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function AboutDifferent() {
  const points = [
    {
      icon: <Settings className="text-accent" size={32} />,
      title: "In-House Manufacturing",
      description: "Every cabinet is built in our own factory with precision machinery. No local carpenters, no outsourcing.",
    },
    {
      icon: <Hammer className="text-accent" size={32} />,
      title: "Custom Solutions",
      description: "We don't do 'one-size-fits-all'. Every design is customized to your space, needs, and lifestyle.",
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Experienced Team",
      description: "Our designers and installers have over 20 years of expertise in Bangalore's modular interior market.",
    },
    {
      icon: <Truck className="text-accent" size={32} />,
      title: "End-to-End Service",
      description: "From the first 3D sketch to the final installation on-site, we handle everything under one roof.",
    },
    {
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "Quality First",
      description: "We use only premium materials and hardware, ensuring your kitchen stays in perfect shape for decades.",
    },
    {
      icon: <CheckCircle className="text-accent" size={32} />,
      title: "Transparent Process",
      description: "No hidden costs, no surprises. We provide clear timelines and keep you updated at every stage.",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            What Makes Us Different
          </h2>
          <p className="text-slate-500 font-medium">Why homeowners across Bangalore trust Ambadas Kitchens.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {point.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                {point.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
