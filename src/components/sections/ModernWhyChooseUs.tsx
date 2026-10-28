"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { Home, Users, Handshake, Award, ArrowRight } from "lucide-react";

export default function ModernWhyChooseUs() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full bg-[#0F172A] text-white py-12 md:py-16 overflow-hidden">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-12 xl:gap-16">
          {/* Left Column: Headline, Narrative, Button */}
          <div className="xl:col-span-5 space-y-6 lg:space-y-8">
            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[#C6A15B]">
              {language === "ta" ? "ஏன் சூர்யா புரமோட்டர்ஸ்?" : "WHY CHOOSE SURYA PROMOTERS"}
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {language === "ta" ? (
                <>
                  வெறும் நிலம் மட்டுமல்ல, <br />
                  <span className="text-[#C6A15B]">நம்பிக்கையை உருவாக்குகிறோம்</span>
                </>
              ) : (
                <>
                  More Than Properties, <br />
                  <span className="text-[#C6A15B]">We Build Relationships</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl">
              We are committed to helping you find the right space that matches your lifestyle,
              agricultural vision, and commercial goals with absolute legal transparency.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-display text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#0F172A] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#C6A15B]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards Grid (Modern Bold Sans Typography) */}
          <div className="xl:col-span-7">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6">
              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-7 lg:p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#C6A15B] mb-5">
                  <Home className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-white">
                  1,200<span className="text-[#C6A15B]">+</span>
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-300 font-semibold">
                  Acres Developed
                </span>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-7 lg:p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#C6A15B] mb-5">
                  <Users className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-white">
                  2,500<span className="text-[#C6A15B]">+</span>
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-300 font-semibold">
                  Happy Clients
                </span>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-7 lg:p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#C6A15B] mb-5">
                  <Handshake className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-white">
                  16<span className="text-[#C6A15B]">+</span>
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-300 font-semibold">
                  Years Experience
                </span>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-7 lg:p-8 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#C6A15B] mb-5">
                  <Award className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-white">
                  100<span className="text-[#C6A15B]">%</span>
                </span>
                <span className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-300 font-semibold">
                  Clear Legal Titles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
