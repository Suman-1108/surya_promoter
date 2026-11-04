import type { Metadata } from "next";
import SummitFooter from "@/components/layout/SummitFooter";
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
    <div className="space-y-8 animate-in fade-in duration-300">
      <DownloadCenterClient />
      <SummitFooter />
    </div>
  );
}
