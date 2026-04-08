"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove as any);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMove as any);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove as any);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            The <span className="text-accent underline decoration-accent/30 underline-offset-8">Transformation</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Witness the magic of our factory-precise installations. From outdated spaces to designer kitchens, we deliver perfection.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none shadow-2xl border-8 border-white"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1742280879518-ada47b660ccd?q=80&w=2070&auto=format&fit=crop"
              alt="After Transformation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-10 right-10 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-primary font-bold shadow-lg">
              After Transformation
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
              alt="Before Transformation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-10 left-10 px-6 py-2 bg-primary/90 backdrop-blur-md rounded-full text-white font-bold shadow-lg">
              Before Transformation
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20 group"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-2xl flex items-center justify-center text-primary transform transition-transform group-hover:scale-110">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-primary/30 rounded-full" />
                <div className="w-1 h-6 bg-primary rounded-full" />
                <div className="w-1 h-4 bg-primary/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
