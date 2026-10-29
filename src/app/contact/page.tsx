import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import SiteVisitSection from "@/components/sections/SiteVisitSection";
import MobileActionBar from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  title: "Contact Surya Promoters Madurai | Schedule Site Visit & Inquiry",
  description:
    "Contact Surya Promoters in Vandiyur, Madurai. Call +91 77089 66452 or email suryconstruction@gmail.com for guided site visits and property investments.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#242820]">
      <Navbar />
      <ContactSection />
      <SiteVisitSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
