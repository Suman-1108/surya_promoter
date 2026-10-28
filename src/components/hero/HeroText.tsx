"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroTextProps {
  progress: number;
}

export default function HeroText({ progress }: HeroTextProps) {
  const { language } = useLanguage();

  return (
    <div className="relative z-20 flex h-full w-full flex-col justify-between px-6 py-20 md:px-16 lg:px-24 pointer-events-none select-none">
      {/* Top Subtle Label */}
      <div className="pt-4 flex justify-start pointer-events-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-1.5 backdrop-blur-md shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
          <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest text-[#292B27] uppercase">
            {language === "ta"
              ? "சூர்யா புரமோட்டர்ஸ் · 2010 முதல் · மதுரை"
              : "SURYA PROMOTERS · EST. 2010 · MADURAI"}
          </span>
        </div>
      </div>

      {/* Center Left: Elegant Minimal Headline & CTAs (Positioned so it doesn't block the central house) */}
      <div className="my-auto max-w-2xl py-6 pointer-events-auto">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
          {language === "ta"
            ? "உங்கள் எதிர்காலத்தை வடிவமைக்கும் இடங்கள்."
            : "Spaces That Shape Your Future."}
        </h1>

        <p className="mt-4 max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          {language === "ta"
            ? "குடியிருப்பு, வணிகம் மற்றும் விவசாய நில வாய்ப்புகளை சூர்யா புரமோட்டர்ஸ் உடன் கண்டறியுங்கள்."
            : "Discover residential, commercial and agricultural property opportunities with Surya Promoters."}
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C6A15B] px-7 py-3 text-xs font-medium tracking-wider uppercase text-white shadow-sm transition hover:bg-[#b5924d]"
          >
            <span>{language === "ta" ? "திட்டங்களை பார்க்க" : "Explore Our Projects"}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/60 bg-white/20 px-7 py-3 text-xs font-medium tracking-wider uppercase text-white backdrop-blur-md transition hover:bg-white hover:text-[#292B27]"
          >
            <span>{language === "ta" ? "தொடர்புக்கு" : "Contact Us"}</span>
          </Link>
        </div>
      </div>

      {/* Bottom Minimal Progress Indicator */}
      <div className="flex items-end justify-between border-t border-white/20 pt-4 pointer-events-auto">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] text-white/90 drop-shadow">
          <span className="font-mono uppercase font-medium">
            {language === "ta" ? "கட்டமைப்பை காண உருட்டவும்" : "SCROLL TO BUILD"}
          </span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#C6A15B]" />
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-white/90 drop-shadow">
          <span>{Math.round(progress * 100)}%</span>
          <div className="h-1 w-24 sm:w-32 rounded-full bg-white/30 overflow-hidden backdrop-blur-xs">
            <div
              className="h-full bg-[#C6A15B] transition-all duration-150"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
