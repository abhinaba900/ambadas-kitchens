"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, ChevronRight, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function PricingCalculator() {
  const [kitchenType, setKitchenType] = useState("L-Shaped");
  const [size, setSize] = useState(60); // Total running feet
  const [material, setMaterial] = useState("Premium Laminate");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const kitchenTypes = ["L-Shaped", "U-Shaped", "Straight", "Parallel", "Island"];
  const materials = [
    { name: "Premium Laminate", multiplier: 1 },
    { name: "Acrylic Finish", multiplier: 1.4 },
    { name: "PU Lacquer", multiplier: 1.8 },
    { name: "Glass / Ceramic", multiplier: 2.2 },
  ];
  
  const additionalAccessories = [
    { name: "Soft-Close Hinges", price: 15000 },
    { name: "Tandem Drawers", price: 35000 },
    { name: "Pantry Unit", price: 45000 },
    { name: "Countertop Stone", price: 25000 },
  ];

  useEffect(() => {
    // Basic calculation logic
    const basePricePerFoot = 12000;
    const matMultiplier = materials.find(m => m.name === material)?.multiplier || 1;
    
    let baseTotal = size * basePricePerFoot * matMultiplier;
    
    // Add accessories
    const accessoriesTotal = accessories.reduce((acc, curr) => {
      const item = additionalAccessories.find(a => a.name === curr);
      return acc + (item?.price || 0);
    }, 0);
    
    const total = baseTotal + accessoriesTotal;
    
    setEstimate({
      min: Math.round(total * 0.9 / 1000) * 1000,
      max: Math.round(total * 1.1 / 1000) * 1000,
    });
  }, [kitchenType, size, material, accessories]);

  const toggleAccessory = (name: string) => {
    setAccessories(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
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
    <section id="calculator" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Instant <span className="text-primary/70">Pricing Calculator</span>
          </h2>
          <p className="text-slate-600">
            Get a realistic price estimate for your dream modular kitchen based on your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Inputs */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-10">
            {/* Kitchen Type */}
            <div>
              <label className="block text-primary font-bold mb-6 flex items-center gap-2">
                <LayoutIcon /> 1. Select Kitchen Layout
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {kitchenTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setKitchenType(type)}
                    className={cn(
                      "py-3 px-4 rounded-xl text-sm font-bold transition-all border-2",
                      kitchenType === type
                        ? "bg-primary text-white border-primary shadow-lg"
                        : "bg-slate-50 text-slate-500 border-slate-100 hover:border-primary/20"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <label className="text-primary font-bold flex items-center gap-2">
                  <SizeIcon /> 2. Estimated Running Area
                </label>
                <span className="bg-primary/5 text-primary text-lg font-bold px-4 py-1 rounded-lg">
                  {size} sq.ft.
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-3 text-xs text-slate-400 font-medium">
                <span>Small (20 sqft)</span>
                <span>Medium (100 sqft)</span>
                <span>Large (250 sqft)</span>
              </div>
            </div>

            {/* Material Grid */}
            <div>
              <label className="block text-primary font-bold mb-6 flex items-center gap-2">
                <MaterialIcon /> 3. Choose Material Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {materials.map((mat) => (
                  <button
                    key={mat.name}
                    onClick={() => setMaterial(mat.name)}
                    className={cn(
                      "text-left p-4 rounded-2xl flex items-center justify-between border-2 transition-all",
                      material === mat.name
                        ? "bg-white border-accent shadow-md ring-2 ring-accent/10"
                        : "bg-slate-50 border-slate-100 hover:border-primary/20"
                    )}
                  >
                    <span className={cn("font-bold", material === mat.name ? "text-primary" : "text-slate-600")}>
                      {mat.name}
                    </span>
                    {material === mat.name && <div className="w-4 h-4 bg-accent rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div>
              <label className="block text-primary font-bold mb-6 flex items-center gap-2">
                <AccessibilityIcon /> 4. Add-Ons & Extras
              </label>
              <div className="flex flex-wrap gap-3">
                {additionalAccessories.map((acc) => (
                  <button
                    key={acc.name}
                    onClick={() => toggleAccessory(acc.name)}
                    className={cn(
                      "py-2 px-6 rounded-full text-xs font-bold transition-all border",
                      accessories.includes(acc.name)
                        ? "bg-primary text-white border-primary"
                        : "bg-slate-50 text-slate-500 border-slate-200 hover:border-primary/20 hover:bg-white"
                    )}
                  >
                    {acc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 sticky top-28 bg-primary rounded-[2.5rem] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center group">
            {/* Background Polish */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
            
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Calculator size={30} className="text-accent" />
            </div>
            
            <h3 className="font-display font-bold text-lg mb-2 opacity-80 uppercase tracking-widest">
              Estimated Quote
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mb-2 w-full">
              <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-accent whitespace-nowrap">
                {formatCurrency(estimate.min)}
              </span>
              <span className="hidden sm:inline text-xl font-light opacity-40">—</span>
              <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-accent whitespace-nowrap">
                {formatCurrency(estimate.max)}
              </span>
            </div>
            <p className="text-white/60 text-sm mb-12 max-w-sm mt-4">
              *Price includes design, manufacturing, and installation. Final quote may vary based on actual on-site measurements.
            </p>
            
            <div className="space-y-4 w-full">
              <a href="https://wa.me/919448396322" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="accent" size="lg" className="w-full text-primary h-16 text-lg font-black group">
                  <FaWhatsapp size={22} className="mr-3" />
                  GET EXACT QUOTE ON WHATSAPP
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex items-center justify-center gap-2 text-white/40 text-xs py-2 px-4 rounded-xl bg-white/5">
                <Info size={14} />
                No hidden costs. 100% Transparency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimal internal icons
const LayoutIcon = () => <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const SizeIcon = () => <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>;
const MaterialIcon = () => <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const AccessibilityIcon = () => <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
