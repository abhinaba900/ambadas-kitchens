"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PortfolioProject } from "@/lib/portfolio-data";
import { portfolioProjects } from "@/lib/portfolio-merged";
import { MapPin, ArrowUpRight, Plus, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "@/components/ui/ProjectModal";

interface PortfolioGridProps {
  activeCategory: string;
  activeBudget?: string;
  activeLocation?: string;
}

export function PortfolioGrid({ activeCategory, activeBudget = "All", activeLocation = "All" }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [activeCategory, activeBudget, activeLocation]);

  let filteredProjects = portfolioProjects.filter(p => {
    // 1. Category Filter
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    
    // 2. Budget Filter (simple loose matching)
    if (activeBudget !== "All") {
      if (!p.budgetRange) return false;
      // Very basic budget matching based on text
      if (activeBudget === "Under ₹5L" && !p.budgetRange.includes("₹1L") && !p.budgetRange.includes("₹2L") && !p.budgetRange.includes("₹3L") && !p.budgetRange.includes("₹4L") && !p.budgetRange.includes("₹4.5L")) return false;
      if (activeBudget === "₹5L - ₹10L" && !p.budgetRange.includes("₹5L") && !p.budgetRange.includes("₹6L") && !p.budgetRange.includes("₹8L")) return false;
      if (activeBudget === "Above ₹10L" && !p.budgetRange.includes("₹15L") && !p.budgetRange.includes("₹25L")) return false;
    }

    // 3. Location Filter
    if (activeLocation !== "All") {
      if (!p.location) return false;
      if (!p.location.toLowerCase().includes(activeLocation.toLowerCase())) return false;
    }

    return true;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-[450px] md:h-[500px] flex flex-col justify-end bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Image Background */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  loading={index < 3 ? "eager" : "lazy"} // Priority only for top images
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-700" />

                {/* Content */}
                <div className="relative p-8 md:p-10 text-white transform transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-accent/90 text-primary rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                    >
                      <Plus size={24} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-6">
                    <MapPin size={16} className="text-accent" />
                    {project.location}
                  </div>

                  <button className="flex items-center gap-2 text-accent font-bold group/btn text-sm uppercase tracking-widest">
                    <span>View Project</span>
                    <ArrowUpRight size={18} className="transform transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-slate-500 font-display">No projects found for the selected filters.</p>
          </div>
        )}

        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white border-2 border-primary/10 hover:border-primary/30 text-primary font-bold rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
