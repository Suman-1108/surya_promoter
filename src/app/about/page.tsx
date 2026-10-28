import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import FounderSection from "@/components/sections/FounderSection";
import ApproachSection from "@/components/sections/ApproachSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Surya Promoters | Established 2010 | Founder Manickam Natarajan",
  description:
    "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran, bringing defense-level discipline and transparent land development to Madurai.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />

      <div className="mx-auto w-full max-w-[1760px] px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 md:pt-8 pb-2">
        <div className="max-w-3xl">
          <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
            SINCE 2010 · MADURAI, TAMIL NADU
          </span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] font-extrabold tracking-tight">
            Integrity, Duty & Excellence
          </h1>
          <p className="mt-2 text-base text-[#77766F]">
            Founded by an Indian Air Force veteran, Surya Promoters has redefined land development across Madurai through uncompromising documentation standards and visionary layout masterplanning.
          </p>
        </div>
      </div>

      <AboutSection />
      <FounderSection />
      <ApproachSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
