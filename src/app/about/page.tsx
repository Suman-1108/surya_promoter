"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  Compass,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  const achievements = [
    { value: "16+ Yrs", label: "Military-Grade Due Diligence", sub: "Established in 2010" },
    { value: "100%", label: "Verified Computer Patta", sub: "Clear Title Deeds" },
    { value: "1,000+", label: "Happy Landowner Families", sub: "Across Tamil Nadu" },
    { value: "Zero", label: "Legal Disputes Since Inception", sub: "Defense Standard" },
  ];

  const coreValues = [
    {
      title: "1. Military Discipline & Transparency",
      desc: "Every plot demarcation, revenue survey marker, and registration deed adheres to the highest level of administrative integrity instilled through Indian Air Force service.",
    },
    {
      title: "2. 100% Computer Patta Guarantee",
      desc: "We sell only legally unassailable land with verified parent documents spanning 30+ years, zero encumbrance, and immediate individual patta transfer.",
    },
    {
      title: "3. Direct Developer Connectivity",
      desc: "Zero broker middlemen or hidden markups. Land buyers interact directly with our senior promoter leadership for true valuation and absolute safety.",
    },
    {
      title: "4. Infrastructure-First Delivery",
      desc: "All developments feature all-weather motorable approach roads, clear physical boundary stones, and strategic proximity to Madurai's expanding growth rings.",
    },
  ];

  const testimonials = [
    {
      quote: "Buying commercial land on the Outer Ring Road with Surya Promoters was the smoothest property transaction I've ever made. The patta and documentation were 100% verified.",
      name: "Er. K. Senthil Kumar",
      location: "Madurai Entrepreneur",
      project: "Vaigai Elite Garden",
    },
    {
      quote: "As an agro-investor, having verified sweet groundwater and pre-planted citrus trees at Orange Garden with individual boundary markers gave our family immense peace of mind.",
      name: "Dr. R. Meenakshisundaram",
      location: "Chennai",
      project: "Orange Garden",
    },
    {
      quote: "Mr. Manickam Natarajan's Air Force background reflects in every single interaction. True to their word, the patta was transferred directly into my name within 15 days.",
      name: "Thiru. S. Arumugam",
      location: "Retd. State Officer, Madurai",
      project: "Surya Green Enclave",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18] font-sans selection:bg-[#C6A66B]/30">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full bg-[#173D2B] py-16 sm:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero/hero-aerial-farmland.jpg"
            alt="About Surya Promoters"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C6A66B] font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-[#C6A66B]" />
              <span>Estd. 2010 · Madurai, Tamil Nadu</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {language === "ta" ? "சூர்யா புரமோட்டர்ஸ்: எங்கள் வரலாறு & தொலைநோக்கு" : "Company Profile & Veteran Legacy"}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              Founded on the bedrock of defense discipline, absolute legal transparency, and generational land wealth creation for families across Madurai and Tamil Nadu.
            </p>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 1. ABOUT SURYA PROMOTERS & COMPANY HISTORY (Section 13.1 & 13.2) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              1. Company Profile &amp; Origins
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#173D2B]">
              About Surya Promoters (Estd. 2010)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Surya Promoters was established in 2010 in Madurai, Tamil Nadu, with a straightforward yet revolutionary mission in real estate: to eradicate title ambiguities, middleman markups, and boundary conflicts from the land-buying experience.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Over the past 16+ years, Surya Promoters has earned the unshakable trust of over 1,000+ landowner families, entrepreneurs, and institutions. Every acre we acquire undergoes exhaustive 30-year revenue vetting, encumbrance scrutiny, and physical boundary demarcation with surveyed stones before reaching the market.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D7] text-xs font-mono font-bold text-[#173D2B]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Zero Legal Encumbrances</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D7] text-xs font-mono font-bold text-[#173D2B]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Immediate Individual Patta</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D7] text-xs font-mono font-bold text-[#173D2B]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Registered DTCP &amp; Agro Layouts</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8E2D7] bg-white shadow-xl">
              <Image
                src="/images/hero/hero-gated-layout.jpg"
                alt="Surya Promoters Township"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-xs text-[#C6A66B] font-bold">PLANNED INFRASTRUCTURE</span>
                <h3 className="font-display text-lg font-bold">Surya Green Enclave &amp; Township Developments</h3>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. FOUNDER PROFILE & VISION (Section 13.3 & 13.4) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white border-y border-[#E8E2D7] py-16 sm:py-20">
        <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Real Founder Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border-4 border-[#C6A66B] bg-[#173D2B] shadow-2xl">
                <Image
                  src="/images/founder/founder.png"
                  alt="Mr. Manickam Natarajan, Founder & Managing Director"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="font-mono text-xs text-[#C6A66B] font-bold uppercase tracking-widest block">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-1">
                    Mr. Manickam Natarajan
                  </h3>
                  <span className="inline-block mt-1 font-mono text-xs text-emerald-300">
                    Indian Air Force (IAF) Veteran · 2010
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Vision & Mission Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                2. Founder Profile &amp; Vision
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#173D2B]">
                "Land Ownership is a Sacred Family Milestone, Not a Game of Speculation."
              </h2>
              <blockquote className="p-5 rounded-2xl bg-[#F5F4EE] border-l-4 border-[#C6A66B] text-sm text-gray-700 italic leading-relaxed">
                "Having served the nation in the Indian Air Force, I learned early that clarity, discipline, and uncompromising truth are non-negotiable. When a family invests their hard-earned money in land, they are investing in the foundation of their children's future. That trust must be guarded with military-level vigilance."
                <span className="block not-italic font-bold text-[#173D2B] font-mono text-xs mt-3">
                  — Mr. Manickam Natarajan, Founder
                </span>
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <h4 className="font-display text-base font-bold text-[#173D2B]">Our Mission</h4>
                  <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                    To deliver 100% legally clear, well-connected residential, commercial, and agricultural land in Madurai with genuine ownership pride.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <h4 className="font-display text-base font-bold text-[#173D2B]">Our Vision</h4>
                  <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                    To be Southern Tamil Nadu's most respected real estate firm, synonymous with rock-solid patta documentation and transparent promoter ethics.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. EXPERIENCE & ACHIEVEMENTS (Section 13.6) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
            Verified Milestones
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1">
            16+ Years of Proven Industry Leadership
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E8E2D7] shadow-sm text-center space-y-2 hover:shadow-md transition"
            >
              <span className="block font-display text-3xl sm:text-4xl font-extrabold text-[#173D2B]">
                {item.value}
              </span>
              <h4 className="font-display text-sm font-bold text-[#171B18]">{item.label}</h4>
              <span className="block font-mono text-[11px] text-[#64865A]">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE SURYA PROMOTERS (Section 13.8) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#173D2B] text-white py-16 sm:py-20">
        <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              The Surya Advantage
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold mt-1">
              Why Hundreds of Families Trust Surya Promoters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#C6A66B]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. CUSTOMER TESTIMONIALS (Section 13.9) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
            Client Experiences
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1">
            Words from Our Landowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D7] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-[#C6A66B]" />
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F4EE]">
                <h4 className="font-display text-sm font-bold text-[#171B18]">{t.name}</h4>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-1 font-mono">
                  <span>{t.location}</span>
                  <span className="text-[#173D2B] font-bold">{t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
