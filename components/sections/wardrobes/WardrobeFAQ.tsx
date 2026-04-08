"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Which wardrobe is best for small rooms?",
    answer: "Sliding door wardrobes are highly recommended for smaller rooms as they don't require clearance space to open. Floor-to-ceiling designs with mirrored doors can also make a small space feel significantly larger.",
  },
  {
    question: "Sliding vs Hinged: What fits my need?",
    answer: "Sliding doors are modern and space-saving, perfect for narrow walkways. Hinged doors offer complete access to the wardrobe interior and allow for additional storage hooks on the back of the doors. We help you choose based on your room's floor plan.",
  },
  {
    question: "Can designs be customized to my specific storage needs?",
    answer: "Absolutely! We customize everything—from the number of hanging rods and drawer depths to specialized compartments for jewelry, watches, and even hidden safes. Your wardrobe is built specifically for your lifestyle.",
  },
  {
    question: "What is the typical installation time?",
    answer: "Since our wardrobes are precision-cut in our factory, the on-site installation is incredibly fast and clean. A standard wardrobe installation typically takes between 2 to 4 days, depending on the complexity of the internal configuration.",
  },
];

export function WardrobeFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Everything You <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Need to Know</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Find answers to common questions about our custom wardrobe design and installation process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-slate-100 bg-slate-50 p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group gap-4"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`flex-shrink-0 transition-colors duration-300 ${activeIndex === index ? 'text-accent' : 'text-primary'}`} />
                  <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-slate-700'} group-hover:text-primary leading-tight`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-primary text-white rotate-180' : 'bg-white text-primary border border-slate-200'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="pt-6 pl-10 pr-4">
                      <p className="text-slate-500 font-bold text-lg leading-relaxed italic border-l-4 border-accent pl-6">
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
    </section>
  );
}
