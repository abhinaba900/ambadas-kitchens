"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { 
  Calculator, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Check, 
  Home, 
  Utensils, 
  Archive, 
  Plus, 
  Minus, 
  ArrowRight,
  Phone,
  User,
  Mail,
  MapPin,
  FileText
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import calculatorData from "@/lib/calculator-data.json";
import Image from "next/image";

// Types based on JSON structure
type CalculatorType = "full_home_calculator" | "kitchen_calculator" | "wardrobe_calculator";

interface CalculatorOption {
  id: number;
  slug: string;
  title: string;
  description: string;
  buttonText: string;
  type: CalculatorType;
  icon: string;
  steps: any[];
}

export function PricingCalculator() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorOption | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSelectCalculator = (calc: any) => {
    setActiveCalculator(calc);
    setCurrentStep(0);
    setFormData({});
    setIsCalculated(false);
  };

  const handleNext = () => {
    if (activeCalculator && currentStep < activeCalculator.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const handleBack = () => {
    if (isCalculated) {
      setActiveCalculator(null);
      setIsCalculated(false);
      setCurrentStep(0);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setActiveCalculator(null);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <AnimatePresence mode="wait">
            {!activeCalculator ? (
              <motion.div 
                key="selector"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display font-black text-primary tracking-tight">
                    Instant <span className="text-accent">Pricing</span> Calculator
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    Get a transparent factory-cost estimate for your dream interiors in less than 2 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {calculatorData.map((calc) => (
                    <button
                      key={calc.id}
                      onClick={() => handleSelectCalculator(calc)}
                      className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-left overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:scale-110 transition-transform duration-500" />
                      
                      <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                          {calc.slug === "full-home" && <Home size={32} />}
                          {calc.slug === "kitchen" && <Utensils size={32} />}
                          {calc.slug === "wardrobe" && <Archive size={32} />}
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{calc.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{calc.description}</p>
                        </div>

                        <div className="flex items-center gap-2 text-accent font-black text-sm group-hover:gap-4 transition-all">
                          {calc.buttonText} <ChevronRight size={18} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-white/50 backdrop-blur-sm border border-white p-6 rounded-3xl flex items-center gap-4 max-w-3xl mx-auto">
                  <div className="w-12 h-12 bg-accent/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Info size={24} />
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    <span className="font-bold">Trust Ambadas:</span> Our estimates are based on real factory production costs, ensuring you get the best value without middleman markups.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calculator-active"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col"
              >
                {/* Header / Progress */}
                <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handleBack}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{activeCalculator.title} Estimate</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Step {currentStep + 1} of {activeCalculator.steps.length}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="hidden md:flex flex-1 max-w-xs mx-10 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / activeCalculator.steps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                    <Calculator size={16} className="text-primary" />
                    <span className="text-sm font-bold text-primary">Live Calculator</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-12">
                  {!isCalculated ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="h-full"
                      >
                        <StepRenderer 
                          step={activeCalculator.steps[currentStep]} 
                          formData={formData}
                          updateFormData={updateFormData}
                          onNext={handleNext}
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <CalculationResults 
                      activeCalculator={activeCalculator} 
                      formData={formData} 
                      onReset={() => setActiveCalculator(null)}
                      formatCurrency={formatCurrency}
                    />
                  )}
                </div>

                {/* Footer Controls */}
                {!isCalculated && (
                  <div className="p-8 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
                    <p className="text-slate-400 text-sm hidden md:block italic">
                      All data is processed securely to provide an accurate estimate.
                    </p>
                    <div className="flex gap-4 w-full md:w-auto">
                      <Button 
                        variant="outline" 
                        className="flex-1 md:flex-none h-14 px-8 rounded-2xl"
                        onClick={handleBack}
                      >
                        {currentStep === 0 ? "Change Category" : "Back"}
                      </Button>
                      <Button 
                        className="flex-1 md:flex-none h-14 px-10 rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                        onClick={handleNext}
                        disabled={!isStepValid(activeCalculator.steps[currentStep], formData)}
                      >
                        {currentStep === activeCalculator.steps.length - 1 ? "Finish & Calculate" : "Next Step"}
                        <ChevronRight size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

// Validation logic
function isStepValid(step: any, formData: any) {
  const value = formData[step.field];
  if (step.selectionType === "single") return !!value;
  if (step.selectionType === "multiple") return true; // Optional
  if (step.selectionType === "counter") return true; // Has defaults
  if (step.selectionType === "measurement") return true; // Has defaults
  if (step.selectionType === "form") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    
    return (
      phoneRegex.test(formData.userPhone || "") && 
      emailRegex.test(formData.userEmail || "")
    );
  }
  return true;
}

// Sub-component to render different step types
function StepRenderer({ step, formData, updateFormData, onNext }: any) {
  const currentValue = formData[step.field];

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-black text-primary tracking-tight">{step.title}</h2>
        {step.infoText && (
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <Info size={14} className="text-accent" /> {step.infoText}
          </p>
        )}
      </div>

      <div className="flex-1">
        {step.selectionType === "single" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(step.options || step.layouts || step.packages).map((opt: any) => {
              const isSelected = currentValue === (opt.value || opt.type);
              return (
                <button
                  key={opt.id}
                  onClick={() => updateFormData(step.field, opt.value || opt.type)}
                  className={cn(
                    "relative p-6 rounded-3xl border-2 text-left transition-all duration-300 group overflow-hidden h-full flex flex-col",
                    isSelected 
                      ? "border-accent bg-accent/5 shadow-md" 
                      : "border-slate-100 hover:border-primary/20 hover:bg-slate-50"
                  )}
                >
                  {opt.image && (
                    <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-slate-100">
                      <Image 
                        src={opt.image} 
                        alt={opt.name || opt.label} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-primary">{opt.name || opt.label}</h4>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center">
                        <Check size={14} strokeWidth={4} />
                      </div>
                    )}
                  </div>
                  {opt.description && <p className="text-xs text-slate-500 line-clamp-2 mb-3">{opt.description}</p>}
                  {opt.priceRange && (
                    <span className="mt-auto text-xs font-black tracking-widest text-accent uppercase">{opt.priceRange}</span>
                  )}
                  {opt.sizes && isSelected && opt.hasSizeSelection && (
                    <div className="mt-4 pt-4 border-t border-accent/20 grid grid-cols-2 gap-2">
                      {opt.sizes.map((s: any) => (
                        <div 
                          key={s.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            updateFormData(`${step.field}_size`, s.value);
                          }}
                          className={cn(
                            "px-3 py-2 rounded-xl text-[10px] font-bold text-center transition-all cursor-pointer",
                            formData[`${step.field}_size`] === s.value 
                              ? "bg-primary text-white" 
                              : "bg-white text-slate-400 border border-slate-100"
                          )}
                        >
                          <div className="flex flex-col items-center">
                            <span className="leading-tight">{s.label}</span>
                            {s.description && (
                              <span className={cn(
                                "text-[7px] font-medium mt-0.5",
                                formData[`${step.field}_size`] === s.value ? "text-white/70" : "text-slate-400"
                              )}>
                                {s.description}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {step.selectionType === "counter" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {step.rooms.map((room: any) => {
              const val = formData[`${step.field}_${room.value}`] ?? room.default;
              return (
                <div key={room.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                      {room.value.includes('kitchen') ? <Utensils size={20} /> : <Home size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{room.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Unit: {val}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
                    <button 
                      onClick={() => updateFormData(`${step.field}_${room.value}`, Math.max(room.min, val - 1))}
                      className="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-500 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-black text-primary">{val}</span>
                    <button 
                      onClick={() => updateFormData(`${step.field}_${room.value}`, val + 1)}
                      className="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-500 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {step.selectionType === "measurement" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-square bg-slate-100 rounded-[2rem] overflow-hidden">
                {/* Find current layout image */}
                {(() => {
                  const layout = step.layouts.find((l: any) => l.layoutType === formData.kitchenLayout);
                  return layout && (
                    <Image 
                      src={layout.image} 
                      alt="Kitchen Measurement" 
                      fill 
                      className="object-contain p-8"
                    />
                  );
                })()}
              </div>
              <div className="space-y-6">
                {step.layouts.find((l: any) => l.layoutType === formData.kitchenLayout)?.measurements.map((m: any, idx: number) => {
                  const key = `${step.field}_${m.label}`;
                  const val = formData[key] ?? m.default;
                  return (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-primary">Dimension {m.label} ({m.unit})</label>
                        <span className="text-accent font-black">{val} {m.unit}</span>
                      </div>
                      <input 
                        type="range"
                        min="2"
                        max="20"
                        step="0.5"
                        value={val}
                        onChange={(e) => updateFormData(key, parseFloat(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-accent"
                      />
                    </div>
                  );
                })}
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-xs text-slate-500 flex items-start gap-2">
                    <Info size={14} className="text-primary mt-0.5" />
                    <span>{step.layouts.find((l: any) => l.layoutType === formData.kitchenLayout)?.note}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step.selectionType === "multiple" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {step.options.map((opt: any) => {
              const isSelected = (formData[step.field] || []).includes(opt.value);
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    const current = formData[step.field] || [];
                    const next = isSelected 
                      ? current.filter((v: string) => v !== opt.value)
                      : [...current, opt.value];
                    updateFormData(step.field, next);
                  }}
                  className={cn(
                    "relative p-6 rounded-3xl border-2 text-left transition-all duration-300 group h-full flex flex-col",
                    isSelected 
                      ? "border-accent bg-accent/5" 
                      : "border-slate-100 hover:border-primary/20 bg-white"
                  )}
                >
                   {opt.image && (
                    <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-slate-100">
                      <Image 
                        src={opt.image} 
                        alt={opt.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-primary">{opt.name}</h4>
                    <div className={cn(
                      "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                      isSelected ? "bg-accent border-accent text-primary" : "border-slate-200"
                    )}>
                      {isSelected && <Check size={14} strokeWidth={4} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {step.selectionType === "form" && (
          <div className="max-w-2xl mx-auto space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <User size={16} className="text-accent" /> Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  value={formData.userName || ""}
                  onChange={(e) => updateFormData("userName", e.target.value)}
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <Phone size={16} className="text-accent" /> Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="10-digit mobile number"
                  value={formData.userPhone || ""}
                  onChange={(e) => updateFormData("userPhone", e.target.value)}
                  className={cn(
                    "w-full h-14 px-6 rounded-2xl bg-slate-50 border transition-all focus:outline-none focus:ring-2 focus:ring-accent/20",
                    formData.userPhone && !/^[6-9]\d{9}$/.test(formData.userPhone) 
                      ? "border-red-300 bg-red-50" 
                      : "border-slate-200 focus:border-accent"
                  )}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <Mail size={16} className="text-accent" /> Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  value={formData.userEmail || ""}
                  onChange={(e) => updateFormData("userEmail", e.target.value)}
                  className={cn(
                    "w-full h-14 px-6 rounded-2xl bg-slate-50 border transition-all focus:outline-none focus:ring-2 focus:ring-accent/20",
                    formData.userEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail) 
                      ? "border-red-300 bg-red-50" 
                      : "border-slate-200 focus:border-accent"
                  )}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <FileText size={16} className="text-accent" /> Floor Plan Type
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 2BHK, 3BHK East Facing"
                  value={formData.floorPlan || ""}
                  onChange={(e) => updateFormData("floorPlan", e.target.value)}
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-primary flex items-center gap-2">
                  <MapPin size={16} className="text-accent" /> Full Address / Project Location
                </label>
                <textarea 
                  placeholder="Enter your detailed address or project location"
                  value={formData.userAddress || ""}
                  onChange={(e) => updateFormData("userAddress", e.target.value)}
                  className="w-full min-h-[100px] p-6 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>
            </div>
          </div>
        ) || null}
      </div>
    </div>
  );
}

// Results calculation & rendering
function CalculationResults({ activeCalculator, formData, onReset, formatCurrency }: any) {
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  useEffect(() => {
    // Logic for calculation based on calculator type
    let base = 0;
    
    if (activeCalculator.slug === "full-home") {
      const pricing: any = {
        "1_bhk": { elegance: 350000, marbello: 450000, ultima: 550000 },
        "2_bhk": { elegance: 450000, marbello: 550000, ultima: 650000 },
        "3_bhk": { elegance: 550000, marbello: 650000, ultima: 750000 },
        "4_bhk": { elegance: 900000, marbello: 1000000, ultima: 1100000 },
        "5_bhk_plus": { elegance: 1100000, marbello: 1200000, ultima: 1300000 }
      };
      
      const bhk = formData.bhkType || "2_bhk";
      const pkg = formData.packageSelection || "elegance";
      base = pricing[bhk]?.[pkg] || 450000;
      
      if (formData.bhkType_size === "large") base *= 1.1;
    } 
    else if (activeCalculator.slug === "kitchen") {
      const packageRates: any = { "elegance": 1500, "marbello": 1800, "ultima": 2200, "custom_package": 1650 };
      const rate = packageRates[formData.kitchenPackageSelection] || 1500;
      
      // Calculate total running feet from measurements
      let totalRunningFeet = 0;
      if (formData.kitchenMeasurements) {
        totalRunningFeet = Object.values(formData.kitchenMeasurements).reduce((acc: number, val: any) => acc + (Number(val) || 0), 0);
      } else {
        // Fallback to default layout lengths if measurements not explicitly set
        const defaults: any = { "l_shaped": 11, "straight": 8, "u_shaped": 31, "parallel": 16 };
        totalRunningFeet = defaults[formData.kitchenLayout] || 10;
      }

      // Sqft = Running Feet * Standard Height (5ft for base + wall units)
      const sqft = totalRunningFeet * 5;
      base = sqft * rate;
    }
    else if (activeCalculator.slug === "wardrobe") {
      const packageRates: any = { "elegance": 1250, "marbello": 1500, "ultima": 1750 };
      const rate = packageRates[formData.wardrobePackageSelection] || 1250;
      
      const width = Number(formData.wardrobeWidth) || 7;
      const height = 7; // Standard height in feet
      
      const sqft = width * height;
      base = sqft * rate;
      
      if (formData.wardrobeAccessories?.length > 0) {
        base += formData.wardrobeAccessories.length * 5000;
      }
    }

    setEstimate({
      min: Math.floor((base * 0.98) / 1000) * 1000,
      max: Math.ceil((base * 1.05) / 1000) * 1000,
    });
  }, [activeCalculator, formData]);

  const whatsappMessage = `Hello Ambadas Kitchens! I just generated a ${activeCalculator.title} estimate.
  
Details:
${Object.entries(formData).filter(([k]) => !k.includes('user')).map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('\n')}

Estimate: ${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}

Customer Info:
Name: ${formData.userName}
Phone: ${formData.userPhone}
Email: ${formData.userEmail}
Address: ${formData.userAddress}
Floor Plan: ${formData.floorPlan}

Please contact me for a detailed quote!`;

  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-10 py-10">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-24 h-24 bg-accent/20 text-primary rounded-[2.5rem] flex items-center justify-center"
      >
        <Check size={48} strokeWidth={3} />
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-4xl font-display font-black text-primary tracking-tight">Your Estimate is Ready!</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Based on your selections, here is the approximate factory-cost estimate for your project.
        </p>
      </div>

      <div className="bg-primary p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden w-full max-w-2xl group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-accent font-black text-xs uppercase tracking-[0.3em]">Estimated Budget Range</span>
            <div className="text-4xl md:text-6xl font-display font-black tracking-tighter text-accent flex items-center gap-4 flex-wrap justify-center">
              <span>{formatCurrency(estimate.min)}</span>
              <span className="text-white/20 text-2xl font-light">—</span>
              <span>{formatCurrency(estimate.max)}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Project Type</p>
              <p className="font-bold text-sm">{activeCalculator.title}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Package</p>
              <p className="font-bold text-sm">{formData.packageSelection || formData.kitchenPackageSelection || formData.wardrobePackageSelection || "Standard"}</p>
            </div>
          </div>

          <a 
            href={`https://wa.me/919448396322?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-[#25D366] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-black/20"
          >
            <FaWhatsapp size={24} />
            GET DETAILED QUOTE ON WHATSAPP
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <div className="flex-1 p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4 text-left">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
            <Info size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary mb-1">What's included?</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">Factory-finish cabinets, branded hardware (Hettich/Hafele), 10-year warranty, and professional installation.</p>
          </div>
        </div>
        <button 
          onClick={onReset}
          className="px-8 py-6 text-slate-400 font-bold hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <ArrowRight size={18} className="rotate-180" /> Start Over
        </button>
      </div>
    </div>
  );
}
