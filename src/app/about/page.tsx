import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ModernFounderSection from "@/components/sections/ModernFounderSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ContactSection from "@/components/sections/ContactSection";
import MobileActionBar from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: "About Surya Promoters | Established 2010 | Founder Manickam Natarajan",
  description:
    "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran, bringing defense-level discipline and transparent land development to Madurai.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <AboutSection />
      <ModernFounderSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
