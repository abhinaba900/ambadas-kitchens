"use client";

import React from "react";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const options = [
  {
    title: "Call Us",
    description: "Speak directly with our design experts for immediate assistance.",
    icon: Phone,
    action: "tel:+919448396322",
    label: "94483 96322",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "WhatsApp",
    description: "Chat with us for quick queries and pricing estimates.",
    icon: FaWhatsapp,
    action: "https://wa.me/919448396322",
    label: "Start Chat",
    color: "bg-green-50 text-[#25D366]",
  },
  {
    title: "Visit Showroom",
    description: "Experience our designs firsthand at our Bangalore gallery.",
    icon: MapPin,
    action: "https://www.google.com/maps/search/?api=1&query=Ambadas+Kitchens+Sy+No+156+Godown+No+30+Dommasandra+Village+Main+Road+Bengaluru+Urban+562125",
    label: "Get Directions",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Email Us",
    description: "Send us your floor plans and requirements via email.",
    icon: Mail,
    action: "mailto:hello@ambadas.in",
    label: "Send Email",
    color: "bg-amber-50 text-amber-600",
  },
];

export function ContactOptions() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <motion.a
              key={index}
              href={option.action}
              target={option.action.startsWith("http") ? "_blank" : undefined}
              rel={option.action.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className={`w-14 h-14 ${option.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                  <option.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{option.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between group-hover:border-primary/10 transition-colors">
                <span className="font-bold text-primary">{option.label}</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-accent flex items-center justify-center transition-colors">
                  <ChevronRight size={16} className="text-primary" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
