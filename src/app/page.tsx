import Navbar from "@/components/layout/Navbar";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0D12]">
      <Navbar />
      <ProjectIconGrid />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
