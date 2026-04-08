"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Send, Phone, User, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, handle form submission here
    setIsSubmitted(true);
  };

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  Ready to Start Your Project?
                </h2>
                <p className="text-slate-500 text-lg">
                  Fill out the form below and our design specialists will get back to you with a free consultation and estimate.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                  <CheckCircle2 size={16} /> 
                  “We usually respond within a few minutes.”
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                        <User size={14} /> Full Name*
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                        <Phone size={14} /> Phone Number*
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 94483 96322"
                        className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-1">
                      <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                        <Mail size={14} /> Email Address (Optional)
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                      <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                        <MessageSquare size={14} /> Requirement Type*
                      </label>
                      <select 
                        required
                        className="w-full h-14 bg-white border border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option</option>
                        <option value="kitchen">Modular Kitchen</option>
                        <option value="wardrobe">Wardrobe Design</option>
                        <option value="interiors">Full Home Interiors</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Tell us about your space*
                      </label>
                      <textarea 
                        required
                        placeholder="Eg: I'm looking for a U-shaped kitchen for my new apartment in Whitefield..."
                        className="w-full h-32 bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-slate-300 resize-none"
                      />
                    </div>

                    <div className="md:col-span-2 pt-2">
                      <Button variant="accent" size="lg" className="w-full text-primary font-bold tracking-wide" type="submit">
                        Get Free Consultation <Send size={18} className="ml-2" />
                      </Button>
                      <p className="text-xs text-center text-slate-400 mt-4 italic">
                        “No obligation consultation. Your data is safe with us.”
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-200 p-12 rounded-3xl text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={42} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-green-800">Inquiry Sent Successfully!</h3>
                      <p className="text-green-700 max-w-md mx-auto">
                        Thank you for reaching out. One of our design experts will contact you within the next 30 minutes.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-10 rounded-3xl space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display">Why talk to us?</h3>
                <ul className="space-y-6">
                  {[
                    "Free On-site measurements and estimates.",
                    "Personalized 3D design consultation.",
                    "Quality assurance from our own factory.",
                    "Detailed breakdown of materials and costs."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className="text-slate-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase tracking-widest">Call for Support</p>
                    <p className="text-xl font-bold">94483 96322</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-accent">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div className="text-white">
                    <p className="text-xs text-slate-300 uppercase tracking-widest">Email Support</p>
                    <p className="text-lg font-bold">hello@ambadas.in</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Snippet */}
            <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 space-y-4 italic text-slate-500">
              <p>“The consultation was extremely helpful. They actually listened to my specific storage needs and suggested a layout that saved so much space!”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div>
                  <p className="text-sm font-bold text-primary not-italic">Mrs. Rajeshwari</p>
                  <p className="text-xs not-italic">Sarjapur Road, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
