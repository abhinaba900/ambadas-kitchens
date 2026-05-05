"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, User, MapPin, Send, Loader2 } from "lucide-react";
import { useModal } from "@/lib/ModalContext";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function ConsultationModal() {
  const { isConsultationModalOpen, closeConsultationModal, consultationData } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState("Modular Kitchen");

  useEffect(() => {
    if (isConsultationModalOpen && consultationData?.category) {
      if (consultationData.category === "Kitchens") setPropertyType("Modular Kitchen");
      else if (consultationData.category === "Wardrobes") setPropertyType("Wardrobes & Storage");
      else if (consultationData.category === "Full Home Interiors") setPropertyType("Full Home Interior");
    }
  }, [isConsultationModalOpen, consultationData]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isConsultationModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isConsultationModalOpen]);

  const [iframeLoadedCount, setIframeLoadedCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    // DO NOT e.preventDefault() here.
    // We want the browser to natively POST the form to the hidden iframe.
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    // The iframe loads once initially (empty), and then again after form submission
    setIframeLoadedCount(prev => prev + 1);
    
    if (isSubmitting) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset and close after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        closeConsultationModal();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConsultationModal}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeConsultationModal}
              className="absolute top-6 right-6 z-50 p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 md:bg-transparent rounded-full"
            >
              <X size={24} />
            </button>

            {/* Left Side: Brand Visual */}
            <div className="md:w-2/5 bg-primary p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary font-bold text-2xl">
                  A
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">
                    Get Expert <br /> Consultation
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Book a free design session with Bangalore's leading modular kitchen specialists.
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Zero-cost Design Plan",
                    "Personalized Material Selection",
                    "Transparency in Pricing",
                    "Expert Site Measurement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Right Side: Form */}
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-slate-500">
                      Your request has been received. Our expert will contact you within 24 hours.
                    </p>
                  </div>
                  <Button variant="outline" onClick={closeConsultationModal}>
                    Close Window
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Direct Enquiry</h3>
                    <p className="text-slate-500 text-sm">
                      Fill in the details below and we'll call you back.
                    </p>
                  </div>

                  <iframe 
                    name="hidden_iframe" 
                    id="hidden_iframe" 
                    style={{ display: 'none' }} 
                    onLoad={handleIframeLoad}
                  ></iframe>

                  <form 
                    action="https://forms.zohopublic.in/ambadaskitchens1/form/WebsiteEnquiry/formperma/7WR-IxLnQqiq82GpXQ5lkHIuhXmSjcMv75ie-tmmBKg/htmlRecords/submit"
                    method="POST"
                    acceptCharset="UTF-8"
                    encType="multipart/form-data"
                    target="hidden_iframe"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <input type="hidden" name="zf_referrer_name" value="" />
                    <input type="hidden" name="zf_redirect_url" value="" />
                    <input type="hidden" name="zc_gad" value="" />

                    <div className="space-y-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            required
                            type="text" 
                            name="SingleLine1"
                            placeholder="e.g. John Doe"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                              required
                              type="tel" 
                              name="PhoneNumber_countrycode"
                              placeholder="+91 94483 96322"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                              required
                              type="email" 
                              name="Email"
                              placeholder="john@example.com"
                              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Property Type</label>
                        <div className="relative">
                          <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <select 
                            name="SingleLine"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none"
                          >
                            <option value="Modular Kitchen">Modular Kitchen</option>
                            <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                            <option value="Full Home Interior">Full Home Interior</option>
                            <option value="Commercial Spaces">Commercial Spaces</option>
                          </select>
                        </div>
                      </div>

                      {/* Budget Readonly if passed */}
                      {consultationData?.budget && (
                         <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Selected Budget</label>
                          <div className="relative">
                            <input 
                              disabled
                              type="text" 
                              value={consultationData.budget}
                              className="w-full px-4 py-3.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium cursor-not-allowed"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-7 font-bold text-lg flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          Request Free Consultation
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-[10px] text-center text-slate-400">
                      By submitting, you agree to our <span className="underline italic cursor-pointer">Terms & Privacy Policy</span>.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
