import Navbar from "@/components/layout/Navbar";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <Navbar />
      <ProjectIconGrid />
      <Footer />
    </main>
  );
}
