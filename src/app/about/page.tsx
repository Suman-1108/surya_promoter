"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  FileCheck,
  Building,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  const values = [
    {
      title: language === "ta" ? "இராணுவ ஒழுங்கு & நேர்மை" : "Military Standard Rigor",
      desc:
        language === "ta"
          ? "இந்திய விமானப்படை பணியில் பெற்ற ஒழுக்கம், கடமை மற்றும் 100% நேர்மை ஒவ்வொரு மனைப்பிரிவிலும் பின்பற்றப்படுகிறது."
          : "Discipline, precision, and complete transparency instilled through years of Indian Air Force defense service.",
      icon: Award,
    },
    {
      title: language === "ta" ? "பூஜ்ஜிய சட்டச் சிக்கல் கொள்கை" : "Zero-Dispute Title Protocol",
      desc:
        language === "ta"
          ? "30 ஆண்டுகால வில்லங்கச் சான்றிதழ், மூலப்பத்திர சரிபார்ப்பு மற்றும் வருவாய்த்துறை ஆவணங்கள் முழுமையாக ஆய்வு செய்யப்படுகின்றன."
          : "Rigorous 30-year encumbrance certification, revenue trace scrutiny, and registered cadastral boundaries.",
    },
    {
      title: language === "ta" ? "நேரடி எல்லைக் கல் அளவீடு" : "Boundary Stone Demarcation",
      desc:
        language === "ta"
          ? "ஒவ்வொரு மனைக்கும் தனித்தனியாக அரசு சர்வேயர் மூலம் அளவீடு செய்யப்பட்டு எல்லைக் கற்கள் நடப்பட்டு வழங்கப்படுகிறது."
          : "Every plot is precisely surveyed with certified boundary stones, wide approach roads, and individual patta.",
    },
    {
      title: language === "ta" ? "மதுரையின் வளர்ச்சி மையங்கள்" : "Strategic Appreciation Belts",
      desc:
        language === "ta"
          ? "மதுரையின் ரிங் ரோடு, NH-44 மற்றும் முக்கிய வளர்ச்சி வழித்தடங்களில் அதிக மதிப்பு கூடும் இடங்களில் நிலங்கள் தேர்வு செய்யப்படுகின்றன."
          : "Carefully curated land acquisitions in Madurai's fastest-growing highway, airport, and ring road corridors.",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* About Main Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mission, Vision, Milestones */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-emerald-800">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                {language === "ta" ? "இந்திய விமானப்படை வீரரின் தலைமை" : "INDIAN AIR FORCE VETERAN LEADERSHIP"}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">
              {language === "ta"
                ? "இராணுவ ஒழுக்கம், அசைக்க முடியாத நேர்மை மற்றும் 100% பட்டா பாதுகாப்பு"
                : "Built On Military Discipline, Honesty & Absolute Patta Integrity"}
            </h1>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {language === "ta"
                ? "2010-ஆம் ஆண்டு இந்திய விமானப்படை வீரர் திரு. மாணிக்கம் நடராஜன் அவர்களால் சூர்யா புரமோட்டர்ஸ் நிறுவப்பட்டது. மதுரை மக்களுக்கு எவ்வித சட்டச் சிக்கலும் இல்லாத, 100% தெளிவான கணினி பட்டாவுடன் கூடிய தலைமுறை சொத்துக்களை உருவாக்குவதே எங்கள் தலையாய நோக்கம்."
                : "Founded in 2010 by Indian Air Force Veteran Mr. Manickam Natarajan. We bring military standard rigor, zero dispute land titles, transparent revenue documentation, and generational growth to land buyers across Madurai."}
            </p>

            {/* 4 Milestones Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-4 w-4 text-[#EAB308] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#0F172A]">Estd. 2010</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-4 w-4 text-[#EAB308] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#0F172A]">100% Clear Computer Patta</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-4 w-4 text-[#EAB308] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#0F172A]">1000+ Happy Families</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-4 w-4 text-[#EAB308] shrink-0" />
                <span className="font-mono text-xs font-bold text-[#0F172A]">Zero Legal Disputes</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+917708966452"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition shadow-md hover:scale-105"
              >
                <Phone className="h-4 w-4 text-[#EAB308]" />
                <span>{language === "ta" ? "நேரடி அழைப்பு: +91 77089 66452" : "Call Founder: +91 77089 66452"}</span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 hover:border-gray-900 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition"
              >
                <span>{language === "ta" ? "திட்டங்களை காண்க" : "View Projects"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#EAB308] bg-white p-2 shadow-xl max-w-sm w-full">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/founder/founder.png"
                  alt="Mr. Manickam Natarajan - Founder, Surya Promoters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold mb-1.5">
                    <ShieldCheck className="h-3 w-3" />
                    <span>IAF VETERAN</span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold">Mr. Manickam Natarajan</h3>
                  <p className="text-xs text-amber-300 font-mono mt-0.5">
                    {language === "ta" ? "நிறுவனர் & நிர்வாக இயக்குனர்" : "Founder & Managing Director"}
                  </p>
                  <p className="text-[11px] text-gray-300 mt-1">
                    {language === "ta" ? "16+ ஆண்டுகள் இந்திய விமானப்படை சேவை" : "16+ Years Indian Air Force Veteran"}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-6">
            {language === "ta" ? "எங்கள் அடிப்படை விழுமியங்கள்" : "The 4 Pillars of Defense-Standard Trust"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((val, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#EAB308] hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-[#EAB308]/15 text-[#854D0E] font-mono font-bold flex items-center justify-center mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-display text-sm font-bold text-[#0F172A]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}
