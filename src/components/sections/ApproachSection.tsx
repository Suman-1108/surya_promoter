"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Map, Compass, Shovel, Milestone, Trees, CheckCircle2 } from "lucide-react";

export default function ApproachSection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Strategic Land Acquisition",
      titleTa: "வளர்ச்சி மண்டல நிலத் தேர்வு",
      desc: "Identifying high-potential land along Madurai's expanding corridors, verifying water viability, road accessibility, and strict parent deed history.",
      descTa: "மதுரையின் அதிவேக வளர்ச்சி மண்டலங்களில் எதிர்கால மதிப்பு தரும் நிலங்களைத் தேர்வு செய்தல் மற்றும் நிலத்தடி நீர், அணுகு சாலை ஆகியவற்றை ஆய்வு செய்தல்.",
      icon: <Map className="h-5 w-5 text-[#C6A15B]" />,
    },
    {
      num: "02",
      title: "Precision Survey & FMB Alignment",
      titleTa: "ஜிபிஎஸ் துல்லிய நில அளவீடு",
      desc: "Deploying high-precision GPS surveying instruments and aligning with revenue department FMB records to fix undisputed boundary stones.",
      descTa: "அரசு வருவாய்த்துறை வரைபடங்களுடன் ஒப்பிட்டு, துல்லியமான ஜிபிஎஸ் கருவிகள் மூலம் எல்லைக் கற்களை உறுதியாக நடுதல்.",
      icon: <Compass className="h-5 w-5 text-[#C6A15B]" />,
    },
    {
      num: "03",
      title: "Civil Earthwork & Grading",
      titleTa: "நில சமன்படுத்துதல் & வடிகால்",
      desc: "Systematic earth grading, leveling elevations, establishing natural monsoon water runoffs, and preparing compact sub-bases.",
      descTa: "இயற்கை மழைநீர் வடிகால் வசதியுடன் கூடிய முழுமையான தரை சமன்படுத்துதல் மற்றும் அடித்தளக் கட்டமைப்பு தயாரிப்பு பணிகள்.",
      icon: <Shovel className="h-5 w-5 text-[#C6A15B]" />,
    },
    {
      num: "04",
      title: "Roads & Layout Masterplanning",
      titleTa: "சாலைகள் & மனைப்பிரிவு உருவாக்கம்",
      desc: "Constructing durable asphalt and gravel access roadways, wide internal streets, and logically structured plot boundaries with street markers.",
      descTa: "அகலமான தார்ச்சாலைகள், இணைப்பு வழிப்பாதைகள் மற்றும் தனித்தனி மனைப் பிரிவுகளுக்கான சரியான எல்லை அடையாளங்கள் அமைத்தல்.",
      icon: <Milestone className="h-5 w-5 text-[#C6A15B]" />,
    },
    {
      num: "05",
      title: "Eco-Landscaping & Fencing",
      titleTa: "பசுமை மரங்கள் & எல்லை வேலி",
      desc: "Planting native avenue trees (neem, teak, fruit trees), securing periphery boundaries, and enhancing environmental richness.",
      descTa: "சாலை ஓரங்களில் நிழல் தரும் மற்றும் பயனுள்ள மரக்கன்றுகள் நடுதல், சுற்றுவேலி அமைத்தல் மற்றும் பசுமை சூழல் மேம்பாடு.",
      icon: <Trees className="h-5 w-5 text-[#C6A15B]" />,
    },
    {
      num: "06",
      title: "Title Transparency & Handover",
      titleTa: "சட்டப்பூர்வ ஒப்படைப்பு & பட்டா உதவி",
      desc: "Delivering fully developed, litigation-free land with individual title documentation, immediate registration support, and patta transfer.",
      descTa: "எந்தவித வில்லங்கமுமின்றி தெளிவான மூலப்பத்திரங்கள், உடனடி பதிவு மற்றும் பட்டா பெயர் மாற்றத்துடன் உரிமையாளரிடம் ஒப்படைப்பு.",
      icon: <CheckCircle2 className="h-5 w-5 text-[#C6A15B]" />,
    },
  ];

  return (
    <section id="approach" className="relative bg-[#FFFFFF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {t.approach.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-3">
            <TextReveal
              text={t.approach.title}
              as="h2"
              className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-2 text-base text-[#77766F]">
              {t.approach.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Steps Timeline Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 0.1}>
              <div
                onClick={() => setActiveStep(idx)}
                className={`group relative h-full rounded-2xl border p-8 transition-all duration-200 cursor-pointer ${
                  activeStep === idx
                    ? "border-[#C6A15B] bg-[#F8F5EF] shadow-sm"
                    : "border-[#E8E2D7] bg-[#FFFFFF] hover:border-[#C6A15B]/50 hover:bg-[#F8F5EF]/50"
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-light text-[#C6A15B]">
                    {step.num}
                  </span>
                  <div className="rounded-xl border border-[#E8E2D7] bg-[#FFFFFF] p-2.5 shadow-xs">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-serif text-xl font-normal text-[#242820] group-hover:text-[#C6A15B] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-[#C6A15B] font-serif">
                  {step.titleTa}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#77766F]">
                  {step.desc}
                </p>

                {/* Bottom line indicator */}
                <div
                  className={`mt-6 h-0.5 w-full rounded-full transition-all duration-300 ${
                    activeStep === idx ? "bg-[#C6A15B]" : "bg-[#E8E2D7]"
                  }`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
