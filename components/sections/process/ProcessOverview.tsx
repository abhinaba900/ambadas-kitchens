"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function ProcessOverview() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-800"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <ShieldCheck size={24} />
          </div>
          <p className="text-xl md:text-2xl font-medium max-w-4xl leading-relaxed">
            A simple, <span className="text-primary">transparent</span>, and <span className="text-accent italic font-bold">efficient</span> process designed to deliver quality without delays.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
