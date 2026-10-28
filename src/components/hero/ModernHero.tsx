"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import {
  MapPin,
  Building2,
  Tag,
  Maximize2,
  Search,
  ArrowRight,
} from "lucide-react";

interface ModernHeroProps {
  onSearch?: (filters: { location: string; propertyType: string; priceRange: string; size: string }) => void;
}

export default function ModernHero({ onSearch }: ModernHeroProps) {
  const { language } = useLanguage();

  // Search filter state
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Status");
  const [size, setSize] = useState("Any Size");

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
        timeoutId = setTimeout(typeLine1, 60);
      } else {
        setIsTypingLine1(false);
        timeoutId = setTimeout(typeLine2, 180);
      }
    };

    const typeLine2 = () => {
      if (charIndex2 < line2Target.length) {
        setTypedLine2(line2Target.slice(0, charIndex2 + 1));
        charIndex2++;
        timeoutId = setTimeout(typeLine2, 50);
      } else {
        setIsDoneTyping(true);
      }
    };

    timeoutId = setTimeout(typeLine1, 100);

    return () => clearTimeout(timeoutId);
  }, [language, line1Target, line2Target]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, propertyType, priceRange, size });
    }
    const target = document.getElementById("featured-properties");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111827] pt-2 pb-6 md:pb-8">
      {/* ========================================================
          HERO WIDE-SCREEN CONTAINER (Fluid adaptive 16:9 layout)
         ======================================================== */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-12 xl:gap-14">
          {/* Left Column: Heading, Leadership Badge, Copy, Buttons, Metric Strip */}
          <div className="xl:col-span-6 space-y-6 lg:space-y-7">
            {/* Eyebrow / Lineage Tag */}
            <div className="inline-block">
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#C6A15B]">
                {language === "ta"
                  ? "மதுரை முதன்மை நில மேம்பாட்டாளர்கள் · 2010 முதல்"
                  : "MADURAI PREMIER LAND DEVELOPERS · ESTD 2010"}
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

            {/* Leadership Lineage Badge */}
            <div className="pt-0.5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
                FOUNDED 2010 · MADURAI, TAMIL NADU · IAF VETERAN LEADERSHIP
              </p>
            </div>

            {/* Text Content (Authoritative corporate property copy) */}
            <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#4B5563]">
              {language === "ta"
                ? "மதுரையின் அதிவேக வளர்ச்சி பகுதிகளில் முதன்மையான வணிக நெடுஞ்சாலை நிலங்கள், 75 ஏக்கர் இயற்கை விவசாய பழத்தோட்டப் பண்ணைகள் மற்றும் குடியிருப்பு மனைப்பிரிவுகள். 100% தெளிவான சட்ட மூலப்பத்திரங்களுடன்."
                : "Premier real estate and land development firm in Madurai. Proven masterplanning across commercial highway corridors on Madurai Outer Ring Road (NH-44), 75-acre managed organic agro-farms, and gated residential farmhouse communities with 100% verified clear legal titles."}
            </p>

            {/* Action Buttons (Matches reference layout) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#C6A15B] px-8 py-4 font-display text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#0F1E2E] shadow-md transition-all hover:bg-[#b89146] hover:shadow-lg hover:scale-[1.02]"
              >
                <span>{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Your Next Property"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#featured-properties"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#111827] bg-transparent px-8 py-4 font-display text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#111827] transition hover:bg-[#111827] hover:text-white"
              >
                <span>{language === "ta" ? "திட்டங்கள் பார்வை" : "View Project Record"}</span>
              </a>
            </div>

            {/* 4-Stat Metric Strip (Directly underneath buttons - matches reference) */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="border-r border-gray-200 pr-3">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  16+<span className="text-sm font-medium text-[#C6A15B]"> Yrs</span>
                </span>
                <span className="block font-mono text-[10px] tracking-wider uppercase text-[#6B7280] font-bold mt-0.5">
                  ESTD. 2010
                </span>
              </div>

              <div className="border-r border-gray-200 pr-3">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  1,200+
                </span>
                <span className="block font-mono text-[10px] tracking-wider uppercase text-[#6B7280] font-bold mt-0.5">
                  ACRES DEVELOPED
                </span>
              </div>

              <div className="border-r border-gray-200 pr-3">
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  100%
                </span>
                <span className="block font-mono text-[10px] tracking-wider uppercase text-[#6B7280] font-bold mt-0.5">
                  CLEAR TITLE FMB
                </span>
              </div>

              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                  3
                </span>
                <span className="block font-mono text-[10px] tracking-wider uppercase text-[#6B7280] font-bold mt-0.5">
                  FLAGSHIP PARCELS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Luxury Image (16:9 Ratio!) */}
          <div className="xl:col-span-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
              <Image
                src="/images/image6.jpeg"
                alt="Surya Promoters Architectural Property in Madurai"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Verified Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/95 px-5 py-3.5 backdrop-blur-md shadow-xl border border-white/60">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display text-sm font-extrabold text-[#111827]">
                    Surya Promoters · Madurai
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#C6A15B] uppercase tracking-wider">
                  ESTD. 2010
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROPERTY SEARCH / FILTER BAR (Seamlessly connected)
           ======================================================== */}
        <div className="mt-12 md:mt-16 relative z-20">
          <form
            onSubmit={handleSearchSubmit}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-5 md:p-6 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-center">
              {/* Filter 1: Location */}
              <div className="lg:col-span-3 flex items-center gap-3.5 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block font-display text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-[#4B5563] focus:outline-none cursor-pointer truncate mt-0.5"
                  >
                    <option value="All Locations">All Madurai</option>
                    <option value="Ring Road (NH-44)">Ring Road (NH-44)</option>
                    <option value="Vandiyur Corridor">Vandiyur Corridor</option>
                    <option value="Agrarian Belt">Agrarian Belt</option>
                    <option value="Scenic Foothills">Scenic Foothills</option>
                  </select>
                </div>
              </div>

              {/* Filter 2: Property Type */}
              <div className="lg:col-span-3 flex items-center gap-3.5 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block font-display text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-[#4B5563] focus:outline-none cursor-pointer truncate mt-0.5"
                  >
                    <option value="All Types">All Property Types</option>
                    <option value="Commercial Land">Commercial Land</option>
                    <option value="Agricultural Farms">Agricultural Farms</option>
                    <option value="Farmhouse Enclave">Farmhouse Enclave</option>
                    <option value="Residential Plots">Residential Plots</option>
                  </select>
                </div>
              </div>

              {/* Filter 3: Price / Status */}
              <div className="lg:col-span-2 flex items-center gap-3.5 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Tag className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block font-display text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Project Status
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-[#4B5563] focus:outline-none cursor-pointer truncate mt-0.5"
                  >
                    <option value="Any Status">Ongoing Projects</option>
                    <option value="Immediate Registration">Immediate Registration</option>
                    <option value="DTCP Approved">DTCP Approved</option>
                    <option value="Prime Commercial">Prime Commercial</option>
                  </select>
                </div>
              </div>

              {/* Filter 4: Plot Size */}
              <div className="lg:col-span-2 flex items-center gap-3.5 px-3 py-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Maximize2 className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block font-display text-xs font-bold uppercase tracking-wider text-[#111827]">
                    Plot Extent
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-[#4B5563] focus:outline-none cursor-pointer truncate mt-0.5"
                  >
                    <option value="Any Size">Any Extent</option>
                    <option value="2,400 - 5,000 Sq.Ft">2,400 – 5,000 Sq.Ft</option>
                    <option value="10,000+ Sq.Ft">10,000+ Sq.Ft</option>
                    <option value="1 - 5 Acres">1 – 5 Acres</option>
                    <option value="10+ Acres">10+ Acres</option>
                  </select>
                </div>
              </div>

              {/* Filter 5: Search Button */}
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#0F1E2E] py-4 px-6 font-display text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition hover:bg-[#1A3147] hover:shadow-lg"
                >
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}