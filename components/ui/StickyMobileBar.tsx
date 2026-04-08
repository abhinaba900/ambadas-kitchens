import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="bg-white/90 backdrop-blur-lg flex items-center gap-2 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-white/20">
        <a
          href="tel:+919448396322"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-full font-bold text-sm tracking-wide transition-all active:scale-95"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="https://wa.me/919448396322"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-accent text-primary rounded-full font-bold text-sm tracking-wide shadow-inner transition-all active:scale-95"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
