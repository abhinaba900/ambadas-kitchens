"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  FileText, 
  PenTool, 
  CheckSquare, 
  Palette, 
  Ruler, 
  Factory,
  Layers,
  Layout,
  Target,
  Box,
  Hammer,
  ShieldCheck,
  Truck,
  BookOpen,
  Settings,
  Cpu,
  ClipboardCheck,
  Sparkles,
  Key,
  Heart,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    id: "working",
    label: "Working Phase",
    title: "Chronology of Working",
    description: "The journey from initial consultation to final design approval.",
    color: "blue",
    steps: [
      { title: "Client meeting", description: "To understand your requirements and vision.", icon: Users },
      { title: "Formal quotation", description: "Detailed cost breakdown based on requirements.", icon: FileText },
      { title: "Designing on confirmation", description: "Creating detailed designs after project confirmation.", icon: PenTool },
      { title: "Order finalization", description: "Finalizing all technical and commercial details.", icon: CheckSquare },
      { title: "Décor Selection", description: "Choosing finishes, colors, and textures.", icon: Palette },
      { title: "Final Drawing", description: "Precise technical drawings for production.", icon: Ruler },
      { title: "Producción", description: "Moving to our high-tech manufacturing facility.", icon: Factory },
    ]
  },
  {
    id: "production",
    label: "Production Phase",
    title: "Chronology of Production",
    description: "Precision manufacturing using state-of-the-art European machinery.",
    color: "green",
    steps: [
      { title: "Pressing of laminate", description: "Applying premium laminate with plywood.", icon: Layers },
      { title: "Cutting of panels", description: "Precision cutting as per technical drawings.", icon: Layout },
      { title: "Multi boring drilling", description: "Automated drilling for perfect fitting.", icon: Target },
      { title: "Edgebanding of panels", description: "Seamless edge finishing using Homag machines.", icon: Box },
      { title: "Assembly of cabinets", description: "Expert assembly of modular components.", icon: Hammer },
      { title: "QC PROCESS", description: "Rigorous quality checks for every component.", icon: ShieldCheck },
      { title: "Dispatch to site", description: "Careful packaging and logistics to your location.", icon: Truck },
    ],
    partners: ["BIESSE", "imos", "HOMAG"]
  },
  {
    id: "installation",
    label: "Installation Phase",
    title: "Chronology of Installation",
    description: "Expert on-site assembly and seamless final handover.",
    color: "amber",
    steps: [
      { title: "Assembly instruction", description: "Briefing the site team with detailed plans.", icon: BookOpen },
      { title: "Assembly process", description: "Expert integration by skilled technicians.", icon: Settings },
      { title: "Gadget installation", description: "Fitting appliances and smart accessories.", icon: Cpu },
      { title: "QC checking at site", description: "Final quality verification on-site.", icon: ClipboardCheck },
      { title: "Cleaning of site", description: "Post-installation thorough cleaning.", icon: Sparkles },
      { title: "Site Handover", description: "Official walkthrough and key handover.", icon: Key },
      { title: "Thanks for trusting us", description: "Continuing our relationship with after-sales support.", icon: Heart },
    ]
  }
];

export function ProcessSteps() {
  const [activeTab, setActiveTab] = useState(phases[0].id);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const phase = searchParams.get("phase");
    if (phase && phases.find(p => p.id === phase)) {
      setActiveTab(phase);
      
      // Scroll to section after a short delay to ensure rendering
      const timer = setTimeout(() => {
        const element = document.getElementById("process-steps");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const currentPhase = phases.find(p => p.id === activeTab) || phases[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="process-steps">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            The <span className="text-accent">Ambadas</span> Chronology
          </h2>
          <p className="text-slate-600 text-lg">
            A transparent, step-by-step guide to how we bring your dream interiors to life.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActiveTab(phase.id)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 border-2",
                activeTab === phase.id 
                  ? "bg-primary border-primary text-white shadow-xl scale-105" 
                  : "bg-white border-slate-100 text-slate-500 hover:border-primary/30"
              )}
            >
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs",
                activeTab === phase.id ? "bg-white/20" : "bg-slate-100"
              )}>
                {phases.indexOf(phase) + 1}
              </span>
              {phase.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 rounded-[40px] p-8 md:p-16 border border-slate-100"
          >
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Info Column */}
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  {currentPhase.title}
                </h3>
                <p className="text-slate-500 mb-8 text-lg">
                  {currentPhase.description}
                </p>
                
                {currentPhase.partners && (
                  <div className="pt-8 border-t border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Precision Partners</p>
                    <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                      {currentPhase.partners.map(partner => (
                        <span key={partner} className="text-2xl font-black tracking-tighter text-primary">{partner}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 hidden lg:block">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4 text-primary font-bold mb-2">
                      <CheckCircle2 className="text-accent" />
                      Quality Guaranteed
                    </div>
                    <p className="text-sm text-slate-500">Every step in our {currentPhase.label.toLowerCase()} is monitored for perfection.</p>
                  </div>
                </div>
              </div>

              {/* Steps Column */}
              <div className="lg:col-span-2">
                <div className="relative space-y-4">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200" />
                  
                  {currentPhase.steps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-16 group"
                    >
                      <div className={cn(
                        "absolute left-0 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110 border-4 border-white shadow-md",
                        activeTab === "working" ? "bg-blue-600 text-white" :
                        activeTab === "production" ? "bg-green-600 text-white" :
                        "bg-amber-500 text-white"
                      )}>
                        <step.icon size={20} />
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all group-hover:border-primary/10">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h4 className="font-bold text-primary text-lg mb-1">{step.title}</h4>
                            <p className="text-slate-500 text-sm">{step.description}</p>
                          </div>
                          <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
