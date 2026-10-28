"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { ShieldCheck, FileCheck, MapPin, Handshake, Calendar } from "lucide-react";

export default function WhyChooseUsSection() {
  const { t, language } = useLanguage();

  const items = [
    {
      num: "01",
      title: language === "ta" ? "2010 முதல் பாரம்பரியம்" : "Established in 2010",
      desc: language === "ta"
        ? "16 ஆண்டுகளுக்கும் மேலான அர்ப்பணிப்புடன் மதுரையில் நம்பகமான நில மேம்பாட்டாளர்கள்."
        : "Over 16 years of unwavering commitment to transparent property development in Madurai.",
      icon: <Calendar className="h-6 w-6 text-[#C6A15B]" />,
    },
    {
      num: "02",
      title: language === "ta" ? "விமானப்படை அனுபவ தலைமை" : "Experienced Leadership",
      desc: language === "ta"
        ? "இந்திய விமானப்படை ஓய்வுபெற்ற அதிகாரியின் நேர்மை மற்றும் ஒழுக்கமிக்க வழிகாட்டல்."
        : "Founded by an Indian Air Force veteran, driven by military precision, duty, and zero ambiguity.",
      icon: <ShieldCheck className="h-6 w-6 text-[#C6A15B]" />,
    },
    {
      num: "03",
      title: language === "ta" ? "பல்வேறு நிலப்பிரிவுகள்" : "Multiple Property Categories",
      desc: language === "ta"
        ? "குடியிருப்பு மனைகள், வணிக நிலங்கள், தொழிற்பேட்டை மற்றும் இயற்கை பண்ணைத் தோட்டங்கள்."
        : "Carefully curated portfolios spanning residential layouts, commercial highway parcels, and agrarian farm plots.",
      icon: <MapPin className="h-6 w-6 text-[#C6A15B]" />,
    },
    {
      num: "04",
      title: language === "ta" ? "வாடிக்கையாளர் மைய வழிகாட்டல்" : "Customer-Focused Guidance",
      desc: language === "ta"
        ? "100% மூலப்பத்திர சரிபார்ப்பு, வில்லங்கமின்மை மற்றும் சட்ட வல்லுநர்களின் முழுமையான உதவி."
        : "100% legal clarity, verified parent title deeds, and clear documentation from day one.",
      icon: <FileCheck className="h-6 w-6 text-[#C6A15B]" />,
    },
    {
      num: "05",
      title: language === "ta" ? "இலவச தளப் பார்வை உதவி" : "Site Visit Assistance",
      desc: language === "ta"
        ? "மதுரை நகரில் இருந்து வசதியான வாகன அழைத்துச் சென்று ஆவணங்களை நேரில் காட்டும் வசதி."
        : "Complimentary escorted site tours across Madurai with on-ground document scrutiny.",
      icon: <Handshake className="h-6 w-6 text-[#C6A15B]" />,
    },
  ];

  return (
    <section className="relative bg-[#FFFFFF] py-6 text-[#242820] md:py-10 overflow-hidden border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {t.whyUs.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-3">
            <TextReveal
              text={t.whyUs.title}
              as="h2"
              className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
            />
          </div>
        </div>

        {/* 5 Pillars Editorial Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6 transition-all duration-200 hover:border-[#C6A15B] hover:bg-[#FFFFFF] hover:shadow-xs">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#E8E2D7]">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-[#111827] group-hover:text-[#C6A15B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#77766F]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 font-mono text-[10px] font-semibold text-[#C6A15B]">
                  {item.num} · PILLAR
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
