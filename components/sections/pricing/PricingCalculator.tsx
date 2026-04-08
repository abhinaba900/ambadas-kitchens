"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Calculator, ChevronRight, Info, Layout, Layers, Box, Check, Ruler, Home } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const LAYOUTS = [
  { id: "1BHK", name: "1 BHK", rooms: ["kitchen", "living", "masterBed"] },
  { id: "2BHK", name: "2 BHK", rooms: ["kitchen", "living", "masterBed", "guestBed"] },
  { id: "3BHK", name: "3 BHK", rooms: ["kitchen", "living", "masterBed", "kidsBed", "guestBed", "dining"] },
  { id: "4BHK", name: "4 BHK", rooms: ["kitchen", "living", "masterBed", "kidsBed", "guestBed", "dining", "foyer"] },
  { id: "Villa", name: "Villa", rooms: ["kitchen", "living", "masterBed", "kidsBed", "guestBed", "dining", "foyer", "utility"] },
];

const ROOM_OPTIONS = [
  { id: "kitchen", name: "Modular Kitchen", pricePerSqFt: 1800, defaultSqFt: 80, min: 40, max: 200, icon: <Layout className="w-5 h-5" /> },
  { id: "living", name: "Living Room (TV Unit + Decor)", pricePerSqFt: 1200, defaultSqFt: 60, min: 20, max: 150, icon: <Box className="w-5 h-5" /> },
  { id: "masterBed", name: "Master Bedroom (Wardrobe + Bed)", pricePerSqFt: 1400, defaultSqFt: 120, min: 60, max: 250, icon: <Layers className="w-5 h-5" /> },
  { id: "kidsBed", name: "Kids' Bedroom", pricePerSqFt: 1300, defaultSqFt: 100, min: 40, max: 200, icon: <Layers className="w-5 h-5 opacity-70" /> },
  { id: "guestBed", name: "Guest Bedroom", pricePerSqFt: 1250, defaultSqFt: 90, min: 40, max: 180, icon: <Layers className="w-5 h-5 opacity-40" /> },
  { id: "dining", name: "Dining Area", pricePerSqFt: 1100, defaultSqFt: 40, min: 20, max: 100, icon: <Layout className="w-5 h-5 rotate-90" /> },
  { id: "foyer", name: "Foyer / Shoe Rack", pricePerSqFt: 1500, defaultSqFt: 20, min: 10, max: 50, icon: <Ruler className="w-5 h-5" /> },
  { id: "utility", name: "Utility / Balcony", pricePerSqFt: 1000, defaultSqFt: 30, min: 15, max: 80, icon: <Box size={18} /> },
];

const PACKAGE_TIERS = [
  { 
    id: "essential", 
    name: "Essential", 
    multiplier: 1.0, 
    desc: "Laminate + Commercial Plywood",
    highlight: "Value for Money"
  },
  { 
    id: "premium", 
    name: "Premium", 
    multiplier: 1.4, 
    desc: "Acrylic/Membrane + BWP Plywood",
    highlight: "Most Popular"
  },
  { 
    id: "elite", 
    name: "Elite", 
    multiplier: 1.9, 
    desc: "HDMR/PU + High-Gloss Glass",
    highlight: "Uber Luxury"
  },
];

