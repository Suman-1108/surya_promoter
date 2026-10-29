import Navbar from "@/components/layout/Navbar";
import ModernHero from "@/components/hero/ModernHero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ModernFeaturedProperties from "@/components/sections/ModernFeaturedProperties";
import ModernFounderSection from "@/components/sections/ModernFounderSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ModernHero />
      <AboutSection />
      <ServicesSection />
      <ModernFeaturedProperties />
      <ModernFounderSection />
      <ContactSection />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
