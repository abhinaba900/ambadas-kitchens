"use client";

import React from "react";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export function PortfolioTrustStrip() {
  const stats = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      value: "1000+",
      label: "Kitchens Delivered Across Bangalore",
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      value: "20+",
      label: "Years of Industry Experience",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      value: "5000+",
      label: "Happy Homeowners",
    }
  ];

  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="p-4 bg-white/10 rounded-3xl border border-white/5">
                {stat.icon}
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
