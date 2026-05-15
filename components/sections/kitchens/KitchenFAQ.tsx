"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

const faqs = [
  {
    question: "How long does a kitchen installation take?",
    answer: "Typically, the entire process takes 4 to 6 weeks. This includes the design finalization, factory production using our precision machinery, and 3-5 days of high-quality on-site installation."
  },
  {
    question: "What modular kitchen materials are best for Indian homes?",
    answer: "We highly recommend BWP (Boiling Water Proof) Plywood for the carcase (base) due to its water resistance. For finishes, Acrylic is excellent for a premium look, while high-pressure laminates are great for durability and maintenance."
  },
  {
    question: "Do you provide kitchen appliances as part of the package?",
    answer: "Yes, we partner with leading brands like Hafele, Bosch, and Faber. We can integrate chimneys, hobs, ovens, and dishwashers directly into your design so they fit perfectly."
  },
  {
    question: "Can I customize the kitchen design to my specific requirements?",
    answer: "Absolutely! Everything we do is custom-built. From the height of the counters to the internal organization of drawers, every detail is designed to suit your height, cooking style, and space."
  },
  {
    question: "Do you offer a warranty on your kitchens?",
    answer: "We provide a comprehensive 10-year warranty on our kitchen structures and a lifetime warranty on premium hardware like hinges and soft-close mechanisms."
  }
];

export function KitchenFAQ() {
  const { openConsultationModal } = useModal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
             <div className="sticky top-32 space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent">
                   <HelpCircle size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                  Common <br /> <span className="text-accent underline decoration-accent/30 underline-offset-8">Questions</span>
                </h2>
                <p className="text-slate-600 text-lg">
                  Everything you need to know about starting your modular kitchen journey with us.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                   <p className="font-bold text-primary">Still have questions?</p>
                   <button 
                     onClick={() => openConsultationModal()}
                     className="w-full py-3 bg-accent text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-md"
                   >
                     Talk to an Expert
                   </button>
                </div>
             </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-4">
             {faqs.map((faq, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
               >
                 <button
                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
                   className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-primary text-lg"
                 >
                   <span>{faq.question}</span>
                   <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : 'text-slate-400'}`}>
                      {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                   </div>
                 </button>
                 
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
