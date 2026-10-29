"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleTa: string;
  category: string;
  categoryTa: string;
  description: string;
  descriptionTa: string;
  image: string;
}

export default function ModernFeaturedProperties() {
  const { language } = useLanguage();

  const projects: ProjectItem[] = [
    {
      id: "vaigai-elite",
      slug: "vaigai-elite-commercial-land",
      title: "Vaigai Elite Commercial Land",
      titleTa: "வைகை எலைட் வணிக நிலம்",
      category: "Commercial Land",
      categoryTa: "வணிக நிலம்",
      description:
        "Land suitable for proposed hospitals, hospitality establishments, godowns, warehouses and other commercial projects.",
      descriptionTa:
        "மருத்துவமனைகள், தங்கும் விடுதிகள், கிடங்குகள், குடோன்கள் மற்றும் வணிகத் திட்டங்களுக்கு ஏற்ற முதன்மையான வணிக நிலம்.",
      image: "/images/projects/vaigai-commercial.jpg",
    },
    {
      id: "madurai-farms",
      slug: "madurai-farms-and-fruits",
      title: "Madurai Farms and Fruits",
      titleTa: "மதுரை ஃபார்ம்ஸ் அண்ட் ஃப்ரூட்ஸ்",
      category: "Farm Project",
      categoryTa: "பண்ணைத் திட்டம்",
      description:
        "Farm plots for agricultural activities, fruit cultivation, farmhouse development and investment.",
      descriptionTa:
        "விவசாய நடவடிக்கைகள், பழ சாகுபடி, பண்ணை வீடு மேம்பாடு மற்றும் சிறந்த முதலீட்டிற்கான பண்ணை மனைகள்.",
      image: "/images/projects/madurai-farms.jpg",
    },
    {
      id: "orange-garden",
      slug: "orange-garden",
      title: "Orange Garden",
      titleTa: "ஆரஞ்ச் கார்டன்",
      category: "Farm Project",
      categoryTa: "பண்ணைத் திட்டம்",
      description:
        "A farm project offering opportunities for orchard development, farmhouse ownership and investment.",
      descriptionTa:
        "பழத்தோட்ட மேம்பாடு, பண்ணை வீடு உரிமை மற்றும் நீண்டகால முதலீட்டிற்கான சிறந்த வாய்ப்புகளை வழங்கும் பண்ணைத் திட்டம்.",
      image: "/images/projects/orange-garden.jpg",
    },
  ];

  return (
    <section id="featured-projects" className="w-full bg-[#FFFFFF] py-8 md:py-14 border-b border-[#EAE5DC]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[#C6A15B]">
              {language === "ta" ? "சிறப்பு திட்டங்கள் · மதுரை" : "FEATURED PROJECTS · MADURAI"}
            </span>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
              {language === "ta" ? "எங்கள் திட்டங்கள்" : "Our Ongoing Projects"}
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#77766F] max-w-2xl">
              {language === "ta"
                ? "மதுரையைச் சுற்றிலும் கவனமாக தேர்ந்தெடுக்கப்பட்ட வணிக மற்றும் பண்ணைத் திட்டங்கள்."
                : "Carefully curated commercial land and agro-farm development parcels in and around Madurai."}
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#111827] hover:text-[#C6A15B] transition"
          >
            <span>{language === "ta" ? "அனைத்து திட்டங்கள்" : "View Complete Portfolio"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Projects Cards Widescreen Grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#EAE5DC] bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-[#C6A15B]/50 hover:-translate-y-1"
            >
              {/* Card Landscape Image Banner (16:10 ratio) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={language === "ta" ? project.titleTa : project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Category Badge on Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-xl bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#111827] shadow-md backdrop-blur-xs border border-white/60">
                    {language === "ta" ? project.categoryTa : project.category}
                  </span>
                </div>

                {/* Status Badge: Ongoing */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F1E2E]/90 px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {language === "ta" ? "நடைபெறுகிறது" : "Ongoing"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 lg:p-7 justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#111827] transition-colors group-hover:text-[#C6A15B]">
                    <Link href={`/projects/${project.slug}`}>
                      {language === "ta" ? project.titleTa : project.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#77766F]">
                    {language === "ta" ? project.descriptionTa : project.description}
                  </p>
                </div>

                {/* 3 Action Buttons */}
                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Get Price & Availability */}
                    <a
                      href={`https://wa.me/917708966452?text=${encodeURIComponent(
                        `Hello Surya Promoters, I would like to inquire about price & availability for ${project.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#F8F5EF] border border-[#EAE5DC] px-3 py-2.5 text-center font-display text-[11px] font-bold uppercase tracking-wider text-[#111827] hover:bg-[#C6A15B] hover:text-white transition"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{language === "ta" ? "விலை விவரம்" : "Price & Info"}</span>
                    </a>

                    {/* Book a Free Site Visit */}
                    <a
                      href={`https://wa.me/917708966452?text=${encodeURIComponent(
                        `Hello Surya Promoters, I would like to book a free site visit for ${project.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#F8F5EF] border border-[#EAE5DC] px-3 py-2.5 text-center font-display text-[11px] font-bold uppercase tracking-wider text-[#111827] hover:bg-[#C6A15B] hover:text-white transition"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{language === "ta" ? "இடப் பார்வை" : "Site Visit"}</span>
                    </a>
                  </div>

                  {/* View Details */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] py-2.5 px-4 font-display text-xs font-bold uppercase tracking-widest text-white shadow-xs transition hover:bg-[#C6A15B] hover:text-[#0F1E2E]"
                  >
                    <span>{language === "ta" ? "முழு விவரங்கள் காண்க" : "View Details"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
