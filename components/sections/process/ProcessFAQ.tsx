"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does the process take?",
    answer: "A typical project takes between 2 to 6 weeks. This includes design finalization, factory production, and on-site installation. Custom requirements might adjust this timeline slightly.",
  },
  {
    question: "Do you handle everything end-to-end?",
    answer: "Yes, we provide a complete turnkey solution. From initial consultation and site visits to 3D designs, factory manufacturing, and final installation — Ambadas Kitchens handles every single step.",
  },
  {
    question: "Can designs be changed midway?",
    answer: "Designs can be changed during the design phase. However, once the designs are finalized and sent to the factory for production, changes are not possible as our CNC machines operate based on the approved 3D data.",
  },
  {
    question: "Do you provide installation?",
    answer: "Absolutely. Our expert in-house installation team ensures that the factory-built units are fitted perfectly at your site with professional care and precision.",
  },
];

export function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-100">
               Clarifications
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
               Common <br /> <span className="text-accent underline decoration-4 underline-offset-8">Questions.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know about how we execute your project. Still have questions? Feel free to reach out.
            </p>
            <div className="pt-4">
               <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                 <HelpCircle size={32} />
               </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "rounded-2xl border transition-all duration-300",
                  openIndex === index ? "border-primary bg-primary/5 shadow-sm" : "border-slate-100 bg-white hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={cn(
                    "font-bold text-lg transition-colors",
                    openIndex === index ? "text-primary" : "text-slate-800"
                  )}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={cn(
                      "transition-transform duration-300",
                      openIndex === index ? "rotate-180 text-primary" : "text-slate-400"
                    )} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-primary/10">
                        {faq.answer}
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
