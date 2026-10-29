"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { Home, Building2, Wheat, ShieldCheck, ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const servicesList = [
    {
      id: "residential",
      icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />,
      highlight: language === "ta" ? "தேர்ந்தெடுங்கள்" : "Explore",
      title: language === "ta" ? "சிறந்த குடியிருப்பு மனைகள்" : "great residential layouts",
      desc:
        language === "ta"
          ? "DTCP மற்றும் RERA அனுமதி, அகலமான தார்ச்சாலைகள், நல்ல குடிநீர் மற்றும் உடனடி பட்டாவுடன் கூடிய வீட்டு மனைகள்."
          : "DTCP & RERA approved villa plots with wide bitumen roads, sweet groundwater, and immediate individual patta.",
      whatsappText: "Hello Surya Promoters, I would like to explore your residential plots and housing projects.",
    },
    {
      id: "commercial",
      icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />,
      highlight: language === "ta" ? "முதலீடு செய்யுங்கள்" : "Find highly",
      title: language === "ta" ? "வணிக & நெடுஞ்சாலை நிலங்கள்" : "rated commercial corridors",
      desc:
        language === "ta"
          ? "NH-44 மற்றும் மதுரை ரிங் ரோட்டில் குடோன்கள், மருத்துவமனைகள் மற்றும் நிறுவனங்களுக்கான முக்கிய இடங்கள்."
          : "High-exposure parcels along NH-44 and Madurai Ring Road tailored for warehouses, godowns, and hospitals.",
      whatsappText: "Hello Surya Promoters, I am interested in commercial and industrial highway parcels.",
    },
    {
      id: "agricultural",
      icon: <Wheat className="h-5 w-5 sm:h-6 sm:w-6" />,
      highlight: language === "ta" ? "கண்டறியுங்கள்" : "Discover",
      title: language === "ta" ? "செழிப்பான விவசாயப் பண்ணைகள்" : "fertile agricultural farms",
      desc:
        language === "ta"
          ? "செழிப்பான மண்வளம், வற்றாத நீர்வளம் மற்றும் பழ மரங்களுடன் அமைதியான வார இறுதி பண்ணை மனைகள்."
          : "Rich soils, perennial water tables, and pre-planted fruit groves for tranquil weekend farmhouse retreats.",
      whatsappText: "Hello Surya Promoters, please share details on fertile agricultural land and farm plots.",
    },
    {
      id: "legal",
      icon: <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
      highlight: language === "ta" ? "ஆலோசனை பெறுங்கள்" : "Receive",
      title: language === "ta" ? "சட்டப்பூர்வ ஆவண சரிபார்ப்பு" : "expert legal title advisory",
      desc:
        language === "ta"
          ? "30 ஆண்டு வில்லங்க சரிபார்ப்பு, பட்டா ஆவண ஆய்வு மற்றும் இந்திய விமானப்படை ஒழுக்கத்துடன் கூடிய வழிகாட்டுதல்."
          : "Rigorous 30-year encumbrance scrutiny, revenue survey vetting, and complete buyer protection by IAF veterans.",
      whatsappText: "Hello Surya Promoters, I need legal title and documentation advisory for land in Madurai.",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          
          {/* Left Column: Heading, Subtitle, Team Avatars & Key Metrics (Exact Reference Design Layout) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Top Category Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308]" />
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#B45309]">
                  {t.services.badge}
                </span>
              </div>

              {/* Bold Editorial Headline (Matches "Trusted by 100 Million buyers" reference) */}
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold leading-[1.08] tracking-tight">
                <span className="block text-[#111827]">
                  {t.services.titleLine1 || (language === "ta" ? "முழுமையான" : "Comprehensive")}
                </span>
                <span className="block text-[#6B7280] font-bold mt-1">
                  {t.services.titleLine2 || (language === "ta" ? "ரியல் எஸ்டேட் தீர்வுகள்" : "Real Estate Solutions")}
                </span>
              </h2>

              {/* Subtitle / Narrative */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B7280] max-w-md">
                {t.services.subtitle}
              </p>
            </div>

            {/* Bottom Proof Section: Avatars + 3 Column Metrics (Exact Structure from Reference Image) */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              
              {/* Overlapping Avatars Cluster */}
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-2.5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-xs bg-gray-200">
                    <Image
                      src="/images/founder/founder.png"
                      alt="Mr. Manickam Natarajan"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-xs bg-emerald-700 flex items-center justify-center text-white text-xs font-bold font-mono">
                    IAF
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-xs bg-blue-900 flex items-center justify-center text-white text-xs font-bold font-mono">
                    RERA
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-xs bg-[#EAB308] flex items-center justify-center text-[#0A0D12] text-xs font-bold font-mono">
                    ★ 4.9
                  </div>
                </div>

                <div className="text-xs text-[#6B7280] font-medium">
                  <span className="font-bold text-[#111827]">1000+ Families</span>{" "}
                  {language === "ta" ? "நம்பிக்கை பெற்ற நிறுவனம்" : "Trusted across Tamil Nadu"}
                </div>
              </div>

              {/* 3 Metrics Side-by-Side (Matches Reference: 100M Happy buyers | 40M Client review | 4.6 Positive Rating) */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                    100%
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mt-0.5">
                    {language === "ta" ? "தெளிவான பட்டா" : "Clear Titles"}
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                    16+ <span className="text-sm font-semibold text-gray-400">Yrs</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mt-0.5">
                    {language === "ta" ? "கள அனுபவம்" : "Experience"}
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#B45309]">
                    4.9 <span className="text-sm text-[#EAB308]">★</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mt-0.5">
                    {language === "ta" ? "நம்பகத்தன்மை" : "Trust Rating"}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Center Divider Line (Exact as in reference image) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch py-4">
            <div className="w-[1.5px] bg-gray-200 h-full rounded-full" />
          </div>

          {/* Right Column: 4 Modern Stacked Service Cards (Matches Reference Image Right Column) */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            {servicesList.map((service) => (
              <a
                key={service.id}
                href={`https://wa.me/917708966452?text=${encodeURIComponent(service.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-4 sm:gap-5 rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:border-[#EAB308] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {/* Left: Golden Circular Icon Container */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#B45309] shadow-2xs transition-all duration-300 group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] group-hover:scale-105">
                    {service.icon}
                  </div>

                  {/* Middle: Highlight Word + Title + Subtitle */}
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-[#111827] leading-snug">
                      <span className="font-extrabold text-[#111827] group-hover:text-[#B45309] transition-colors">
                        {service.highlight}
                      </span>{" "}
                      <span className="font-medium text-[#4B5563]">
                        {service.title}
                      </span>
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#6B7280]">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Right: Modern Arrow Link */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] group-hover:shadow-xs group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
