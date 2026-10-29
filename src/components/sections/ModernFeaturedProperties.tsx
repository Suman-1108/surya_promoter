"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Calendar, MessageSquare, ExternalLink, MapPin } from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  slug: string;
  title: string;
  titleTa: string;
  category: "all" | "commercial" | "farm";
  categoryBadge: string;
  categoryBadgeTa: string;
  location: string;
  locationTa: string;
  propertyType: string;
  suitability: string;
  status: string;
  description: string;
  descriptionTa: string;
  image: string;
  googleMapsUrl: string;
}

export default function ModernFeaturedProperties() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "commercial" | "farm">("all");

  const projects: ProjectItem[] = [
    {
      id: "vaigai-elite",
      num: "01",
      slug: "vaigai-elite-commercial-land",
      category: "commercial",
      categoryBadge: "COMMERCIAL LAND · HIGHWAY LOGISTICS CORRIDOR",
      categoryBadgeTa: "வணிக நிலம் · நெடுஞ்சாலை வழித்தடம்",
      title: "Vaigai Elite: Prime Highway Commercial Acreage",
      titleTa: "வைகை எலைட்: முதன்மையான நெடுஞ்சாலை வணிக நிலம்",
      location: "Madurai Outer Ring Road (NH-44), Madurai",
      locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44), மதுரை",
      propertyType: "Commercial Highway Land",
      suitability: "Hospitals, Warehouses & Hospitality",
      status: "2026 Active Development",
      description:
        "High-visibility commercial land parcel with direct National Highway frontage. Perfectly suitable for proposed hospitals, hospitality establishments, logistic godowns, distribution warehouses and large commercial ventures with 100% verified documentation.",
      descriptionTa:
        "தேசிய நெடுஞ்சாலை முகப்புடன் கூடிய உயர் மதிப்பு வணிக நிலம். மருத்துவமனைகள், தங்கும் விடுதிகள், கிடங்குகள், குடோன்கள் மற்றும் வணிக நிறுவனங்களுக்கு ஏற்ற 100% தெளிவான ஆவணங்களுடன் கூடிய நிலம்.",
      image: "/images/projects/vaigai-commercial.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Tamil+Nadu",
    },
    {
      id: "madurai-farms",
      num: "02",
      slug: "madurai-farms-and-fruits",
      category: "farm",
      categoryBadge: "AGRICULTURAL FARM PLOTS · WATER-RICH BELT",
      categoryBadgeTa: "விவசாயப் பண்ணை நிலம் · வளமான நீர்வளம்",
      title: "Madurai Farms & Fruits: Managed Organic Agro-Acreage",
      titleTa: "மதுரை ஃபார்ம்ஸ் & ஃப்ரூட்ஸ்: இயற்கை பண்ணை நிலங்கள்",
      location: "Agricultural Belt, Madurai Surroundings",
      locationTa: "விவசாய மண்டலம், மதுரை சுற்றுவட்டாரம்",
      propertyType: "Fertile Agro & Farm Land",
      suitability: "Farmhouse, Horticulture & Wealth Hedge",
      status: "2026 Active Development",
      description:
        "Fertile agricultural land plots blessed with rich soil profiles and copious sweet groundwater. Ideal for personal weekend farmhouses, organic fruit groves, long-term agro-investments, and peaceful countryside retreats with motorable blacktop access.",
      descriptionTa:
        "வளமான மண் மற்றும் நிலத்தடி நீர் வசதியுடன் கூடிய விவசாய நிலங்கள். தனிநபர் வார இறுதி பண்ணை வீடுகள், இயற்கை பழத்தோட்டங்கள் மற்றும் பாதுகாப்பான நீண்டகால முதலீட்டிற்கு ஏற்ற நிலங்கள்.",
      image: "/images/projects/madurai-farms.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Tamil+Nadu+Farm+Land",
    },
    {
      id: "orange-garden",
      num: "03",
      slug: "orange-garden",
      category: "farm",
      categoryBadge: "ORCHARD ESTATE · GATED FARMHOUSE COMMUNITY",
      categoryBadgeTa: "பழத்தோட்ட எஸ்டேட் · பண்ணை வீடு குடியிருப்பு",
      title: "Orange Garden: Gated Orchard & Farm Estate Plots",
      titleTa: "ஆரஞ்ச் கார்டன்: பழத்தோட்ட எஸ்டேட் & பண்ணை நிலங்கள்",
      location: "Scenic Green Belt, Madurai District",
      locationTa: "இயற்கை எழில் கொஞ்சும் பசுமை மண்டலம், மதுரை",
      propertyType: "Orchard & Farmhouse Parcels",
      suitability: "Fruit Cultivation & Private Retreat",
      status: "2026 Active Development",
      description:
        "A premium farm estate project offering expansive opportunities for fruit orchard development, customized private farmhouse ownership, and family heritage investment in a tranquil, eco-friendly rural setting.",
      descriptionTa:
        "பழத்தோட்ட மேம்பாடு, பண்ணை வீடு உரிமை மற்றும் குடும்ப சந்ததிக்கான பாதுகாப்பான முதலீட்டிற்கு ஏற்ற பிரீமியம் பண்ணைத் திட்டம்.",
      image: "/images/projects/orange-garden.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Orchard+Land",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="featured-projects" className="w-full bg-[#FFFFFF] py-12 md:py-20 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header (Matching Screenshot 2) */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
            <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-[#B45309]">
              {language === "ta" ? "சரிபார்க்கப்பட்ட திட்ட ஆவணங்கள்" : "VERIFIED PROPERTY RECORDS"}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
            {language === "ta" ? "சிறப்பு திட்டங்கள் & நில மேம்பாடுகள்" : "Featured Property & Land Developments"}
          </h2>

          <p className="text-base text-[#6B7280]">
            {language === "ta"
              ? "மதுரை மற்றும் அதன் முக்கிய வழித்தடங்களில் கவனமாக தேர்ந்தெடுக்கப்பட்ட வணிக மற்றும் பண்ணைத் திட்டங்கள்."
              : "Explore our verified portfolio of commercial development land, agricultural farms, and gated layouts across Madurai."}
          </p>
        </div>

        {/* Filter Pills Bar (Matching Screenshot 2) */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-5">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeFilter === "all"
                ? "bg-[#EAB308] text-[#0A0D12] shadow-xs"
                : "bg-gray-100 text-[#4B5563] hover:bg-gray-200"
            }`}
          >
            {language === "ta" ? "அனைத்து திட்டங்கள்" : "ALL PROJECTS"}
          </button>

          <button
            onClick={() => setActiveFilter("commercial")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeFilter === "commercial"
                ? "bg-[#EAB308] text-[#0A0D12] shadow-xs"
                : "bg-gray-100 text-[#4B5563] hover:bg-gray-200"
            }`}
          >
            {language === "ta" ? "வணிக நிலங்கள்" : "COMMERCIAL LAND"}
          </button>

          <button
            onClick={() => setActiveFilter("farm")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              activeFilter === "farm"
                ? "bg-[#EAB308] text-[#0A0D12] shadow-xs"
                : "bg-gray-100 text-[#4B5563] hover:bg-gray-200"
            }`}
          >
            {language === "ta" ? "பண்ணை & விவசாய நிலங்கள்" : "FARM PLOTS & ORCHARDS"}
          </button>
        </div>

        {/* Project Cards in Zig-Zag Alternating Layout */}
        <div className="mt-8 space-y-10">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-lg transition-all"
              >
                {/* Card Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#EAB308]">
                      {project.num}
                    </span>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309] block">
                        {language === "ta" ? project.categoryBadgeTa : project.categoryBadge}
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium flex items-center gap-1.5 mt-0.5">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        {language === "ta" ? project.locationTa : project.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>2026 ONGOING</span>
                  </div>
                </div>

                {/* Card Body: Zig-Zag Alternating 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div
                    className={`order-1 lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Details Column */}
                  <div
                    className={`order-2 lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827] leading-snug">
                      {language === "ta" ? project.titleTa : project.title}
                    </h3>

                    {/* 2x2 Meta Grid (Matching Reference) */}
                    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-[#F9FAFB] p-4 text-xs">
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                          STRUCTURE / PROPERTY TYPE
                        </span>
                        <span className="block font-display text-sm font-bold text-[#111827] mt-0.5">
                          {project.propertyType}
                        </span>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                          SUITABILITY & SCOPE
                        </span>
                        <span className="block font-display text-sm font-bold text-[#111827] mt-0.5">
                          {project.suitability}
                        </span>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                          LOCATION
                        </span>
                        <span className="block font-display text-sm font-bold text-[#111827] mt-0.5">
                          {project.location}
                        </span>
                      </div>

                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                          PROJECT STATUS
                        </span>
                        <span className="block font-display text-sm font-bold text-emerald-700 mt-0.5">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-[#4B5563]">
                      {language === "ta" ? project.descriptionTa : project.description}
                    </p>

                    {/* Bottom Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {/* Primary Button: Price & Info (WhatsApp) */}
                      <a
                        href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20share%20price%20and%20details%20for%20${encodeURIComponent(
                          project.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#0A0D12] shadow-sm hover:bg-[#ca9a07] transition"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{language === "ta" ? "விலை & விவரங்கள்" : "Price & Info"}</span>
                      </a>

                      {/* Secondary Button: Book Site Visit */}
                      <a
                        href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(
                          project.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#111827] hover:bg-gray-50 transition"
                      >
                        <Calendar className="h-4 w-4 text-[#B45309]" />
                        <span>{language === "ta" ? "நேரடி பார்வை பதிவு" : "Site Visit"}</span>
                      </a>

                      {/* Details Link */}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#EAB308] transition ml-auto"
                      >
                        <span>{language === "ta" ? "முழு விவரங்கள்" : "View Details"}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
