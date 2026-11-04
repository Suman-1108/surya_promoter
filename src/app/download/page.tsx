import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DownloadCenterClient from "@/components/download/DownloadCenterClient";

export const metadata: Metadata = {
  title: "Download Centre | Project Maps, Brochures & Documents | Surya Promoters",
  description:
    "Download authentic DTCP approved layout blueprints, project brochures, satellite masterplans, and high-resolution aerial media for Surya Promoters projects in Madurai.",
  openGraph: {
    title: "Download Centre - Surya Promoters Madurai",
    description:
      "Instant access to verified land blueprints, CAD layouts, official brochures, and drone site footage.",
    images: ["/images/projects/orange-garden/layout-blueprint.jpg"],
  },
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18]">
      <Navbar />
      <DownloadCenterClient />
      <Footer />
    </main>
  );
}
