"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] flex flex-col font-sans selection:bg-[#EAB308]/30">
      {/* 1. TOP NAVBAR (PERSISTENT & FIXED ACROSS ALL PAGES) */}
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* 2. BODY CONTAINER: PERSISTENT SIDEBAR + DYNAMIC CENTRAL MAIN CONTENT */}
      <div className="flex-1 max-w-[1760px] w-full mx-auto flex">
        {/* LEFT SIDEBAR (PERSISTENT & FIXED ACROSS ALL PAGES) */}
        <Sidebar
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* CENTRAL MAIN CONTENT AREA (UPDATES PER ROUTE) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

