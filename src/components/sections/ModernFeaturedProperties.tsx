"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Calendar, MessageSquare, MapPin, CheckCircle2, Clock } from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  slug: string;
  projectType: "running" | "completed";
  category: "commercial" | "farm" | "residential";
  categoryBadge: string;
  categoryBadgeTa: string;
  title: string;
  titleTa: string;
  location: string;
  locationTa: string;
  propertyType: string;
  suitability: string;
  statusBadge: string;
  statusBadgeTa: string;
  statusText: string;
  statusTextTa: string;
  description: string;
  descriptionTa: string;
  image: string;
  googleMapsUrl: string;
}

export default function ModernFeaturedProperties() {
  const { language } = useLanguage();
  const [activeType, setActiveType] = useState<"all" | "running" | "completed">("all");
  const [activeCategory, setActiveCategory] = useState<"all" | "commercial" | "farm" | "residential">("all");

  const projects: ProjectItem[] = [
    {
      id: "vaigai-elite",
      num: "01",
      slug: "vaigai-elite-commercial-land",
      projectType: "running",
      category: "commercial",
      categoryBadge: "COMMERCIAL LAND · HIGHWAY LOGISTICS CORRIDOR",
      categoryBadgeTa: "வணிக நிலம் · நெடுஞ்சாலை வழித்தடம்",
      title: "Vaigai Elite: Prime Highway Commercial Acreage",
      titleTa: "வைகை எலைட்: முதன்மையான நெடுஞ்சாலை வணிக நிலம்",
      location: "Madurai Outer Ring Road (NH-44), Madurai",
      locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44), மதுரை",
      propertyType: "Commercial Highway Land",
      suitability: "Hospitals, Warehouses & Hospitality",
      statusBadge: "2026 RUNNING PROJECT",
      statusBadgeTa: "2026 நடைபெறும் திட்டம்",
      statusText: "2026 Active Running Development",
      statusTextTa: "2026 தீவிர செயல்பாட்டில்",
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
      projectType: "running",
      category: "farm",
      categoryBadge: "AGRICULTURAL FARM PLOTS · WATER-RICH BELT",
      categoryBadgeTa: "விவசாயப் பண்ணை நிலம் · வளமான நீர்வளம்",
      title: "Madurai Farms & Fruits: Managed Organic Agro-Acreage",
      titleTa: "மதுரை ஃபார்ம்ஸ் & ஃப்ரூட்ஸ்: இயற்கை பண்ணை நிலங்கள்",
      location: "Agricultural Belt, Madurai Surroundings",
      locationTa: "விவசாய மண்டலம், மதுரை சுற்றுவட்டாரம்",
      propertyType: "Fertile Agro & Farm Land",
      suitability: "Farmhouse, Horticulture & Wealth Hedge",
      statusBadge: "2026 RUNNING PROJECT",
      statusBadgeTa: "2026 நடைபெறும் திட்டம்",
      statusText: "2026 Active Running Development",
      statusTextTa: "2026 தீவிர செயல்பாட்டில்",
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
      projectType: "completed",
      category: "farm",
      categoryBadge: "ORCHARD ESTATE · GATED FARMHOUSE COMMUNITY",
      categoryBadgeTa: "பழத்தோட்ட எஸ்டேட் · பண்ணை வீடு குடியிருப்பு",
      title: "Orange Garden: Gated Orchard & Farm Estate Plots",
      titleTa: "ஆரஞ்ச் கார்டன்: பழத்தோட்ட எஸ்டேட் & பண்ணை நிலங்கள்",
      location: "Scenic Green Belt, Madurai District",
      locationTa: "இயற்கை எழில் கொஞ்சும் பசுமை மண்டலம், மதுரை",
      propertyType: "Orchard & Farmhouse Parcels",
      suitability: "Fruit Cultivation & Private Retreat",
      statusBadge: "COMPLETED PROJECT",
      statusBadgeTa: "நிறைவடைந்த திட்டம்",
      statusText: "100% Completed & Delivered",
      statusTextTa: "முழுமையாக நிறைவடைந்து ஒப்படைக்கப்பட்டது",
      description:
        "A premium farm estate project offering expansive opportunities for fruit orchard development, customized private farmhouse ownership, and family heritage investment in a tranquil, eco-friendly rural setting.",
      descriptionTa:
        "பழத்தோட்ட மேம்பாடு, பண்ணை வீடு உரிமை மற்றும் குடும்ப சந்ததிக்கான பாதுகாப்பான முதலீட்டிற்கு ஏற்ற பிரீமியம் பண்ணைத் திட்டம்.",
      image: "/images/projects/orange-garden.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Orchard+Land",
    },
    {
      id: "surya-green-enclave",
      num: "04",
      slug: "surya-green-enclave",
      projectType: "completed",
      category: "residential",
      categoryBadge: "RESIDENTIAL TOWNSHIP · DTCP & RERA APPROVED",
      categoryBadgeTa: "குடியிருப்பு மனைப்பிரிவு · DTCP & RERA அனுமதி",
      title: "Surya Green Enclave: Gated Residential Township",
      titleTa: "சூர்யா கிரீன் என்கிளேவ்: பிரீமியம் குடியிருப்பு மனைப்பிரிவு",
      location: "Madurai Fast-Growth Residential Corridor",
      locationTa: "வேகமாக வளரும் குடியிருப்பு பகுதி, மதுரை",
      propertyType: "DTCP Approved Residential Plots",
      suitability: "Independent Villas, Immediate Construction",
      statusBadge: "COMPLETED & DELIVERED",
      statusBadgeTa: "முழுமையாக நிறைவடைந்தது",
      statusText: "100% Sold Out & Successfully Delivered",
      statusTextTa: "முழுமையாக முடிக்கப்பட்டு பதிவு செய்யப்பட்டது",
      description:
        "Fully completed and delivered DTCP approved gated community residential layout with wide 30ft & 40ft blacktop roads, avenues of shade trees, streetlights, individual water connections, and clear individual patta deeds.",
      descriptionTa:
        "அகலமான 30 & 40 அடி தார்ச் சாலைகள், மரக்கன்றுகள், தெருவிளக்குகள் மற்றும் 100% தெளிவான பட்டா ஆவணங்களுடன் வெற்றிகரமாக முடிக்கப்பட்டு வாடிக்கையாளர்களிடம் ஒப்படைக்கப்பட்ட பிரீமியம் குடியிருப்பு மனைப்பிரிவு.",
      image: "/images/projects/vaigai-commercial.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Residential+Plots",
    },
  ];

  const runningCount = projects.filter((p) => p.projectType === "running").length;
  const completedCount = projects.filter((p) => p.projectType === "completed").length;

  const filteredProjects = projects.filter((p) => {
    if (activeType !== "all" && p.projectType !== activeType) return false;
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="featured-projects" className="w-full bg-[#FFFFFF] py-12 md:py-20 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
            <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-[#B45309]">
              {language === "ta" ? "சரிபார்க்கப்பட்ட திட்ட ஆவணங்கள்" : "VERIFIED PROPERTY DEVELOPMENTS"}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
            {language === "ta"
              ? "நடைபெறும் & நிறைவடைந்த திட்டங்கள்"
              : "Running & Completed Projects"}
          </h2>

          <p className="text-base text-[#6B7280]">
            {language === "ta"
              ? "மதுரை மற்றும் அதன் சுற்றுவட்டாரப் பகுதிகளில் சூர்யா புரமோட்டர்ஸின் தீவிர செயல்பாட்டில் உள்ள திட்டங்கள் மற்றும் வெற்றிகரமாக முடிக்கப்பட்ட நில மேம்பாடுகளைக் காண்க."
              : "Explore our active ongoing land developments and successfully delivered, registered layouts across Madurai."}
          </p>
        </div>

        {/* Dual-Level Filter Bar: 1. Project Type (Running vs Completed) + 2. Categories */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
          {/* Main 2 Types: Running Projects & Completed Projects */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActiveType("all")}
              className={`rounded-xl px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeType === "all"
                  ? "bg-[#0A0D12] text-white shadow-sm"
                  : "bg-gray-100 text-[#4B5563] hover:bg-gray-200"
              }`}
            >
              <span>{language === "ta" ? "அனைத்து திட்டங்கள்" : "ALL PROJECTS"}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeType === "all" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"}`}>
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveType("running")}
              className={`rounded-xl px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeType === "running"
                  ? "bg-[#EAB308] text-[#0A0D12] shadow-sm font-extrabold"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === "ta" ? "நடைபெறும் திட்டங்கள்" : "RUNNING PROJECTS"}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeType === "running" ? "bg-[#0A0D12]/20 text-[#0A0D12]" : "bg-emerald-200/70 text-emerald-900"}`}>
                {runningCount}
              </span>
            </button>

            <button
              onClick={() => setActiveType("completed")}
              className={`rounded-xl px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeType === "completed"
                  ? "bg-[#0A0D12] text-white shadow-sm font-extrabold"
                  : "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
              <span>{language === "ta" ? "நிறைவடைந்த திட்டங்கள்" : "COMPLETED PROJECTS"}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeType === "completed" ? "bg-white/20 text-white" : "bg-blue-200/70 text-blue-900"}`}>
                {completedCount}
              </span>
            </button>
          </div>

          {/* Sub-Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-mono text-[11px] font-semibold text-gray-400 uppercase tracking-wider mr-1">
              {language === "ta" ? "வகை:" : "Filter:"}
            </span>
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeCategory === "all" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("commercial")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeCategory === "commercial" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveCategory("farm")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeCategory === "farm" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Farm Plots
            </button>
            <button
              onClick={() => setActiveCategory("residential")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeCategory === "residential" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Project Cards in Zig-Zag Alternating Layout */}
        <div className="mt-8 space-y-10">
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              <p className="font-display text-lg font-bold">No projects found in this category.</p>
              <button
                onClick={() => {
                  setActiveType("all");
                  setActiveCategory("all");
                }}
                className="mt-3 text-xs font-mono font-bold text-[#B45309] underline uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isRunning = project.projectType === "running";

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

                    {/* Status Badge: Running vs Completed */}
                    {isRunning ? (
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-xs">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{language === "ta" ? project.statusBadgeTa : project.statusBadge}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                        <span>{language === "ta" ? project.statusBadgeTa : project.statusBadge}</span>
                      </div>
                    )}
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
                        
                        {/* Overlay Tag on Image */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono font-bold text-white px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-xs">
                          <span>{project.propertyType}</span>
                          <span className={isRunning ? "text-emerald-400" : "text-blue-300"}>
                            {isRunning ? "● Active Development" : "✓ Delivered"}
                          </span>
                        </div>
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

                      {/* 2x2 Meta Grid */}
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
                            {language === "ta" ? project.locationTa : project.location}
                          </span>
                        </div>

                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                            PROJECT STATUS
                          </span>
                          <span className={`block font-display text-sm font-bold mt-0.5 ${
                            isRunning ? "text-emerald-700" : "text-blue-700"
                          }`}>
                            {language === "ta" ? project.statusTextTa : project.statusText}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-[#4B5563]">
                        {language === "ta" ? project.descriptionTa : project.description}
                      </p>

                      {/* Bottom Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {isRunning ? (
                          <>
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
                          </>
                        ) : (
                          <>
                            {/* For Completed: Inquire Similar Project */}
                            <a
                              href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20saw%20your%20completed%20project%20${encodeURIComponent(
                                project.title
                              )}%20and%20would%20like%20to%20inquire%20about%20similar%20upcoming%20developments.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-[#0A0D12] px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-gray-800 transition"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                              <span>{language === "ta" ? "இதே போன்ற நிலம் தேவை" : "Enquire Similar Land"}</span>
                            </a>

                            {/* Secondary: WhatsApp details */}
                            <a
                              href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20share%20the%20archive%20details%20and%20layout%20plan%20for%20${encodeURIComponent(
                                project.title
                              )}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#111827] hover:bg-gray-50 transition"
                            >
                              <Calendar className="h-4 w-4 text-blue-600" />
                              <span>{language === "ta" ? "ஆவண விவரங்கள்" : "Project Archive"}</span>
                            </a>
                          </>
                        )}

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
            })
          )}
        </div>

      </div>
    </section>
  );
}
