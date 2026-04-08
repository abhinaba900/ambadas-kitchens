"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Tag, IndianRupee, CheckCircle2, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { PortfolioProject } from "@/lib/portfolio-data";

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white text-white hover:text-primary rounded-full transition-all duration-300 md:bg-white md:text-primary md:shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-3/5 h-[300px] md:h-auto relative bg-slate-100">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-white">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase mb-2">
                    <Tag size={16} /> {project.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight mb-4">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-primary/40" />
                    {project.location}
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.description}
                </p>

                {project.materials && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-accent" /> Materials Used
                    </h4>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {project.materials.map((m, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 rounded-lg text-slate-700">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.budgetRange && (
                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="text-sm text-slate-500 mb-1">Approx. Budget</div>
                    <div className="text-xl font-bold text-primary flex items-center gap-1">
                      <IndianRupee size={18} /> {project.budgetRange}
                    </div>
                  </div>
                )}

                <div className="pt-8 border-t border-slate-100 space-y-4">
                  <h3 className="text-lg font-bold text-primary">Love this design?</h3>
                  <p className="text-sm text-slate-500">
                    Get a quote for a similar modular setup customized for your space.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="accent" className="w-full gap-2">
                      Get Similar Design
                    </Button>
                    <a 
                      href="https://wa.me/919448396322" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center w-full justify-center gap-2 px-2 py-2 bg-[#25D366] text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg"
                    >
                      <FaWhatsapp size={18} />
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
