"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function LocationMap() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Map Info */}
          <div className="lg:w-1/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-bold uppercase tracking-widest">
                Our Physical Location
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Visit Our Bangalore Showroom
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Experience our quality and design firsthand. Our experience center is located in the heart of Bangalore's design district.
              </p>
              
              <div className="space-y-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-primary text-sm">Experience Centre and Head Office</p>
                    <p className="text-slate-600 text-sm">
                      Ambadas Interiors<br />
                      # 3, 3rd Floor, Near Sony World Signal,<br />
                      Koramangala, Bengaluru 560 034
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-primary text-sm">Manufacturing Unit 1 & Exp. Centre</p>
                    <p className="text-slate-600 text-sm">
                      Ambadas Kitchens<br />
                      Sy No 156, Godown No 30<br />
                      Dommasandra Village, Main Road,<br />
                      Bengaluru Urban- 562 125
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                    <Navigation size={20} />
                  </div>
                  <div className="space-y-1 mt-1">
                    <p className="font-bold text-primary text-sm">Our Service Locations</p>
                    <p className="text-primary/80 font-semibold text-sm">
                      Bengaluru | Hubli | Delhi | Chennai | Mangalore
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="accent" size="lg" className="w-full text-primary flex items-center justify-center" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Navigation size={18} className="mr-2" />
                  Get Navigation
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group"
          >
            {/* The Google Map iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12441.979024097472!2d77.635815668612!3d12.978368735311234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a629910f1b%3A0x64fca1320d869274!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712496789123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
