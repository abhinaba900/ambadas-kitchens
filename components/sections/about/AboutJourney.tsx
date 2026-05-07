"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutJourney() {
  const milestones = [
    {
      year: "2003",
      title: "The Beginning",
      description: "Ambadas Interiors founded as a small workshop in Bangalore, specializing in fine custom cabinetry.",
    },
    {
      year: "2010",
      title: "Modern Manufacturing",
      description: "Invested in the first wave of German and Italian precision machinery for superior edge-banding.",
    },
    {
      year: "2015",
      title: "Factory Expansion",
      description: "Moved to a larger manufacturing hub, enabling full customization at scale for home interiors.",
    },
    {
      year: "2020",
      title: "Digital Integration",
      description: "Implemented high-end 3D design to manufacturing software for millimetre-perfect accuracy.",
    },
    {
      year: "Today",
      title: "Leading the Way",
      description: "Over 1000+ happy homes across Bangalore, built on quality and trust.",
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Journey
          </h2>
          <p className="text-slate-500 font-medium">A timeline of growth and dedication to quality.</p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-primary/10 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year Bubble */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <div className={`px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-lg md:text-xl ${
                    index % 2 !== 0 ? "md:justify-self-start" : ""
                  }`}>
                    {milestone.year}
                  </div>
                </div>
                
                {/* Connector Point */}
                <div className="absolute left-[50%] translate-x-[-50%] w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md hidden md:block" />
                
                {/* Milestone Content */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed max-w-sm mx-auto md:mx-0">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
