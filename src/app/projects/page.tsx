"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  MapPin,
  ShieldCheck,
  Building2,
  Wheat,
  Home as HomeIcon,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  nameTa: string;
  tagline: string;
  taglineTa: string;
  category: "commercial" | "farm" | "residential";
  categoryLabel: string;
  categoryLabelTa: string;
  projectType: "running" | "upcoming" | "completed";
  statusText: string;
  statusTextTa: string;
  location: string;
  locationTa: string;
  image: string;
  specs: { icon: any; label: string; labelTa: string }[];
  overview: string;
  overviewTa: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "vaigai-elite",
    slug: "vaigai-elite-commercial-land",
    name: "Vaigai Elite Commercial Land",
    nameTa: "வைகை எலைட் வணிக நிலம்",
    tagline: "Commercial Highway Frontage Land",
    taglineTa: "நெடுஞ்சாலை வணிக நிலம்",
    category: "commercial",
    categoryLabel: "Commercial Highway Hub",
    categoryLabelTa: "வணிக நெடுஞ்சாலை மண்டலம்",
    projectType: "running",
    statusText: "RUNNING 2026",
    statusTextTa: "2026 நடைமுறையில் உள்ள திட்டம்",
    location: "Madurai Outer Ring Road (NH-44)",
    locationTa: "மதுரை அவுட்டர் ரிங் ரோடு (NH-44)",
    image: "/images/projects/vaigai/corridor-aerial.jpg",
    specs: [
      { icon: Building2, label: "Highway Frontage", labelTa: "நெடுஞ்சாலை முகப்பு" },
      { icon: ShieldCheck, label: "Commercial Patta", labelTa: "வணிக பட்டா" },
      { icon: MapPin, label: "NH-44 Corridor", labelTa: "NH-44 இணைப்பு" },
      { icon: Sparkles, label: "Immediate Registration", labelTa: "உடனடி பத்திரப்பதிவு" },
    ],
    overview:
      "Strategic high-exposure commercial land parcels situated along the four-lane Madurai Outer Ring Road corridor (NH-44). Engineered for institutional logistics, hospital campuses, multi-brand vehicle showrooms, and warehouses.",
    overviewTa:
      "மதுரை அவுட்டர் ரிங் ரோடு (NH-44) நான்கு வழிச்சாலையில் அமைந்துள்ள முதன்மையான வணிக நிலங்கள். கிடங்குகள், மருத்துவமனைகள், ஆட்டோமொபைல் ஷோரூம்கள் மற்றும் நிறுவன அமைப்புகளுக்கு மிகவும் உகந்தது.",
  },
  {
    id: "madurai-farms",
    slug: "madurai-farms-and-fruits",
    name: "Madurai Farms & Fruits",
    nameTa: "மதுரை பார்ம்ஸ் & புரூட்ஸ்",
    tagline: "Managed Organic Agro-Acreage",
    taglineTa: "இயற்கை பண்ணை எஸ்டேட் மனைகள்",
    category: "farm",
    categoryLabel: "Managed Agro Farmland",
    categoryLabelTa: "பராமரிக்கப்படும் பண்ணை நிலம்",
    projectType: "running",
    statusText: "RUNNING 2026",
    statusTextTa: "2026 நடைமுறையில் உள்ள திட்டம்",
    location: "Agricultural Belt, Madurai",
    locationTa: "விவசாய மண்டலம், மதுரை",
    image: "/images/projects/madurai-farms/panoramic-view.jpg",
    specs: [
      { icon: Wheat, label: "Fertile Soil & Groves", labelTa: "வளமான வண்டல் மண்" },
      { icon: ShieldCheck, label: "Clear Computer Patta", labelTa: "கணினி பட்டா" },
      { icon: HomeIcon, label: "Farmhouse Cottage Ready", labelTa: "பண்ணை வீடு வசதி" },
      { icon: Sparkles, label: "Perennial Water Source", labelTa: "வற்றாத நீர் வளம்" },
    ],
    overview:
      "Managed agricultural farmland acreage situated in Madurai's fertile agro-corridor. Featuring sweet perennial groundwater aquifers, perimeter boundary stone fencing, harvested fruit trees, and serene weekend farmhouse cottages.",
    overviewTa:
      "மதுரையின் வளமான விவசாயப் பகுதியில் அமைந்துள்ள இயற்கை பண்ணை மனைகள். சுத்தமான நிலத்தடி நீர், பழ மரங்கள், வார இறுதி பண்ணை வீடு அமைக்கும் வசதி மற்றும் தெளிவான எல்லைக் கற்களுடன் கூடியது.",
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
    statusText: "UPCOMING 2026",
    statusTextTa: "2026 வரவிருக்கும் திட்டம்",
    location: "Thiruppuvanam to Narikudi Road, Madurai",
    locationTa: "திருப்புவனம் - நரிக்குடி ரோடு, மதுரை",
    image: "/images/projects/orange-garden/hero-orchard.jpg",
    specs: [
      { icon: Layers, label: "10 Surveyed Plots", labelTa: "10 அளவீடு மனைகள்" },
      { icon: Wheat, label: "Harvested Orchards", labelTa: "பழத்தோட்டங்கள்" },
      { icon: HomeIcon, label: "Farmhouse Plots", labelTa: "பண்ணை வீடு" },
      { icon: ShieldCheck, label: "Road Frontage", labelTa: "மெயின் ரோடு முகப்பு" },
    ],
    overview:
      "A signature gated orchard community offering 10 demarcated farm plots with direct road frontage on Thiruppuvanam to Narikudi Road. Includes sweet lime & citrus groves, boundary stones, drip irrigation, and luxury farmhouse ownership.",
    overviewTa:
      "திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் நேரடி முகப்புடன் 10 அளவீடு செய்யப்பட்ட பழத்தோட்ட மனைகள் கொண்ட கேட்டட் திட்டம். சொட்டு நீர்ப்பாசனம், பிரம்மாண்ட நுழைவு வளைவு மற்றும் சொகுசு பண்ணை வீடு அமைக்கும் வாய்ப்பு.",
  },
  {
    id: "surya-green-enclave",
    slug: "surya-green-enclave",
    name: "Surya Green Enclave",
    nameTa: "சூர்யா கிரீன் என்கிளேவ்",
    tagline: "DTCP & RERA Approved Township",
    taglineTa: "DTCP & RERA மனைப்பிரிவு",
    category: "residential",
    categoryLabel: "Residential Villa Township",
    categoryLabelTa: "குடியிருப்பு மனைப்பிரிவு",
    projectType: "completed",
    statusText: "COMPLETED (DELIVERED)",
    statusTextTa: "100% ஒப்படைக்கப்பட்ட திட்டம்",
    location: "Mudukangulam Road, Madurai Region",
    locationTa: "முதுகங்குளம் ரோடு, மதுரை மண்டலம்",
    image: "/images/projects/surya-green-enclave.jpg",
    specs: [
      { icon: ShieldCheck, label: "DTCP & RERA Approved", labelTa: "DTCP & RERA அனுமதி" },
      { icon: Layers, label: "15 Villa Plots", labelTa: "15 பிரத்யேக மனைகள்" },
      { icon: Sparkles, label: "Bitumen Roads & Lights", labelTa: "தார் சாலை & விளக்குகள்" },
      { icon: CheckCircle2, label: "100% Delivered", labelTa: "முழுமையாக விற்று முடிந்தது" },
    ],
    overview:
      "A completely delivered 15-plot residential gated township with wide tar roads, comprehensive avenue plantations, individual drinking water taps, clear revenue layout blueprints, and 100% individual registered patta.",
    overviewTa:
      "அகலமான தார் சாலைகள், தெருவிளக்குகள், தனித்தனி குடிநீர் இணைப்பு மற்றும் 100% தனிப்பட்டாவுடன் முழுமையாக நிறைவடைந்து வாடிக்கையாளர்களிடம் ஒப்படைக்கப்பட்ட பிரத்யேக குடியிருப்பு மனைப்பிரிவு.",
  },
];

function ProjectsContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";
  const cat = searchParams.get("category") || searchParams.get("cat") || "all";
  const [subFilter, setSubFilter] = useState<"all" | "running" | "upcoming" | "completed">("all");

  const filteredProjects = useMemo(() => {
    return projectsList.filter((p) => {
      // Sub filter
      if (subFilter !== "all" && p.projectType !== subFilter) {
        return false;
      }
      // Category filter
      if (cat !== "all" && p.category !== cat) {
        return false;
      }
      // Search query
      if (q) {
        const matchesName = p.name.toLowerCase().includes(q) || p.nameTa.toLowerCase().includes(q);
        const matchesLocation = p.location.toLowerCase().includes(q) || p.locationTa.toLowerCase().includes(q);
        const matchesDesc = p.overview.toLowerCase().includes(q) || p.overviewTa.toLowerCase().includes(q);
        return matchesName || matchesLocation || matchesDesc;
      }
      return true;
    });
  }, [subFilter, cat, q]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Header Card & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-2xs">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EAB308]/30 bg-[#EAB308]/10 px-3 py-1 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#854D0E]">
              {language === "ta" ? "100% தெளிவான கம்ப்யூட்டர் பட்டா" : "100% Computer Patta & Clear Titles"}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A]">
            {language === "ta" ? "எங்கள் மனைப்பிரிவு திட்டங்கள்" : "Property Developments & Projects"}
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
            {language === "ta"
              ? "மதுரையின் முதன்மையான குடியிருப்பு, வணிக மற்றும் இயற்கை பண்ணை மனைத் திட்டங்கள்."
              : "Explore our verified collection of residential townships, commercial highway corridors, and managed agro-farmland across Madurai."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-2xl self-start sm:self-auto shrink-0">
          {(["all", "running", "upcoming", "completed"] as const).map((filter) => {
            const filterLabels = {
              all: language === "ta" ? "அனைத்து (4)" : "All (4)",
              running: language === "ta" ? "நடைபெறுபவை (2)" : "Running (2)",
              upcoming: language === "ta" ? "வரவிருக்கும் (1)" : "Upcoming (1)",
              completed: language === "ta" ? "நிறைவடைந்தவை (1)" : "Completed (1)",
            };
            return (
              <button
                key={filter}
                onClick={() => setSubFilter(filter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  subFilter === filter
                    ? "bg-white text-[#0F172A] shadow-xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {filterLabels[filter]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#EAB308] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/10] w-full bg-gray-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase text-white border border-white/20">
                      {language === "ta" ? project.categoryLabelTa : project.categoryLabel}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase text-white backdrop-blur-md ${
                        project.projectType === "running"
                          ? "bg-emerald-600"
                          : project.projectType === "upcoming"
                          ? "bg-amber-500 text-black font-extrabold"
                          : "bg-blue-600"
                      }`}
                    >
                      {language === "ta" ? project.statusTextTa : project.statusText}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#EAB308] transition-colors">
                      {language === "ta" ? project.nameTa : project.name}
                    </h3>
                    <p className="text-xs text-amber-200 font-mono mt-0.5">
                      {language === "ta" ? project.locationTa : project.location}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                    {language === "ta" ? project.overviewTa : project.overview}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {project.specs.map((spec, i) => {
                      const SpecIcon = spec.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 text-[11px] font-mono text-[#334155]"
                        >
                          <SpecIcon className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                          <span className="truncate">
                            {language === "ta" ? spec.labelTa : spec.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 py-2.5 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold transition text-center flex items-center justify-center gap-1.5"
                >
                  <span>{language === "ta" ? "விவரங்கள் பார்க்க" : "View Details"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={`https://wa.me/917708966452?text=${encodeURIComponent(
                    `Hello Surya Promoters, please share price and layout details for ${project.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] text-xs font-extrabold uppercase transition text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>{language === "ta" ? "விலை கேட்க" : "WhatsApp Price"}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-mono text-gray-500">Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
