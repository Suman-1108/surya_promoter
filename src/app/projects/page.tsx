import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";
import MobileActionBar from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: "Property Developments & Projects | Surya Promoters Madurai",
  description:
    "Explore our verified portfolio of commercial land, agricultural farms, and residential plots in Madurai, Tamil Nadu.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <ProjectsSection />
      <SiteVisitSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
