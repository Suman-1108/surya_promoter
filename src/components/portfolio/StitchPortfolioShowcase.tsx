"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import {
  MapPin,
  Calendar,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Car,
  FileCheck,
  UserCheck,
  Trees,
  Check,
} from "lucide-react";

export default function StitchPortfolioShowcase() {
  const { language } = useLanguage();

  // Consultation / Site visit form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Vaigai Elite Commercial Land",
    date: "",
    pickup: "Madurai Airport (IXM)",
    notes: "",
    requestLegalPack: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Private Site Inspection Request - Surya Promoters:\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Project: ${form.project}\n` +
        `Preferred Date: ${form.date}\n` +
        `Pickup Location: ${form.pickup}\n` +
        `Legal Pack Requested: ${form.requestLegalPack ? "Yes" : "No"}\n` +
        `Notes: ${form.notes}`
    );
    window.open(`https://wa.me/917708966452?text=${msg}`, "_blank");
  };

  const handleBrochure = (projectName: string) => {
    const msg = encodeURIComponent(
      `Hello Surya Promoters, please share the official brochure and documentation pack for ${projectName}.`
    );
    window.open(`https://wa.me/917708966452?text=${msg}`, "_blank");
  };

  return (
    <div id="projects" className="bg-[#FFFFFF] text-[#242820]">
      {/* ========================================================
          PROJECT 1: VAIGAI ELITE COMMERCIAL LAND
          (Image on Left, Details on Right)
         ======================================================== */}
      <section className="border-b border-[#E8E2D7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Image Banner with Badges */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] lg:col-span-6 min-h-[380px] lg:min-h-[480px]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/vaigai-commercial.jpg"
                  alt="Vaigai Elite Commercial Land Madurai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Overlaid Badges on Top Left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#142C23] shadow-xs">
                    <Check className="h-3 w-3 text-emerald-600" />
                    DTCP APPROVED
                  </span>
                  <span className="rounded-full bg-[#142C23]/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                    100% POWER BACKUP
                  </span>
                  <span className="rounded-full bg-[#C6A15B] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#142C23]">
                    COMMERCIAL ZONE
                  </span>
                </div>

                {/* Overlaid Bottom Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 text-xs text-white backdrop-blur-sm border border-white/10">
                  <span className="font-medium">Madurai Outer Ring Road Arterial</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#C6A15B]">
                    <MapPin className="h-3 w-3" />
                    4-Lane Highway Access
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Specifications & Copy */}
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                  {language === "ta" ? "முதன்மை வணிக நிலம்" : "FLAGSHIP COMMERCIAL LAND"}
                </span>

                <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight text-[#242820]">
                  Vaigai Elite Commercial Land
                </h2>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-[#77766F]">
                  Positioned directly on Madurai&apos;s high-growth logistics and institutional belt.
                  Master-planned for regional headquarters, logistics terminals, automotive
                  showrooms, and multinational campuses requiring certified clear-title land.
                </p>

                {/* 4-Item Specifications Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 border-y border-[#E8E2D7] py-6">
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Strategic Location
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Madurai Outer Ring Road (NH-44)
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Plot Configurations
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Available 2,400 Sq.Ft – 2 Acres Tailored
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Civil &amp; Drainage
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Engineered Storm Drain + Tarmac Streets
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Utilities &amp; Power
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      High-Tension Line + Solar Grid
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inspection"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A15B] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#142C23] shadow-xs transition hover:bg-[#b89146]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule an Inspection</span>
                </a>

                <button
                  onClick={() => handleBrochure("Vaigai Elite Commercial Land")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#142C23] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#1e3f32]"
                >
                  <FileText className="h-4 w-4" />
                  <span>Brochure</span>
                </button>

                <Link
                  href="/projects/vaigai-elite-commercial-land"
                  className="text-xs font-medium text-[#77766F] hover:text-[#242820] underline transition"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROJECT 2: MADURAI FARMS & FRUITS
          (Details on Left, Image on Right - Alternating!)
         ======================================================== */}
      <section className="border-b border-[#E8E2D7] bg-[#F8F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Details & Specs */}
            <div className="order-2 lg:order-1 flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                  {language === "ta" ? "விவசாய பழத்தோட்ட நிலங்கள்" : "FERTILE AGRICULTURAL ORCHARDS"}
                </span>

                <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight text-[#242820]">
                  Madurai Farms &amp; Fruits
                </h2>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-[#77766F]">
                  75-Acre organic agro-farms offering hassle-free ownership. Supervised by
                  seasoned agronomy specialists, complete with installed drip irrigation networks,
                  timber perimeter borders, and transparent annual harvest yields.
                </p>

                {/* 4-Item Specifications Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 border-y border-[#E8E2D7] py-6">
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Plantation Varieties
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Alphonso, Guava, Teak, Coconut
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Unit Boundaries
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Stone Pillars &amp; Chain-Link Fencing
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Water Security
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Dedicated Borewell &amp; Drip Grid
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Agronomy Support
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      2-Year Master Agronomist Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inspection"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A15B] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#142C23] shadow-xs transition hover:bg-[#b89146]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Farmhouse Tour</span>
                </a>

                <button
                  onClick={() => handleBrochure("Madurai Farms and Fruits")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#142C23] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#1e3f32]"
                >
                  <FileText className="h-4 w-4" />
                  <span>Water Reports</span>
                </button>

                <Link
                  href="/projects/madurai-farms-and-fruits"
                  className="text-xs font-medium text-[#77766F] hover:text-[#242820] underline transition"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Image Banner with Badges */}
            <div className="order-1 lg:order-2 relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] lg:col-span-6 min-h-[380px] lg:min-h-[480px]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/madurai-farms.jpg"
                  alt="Madurai Farms and Fruits Agro Orchard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Overlaid Badges on Top Left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#142C23]/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                    <Check className="h-3 w-3 text-emerald-400" />
                    FENCING COMPLETED
                  </span>
                  <span className="rounded-full bg-[#C6A15B] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#142C23]">
                    AGRI-POWER GRANTED
                  </span>
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#142C23]">
                    PERENNIAL BOREWELL
                  </span>
                </div>

                {/* Overlaid Bottom Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 text-xs text-white backdrop-blur-sm border border-white/10">
                  <span className="font-medium">Rustic Heritage Pavilion &amp; Lounge</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#C6A15B]">
                    <Trees className="h-3 w-3" />
                    Organic Soil Tested
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROJECT 3: ORANGE GARDEN FARMHOUSE ENCLAVE
          (Image on Left, Details on Right)
         ======================================================== */}
      <section className="border-b border-[#E8E2D7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Image Banner with Badges */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] lg:col-span-6 min-h-[380px] lg:min-h-[480px]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/orange-garden.jpg"
                  alt="Orange Garden Farmhouse Enclave"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Overlaid Badges on Top Left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-900/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                    SEMI-RESORT RETREAT
                  </span>
                  <span className="rounded-full bg-[#142C23]/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                    WESTERN GHATS VIEW
                  </span>
                  <span className="rounded-full bg-[#C6A15B] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#142C23]">
                    GATED COMMUNITY
                  </span>
                </div>

                {/* Overlaid Bottom Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 px-4 py-2.5 text-xs text-white backdrop-blur-sm border border-white/10">
                  <span className="font-medium">Private Citrus Groves &amp; Stone Verandas</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#C6A15B]">
                    <ShieldCheck className="h-3 w-3" />
                    24/7 Security Presence
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Specifications & Copy */}
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                  {language === "ta" ? "ரிசார்ட் வகை பண்ணை வாழ்க்கை" : "RESORT-STYLE LIVING"}
                </span>

                <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight text-[#242820]">
                  Orange Garden Farmhouse Enclave
                </h2>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-[#77766F]">
                  An exclusive weekend escape nestled against scenic hill backdrops. Combines
                  private citrus and sweet lime groves with custom freehold villa footprints,
                  manicured cobblestone tracks, and on-site concierge services.
                </p>

                {/* 4-Item Specifications Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 border-y border-[#E8E2D7] py-6">
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Architectural Style
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Traditional Courtyard Verandas
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Eco-Amenities
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Rainwater Harvest &amp; Biomanure
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Safety Standards
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      App-Controlled Access / 24/7
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                      Path Layout
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#242820]">
                      Cobbled Stone Tree Avenues (30 Ft)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#inspection"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C6A15B] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#142C23] shadow-xs transition hover:bg-[#b89146]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Request Site Inspection</span>
                </a>

                <button
                  onClick={() => handleBrochure("Orange Garden Farmhouse Enclave")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#142C23] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#1e3f32]"
                >
                  <FileText className="h-4 w-4" />
                  <span>Villa Blueprints</span>
                </button>

                <Link
                  href="/projects/orange-garden"
                  className="text-xs font-medium text-[#77766F] hover:text-[#242820] underline transition"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PORTFOLIO COMPARISON MATRIX TABLE
          "Strategic Selection at a Glance"
         ======================================================== */}
      <section className="border-b border-[#E8E2D7] bg-[#F8F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              PORTFOLIO COMPARISON MATRIX
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-[#242820] font-normal">
              Strategic Selection at a Glance
            </h2>
            <p className="mt-3 text-sm text-[#77766F]">
              Comparative access, soil classifications, and lifecycle support across our flagship developments.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] shadow-xs">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="border-b border-[#E8E2D7] bg-[#F1EBDD] font-mono text-[11px] uppercase tracking-wider text-[#77766F]">
                <tr>
                  <th className="py-4 px-6">Project Name</th>
                  <th className="py-4 px-6">Classification</th>
                  <th className="py-4 px-6">Frontage / Road</th>
                  <th className="py-4 px-6">Approval Status</th>
                  <th className="py-4 px-6">Ideal Investor Profile</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D7] text-[#242820]">
                {/* Row 1 */}
                <tr className="hover:bg-[#F8F5EF] transition">
                  <td className="py-4 px-6 font-semibold">Vaigai Elite</td>
                  <td className="py-4 px-6">
                    <span className="rounded-md bg-[#142C23]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#142C23]">
                      COMMERCIAL
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Madurai ORR (NH-44 Arterial)</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                      DTCP Approved
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Logistics Enterprises, Institutions</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href="/projects/vaigai-elite-commercial-land"
                      className="font-mono text-xs font-semibold text-[#C6A15B] hover:underline"
                    >
                      Request Data &rarr;
                    </Link>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#F8F5EF] transition">
                  <td className="py-4 px-6 font-semibold">Madurai Farms &amp; Fruits</td>
                  <td className="py-4 px-6">
                    <span className="rounded-md bg-emerald-900/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-800">
                      AGRO ESTATE
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Club Motorable Avenue (40 Ft)</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                      100% Clear Title FMB
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Agro-Investors, Nature Lovers</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href="/projects/madurai-farms-and-fruits"
                      className="font-mono text-xs font-semibold text-[#C6A15B] hover:underline"
                    >
                      Request Data &rarr;
                    </Link>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#F8F5EF] transition">
                  <td className="py-4 px-6 font-semibold">Orange Garden</td>
                  <td className="py-4 px-6">
                    <span className="rounded-md bg-amber-900/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-800">
                      RESORT RETREAT
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Private Foothill Scenic Avenue</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                      Approved Residential Enclave
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#77766F]">Weekend Luxury, Multi-gen Family</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href="/projects/orange-garden"
                      className="font-mono text-xs font-semibold text-[#C6A15B] hover:underline"
                    >
                      Request Data &rarr;
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================
          VIP SITE INSPECTIONS & CONSULTATION SECTION
          "Seamless Site Inspections Arranged On Your Terms"
         ======================================================== */}
      <section id="inspection" className="bg-[#142C23] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                VIP ON-SITE SURVEY &amp; LEGAL BRIEFINGS
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-normal leading-tight text-white">
                Seamless Site Inspections Arranged On Your Terms
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-[#F5F0E5]/80">
                Visiting Madurai from Chennai, Bengaluru, or overseas? Surya Promoters provides
                complimentary chauffeur-driven transfers directly from Madurai Airport (IXM) or
                Madurai Railway Junction to any of our three signature developments.
              </p>

              {/* 3 VIP Perks */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C6A15B]/20 text-[#C6A15B]">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white">Executive Chauffeur Transit</h3>
                    <p className="mt-1 text-xs text-[#F5F0E5]/70">
                      Private pickup from Madurai Airport (IXM), Railway Station, or your hotel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C6A15B]/20 text-[#C6A15B]">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white">On-Site Title &amp; Document Review</h3>
                    <p className="mt-1 text-xs text-[#F5F0E5]/70">
                      Direct examination of original DTCP execution orders, revenue field maps, and encumbrance records.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C6A15B]/20 text-[#C6A15B]">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-white">Senior Land Consultant Assigned</h3>
                    <p className="mt-1 text-xs text-[#F5F0E5]/70">
                      Dedicated one-on-one consultation with zero commercial obligation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-white p-6 md:p-8 text-[#242820] shadow-xl">
                <h3 className="font-display text-2xl font-normal text-[#242820]">
                  Book Consultation or Private Site Visit
                </h3>
                <p className="mt-1 text-xs text-[#77766F]">
                  Complete your details to secure an appointment or receive an on-ground site briefing.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. R. Sundararajan"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98421 XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@domain.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Preferred Property Project
                        </label>
                        <select
                          value={form.project}
                          onChange={(e) => setForm({ ...form, project: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        >
                          <option value="Vaigai Elite Commercial Land">Vaigai Elite Commercial Land</option>
                          <option value="Madurai Farms and Fruits">Madurai Farms and Fruits</option>
                          <option value="Orange Garden Farmhouse Enclave">Orange Garden Farmhouse Enclave</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Inspection Date
                        </label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                          Pickup Transit Location
                        </label>
                        <select
                          value={form.pickup}
                          onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        >
                          <option value="Madurai Airport (IXM)">Madurai Airport (IXM)</option>
                          <option value="Madurai Railway Junction">Madurai Railway Junction</option>
                          <option value="Hotel / Local Residence">Hotel / Local Residence in Madurai</option>
                          <option value="Direct Site Meetup">Direct Site Meetup</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#77766F] mb-1">
                        Specific Requirements (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about required acreage, intended commercial use, or farmhouse design preferences..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-2.5 text-xs text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#77766F]">
                      <input
                        type="checkbox"
                        checked={form.requestLegalPack}
                        onChange={(e) => setForm({ ...form, requestLegalPack: e.target.checked })}
                        className="rounded border-[#E8E2D7] text-[#C6A15B] focus:ring-[#C6A15B]"
                      />
                      <span>Request parent deed legal pack before visit</span>
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#C6A15B] py-3.5 text-xs font-semibold uppercase tracking-wider text-[#142C23] shadow-md transition hover:bg-[#b89146]"
                    >
                      Confirm Inspection Schedule &rarr;
                    </button>
                  </form>
                ) : (
                  <div className="py-8 text-center text-emerald-700">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                    <h4 className="mt-3 font-display text-lg font-medium text-[#242820]">
                      Inspection Request Registered
                    </h4>
                    <p className="mt-1 text-xs text-[#77766F]">
                      Opening WhatsApp for immediate transit coordination.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

