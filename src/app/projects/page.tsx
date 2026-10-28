import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";

export const metadata: Metadata = {
  title: "Property Developments & Projects | Surya Promoters Madurai",
  description:
    "Explore our verified portfolio of commercial land, agricultural farms, and residential plots in Madurai, Tamil Nadu.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />

      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 md:pt-8 pb-2">
        <div className="max-w-3xl">
          <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
            SURYA PROMOTERS · MADURAI PORTFOLIO
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] font-extrabold tracking-tight">
            Our Property Developments
          </h1>
          <p className="mt-2 text-base text-[#77766F]">
            From strategic commercial highway land to lush agricultural farm plots. Every parcel is verified with clear titles, FMB boundary demarcations, and prime road access.
          </p>
        </div>
      </div>

      <ProjectsSection />
      <SiteVisitSection />
      <Footer />
    </main>
  );
}
