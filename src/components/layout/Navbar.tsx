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
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0A0D12] border-b border-white/10 shadow-lg backdrop-blur-md transition-all">
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
              <span className="font-display text-lg md:text-xl font-extrabold tracking-wider text-white uppercase transition-colors group-hover:text-[#EAB308]">
                SURYA PROMOTERS
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#EAB308]">
                LAND & PROPERTY DEVELOPERS · ESTD. 2010
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Uppercase Bold Modern Sans Font - matches reference) */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link
              href="/projects"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-[#EAB308] transition-colors"
            >
              {language === "ta" ? "திட்டங்கள்" : "PROJECTS"}
            </Link>
            <a
              href="https://mapbhoomi.com/l/surya-promoters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-widest uppercase text-[#EAB308] hover:text-white transition-colors"
              title="Explore 3D Layout Maps on MapBhoomi"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308] animate-pulse" />
              <span>{language === "ta" ? "3D வரைபடங்கள்" : "3D MAPS"}</span>
            </a>
            <Link
              href="/services"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-[#EAB308] transition-colors"
            >
              {language === "ta" ? "சேவைகள்" : "SERVICES"}
            </Link>
            <Link
              href="/about"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-[#EAB308] transition-colors"
            >
              {language === "ta" ? "எங்களைப் பற்றி" : "ABOUT US"}
            </Link>
            <Link
              href="/gallery"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-[#EAB308] transition-colors"
            >
              {language === "ta" ? "புகைப்படங்கள்" : "GALLERY"}
            </Link>
            <Link
              href="/contact"
              className="font-display text-xs font-bold tracking-widest uppercase text-gray-200 hover:text-[#EAB308] transition-colors"
            >
              {language === "ta" ? "தொடர்புக்கு" : "CONTACT"}
            </Link>
          </nav>

          {/* Right: Language switch + Solid Gold "DISCUSS YOUR PROJECT" CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-bold text-white hover:border-[#EAB308] hover:text-[#EAB308] transition"
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
              <span>{language === "ta" ? "கலந்தாலோசிக்க" : "DISCUSS YOUR PROJECT"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-bold text-white"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:text-[#EAB308]"
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
