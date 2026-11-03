"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "@/types/project";
import { useLanguage } from "@/hooks/useLanguage";
import {
  MapPin,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Building2,
  Wheat,
  Home,
  ShieldCheck,
  MessageCircle,
  Phone,
  Droplets,
  Truck,
  Sparkles,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const isCompleted = project.status === "completed" || project.projectType === "completed";
  const whatsappMsg = `Hello Surya Promoters, please share price and details for ${project.title.en}.`;

  // Get appropriate category icon
  const getCategoryIcon = () => {
    switch (project.category) {
      case "commercial":
        return <Building2 className="h-3.5 w-3.5 text-[#B45309] shrink-0" />;
      case "farm":
        return <Wheat className="h-3.5 w-3.5 text-emerald-600 shrink-0" />;
      case "residential":
      default:
        return <Home className="h-3.5 w-3.5 text-blue-600 shrink-0" />;
    }
  };

  return (
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
          src={project.heroImage}
          alt={project.title[language]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges Strip */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
          {/* Category Badge */}
          <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm truncate max-w-[170px]">
            {project.categoryLabel[language]}
          </span>

          {/* Status Badge: Running vs Completed */}
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm border border-blue-400/30 shrink-0">
              <CheckCircle2 className="h-3 w-3 text-white" />
              <span>{language === "ta" ? "நிறைவடைந்தது" : "Completed"}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm border border-emerald-400/30 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span>{language === "ta" ? "நடைபெறுகிறது" : "Running"}</span>
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
      </div>

      {/* Card Middle: Title, Location, and 2x2 Icon-Only Spec Matrix */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Project Title */}
          <h3 className="font-display text-lg font-bold text-[#111827] group-hover:text-[#B45309] transition-colors leading-snug line-clamp-1">
            {project.title[language]}
          </h3>

          {/* Location with Pin Icon */}
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-medium mt-1 truncate">
            <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
            <span className="truncate">{project.location[language]}</span>
          </div>
        </div>

        {/* Icon-Only Project Features Matrix (2x2 Compact Grid - No Long Paragraphs) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 rounded-xl bg-gray-50/90 px-2.5 py-2 border border-gray-100/90">
            {getCategoryIcon()}
            <span className="font-mono text-[10px] font-semibold text-[#374151] truncate">
              {project.categoryLabel[language]}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-gray-50/90 px-2.5 py-2 border border-gray-100/90">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span className="font-mono text-[10px] font-semibold text-[#374151] truncate">
              {language === "ta" ? "100% தெளிவான பட்டா" : "100% Clear Title"}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-gray-50/90 px-2.5 py-2 border border-gray-100/90">
            {project.category === "commercial" ? (
              <Truck className="h-3.5 w-3.5 text-[#B45309] shrink-0" />
            ) : project.category === "farm" ? (
              <Droplets className="h-3.5 w-3.5 text-cyan-600 shrink-0" />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
            )}
            <span className="font-mono text-[10px] font-semibold text-[#374151] truncate">
              {project.category === "commercial"
                ? language === "ta" ? "NH-44 இணைப்பு" : "NH-44 Highway"
                : project.category === "farm"
                ? language === "ta" ? "நிலத்தடி நீர்வளம்" : "Sweet Water"
                : language === "ta" ? "DTCP அனுமதி" : "DTCP Approved"}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-gray-50/90 px-2.5 py-2 border border-gray-100/90">
            {project.mapBhoomiUrl ? (
              <Layers className="h-3.5 w-3.5 text-[#B45309] shrink-0" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
            )}
            <span className="font-mono text-[10px] font-semibold text-[#374151] truncate">
              {project.mapBhoomiUrl
                ? language === "ta" ? "3D வரைபடம்" : "3D Masterplan"
                : language === "ta" ? "சரிபார்க்கப்பட்டது" : "Verified Patta"}
            </span>
          </div>
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
  );
}
