import type { Metadata } from "next";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";

export const metadata: Metadata = {
  title: "Site Photos & Media Gallery | Surya Promoters Madurai",
  description:
    "View on-site aerial drone photography, verified boundary stones, layout developments, and road corridors across Madurai.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid initialNav="gallery" />
    </main>
  );
}
