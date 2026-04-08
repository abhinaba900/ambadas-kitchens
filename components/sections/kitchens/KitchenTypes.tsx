"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const kitchenTypes = [
  {
    title: "L-Shaped Kitchen",
    description: "Versatile and popular, perfect for corner spaces with efficient workflow.",
    image: "/kitchens/types/l-shaped.png",
  },
  {
    title: "U-Shaped Kitchen",
    description: "Maximum storage and counter space with a surround workflow layout.",
    image: "/kitchens/types/u-shaped.png",
  },
  {
    title: "Parallel Kitchen",
    description: "Ideal for smaller homes, utilizing two parallel walls for efficiency.",
    image: "/kitchens/types/parallel.png",
  },
  {
    title: "Straight Kitchen",
    description: "Compact and sleek, everything on one wall for a minimalist look.",
    image: "/kitchens/types/straight.png",
  },
  {
    title: "Island Kitchen",
    description: "The ultimate social kitchen with a detached central workspace.",
    image: "/kitchens/types/island.png",
  },
];

export function KitchenTypes() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Types of Kitchens We Offer
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the layout that perfectly fits your space and culinary habits. Each design is custom-sized for your specific dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Explore Design →</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {type.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Custom Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center p-8 bg-primary rounded-2xl text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Custom Layout Needed?</h3>
            <p className="text-slate-300 mb-6">Our experts can design a unique layout tailored to your specific space constraints.</p>
            <button className="px-6 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors">
              Get Expert Advice
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
