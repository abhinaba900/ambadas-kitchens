"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  PenTool, 
  Layers, 
  Factory, 
  Wrench, 
  HeartHandshake, 
  CheckCircle2 
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Consultation",
    description: "Understand requirements, site visit (if needed), and initial discussion to align on your vision.",
    icon: MessageSquare,
    details: ["Understand requirements", "Site visit (if needed)", "Initial discussion"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Design",
    description: "Layout planning, 2D/3D design creation, and revisions to ensure every detail is perfect.",
    icon: PenTool,
    details: ["Layout planning", "2D / 3D design", "Design revisions"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Material Selection",
    description: "Choose from a wide range of premium finishes, colors, and accessories that match your style.",
    icon: Layers,
    details: ["Finishes", "Colors", "Accessories"],
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Factory Production",
    description: "Precision manufacturing using advanced CNC machines and edge banding for superior quality.",
    icon: Factory,
    details: ["CNC cutting", "Edge banding", "Quality checks"],
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Installation",
    description: "Seamless on-site setup by expert technicians with clean execution and final adjustments.",
    icon: Wrench,
    details: ["On-site setup", "Clean execution", "Final adjustments"],
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Handover",
    description: "Final inspection and client walkthrough to ensure complete satisfaction before completion.",
    icon: HeartHandshake,
    details: ["Final inspection", "Client walkthrough", "Completion"],
    color: "bg-primary/10 text-primary",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Step-by-Step <span className="text-accent">Journey</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We handle everything so you don't have to worry. Here's how we bring your dream kitchen to life.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-0",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Content Side */}
                <div className={cn(
                  "flex-1 w-full",
                  index % 2 === 0 ? "lg:text-right lg:pr-20" : "lg:text-left lg:pl-20"
                )}>
                  <div className="inline-block p-3 rounded-2xl mb-4 bg-primary/5 text-primary lg:hidden">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0">
                    {step.description}
                  </p>
                  
                  <div className={cn(
                    "mt-6 flex flex-wrap gap-2 justify-center",
                    index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  )}>
                    {step.details.map((detail) => (
                      <span 
                        key={detail} 
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-sm border border-slate-100"
                      >
                        <CheckCircle2 size={14} className="text-accent" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Icon Side */}
                <div className="relative z-10 hidden lg:block">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform hover:scale-110",
                    step.color
                  )}>
                    <step.icon size={28} />
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
