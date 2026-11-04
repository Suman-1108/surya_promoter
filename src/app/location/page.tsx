"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SummitFooter from "@/components/layout/SummitFooter";
import { useLanguage } from "@/hooks/useLanguage";
import { projectsData } from "@/data/projects";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Building2,
  TreePine,
  Home,
  Eye,
} from "lucide-react";

export default function LocationPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <section className="relative w-full bg-[#173D2B] py-10 sm:py-14 rounded-3xl text-white overflow-hidden border border-[#E2E8F0]">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero/hero-farmland-aerial.jpg"
            alt="Project Locations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EAB308]">
              Verified Cadastral Coordinates &amp; Highways
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
              {language === "ta" ? "திட்டங்களின் அமைவிடம் & வரைபடம்" : "Project Locations in Madurai"}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {language === "ta"
                ? "மதுரையின் முக்கிய ரிங் ரோடு, அண்ணா நகர், தேசிய நெடுஞ்சாலை மற்றும் இயற்கை மண்டலங்களில் அமைந்துள்ள அனைத்து திட்டங்களின் சரியான வரைபட வழிகள்."
                : "Explore verified geographic coordinates, Google Maps routes, and highway proximity for all residential, commercial, and farm land developments."}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
            {["all", "commercial", "farm", "residential"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#EAB308] text-[#0A0D12] shadow-xs scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                {cat === "all" ? "All Locations" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.category === "farm" ? TreePine : project.category === "residential" ? Home : Building2;
            const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${project.title.en} ${project.location.en}`
            )}`;
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              `${project.title.en} ${project.location.en}`
            )}`;

            return (
              <div
                key={project.id}
                id={project.slug}
                className="group flex flex-col rounded-3xl bg-white border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Preview / Map Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D12]">
                  <Image
                    src={project.heroImage}
                    alt={project.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                  
                  {/* Category Pin Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173D2B]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      <Icon className="h-3 w-3 text-[#EAB308]" />
                      <span>{project.categoryLabel[language]}</span>
                    </span>
                  </div>

                  {/* Overlaid Title & Address */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {project.title[language]}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#EAB308] mt-1 font-mono">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{project.location[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Location Details Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Proximity Features */}
                  {project.nearbyFeatures && project.nearbyFeatures.length > 0 && (
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Key Proximity Distances:
                      </span>
                      <div className="space-y-1.5">
                        {project.nearbyFeatures.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center justify-between text-xs p-2 rounded-xl bg-[#F8F9FA]">
                            <span className="text-gray-700 truncate pr-2">{feat.name[language]}</span>
                            <span className="font-mono font-bold text-[#173D2B] shrink-0">{feat.distance[language]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Google Maps Actions */}
                  <div className="pt-4 border-t border-[#F1F5F9] space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={project.googleMapsUrl || googleMapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] hover:bg-white py-2 px-3 text-xs font-bold text-[#0F172A] transition shadow-2xs text-center"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-[#EAB308]" />
                        <span>Google Maps</span>
                      </a>

                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] py-2 px-3 text-xs font-bold text-white transition shadow-2xs text-center"
                      >
                        <Navigation className="h-3.5 w-3.5 text-[#EAB308]" />
                        <span>Directions</span>
                      </a>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#0F172A] hover:text-[#B45309] transition"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Full Project Details &amp; Brochure</span>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SummitFooter />
    </div>
  );
}
