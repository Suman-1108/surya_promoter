"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function ModernHero() {
  const { language } = useLanguage();

  // Typewriter effect for headline
  const line1Target = language === "ta" ? "சூர்யா புரமோட்டர்ஸ்" : "Surya Promoters";
  const line2Target = language === "ta" ? "நில மேம்பாட்டாளர்கள்" : "Land & Property Developers";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    setTypedLine1("");
    setTypedLine2("");
    setIsTypingLine1(true);
    setIsDoneTyping(false);

    let charIndex1 = 0;
    let charIndex2 = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLine1 = () => {
      if (charIndex1 < line1Target.length) {
        setTypedLine1(line1Target.slice(0, charIndex1 + 1));
        charIndex1++;
        timeoutId = setTimeout(typeLine1, 45);
      } else {
        setIsTypingLine1(false);
        timeoutId = setTimeout(typeLine2, 140);
      }
    };

    const typeLine2 = () => {
      if (charIndex2 < line2Target.length) {
        setTypedLine2(line2Target.slice(0, charIndex2 + 1));
        charIndex2++;
        timeoutId = setTimeout(typeLine2, 35);
      } else {
        setIsDoneTyping(true);
      }
    };

    timeoutId = setTimeout(typeLine1, 80);

    return () => clearTimeout(timeoutId);
  }, [language, line1Target, line2Target]);

  return (
    <section className="relative w-full bg-[#0A0D12] text-white pt-6 pb-8 md:pt-8 md:pb-12 border-b border-white/10 overflow-hidden">
      {/* Background glow subtleties */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EAB308]/5 blur-3xl pointer-events-none" />

      {/* Main Wide Container */}
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 xl:grid-cols-12 xl:gap-12">
          
          {/* Left Column: Heading, Subtitle, Copy, Buttons, Facts */}
          <div className="xl:col-span-6 space-y-4 lg:space-y-5">
            
            {/* Main Headline (Increased prominent headline size as requested) */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px] font-extrabold leading-[1.08] tracking-tight min-h-[95px] sm:min-h-[115px] lg:min-h-[135px]">
              <span className="text-white">{typedLine1}</span>
              {isTypingLine1 && (
                <span className="inline-block w-1.5 h-8 sm:h-10 lg:h-12 bg-white ml-1.5 align-middle animate-pulse" />
              )}
              <br />
              <span className="text-[#EAB308]">{typedLine2}</span>
              {!isTypingLine1 && (
                <span
                  className={`inline-block w-1.5 h-8 sm:h-10 lg:h-12 bg-[#EAB308] ml-1.5 align-middle ${
                    isDoneTyping ? "animate-pulse" : ""
                  }`}
                />
              )}
            </h1>

            {/* Sublabel / Tagline (Reduced text size as requested) */}
            <div className="pt-0.5">
              <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#9CA3AF]">
                {language === "ta"
                  ? "நிறுவப்பட்டது 2010 · மதுரை, தமிழ்நாடு · இந்திய விமானப்படை தலைமை"
                  : "FOUNDED 2010 · MADURAI, TAMIL NADU · IAF VETERAN LEADERSHIP"}
              </p>
            </div>

            {/* Description (Reduced text size as requested - sleek & compact) */}
            <p className="max-w-xl text-xs sm:text-[13px] md:text-sm leading-relaxed text-[#9CA3AF]">
              {language === "ta"
                ? "சூர்யா புரமோட்டர்ஸ் 2010 ஆம் ஆண்டு இந்திய விமானப்படை ஓய்வுபெற்ற அதிகாரியான திரு. மாணிக்கம் நடராஜன் அவர்களால் நிறுவப்பட்டது. நாங்கள் மதுரையைச் சுற்றிலும் குடியிருப்பு, வணிகம், தொழிற்பேட்டை மற்றும் விவசாய நில மேம்பாடு மற்றும் விற்பனையில் நிபுணத்துவம் பெற்றுள்ளோம்."
                : "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran. We specialize in property development and marketing across residential, commercial, industrial and agricultural property categories in and around Madurai."}
            </p>

            {/* Two Action Buttons side-by-side */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-6 py-3.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0A0D12] shadow-md transition-all hover:bg-[#ca9a07] hover:shadow-lg hover:scale-[1.02]"
              >
                <span>{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Your Next Property"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                <span>{language === "ta" ? "திட்டங்களை காண்க" : "View Project Record"}</span>
              </a>
            </div>

            {/* Horizontal Metrics Strip */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
              {/* Stat 1 */}
              <div className="border-l-2 border-[#EAB308] pl-3">
                <div className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white">
                  16+ <span className="text-xs font-semibold text-gray-400">Yrs</span>
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-gray-400 mt-0.5">
                  ESTD. 2010
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-l-2 border-white/20 pl-3">
                <div className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white">
                  IAF Vet
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-gray-400 mt-0.5">
                  LEADERSHIP
                </div>
              </div>

              {/* Stat 3 */}
              <div className="border-l-2 border-white/20 pl-3">
                <div className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white">
                  Madurai
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-gray-400 mt-0.5">
                  LOCATION (TN)
                </div>
              </div>

              {/* Stat 4 */}
              <div className="border-l-2 border-[#EAB308] pl-3">
                <div className="font-display text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#EAB308]">
                  2 + 2
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-gray-400 mt-0.5">
                  {language === "ta" ? "நடைபெறும் & நிறைவடைந்தது" : "RUNNING & COMPLETED"}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Large landscape property photo with gated community plotted layout image & gold glow border */}
          <div className="xl:col-span-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border-2 border-[#EAB308]/60 shadow-[0_0_35px_rgba(234,179,8,0.2)] bg-[#161B22] group">
              <Image
                src="/images/hero/hero-gated-layout.jpg"
                alt="Surya Promoters Gated Plotted Community & Property Developments in Madurai"
                fill
                priority
                quality={95}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Information Strip at bottom of image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-[#0A0D12]/90 px-4 py-2.5 backdrop-blur-md shadow-lg border border-white/15">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    SURYA PROMOTERS · MADURAI
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-[#EAB308] uppercase tracking-wider">
                  ESTD. 2010
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center text-center">
          <a
            href="#featured-projects"
            className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#EAB308] transition-colors"
          >
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold">
              SCROLL DOWN
            </span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#EAB308]" />
          </a>
        </div>

      </div>
    </section>
  );
}
