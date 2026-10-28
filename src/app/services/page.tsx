import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";

export const metadata: Metadata = {
  title: "Property & Land Development Services | Surya Promoters Madurai",
  description:
    "Comprehensive land development services including residential plots, commercial corridors, agricultural farms, property marketing, and site visits in Madurai.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />

      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 md:pt-8 pb-2">
        <div className="max-w-3xl">
          <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
            END-TO-END LAND EXPERTISE · ESTD 2010
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] font-extrabold tracking-tight">
            Our Development Services
          </h1>
          <p className="mt-2 text-base text-[#77766F]">
            From land acquisition and title verification to layout
            masterplanning and property sales coordination across Madurai.
          </p>
        </div>
      </div>

      <ServicesSection />
      <ApproachSection />
      <SiteVisitSection />
      <Footer />
    </main>
  );
}
