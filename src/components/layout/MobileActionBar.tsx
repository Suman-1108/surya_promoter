"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function MobileActionBar() {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden bg-white/95 backdrop-blur-md border-t border-[#EAE5DC] px-4 py-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-3">
        {/* Call Now Button */}
        <a
          href="tel:+917708966452"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#111827] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm active:scale-95 transition"
        >
          <Phone className="h-4 w-4 text-[#C6A15B]" />
          <span>{language === "ta" ? "அழைக்க" : "Call Now"}</span>
        </a>

        {/* WhatsApp Us Button */}
        <a
          href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20properties.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-3 text-xs font-bold uppercase tracking-wider text-[#0F1E2E] shadow-sm active:scale-95 transition"
        >
          <MessageSquare className="h-4 w-4" />
          <span>{language === "ta" ? "வாட்ஸ்அப்" : "WhatsApp"}</span>
        </a>
      </div>
    </div>
  );
}
