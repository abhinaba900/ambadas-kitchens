import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919448396322"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[20px] left-[20px] z-[60] bg-[#25D366] text-white h-[60px] w-[60px] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-300 items-center justify-center flex"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute top-1 right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
