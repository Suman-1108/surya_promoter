"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Building2,
  LayoutGrid,
  Layers,
  MapPin,
  FileText,
  Images,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();

  // The 7 Workflow Icon Cards
  const workflowCards = [
    {
      step: "01",
      title: language === "ta" ? "எங்கள் திட்டங்கள்" : "Our Projects",
      desc:
        language === "ta"
          ? "சூர்யா புரமோட்டர்ஸின் அனைத்து திட்டங்களையும் பாருங்கள்."
          : "Explore all Surya Promoters projects.",
      icon: Building2,
      href: "/projects",
    },
    {
      step: "02",
      title: language === "ta" ? "வகையைத் தேர்வு செய்க" : "Select Category",
      desc:
        language === "ta"
          ? "வீட்டு மனை, வணிக நிலம் அல்லது பண்ணை நிலத்தைத் தேர்வு செய்யவும்."
          : "Choose Residential, Commercial or Farm Land.",
      icon: LayoutGrid,
      href: "/projects",
    },
    {
      step: "03",
      title: language === "ta" ? "உட்பிரிவைத் தேர்வு செய்க" : "Select Subcategory",
      desc:
        language === "ta"
          ? "மனைகள், கட்டிடங்கள் அல்லது விவசாய நிலங்கள்."
          : "Select Flats, Plots, Buildings or Land.",
      icon: Layers,
      href: "/projects",
    },
    {
      step: "04",
      title: language === "ta" ? "திட்டத்தைத் தேர்வு செய்க" : "Choose Project",
      desc:
        language === "ta"
          ? "விற்பனைக்கு உள்ள திட்ட அட்டைகளை பார்க்கவும்."
          : "Browse available project cards.",
      icon: MapPin,
      href: "/projects",
    },
    {
      step: "05",
      title: language === "ta" ? "திட்ட விவரங்கள்" : "Project Details",
      desc:
        language === "ta"
          ? "முழுமையான திட்ட விவரங்கள் & தள வரைபடத்தை அறியவும்."
          : "Explore complete project information.",
      icon: FileText,
      href: "/projects/orange-garden",
    },
    {
      step: "06",
      title: language === "ta" ? "ஆவணங்கள் & படங்கள்" : "Explore Resources",
      desc:
        language === "ta"
          ? "தள புகைப்படங்கள், வரைபடங்கள் மற்றும் ஆவணங்களை பாருங்கள்."
          : "View Gallery, Location and Download Resources.",
      icon: Images,
      href: "/gallery",
    },
    {
      step: "07",
      title: language === "ta" ? "தொடர்பு & விசாரணை" : "Contact & Enquiry",
      desc:
        language === "ta"
          ? "சூர்யா புரமோட்டர்ஸை தொடர்பு கொண்டு ஆலோசிக்கவும்."
          : "Contact Surya Promoters and submit an enquiry.",
      icon: MessageCircle,
      href: "/contact",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* ========================================================================= */}
      {/* 1. CENTRAL HERO SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[360px] md:min-h-[400px] border border-[#E2E8F0] shadow-sm flex flex-col justify-center p-6 sm:p-10 lg:p-12">
        {/* Cinematic Aerial Plotted Background Image */}
        <Image
          src="/images/projects/vaigai/corridor-aerial.jpg"
          alt="Surya Promoters Plotted Land Madurai"
          fill
          priority
          sizes="(max-width: 1760px) 100vw, 1760px"
          className="object-cover"
        />

        {/* Premium Dark Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A10]/95 via-[#0D261A]/85 to-[#061A10]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/40" />

        {/* Hero Content with Subtle Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl space-y-4 sm:space-y-5 text-white"
        >
          {/* Veteran Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 backdrop-blur-md px-3.5 py-1 text-emerald-300">
            <ShieldCheck className="h-4 w-4 text-[#EAB308]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {language === "ta" ? "16+ வருட விமானப்படை பாதுகாப்பு நெறிமுறை" : "16+ Yrs IAF Veteran Leadership · Estd. 2010"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            {language === "ta" ? "உங்கள் நிலம். உங்கள் எதிர்காலம்." : "Your Land. Your Future."}
          </h1>

          {/* Supporting Heading */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-normal">
            {language === "ta"
              ? "சூர்யா புரமோட்டர்ஸுடன் பிரத்யேக குடியிருப்பு மனைகள், வணிக நிலங்கள் & பண்ணை நிலங்களை கண்டறியுங்கள்."
              : "Discover Residential, Commercial & Farm Land Opportunities with Surya Promoters."}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition hover:scale-105"
            >
              <span>{language === "ta" ? "திட்டங்களை காண்க" : "Explore Projects"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-xs sm:text-sm font-bold backdrop-blur-sm transition"
            >
              <MessageCircle className="h-4 w-4 text-[#EAB308]" />
              <span>{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Your Project"}</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEVEN WORKFLOW ICON CARDS                                              */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        
        {/* Row 1: First 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {workflowCards.slice(0, 4).map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.step}
                href={card.href}
                className="group bg-white rounded-3xl p-6 border border-[#E2E8F0] hover:border-[#EAB308] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon + Step Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0F291E] to-[#1E3A2B] text-[#EAB308] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EAB308]/15 text-[#854D0E]">
                      {card.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Arrow Action Indicator */}
                <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {language === "ta" ? "தொடர" : "Proceed"}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-[#F1F5F9] group-hover:bg-[#EAB308] text-[#64748B] group-hover:text-[#0A0D12] flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Row 2: Remaining 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {workflowCards.slice(4, 7).map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.step}
                href={card.href}
                className="group bg-white rounded-3xl p-6 border border-[#E2E8F0] hover:border-[#EAB308] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon + Step Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0F291E] to-[#1E3A2B] text-[#EAB308] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EAB308]/15 text-[#854D0E]">
                      {card.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Arrow Action Indicator */}
                <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {language === "ta" ? "தொடர" : "Proceed"}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-[#F1F5F9] group-hover:bg-[#EAB308] text-[#64748B] group-hover:text-[#0A0D12] flex items-center justify-center transition-all group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </section>

    </div>
  );
}
