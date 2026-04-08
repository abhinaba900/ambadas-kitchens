import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919448396322"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-24 md:bottom-8 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="absolute -top-2 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
}
