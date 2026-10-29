import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";
import MobileActionBar from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: "Property & Land Development Services | Surya Promoters Madurai",
  description:
    "Comprehensive land development services including residential plots, commercial corridors, agricultural farms, property marketing, and site visits in Madurai.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <WhatWeOfferSection />
      <ServicesSection />
      <ApproachSection />
      <SiteVisitSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
