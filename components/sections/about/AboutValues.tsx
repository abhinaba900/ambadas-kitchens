"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Eye, Heart } from "lucide-react";

export function AboutValues() {
  const values = [
    {
      icon: <Award className="text-accent" size={48} />,
      title: "Quality",
      description: "We use only the best materials and components. Our 20-year warranty is a testament to the quality we deliver.",
    },
    {
      icon: <Eye className="text-accent" size={48} />,
      title: "Transparency",
      description: "From factory tours to itemized quotes, we believe in being open and honest at every stage of the project.",
    },
    {
      icon: <Heart className="text-accent" size={48} />,
      title: "Customer Satisfaction",
      description: "Our job isn't finished until you are completely satisfied with your new kitchen. We build for the long term.",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-slate-500 font-medium">The principles that guide every project we undertake.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:bg-primary transition-all duration-500">
                <div className="group-hover:text-white transition-all duration-500">
                  {value.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">
                {value.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
