"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] transition hover:border-[#C6A15B]"
          >
            <Image
              src={img}
              alt={`${title} - View ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#242820]/30 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
              <ZoomIn className="h-5 w-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/20 p-2.5 text-white transition hover:bg-white/40"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