export function PricingCalculator() {
  const [layout, setLayout] = useState("2BHK");
  const [selectedRooms, setSelectedRooms] = useState<string[]>(LAYOUTS[1].rooms);
  const [roomSizes, setRoomSizes] = useState<Record<string, number>>(
    ROOM_OPTIONS.reduce((acc, room) => ({ ...acc, [room.id]: room.defaultSqFt }), {})
  );
  const [packageTier, setPackageTier] = useState("premium");
  const [includeServices, setIncludeServices] = useState(false);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const handleLayoutChange = (layoutId: string) => {
    setLayout(layoutId);
    const layoutConfig = LAYOUTS.find(l => l.id === layoutId);
    if (layoutConfig) {
      setSelectedRooms(layoutConfig.rooms);
    }
  };

  const toggleRoom = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) ? prev.filter(r => r !== roomId) : [...prev, roomId]
    );
  };

  const updateRoomSize = (roomId: string, size: number) => {
    setRoomSizes(prev => ({ ...prev, [roomId]: size }));
  };

  useEffect(() => {
    const tier = PACKAGE_TIERS.find(t => t.id === packageTier);
    const multiplier = tier?.multiplier || 1;
    
    let baseTotal = selectedRooms.reduce((acc, roomId) => {
      const room = ROOM_OPTIONS.find(r => r.id === roomId);
      const size = roomSizes[roomId] || room?.defaultSqFt || 0;
      return acc + (size * (room?.pricePerSqFt || 0));
    }, 0);

    baseTotal *= multiplier;

    if (includeServices) {
      baseTotal *= 1.25; // Civil Services (Painting, False Ceiling, Electrical etc)
    }

    setEstimate({
      min: Math.floor((baseTotal * 0.9) / 5000) * 5000,
      max: Math.ceil((baseTotal * 1.1) / 5000) * 5000,
    });
  }, [selectedRooms, roomSizes, packageTier, includeServices]);

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
              <div className="space-y-12">
                
                {/* Step 1: Layout */}
                <div>
                  <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">1</span>
                    Select Your Flat Layout
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {LAYOUTS.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => handleLayoutChange(l.id)}
                        className={cn(
                          "py-4 px-2 rounded-2xl text-sm font-bold transition-all border-2 flex flex-col items-center gap-2",
                          layout === l.id
                            ? "bg-primary text-white border-primary shadow-lg scale-[1.05]"
                            : "bg-white text-slate-500 border-slate-100 hover:border-primary/20"
                        )}
                      >
                        <Home className="w-5 h-5" />
                        {l.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Rooms */}
                <div>
                  <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">2</span>
                    Select Rooms & Sizes (Sq. Ft.)
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    {ROOM_OPTIONS.map((room) => {
                      const isSelected = selectedRooms.includes(room.id);
                      const currentSize = roomSizes[room.id] || room.defaultSqFt;
                      const roomMultiplier = PACKAGE_TIERS.find(t => t.id === packageTier)?.multiplier || 1;
                      const roomSubtotal = currentSize * room.pricePerSqFt * roomMultiplier;

                      return (
                        <div 
                          key={room.id}
                          className={cn(
                            "rounded-[2rem] border-2 transition-all overflow-hidden",
                            isSelected
                              ? "bg-white border-accent shadow-md"
                              : "bg-white/50 border-white text-slate-400 hover:border-primary/10"
                          )}
                        >
                          <div 
                            onClick={() => toggleRoom(room.id)}
                            className="flex items-center justify-between p-5 cursor-pointer group"
                          >
                            <div className="flex items-center gap-4">
                              <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm",
                                isSelected ? "bg-accent/20 text-accent" : "bg-white border border-slate-100 text-slate-400 group-hover:bg-primary/5"
                              )}>
                                {room.icon}
                              </div>
                              <div className="text-left">
                                <p className={cn("font-bold text-base transition-colors", isSelected ? "text-primary" : "text-slate-500")}>
                                  {room.name}
                                </p>
                                <p className="text-[10px] uppercase tracking-widest font-black opacity-60">
                                  {isSelected ? `${currentSize} Sq. Ft. • ~${formatCurrency(roomSubtotal)}` : `Starts at ~${formatCurrency(room.defaultSqFt * room.pricePerSqFt)}`}
                                </p>
                              </div>
                            </div>
                            <div className={cn(
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                              isSelected ? "bg-secondary border-secondary text-white" : "border-slate-200"
                            )}>
                              {isSelected && <Check size={14} strokeWidth={4} />}
                            </div>
                          </div>

                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-6 pb-6 pt-2 border-t border-slate-50"
                              >
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-400">
                                    <span>Area Size</span>
                                    <span className="text-primary bg-primary/5 px-2 py-0.5 rounded-lg">{currentSize} sqft</span>
                                  </div>
                                  <input
                                    type="range"
                                    min={room.min}
                                    max={room.max}
                                    step="5"
                                    value={currentSize}
                                    onChange={(e) => updateRoomSize(room.id, parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-accent"
                                  />
                                  <div className="flex justify-between text-[10px] text-slate-300 font-bold">
                                    <span>{room.min}ft</span>
                                    <span>{room.max}ft</span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Tier */}
                <div>
                  <label className="flex items-center gap-3 text-primary font-bold text-lg mb-6">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">3</span>
                    Choose Quality & Finish
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PACKAGE_TIERS.map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => setPackageTier(tier.id)}
                        className={cn(
                          "relative p-6 rounded-3xl border-2 text-left transition-all overflow-hidden",
                          packageTier === tier.id
                            ? "bg-white border-accent shadow-xl scale-[1.02]"
                            : "bg-white/50 border-white text-slate-500 hover:bg-white hover:border-primary/10"
                        )}
                      >
                        {packageTier === tier.id && (
                          <div className="absolute top-0 right-0 bg-accent text-primary px-3 py-1 text-[10px] font-black uppercase rounded-bl-xl tracking-tighter">
                            {tier.highlight}
                          </div>
                        )}
                        <h4 className="font-bold text-primary mb-1">{tier.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Services */}
                <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                      <Layers size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">Include Civil & Services</h4>
                      <p className="text-[11px] text-slate-500">Painting, False Ceiling, Electrical Work (+25%)</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIncludeServices(!includeServices)}
                    className={cn(
                      "w-12 h-6 rounded-full transition-colors relative flex items-center px-1",
                      includeServices ? "bg-accent" : "bg-slate-300"
                    )}
                  >
                    <motion.div 
                      animate={{ x: includeServices ? 24 : 0 }}
                      className="w-4 h-4 bg-white rounded-full shadow-sm" 
                    />
                  </button>
                </div>

              </div>
            </div>

            {/* OUTPUT SECTION */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-6">
                      <Calculator size={30} className="text-accent" />
                    </div>
                    
                    <span className="text-accent font-black text-sm uppercase tracking-[0.2em] mb-4">
                      {layout} INTERIOR ESTIMATE
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
                      Disclaimer: This is a rough factory-cost estimate. Final pricing may vary based on exact measurements.
                    </p>

                    <div className="w-full space-y-4">
                      <a 
                        href={`https://wa.me/919448396322?text=Hello Ambadas Kitchens! I just checked your ${layout} pricing calculator.

Room Breakdown:
${selectedRooms.map(id => `- ${ROOM_OPTIONS.find(r => r.id === id)?.name}: ${roomSizes[id]} sqft`).join('\n')}

Quality Tier: ${packageTier.toUpperCase()}
Services Included: ${includeServices ? 'YES (Painting/Ceiling)' : 'NO'}

Total Estimated Cost: ${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}

Please share a detailed quote!`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl group text-center"
                      >
                        <FaWhatsapp size={22} className="mr-3" />
                        WHATSAPP ESTIMATE
                      </a>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
                        Get exact pricing in 10 mins on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-primary/5 rounded-3xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center flex-shrink-0">
                    <Info size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">What's in your Estimate?</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Includes 18mm BWP Plywood/HDMR cabinets, German hardware, designer handles, and factory-finish installation.
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
