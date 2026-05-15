"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const types = [
  {
    title: "Hinged Type Wardrobes",
    benefit: "Classic appeal & full access",
    description: "The most traditional and popular choice. Hinged wardrobes feature doors that swing open, providing complete access to the entire interior at once. Perfect for larger rooms where space for door swing is available.",
    features: ["100% Interior Visibility", "Door-mounted Accessories", "Classic Aesthetic", "Cost-effective Maintenance"],
    image: "/images/wardrobes/hinged.png",
    delay: 0.1,
  },
  {
    title: "Sliding Type Wardrobes",
    benefit: "Space-saving & modern look",
    description: "Ideal for compact rooms. These wardrobes feature doors that slide horizontally on tracks, requiring zero clearance space in front. Our premium soft-close mechanisms ensure silent and smooth operation.",
    features: ["Zero Door-swing Space", "Floor-to-Ceiling Mirror Options", "Modern Minimalist Design", "Premium Soft-close Tracks"],
    image: "/images/wardrobes/sliding.png",
    delay: 0.2,
  },
  {
    title: "Floor to Ceiling Type",
    benefit: "Maximum vertical storage",
    description: "Why waste the space above your wardrobe? Our floor-to-ceiling designs extend all the way to the loft, giving you maximum storage for seasonal items and large suitcases while creating a seamless, built-in look.",
    features: ["No Dust Accumulation on Top", "Seamless Architectural Integration", "Integrated Loft Storage", "Enhanced Room Height Feel"],
    image: "/images/wardrobes/floor-to-ceiling.png",
    delay: 0.3,
  },
  {
    title: "L-Type & Customized",
    benefit: "Perfect for corner spaces",
    description: "Turn awkward corners into valuable storage. L-shaped wardrobes maximize the utility of corner walls. We also offer fully customized layouts including walk-in closets and integrated dresser units.",
    features: ["Corner Optimization", "Walk-in Closet Potential", "Integrated Vanity Units", "Bespoke Internal Partitioning"],
    image: "/images/wardrobes/l-type.png",
    delay: 0.4,
  },
];

export function WardrobeTypes() {
  const [selectedType, setSelectedType] = useState<typeof types[0] | null>(null);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Explore Styles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Choose Your <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Ideal Wardrobe</span>
          </motion.h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            We offer various types of wardrobes like <strong className="text-primary">Hinged type, Sliding type, Floor to Ceiling type, L Type</strong> and in many customized manners. From compact spaces to expansive dressing rooms, we have the perfect fit for every layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: type.delay }}
              viewport={{ once: true }}
              onClick={() => setSelectedType(type)}
              className="group relative h-[450px] overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={type.image}
                alt={type.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-slate-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center font-medium">
                  {type.benefit}
                </p>
                <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedType(null)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedType(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-accent transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={selectedType.image}
                  alt={selectedType.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Wardrobe Style</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">{selectedType.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {selectedType.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-primary">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedType.features?.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-600">
                          <CheckCircle2 size={18} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <button 
                      onClick={() => setSelectedType(null)}
                      className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-xl hover:shadow-2xl"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
