"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PortfolioFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PortfolioFilter({ activeCategory, onCategoryChange }: PortfolioFilterProps) {
  const categories = ["All", "Kitchens", "Wardrobes", "Full Home Interiors"];
  
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
      <div className="container mx-auto px-6 md:px-12 flex flex-nowrap overflow-x-auto scrollbar-hide gap-3 md:justify-center items-center">
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
    </div>
  );
}
