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
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-gray-100 shadow-xs transition-all">
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-6 sm:px-10 lg:px-16 2xl:px-24 py-3.5 md:py-4">
          {/* Left: Brand Identity */}
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border-2 border-[#C6A15B] bg-white shadow-xs p-1 transition-all group-hover:border-[#C6A15B] group-hover:shadow-md group-hover:scale-105">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-extrabold tracking-wider text-[#111827] uppercase transition-colors group-hover:text-[#C6A15B]">
                SURYA PROMOTERS
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#C6A15B]">
                ESTD. 2010 · MADURAI
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Uppercase Bold Modern Sans Font - matches reference) */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="/projects"
              className="font-display text-xs font-bold tracking-widest uppercase text-[#111827] hover:text-[#C6A15B] transition-colors"
            >
              {language === "ta" ? "திட்டங்கள்" : "PROJECTS"}
            </Link>
            <Link
              href="/services"
              className="font-display text-xs font-bold tracking-widest uppercase text-[#111827] hover:text-[#C6A15B] transition-colors"
            >
              {language === "ta" ? "சேவைகள்" : "SERVICES"}
            </Link>
            <Link
              href="/about"
              className="font-display text-xs font-bold tracking-widest uppercase text-[#111827] hover:text-[#C6A15B] transition-colors"
            >
              {language === "ta" ? "எங்களைப் பற்றி" : "ABOUT US"}
            </Link>
            <Link
              href="/gallery"
              className="font-display text-xs font-bold tracking-widest uppercase text-[#111827] hover:text-[#C6A15B] transition-colors"
            >
              {language === "ta" ? "புகைப்படங்கள்" : "GALLERY"}
            </Link>
            <Link
              href="/contact"
              className="font-display text-xs font-bold tracking-widest uppercase text-[#111827] hover:text-[#C6A15B] transition-colors"
            >
              {language === "ta" ? "தொடர்புக்கு" : "CONTACT"}
            </Link>
          </nav>

          {/* Right: Language switch + Solid Gold "DISCUSS YOUR PROJECT" CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 text-xs font-bold text-[#111827] hover:border-[#C6A15B] transition"
              title="Switch language"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>

            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A15B] px-6 py-3 font-display text-xs font-extrabold uppercase tracking-widest text-[#0F1E2E] shadow-sm transition hover:bg-[#b89146] hover:shadow-md hover:scale-[1.02]"
            >
              <span>{language === "ta" ? "கலந்தாலோசிக்க" : "DISCUSS YOUR PROJECT"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-bold text-[#111827]"
            >
              {language === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#111827]"
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
