"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  Layers,
  ExternalLink,
  Map,
  Sparkles,
  Download,
  ShieldCheck,
  Compass,
  X,
  ZoomIn,
} from "lucide-react";

export default function MasterplansPage() {
  const { language } = useLanguage();
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);

  const blueprints = [
    {
      title: "Orange Garden Gated Orchard Layout",
      titleTa: "ஆரஞ்ச் கார்டன் பழத்தோட்ட மனைப்பிரிவு தள வரைபடம்",
      subtitle: "10 Surveyed Orchard Plots with direct frontage on Thiruppuvanam to Narikudi Road",
      subtitleTa: "திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் நேரடி முகப்புடன் 10 அளவீடு செய்யப்பட்ட மனைகள்",
      src: "/images/projects/orange-garden/layout-blueprint.jpg",
      plots: "10 Plots (Plots 1–10)",
      type: "Agro-Residential Orchard",
    },
    {
      title: "Surya Green Enclave Township Layout",
      titleTa: "சூர்யா கிரீன் என்கிளேவ் மனைப்பிரிவு வரைபடம்",
      subtitle: "15 DTCP & RERA approved residential villa plots on Mudukangulam Road",
      subtitleTa: "முதுகங்குளம் ரோட்டில் 15 DTCP & RERA அனுமதி பெற்ற குடியிருப்பு மனைகள்",
      src: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
      plots: "15 Villa Plots",
      type: "DTCP & RERA Residential",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Interactive Digital Twin / MapBhoomi Card */}
      <div className="rounded-3xl border-2 border-[#EAB308]/40 bg-gradient-to-br from-[#0A0D12] to-[#161B22] p-6 sm:p-10 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAB308] text-[#0A0D12] shadow-md">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EAB308]">
                  MAPBHOOMI DIGITAL TWIN
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE 3D
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {language === "ta"
                  ? "நேரடி 3D / 2D மனைப்பிரிவு வரைபடம்"
                  : "Interactive 3D / 2D Layout Masterplan"}
              </h1>
            </div>
          </div>

          <a
            href="https://mapbhoomi.com/l/surya-promoters"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-6 py-3 font-display text-xs font-extrabold uppercase tracking-wider text-[#0A0D12] shadow-lg transition hover:bg-[#ca9a07] hover:scale-105"
          >
            <Map className="h-4 w-4" />
            <span>{language === "ta" ? "நேரடி 3D மாதிரி திறக்க" : "Launch Live 3D Map"}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Live Inventory Status Badges */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              {language === "ta" ? "மொத்த மனைகள்" : "TOTAL UNITS"}
            </span>
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              25
            </span>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-center">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              {language === "ta" ? "விற்பனைக்கு உள்ளவை" : "AVAILABLE"}
            </span>
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              18
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              {language === "ta" ? "ஒதுக்கீடு நிலை" : "HOLD / BOOKED"}
            </span>
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-gray-300 mt-1">
              7
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              {language === "ta" ? "பார்வை முறை" : "VIEW MODES"}
            </span>
            <span className="block font-display text-lg sm:text-xl font-extrabold text-[#EAB308] mt-1.5">
              3D &amp; 2D Live
            </span>
          </div>
        </div>

        {/* Instructions and Capabilities */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-[#EAB308]" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
              {language === "ta"
                ? "3D மாதிரி வரைபடத்தின் சிறப்பம்சங்கள்:"
                : "How to use the Interactive Map on MapBhoomi:"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300">
            <div className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308] shrink-0 mt-1.5" />
              <span>
                <strong className="text-white">Tap any unit</strong> to inspect real-time boundary dimensions, cents area, and price.
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
      </div>

      {/* Cadastral Blueprints Section */}
      <div className="space-y-4">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-2xs">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
            {language === "ta" ? "அரசு பதிவு செய்யப்பட்ட தள வரைபடங்கள்" : "Official Cadastral Survey Blueprints"}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            {language === "ta"
              ? "துல்லியமான சர்வே எண்கள், எல்லை அளவுகள் மற்றும் சாலை அகலங்கள் குறிக்கப்பட்ட வரைபடங்கள்."
              : "Registered revenue cadastral drawings displaying exact plot dimensions, boundary stones, and internal road networks."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blueprints.map((bp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                    {bp.plots}
                  </span>
                  <span className="text-xs font-mono text-[#0284C7] font-bold">
                    {bp.type}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#0F172A]">
                  {language === "ta" ? bp.titleTa : bp.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  {language === "ta" ? bp.subtitleTa : bp.subtitle}
                </p>

                {/* Blueprint Image Preview */}
                <div
                  onClick={() => setSelectedBlueprint(bp.src)}
                  className="mt-4 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#060A10] border border-gray-200 cursor-pointer group shadow-inner"
                >
                  <Image
                    src={bp.src}
                    alt={bp.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0F172A] shadow-lg backdrop-blur-sm">
                      <ZoomIn className="h-4 w-4 text-[#C6A15B]" />
                      <span>{language === "ta" ? "பெரிதாக்கி பார்க்க" : "Click to Enlarge"}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setSelectedBlueprint(bp.src)}
                  className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>{language === "ta" ? "முழு வரைபடம் பார்க்க" : "Inspect Full Blueprint"}</span>
                </button>
                <a
                  href={`https://wa.me/917708966452?text=${encodeURIComponent(
                    `Hello Surya Promoters, please send high-resolution PDF blueprint for ${bp.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] text-xs font-bold transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{language === "ta" ? "PDF வரைபடம் கேட்க" : "Request PDF Copy"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blueprint Lightbox Modal */}
      {selectedBlueprint && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBlueprint(null)}
        >
          <button
            onClick={() => setSelectedBlueprint(null)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Close Blueprint"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedBlueprint}
              alt="Blueprint Full Preview"
              fill
              className="object-contain"
              sizes="1200px"
            />
          </div>
        </div>
      )}

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}

