import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Globe, Share2, Send } from "lucide-react";
import { AmbadasLogo } from "@/components/ui/AmbadasLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <AmbadasLogo variant="white" />
          </Link>
          <p className="text-slate-300 leading-relaxed text-sm">
            Premium modular kitchens and home interiors designed with factory precision and delivered with perfection in Bangalore.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-colors">
              <Globe size={18} />
            </Link>
            <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-colors">
              <Share2 size={18} />
            </Link>
            <Link href="#" className="p-2 bg-white/5 hover:bg-accent hover:text-primary rounded-full transition-colors">
              <Send size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
          <ul className="flex flex-col gap-4 text-slate-300 text-sm">
            <li><Link href="/kitchens" className="hover:text-accent transition-colors">Modular Kitchens</Link></li>
            <li><Link href="/wardrobes" className="hover:text-accent transition-colors">Premium Wardrobes</Link></li>
            <li><Link href="/interiors" className="hover:text-accent transition-colors">Full Home Interiors</Link></li>
            <li><Link href="/pricing" className="hover:text-accent transition-colors">Cost Calculator</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-slate-300 text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
            <li><Link href="/our-process" className="hover:text-accent transition-colors">Our Process</Link></li>
            <li><Link href="/factory" className="hover:text-accent transition-colors">Our Factory</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-display font-bold text-base mb-3 text-white">Experience Centre & Head Office</h4>
            <div className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <MapPin size={18} className="text-accent shrink-0 mt-1" />
              <p>Ambadas Interiors<br/># 3, 3rd Floor, Near Sony World Signal,<br/>Koramangala, Bengaluru 560 034</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-base mb-3 text-white">Manufacturing Unit 1 & Exp. Centre</h4>
            <div className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <MapPin size={18} className="text-accent shrink-0 mt-1" />
              <p>Ambadas Kitchens<br/>Sy No 156, Godown No 30<br/>Dommasandra Village, Main Road,<br/>Bengaluru Urban- 562 125</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10 text-sm text-slate-300">
            <div className="flex gap-3 items-center">
              <Phone size={16} className="text-accent shrink-0" />
              <span>94483 96322</span>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={16} className="text-accent shrink-0" />
              <span>hello@ambadas.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
        <p>© {currentYear} Ambadas Kitchens. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
