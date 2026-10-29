"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Shield, Award, CheckCircle, Quote } from "lucide-react";

export default function FounderSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#F8F5EF] py-8 md:py-12 text-[#242820] overflow-hidden border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Founder Editorial Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-4">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
                <Shield className="h-3.5 w-3.5 text-[#C6A15B]" />
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#77766F]">
                  DEFENSE HERITAGE & LEADERSHIP
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827]">
                {t.about.founderTitle}
              </h2>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#C6A15B]">
                {t.about.founderRole}
              </p>
            </ScrollReveal>

            {/* Founder Quote Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-xl border-l-4 border-[#C6A15B] bg-[#FFFFFF] p-4 sm:p-5 shadow-2xs border-y border-r border-[#E8E2D7]">
                <Quote className="h-7 w-7 text-[#C6A15B]/20 absolute top-3.5 right-3.5" />
                <p className="font-display text-xs sm:text-sm md:text-[15px] italic leading-relaxed text-[#111827]/90 pr-6">
                  {t.about.founderQuote}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-xs sm:text-sm leading-relaxed text-[#77766F]">
                Having served in the Indian Air Force, Mr. Manickam Natarajan established Surya Promoters in 2010 with a foundational ethos: applying military-grade precision, zero tolerance for ambiguous title documentation, and unwavering accountability to land development in Madurai.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <div className="rounded-xl border border-[#E8E2D7] bg-[#FFFFFF] p-3.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#242820]">
                    <Award className="h-4 w-4 text-[#C6A15B]" />
                    <span>Indian Air Force Discipline</span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#77766F] leading-normal">
                    Precision, punctual execution, and straightforward communication.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8E2D7] bg-[#FFFFFF] p-3.5 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#242820]">
                    <CheckCircle className="h-4 w-4 text-[#C6A15B]" />
                    <span>Madurai Ground Insight</span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#77766F] leading-normal">
                    Over 16 years developing residential, commercial and agro acreage.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Founder Portrait Representation */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <ScrollReveal direction="right">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#F1EBDD] shadow-md">
                <div className="relative h-full w-full flex flex-col items-center justify-center p-6 text-center text-[#242820]">
                  <div className="relative mb-4 h-16 w-16 rounded-full border border-[#C6A15B] bg-[#FFFFFF] shadow-xs flex items-center justify-center">
                    <Shield className="h-8 w-8 text-[#C6A15B]" />
                  </div>

                  <span className="font-display text-xl font-bold text-[#242820]">
                    Mr. Manickam Natarajan
                  </span>
                  <span className="mt-1 text-xs font-mono tracking-wider text-[#C6A15B] uppercase font-semibold">
                    Indian Air Force Veteran
                  </span>
                  <span className="mt-0.5 text-xs text-[#77766F]">
                    Founder & Managing Director · Surya Promoters
                  </span>

                  <div className="mt-5 border-t border-[#E8E2D7] pt-3.5 w-full text-xs text-[#77766F] space-y-1">
                    <p>Established 2010 · Madurai, Tamil Nadu</p>
                    <p className="text-[#C6A15B] font-mono font-semibold">Duty · Honour · Integrity in Land</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
