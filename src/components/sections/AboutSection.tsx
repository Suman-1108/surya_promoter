"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="relative bg-[#FFFFFF] py-6 md:py-10 text-[#292B27] border-b border-[#EAE5DC]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Authentic Architectural Land Photo */}
          <div className="relative lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EAE5DC] bg-[#F8F5EF] shadow-xs">
                <Image
                  src="/images/projects/vaigai-commercial.jpg"
                  alt="Surya Promoters Property Development in Madurai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </ScrollReveal>

            {/* Simple Established Badge */}
            <div className="absolute -bottom-5 -right-2 hidden sm:block md:-bottom-6 md:right-4">
              <ScrollReveal delay={0.2} direction="up">
                <div className="rounded-xl border border-[#EAE5DC] bg-[#F8F5EF] px-5 py-3 shadow-xs">
                  <span className="block font-serif text-2xl font-bold text-[#C6A15B]">
                    2010
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77766F]">
                    ESTABLISHED · MADURAI
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Company Introduction & Verified Heritage */}
          <div className="space-y-6 lg:col-span-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EAE5DC] bg-[#F8F5EF] px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                  {language === "ta" ? "எங்களைப் பற்றி" : "ABOUT SURYA PROMOTERS"}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
                {language === "ta"
                  ? "நம்பிக்கை மற்றும் வெளிப்படைத்தன்மையுடன் நில மேம்பாடு."
                  : "Dedicated To Trust, Value & Sound Land Development."}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-display text-lg leading-relaxed text-[#111827]/90 md:text-xl">
                {language === "ta"
                  ? "சூர்யா புரமோட்டர்ஸ் 2010 ஆம் ஆண்டு இந்திய விமானப்படை ஓய்வுபெற்ற அதிகாரியான திரு. மாணிக்கம் நடராஜன் அவர்களால் தொடங்கப்பட்டது."
                  : "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm md:text-base leading-relaxed text-[#77766F]">
                {language === "ta"
                  ? "நாங்கள் மதுரையைச் சுற்றிலும் பல்வேறு வீட்டு மனைகள், தொழிற்பேட்டை, வணிக வளாகங்கள், விவசாய நிலங்கள் மற்றும் பண்ணைத் தோட்டத் திட்டங்களை வெற்றிகரமாக மேற்கொண்டுள்ளோம். எங்கள் நிறுவனம் சொத்து மேம்பாடு மற்றும் சந்தைப்படுத்தலில் கவனம் செலுத்தி, வாடிக்கையாளர்களின் குடியிருப்பு, வணிகம், விவசாயம் மற்றும் முதலீட்டு தேவைகளுக்கு ஏற்ற நிலங்களை தேர்வு செய்ய உதவுகிறது."
                  : "We have carried out various housing, industrial, commercial, agricultural and farmhouse projects in and around Madurai. Our business focuses on property development and marketing, helping customers find land suited to their residential, commercial, farming and investment requirements."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-medium text-[#292B27]">
                  <ShieldCheck className="h-4 w-4 text-[#C6A15B]" />
                  <span>{language === "ta" ? "தெளிவான மூலப்பத்திரங்கள்" : "Verified Parent Deeds"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#292B27]">
                  <ShieldCheck className="h-4 w-4 text-[#C6A15B]" />
                  <span>{language === "ta" ? "துல்லியமான எல்லை அளவீடு" : "Demarcated Boundaries"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#292B27]">
                  <ShieldCheck className="h-4 w-4 text-[#C6A15B]" />
                  <span>{language === "ta" ? "நேரடி ஆலோசனை" : "Direct Customer Guidance"}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#292B27] hover:text-[#C6A15B] transition-colors"
                >
                  <span>{language === "ta" ? "மேலும் அறிய" : "Read Our Full Story"}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#C6A15B]" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
