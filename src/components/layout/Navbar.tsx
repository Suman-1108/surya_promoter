"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Search,
  X,
  MessageCircle,
  Menu,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenMobileMenu?: () => void;
}

export default function Navbar({ onOpenMobileMenu }: NavbarProps) {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("store-search", { detail: val }));
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim()) {
        router.push(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  useEffect(() => {
    const handleExternalClear = () => setSearchQuery("");
    if (typeof window !== "undefined") {
      window.addEventListener("store-search-clear", handleExternalClear);
      return () => window.removeEventListener("store-search-clear", handleExternalClear);
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-2xs select-none">
      <div className="mx-auto flex h-16 w-full max-w-[1760px] items-center justify-between px-3 sm:px-6 gap-2 sm:gap-4">
        
        {/* Left: Mobile Hamburger + Surya Promoters Brand Identity */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {onOpenMobileMenu && (
            <button
              onClick={onOpenMobileMenu}
              className="md:hidden p-2 -ml-1 text-[#0F172A] hover:bg-gray-100 rounded-xl transition cursor-pointer"
              aria-label="Open sidebar menu"
              title="Open Navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-xs p-0.5 transition-transform group-hover:scale-105">
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
              <span className="font-display text-sm md:text-base font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                SURYA PROMOTERS
              </span>
              <span className="hidden sm:inline-block text-[9px] font-mono text-[#64748B] tracking-wider uppercase font-semibold">
                {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு · 2010" : "LAND & PROPERTY DEVELOPERS · ESTD. 2010"}
              </span>
            </div>
          </Link>
        </div>

        {/* Centre: Large Rounded Search Input */}
        <div className="flex-1 max-w-xs sm:max-w-md lg:max-w-xl mx-auto px-1 sm:px-2">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder={
                language === "ta"
                  ? "திட்டங்கள், விவசாய நிலம், வணிக மனைகளைத் தேடுங்கள்..."
                  : "Search projects, farm land, commercial plots, locations..."
              }
              className="w-full h-10 pl-10 pr-9 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0]/70 focus:bg-[#FFFFFF] border border-[#CBD5E1] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/30 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B] transition-all outline-hidden shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-gray-200 transition cursor-pointer"
                title="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Section: Tamil language selector + 16+ Yrs IAF Vet + Gold DISCUSS PROJECT button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Language Toggle Pill */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-white hover:bg-gray-50 text-[11px] sm:text-xs font-mono font-bold text-[#0F172A] shadow-2xs transition cursor-pointer"
            title="Toggle Language"
          >
            <span>{language === "ta" ? "English" : "தமிழ்"}</span>
          </button>

          {/* 16+ Yrs IAF Vet Trust Seal */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>16+ Yrs IAF Vet</span>
          </div>

          {/* Gold DISCUSS PROJECT Button with Chat Icon */}
          <a
            href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] text-xs font-extrabold uppercase tracking-wider shadow-xs transition hover:scale-105"
            title="Discuss Project with Promoter"
          >
            <MessageCircle className="h-4 w-4 fill-[#0A0D12] text-[#0A0D12]" />
            <span className="hidden sm:inline">
              {language === "ta" ? "கலந்தாலோசிக்க" : "DISCUSS PROJECT"}
            </span>
          </a>

        </div>

      </div>
    </header>
  );
}
