import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GallerySection from "@/components/sections/GallerySection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";

export const metadata: Metadata = {
  title: "Property & Land Development Gallery | Surya Promoters Madurai",
  description:
    "View authentic on-ground photography of our ongoing commercial developments, farm plots, and residential layouts across Madurai.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />

      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 md:pt-8 pb-2">
        <div className="max-w-3xl">
          <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
            ON-GROUND VERIFICATION · MADURAI
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] font-extrabold tracking-tight">
            Property Photography Gallery
          </h1>
          <p className="mt-2 text-base text-[#77766F]">
            Every photograph reflects real on-ground development progress, road frontages, boundary demarcations, and lush natural surroundings.
          </p>
        </div>
      </div>

      <GallerySection />
      <SiteVisitSection />
      <Footer />
    </main>
  );
}

