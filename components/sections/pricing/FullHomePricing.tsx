"use client";

import React, { useState } from "react";
import { ChevronRight, Home, X, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";

export function FullHomePricing() {
  const { openConsultationModal } = useModal();
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectPackage = (pkg: any) => {
    setSelectedPkg(pkg);
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "", address: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage
    const inquiryData = {
      package: {
        name: selectedPkg.name,
        price: selectedPkg.price,
        description: selectedPkg.description
      },
      user: formData,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem("package_inquiry", JSON.stringify(inquiryData));
    
    // Set success state
    setIsSubmitted(true);
  };

  const packages = [
    {
      name: "Elegance",
      price: "₹4.5L - ₹9L",
      description: "High-quality essentials with factory precision.",
      features: [
        "2 BHK starting at ₹4.50L",
        "3 BHK starting at ₹5.50L",
        "Villa starting at ₹9.00L",
        "BWP Ply Kitchen (Laminate)",
        "MR Ply Wardrobes",
        "Hettich Hardware"
      ],
      color: "bg-blue-500",
    },
    {
      name: "Marbello",
      price: "₹5.5L - ₹10L",
      description: "Enhanced finishes and superior material selection.",
      features: [
        "2 BHK starting at ₹5.50L",
        "3 BHK starting at ₹6.50L",
        "Villa starting at ₹10.00L",
        "HDHMR Shutters (Kitchen)",
        "Hinged Wardrobes with Lofts",
        "Hettich German Hardware"
      ],
      color: "bg-accent",
      popular: true,
    },
    {
      name: "Ultima",
      price: "₹6.5L - ₹11L",
      description: "The ultimate luxury with premium materials throughout.",
      features: [
        "2 BHK starting at ₹6.50L",
        "3 BHK starting at ₹7.50L",
        "Villa starting at ₹11.00L",
        "Premium BWP Shutters",
        "Walk-in Closet Ready",
        "Lifetime Hardware Warranty"
      ],
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

              <button 
                onClick={() => handleSelectPackage(pkg)}
                className={`w-full mt-10 py-4 rounded-2xl font-bold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-slate-900' : 'bg-slate-100 text-primary hover:bg-slate-200'}`}
              >
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
              <button 
                onClick={() => openConsultationModal({ category: "Site Visit Request" })}
                className="flex items-center justify-center px-10 py-5 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20"
              >
                Book a Site Visit Instead
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedPkg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 overflow-hidden flex flex-col text-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPkg(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-accent font-bold uppercase tracking-widest text-xs">Configure Plan</span>
                    <h3 className="text-2xl font-bold text-primary">Inquire for {selectedPkg.name}</h3>
                    <p className="text-sm text-slate-500">
                      You selected the <strong className="text-primary">{selectedPkg.name}</strong> package starting at <strong className="text-accent">{selectedPkg.price}</strong>. Please provide your details to schedule a call with our design expert.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Full Name</label>
                      <input 
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm font-medium transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Phone Number</label>
                        <input 
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Site / Delivery Address</label>
                      <textarea 
                        required
                        rows={3}
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Please enter your site address in Bangalore..."
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm font-medium transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl"
                  >
                    Confirm Package Selection
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 shadow-inner">
                    <CheckCircle size={40} className="stroke-[2.5]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Inquiry Successful!</h3>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                      Thank you, <strong className="text-primary">{formData.name}</strong>. We have saved your preference for the <strong className="text-primary">{selectedPkg.name}</strong> package ({selectedPkg.price}) and stored the selection in our database.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left w-full text-xs space-y-2">
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-1">Stored Package Details:</p>
                    <div className="flex justify-between"><span className="text-slate-500">Package Name:</span> <span className="font-bold text-primary">{selectedPkg.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Pricing Range:</span> <span className="font-bold text-accent">{selectedPkg.price}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Site Location:</span> <span className="font-bold text-primary text-right truncate max-w-[200px]">{formData.address}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Contact Number:</span> <span className="font-bold text-primary">{formData.phone}</span></div>
                  </div>

                  <button 
                    onClick={() => setSelectedPkg(null)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-primary py-4 rounded-2xl font-bold transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
