"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

import { useModal } from "@/lib/ModalContext";
import { AmbadasLogo } from "@/components/ui/AmbadasLogo";

export function Header() {
  const pathname = usePathname();
  const { openConsultationModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";
  const darkHeroRoutes = ["/contact", "/pricing", "/portfolio", "/factory", "/interiors", "/wardrobes", "/kitchens"];
  const isDarkHeroPage = darkHeroRoutes.includes(pathname);
  
  const isLightPage = pathname === "/" || pathname === "/our-process" || pathname === "/about";
  
  // On light hero pages (Home, Process, About), use primary color when not scrolled. 
  // On dark hero pages (the list provided), use white when not scrolled.
  const transparentTextColor = isLightPage ? "text-primary" : "text-white";
  const transparentNavLinkColor = isLightPage ? "text-slate-600" : "text-white/80";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Kitchens", href: "/kitchens" },
    { name: "Wardrobes", href: "/wardrobes" },
    { name: "Interiors", href: "/interiors" },
    { name: "Our Process", href: "/our-process" },
    { name: "Factory", href: "/factory" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <AmbadasLogo 
            variant={!isScrolled && isDarkHeroPage ? "white" : "original"} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-slate-600" : (isDarkHeroPage ? "text-white" : transparentNavLinkColor),
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant="accent" 
            size="sm" 
            className="hidden lg:flex"
            onClick={openConsultationModal}
          >
            Get Free Quote
          </Button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="tel:+919448396322"
            className={cn(
              "p-2 rounded-full",
              isScrolled
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary",
            )}
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 transition-colors",
              isScrolled
                ? "text-primary"
                : isDarkHeroPage
                  ? "text-white"
                  : isLightPage
                    ? "text-primary"
                    : "text-white",
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden flex flex-col p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 text-center pt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="accent" 
              size="lg" 
              className="mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openConsultationModal();
              }}
            >
              Get Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
