import ProjectIconGrid from "@/components/sections/ProjectIconGrid";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid />
      <MobileActionBar />
    </main>
  );
}
