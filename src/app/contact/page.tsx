import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Office Location, Direct Hotline & Enquiries | Surya Promoters",
  description:
    "Direct contact channels for Surya Promoters Madurai: Call +91 77089 66452, WhatsApp chat, email, or visit our office near Mattuthavani Bus Stand. Book site visits for plots, commercial land & farm orchards.",
  openGraph: {
    title: "Contact Surya Promoters Madurai - Direct Hotline & Office",
    description:
      "Speak directly with Indian Air Force Veteran leadership for verified clear title land in Madurai.",
    images: ["/images/founder/founder.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18]">
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
