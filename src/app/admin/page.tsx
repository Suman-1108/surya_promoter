import type { Metadata } from "next";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin CMS Dashboard | Surya Promoters Management Portal",
  description:
    "Secure administrative content management portal for Surya Promoters. Manage projects, gallery media, downloadable blueprints, coordinates, and company profiles.",
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18]">
      <AdminDashboardClient />
    </main>
  );
}
