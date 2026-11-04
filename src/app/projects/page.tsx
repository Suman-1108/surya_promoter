import type { Metadata } from "next";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";

export const metadata: Metadata = {
  title: "Property & Land Projects | Surya Promoters Madurai",
  description:
    "Explore residential, commercial, and agro farm plots in Madurai with 100% computer patta and prime highway connectivity.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid initialNav="projects" />
    </main>
  );
}
