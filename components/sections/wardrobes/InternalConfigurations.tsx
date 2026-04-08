"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Layout, Layers, Archive, PenTool } from "lucide-react";

const features = [
  {
    title: "Hanging Sections",
    description: "Multi-level hanging rods for shirts, coats, and long dresses.",
    icon: <Layout className="w-8 h-8 text-accent" />,
  },
  {
    title: "Soft-Close Drawers",
    description: "Premium smooth-gliding drawers for delicates and daily wear.",
    icon: <Layers className="w-8 h-8 text-accent" />,
  },
  {
    title: "Shoe Organizers",
    description: "Integrated pull-out racks and tilted shelves for footwear.",
    icon: <Archive className="w-8 h-8 text-accent" />,
  },
  {
    title: "Accessory Trays",
    description: "Dedicated velvet-lined compartments for jewelry and watches.",
    icon: <PenTool className="w-8 h-8 text-accent" />,
  },
];

export function InternalConfigurations() {
  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Superior Functionality</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
                Designed for <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Real Storage</span> Needs
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Every inch of our wardrobes is engineered to maximize accessibility and organization, ensuring a clutter-free experience every day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <Image 
                src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=2070&auto=format&fit=crop" 
                alt="Internal Wardrobe Configuration" 
                fill
                unoptimized
                className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 top-12 bg-accent p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle2 size={32} />
                <div>
                  <div className="text-2xl font-black">20% More</div>
                  <div className="text-sm font-bold opacity-80">Storage Efficient</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
