import type { Metadata } from "next";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";

export const metadata: Metadata = {
  title: "About Surya Promoters | Established 2010 | Founder Manickam Natarajan",
  description:
    "Surya Promoters was established in 2010 by Mr. Manickam Natarajan, an Indian Air Force veteran, bringing defense-level discipline and transparent land development to Madurai.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid initialNav="about" />
    </main>
  );
}
