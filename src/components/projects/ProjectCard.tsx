"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md">
      {/* Media Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8F5EF]">
        <Image
          src={project.heroImage}
          alt={project.title[language]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-[#FFFFFF]/90 px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#242820] backdrop-blur-xs border border-[#E8E2D7] shadow-xs">
            {project.categoryLabel[language]}
          </span>
        </div>

        {/* Status Badge: Ongoing */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#314B3C] px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-white shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {language === 'ta' ? 'நடைபெறுகிறது' : 'Ongoing'}
          </span>
        </div>

        {/* Location Badge on Image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white drop-shadow-md">
          <MapPin className="h-3.5 w-3.5 text-[#C6A15B] shrink-0" />
          <span className="truncate">{project.location[language]}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6 md:p-8 justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-[#111827] transition-colors group-hover:text-[#C6A15B]">
            {project.title[language]}
          </h3>

          <p className="mt-1 text-xs font-medium text-[#C6A15B]">
            {project.subtitle[language]}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#77766F] line-clamp-3">
            {project.description[language]}
          </p>

          {/* Suitable For Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.suitableFor[language].slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="rounded-md bg-[#F8F5EF] px-2.5 py-1 text-[11px] text-[#77766F] border border-[#E8E2D7]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-8 flex items-center justify-between border-t border-[#E8E2D7] pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242820] transition-colors hover:text-[#C6A15B]"
          >
            <span>View Project</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-[#C6A15B]" />
          </Link>

          <a
            href={project.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#77766F] transition hover:text-[#242820] underline"
          >
            Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
