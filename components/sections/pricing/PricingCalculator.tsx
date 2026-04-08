"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, ChevronRight, Info, Layout, Layers, Box, Check, Ruler } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function PricingCalculator() {
  const [kitchenType, setKitchenType] = useState("L-Shape");
  const [size, setSize] = useState(80); // in running feet
  const [material, setMaterial] = useState("Plywood");
  const [finish, setFinish] = useState("Laminate");
  const [addons, setAddons] = useState<string[]>([]);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const kitchenTypes = [
    { name: "L-Shape", icon: <Layout className="w-4 h-4" /> },
    { name: "U-Shape", icon: <Layout className="w-4 h-4 rotate-90" /> },
    { name: "Straight", icon: <Layout className="w-4 h-4" /> },
    { name: "Island", icon: <Box className="w-4 h-4" /> }
  ];

  const materials = [
    { name: "MDF (Eco)", multiplier: 0.8 },
    { name: "Plywood (Standard)", multiplier: 1 },
    { name: "Premium HDMR", multiplier: 1.2 },
    { name: "Solid Wood", multiplier: 1.8 }
  ];

  const finishes = [
    { name: "Laminate", multiplier: 1 },
    { name: "Membrane", multiplier: 1.25 },
    { name: "Acrylic", multiplier: 1.5 },
    { name: "PU Lacquer", multiplier: 2 }
  ];

  const addonOptions = [
    { id: "acc", name: "Modern Accessories", price: 25000 },
    { id: "app", name: "Premium Appliances", price: 45000 },
    { id: "lgt", name: "Smart Lighting", price: 15000 },
    { id: "str", name: "Extra Storage Units", price: 30000 }
  ];

  useEffect(() => {
    // Basic calculation logic for demo
    const basePricePerFoot = 8500;
    const matMult = materials.find(m => m.name === material)?.multiplier || 1;
    const finishMult = finishes.find(f => f.name === finish)?.multiplier || 1;
    
    let baseTotal = size * basePricePerFoot * matMult * finishMult;
    
    // Add-on totals
    const addonsTotal = addons.reduce((acc, currId) => {
      const option = addonOptions.find(o => o.id === currId);
      return acc + (option?.price || 0);
    }, 0);
    
    const total = baseTotal + addonsTotal;
    
    setEstimate({
      min: Math.floor((total * 0.9) / 5000) * 5000,
      max: Math.ceil((total * 1.1) / 5000) * 5000,
    });
  }, [kitchenType, size, material, finish, addons]);

  const toggleAddon = (id: string) => {
    setAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* INPUT SECTION */}
            <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="space-y-10">
                
                {/* 1. Kitchen Type */}
                <div>
                  <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">1</span>
                    Kitchen Layout
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {kitchenTypes.map((type) => (
                      <button
                        key={type.name}
                        onClick={() => setKitchenType(type.name)}
                        className={cn(
                          "py-4 px-3 rounded-2xl text-sm font-bold transition-all border-2 flex flex-col items-center gap-2",
                          kitchenType === type.name
                            ? "bg-primary text-white border-primary shadow-lg scale-[1.02]"
                            : "bg-white text-slate-500 border-slate-100 hover:border-primary/20"
                        )}
                      >
                        {type.icon}
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Size Slider */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="flex items-center gap-3 text-primary font-bold text-lg">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">2</span>
                      Kitchen Size (in Feet)
                    </label>
                    <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-xl text-lg font-black flex items-center gap-2">
                       <Ruler size={18} /> {size} ft.
                    </div>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="150"
                    step="5"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="w-full h-3 bg-white border border-slate-200 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <span>Compact (30ft)</span>
                    <span>Standard (80ft)</span>
                    <span>Large (150ft)</span>
                  </div>
                </div>

                {/* 3. Material & Finish */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">3</span>
                      Core Material
                    </label>
                    <div className="flex flex-col gap-2">
                      {materials.map((m) => (
                        <button
                          key={m.name}
                          onClick={() => setMaterial(m.name)}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border-2 font-bold text-sm transition-all",
                            material === m.name
                              ? "bg-white border-accent shadow-md text-primary"
                              : "bg-white/50 border-white text-slate-400 hover:border-primary/10 hover:bg-white"
                          )}
                        >
                          {m.name}
                          {material === m.name && <Check size={18} className="text-secondary" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">4</span>
                      Surface Finish
                    </label>
                    <div className="flex flex-col gap-2">
                      {finishes.map((f) => (
                        <button
                          key={f.name}
                          onClick={() => setFinish(f.name)}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl border-2 font-bold text-sm transition-all",
                            finish === f.name
                              ? "bg-white border-accent shadow-md text-primary"
                              : "bg-white/50 border-white text-slate-400 hover:border-primary/10 hover:bg-white"
                          )}
                        >
                          {f.name}
                          {finish === f.name && <Check size={18} className="text-secondary" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Add-ons */}
                <div>
                  <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">5</span>
                    Premium Add-ons
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {addonOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => toggleAddon(opt.id)}
                        className={cn(
                          "py-3 px-6 rounded-full text-sm font-bold transition-all border-2",
                          addons.includes(opt.id)
                            ? "bg-primary text-white border-primary shadow-md"
                            : "bg-white text-slate-500 border-slate-100 hover:border-primary/10"
                        )}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* OUTPUT SECTION */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-6">
                      <Calculator size={30} className="text-accent" />
                    </div>
                    
                    <span className="text-accent font-black text-sm uppercase tracking-[0.2em] mb-4">
                      ESTIMATED PROJECT COST
                    </span>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={estimate.min + estimate.max}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col gap-2 mb-6"
                      >
                        <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight flex items-center justify-center flex-wrap gap-4">
                          <span className="text-accent">{formatCurrency(estimate.min)}</span>
                          <span className="text-white/20 text-3xl font-light">—</span>
                          <span className="text-accent">{formatCurrency(estimate.max)}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <p className="text-white/60 text-sm font-medium mb-10 max-w-xs mx-auto italic">
                      “Final price may vary based on design and site conditions.”
                    </p>

                    <div className="w-full space-y-4">
                      <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl group">
                        <FaWhatsapp size={22} className="mr-3" />
                        WHATSAPP FOR EXACT QUOTE
                      </a>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
                        Get exact costing in 5 mins on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-primary/5 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <Info size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Detailed Breakdown Included</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      This range covers basic cabinets, internal accessories, and expert installation at your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
