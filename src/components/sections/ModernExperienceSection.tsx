"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ModernExperienceSection() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Lineage Headline */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
              <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-[#B45309]">
                {language === "ta" ? "அனுபவம் & இராணுவ ஒழுக்கம்" : "EXPERIENCE & DISCIPLINE"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.15]">
              {language === "ta" ? "16+ ஆண்டுகள் நேரடி அனுபவம்." : "16+ Years Verified Lineage."}
              <br />
              <span className="text-[#94A3B8]">
                {language === "ta" ? "அசைக்க முடியாத நம்பிக்கை." : "Precision Development."}
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-6">
            <div className="border-l-2 border-[#EAB308] pl-6 md:pl-8">
              <p className="text-base sm:text-lg leading-relaxed text-[#4B5563]">
                {language === "ta"
                  ? "மதுரை மற்றும் அதன் வளர்ந்து வரும் முக்கிய வழித்தடங்களில் பிரீமியம் வணிக நிலங்கள், விவசாயப் பண்ணைகள் மற்றும் குடியிருப்பு மனைகளை உருவாக்குவதில் நிபுணத்துவம் பெற்றுள்ளோம். இந்திய விமானப்படை ஓய்வுபெற்ற அதிகாரியின் தலைமையில், ஒவ்வொரு நிலமும் தெளிவான ஆவணங்கள், எல்லைக்கற்கள் மற்றும் சட்டப்பூர்வ சரிபார்ப்புடன் வழங்கப்படுகிறது."
                  : "Specializing exclusively in prime commercial highway land, fertile agro-farm acreage, and planned residential layouts across Madurai. Founded by an Indian Air Force veteran, our leadership coordinates layout masterplanning, FMB demarcation, and legal verification directly on-site."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

