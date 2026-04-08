"use client";

import React from "react";
import { Info } from "lucide-react";

export function PricingIntro() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Info size={32} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2 italic">A Quick Note on Pricing</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Every kitchen at Ambadas is fully customized to your home, cooking style, and budget. 
              <span className="text-primary font-bold"> Use this calculator to get an approximate cost</span> before speaking to our design experts for a formal quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
