"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Phone,
  MessageSquare,
  Calendar,
  ShieldCheck,
  Building2,
  Wheat,
  Home,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HeroCTA() {
  const { language } = useLanguage();
  const [selectedType, setSelectedType] = useState<"commercial" | "farm" | "residential">("commercial");

  const categories = [
    {
      id: "commercial" as const,
      icon: <Building2 className="h-4 w-4" />,
      label: language === "ta" ? "வணிக & நெடுஞ்சாலை நிலம்" : "Commercial Highway Land",
      badge: language === "ta" ? "NH-44 & ரிங் ரோடு" : "NH-44 & Ring Road",
      desc: language === "ta" ? "கிடங்குகள், மருத்துவமனைகள் & வணிக நிறுவனங்கள்" : "Warehouses, Logistics & Hospitals",
      whatsappMsg: "Hello Surya Promoters, I am looking for Prime Commercial Land along NH-44 / Madurai Ring Road. Please share available parcels and pricing.",
    },
    {
      id: "farm" as const,
      icon: <Wheat className="h-4 w-4" />,
      label: language === "ta" ? "விவசாயப் பண்ணை நிலங்கள்" : "Agro & Farm Plots",
      badge: language === "ta" ? "இயற்கை பழத்தோட்டம்" : "Sweet Water Belt",
      desc: language === "ta" ? "பழ மரங்கள், பண்ணை வீடு & நீண்டகால முதலீடு" : "Orchards, Weekend Farmhouse & Crops",
      whatsappMsg: "Hello Surya Promoters, I am interested in fertile agricultural farm plots and orchard lands in Madurai. Please share details.",
    },
    {
      id: "residential" as const,
      icon: <Home className="h-4 w-4" />,
      label: language === "ta" ? "குடியிருப்பு மனைகள்" : "Residential Township",
      badge: language === "ta" ? "DTCP & RERA" : "DTCP & RERA",
      desc: language === "ta" ? "உடனடி கட்டுமானத்திற்கு ஏற்ற வீட்டு மனைகள்" : "Gated Community & Individual Patta",
      whatsappMsg: "Hello Surya Promoters, I am looking for approved residential villa plots in Madurai. Please share project locations and price list.",
    },
  ];

  const currentCategory = categories.find((c) => c.id === selectedType) || categories[0];

  return (
    <div className="w-full mt-8 md:mt-12">
      {/* Container with dark glassmorphism and subtle gold border */}
      <div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-[#121820]/95 via-[#0E141B]/95 to-[#0A0D12]/95 p-5 sm:p-7 md:p-8 shadow-2xl backdrop-blur-md">
        
        {/* Glow accent */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#EAB308]/10 blur-2xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAB308]/40 bg-[#EAB308]/10 px-3 py-1 mb-2">
              <Sparkles className="h-3 w-3 text-[#EAB308]" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#EAB308]">
                {language === "ta" ? "நேரடி ஆலோசனை & மனை தேர்வு" : "DIRECT PROPERTY ADVISORY"}
              </span>
            </div>
            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
              {language === "ta"
                ? "மதுரையில் உங்கள் அடுத்த நிலத்தை தேர்ந்தெடுக்க வழிகாட்டுகிறோம்"
                : "Looking to Acquire or Invest in Land in Madurai?"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              {language === "ta"
                ? "உங்கள் தேவையைத் தேர்ந்தெடுக்கவும் — எங்கள் மூத்த நிர்வாகம் உடனடியாக தொடர்பு கொள்ளும்."
                : "Select your preferred property category below to receive verified layout blueprints and pricing."}
            </p>
          </div>

          {/* Quick Direct Hotline */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917708966452"
              className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition group"
              title="Direct call to Indian Air Force Veteran Advisory"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAB308] text-[#0A0D12]">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] text-gray-400">CALL ADVISORY</span>
                <span className="block text-xs font-bold text-white group-hover:text-[#EAB308] transition">
                  +91 77089 66452
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Middle: Interactive Category Selector */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {categories.map((cat) => {
            const isSelected = selectedType === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedType(cat.id)}
                className={`group relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#EAB308] bg-[#EAB308]/10 shadow-[0_0_20px_rgba(234,179,8,0.15)] ring-1 ring-[#EAB308]"
                    : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? "bg-[#EAB308] text-[#0A0D12]"
                        : "bg-white/10 text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-[#EAB308]/20 text-[#EAB308] border border-[#EAB308]/40"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>

                <div className="font-display text-sm font-bold text-white group-hover:text-[#EAB308] transition-colors leading-snug">
                  {cat.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Action Strip: WhatsApp CTA + Free Site Visit + Trust Pillars */}
        <div className="mt-5 pt-5 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/917708966452?text=${encodeURIComponent(currentCategory.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#0A0D12] shadow-md hover:bg-[#ca9a07] transition hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>
                {language === "ta" ? "வாட்ஸ்அப்பில் விவரங்கள் பெறுக" : "Get Details on WhatsApp"}
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Schedule Free Site Visit */}
            <a
              href={`https://wa.me/917708966452?text=${encodeURIComponent(
                `Hello Surya Promoters, I would like to schedule a free on-ground site visit for ${currentCategory.label} in Madurai.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition"
            >
              <Calendar className="h-4 w-4 text-[#EAB308]" />
              <span>
                {language === "ta" ? "நேரடி பார்வை பதிவு" : "Book Free Site Visit"}
              </span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1.5 text-gray-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>100% Clear Titles</span>
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308]" />
              <span>Zero Brokerage</span>
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>IAF Veteran Leadership</span>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
