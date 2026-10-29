"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { Shield, Award, CheckCircle2, Quote } from "lucide-react";

export default function ModernFounderSection() {
  const { language } = useLanguage();

  return (
    <section id="founder" className="w-full bg-[#FFFFFF] py-8 md:py-12 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 xl:grid-cols-12 xl:gap-14">
          
          {/* Left Column: Authentic Founder Portrait (Compact & balanced height) */}
          <div className="xl:col-span-5 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-lg group">
              <Image
                src="/images/founder/founder.png"
                alt="Mr. Manickam Natarajan - Founder, Surya Promoters"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Overlaid Title Badge (Clean & snug inside card) */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3.5 backdrop-blur-md shadow-md border border-white/60 text-[#111827]">
                <h3 className="font-display text-base sm:text-lg font-bold leading-tight">Mr. Manickam Natarajan</h3>
                <p className="font-mono text-[10px] sm:text-[11px] text-[#B45309] font-bold uppercase tracking-wider mt-0.5">
                  {language === "ta" ? "இந்திய விமானப்படை வீரர்" : "Indian Air Force Veteran"}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5">
                  {language === "ta" ? "நிறுவனர் & நிர்வாக இயக்குநர் · 2010 முதல்" : "Founder & Managing Director · Estd. 2010"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Vision & Defense Ethos (Well-proportioned sizing) */}
          <div className="xl:col-span-7 space-y-4 lg:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1">
              <Shield className="h-3.5 w-3.5 text-blue-600" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700">
                {language === "ta" ? "பாதுகாப்புப் படை ஒழுக்கம் & தலைமை" : "DEFENSE HERITAGE & LEADERSHIP"}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-[#111827]">
              {language === "ta" ? "இராணுவ ஒழுக்கம் & அசைக்க முடியாத நம்பிக்கை" : "Built On Military Precision & Unwavering Trust"}
            </h2>

            {/* Quote Card */}
            <div className="relative rounded-xl border-l-4 border-[#EAB308] bg-[#F9FAFB] p-4 sm:p-5 shadow-2xs border-y border-r border-gray-100">
              <Quote className="h-7 w-7 text-[#EAB308]/25 absolute top-3.5 right-3.5" />
              <p className="font-display text-xs sm:text-sm md:text-[15px] font-medium italic leading-relaxed text-[#1F2937] pr-6">
                “In the Armed Forces, integrity and precision are absolute. We bring that identical
                discipline to every piece of land we touch—ensuring clear documentation, transparent
                handovers, and lifelong security for every family and investor.”
              </p>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#4B5563]">
              Having served with distinction in the Indian Air Force, Mr. Manickam Natarajan founded
              Surya Promoters in 2010 with a singular mission: delivering uncompromising legal title
              clarity, transparent pricing, and structured property development across Madurai and
              surrounding regions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
              <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#111827]">
                  <Award className="h-4 w-4 text-[#B45309]" />
                  <span>IAF Discipline in Land</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#6B7280] leading-normal">
                  Punctual execution, meticulous boundary markers, and zero tolerance for title ambiguity.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#111827]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>16+ Years Ground Expertise</span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#6B7280] leading-normal">
                  Deep mastery of Madurai Ring Road corridors, agricultural pockets, and revenue documentation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
