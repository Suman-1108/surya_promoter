"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Building2,
  Wheat,
  Home,
  ShieldCheck,
  Layers,
  ExternalLink,
  MessageCircle,
  Phone,
  Droplets,
  Truck,
  Sparkles,
} from "lucide-react";

interface IconSpec {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  labelTa: string;
}

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
  statusBadge: string;
  statusBadgeTa: string;
  image: string;
  googleMapsUrl: string;
  mapBhoomiUrl?: string;
  iconSpecs: IconSpec[];
}

export default function ModernFeaturedProperties() {
  const router = useRouter();
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
      categoryBadge: "Commercial Highway Land",
      categoryBadgeTa: "வணிக நெடுஞ்சாலை நிலம்",
      title: "Vaigai Elite Commercial Land",
      titleTa: "வைகை எலைட் வணிக நிலம்",
      location: "Madurai Outer Ring Road (NH-44)",
      locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44)",
      propertyType: "Commercial Zone",
      statusBadge: "2026 RUNNING",
      statusBadgeTa: "2026 நடைபெறுகிறது",
      image: "/images/projects/vaigai/corridor-aerial.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Tamil+Nadu",
      mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
      iconSpecs: [
        { icon: Building2, label: "Commercial Zone", labelTa: "வணிக மண்டலம்" },
        { icon: Truck, label: "NH-44 Frontage", labelTa: "NH-44 முகப்பு" },
        { icon: ShieldCheck, label: "100% Clear Patta", labelTa: "தெளிவான பட்டா" },
        { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
      ],
    },
    {
      id: "madurai-farms",
      num: "02",
      slug: "madurai-farms-and-fruits",
      projectType: "running",
      category: "farm",
      categoryBadge: "Agro Farm Plots",
      categoryBadgeTa: "விவசாயப் பண்ணை நிலம்",
      title: "Madurai Farms & Fruits",
      titleTa: "மதுரை ஃபார்ம்ஸ் & ஃப்ரூட்ஸ்",
      location: "Agricultural Belt, Madurai",
      locationTa: "விவசாய மண்டலம், மதுரை",
      propertyType: "Fertile Farmland",
      statusBadge: "2026 RUNNING",
      statusBadgeTa: "2026 நடைபெறுகிறது",
      image: "/images/projects/madurai-farms/aerial-cottage.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Tamil+Nadu+Farm+Land",
      mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-acres",
      iconSpecs: [
        { icon: Wheat, label: "Fertile Farmland", labelTa: "செழிப்பான பண்ணை" },
        { icon: Droplets, label: "Sweet Groundwater", labelTa: "சுத்தமான நீர்வளம்" },
        { icon: ShieldCheck, label: "Clear FMB Survey", labelTa: "துல்லிய FMB சர்வே" },
        { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
      ],
    },
    {
      id: "orange-garden",
      num: "03",
      slug: "orange-garden",
      projectType: "completed",
      category: "farm",
      categoryBadge: "Gated Orchard Estate",
      categoryBadgeTa: "பழத்தோட்ட எஸ்டேட்",
      title: "Orange Garden Orchard Estate",
      titleTa: "ஆரஞ்ச் கார்டன் பழத்தோட்ட எஸ்டேட்",
      location: "Scenic Green Belt, Madurai",
      locationTa: "பசுமை மண்டலம், மதுரை",
      propertyType: "Orchard Community",
      statusBadge: "COMPLETED",
      statusBadgeTa: "நிறைவடைந்தது",
      image: "/images/projects/orange-garden/hero-orchard.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Orchard+Land",
      iconSpecs: [
        { icon: Wheat, label: "Harvested Orchards", labelTa: "பழத்தோட்டங்கள்" },
        { icon: Home, label: "Farmhouse Plots", labelTa: "பண்ணை வீடு" },
        { icon: ShieldCheck, label: "Registered Patta", labelTa: "பதிவு செய்யப்பட்ட பட்டா" },
        { icon: CheckCircle2, label: "100% Delivered", labelTa: "ஒப்படைக்கப்பட்டது" },
      ],
    },
    {
      id: "surya-green-enclave",
      num: "04",
      slug: "surya-green-enclave",
      projectType: "completed",
      category: "residential",
      categoryBadge: "DTCP & RERA Township",
      categoryBadgeTa: "DTCP & RERA மனைப்பிரிவு",
      title: "Surya Green Enclave",
      titleTa: "சூர்யா கிரீன் என்கிளேவ்",
      location: "Mudukangulam Road, Madurai",
      locationTa: "முதுகுளத்தூர் சாலை, மதுரை",
      propertyType: "Gated Community",
      statusBadge: "COMPLETED",
      statusBadgeTa: "நிறைவடைந்தது",
      image: "/images/projects/surya-green-enclave/road-corridor.jpg",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Residential+Plots",
      iconSpecs: [
        { icon: Home, label: "DTCP & RERA Approved", labelTa: "DTCP மனைப்பிரிவு" },
        { icon: Sparkles, label: "30-40ft Bitumen Road", labelTa: "அகலமான தார்ச்சாலை" },
        { icon: ShieldCheck, label: "Individual Patta", labelTa: "தனிநபர் பட்டா" },
        { icon: CheckCircle2, label: "100% Delivered", labelTa: "ஒப்படைக்கப்பட்டது" },
      ],
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
    <section id="featured-projects" className="w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
                <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-[#B45309]">
                  {language === "ta" ? "சரிபார்க்கப்பட்ட திட்டங்கள்" : "VERIFIED PROJECT PORTFOLIO"}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
                {language === "ta"
                  ? "நடைபெறும் & நிறைவடைந்த திட்டங்கள்"
                  : "Running & Completed Projects"}
              </h2>

              <p className="text-sm sm:text-base text-[#6B7280]">
                {language === "ta"
                  ? "மதுரையின் முதன்மையான வணிக, விவசாய மற்றும் குடியிருப்பு திட்டங்களை ஆராய்ந்து நேரடியாக வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்."
                  : "Explore our active ongoing and delivered land developments across Madurai with instant WhatsApp inquiry."}
              </p>
            </div>

            {/* View Complete Portfolio Link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#B45309] transition shrink-0"
            >
              <span>{language === "ta" ? "அனைத்து திட்டங்கள்" : "View Complete Record"}</span>
              <ArrowRight className="h-4 w-4 text-[#EAB308]" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Dual-Level Filter Bar: Running vs Completed + Categories */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-y border-gray-200/80 py-4">
            
            {/* Main 2 Types: Running Projects & Completed Projects */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveType("all")}
                className={`rounded-xl px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeType === "all"
                    ? "bg-[#0A0D12] text-white shadow-xs"
                    : "bg-gray-100 text-[#4B5563] hover:bg-gray-200"
                }`}
              >
                <span>{language === "ta" ? "அனைத்து" : "ALL PROJECTS"}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeType === "all" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {projects.length}
                </span>
              </button>

              <button
                onClick={() => setActiveType("running")}
                className={`rounded-xl px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeType === "running"
                    ? "bg-[#EAB308] text-[#0A0D12] shadow-xs font-extrabold"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{language === "ta" ? "நடைபெறுபவை" : "RUNNING"}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeType === "running" ? "bg-[#0A0D12]/20 text-[#0A0D12]" : "bg-emerald-200/70 text-emerald-900"}`}>
                  {runningCount}
                </span>
              </button>

              <button
                onClick={() => setActiveType("completed")}
                className={`rounded-xl px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeType === "completed"
                    ? "bg-[#0A0D12] text-white shadow-xs font-extrabold"
                    : "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
                }`}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span>{language === "ta" ? "நிறைவடைந்தவை" : "COMPLETED"}</span>
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
        </ScrollReveal>

        {/* Mobile Ad / App Style Project Card Grid Layout */}
        <div className="mt-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredProjects.map((project, index) => {
                const isRunning = project.projectType === "running";
                const whatsappMsg = `Hello Surya Promoters, please share price, layout plan and details for ${project.title}.`;

                return (
                  <ScrollReveal
                    key={project.id}
                    direction="up"
                    delay={index * 0.08}
                    distance={30}
                    duration={0.6}
                  >
                    <div
                      onClick={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.closest("a, button")) return;
                        router.push(`/projects/${project.slug}`);
                      }}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-xs hover:shadow-2xl hover:border-[#EAB308] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                    >
                      {/* Top Visual Image Banner (Mobile Ad Style) */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                        {/* Top Badges Strip */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                          {/* Category Badge */}
                          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm truncate max-w-[170px]">
                            {language === "ta" ? project.categoryBadgeTa : project.categoryBadge}
                          </span>

                          {/* Status Badge: Running vs Completed */}
                          {isRunning ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm border border-emerald-400/30 shrink-0">
                              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                              <span>{language === "ta" ? project.statusBadgeTa : project.statusBadge}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm border border-blue-400/30 shrink-0">
                              <CheckCircle2 className="h-3 w-3 text-white" />
                              <span>{language === "ta" ? project.statusBadgeTa : project.statusBadge}</span>
                            </span>
                          )}
                        </div>

                        {/* Optional 3D Map Live Tag */}
                        {project.mapBhoomiUrl && (
                          <div className="absolute bottom-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#0A0D12]/90 border border-[#EAB308]/60 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#EAB308] shadow-sm backdrop-blur-xs">
                              <Layers className="h-3 w-3 text-[#EAB308]" />
                              <span>3D Map Live</span>
                            </span>
                          </div>
                        )}

                        {/* Project Index Number on bottom right */}
                        <div className="absolute bottom-2.5 right-3 font-mono text-xs font-extrabold text-white/80 drop-shadow-md">
                          #{project.num}
                        </div>
                      </div>

                      {/* Card Middle: Title, Location, and 2x2 Icon-Only Spec Matrix */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          {/* Project Title */}
                          <h3 className="font-display text-lg font-bold text-[#111827] group-hover:text-[#B45309] transition-colors leading-snug line-clamp-1">
                            {language === "ta" ? project.titleTa : project.title}
                          </h3>

                          {/* Location with Pin Icon */}
                          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-medium mt-1 truncate">
                            <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                            <span className="truncate">{language === "ta" ? project.locationTa : project.location}</span>
                          </div>
                        </div>

                        {/* Icon-Only Project Features Matrix (2x2 Compact Grid - No Long Paragraphs) */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                          {project.iconSpecs.map((spec, i) => {
                            const IconComp = spec.icon;
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-2 rounded-xl bg-gray-50/90 px-2.5 py-2 border border-gray-100/90 hover:bg-gray-100/80 transition"
                              >
                                <IconComp className="h-3.5 w-3.5 text-[#B45309] shrink-0" />
                                <span className="font-mono text-[10px] font-semibold text-[#374151] truncate">
                                  {language === "ta" ? spec.labelTa : spec.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Mobile Ad Action Bar: Prominent Chat Icon Button + Action Icons */}
                      <div className="p-4 pt-0 border-t border-gray-100/80 mt-auto">
                        <div className="flex items-center gap-2 pt-3">
                          {/* Primary Mobile Ad Action: WhatsApp Chat Button */}
                          <a
                            href={`https://wa.me/917708966452?text=${encodeURIComponent(whatsappMsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 font-display text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-md hover:scale-[1.02] transition-all"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="h-4 w-4 fill-white text-white" />
                            <span>{language === "ta" ? "வாட்ஸ்அப் சாட்" : "Chat Now"}</span>
                          </a>

                          {/* Quick Call Button */}
                          <a
                            href="tel:+917708966452"
                            onClick={(e) => e.stopPropagation()}
                            className="h-9 w-9 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#0A0D12] transition shadow-2xs"
                            title="Call Surya Promoters"
                          >
                            <Phone className="h-4 w-4" />
                          </a>

                          {/* Quick 3D Map / View Details Icon */}
                          {project.mapBhoomiUrl ? (
                            <a
                              href={project.mapBhoomiUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="h-9 w-9 flex items-center justify-center rounded-xl border border-[#EAB308]/60 bg-[#0A0D12] text-[#EAB308] hover:bg-black transition shadow-2xs"
                              title="Open 3D Layout Map"
                            >
                              <Layers className="h-4 w-4" />
                            </a>
                          ) : (
                            <div
                              className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-900 text-white group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] transition shadow-2xs"
                              title="View Project"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
