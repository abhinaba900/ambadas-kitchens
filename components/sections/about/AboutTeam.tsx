"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutTeam() {
  const teams = [
    {
      title: "Design Studio",
      description: "Our creative designers who bring your dream kitchen to life using advanced 3D modelling.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Manufacturing Team",
      description: "Skilled operators who manage our European precision machinery and quality control.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "On-Site Installation",
      description: "Our expert technicians ensure millimetre-perfect fitting and a clean finish at your home.",
      image: "https://images.unsplash.com/photo-1670590234578-6034e933a4da?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Meet the Team
          </h2>
          <p className="text-slate-500 font-medium">Real people, real expertise. Authenticity at every step.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-8 shadow-xl border-4 border-slate-50 group-hover:border-accent transition-all duration-500">
                <Image
                  src={team.image}
                  alt={team.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-3">
                {team.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-normal">
                {team.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
