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

        {/* Contact & Map */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>JP Nagar, Bangalore, Karnataka</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-accent shrink-0" />
                <span>94483 96322</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-accent shrink-0" />
                <span>hello@ambadas.in</span>
              </li>
            </ul>
          </div>
          <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3889.26189!2d77.58!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15!2sJP%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
