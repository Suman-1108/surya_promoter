"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Calendar, User, MapPin, Building } from "lucide-react";

export default function ModernHero() {
  const { language } = useLanguage();

  // Typewriter effect for headline
  const line1Target = language === "ta" ? "சூர்யா புரமோட்டர்ஸ்" : "Surya Promoters";
  const line2Target = language === "ta" ? "நில மேம்பாட்டாளர்கள்" : "Land & Property Developers";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    setTypedLine1("");
    setTypedLine2("");
    setIsTypingLine1(true);
    setIsDoneTyping(false);

    let charIndex1 = 0;
    let charIndex2 = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLine1 = () => {
      if (charIndex1 < line1Target.length) {
        setTypedLine1(line1Target.slice(0, charIndex1 + 1));
        charIndex1++;
        timeoutId = setTimeout(typeLine1, 50);
      } else {
        setIsTypingLine1(false);
        timeoutId = setTimeout(typeLine2, 160);
      }
    };

    const typeLine2 = () => {
      if (charIndex2 < line2Target.length) {
        setTypedLine2(line2Target.slice(0, charIndex2 + 1));
        charIndex2++;
        timeoutId = setTimeout(typeLine2, 40);
      } else {
        setIsDoneTyping(true);
      }
    };

    timeoutId = setTimeout(typeLine1, 100);

    return () => clearTimeout(timeoutId);
  }, [language, line1Target, line2Target]);

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111827] pt-2 pb-8 md:pb-12 border-b border-[#EAE5DC]">
      {/* ========================================================
          HERO WIDE-SCREEN CONTAINER (Fluid adaptive 16:9 layout)
         ======================================================== */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-12 xl:gap-14">
          {/* Left Column: Heading, Leadership Badge, Copy, Buttons */}
          <div className="xl:col-span-6 space-y-6 lg:space-y-7">
            {/* Small eyebrow text */}
            <div className="inline-block">
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#C6A15B]">
                {language === "ta"
                  ? "மதுரை நில மேம்பாட்டாளர்கள் · 2010 முதல்"
                  : "MADURAI PROPERTY DEVELOPERS · EST. 2010"}
              </span>
            </div>

            {/* Main Headline (Typewriter Animated) */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] font-extrabold leading-[1.08] tracking-tight text-[#111827] min-h-[120px] sm:min-h-[140px] lg:min-h-[165px]">
              <span>{typedLine1}</span>
              {isTypingLine1 && (
                <span className="inline-block w-1.5 h-10 sm:h-12 lg:h-14 bg-[#111827] ml-1.5 align-middle animate-pulse" />
              )}
              <br />
              <span className="text-[#C6A15B]">{typedLine2}</span>
              {!isTypingLine1 && (
                <span
                  className={`inline-block w-1.5 h-10 sm:h-12 lg:h-14 bg-[#C6A15B] ml-1.5 align-middle ${
                    isDoneTyping ? "animate-pulse" : ""
                  }`}
                />
              )}
            </h1>

            {/* Small supporting label */}
            <div className="pt-0.5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
                FOUNDED 2010 · MADURAI, TAMIL NADU · IAF VETERAN LEADERSHIP
              </p>
            </div>

            {/* Description (Exact Verified Brief) */}
            <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#4B5563]">
              {language === "ta"
                ? "சூர்யா புரமோட்டர்ஸ் 2010 ஆம் ஆண்டு இந்திய விமானப்படை ஓய்வுபெற்ற அதிகாரியான திரு. மாணிக்கம் நடராஜன் அவர்களால் நிறுவப்பட்டது. நாங்கள் மதுரையைச் சுற்றிலும் குடியிருப்பு, வணிகம், தொழிற்பேட்டை மற்றும் விவசாய நில மேம்பாடு மற்றும் விற்பனையில் நிபுணத்துவம் பெற்றுள்ளோம்."
                : "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran. We specialize in property development and marketing across residential, commercial, industrial and agricultural property categories in and around Madurai."}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#C6A15B] px-8 py-4 font-display text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#0F1E2E] shadow-md transition-all hover:bg-[#b89146] hover:shadow-lg hover:scale-[1.02]"
              >
                <span>{language === "ta" ? "கலந்தாலோசிக்க" : "DISCUSS YOUR NEXT PROPERTY"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#111827] bg-transparent px-8 py-4 font-display text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#111827] transition hover:bg-[#111827] hover:text-white"
              >
                <span>{language === "ta" ? "திட்டங்களை காண்க" : "EXPLORE OUR PROJECTS"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large landscape property photo with white information strip */}
          <div className="xl:col-span-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-gray-50">
              <Image
                src="/images/hero/hero_image.png"
                alt="Surya Promoters Completed Premium Residential Property in Madurai"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Information Strip at bottom of image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/95 px-5 py-3 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                    SURYA PROMOTERS · MADURAI
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#C6A15B] uppercase tracking-wider">
                  EST. 2010
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            COMPANY HIGHLIGHTS ROW (Verified Facts Only)
           ======================================================== */}
        <div className="mt-12 pt-8 border-t border-gray-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {/* Highlight 1: Established */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F5EF]/70 p-4 shadow-xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6A15B]/15 text-[#C6A15B]">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-display text-xl lg:text-2xl font-extrabold text-[#111827]">
                2010
              </span>
              <span className="block font-mono text-[11px] tracking-wider uppercase text-[#77766F] font-semibold">
                {language === "ta" ? "நிறுவப்பட்ட ஆண்டு" : "ESTABLISHED"}
              </span>
            </div>
          </div>

          {/* Highlight 2: Founder */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F5EF]/70 p-4 shadow-xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6A15B]/15 text-[#C6A15B]">
              <User className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-display text-sm sm:text-base font-extrabold text-[#111827] truncate">
                Mr. Manickam Natarajan
              </span>
              <span className="block font-mono text-[11px] tracking-wider uppercase text-[#C6A15B] font-semibold">
                {language === "ta" ? "நிறுவனர் · விமானப்படை வீரர்" : "FOUNDER · IAF VETERAN"}
              </span>
            </div>
          </div>

          {/* Highlight 3: Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F5EF]/70 p-4 shadow-xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6A15B]/15 text-[#C6A15B]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-display text-base lg:text-lg font-extrabold text-[#111827]">
                Madurai, Tamil Nadu
              </span>
              <span className="block font-mono text-[11px] tracking-wider uppercase text-[#77766F] font-semibold">
                {language === "ta" ? "தலைமையகம்" : "LOCATION"}
              </span>
            </div>
          </div>

          {/* Highlight 4: Ongoing Projects */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F5EF]/70 p-4 shadow-xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C6A15B]/15 text-[#C6A15B]">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-display text-xl lg:text-2xl font-extrabold text-[#111827]">
                3
              </span>
              <span className="block font-mono text-[11px] tracking-wider uppercase text-[#77766F] font-semibold">
                {language === "ta" ? "நடைபெறும் திட்டங்கள்" : "ONGOING PROJECTS"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
