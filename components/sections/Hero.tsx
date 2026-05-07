"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Award, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/lib/ModalContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

const showcaseImages = [
  "/portfolio/kitchens/kitchen-01.webp",
  "/portfolio/kitchens/kitchen-05.webp",
  "/portfolio/kitchens/kitchen-08.webp",
  "/portfolio/kitchens/kitchen-12.webp",
  "/portfolio/kitchens/kitchen-16.webp",
];

export function Hero() {
  const { openConsultationModal } = useModal();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center pt-24 pb-24 md:pb-32 overflow-hidden bg-slate-50/50"
    >
      {/* Blurred Background Interior */}
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <Image
          src="/portfolio/kitchens/kitchen-03.webp"
          alt="Background"
          fill
          className="object-cover opacity-10 blur-xl scale-110"
          priority
        />
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest border border-primary/5"
          >
            <MapPin size={16} className="text-accent" /> Based in Bangalore
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-primary"
            >
              Custom Modular <br />
              <span className="text-accent drop-shadow-sm">Kitchens</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <span className="text-2xl md:text-4xl font-display font-bold text-slate-400/80 italic">
                Designed for Your Space
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group inline-block"
          >
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-[22px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative flex items-center gap-4 md:gap-6 bg-white p-2 rounded-[20px] shadow-2xl border border-slate-50">
              {/* Highlight Box */}
              <div className="bg-accent text-primary px-4 py-3 rounded-[16px] flex flex-col items-center justify-center shadow-inner min-w-[80px]">
                <span className="text-[9px] font-black uppercase tracking-widest leading-none mb-1 opacity-70">Since</span>
                <span className="text-2xl font-black leading-none tracking-tighter">2003</span>
              </div>
              
              {/* Text Content */}
              <div className="pr-6 md:pr-10 text-left">
                <h3 className="text-lg md:text-2xl font-black text-primary uppercase tracking-tighter leading-tight">
                  Delivering <span className="text-accent">Manufactured</span> Kitchens
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">
                  To Clients Across India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
          >
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto text-primary group h-16 px-10 text-lg font-bold shadow-xl shadow-accent/20"
              onClick={() => openConsultationModal()}
            >
              Get Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-16 px-10 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-10 flex flex-wrap justify-center lg:justify-start gap-10"
          >
            {[
              {
                icon: Award,
                label: "23+ Years",
                sub: "Experience",
                color: "accent",
              },
              {
                icon: CheckCircle2,
                label: "1000+ Kitchens",
                sub: "Delivered",
                color: "primary",
              },
              {
                icon: Factory,
                label: "Factory Built",
                sub: "In-house Production",
                color: "accent",
              },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12",
                    badge.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  <badge.icon size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-black text-primary leading-none mb-1">
                    {badge.label}
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {badge.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual - Image Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={showcaseImages[currentImage]}
                alt="Ambadas Premium Modular Kitchen"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>

          {/* Award Floating Element */}
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-between border border-white/50 transform group-hover:translate-y-[-10px] transition-transform duration-500">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Award size={28} />
              </div>
              <div>
                <p className="font-black text-primary text-base uppercase tracking-tighter">
                  Best Modular Design
                </p>
                <p className="text-xs font-bold text-slate-500">
                  Bangalore Architecture Awards 2024
                </p>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${n}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-accent flex items-center justify-center text-[10px] font-bold text-primary">
                  +50
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Factory(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  )
}
