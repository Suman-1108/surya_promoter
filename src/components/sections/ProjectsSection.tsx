"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const [activeType, setActiveType] = useState<"all" | "running" | "completed">("all");
  const [activeCategory, setActiveCategory] = useState<"all" | "commercial" | "farm" | "residential">("all");

  const runningCount = projectsData.filter((p) => p.projectType === "running" || p.status === "running" || p.status === "ongoing").length;
  const completedCount = projectsData.filter((p) => p.projectType === "completed" || p.status === "completed").length;

  const filteredProjects = projectsData.filter((project) => {
    // Type Filter
    if (activeType === "running") {
      const isRunning = project.projectType === "running" || project.status === "running" || project.status === "ongoing";
      if (!isRunning) return false;
    }
    if (activeType === "completed") {
      const isCompleted = project.projectType === "completed" || project.status === "completed";
      if (!isCompleted) return false;
    }

    // Category Filter
    if (activeCategory !== "all" && project.category !== activeCategory) {
      return false;
    }

    return true;
  });

  return (
    <section id="projects" className="relative bg-[#F8F5EF] py-12 md:py-16 text-[#242820] border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header & Filter Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                  {language === "ta" ? "சரிபார்க்கப்பட்ட மனைப்பிரிவுகள்" : "VERIFIED PROPERTY DEVELOPMENTS"}
                </span>
              </div>
            </ScrollReveal>

            <div className="mt-3">
              <TextReveal
                text={language === "ta" ? "நடைபெறும் & நிறைவடைந்த திட்டங்கள்" : "Running & Completed Projects"}
                as="h2"
                className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
              />
            </div>

            <ScrollReveal delay={0.2}>
              <p className="mt-2 text-base text-[#77766F]">
                {language === "ta"
                  ? "மதுரை மற்றும் அதன் சுற்றுவட்டாரப் பகுதிகளில் சூர்யா புரமோட்டர்ஸின் தீவிர செயல்பாட்டில் உள்ள திட்டங்கள் மற்றும் வெற்றிகரமாக முடிக்கப்பட்ட நில மேம்பாடுகளைக் காண்க."
                  : "Explore our active ongoing land developments and successfully delivered, registered layouts across Madurai."}
              </p>
            </ScrollReveal>
          </div>

          {/* Project Type Filter Tabs */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-[#FFFFFF] p-2 border border-[#E8E2D7] shadow-xs">
              <button
                onClick={() => setActiveType("all")}
                className={`rounded-xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition flex items-center gap-2 cursor-pointer ${
                  activeType === "all"
                    ? "bg-[#242820] text-white shadow-xs"
                    : "text-[#77766F] hover:text-[#242820] hover:bg-gray-100"
                }`}
              >
                <span>{language === "ta" ? "அனைத்து" : "All"}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeType === "all" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {projectsData.length}
                </span>
              </button>

              <button
                onClick={() => setActiveType("running")}
                className={`rounded-xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition flex items-center gap-2 cursor-pointer ${
                  activeType === "running"
                    ? "bg-[#C6A15B] text-white shadow-xs"
                    : "bg-emerald-50/60 text-emerald-800 hover:bg-emerald-100/60"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{language === "ta" ? "நடைபெறுகிறது" : "Running"}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeType === "running" ? "bg-white/20 text-white" : "bg-emerald-200 text-emerald-900"}`}>
                  {runningCount}
                </span>
              </button>

              <button
                onClick={() => setActiveType("completed")}
                className={`rounded-xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition flex items-center gap-2 cursor-pointer ${
                  activeType === "completed"
                    ? "bg-[#242820] text-white shadow-xs"
                    : "bg-blue-50/60 text-blue-800 hover:bg-blue-100/60"
                }`}
              >
                <CheckCircle2 className="h-3 w-3 text-blue-600" />
                <span>{language === "ta" ? "நிறைவடைந்தது" : "Completed"}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeType === "completed" ? "bg-white/20 text-white" : "bg-blue-200 text-blue-900"}`}>
                  {completedCount}
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Secondary Category Filter */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#E8E2D7]/80 pt-4">
          <span className="font-mono text-[11px] font-semibold text-[#77766F] uppercase tracking-wider mr-1">
            {language === "ta" ? "வகை:" : "Property Type:"}
          </span>
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#242820] text-white"
                : "bg-white text-[#77766F] hover:text-[#242820] border border-[#E8E2D7]"
            }`}
          >
            {language === "ta" ? "அனைத்து வகைகள்" : "All Types"}
          </button>
          <button
            onClick={() => setActiveCategory("commercial")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              activeCategory === "commercial"
                ? "bg-[#242820] text-white"
                : "bg-white text-[#77766F] hover:text-[#242820] border border-[#E8E2D7]"
            }`}
          >
            {language === "ta" ? "வணிக நிலம்" : "Commercial Land"}
          </button>
          <button
            onClick={() => setActiveCategory("farm")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              activeCategory === "farm"
                ? "bg-[#242820] text-white"
                : "bg-white text-[#77766F] hover:text-[#242820] border border-[#E8E2D7]"
            }`}
          >
            {language === "ta" ? "பண்ணை நிலம்" : "Farm Plots"}
          </button>
          <button
            onClick={() => setActiveCategory("residential")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              activeCategory === "residential"
                ? "bg-[#242820] text-white"
                : "bg-white text-[#77766F] hover:text-[#242820] border border-[#E8E2D7]"
            }`}
          >
            {language === "ta" ? "குடியிருப்பு மனைகள்" : "Residential Plots"}
          </button>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 py-16 text-center bg-white rounded-3xl border border-[#E8E2D7]">
            <p className="font-display text-lg font-bold text-[#111827]">
              {language === "ta" ? "இந்த வகையில் திட்டங்கள் எதுவும் இல்லை" : "No projects found matching the criteria."}
            </p>
            <button
              onClick={() => {
                setActiveType("all");
                setActiveCategory("all");
              }}
              className="mt-3 text-xs font-mono font-bold text-[#C6A15B] underline uppercase cursor-pointer"
            >
              {language === "ta" ? "வடிகட்டியை மீட்டமைக்கவும்" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="mt-8 md:mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.15}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* View All Projects / Inquiry CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D7] bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#242820] transition hover:border-[#C6A15B] hover:text-[#C6A15B] shadow-xs"
          >
            <span>{language === "ta" ? "உங்கள் திட்டத்தை ஆலோசிக்க" : "Discuss Your Next Property"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#C6A15B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
