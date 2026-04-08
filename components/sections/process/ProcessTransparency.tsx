"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, MessageSquareText, FileText } from "lucide-react";

export function ProcessTransparency() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-6 p-4 bg-primary/5 rounded-full border border-primary/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg">
              <Eye size={24} />
            </div>
            <div className="pr-6">
              <p className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
                No hidden steps. <span className="opacity-40">No confusion.</span>
              </p>
            </div>
          </motion.div>

          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-slate-800 leading-tight">
            Clear Communication <br className="hidden md:block" /> at <span className="text-accent underline decoration-4 underline-offset-8">Every Stage.</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <MessageSquareText size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 italic tracking-wide">Real-time Updates</h4>
              <p className="text-sm text-slate-500">Know exactly where your project stands via dedicated communication channels.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 italic tracking-wide">Design Finalized</h4>
              <p className="text-sm text-slate-500">No factory production starts until you approve every 3D design detail.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Eye size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2 italic tracking-wide">Quality Inspections</h4>
              <p className="text-sm text-slate-500">Checkpoints at every production stage to ensure zero defects before delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
