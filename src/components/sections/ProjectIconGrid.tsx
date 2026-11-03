"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  Building2,
  Wheat,
  Home,
  Layers,
  MessageCircle,
  Phone,
  Calendar,
  ShieldCheck,
  Camera,
  MapPin,
  Award,
  Compass,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  X,
  LayoutGrid,
  Smartphone,
  CheckCircle2,
  Droplets,
  Truck,
  Sparkles,
  Info,
} from "lucide-react";

interface ProjectApp {
  id: string;
  slug: string;
  name: string;
  nameTa: string;
  tagline: string;
  taglineTa: string;
  category: "commercial" | "farm" | "residential";
  categoryLabel: string;
  categoryLabelTa: string;
  projectType: "running" | "completed" | "upcoming";
  statusText: string;
  statusTextTa: string;
  location: string;
  locationTa: string;
  image: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  mapBhoomiUrl?: string;
  googleMapsUrl: string;
  specs: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    labelTa: string;
  }[];
}

interface UtilityApp {
  id: string;
  name: string;
  nameTa: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  actionType: "link" | "external" | "tel" | "whatsapp";
  targetUrl: string;
}

export default function ProjectIconGrid() {
  const router = useRouter();
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectApp | null>(null);
  const [viewMode, setViewMode] = useState<"icons" | "cards">("icons");
  const [filterType, setFilterType] = useState<"all" | "running" | "upcoming" | "completed">("all");

  const projectApps: ProjectApp[] = [
    {
      id: "vaigai-elite",
      slug: "vaigai-elite-commercial-land",
      name: "Vaigai Elite",
      nameTa: "வைகை எலைட்",
      tagline: "Prime Highway Commercial Acreage",
      taglineTa: "நெடுஞ்சாலை வணிக நிலம்",
      category: "commercial",
      categoryLabel: "Commercial Highway Land",
      categoryLabelTa: "வணிக நெடுஞ்சாலை நிலம்",
      projectType: "running",
      statusText: "2026 RUNNING",
      statusTextTa: "2026 நடைபெறுகிறது",
      location: "Madurai Outer Ring Road (NH-44)",
      locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44)",
      image: "/images/projects/vaigai/corridor-aerial.jpg",
      gradient: "from-amber-500 via-orange-600 to-amber-700",
      icon: Building2,
      mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Tamil+Nadu",
      specs: [
        { icon: Building2, label: "Commercial Zone", labelTa: "வணிக மண்டலம்" },
        { icon: Truck, label: "NH-44 Frontage", labelTa: "NH-44 முகப்பு" },
        { icon: ShieldCheck, label: "100% Clear Patta", labelTa: "தெளிவான பட்டா" },
        { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
      ],
    },
    {
      id: "madurai-farms",
      slug: "madurai-farms-and-fruits",
      name: "Madurai Farms",
      nameTa: "மதுரை ஃபார்ம்ஸ்",
      tagline: "Managed Organic Agro-Acreage",
      taglineTa: "இயற்கை பண்ணை நிலங்கள்",
      category: "farm",
      categoryLabel: "Agro Farm Plots",
      categoryLabelTa: "விவசாயப் பண்ணை நிலம்",
      projectType: "running",
      statusText: "2026 RUNNING",
      statusTextTa: "2026 நடைபெறுகிறது",
      location: "Agricultural Belt, Madurai",
      locationTa: "விவசாய மண்டலம், மதுரை",
      image: "/images/projects/madurai-farms/aerial-cottage.jpg",
      gradient: "from-emerald-500 via-green-600 to-teal-700",
      icon: Wheat,
      mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-acres",
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Tamil+Nadu+Farm+Land",
      specs: [
        { icon: Wheat, label: "Fertile Farmland", labelTa: "செழிப்பான பண்ணை" },
        { icon: Droplets, label: "Sweet Groundwater", labelTa: "சுத்தமான நீர்வளம்" },
        { icon: ShieldCheck, label: "Clear FMB Survey", labelTa: "துல்லிய FMB சர்வே" },
        { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
      ],
    },
    {
      id: "orange-garden",
      slug: "orange-garden",
      name: "Orange Garden",
      nameTa: "ஆரஞ்ச் கார்டன்",
      tagline: "Gated Orchard & Farm Estate",
      taglineTa: "பழத்தோட்ட எஸ்டேட் மனைகள்",
      category: "farm",
      categoryLabel: "Gated Orchard Estate",
      categoryLabelTa: "பழத்தோட்ட எஸ்டேட்",
      projectType: "upcoming",
      statusText: "UPCOMING PROJECT",
      statusTextTa: "வரவிருக்கும் திட்டம்",
      location: "Scenic Green Belt, Madurai",
      locationTa: "பசுமை மண்டலம், மதுரை",
      image: "/images/projects/orange-garden/hero-orchard.jpg",
      gradient: "from-amber-500 via-orange-500 to-amber-700",
      icon: Wheat,
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Orchard+Land",
      specs: [
        { icon: Wheat, label: "Harvested Orchards", labelTa: "பழத்தோட்டங்கள்" },
        { icon: Home, label: "Farmhouse Plots", labelTa: "பண்ணை வீடு" },
        { icon: ShieldCheck, label: "Registered Patta", labelTa: "பதிவு செய்யப்பட்ட பட்டா" },
        { icon: Sparkles, label: "Launching Soon", labelTa: "விரைவில் தொடக்கம்" },
      ],
    },
    {
      id: "surya-green-enclave",
      slug: "surya-green-enclave",
      name: "Green Enclave",
      nameTa: "கிரீன் என்கிளேவ்",
      tagline: "DTCP & RERA Approved Township",
      taglineTa: "DTCP & RERA மனைப்பிரிவு",
      category: "residential",
      categoryLabel: "DTCP & RERA Township",
      categoryLabelTa: "DTCP & RERA மனைப்பிரிவு",
      projectType: "completed",
      statusText: "100% COMPLETED",
      statusTextTa: "நிறைவடைந்தது",
      location: "Mudukangulam Road, Madurai",
      locationTa: "முதுகுளத்தூர் சாலை, மதுரை",
      image: "/images/projects/surya-green-enclave/road-corridor.jpg",
      gradient: "from-blue-600 via-indigo-600 to-sky-700",
      icon: Home,
      googleMapsUrl: "https://maps.google.com/?q=Madurai+Residential+Plots",
      specs: [
        { icon: Home, label: "DTCP & RERA Approved", labelTa: "DTCP மனைப்பிரிவு" },
        { icon: Sparkles, label: "30-40ft Bitumen Road", labelTa: "அகலமான தார்ச்சாலை" },
        { icon: ShieldCheck, label: "Individual Patta", labelTa: "தனிநபர் பட்டா" },
        { icon: CheckCircle2, label: "100% Delivered", labelTa: "ஒப்படைக்கப்பட்டது" },
      ],
    },
  ];

  const utilityApps: UtilityApp[] = [
    {
      id: "whatsapp",
      name: "Chat Now",
      nameTa: "வாட்ஸ்அப்",
      badge: "Fast",
      icon: MessageCircle,
      gradient: "from-emerald-500 to-green-600",
      actionType: "whatsapp",
      targetUrl: "https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots.",
    },
    {
      id: "call",
      name: "Direct Call",
      nameTa: "நேரடி அழைப்பு",
      icon: Phone,
      gradient: "from-blue-500 to-blue-700",
      actionType: "tel",
      targetUrl: "tel:+917708966452",
    },
    {
      id: "mapbhoomi",
      name: "3D Masterplan",
      nameTa: "3D வரைபடம்",
      badge: "Live 3D",
      icon: Layers,
      gradient: "from-amber-500 to-yellow-600",
      actionType: "external",
      targetUrl: "https://mapbhoomi.com/l/surya-promoters",
    },
    {
      id: "gallery",
      name: "Site Photos",
      nameTa: "புகைப்படங்கள்",
      icon: Camera,
      gradient: "from-purple-500 to-indigo-600",
      actionType: "link",
      targetUrl: "/gallery",
    },
    {
      id: "location",
      name: "Google Maps",
      nameTa: "கூகுள் வரைபடம்",
      icon: MapPin,
      gradient: "from-red-500 to-pink-600",
      actionType: "external",
      targetUrl: "https://maps.google.com/?q=Surya+Promoters+Madurai",
    },
  ];

  const filteredProjects = projectApps.filter((p) => {
    if (filterType === "all") return true;
    return p.projectType === filterType;
  });

  return (
    <div className="relative min-h-[calc(100vh-140px)] w-full bg-[#0A0D12] text-white py-8 sm:py-12 overflow-hidden flex flex-col justify-center">
      {/* Ambient Mobile Wallpaper Glow Elements (matches mobile wallpaper reference) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-[#EAB308]/15 via-[#B45309]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#EAB308]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top OS Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#EAB308]">
                {language === "ta" ? "சூர்யா புரமோட்டர்ஸ் · மதுரை" : "SURYA PROMOTERS · MADURAI"}
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
              {language === "ta" ? "திட்டங்கள் & சேவைகள்" : "Projects & Quick Actions"}
            </h1>
          </div>

          {/* Filter Pills + View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-1 rounded-2xl backdrop-blur-md">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition ${
                  filterType === "all" ? "bg-[#EAB308] text-[#0A0D12]" : "text-gray-300 hover:text-white"
                }`}
              >
                {language === "ta" ? "அனைத்து" : "All"} ({projectApps.length})
              </button>
              <button
                onClick={() => setFilterType("running")}
                className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                  filterType === "running" ? "bg-emerald-500 text-white font-extrabold" : "text-emerald-400 hover:text-emerald-300"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>{language === "ta" ? "நடைபெறுபவை" : "Running"} (2)</span>
              </button>
              <button
                onClick={() => setFilterType("upcoming")}
                className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                  filterType === "upcoming" ? "bg-[#EAB308] text-[#0A0D12] font-extrabold" : "text-amber-400 hover:text-amber-300"
                }`}
              >
                <Sparkles className="h-3 w-3" />
                <span>{language === "ta" ? "வரவிருக்கும் திட்டம்" : "Upcoming"} (1)</span>
              </button>
              <button
                onClick={() => setFilterType("completed")}
                className={`px-3 py-1.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                  filterType === "completed" ? "bg-blue-600 text-white font-extrabold" : "text-blue-400 hover:text-blue-300"
                }`}
              >
                <CheckCircle2 className="h-3 w-3" />
                <span>{language === "ta" ? "நிறைவடைந்தவை" : "Completed"} (1)</span>
              </button>
            </div>

            {/* View Mode Toggle: Icons vs Full Cards */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-2xl backdrop-blur-md">
              <button
                onClick={() => setViewMode("icons")}
                className={`p-2 rounded-xl transition ${
                  viewMode === "icons" ? "bg-white/20 text-[#EAB308]" : "text-gray-400 hover:text-white"
                }`}
                title="App Icon Grid View"
              >
                <Smartphone className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("cards")}
                className={`p-2 rounded-xl transition ${
                  viewMode === "cards" ? "bg-white/20 text-[#EAB308]" : "text-gray-400 hover:text-white"
                }`}
                title="Expanded Card Layout"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: Mobile App Icon Grid (The exact phone launcher aesthetic from uploaded screenshot) */}
        {viewMode === "icons" && (
          <div className="space-y-10">
            {/* Section A: Featured Project Apps (Tap to open card layout) */}
            <div>
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-gray-400 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308]" />
                  {language === "ta" ? "திட்ட செயலிகள் (தட்டினால் அட்டை விரியும்)" : "PROJECT APPS · TAP TO OPEN CARD LAYOUT"}
                </span>
                <span className="text-xs text-[#EAB308] font-mono">
                  {filteredProjects.length} {language === "ta" ? "திட்டங்கள்" : "Active"}
                </span>
              </div>

              {/* Mobile Phone App Grid: 4 columns on mobile, 4 columns on tablet, 4 columns on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {filteredProjects.map((project, idx) => {
                  const IconComp = project.icon;
                  const isRunning = project.projectType === "running";

                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group flex flex-col items-center text-center cursor-pointer p-3 sm:p-4 rounded-3xl hover:bg-white/5 transition-all duration-300"
                    >
                      {/* Squircle App Icon Container (Matches the mobile app icons from user's image) */}
                      <div className="relative aspect-square w-20 sm:w-24 lg:w-28 rounded-[24px] sm:rounded-[28px] overflow-hidden p-1 shadow-xl border border-white/20 bg-gradient-to-b from-white/20 to-white/5 group-hover:scale-108 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.35)] group-hover:border-[#EAB308] transition-all duration-300">
                        {/* High quality thumbnail preview inside squircle */}
                        <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="120px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 mix-blend-multiply`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Center App Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                              <IconComp className="h-5 w-5 sm:h-6 sm:w-6 text-[#EAB308]" />
                            </div>
                          </div>

                          {/* Top Status Notification Badge (like unread notification dot in mobile image) */}
                          <div className="absolute top-2 right-2">
                            {project.projectType === "running" ? (
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white" />
                              </span>
                            ) : project.projectType === "upcoming" ? (
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border border-white" />
                              </span>
                            ) : (
                              <span className="inline-flex h-3 w-3 rounded-full bg-blue-500 border border-white" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* App Name Label Below Icon (Exact iOS / Android App Label Style) */}
                      <div className="mt-2.5 sm:mt-3 space-y-0.5">
                        <span className="block font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#EAB308] transition-colors truncate max-w-[120px] sm:max-w-[140px]">
                          {language === "ta" ? project.nameTa : project.name}
                        </span>
                        <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 tracking-wider uppercase">
                          {language === "ta" ? project.statusTextTa : project.statusText}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section B: Utility & Ecosystem Apps (Matches phone screen's utility/social apps & bottom dock) */}
            <div className="pt-6 border-t border-white/10">
              <div className="mb-4 px-1">
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-gray-400 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {language === "ta" ? "விரைவு சேவைகள் & தொடர்புகள்" : "QUICK ACTIONS & DIRECT CONTACT"}
                </span>
              </div>

              {/* Utility App Grid - Centered 5-Icon Dock Row */}
              <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 max-w-2xl mx-auto gap-2 sm:gap-4 lg:gap-6">
                {utilityApps.map((app) => {
                  const IconComp = app.icon;

                  const handleClick = () => {
                    if (app.actionType === "link") router.push(app.targetUrl);
                    else window.open(app.targetUrl, app.actionType === "tel" ? "_self" : "_blank");
                  };

                  return (
                    <div
                      key={app.id}
                      onClick={handleClick}
                      className="group flex flex-col items-center text-center cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-all duration-300"
                    >
                      {/* Squircle App Icon */}
                      <div className={`relative aspect-square w-14 sm:w-16 lg:w-18 rounded-[18px] sm:rounded-[22px] p-0.5 shadow-lg bg-gradient-to-br ${app.gradient} group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center border border-white/20`}>
                        <IconComp className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow" />

                        {/* Optional Notification Badge */}
                        {app.badge && (
                          <span className="absolute -top-1 -right-1 bg-red-600 text-white font-mono text-[8px] font-extrabold px-1.5 py-0.2 rounded-full border border-white shadow-xs">
                            {app.badge}
                          </span>
                        )}
                      </div>

                      {/* App Label */}
                      <span className="mt-2 block font-display text-[11px] sm:text-xs font-semibold text-gray-200 group-hover:text-white transition-colors truncate max-w-[80px]">
                        {language === "ta" ? app.nameTa : app.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Full Card Layout (when toggled or when viewing cards directly) */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;
              const isRunning = project.projectType === "running";
              const whatsappMsg = `Hello Surya Promoters, please share price and layout details for ${project.name}.`;

              return (
                <div
                  key={project.id}
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#161B22] shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] hover:border-[#EAB308] hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                        {language === "ta" ? project.categoryLabelTa : project.categoryLabel}
                      </span>
                      {project.projectType === "running" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                          <span>{language === "ta" ? project.statusTextTa : project.statusText}</span>
                        </span>
                      ) : project.projectType === "upcoming" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
                          <Sparkles className="h-3 w-3 text-black" />
                          <span>{language === "ta" ? project.statusTextTa : project.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                          <span>{language === "ta" ? project.statusTextTa : project.statusText}</span>
                        </span>
                      )}
                    </div>

                    {project.mapBhoomiUrl && (
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#0A0D12]/90 border border-[#EAB308]/60 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#EAB308]">
                          <Layers className="h-3 w-3 text-[#EAB308]" />
                          <span>3D Map Live</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#EAB308] transition-colors leading-snug line-clamp-1">
                        {language === "ta" ? project.nameTa : project.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mt-1 truncate">
                        <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                        <span className="truncate">{language === "ta" ? project.locationTa : project.location}</span>
                      </div>
                    </div>

                    {/* 2x2 Specs Icon Matrix */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {project.specs.map((spec, i) => {
                        const SpecIcon = spec.icon;
                        return (
                          <div key={i} className="flex items-center gap-2 rounded-xl bg-white/5 px-2.5 py-2 border border-white/10">
                            <SpecIcon className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                            <span className="font-mono text-[10px] font-semibold text-gray-200 truncate">
                              {language === "ta" ? spec.labelTa : spec.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Mobile Ad Action Bar */}
                  <div className="p-4 pt-0 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-2 pt-3">
                      <a
                        href={`https://wa.me/917708966452?text=${encodeURIComponent(whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 font-display text-xs font-bold uppercase tracking-wider shadow-md transition-all hover:scale-[1.02]"
                      >
                        <MessageCircle className="h-4 w-4 fill-white text-white" />
                        <span>{language === "ta" ? "வாட்ஸ்அப்" : "Chat Now"}</span>
                      </a>

                      <a
                        href="tel:+917708966452"
                        onClick={(e) => e.stopPropagation()}
                        className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-[#EAB308] hover:text-[#0A0D12] transition"
                        title="Call"
                      >
                        <Phone className="h-4 w-4" />
                      </a>

                      {project.mapBhoomiUrl ? (
                        <a
                          href={project.mapBhoomiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="h-9 w-9 flex items-center justify-center rounded-xl border border-[#EAB308]/60 bg-black text-[#EAB308] hover:bg-[#EAB308] hover:text-black transition"
                          title="3D Map"
                        >
                          <Layers className="h-4 w-4" />
                        </a>
                      ) : (
                        <div
                          className="h-9 w-9 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-[#EAB308] group-hover:text-black transition"
                          title="View"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* INTERACTIVE EXPANDED CARD MODAL ("Once it clicks they go to the card layout") */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border-2 border-[#EAB308]/70 bg-[#161B22] shadow-[0_0_50px_rgba(234,179,8,0.3)] animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#EAB308] hover:text-black flex items-center justify-center transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-black/60 pointer-events-none" />

              {/* Status and Category Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  {language === "ta" ? selectedProject.categoryLabelTa : selectedProject.categoryLabel}
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                  selectedProject.projectType === "running"
                    ? "bg-emerald-600/90 text-white"
                    : selectedProject.projectType === "upcoming"
                    ? "bg-amber-500/95 text-black"
                    : "bg-blue-600/90 text-white"
                }`}>
                  {selectedProject.projectType === "running" ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  ) : selectedProject.projectType === "upcoming" ? (
                    <Sparkles className="h-3 w-3 text-black" />
                  ) : (
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  )}
                  <span>{language === "ta" ? selectedProject.statusTextTa : selectedProject.statusText}</span>
                </span>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 space-y-5">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-white">
                  {language === "ta" ? selectedProject.nameTa : selectedProject.name}
                </h3>
                <p className="text-xs font-semibold text-[#EAB308] mt-0.5">
                  {language === "ta" ? selectedProject.taglineTa : selectedProject.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                  <MapPin className="h-4 w-4 text-[#EAB308] shrink-0" />
                  <span>{language === "ta" ? selectedProject.locationTa : selectedProject.location}</span>
                </div>
              </div>

              {/* 2x2 Specs Matrix */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                {selectedProject.specs.map((spec, i) => {
                  const SpecIcon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <SpecIcon className="h-4 w-4 text-[#EAB308] shrink-0" />
                      <span className="font-mono text-xs text-gray-200">
                        {language === "ta" ? spec.labelTa : spec.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons Strip */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <a
                  href={`https://wa.me/917708966452?text=${encodeURIComponent(
                    `Hello Surya Promoters, please share price, layout plan and details for ${selectedProject.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 font-display text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4 fill-white text-white" />
                  <span>{language === "ta" ? "வாட்ஸ்அப்பில் விலை விவரம் கேட்க" : "Chat on WhatsApp for Price & Details"}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+917708966452"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white py-2.5 text-xs font-bold uppercase tracking-wider transition"
                  >
                    <Phone className="h-4 w-4 text-[#EAB308]" />
                    <span>{language === "ta" ? "அழைக்க" : "Call Directly"}</span>
                  </a>

                  {selectedProject.mapBhoomiUrl && (
                    <a
                      href={selectedProject.mapBhoomiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAB308]/60 bg-[#0A0D12] hover:bg-black text-[#EAB308] py-2.5 text-xs font-bold uppercase tracking-wider transition"
                    >
                      <Layers className="h-4 w-4 text-[#EAB308]" />
                      <span>{language === "ta" ? "3D வரைபடம்" : "3D Masterplan"}</span>
                    </a>
                  )}

                  <button
                    onClick={() => router.push(`/projects/${selectedProject.slug}`)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] py-2.5 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                  >
                    <span>{language === "ta" ? "முழு விபரம்" : "Full Page"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

