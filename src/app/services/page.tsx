import type { Metadata } from "next";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";

export const metadata: Metadata = {
  title: "Property & Land Development Services | Surya Promoters Madurai",
  description:
    "Comprehensive land development services including residential plots, commercial corridors, agricultural farms, property marketing, and site visits in Madurai.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid initialNav="services" />
    </main>
  );
}
