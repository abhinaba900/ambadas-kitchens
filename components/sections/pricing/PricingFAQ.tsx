"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this price estimate final?",
      answer: "No, this is an approximate range based on your inputs. A final quote is provided only after our engineer makes a technical visit to your site for precise measurements and detailed design finalization."
    },
    {
      question: "What is included in the pricing?",
      answer: "Our standard pricing includes the design consultations, manufacturing of all cabinets, shipping to your site in Bangalore, and professional installation by our expert team. It also includes basic internal hardware."
    },
    {
      question: "Do you offer budget options for small kitchens?",
      answer: "Yes, we have a 'Basic' range specifically designed for rental properties or small apartment kitchens where durability and functionality are key, but at a more accessible price point."
    },
    {
      question: "Can I customize the design based on my budget?",
      answer: "Absolutely. Our designers work with you to swap materials, adjust configurations, and choose hardware that brings the project within your reach without sacrificing core structural quality."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              RESOURCES
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-8 leading-tight italic underline decoration-accent decoration-8 underline-offset-4">
              Your Pricing <br />Questions, <br />Answered.
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              We believe in total transparency. If your question isn't listed here, feel free to reach out to us directly on WhatsApp.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={cn(
                  "bg-white rounded-[2rem] overflow-hidden border transition-all duration-300",
                  openIndex === idx ? "border-accent shadow-lg" : "border-slate-100 hover:border-primary/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between group"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-bold transition-all",
                    openIndex === idx ? "text-primary" : "text-slate-500 group-hover:text-primary"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    openIndex === idx ? "bg-accent text-primary" : "bg-slate-50 text-slate-400 group-hover:bg-primary/5"
                  )}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <div className="h-px bg-slate-100 mb-8 w-full" />
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
