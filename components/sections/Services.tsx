"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Layout, Home, SquareStack } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Modular Kitchens",
      description: "Ergonomic designs, water-proof cabinets, and seamless drawer systems for a perfect cooking experience.",
      image: "/hero-kitchen.png", 
      icon: <SquareStack size={20} />,
      href: "/kitchens",
    },
    {
      title: "Wardrobes",
      description: "Modern sliding and swing wardrobes with customized internal storage for clothing, jewelry, and more.",
      image: "/hero-kitchen.png", 
      icon: <Layout size={20} />,
      href: "/wardrobes",
    },
    {
      title: "Full Home Interiors",
      description: "End-to-end transformation including living rooms, bedrooms, lighting, and false ceilings.",
      image: "/hero-kitchen.png", 
      icon: <Home size={20} />,
      href: "/interiors",
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Interior <span className="text-primary/70 italic">Solutions</span>
          </h2>
          <p className="text-slate-600">
            Tailored modular solutions for every corner of your home, executed with factory precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <div className="pt-2 border-t border-slate-100">
                  <Link href={service.href}>
                    <Button variant="ghost" className="w-full flex justify-between h-12 p-0 px-4 group/btn hover:bg-slate-50 font-bold">
                      Explore Details
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
