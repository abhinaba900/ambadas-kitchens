"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, LayoutGrid } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const allKitchenContent = [
  {
    image: "/portfolio/kitchens/kitchen-01.webp",
    title: "Modern Straight Modular Kitchen",
    style: "Modern",
    description: "A sleek straight-line modular kitchen designed for efficient space utilization, featuring matte finishes and a clean, futuristic look."
  },
  {
    image: "/portfolio/kitchens/kitchen-02.webp",
    title: "Contemporary L-Shaped Kitchen",
    style: "Contemporary",
    description: "A balanced L-shaped kitchen combining warm textures with modern functionality, offering both comfort and efficiency."
  },
  {
    image: "/portfolio/kitchens/kitchen-03.webp",
    title: "Dual-Tone L-Shaped Kitchen",
    style: "Contemporary",
    description: "A vibrant dual-tone design that blends color and functionality, perfect for modern urban homes."
  },
  {
    image: "/portfolio/kitchens/kitchen-04.webp",
    title: "Premium Island Kitchen",
    style: "Modern",
    description: "A spacious island kitchen with a bold and luxurious finish, designed for modern living and open layouts."
  },
  {
    image: "/portfolio/kitchens/kitchen-05.webp",
    title: "Functional U-Shaped Kitchen",
    style: "Minimalist",
    description: "A clean and efficient U-shaped layout focused on usability, featuring handle-less cabinetry and optimized storage."
  },
  {
    image: "/portfolio/kitchens/kitchen-06.webp",
    title: "Open Kitchen with Island",
    style: "Modern",
    description: "A contemporary open kitchen with a central island, offering both style and high functionality."
  },
  {
    image: "/portfolio/kitchens/kitchen-07.webp",
    title: "Parallel Modular Kitchen",
    style: "Minimalist",
    description: "A streamlined parallel layout with a focus on clean lines, simplicity, and maximum efficiency."
  },
  {
    image: "/portfolio/kitchens/kitchen-08.webp",
    title: "Compact Urban Kitchen",
    style: "Minimalist",
    description: "A space-saving design with pure functionality and clutter-free aesthetics for modern apartments."
  },
  {
    image: "/portfolio/kitchens/kitchen-09.webp",
    title: "Modern Neutral-Tone Kitchen",
    style: "Modern",
    description: "A neutral-toned kitchen with sleek cabinetry and a refined contemporary finish."
  },
  {
    image: "/portfolio/kitchens/kitchen-10.webp",
    title: "Contemporary Open Kitchen",
    style: "Contemporary",
    description: "A warm and inviting open kitchen combining balanced materials with modern design elements."
  },
  {
    image: "/portfolio/kitchens/kitchen-11.webp",
    title: "Spacious Island Kitchen Design",
    style: "Modern",
    description: "A premium island kitchen designed for large spaces with a strong modern aesthetic."
  },
  {
    image: "/portfolio/kitchens/kitchen-12.webp",
    title: "Elegant White Modular Kitchen",
    style: "Classic",
    description: "A timeless white kitchen design with elegant finishes and refined detailing."
  },
  {
    image: "/portfolio/kitchens/kitchen-13.webp",
    title: "Modern L-Shaped Compact Kitchen",
    style: "Minimalist",
    description: "A compact layout with clean finishes and highly efficient storage solutions."
  },
  {
    image: "/portfolio/kitchens/kitchen-14.webp",
    title: "Minimalist White Kitchen",
    style: "Minimalist",
    description: "A pure minimalist kitchen featuring handle-less cabinets and a clutter-free aesthetic."
  },
  {
    image: "/portfolio/kitchens/kitchen-15.webp",
    title: "Contemporary Modular Kitchen Setup",
    style: "Contemporary",
    description: "A balanced kitchen design blending textures and functionality for everyday comfort."
  },
  {
    image: "/portfolio/kitchens/kitchen-16.webp",
    title: "Compact L-Shaped Kitchen Design",
    style: "Minimalist",
    description: "A smart layout focused on efficiency, simplicity, and modern usability."
  },
  {
    image: "/portfolio/kitchens/kitchen-17.webp",
    title: "Modern Straight Kitchen with Storage",
    style: "Modern",
    description: "A sleek kitchen with optimized storage and a clean modern appearance."
  },
  {
    image: "/portfolio/kitchens/kitchen-18.webp",
    title: "Premium Finish Modular Kitchen",
    style: "Modern",
    description: "A high-end kitchen with premium finishes designed for durability and elegance."
  },
  {
    image: "/portfolio/kitchens/kitchen-19.webp",
    title: "Contemporary Kitchen with Chimney Setup",
    style: "Contemporary",
    description: "A practical kitchen with modern chimney integration and a balanced design."
  },
  {
    image: "/portfolio/kitchens/kitchen-20.webp",
    title: "Marble Finish L-Shaped Kitchen",
    style: "Contemporary",
    description: "A modern L-shaped kitchen featuring marble textures and durable finishes for long-term usability."
  },
  {
    image: "/portfolio/kitchens/kitchen-21.webp",
    title: "Glossy White Premium Kitchen",
    style: "Modern",
    description: "A glossy, sleek kitchen with under-cabinet lighting and a futuristic finish."
  },
  {
    image: "/portfolio/kitchens/kitchen-22.webp",
    title: "Parallel Kitchen with Tall Units",
    style: "Modern",
    description: "A highly functional kitchen layout with integrated tall storage units and seamless design."
  },
  {
    image: "/portfolio/kitchens/kitchen-23.webp",
    title: "Peninsula Kitchen Layout",
    style: "Modern",
    description: "A modern peninsula kitchen offering extended workspace and open design flow."
  },
  {
    image: "/portfolio/kitchens/kitchen-24.webp",
    title: "Glass Cabinet Kitchen",
    style: "Contemporary",
    description: "A kitchen with illuminated glass cabinets and textured backsplash for a premium look."
  },
  {
    image: "/portfolio/kitchens/kitchen-25.webp",
    title: "Frosted Glass Kitchen",
    style: "Minimalist",
    description: "A clean design featuring frosted glass panels and subtle lighting."
  },
  {
    image: "/portfolio/kitchens/kitchen-26.webp",
    title: "Compact Bold Finish Kitchen",
    style: "Contemporary",
    description: "A compact kitchen with bold finishes and practical layout for everyday use."
  },
  {
    image: "/portfolio/kitchens/kitchen-27.webp",
    title: "Red and White Straight Kitchen",
    style: "Modern",
    description: "A vibrant modern kitchen combining bold colors with efficient straight layout."
  },
  {
    image: "/portfolio/kitchens/kitchen-28.webp",
    title: "Utility Counter Kitchen",
    style: "Contemporary",
    description: "A practical kitchen counter with patterned backsplash and functional layout."
  },
  {
    image: "/portfolio/kitchens/kitchen-29.webp",
    title: "Black and White Compact Kitchen",
    style: "Minimalist",
    description: "A compact kitchen with strong contrast and clean minimalist design."
  }
];

