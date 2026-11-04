"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { projectsData } from "@/data/projects";
import {
  Home,
  Building2,
  TreePine,
  MapPin,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  Eye,
} from "lucide-react";

function ProjectsContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    { id: "all", name: language === "ta" ? "அனைத்து திட்டங்கள்" : "All Projects", count: projectsData.length },
    { id: "residential", name: language === "ta" ? "குடியிருப்பு" : "Residential", count: 2 },
    { id: "commercial", name: language === "ta" ? "வணிக நிலங்கள்" : "Commercial", count: 5 },
    { id: "farm", name: language === "ta" ? "பண்ணை நிலம்" : "Farm Land", count: 2 },
  ];

  const commercialProjects = useMemo(
    () => projectsData.filter((p) => p.category === "commercial"),
    []
  );

  const farmProjects = useMemo(
    () => projectsData.filter((p) => p.category === "farm"),
    []
  );

  const residentialProjects = useMemo(
    () => projectsData.filter((p) => p.category === "residential"),
    []
  );

  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18] font-sans selection:bg-[#C6A66B]/30">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full bg-[#173D2B] py-14 sm:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero/hero-farmland-aerial.jpg"
            alt="Surya Promoters Projects"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு" : "Verified Real Estate Portfolio"}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === "ta" ? "எங்கள் நில & மனை திட்டங்கள்" : "Our Projects in Madurai"}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {language === "ta"
                ? "குடியிருப்பு மனைப்பிரிவுகள், வணிகப் பெருநிலங்கள் மற்றும் இயற்கை பண்ணை எஸ்டேட்கள். 100% தூய கம்ப்யூட்டர் பட்டா மற்றும் பாதுகாப்புடன்."
                : "Explore our verified collection of residential townships, high-exposure commercial highway corridors, and managed agro-farmland across Madurai."}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#C6A66B] text-[#171B18] shadow-md scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                <span>{cat.name}</span>
                <span className="ml-2 font-mono text-[11px] opacity-80">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 1. THREE MAJOR CATEGORY CARDS OVERVIEW (Section 6) */}
      {/* ========================================================================= */}
      {(selectedCategory === "all") && (
        <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "முதன்மை பிரிவுகள்" : "Explore by Category"}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1">
              {language === "ta" ? "மூன்று முக்கிய ரியல் எஸ்டேட் பிரிவுகள்" : "Three Major Development Categories"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Category 1: Residential */}
            <div className="group rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/surya-green-enclave.jpg"
                  alt="Residential Projects"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/95 text-[#173D2B] flex items-center justify-center shadow-xs">
                  <Home className="h-5 w-5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono text-[#C6A66B] font-bold block">CATEGORY 01</span>
                  <h3 className="font-display text-xl font-bold">Residential</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Residential plots and flat developments with wide bitumen roads, water table, and individual patta.
                </p>
                <button
                  onClick={() => setSelectedCategory("residential")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition cursor-pointer"
                >
                  <span>Explore Residential</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#C6A66B]" />
                </button>
              </div>
            </div>

            {/* Category 2: Commercial */}
            <div className="group rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/vaigai/corridor-aerial.jpg"
                  alt="Commercial Projects"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/95 text-[#173D2B] flex items-center justify-center shadow-xs">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono text-[#C6A66B] font-bold block">CATEGORY 02</span>
                  <h3 className="font-display text-xl font-bold">Commercial</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Commercial buildings and commercial land situated along prime Ring Road, Anna Nagar, and NH-44 corridors.
                </p>
                <button
                  onClick={() => setSelectedCategory("commercial")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition cursor-pointer"
                >
                  <span>Explore Commercial</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#C6A66B]" />
                </button>
              </div>
            </div>

            {/* Category 3: Farm Land */}
            <div className="group rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/projects/orange-garden/hero-orchard.jpg"
                  alt="Farm Land Projects"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/95 text-[#173D2B] flex items-center justify-center shadow-xs">
                  <TreePine className="h-5 w-5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono text-[#C6A66B] font-bold block">CATEGORY 03</span>
                  <h3 className="font-display text-xl font-bold">Farm Land</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Agricultural land, orchards, and farm developments with perennial groundwater and weekend cottage setups.
                </p>
                <button
                  onClick={() => setSelectedCategory("farm")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition cursor-pointer"
                >
                  <span>Explore Farm Land</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#C6A66B]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* 2. COMMERCIAL PROJECTS SECTION (5 Projects - Section 8) */}
      {/* ========================================================================= */}
      {(selectedCategory === "all" || selectedCategory === "commercial") && (
        <section id="commercial" className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                High-Exposure Investment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1 flex items-center gap-2.5">
                <Building2 className="h-7 w-7 text-[#C6A66B]" />
                <span>Commercial Projects (5 Verified Locations)</span>
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Direct Highway Frontage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {commercialProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.heroImage}
                    alt={project.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#173D2B]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {project.categoryLabel[language]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="truncate">{project.location[language]}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold leading-snug">
                      {project.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Project Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {project.description[language]}
                  </p>

                  <div className="pt-4 border-t border-[#F5F4EE] flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-2.5 px-4 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Details</span>
                    </Link>

                    <Link
                      href={`/location#${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] hover:bg-white py-2.5 px-3.5 text-xs font-bold text-[#171B18] transition"
                      title="View Location on Map"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#C6A66B]" />
                      <span className="hidden sm:inline">Location</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* 3. FARM LAND PROJECTS SECTION (2 Projects - Section 9) */}
      {/* ========================================================================= */}
      {(selectedCategory === "all" || selectedCategory === "farm") && (
        <section id="farmland" className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                Pure Nature Living &amp; Orchard Estates
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1 flex items-center gap-2.5">
                <TreePine className="h-7 w-7 text-[#C6A66B]" />
                <span>Farm Land Projects (Client-Verified Photography)</span>
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              100% Genuine Agro Assets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {farmProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.heroImage}
                    alt={project.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#173D2B]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {project.categoryLabel[language]}
                    </span>
                    {project.slug === "orange-garden" && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-black font-mono text-[10px] font-extrabold uppercase">
                        Plots 1–10 Blueprint Live
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{project.location[language]}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                      {project.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.description[language]}
                  </p>

                  <div className="pt-4 border-t border-[#F5F4EE] flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-3 px-4 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Project Details</span>
                    </Link>

                    <Link
                      href={`/location#${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] hover:bg-white py-3 px-4 text-xs font-bold text-[#171B18] transition"
                    >
                      <MapPin className="h-4 w-4 text-[#C6A66B]" />
                      <span>Location</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* 4. RESIDENTIAL PROJECTS SECTION (2 Subcategories - Section 7) */}
      {/* ========================================================================= */}
      {(selectedCategory === "all" || selectedCategory === "residential") && (
        <section id="residential" className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 border-t border-[#E8E2D7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                Approved Residential Developments
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1 flex items-center gap-2.5">
                <Home className="h-7 w-7 text-[#C6A66B]" />
                <span>Residential Projects (2 Subcategories)</span>
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              DTCP / RERA Approved
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.heroImage}
                    alt={project.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#173D2B]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {project.id === "plot-projects" ? "Subcategory A: Plot Projects" : "Subcategory B: Flat Projects"}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{project.location[language]}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                      {project.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.description[language]}
                  </p>

                  <div className="pt-4 border-t border-[#F5F4EE] flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#173D2B] py-3 px-4 text-xs font-bold text-white shadow-xs hover:bg-[#122e20] transition"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </Link>

                    <Link
                      href={`/location#${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] hover:bg-white py-3 px-4 text-xs font-bold text-[#171B18] transition"
                    >
                      <MapPin className="h-4 w-4 text-[#C6A66B]" />
                      <span>Location</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F4EE] flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-3 border-[#173D2B] border-t-transparent" />
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
