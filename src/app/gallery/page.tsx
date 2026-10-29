import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GallerySection from "@/components/sections/GallerySection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";
import MobileActionBar from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: "Property & Land Development Gallery | Surya Promoters Madurai",
  description:
    "View authentic on-ground photography of our ongoing commercial developments, farm plots, and residential layouts across Madurai.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <GallerySection />
      <SiteVisitSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
