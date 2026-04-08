"use client";

import React from "react";
import { ShieldCheck, Receipt, UserCheck, MessageSquare } from "lucide-react";

export function PriceTrust() {
  const trustItems = [
    {
      title: "No Hidden Costs",
      description: "Our initial quote includes labor, materials, and installation.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    {
      title: "Itemized Billing",
      description: "Get a clear breakdown of every single component and finish.",
      icon: <Receipt className="w-10 h-10 text-secondary" />
    },
    {
      title: "Direct Factory Pricing",
      description: "Buy direct from the manufacturer and save up to 30% on costs.",
      icon: <UserCheck className="w-10 h-10 text-primary" />
    },
    {
      title: "Honest Advice",
      description: "We help you select materials that fit both your style and budget.",
      icon: <MessageSquare className="w-10 h-10 text-secondary" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-20 border-2 border-dashed border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-primary mb-6 leading-tight flex items-center justify-center gap-4">
               Transparent <span className="text-primary/60 italic">Pricing</span>
            </h2>
            <p className="text-slate-600 font-medium">
              We believe in honesty. No last-minute surprises, no hidden overheads. Just premium quality at direct-factory prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-primary mb-2 italic">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