const categories = ["Modern", "Contemporary", "Minimalist", "Classic"];

export function DesignStyles() {
  const [activeCategory, setActiveCategory] = useState("Modern");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const filteredData = allKitchenContent.filter((item) => item.style === activeCategory);

  // Prevent background scroll when modals are open
  useEffect(() => {
    if (selectedImageIndex !== null || isExploreOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImageIndex, isExploreOpen]);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % filteredData.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + filteredData.length) % filteredData.length);
    }
  };

  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header & Filter System */}
        <div className="mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-primary mb-4"
            >
              Premium Design Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg"
            >
              From ultra-modern modular setups to timeless classic spaces, explore our signature collections built for modern living.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => {
              const count = allKitchenContent.filter(i => i.style === cat).length;
              if (count === 0 && cat !== "Classic") return null; // Hide empty unless specified

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat 
                      ? "text-white" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat} <span className="opacity-70 text-xs ml-1">({count})</span></span>
                </button>
              );
            })}
            
            <button 
              onClick={() => setIsExploreOpen(true)}
              className="ml-2 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-white border border-slate-200 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <LayoutGrid size={16} />
              Explore All
            </button>
          </motion.div>
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.slice(0, 8).map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={item.image}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-black"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Persistent Gradient & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                      {item.style} Series
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">{item.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                      <ZoomIn size={28} />
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredData.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No designs found in this category. Check out our other styles!
          </div>
        )}
      </div>

      {/* Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <ImageModal 
            data={filteredData}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>

      {/* Explore All Fullscreen Experience */}
      <AnimatePresence>
        {isExploreOpen && (
          <ExploreModal onClose={() => setIsExploreOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS (Modularized)
// ==========================================

function ImageModal({ 
  data, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  data: any[], 
  currentIndex: number, 
  onClose: () => void, 
  onNext: () => void, 
  onPrev: () => void 
}) {
  const item = data[currentIndex];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white p-2 z-[110] transition-colors"
      >
        <X size={36} />
      </button>

      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-7xl max-h-[90vh] flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* High-Res Image Section */}
        <div className="relative w-full lg:w-2/3 h-[45vh] lg:h-[85vh] bg-slate-50 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {data.length > 1 && (
            <>
              <button 
                onClick={onPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/20 shadow-xl"
              >
                <ChevronLeft size={28} />
              </button>
              
              <button 
                onClick={onNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/20 shadow-xl"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>

        {/* Detail Content Section */}
        <div className="w-full lg:w-1/3 p-8 lg:p-14 flex flex-col justify-center bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                {item.style} Collection
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {item.description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
              Design {currentIndex + 1} of {data.length}
            </p>
            <a 
              href={`https://wa.me/919448396322?text=${encodeURIComponent(`Hello Ambadas Kitchens! I am interested in getting a quote for the *${item.title}* from your ${item.style} Collection.`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
            >
              <FaWhatsapp size={20} />
              Get Quote
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ExploreModal({ onClose }: { onClose: () => void }) {
  const [selectedInfo, setSelectedInfo] = useState<{ data: any[], index: number } | null>(null);

  const groupedData = {
    Modern: allKitchenContent.filter(i => i.style === "Modern"),
    Contemporary: allKitchenContent.filter(i => i.style === "Contemporary"),
    Minimalist: allKitchenContent.filter(i => i.style === "Minimalist"),
    Classic: allKitchenContent.filter(i => i.style === "Classic"),
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-[#fafafa] overflow-y-auto"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-5 flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-primary">Explore All Collections</h2>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors border border-slate-100 shadow-sm"
        >
          <X size={24} />
        </button>
      </div>

      {/* Grouped Grids */}
      <div className="p-6 md:p-12 space-y-24 max-w-7xl mx-auto pb-32">
        {Object.entries(groupedData).map(([category, items]) => {
          if (items.length === 0) return null;
          
          return (
            <div key={category}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-4xl font-display font-bold text-primary">{category} Series</h3>
                  <p className="text-slate-500 mt-2 text-lg">Browse our curated {category.toLowerCase()} designs</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-1.5 bg-primary/5 text-primary font-bold rounded-full text-sm">
                  {items.length} Designs
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                  <div key={item.image} className="group cursor-pointer" onClick={() => setSelectedInfo({ data: items, index: idx })}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-white/90 backdrop-blur-sm text-primary font-bold px-6 py-2 rounded-full">
                          View
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-primary text-lg line-clamp-1 group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm line-clamp-1 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedInfo !== null && (
          <ImageModal 
            data={selectedInfo.data}
            currentIndex={selectedInfo.index}
            onClose={() => setSelectedInfo(null)}
            onNext={() => setSelectedInfo(prev => ({ ...prev!, index: (prev!.index + 1) % prev!.data.length }))}
            onPrev={() => setSelectedInfo(prev => ({ ...prev!, index: (prev!.index - 1 + prev!.data.length) % prev!.data.length }))}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
