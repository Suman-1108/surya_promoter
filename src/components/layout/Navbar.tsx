"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import MobileMenu from "./MobileMenu";
import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 border-b border-gray-100 shadow-xs backdrop-blur-md transition-all">
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-6 sm:px-10 lg:px-16 2xl:px-24 py-4">
          {/* Left: Brand Identity */}
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-xs p-1 transition-all group-hover:scale-105">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  priority
                  sizes="44px"
                  className="object-contain scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-extrabold tracking-wider text-[#111827] uppercase transition-colors group-hover:text-[#B45309]">
                SURYA PROMOTERS
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#B45309]">
                LAND & PROPERTY DEVELOPERS · ESTD. 2010
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link
              href="/"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "முகப்பு" : "HOME"}
            </Link>
            <Link
              href="/projects"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "திட்டங்கள்" : "BUY LAND"}
            </Link>
            <Link
              href="/services"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "சேவைகள்" : "SERVICES"}
            </Link>
            <Link
              href="/about"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "எங்களைப் பற்றி" : "ABOUT US"}
            </Link>
            <Link
              href="/gallery"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "புகைப்படங்கள்" : "GALLERY"}
            </Link>
            <Link
              href="/contact"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-[#B45309] transition-colors"
            >
              {language === "ta" ? "தொடர்புக்கு" : "CONTACT"}
            </Link>
          </nav>

          {/* Right: Language switch + Solid Gold "CONTACT US" CTA (Matches reference) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-bold text-gray-700 hover:border-[#EAB308] hover:text-[#B45309] transition cursor-pointer"
              title="Switch language"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>

            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-6 py-3 font-display text-xs font-extrabold uppercase tracking-widest text-[#0A0D12] shadow-sm transition hover:bg-[#ca9a07] hover:shadow-md hover:scale-[1.02]"
            >
              <span>{language === "ta" ? "தொடர்புக்கு" : "CONTACT US"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-bold text-gray-700"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-800 hover:text-[#B45309] cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
