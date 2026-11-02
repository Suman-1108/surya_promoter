"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <ScrollReveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1A1A1E] px-6 py-14 sm:px-12 sm:py-20 lg:py-24 text-center shadow-2xl border border-white/5">
            {/* Subtle ambient background glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#FF623E]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#26272F] border border-white/10 px-3.5 py-1.5 shadow-xs transition-transform hover:scale-[1.02]">
                <span className="rounded-full bg-[#FF623E] px-2 py-0.5 text-[11px] font-bold text-white tracking-wide">
                  {isTamil ? "புதியது" : "New"}
                </span>
                <span className="text-xs sm:text-[13px] font-medium text-gray-200">
                  {isTamil
                    ? "சூர்யா புரமோட்டர்ஸ் உடன் நேரடியாக இணையுங்கள்"
                    : "Connect, Engage, and Grow with Surya Promoters"}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-6 sm:mt-8 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-3xl">
                {isTamil ? (
                  <>
                    உறுதியான நம்பிக்கையுடன்{" "}
                    <span className="text-[#FF623E]">இன்றே தொடங்குங்கள்</span>
                  </>
                ) : (
                  <>
                    Start building{" "}
                    <span className="text-[#FF623E]">stronger connections</span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed">
                {isTamil
                  ? "100% தெளிவான ஆவணங்கள், DTCP/RERA அனுமதிகள் மற்றும் உடனடி பட்டாவுடன் கூடிய சிறந்த நிலங்களை தேர்ந்தெடுக்க எங்கள் ஆலோசனை குழுவை அணுகுங்கள்."
                  : "Connect with our IAF veteran land advisory team today to inspect verified highway acreages, farm plots, and approved layouts with 100% clear titles."}
              </p>

              {/* Action Button */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-semibold text-[#111827] shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  {isTamil ? "இப்போதே தொடங்குங்கள்" : "Get Started"}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
