"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { useLanguage } from "@/hooks/useLanguage";
import ProjectGallery from "./ProjectGallery";
import {
  MapPin,
  ExternalLink,
  Download,
  Calendar,
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowLeft,
  Share2,
  Map,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isCompleted = project.status === "completed" || project.projectType === "completed";

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBrochureDownload = () => {
    const text = encodeURIComponent(
      `Hello Surya Promoters, please share the official brochure and documentation pack for ${project.title.en}.`
    );
    window.open(`https://wa.me/917708966452?text=${text}`, "_blank");
  };

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#242820] pt-6 pb-12">
      {/* Back Navigation Bar */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 mb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#77766F] transition hover:text-[#242820]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-[#C6A15B]" />
            <span>{language === "ta" ? "அனைத்து திட்டங்களுக்கும் திரும்புக" : "Back to All Projects"}</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-1.5 text-xs text-[#242820] transition hover:border-[#C6A15B] cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>{copied ? "Link Copied!" : "Share Property"}</span>
          </button>
        </div>
      </div>

      {/* Project Hero Banner */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="relative aspect-[21/9] min-h-[360px] w-full overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] shadow-sm">
          <Image
            src={project.heroImage}
            alt={project.title[language]}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242820]/80 via-[#242820]/30 to-transparent" />

          {/* Overlaid Details */}
          <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-white/95 px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#242820] shadow-xs border border-[#E8E2D7]">
                {project.categoryLabel[language]}
              </span>

              {/* Status Badge */}
              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-700/90 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-300" />
                  {language === "ta" ? "நிறைவடைந்தது (100% Delivered)" : "Completed Project (Delivered)"}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700/90 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  {language === "ta" ? "நடைபெறும் திட்டம் (Running)" : "Running Project (Ongoing)"}
                </span>
              )}

              <span className="rounded-full bg-white/90 px-3.5 py-1 text-xs text-[#242820] shadow-xs border border-[#E8E2D7] flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C6A15B]" />
                <span>100% Documented Clear Titles</span>
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-normal text-white md:text-5xl lg:text-6xl drop-shadow-sm">
              {project.title[language]}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/90 drop-shadow">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#C6A15B]" />
                <span>{project.location[language]}</span>
              </div>
              <a
                href={project.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C6A15B] underline hover:text-white"
              >
                <span>Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              {project.mapBhoomiUrl && (
                <a
                  href={project.mapBhoomiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EAB308] px-3.5 py-1 text-xs font-bold text-[#0A0D12] shadow-sm hover:bg-[#ca9a07] transition"
                >
                  <span className="h-2 w-2 rounded-full bg-[#0A0D12] animate-pulse" />
                  <span>{language === "ta" ? "நேரடி 3D வரைபடம் (MapBhoomi)" : "Interactive 3D/2D Map (MapBhoomi)"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 mt-8 md:mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Narrative, Suitable For, Highlights, Gallery */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview Section */}
          <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-8 shadow-xs">
            <h2 className="font-display text-2xl font-normal text-[#242820]">
              {language === "ta" ? "திட்ட கண்ணோட்டம்" : "Property Overview"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#77766F]">
              {project.fullOverview[language]}
            </p>

            {/* Suitable For */}
            <div className="mt-8 border-t border-[#E8E2D7] pt-6">
              <h3 className="font-display text-lg font-medium text-[#242820]">
                {language === "ta" ? "பொருத்தமான பயன்பாடுகள் & சாத்தியங்கள்" : "Recommended Suitability & Development Potential"}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.suitableFor[language].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#242820]">
                    <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 border-t border-[#E8E2D7] pt-6">
              <h3 className="font-display text-lg font-medium text-[#242820]">
                {language === "ta" ? "திட்டத்தின் சிறப்பம்சங்கள்" : "Location & Survey Highlights"}
              </h3>
              <div className="mt-4 space-y-2.5">
                {project.highlights[language].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#77766F]">
                    <span className="font-mono text-xs text-[#C6A15B] shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="font-display text-2xl font-normal text-[#242820] mb-6">
              {language === "ta" ? "திட்ட புகைப்படங்கள்" : "Property Photo Gallery"}
            </h2>
            <ProjectGallery
              images={project.galleryImages}
              title={project.title[language]}
            />
          </div>

          {/* Interactive Digital Twin / MapBhoomi Section */}
          {project.mapBhoomiUrl && (
            <div className="rounded-3xl border-2 border-[#EAB308]/40 bg-gradient-to-br from-[#0A0D12] to-[#161B22] p-6 sm:p-8 text-white shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAB308] text-[#0A0D12] shadow-md">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EAB308]">
                        MAPBHOOMI DIGITAL TWIN
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {language === "ta"
                        ? "நேரடி 3D / 2D மனைப்பிரிவு வரைபடம்"
                        : "Interactive 3D / 2D Layout Masterplan"}
                    </h3>
                  </div>
                </div>

                <a
                  href={project.mapBhoomiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-[#0A0D12] shadow-md transition hover:bg-[#ca9a07] hover:scale-105"
                >
                  <Map className="h-4 w-4" />
                  <span>{language === "ta" ? "வரைபடத்தை திறக்கவும்" : "Launch Live Map"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Live Inventory Status Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    {language === "ta" ? "மொத்த மனைகள்" : "TOTAL UNITS"}
                  </span>
                  <span className="block font-display text-2xl font-extrabold text-white mt-1">
                    {project.mapBhoomiTotalUnits ?? "—"}
                  </span>
                </div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3.5 text-center">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                    {language === "ta" ? "விற்பனைக்கு உள்ளவை" : "AVAILABLE"}
                  </span>
                  <span className="block font-display text-2xl font-extrabold text-emerald-400 mt-1">
                    {project.mapBhoomiAvailableUnits ?? "—"}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    {language === "ta" ? "ஒதுக்கீடு நிலை" : "HOLD / BOOKED"}
                  </span>
                  <span className="block font-display text-2xl font-extrabold text-gray-300 mt-1">
                    0
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    {language === "ta" ? "பார்வை முறை" : "VIEW MODES"}
                  </span>
                  <span className="block font-display text-lg font-bold text-[#EAB308] mt-1.5">
                    3D &amp; 2D Live
                  </span>
                </div>
              </div>

              {/* Instructions and Capabilities */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-[#EAB308]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
                    {language === "ta"
                      ? "மேப்போமி நேரடி வரைபடத்தின் சிறப்பம்சங்கள்:"
                      : "How to use the Interactive Map on MapBhoomi:"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308] shrink-0 mt-1.5" />
                    <span>
                      <strong className="text-white">Tap any unit</strong> to inspect real-time boundary dimensions, sq.ft/cents area, and price.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308] shrink-0 mt-1.5" />
                    <span>
                      <strong className="text-white">3D Elevation &amp; Pinch:</strong> Rotate and zoom on mobile touchscreens or desktop scroll.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308] shrink-0 mt-1.5" />
                    <span>
                      <strong className="text-white">Government Boundary Alignment:</strong> Accurate survey boundary markers and approach roads.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={project.mapBhoomiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 rounded-xl bg-[#EAB308] py-3 px-4 font-display text-xs font-bold uppercase tracking-wider text-[#0A0D12] hover:bg-[#ca9a07] transition text-center"
                >
                  <Map className="h-4 w-4" />
                  <span>{language === "ta" ? "3D வரைபடத்தில் மனைகளை பார்க்க" : "Explore Interactive Map"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {project.brochureUrl && (
                  <a
                    href={project.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 px-4 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition text-center"
                  >
                    <Download className="h-4 w-4 text-[#EAB308]" />
                    <span>{language === "ta" ? "டிஜிட்டல் வரைபட கையேடு" : "Digital Brochure Layout"}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Layout Blueprint Image if available */}
          {project.layoutPlanImage && (
            <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-normal text-[#242820]">
                  {language === "ta" ? "தள வரைபடம் & சர்வே திட்டம்" : "Layout Masterplan & Survey Drawing"}
                </h3>
                <span className="text-xs font-mono uppercase text-[#C6A15B]">
                  Verified Cadastral Map
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#E8E2D7] bg-white">
                <Image
                  src={project.layoutPlanImage}
                  alt={`${project.title[language]} Layout Plan`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8E2D7] pt-4">
                <p className="text-xs text-[#77766F] max-w-md">
                  Request high-resolution PDF blueprints with measured dimensions and government registrar survey coordinates.
                </p>
                <button
                  onClick={handleBrochureDownload}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A15B] px-5 py-2.5 text-xs font-semibold uppercase text-white shadow-xs transition hover:bg-[#b5924d] cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Request Full Blueprint</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Column: Actions, Site Visit Booking & Contact */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            {/* Quick Action Card */}
            <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6 shadow-xs">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#C6A15B]">
                DIRECT PROMOTER INQUIRY
              </span>
              <h3 className="mt-1.5 font-display text-xl font-normal text-[#242820]">
                Interested in {project.title[language]}?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#77766F]">
                {isCompleted
                  ? "This project is fully registered and handed over. Contact us to inquire about upcoming adjacent releases or similar developments."
                  : "Connect directly with Mr. Manickam Natarajan's executive advisory team for current plots and live site visits."}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                {isCompleted ? (
                  <a
                    href={`https://wa.me/917708966452?text=${encodeURIComponent(
                      `Hello Surya Promoters, I saw your completed project ${project.title.en} and would like to inquire about similar upcoming developments.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#242820] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-black"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#C6A15B]" />
                    <span>Inquire Similar Developments</span>
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/917708966452?text=${encodeURIComponent(
                      `Hello Surya Promoters, I am interested in ${project.title.en} (${project.location.en}). Please share price and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#b5924d]"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                )}

                {project.mapBhoomiUrl && (
                  <a
                    href={project.mapBhoomiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0D12] py-3.5 text-xs font-bold uppercase tracking-wider text-[#EAB308] border border-[#EAB308]/40 shadow-xs transition hover:bg-[#161B22] hover:scale-[1.01]"
                  >
                    <Layers className="h-4 w-4 text-[#EAB308]" />
                    <span>{language === "ta" ? "நேரடி 3D வரைபடம் (MapBhoomi)" : "Explore 3D Map (MapBhoomi)"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                <a
                  href="tel:+917708966452"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8E2D7] bg-white py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242820] transition hover:bg-[#F1EBDD]"
                >
                  <Phone className="h-4 w-4 text-[#C6A15B]" />
                  <span>Call +91 77089 66452</span>
                </a>

                <button
                  onClick={handleBrochureDownload}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8E2D7] bg-white py-3 text-xs font-medium text-[#242820] transition hover:border-[#C6A15B] cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-[#C6A15B]" />
                  <span>Download Documentation Pack</span>
                </button>
              </div>

              {/* Trust Callout */}
              <div className="mt-6 border-t border-[#E8E2D7] pt-4">
                <div className="flex items-center gap-2.5 text-xs text-[#242820]">
                  <ShieldCheck className="h-4 w-4 text-[#C6A15B] shrink-0" />
                  <span>Clear Encumbrance & Freehold Title</span>
                </div>
                <div className="mt-2 flex items-center gap-2.5 text-xs text-[#242820]">
                  <Calendar className="h-4 w-4 text-[#C6A15B] shrink-0" />
                  <span>Escorted Site Visits Available Daily</span>
                </div>
              </div>
            </div>

            {/* Location Map Shortcut */}
            <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6 text-center">
              <MapPin className="mx-auto h-7 w-7 text-[#C6A15B]" />
              <h4 className="mt-2 font-display text-base font-normal text-[#242820]">
                Visit On-Site Location
              </h4>
              <p className="mt-1 text-xs text-[#77766F]">
                Explore surrounding access routes and infrastructure on Google Maps.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {project.mapBhoomiUrl && (
                  <a
                    href={project.mapBhoomiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A0D12] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#EAB308] transition hover:bg-black"
                  >
                    <Layers className="h-3.5 w-3.5 text-[#EAB308]" />
                    <span>Interactive MapBhoomi Layout</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <a
                  href={project.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8E2D7] bg-white px-5 py-2 text-xs font-semibold text-[#242820] transition hover:border-[#C6A15B]"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#C6A15B]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
