import Navbar from "@/components/layout/Navbar";
import ModernHero from "@/components/hero/ModernHero";
import ModernFeaturedProperties from "@/components/sections/ModernFeaturedProperties";
import ModernWhyChooseUs from "@/components/sections/ModernWhyChooseUs";
import ModernFounderSection from "@/components/sections/ModernFounderSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ModernHero />
      <ModernFeaturedProperties />
      <ModernWhyChooseUs />
      <ModernFounderSection />
      <Footer />
    </main>
  );
}

