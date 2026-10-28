"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { X, ZoomIn } from "lucide-react";

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: "/images/projects/vaigai-commercial.jpg",
      title: "Commercial Land Frontage",
      subtitle: "Madurai Ring Road Corridor",
    },
    {
      src: "/images/projects/madurai-farms.jpg",
      title: "Natural Farm Land",
      subtitle: "Agrarian Belt & Sweet Groundwater",
    },
    {
      src: "/images/projects/orange-garden.jpg",
      title: "Orchard Development",
      subtitle: "Fruit Cultivation & Farmhouse Terrain",
    },
    {
      src: "/images/gallery/gallery-1.jpg",
      title: "Surveyed Plot Demarcation",
      subtitle: "Precision GPS Layout Boundary Stones",
    },
    {
      src: "/images/gallery/gallery-2.jpg",
      title: "Blacktop Access Roadways",
      subtitle: "Heavy Vehicle Maneuvering Corridor",
    },
    {
      src: "/images/gallery/gallery-3.jpg",
      title: "Avenue Plantation & Greenery",
      subtitle: "Enduring Eco-Friendly Infrastructure",
    },
  ];

  return (
    <section id="gallery" className="relative bg-[#F8F5EF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {t.gallery.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-3">
            <TextReveal
              text={t.gallery.title}
              as="h2"
              className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-2 text-base text-[#77766F]">
              {t.gallery.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Gallery Image Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedImage(item.src)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] shadow-xs transition-all hover:border-[#C6A15B]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242820]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-serif text-lg font-medium">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/80">{item.subtitle}</p>
                    </div>
                    <div className="rounded-full bg-[#C6A15B] p-2 text-white shadow-xs">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/20 p-2.5 text-white transition hover:bg-white/40"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
