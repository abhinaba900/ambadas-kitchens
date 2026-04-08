"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohan & Priya Mehta",
    project: "3 BHK, Prestige Falcon City",
    content: "We were worried about managing multiple vendors for our new home. Ambadas Kitchens took over the entire project, and the result is stunning. The design consistency from the foyer to the kitchen is exactly what we wanted.",
    rating: 5,
  },
  {
    name: "Amit Deshpande",
    project: "2 BHK, Brigade Utopia",
    content: "The factory-finished wardrobes and kitchen are top-notch. What impressed me most was the timeline management. They delivered a full home interior package in just 45 days. Highly recommend for end-to-end projects.",
    rating: 5,
  },
  {
    name: "Sandeep Rao",
    project: "3 BHK, Godrej Ananda",
    content: "Choosing their full home package was the best decision. Cost-wise it was much more efficient than doing it room by room. The team is professional, and the installation quality is superior to on-site carpenter work.",
    rating: 5,
  },
];

export function InteriorsTestimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Client Satisfaction</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            What Our <span className="text-primary/70">Full Home Clients Say</span>
          </h2>
          <p className="text-slate-600">
            Real stories from families who trusted us with their entire workspace and living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white shadow-xl relative border border-slate-100 group"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-accent/20 transition-colors">
                <Quote size={64} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F4C430" color="#F4C430" />
                ))}
              </div>
              
              <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-display font-bold text-primary text-lg">{testimonial.name}</h4>
                <p className="text-accent font-medium text-sm">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
