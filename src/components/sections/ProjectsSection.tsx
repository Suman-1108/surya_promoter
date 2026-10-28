"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "commercial" | "farm">("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative bg-[#F8F5EF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header & Filter Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                  {t.projects.badge}
                </span>
              </div>
            </ScrollReveal>

            <div className="mt-3">
              <TextReveal
                text={t.projects.title}
                as="h2"
                className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
              />
            </div>

            <ScrollReveal delay={0.2}>
              <p className="mt-2 text-base text-[#77766F]">
                {t.projects.subtitle}
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Pills */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 rounded-xl bg-[#FFFFFF] p-1.5 border border-[#E8E2D7]">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  filter === "all"
                    ? "bg-[#C6A15B] text-white"
                    : "text-[#77766F] hover:text-[#242820]"
                }`}
              >
                {t.projects.filterAll}
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  filter === "commercial"
                    ? "bg-[#C6A15B] text-white"
                    : "text-[#77766F] hover:text-[#242820]"
                }`}
              >
                {t.projects.filterCommercial}
              </button>
              <button
                onClick={() => setFilter("farm")}
                className={`rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                  filter === "farm"
                    ? "bg-[#C6A15B] text-white"
                    : "text-[#77766F] hover:text-[#242820]"
                }`}
              >
                {t.projects.filterFarm}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.15}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D7] bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#242820] transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#C6A15B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
