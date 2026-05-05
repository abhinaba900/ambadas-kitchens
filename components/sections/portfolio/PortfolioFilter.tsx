"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PortfolioFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  activeBudget?: string;
  onBudgetChange?: (budget: string) => void;
  activeLocation?: string;
  onLocationChange?: (location: string) => void;
}

export function PortfolioFilter({ 
  activeCategory, onCategoryChange,
  activeBudget = "All", onBudgetChange,
  activeLocation = "All", onLocationChange
}: PortfolioFilterProps) {
  const categories = ["All", "Kitchens", "Wardrobes", "Full Home Interiors"];
  const budgets = ["All", "Under ₹5L", "₹5L - ₹10L", "Above ₹10L"];
  const locations = ["All", "Bangalore", "Hyderabad", "Other"];
  
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400); // Adjust stick point as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "sticky top-15 z-40 w-full transition-all duration-300 py-6",
        isSticky ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Categories (Main) */}
        <div className="flex flex-nowrap gap-3 items-center w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border-2",
                activeCategory === category 
                  ? "bg-primary text-white border-primary shadow-lg scale-105" 
                  : "bg-white text-primary/70 border-slate-200 hover:border-primary/30 hover:bg-slate-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Secondary Filters (Budget & Location) */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto scrollbar-hide">
          {onBudgetChange && (
            <select 
              value={activeBudget}
              onChange={(e) => onBudgetChange(e.target.value)}
              className="px-4 py-2.5 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:border-primary/30 transition-colors cursor-pointer outline-none focus:border-primary"
            >
              <option value="All" disabled className="hidden">Budget</option>
              {budgets.map(b => <option key={b} value={b}>{b === "All" ? "Any Budget" : b}</option>)}
            </select>
          )}

          {onLocationChange && (
            <select 
              value={activeLocation}
              onChange={(e) => onLocationChange(e.target.value)}
              className="px-4 py-2.5 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:border-primary/30 transition-colors cursor-pointer outline-none focus:border-primary"
            >
              <option value="All" disabled className="hidden">Location</option>
              {locations.map(l => <option key={l} value={l}>{l === "All" ? "Any Location" : l}</option>)}
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
