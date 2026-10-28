"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Heart, ArrowRight, Layers, CheckCircle2, Trees, Building2, ShieldCheck } from "lucide-react";

export default function ModernFeaturedProperties() {
  const { language } = useLanguage();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const properties = [
    {
      id: "vaigai-elite",
      slug: "vaigai-elite-commercial-land",
      title: "Vaigai Elite Commercial Land",
      badge: "Commercial Land",
      badgeColor: "bg-blue-600",
      location: "Madurai Outer Ring Road (NH-44)",
      price: "Prime Commercial Parcel",
      image: "/images/projects/vaigai-commercial.jpg",
      specs: [
        { label: "4-Lane Highway", icon: <Building2 className="h-4 w-4 text-blue-600" /> },
        { label: "DTCP Approved", icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" /> },
        { label: "2,400+ Sq.Ft", icon: <Layers className="h-4 w-4 text-purple-600" /> },
      ],
    },
    {
      id: "madurai-farms",
      slug: "madurai-farms-and-fruits",
      title: "Madurai Farms and Fruits",
      badge: "Agro Farmland",
      badgeColor: "bg-emerald-600",
      location: "Fertile Agrarian Belt, Madurai",
      price: "75-Acre Managed Orchards",
      image: "/images/projects/madurai-farms.jpg",
      specs: [
        { label: "Fruit Groves", icon: <Trees className="h-4 w-4 text-emerald-600" /> },
        { label: "Drip Irrigation", icon: <CheckCircle2 className="h-4 w-4 text-blue-600" /> },
        { label: "Perennial Water", icon: <ShieldCheck className="h-4 w-4 text-amber-600" /> },
      ],
    },
    {
      id: "orange-garden",
      slug: "orange-garden",
      title: "Orange Garden Farmhouse Enclave",
      badge: "Resort Retreat",
      badgeColor: "bg-amber-600",
      location: "Scenic Foothills, Madurai Region",
      price: "Citrus Groves & Villas",
      image: "/images/projects/orange-garden.jpg",
      specs: [
        { label: "Stone Verandas", icon: <Building2 className="h-4 w-4 text-amber-600" /> },
        { label: "Gated Security", icon: <ShieldCheck className="h-4 w-4 text-emerald-600" /> },
        { label: "Tree Avenues", icon: <Trees className="h-4 w-4 text-purple-600" /> },
      ],
    },
  ];

  return (
    <section id="featured-properties" className="w-full bg-[#FFFFFF] pt-4 pb-10 md:pt-6 md:pb-14 border-b border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Section Header (Matches Nexora Realty Layout) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-600">
              {language === "ta" ? "சிறப்பு திட்டங்கள்" : "FEATURED PROPERTIES"}
            </span>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
              {language === "ta" ? "சிறப்பு சொத்துக்கள்" : "Featured Properties"}
            </h2>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-blue-600 transition"
          >
            <span>{language === "ta" ? "அனைத்து திட்டங்களையும் காண்க" : "View All Properties"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Cards Widescreen Grid (16:9 Image Ratios) */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-1"
            >
              {/* Card Image Banner (16:10 / 16:9 cinematic proportion) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Badge on Top Left */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`rounded-xl ${prop.badgeColor} px-3.5 py-1.5 text-xs font-bold text-white shadow-md`}
                  >
                    {prop.badge}
                  </span>
                </div>

                {/* Favorite Heart Button on Top Right */}
                <button
                  onClick={() => toggleFavorite(prop.id)}
                  aria-label="Add to favorites"
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#111827] shadow-md backdrop-blur-xs transition hover:bg-white hover:scale-110"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites[prop.id] ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 lg:p-7 justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#111827] transition-colors group-hover:text-blue-600">
                    <Link href={`/projects/${prop.slug}`}>{prop.title}</Link>
                  </h3>

                  <div className="mt-2.5 flex items-center gap-2 text-sm text-[#4B5563]">
                    <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </div>

                  <div className="mt-4">
                    <span className="font-display text-2xl font-extrabold text-blue-600">
                      {prop.price}
                    </span>
                  </div>
                </div>

                {/* Specs Row with subtle top border */}
                <div className="mt-6 border-t border-gray-100 pt-5 flex items-center justify-between text-sm text-[#4B5563]">
                  {prop.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {spec.icon}
                      <span className="text-xs font-semibold">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          <span className="h-2.5 w-8 rounded-full bg-blue-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
