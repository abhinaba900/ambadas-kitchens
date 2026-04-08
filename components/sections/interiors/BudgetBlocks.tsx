"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const plans = [
  {
    type: "1 BHK Interiors",
    startingPrice: "₹3,50,000",
    features: [
      "Signature Kitchen",
      "Master Bedroom Wardrobe",
      "Standard TV Unit",
      "Shoe Rack / Entry Unit",
      "Basic Lighting Setup",
    ],
    highlight: false,
  },
  {
    type: "2 BHK Interiors",
    startingPrice: "₹5,50,000",
    features: [
      "Premium Kitchen Design",
      "Master & Guest Wardrobes",
      "Living Room Wall Styling",
      "Designer TV Unit",
      "Dining Storage Unit",
      "Enhanced Mood Lighting",
    ],
    highlight: true,
  },
  {
    type: "3 BHK Interiors",
    startingPrice: "₹7,50,000",
    features: [
      "Full Luxury Fit-out",
      "3 Custom Wardrobes",
      "Foyer & Pooja Unit",
      "Premium Living Wall Art",
      "Complete Ceiling Decor",
      "Smart Home Ready Lighting",
      "Kids Room Special Theme",
    ],
    highlight: false,
  },
];

export function BudgetBlocks() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Interior Packages <span className="text-primary/70">for Every Need</span>
          </h2>
          <p className="text-slate-600">
            Select a package that fits your home size and requirements. Prices are indicative and can be customized based on materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 md:p-10 rounded-3xl bg-white flex flex-col ${
                plan.highlight 
                ? "shadow-2xl border-2 border-accent scale-105 z-10" 
                : "shadow-lg border border-slate-100"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold px-6 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{plan.type}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-400 font-medium">Starting at</span>
                  <span className="text-4xl font-bold text-primary">{plan.startingPrice}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "accent" : "outline"} 
                size="lg" 
                className={`w-full font-bold group ${!plan.highlight && "border-primary text-primary hover:bg-primary hover:text-white"}`}
              >
                Get Exact Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
