"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function FullHomePricing() {
  const packages = [
    {
      name: "Essential",
      price: "₹4.5L - ₹6L",
      description: "Functional designs for modern living on a budget.",
      features: ["L-Shaped Kitchen", "Master Bedroom Wardrobe", "TV Unit", "Shoe Rack", "Basic False Ceiling"],
      color: "bg-blue-500",
    },
    {
      name: "Luxury",
      price: "₹7.5L - ₹10L",
      description: "Premium finishes and sophisticated high-end aesthetic.",
      features: ["Island Kitchen", "2 Sliding Wardrobes", "Premium TV Wall", "Bar Unit", "Full Custom Lighting"],
      color: "bg-accent",
      popular: true,
    },
    {
      name: "Elite",
      price: "₹12L+",
      description: "Uber-luxury interiors with advanced automation and marble finishes.",
      features: ["Smart Kitchen", "Walk-in Closets", "Home Theatre Setup", "Statement Wall Panels", "Luxury Hardware"],
      color: "bg-primary-light",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Full Home <span className="text-accent underline decoration-accent/20">Packages</span></h2>
          <p className="text-slate-600 text-lg">Curated interior packages that offer incredible value without compromising on the signature Ambadas{"'"} quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${pkg.popular ? 'border-accent/30 ring-2 ring-accent/10 scale-105 z-10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 text-balance">{pkg.name}</h3>
                  <div className="text-3xl font-black text-primary">{pkg.price}</div>
                  <p className="text-slate-500 text-sm mt-3">{pkg.description}</p>
                </div>
                
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <div className={`w-2 h-2 rounded-full ${pkg.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full mt-10 py-4 rounded-2xl font-bold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-slate-900' : 'bg-slate-100 text-primary hover:bg-slate-200'}`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-primary rounded-[3rem] text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold">Need a custom package for <br /> <span className="text-accent italic">your floor plan{"?"}</span></h3>
            <p className="text-white/70 max-w-2xl mx-auto">Upload your floor plan on WhatsApp and get a dedicated project manager to customize a quote for you.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                <FaWhatsapp size={20} className="mr-3" />
                WhatsApp for Estimate
              </a>
              <button className="flex items-center justify-center px-10 py-5 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20">
                Book a Site Visit Instead
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
