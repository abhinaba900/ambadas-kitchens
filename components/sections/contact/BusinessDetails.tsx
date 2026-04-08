"use client";

import React, { useState } from "react";
import { Clock, HelpCircle, ChevronDown, ChevronUp, UserCheck, Briefcase, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How soon will you respond to my inquiry?",
    answer: "We typically respond within 30 minutes during business hours. For inquiries sent after hours, our experts will contact you first thing the next morning."
  },
  {
    question: "Do you offer free site visits?",
    answer: "Yes, once we have a preliminary discussion about your requirements, our design experts provide a free site measurement and consultation visit anywhere in Bangalore."
  },
  {
    question: "Is the first consultation really free?",
    answer: "Absolutely. We believe in building trust first. We provide a complete layout roadmap and a budget estimate at zero cost to you."
  }
];

export function BusinessDetails() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Trust Strip */}
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-8 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
              <Award size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">20+ Years</p>
              <p className="text-slate-500 font-medium tracking-wide text-sm uppercase">Industry Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:border-x md:border-slate-100 md:px-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Briefcase size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">1000+</p>
              <p className="text-slate-500 font-medium tracking-wide text-sm uppercase">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:pl-8">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
              <UserCheck size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">5000+</p>
              <p className="text-slate-500 font-medium tracking-wide text-sm uppercase">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Working Hours */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest font-bold text-sm">
                  <Clock size={16} /> Business Hours
                </div>
                <h3 className="text-3xl font-bold font-display uppercase tracking-wider">Join us anytime</h3>
                <p className="text-slate-200">Our showroom is open throughout the week for consultations and visits.</p>
              </div>

              <div className="space-y-6">
                {[
                  { days: "Monday - Friday", hours: "10:00 AM - 08:00 PM" },
                  { days: "Saturday", hours: "10:00 AM - 09:00 PM" },
                  { days: "Sunday", hours: "11:00 AM - 06:00 PM" }
                ].map((schedule, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group/row hover:bg-white/5 px-2 rounded-lg transition-colors">
                    <span className="font-bold text-slate-100 uppercase tracking-widest">{schedule.days}</span>
                    <span className="font-medium text-accent">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQs */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                <HelpCircle size={16} /> Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Got questions? We have answers.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white border rounded-[2rem] transition-all duration-300 ${openFaq === index ? "border-primary shadow-lg" : "border-slate-100"}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-7 text-left outline-none group"
                  >
                    <span className={`text-lg font-bold transition-colors ${openFaq === index ? "text-primary" : "text-slate-700 group-hover:text-primary"}`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-all ${openFaq === index ? "bg-primary text-white rotate-180" : "bg-slate-50 text-slate-400"}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-8 pt-0 text-slate-500 leading-relaxed">
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
      </div>
    </section>
  );
}
