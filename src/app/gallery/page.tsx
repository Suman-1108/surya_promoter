"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Film,
  Camera,
  Play,
  X,
  ZoomIn,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function GalleryPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  // Filter States
  const [videoFilter, setVideoFilter] = useState<string>("all");
  const [imageFilter, setImageFilter] = useState<string>("all");

  // Lightbox / Playback States
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Video Gallery Folders
  const videoFolders = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential Projects" },
    { id: "commercial", name: "Commercial Projects" },
    { id: "farm", name: "Farm Land Projects" },
    { id: "site-visits", name: "Site Visit Videos" },
    { id: "testimonials", name: "Client Testimonials" },
  ];

  const videos = [
    {
      src: "/videos/madurai-farms-tour.mp4",
      title: "Madurai Farms & Fruits On-Site Drone Walkthrough",
      category: "farm",
      duration: "02:15",
      thumbnail: "/images/projects/madurai-farms.jpg",
    },
    {
      src: "/videos/vaigai/vaigai-drone-1.mp4",
      title: "Vaigai Elite Commercial Highway Corridor Aerial Footage",
      category: "commercial",
      duration: "01:45",
      thumbnail: "/images/projects/vaigai/corridor-aerial.jpg",
    },
    {
      src: "/videos/vaigai/vaigai-drone-2.mp4",
      title: "Vaigai River Build Scenic Riverfront Survey",
      category: "commercial",
      duration: "01:30",
      thumbnail: "/images/projects/vaigai-commercial.jpg",
    },
    {
      src: "/videos/vaigai/vaigai-drone-3.mp4",
      title: "Pandi Kovil Ring Road High-Traffic Corridor Overview",
      category: "commercial",
      duration: "02:00",
      thumbnail: "/images/projects/vaigai/water-pool-1.jpg",
    },
    {
      src: "/videos/herosection.mp4",
      title: "Madurai Master Township & Plotted Land Developments",
      category: "residential",
      duration: "01:10",
      thumbnail: "/images/hero/hero-aerial-farmland.jpg",
    },
    {
      src: "/videos/projects/showcase.mp4",
      title: "Client Site Visit & Layout Boundary Inspection Tour",
      category: "site-visits",
      duration: "01:50",
      thumbnail: "/images/projects/orange-garden/entrance-gate.jpg",
    },
    {
      src: "/videos/IMG_0042.mp4",
      title: "Homeowner Testimonial & Immediate Patta Handover",
      category: "testimonials",
      duration: "01:20",
      thumbnail: "/images/founder/founder.png",
    },
  ];

  // Image Gallery Folders
  const imageFolders = [
    { id: "all", name: "All Folders" },
    { id: "residential", name: "Residential Projects" },
    { id: "commercial", name: "Commercial Projects" },
    { id: "farm", name: "Farm Land Projects" },
    { id: "development", name: "Project Development" },
    { id: "site-photos", name: "Site Visit Photos" },
  ];

  const images = [
    {
      src: "/images/projects/orange-garden/layout-blueprint.jpg",
      title: "Orange Garden Cadastral Layout Blueprint (Plots 1–10)",
      category: "farm",
      location: "Thiruppuvanam to Narikudi Road",
    },
    {
      src: "/images/projects/orange-garden/hero-orchard.jpg",
      title: "Orange Garden Citrus Plantations & Orchard Canopies",
      category: "farm",
      location: "Agricultural Belt",
    },
    {
      src: "/images/projects/orange-garden/entrance-gate.jpg",
      title: "Orange Garden Architectural Gated Portal",
      category: "farm",
      location: "Main Entrance",
    },
    {
      src: "/images/projects/madurai-farms.jpg",
      title: "Madurai Farms & Fruits Managed Organic Farmstead",
      category: "farm",
      location: "Madurai Countryside",
    },
    {
      src: "/images/projects/madurai-farms/concrete-pathway.jpg",
      title: "Madurai Farms Paved Concrete Plantation Avenues",
      category: "development",
      location: "Internal Avenues",
    },
    {
      src: "/images/projects/madurai-farms/aerial-grove.jpg",
      title: "Aerial Canopy of Fruit Groves & Perennial Table",
      category: "farm",
      location: "Agro Horizon",
    },
    {
      src: "/images/projects/surya-green-enclave.jpg",
      title: "Surya Green Enclave DTCP Villa Plots Township",
      category: "residential",
      location: "Mudukangulam Road",
    },
    {
      src: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
      title: "Surya Green Enclave Approved Blueprint Layout Plan",
      category: "residential",
      location: "15 Surveyed Villa Units",
    },
    {
      src: "/images/projects/surya-green-enclave/road-corridor.jpg",
      title: "Bitumen Tar Roads & Streetlight Infrastructure",
      category: "development",
      location: "Surya Green Enclave",
    },
    {
      src: "/images/hero/hero-house.jpg",
      title: "Contemporary Architectural Villa Elevation",
      category: "residential",
      location: "Madurai Residential",
    },
    {
      src: "/images/projects/vaigai/corridor-aerial.jpg",
      title: "Vaigai Elite Highway Frontage Drone View",
      category: "commercial",
      location: "Outer Ring Road NH-44",
    },
    {
      src: "/images/projects/vaigai-commercial.jpg",
      title: "Vaigai Riverfront Commercial Building Acreage",
      category: "commercial",
      location: "Vaigai North Bank",
    },
    {
      src: "/images/projects/vaigai/water-pool-1.jpg",
      title: "Pandi Kovil Site High-Footfall Commercial Corridor",
      category: "commercial",
      location: "Pandi Kovil Junction",
    },
    {
      src: "/images/projects/orange-garden/demarcated-plots.jpg",
      title: "On-Ground Survey Boundary Demarcation & Field Stones",
      category: "site-photos",
      location: "Plot No. 04 Verification",
    },
    {
      src: "/images/founder/founder.png",
      title: "Client Consultation & Legal Patta Verification Review",
      category: "site-photos",
      location: "Surya Promoters Office",
    },
  ];

  const filteredVideos = videos.filter((v) => videoFilter === "all" || v.category === videoFilter);
  const filteredImages = images.filter((img) => imageFilter === "all" || img.category === imageFilter);

  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18] font-sans selection:bg-[#C6A66B]/30">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full bg-[#173D2B] py-14 sm:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero/hero-aerial-farmland.jpg"
            alt="Gallery"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              Authentic On-Ground Media
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === "ta" ? "புகைப்படங்கள் & வீடியோ காட்சியகம்" : "Photo & Video Gallery"}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Explore authentic high-definition aerial footage, cadastral blueprint drawings, road developments, and on-ground client site visit records.
            </p>
          </div>

          {/* Section Switcher Tabs (Video Gallery / Image Gallery) */}
          <div className="mt-8 flex items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "images"
                  ? "bg-[#C6A66B] text-[#171B18] shadow-md scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>Image Gallery ({images.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "videos"
                  ? "bg-[#C6A66B] text-[#171B18] shadow-md scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Film className="h-4 w-4" />
              <span>Video Gallery ({videos.length})</span>
            </button>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* A. IMAGE GALLERY (Section 12.B) */}
      {/* ========================================================================= */}
      {activeTab === "images" && (
        <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
          {/* Folders Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="font-mono text-xs font-bold uppercase text-gray-500 mr-2">Filter Folder:</span>
            {imageFolders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setImageFilter(folder.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  imageFilter === folder.id
                    ? "bg-[#173D2B] text-white shadow-xs"
                    : "bg-white border border-[#E8E2D7] text-gray-700 hover:bg-[#F5F4EE]"
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A0D12] border border-[#E8E2D7] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Overlaid Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono text-[#C6A66B] uppercase font-bold block mb-1">
                    {img.location}
                  </span>
                  <h3 className="font-display text-sm font-bold leading-snug line-clamp-2">
                    {img.title}
                  </h3>
                </div>

                {/* Hover Actions: Lightbox Zoom & Download */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setActiveImage(img.src)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition cursor-pointer"
                    title="Enlarge in Lightbox"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <a
                    href={img.src}
                    download
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition"
                    title="Download High-Res Image"
                  >
                    <Download className="h-4 w-4 text-[#C6A66B]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* B. VIDEO GALLERY (Section 12.A) */}
      {/* ========================================================================= */}
      {activeTab === "videos" && (
        <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
          {/* Folders Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="font-mono text-xs font-bold uppercase text-gray-500 mr-2">Filter Video Category:</span>
            {videoFolders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setVideoFilter(folder.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  videoFilter === folder.id
                    ? "bg-[#173D2B] text-white shadow-xs"
                    : "bg-white border border-[#E8E2D7] text-gray-700 hover:bg-[#F5F4EE]"
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((vid, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Video Container with Custom Player Preview */}
                <div
                  onClick={() => setActiveVideo(vid.src)}
                  className="relative aspect-video w-full bg-black overflow-hidden cursor-pointer"
                >
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#173D2B] text-[#C6A66B] shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-[#C6A66B] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/80 text-white font-mono text-[10px] font-bold">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#64865A] font-bold uppercase block">
                      {vid.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#171B18] mt-0.5">
                      {vid.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveVideo(vid.src)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#173D2B] hover:bg-[#122e20] text-white text-xs font-bold transition cursor-pointer"
                  >
                    <Play className="h-3 w-3 fill-white" />
                    <span>Play</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL (Image Lightbox) */}
      {/* ========================================================================= */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-2.5 text-white hover:bg-white/30 transition cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Enlarged Preview"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* VIDEO PLAYBACK MODAL */}
      {/* ========================================================================= */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-2.5 text-white hover:bg-white/30 transition cursor-pointer z-10"
            aria-label="Close Video"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              autoPlay
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
