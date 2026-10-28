"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, CheckCircle2 } from "lucide-react";

interface PortfolioHeroProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function PortfolioHero({
  activeCategory = "all",
  onSelectCategory,
}: PortfolioHeroProps) {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState(activeCategory);

  const handleFilterClick = (cat: string) => {
    setSelectedFilter(cat);
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else {
      const el = document.getElementById(cat === "all" ? "projects" : `project-${cat}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        const p = document.getElementById("projects");
        if (p) p.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative border-b border-[#E8E2D7] bg-[#F8F5EF] pt-10 pb-8 text-[#242820]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Tag & Main Heading Row */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Title Column */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {language === "ta"
                  ? "முதன்மை உள்கட்டமைப்பு & விவசாய நிலங்கள் · தமிழ்நாடு"
                  : "PREMIER INFRASTRUCTURE & FARMLAND · TAMIL NADU"}
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl md:text-5xl lg:text-[54px] font-normal leading-[1.15] text-[#242820]">
              {language === "ta" ? (
                <>
                  முதன்மை வணிக மனைகள் &amp; <br className="hidden sm:inline" />
                  பராமரிக்கப்படும் பண்ணை நிலங்கள்
                </>
              ) : (
                <>
                  Prime Commercial Plots &amp; <br className="hidden sm:inline" />
                  Managed Agro Farmland
                </>
              )}
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-[#77766F]">
              {language === "ta"
                ? "மதுரையின் முக்கிய வணிக நெடுஞ்சாலைகள் மற்றும் இயற்கை எழில் கொஞ்சும் மலைச்சாரல் பகுதிகளில் அமைந்துள்ள துல்லியமாக அளவிடப்பட்ட நிலங்கள், சொந்த பழத்தோட்டங்கள் மற்றும் பாதுகாப்புடன் கூடிய பண்ணை எஸ்டேட்டுகள்."
                : "Architecturally surveyed land parcels, freehold orchard territories, and gated agro-estates positioned along Tamil Nadu's key commercial arteries and scenic foothill corridors."}
            </p>
          </div>

          {/* Right Trust Stats Column (from Stitch Screen) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] p-4 md:p-5 shadow-xs">
              <div className="text-center">
                <span className="block font-serif text-2xl md:text-3xl font-semibold text-[#242820]">
                  100%
                </span>
                <span className="mt-1 block text-[10px] md:text-[11px] font-medium leading-tight text-[#77766F]">
                  Clear Legal Title
                </span>
              </div>
              <div className="border-x border-[#E8E2D7] px-2 text-center">
                <span className="block font-serif text-2xl md:text-3xl font-semibold text-[#242820]">
                  DTCP
                </span>
                <span className="mt-1 block text-[10px] md:text-[11px] font-medium leading-tight text-[#77766F]">
                  Layout Benchmark
                </span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-2xl md:text-3xl font-semibold text-[#242820]">
                  1,200+
                </span>
                <span className="mt-1 block text-[10px] md:text-[11px] font-medium leading-tight text-[#77766F]">
                  Acres Transformed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs + Badges Row */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#E8E2D7] pt-6 md:flex-row md:items-center md:justify-between">
          {/* Left Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleFilterClick("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition ${
                selectedFilter === "all"
                  ? "bg-[#142C23] text-white shadow-xs"
                  : "border border-[#E8E2D7] bg-white text-[#77766F] hover:border-[#C6A15B] hover:text-[#242820]"
              }`}
            >
              {language === "ta" ? "அனைத்து திட்டங்கள் (3)" : "All Projects (3)"}
            </button>
            <button
              onClick={() => handleFilterClick("commercial")}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition ${
                selectedFilter === "commercial"
                  ? "bg-[#142C23] text-white shadow-xs"
                  : "border border-[#E8E2D7] bg-white text-[#77766F] hover:border-[#C6A15B] hover:text-[#242820]"
              }`}
            >
              {language === "ta" ? "வணிக நிலங்கள்" : "Commercial Land"}
            </button>
            <button
              onClick={() => handleFilterClick("farm")}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition ${
                selectedFilter === "farm"
                  ? "bg-[#142C23] text-white shadow-xs"
                  : "border border-[#E8E2D7] bg-white text-[#77766F] hover:border-[#C6A15B] hover:text-[#242820]"
              }`}
            >
              {language === "ta" ? "பண்ணை மற்றும் விவசாய நிலங்கள்" : "Farm and Agro Lands"}
            </button>
            <button
              onClick={() => handleFilterClick("enclave")}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition ${
                selectedFilter === "enclave"
                  ? "bg-[#142C23] text-white shadow-xs"
                  : "border border-[#E8E2D7] bg-white text-[#77766F] hover:border-[#C6A15B] hover:text-[#242820]"
              }`}
            >
              {language === "ta" ? "திட்டமிடப்பட்ட மனைப்பிரிவுகள்" : "Planned Layout Developments"}
            </button>
          </div>

          {/* Right Highlights Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#77766F]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3 py-1 font-mono text-[11px] text-[#242820]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#C6A15B]" />
              <span>Immediate Registration</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3 py-1 font-mono text-[11px] text-[#242820]">
              <MapPin className="h-3.5 w-3.5 text-[#C6A15B]" />
              <span>Madurai Outer Ring Road Arterial</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

