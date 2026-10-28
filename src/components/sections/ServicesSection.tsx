"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { servicesData } from "@/data/services";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Home, Building2, Wheat, Trees, TrendingUp, Compass, Check, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="h-5 w-5" />,
    Building2: <Building2 className="h-5 w-5" />,
    Wheat: <Wheat className="h-5 w-5" />,
    Trees: <Trees className="h-5 w-5" />,
    TrendingUp: <TrendingUp className="h-5 w-5" />,
    Compass: <Compass className="h-5 w-5" />,
  };

  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="relative bg-[#FFFFFF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {t.services.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-3">
            <TextReveal
              text={t.services.title}
              as="h2"
              className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-2 text-base text-[#77766F]">
              {t.services.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Services Showcase */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Services Selector List */}
          <div className="flex flex-col gap-2.5 lg:col-span-5">
            {servicesData.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-[#C6A15B] bg-[#F8F5EF] shadow-xs"
                      : "border-[#E8E2D7] bg-[#FFFFFF] hover:border-[#C6A15B]/50 hover:bg-[#F8F5EF]/60"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#C6A15B] text-white"
                        : "bg-[#F8F5EF] text-[#77766F] group-hover:text-[#242820]"
                    }`}
                  >
                    {iconMap[service.iconName] || <Home className="h-5 w-5" />}
                  </div>

                  <div>
                    <h3
                      className={`font-display text-base font-bold transition-colors ${
                        isActive ? "text-[#C6A15B]" : "text-[#242820] group-hover:text-[#C6A15B]"
                      }`}
                    >
                      {service.title[language]}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#77766F] line-clamp-1">
                      {service.subtitle[language]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Display */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-8 shadow-xs">
              {/* Media Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#E8E2D7] bg-white">
                <Image
                  src={currentService.image}
                  alt={currentService.title[language]}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#FFFFFF]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#242820] shadow-xs border border-[#E8E2D7]">
                    MADURAI REGION
                  </span>
                </div>
              </div>

              {/* Text Description & Highlights */}
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-normal text-[#242820]">
                  {currentService.title[language]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#77766F]">
                  {currentService.description[language]}
                </p>

                {/* Key Points */}
                <div className="mt-6 space-y-2 border-t border-[#E8E2D7] pt-6">
                  {currentService.features[language].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#242820]">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/20 text-[#C6A15B]">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="#site-visit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C6A15B] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white shadow-xs transition hover:bg-[#b5924d]"
                  >
                    <span>{t.services.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="https://wa.me/917708966452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-white px-6 py-3 text-xs font-medium uppercase tracking-wider text-[#242820] transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
                  >
                    <span>Inquire Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
