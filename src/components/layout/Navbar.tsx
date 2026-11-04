"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Search,
  X,
  MessageCircle,
  Menu,
  ShieldCheck,
} from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Broadcast search query to window so ProjectIconGrid and other components receive it live
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("store-search", { detail: val }));
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && pathname !== "/") {
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Listen for external search clear
  useEffect(() => {
    const handleExternalClear = () => setSearchQuery("");
    if (typeof window !== "undefined") {
      window.addEventListener("store-search-clear", handleExternalClear);
      return () => window.removeEventListener("store-search-clear", handleExternalClear);
    }
  }, []);

  return (
    <>
      {/* WINDOWS 11 / MICROSOFT STORE AUTHENTIC TITLEBAR & HEADER */}
      <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-2xs select-none">
        <div className="mx-auto flex h-14 sm:h-15 w-full max-w-[1760px] items-center justify-between px-3 sm:px-6 gap-2 sm:gap-4">
          
          {/* Left: Window Icon + Store Title + Navigation Pills */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Store Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-xs p-0.5 transition-transform group-hover:scale-105">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  priority
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs sm:text-sm font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  SURYA PROMOTERS
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono text-[#64748B] tracking-wider uppercase font-semibold">
                  {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு · 2010" : "LAND & PROPERTY DEVELOPERS · ESTD. 2010"}
                </span>
              </div>
            </Link>

            {/* Desktop Quick Category Links (Pill Style) */}
            <nav className="hidden xl:flex items-center gap-1 ml-3 pl-3 border-l border-[#E2E8F0]">
              <Link
                href="/projects"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  pathname === "/projects"
                    ? "bg-[#EAB308]/15 text-[#854D0E] font-bold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100"
                }`}
              >
                {language === "ta" ? "திட்டங்கள்" : "Projects"}
              </Link>
              <Link
                href="/services"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  pathname === "/services"
                    ? "bg-[#EAB308]/15 text-[#854D0E] font-bold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100"
                }`}
              >
                {language === "ta" ? "சேவைகள்" : "Services"}
              </Link>
              <Link
                href="/about"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  pathname === "/about"
                    ? "bg-[#EAB308]/15 text-[#854D0E] font-bold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100"
                }`}
              >
                {language === "ta" ? "எங்களைப் பற்றி" : "About"}
              </Link>
              <Link
                href="/gallery"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  pathname === "/gallery"
                    ? "bg-[#EAB308]/15 text-[#854D0E] font-bold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100"
                }`}
              >
                {language === "ta" ? "புகைப்படங்கள்" : "Gallery"}
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                  pathname === "/contact"
                    ? "bg-[#EAB308]/15 text-[#854D0E] font-bold"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100"
                }`}
              >
                {language === "ta" ? "தொடர்பு" : "Contact"}
              </Link>
            </nav>
          </div>

          {/* Center: The Exact Microsoft Store Pill Search Bar */}
          <div className="flex-1 max-w-md lg:max-w-xl mx-auto px-2">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#64748B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder={
                  language === "ta"
                    ? "திட்டங்கள், நிலங்கள், பண்ணை மனைகளைத் தேடுங்கள்..."
                    : "Search projects, farm land, commercial plots, locations..."
                }
                className="w-full h-8.5 sm:h-9.5 pl-9 sm:pl-10 pr-8 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0]/70 focus:bg-[#FFFFFF] border border-[#CBD5E1] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/30 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B] transition-all outline-hidden shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-gray-200 transition"
                  title="Clear search"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Language switch + WhatsApp + Window Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Language Switch Pill */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#E2E8F0] bg-white hover:bg-gray-50 text-[11px] font-mono font-bold text-[#0F172A] shadow-2xs transition cursor-pointer"
              title="Toggle Language"
            >
              <span>{language === "ta" ? "English" : "தமிழ்"}</span>
            </button>

            {/* IAF Veteran Trust Tag */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold">
              <ShieldCheck className="h-3 w-3 text-emerald-600" />
              <span>16+ Yrs IAF Vet</span>
            </div>

            {/* Fast WhatsApp Connect */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] sm:text-xs font-bold shadow-2xs transition hover:scale-105"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white text-white" />
              <span className="hidden sm:inline">{language === "ta" ? "வாட்ஸ்அப்" : "WhatsApp"}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100 rounded-lg transition"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
