"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioProject, portfolioProjects } from "@/lib/portfolio-data";
import { MapPin, ArrowUpRight, Plus, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "@/components/ui/ProjectModal";

interface PortfolioGridProps {
  activeCategory: string;
}

export function PortfolioGrid({ activeCategory }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-[450px] md:h-[500px] flex flex-col justify-end bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                onClick={() => openModal(project)}
              >
                {/* Image Background */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
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

                {/* Floating "Seen something you like?" badge */}
                <div className="absolute top-8 left-8 right-8 z-10 hidden group-hover:block animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white text-xs font-medium text-center">
                    Seen something you like? We can customize it for your space.
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-slate-500 font-display">No projects found in this category yet.</p>
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
