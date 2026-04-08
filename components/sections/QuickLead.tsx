"use client";

import { Calculator, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function QuickLead() {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-20 relative container mx-auto px-6 md:px-12 py-0">
      <div className="bg-accent rounded-2xl border border-accent-dark shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 px-6 py-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent">
            <Calculator size={20} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-primary text-base md:text-lg">
              Get a Free Estimate in 30 Seconds
            </h3>
            <p className="text-primary/70 text-xs md:text-sm">
              Calculate the approximate cost for your modular kitchen instantly.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-auto px-2">
          <Button 
            onClick={scrollToCalculator}
            className="w-full md:w-auto bg-primary text-white hover:bg-primary-light h-12 md:h-10 px-8 group font-bold"
          >
            Calculate Price
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
