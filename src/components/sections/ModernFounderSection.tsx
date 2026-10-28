"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { Shield, Award, CheckCircle2, Quote } from "lucide-react";

export default function ModernFounderSection() {
  const { language } = useLanguage();

  return (
    <section id="founder" className="w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-12 xl:gap-20">
          {/* Left Column: Authentic Founder Portrait */}
          <div className="xl:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md lg:max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl">
              <Image
                src="/images/founder/founder.png"
                alt="Mr. Manickam Natarajan - Founder, Surya Promoters"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Overlaid Title Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur-md shadow-xl border border-white/60 text-[#111827]">
                <h3 className="font-display text-xl font-bold">Mr. Manickam Natarajan</h3>
                <p className="font-mono text-xs text-[#C99427] font-semibold uppercase tracking-wider mt-0.5">
                  {language === "ta" ? "இந்திய விமானப்படை வீரர்" : "Indian Air Force Veteran"}
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  {language === "ta" ? "நிறுவனர் & நிர்வாக இயக்குநர் · 2010 முதல்" : "Founder & Managing Director · Estd. 2010"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Vision & Defense Ethos */}
          <div className="xl:col-span-7 space-y-7 lg:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-1.5">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-blue-700">
                {language === "ta" ? "பாதுகாப்புப் படை ஒழுக்கம் & தலைமை" : "DEFENSE HERITAGE & LEADERSHIP"}
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827]">
              {language === "ta" ? "இராணுவ ஒழுக்கம் & அசைக்க முடியாத நம்பிக்கை" : "Built On Military Precision & Unwavering Trust"}
            </h2>

            {/* Quote Card */}
            <div className="relative rounded-2xl border-l-4 border-[#C99427] bg-[#F9FAFB] p-7 shadow-xs border-y border-r border-gray-100">
              <Quote className="h-10 w-10 text-[#C99427]/20 absolute top-5 right-5" />
              <p className="font-display text-lg sm:text-xl lg:text-2xl font-medium italic leading-relaxed text-[#1F2937]">
                “In the Armed Forces, integrity and precision are absolute. We bring that identical
                discipline to every piece of land we touch—ensuring clear documentation, transparent
                handovers, and lifelong security for every family and investor.”
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Having served with distinction in the Indian Air Force, Mr. Manickam Natarajan founded
              Surya Promoters in 2010 with a singular mission: delivering uncompromising legal title
              clarity, transparent pricing, and structured property development across Madurai and
              surrounding regions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2.5 font-bold text-base text-[#111827]">
                  <Award className="h-5 w-5 text-[#C99427]" />
                  <span>IAF Discipline in Land</span>
                </div>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Punctual execution, meticulous boundary markers, and zero tolerance for title ambiguity.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2.5 font-bold text-base text-[#111827]">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>16+ Years Ground Expertise</span>
                </div>
                <p className="mt-2 text-sm text-[#6B7280]">
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
