import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ambadas Kitchens | Premium Modular Kitchens & Interiors in Bangalore",
  description: "Factory-built precision. Delivered with perfection. Bangalore's leading modular kitchen and interior designers with 20+ years of experience.",
  keywords: ["modular kitchens Bangalore", "interior designers Bangalore", "custom wardrobes", "home interiors Bangalore", "Ambadas Kitchens"],
};

import { ModalProvider } from "@/lib/ModalContext";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        cz-shortcut-listen="true"
        className="min-h-full flex flex-col font-sans bg-white text-slate-900"
      >
        <ModalProvider>
          {children}
          <ConsultationModal />
          <WhatsAppButton />
          <StickyMobileBar />
        </ModalProvider>

        <Script id="zoho-salesiq-setup" strategy="afterInteractive">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script 
          id="zsiqscript" 
          src="https://salesiq.zohopublic.in/widget?wc=siq269acc48ca034d43c8c260739bd24bc4a6507b9969d39d8491649a24437730a0" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
