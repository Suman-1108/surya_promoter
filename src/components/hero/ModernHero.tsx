"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Search,
  MapPin,
  ArrowUpRight,
  Play,
  X,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function ModernHero() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Popular locations data matching reference design
  const popularLocations = [
    {
      id: "nh44",
      title: language === "ta" ? "மதுரை வெளிவட்டச் சாலை (NH-44)" : "NH-44 Bypass Corridor",
      count: language === "ta" ? "வணிக நிலம்" : "Commercial Logistics",
      slug: "vaigai-elite-commercial-land",
      image: "/images/projects/vaigai-commercial.jpg",
      badge: "Commercial",
      type: "commercial",
    },
    {
      id: "agro",
      title: language === "ta" ? "மதுரை சுற்றுவட்டார விவசாய பூமி" : "Madurai Agro Surroundings",
      count: language === "ta" ? "பண்ணை நிலம்" : "Fertile Agro Plots",
      slug: "madurai-farms-and-fruits",
      image: "/images/projects/madurai-farms.jpg",
      badge: "Farm Plots",
      type: "farm",
    },
    {
      id: "orchard",
      title: language === "ta" ? "ஆரஞ்ச் கார்டன் தோட்டம்" : "Orange Garden Estate",
      count: language === "ta" ? "பழத்தோட்டம்" : "Harvested Orchards",
      slug: "orange-garden",
      image: "/images/projects/orange-garden.jpg",
      badge: "Orchard Farm",
      type: "farm",
    },
    {
      id: "suburban",
      title: language === "ta" ? "மதுரை புறநகர் குடியிருப்பு" : "Madurai Suburban Corridor",
      count: language === "ta" ? "குடியிருப்பு மனை" : "Gated Villa Plots",
      slug: "surya-green-enclave",
      image: "/images/hero/hero_image.png",
      badge: "Residential",
      type: "residential",
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.getElementById("featured-projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#111827]">
      {/* =========================================================================
          HERO TOP: Centered Headline, Subtitle, Search Bar (Matches Reference)
      ========================================================================= */}
      <section className="relative pt-12 pb-6 md:pt-16 md:pb-10 overflow-hidden">
        {/* Subtle City / Blueprint Line Watermark Background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Top Verified Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 shadow-xs mb-5 backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#B45309]">
                {language === "ta"
                  ? "சூர்யா புரமோட்டர்ஸ் · மதுரை · இந்திய விமானப்படை தலைமை"
                  : "SURYA PROMOTERS · MADURAI · IAF VETERAN LEADERSHIP"}
              </span>
            </div>

            {/* Main Headline (Exact Style & Structure from Reference Image) */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#111827] leading-[1.1]">
              {language === "ta" ? (
                <>
                  மதுரையில் நிலங்கள் &amp; <br />
                  <span className="text-[#B45309]">மனைப்பிரிவுகளை</span> கண்டறியுங்கள்
                </>
              ) : (
                <>
                  Discover Land and <br />
                  <span className="text-[#111827]">Homes for Sale</span>
                </>
              )}
            </h1>

            {/* Subtitle (Exact matches reference text tone) */}
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
              {language === "ta"
                ? "மதுரை மற்றும் அதன் சுற்றுவட்டாரப் பகுதிகளில் முதலீடு மற்றும் குடியிருப்புக்கான அங்கீகரிக்கப்பட்ட வீட்டுமனைகள், வணிக நிலங்கள் மற்றும் பண்ணைத் தோட்டங்களை எளிதாகக் கண்டறியுங்கள்."
                : "Browse a wide range of land and homes available across top locations. Whether you're investing or settling down, find the perfect property with ease."}
            </p>

            {/* Search Pill Bar (Centered, pill-shaped with Yellow Search button) */}
            <div className="mt-8 sm:mt-10 mx-auto max-w-2xl">
              <form
                onSubmit={handleSearchSubmit}
                className="relative flex items-center rounded-full bg-white p-2 shadow-lg border border-gray-200 transition-all focus-within:border-[#EAB308] focus-within:ring-2 focus-within:ring-[#EAB308]/20"
              >
                <div className="pl-4 pr-2 text-gray-400">
                  <MapPin className="h-5 w-5 text-[#B45309]" />
                </div>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === "ta"
                      ? "இடம், திட்டம் அல்லது மனை வகை தேடுக..."
                      : "State, city or zip code"
                  }
                  className="w-full bg-transparent py-2.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-hidden"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#EAB308] px-7 py-3 font-display text-sm font-extrabold text-[#0A0D12] shadow-sm transition hover:bg-[#ca9a07] hover:scale-[1.02] cursor-pointer shrink-0"
                >
                  <Search className="h-4 w-4 mr-1.5" />
                  <span>{language === "ta" ? "தேடுக" : "Search"}</span>
                </button>
              </form>
            </div>

          </div>

          {/* =========================================================================
              AERIAL DRONE FARMLAND PHOTO (Large Panoramic Showcase Below Search)
          ========================================================================= */}
          <div className="mt-10 sm:mt-12">
            <div className="relative aspect-[16/8] sm:aspect-[16/7] md:aspect-[21/9] w-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-gray-200 bg-emerald-950 shadow-2xl">
              <Image
                src="/images/hero/hero-farmland-aerial.jpg"
                alt="Aerial drone view of lush green agricultural farmland in Madurai"
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1760px) 100vw, 1760px"
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Top Left Badge: Location / verified indicator */}
              <div className="absolute top-5 left-5 sm:top-7 sm:left-7 flex items-center gap-2 rounded-full bg-black/65 px-4 py-2 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  MADURAI AGRO & COMMERCIAL CORRIDOR
                </span>
              </div>

              {/* Center Play Button for Drone Video Tour */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 rounded-full bg-white/90 hover:bg-white px-6 py-3.5 shadow-2xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer border border-white"
                aria-label="Play Drone Video Tour"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAB308] text-[#0A0D12] shadow-sm group-hover:scale-110 transition-transform">
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111827]">
                  {language === "ta" ? "ட்ரோன் வீடியோவை பார்க்க" : "Watch Drone Video Tour"}
                </span>
              </button>

              {/* Bottom Info Strip Overlaid on Farmland Photo */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-black/70 px-6 py-4 backdrop-blur-md border border-white/15 text-white">
                <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                    <span className="font-medium">100% Verified Patta & Title</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                    <span className="font-medium">Sweet Groundwater & Motorable Roads</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                    <span className="font-medium">IAF Veteran Ground Survey</span>
                  </div>
                </div>

                <div className="font-mono text-xs font-bold uppercase text-[#EAB308]">
                  ESTD. 2010 · 16+ YEARS EXCELLENCE
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          POPULAR LOCATIONS TO BUY LAND (Exact Section from Reference Screenshot)
      ========================================================================= */}
      <section className="relative py-12 md:py-16 border-b border-gray-200/80 bg-[#FAF8F5]">
        <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24">
          
          {/* Header row: "POPULAR STATES TO BUY LAND" ... "See all Land" */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#111827]">
                {language === "ta" ? "நிலம் வாங்க புகழ்பெற்ற இடங்கள்" : "POPULAR LOCATIONS TO BUY LAND"}
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-gray-700 shadow-2xs hover:border-[#EAB308] hover:text-[#B45309] hover:bg-gray-50 transition cursor-pointer"
            >
              <span>{language === "ta" ? "அனைத்து நிலங்களையும் காண்க" : "See all Land"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Parcel Cards Grid (Exact Style from Reference with Red Pin & Yellow Arrow) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularLocations.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Parcel Image with Centered Red Pin */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Centered Red Location Pin (Iconic feature from Reference Image) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-115">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-xl ring-4 ring-white/80">
                      <MapPin className="h-5 w-5 fill-white text-red-600" />
                    </div>
                  </div>

                  {/* Category Pill Tag top-left */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/90 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-800 shadow-xs backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta with Title & Yellow Diagonal Arrow Button */}
                <div className="flex items-center justify-between p-4.5 bg-white">
                  <div className="pr-3">
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#111827] group-hover:text-[#B45309] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 mt-0.5 font-medium">
                      {item.count}
                    </p>
                  </div>

                  {/* Yellow Arrow Button in bottom right corner (Matches Reference) */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAB308] text-[#0A0D12] shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ca9a07]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Carousel Indicator (Matching Reference Image) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#111827]" />
            <span className="h-1.5 w-2 rounded-full bg-gray-300" />
            <span className="h-1.5 w-2 rounded-full bg-gray-300" />
            <span className="h-1.5 w-2 rounded-full bg-gray-300" />
          </div>

          {/* Scroll Down Indicator with ChevronDown */}
          <div className="mt-10 flex flex-col items-center justify-center text-center">
            <a
              href="#featured-projects"
              className="group flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#B45309] transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold">
                {language === "ta" ? "திட்டங்களை காண்க" : "EXPLORE DEVELOPMENTS"}
              </span>
              <ChevronDown className="h-4 w-4 animate-bounce text-[#EAB308]" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          VIDEO MODAL: Watch Drone Showcase Video
      ========================================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
                <span className="font-display text-sm font-bold uppercase tracking-wider">
                  Surya Promoters · Aerial Drone Showcase
                </span>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src="/videos/herosection.mp4"
                controls
                autoPlay
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
