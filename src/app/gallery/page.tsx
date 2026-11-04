"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  Camera,
  X,
  ZoomIn,
  ArrowUpRight,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  titleTa: string;
  location: string;
  locationTa: string;
  isBlueprint?: boolean;
}

const galleryPhotos: GalleryItem[] = [
  {
    src: "/images/projects/orange-garden/layout-blueprint.jpg",
    title: "Orange Garden Cadastral Blueprint",
    titleTa: "ஆரஞ்ச் கார்டன் அதிகாரப்பூர்வ தள வரைபடம்",
    location: "Thiruppuvanam to Narikudi Road (Plots 1–10)",
    locationTa: "திருப்புவனம் - நரிக்குடி ரோடு (மனைகள் 1-10)",
    isBlueprint: true,
  },
  {
    src: "/images/projects/orange-garden/hero-orchard.jpg",
    title: "Orange Garden Orchard Estate",
    titleTa: "ஆரஞ்ச் கார்டன் பழத்தோட்ட எஸ்டேட்",
    location: "Scenic Green Belt, Madurai",
    locationTa: "பசுமை மண்டலம், மதுரை",
  },
  {
    src: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
    title: "Surya Green Enclave Blueprint",
    titleTa: "சூர்யா கிரீன் என்கிளேவ் சர்வே வரைபடம்",
    location: "Mudukangulam Road (15 Villa Plots)",
    locationTa: "முதுகங்குளம் ரோடு (15 பிரத்யேக மனைகள்)",
    isBlueprint: true,
  },
  {
    src: "/images/projects/vaigai/corridor-aerial.jpg",
    title: "Vaigai Elite Highway View",
    titleTa: "வைகை எலைட் நெடுஞ்சாலை காட்சி",
    location: "NH-44 Outer Ring Road, Madurai",
    locationTa: "NH-44 அவுட்டர் ரிங் ரோடு, மதுரை",
  },
  {
    src: "/images/projects/madurai-farms/aerial-grove.jpg",
    title: "Madurai Farms Agro Land",
    titleTa: "மதுரை பார்ம்ஸ் விவசாய நிலம்",
    location: "Managed Agricultural Belt",
    locationTa: "விவசாய மண்டலம், மதுரை",
  },
  {
    src: "/images/projects/surya-green-enclave.jpg",
    title: "Green Enclave Township Entrance",
    titleTa: "கிரீன் என்கிளேவ் நுழைவு வளைவு",
    location: "DTCP & RERA Approved Layout",
    locationTa: "DTCP & RERA அங்கீகரிக்கப்பட்ட மனைப்பிரிவு",
  },
  {
    src: "/images/projects/orange-garden/entrance-gate.jpg",
    title: "Orange Garden Grand Arch",
    titleTa: "ஆரஞ்ச் கார்டன் பிரம்மாண்ட நுழைவு வளைவு",
    location: "Upcoming 2026 Gated Orchard",
    locationTa: "2026 வரவிருக்கும் கேட்டட் பழத்தோட்டம்",
  },
  {
    src: "/images/projects/madurai-farms/panoramic-view.jpg",
    title: "Madurai Farms Countryside Panorama",
    titleTa: "மதுரை பார்ம்ஸ் இயற்கை காட்சி",
    location: "Agro Farmland Horizon",
    locationTa: "இயற்கை பண்ணை நிலப் பரப்பு",
  },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 mb-2">
            <Camera className="h-3.5 w-3.5 text-sky-600" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-900">
              {language === "ta" ? "நேரடி புகைப்படங்கள் & வரைபடங்கள்" : "Verified Site Photos & Cadastral Blueprints"}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A]">
            {language === "ta" ? "கள ஆய்வு புகைப்படங்கள் & வரைபடங்கள்" : "Project Photo Gallery & Blueprints"}
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
            {language === "ta"
              ? "எங்கள் நேரடி மனைப்பிரிவு வளர்ச்சி, சாலைகள், எல்லைக் கற்கள் மற்றும் அரசு சர்வே வரைபடங்களின் உண்மையான புகைப்படங்கள்."
              : "Authentic on-ground drone photos of road corridors, boundary demarcation, and official registered layout blueprints."}
          </p>
        </div>

        <span className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold self-start sm:self-auto shrink-0">
          {galleryPhotos.length} {language === "ta" ? "சரிபார்க்கப்பட்ட இடங்கள்" : "Verified Locations"}
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {galleryPhotos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(photo.src)}
            className={`group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-900 border border-gray-200 shadow-xs cursor-pointer hover:shadow-xl transition-all duration-300 ${
              photo.isBlueprint ? "ring-2 ring-[#EAB308]/40" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className={`transition-transform duration-700 group-hover:scale-105 ${
                photo.isBlueprint ? "object-contain p-2 bg-[#060A10]" : "object-cover"
              }`}
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Blueprint Badge */}
            {photo.isBlueprint && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAB308] text-[#0A0D12] text-[10px] font-mono font-bold shadow-md">
                <Layers className="h-3 w-3" />
                <span>OFFICIAL BLUEPRINT</span>
              </div>
            )}

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-display text-sm font-bold group-hover:text-amber-400 transition-colors">
                {language === "ta" ? photo.titleTa : photo.title}
              </h3>
              <span className="text-[11px] font-mono text-gray-300 block mt-0.5">
                {language === "ta" ? photo.locationTa : photo.location}
              </span>
            </div>

            {/* Zoom Action Icon */}
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="High Definition Preview"
              fill
              className="object-contain"
              sizes="1200px"
            />
          </div>
        </div>
      )}

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}
