"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Workflow } from "lucide-react";
import Link from "next/link";

export function FactoryLinkProcess() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold tracking-wider">
                 <Workflow size={16} /> Workflow
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                See How This Integrates <br /> Into Our <span className="text-accent underline underline-offset-8">Complete Process.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Manufacturing is just one part of the journey. Explore how we manage everything from the first design sketch to the final installation.
              </p>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-slate-800 transition-colors group">
                <Link href="/our-process">
                  View Our Process
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2070&auto=format&fit=crop" 
                 alt="Our process workflow"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
