"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

export default function WhatWeOfferSection() {
  const { t, language } = useLanguage();

  return (
    <section id="what-we-offer" className="w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Header: Left Title + Right Narrative Paragraph (Exact Structure from Reference Image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308]" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#B45309]">
                {t.whatWeOffer?.badge || "OUR OFFERINGS"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              {t.whatWeOffer?.title || (language === "ta" ? "நாங்கள் வழங்குபவை என்ன?" : "What We Offer?")}
            </h2>
          </div>

          <p className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#6B7280]">
            {t.whatWeOffer?.subtitle ||
              (language === "ta"
                ? "வெறும் நில விற்பனை மட்டுமல்லாமல், மன அமைதி, நிலையான சொத்து மதிப்பு மற்றும் முழுமையான சட்டப் பாதுகாப்பை வழங்குகிறோம். சூர்யா புரமோட்டர்ஸுடன் இணையும் போது, உங்கள் நில முதலீடு பாதுகாப்பானதாகவும் நம்பகமானதாகவும் அமைகிறது."
                : "More than just land, we deliver peace of mind, lasting value, and complete legal security. When you partner with Surya Promoters, you get a full-service experience designed to make your project easy, enjoyable, and exceptional.")}
          </p>
        </div>

        {/* Bento Image Grid (Exact 4-Card Bento Structure with Frosted Glass Pills from Reference Image) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Left Tall Portrait Card (Spans full height) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] lg:h-[530px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 group shadow-xs hover:shadow-xl transition-all duration-500">
            <Image
              src="/images/hero/hero-gated-layout.jpg"
              alt="Complete Project Management - Surya Promoters Gated Plotted Community"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

            {/* Frosted Glass Pill Badge at Bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center">
              <span className="inline-block backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg transition-all tracking-wide">
                {t.whatWeOffer?.item1 || "Complete Project Management"}
              </span>
            </div>
          </div>

          {/* Right Column: 1 Top Landscape Card + 2 Bottom Square Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 h-full">
            
            {/* Card 2: Top Wide Landscape Card */}
            <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 group shadow-xs hover:shadow-xl transition-all duration-500">
              <Image
                src="/images/projects/vaigai-commercial.jpg"
                alt="High-Quality Materials - Commercial & Logistics Highway Land"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

              {/* Frosted Glass Pill Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center">
                <span className="inline-block backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg transition-all tracking-wide">
                  {t.whatWeOffer?.item2 || "High-Quality Materials & Prime Land"}
                </span>
              </div>
            </div>

            {/* Bottom Row: 2 Side-by-Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 h-[220px] sm:h-[255px]">
              
              {/* Card 3: Bottom Left Card */}
              <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 group shadow-xs hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/hero/hero-aerial-farmland.jpg"
                  alt="On-Time Delivery - Fertile Agricultural & Farmland Plots"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 29vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Frosted Glass Pill Badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center">
                  <span className="inline-block backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium text-xs sm:text-[13px] px-4 sm:px-5 py-2 rounded-full shadow-lg transition-all tracking-wide truncate">
                    {t.whatWeOffer?.item3 || "On-Time Delivery & Agro Plots"}
                  </span>
                </div>
              </div>

              {/* Card 4: Bottom Right Card */}
              <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 group shadow-xs hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/hero/hero-house.jpg"
                  alt="Interiors Items & Ready Villa Plots - 100% Clear Title Documentation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 29vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Frosted Glass Pill Badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center">
                  <span className="inline-block backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium text-xs sm:text-[13px] px-4 sm:px-5 py-2 rounded-full shadow-lg transition-all tracking-wide truncate">
                    {t.whatWeOffer?.item4 || "100% Legal Title & Patta Handover"}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
