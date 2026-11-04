import type { Metadata } from "next";
import ProjectIconGrid from "@/components/sections/ProjectIconGrid";

export const metadata: Metadata = {
  title: "Contact Surya Promoters | Madurai Office & Site Visit",
  description:
    "Direct hotline, WhatsApp chat, and office navigation for property enquiries, layout plans, and site visits in Madurai.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <ProjectIconGrid initialNav="contact" />
    </main>
  );
}
