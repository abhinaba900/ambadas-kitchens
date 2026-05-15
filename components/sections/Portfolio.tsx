"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Portfolio() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    // Map categories to match PortfolioFilter.tsx
    const categoryMap: { [key: string]: string } = {
      "Modular Kitchen": "Kitchens",
      "Full Home Interiors": "Full Home Interiors",
      "Wardrobes": "Wardrobes"
    };

    const targetCategory = categoryMap[category] || "All";
    router.push(`/portfolio?category=${encodeURIComponent(targetCategory)}`);
  };
  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Kitchen",
      location: "Indiranagar, Bangalore",
      image: "/images/portfolio/kitchen-minimalist.png",
      category: "Modular Kitchen",
    },
    {
      id: 2,
      title: "Luxury Wardrobe Series",
      location: "Whitefield, Bangalore",
      image: "/images/portfolio/wardrobe-luxury.png", 
      category: "Wardrobes",
    },
    {
      id: 3,
      title: "Compact Urban Kitchen",
      location: "Koramangala, Bangalore",
      image: "/images/portfolio/kitchen-urban.png",
      category: "Modular Kitchen",
    },
    {
      id: 4,
      title: "Industrial Style Kitchen",
      location: "HSR Layout, Bangalore",
      image: "/images/portfolio/kitchen-industrial.png",
      category: "Modular Kitchen",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-slate-50 mt-16 md:mt-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
              Our Featured <span className="text-primary/70">Projects Portfolio</span>
            </h2>
            <p className="text-slate-600">
              Explore our latest modular kitchen and interior designs delivered across Bangalore. Each project is a testament to our factory precision and design excellence.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="hidden md:flex group">
              View Full Portfolio
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCategoryClick(project.category)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {project.category}
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-2xl font-display font-bold mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent" /> {project.location}
                  </p>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio">
            <Button variant="outline" className="w-full">View Full Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
