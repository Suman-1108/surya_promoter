import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";

export const metadata: Metadata = {
  title: "Contact Surya Promoters Madurai | Schedule Site Visit & Inquiry",
  description:
    "Contact Surya Promoters in Vandiyur, Madurai. Call +91 77089 66452 or email suryconstruction@gmail.com for guided site visits and property investments.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />

      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 md:pt-8 pb-2">
        <div className="max-w-3xl">
          <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
            HEAD OFFICE · VANDIYUR, MADURAI
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] font-extrabold tracking-tight">
            Let&apos;s Discuss Your Land Vision
          </h1>
          <p className="mt-2 text-base text-[#77766F]">
            Whether you seek high-yield commercial acreage, a serene weekend farm plot, or prime residential layouts, our advisory team is ready to guide you.
          </p>
        </div>
      </div>

      <ContactSection />
      <SiteVisitSection />
      <Footer />
    </main>
  );
}
