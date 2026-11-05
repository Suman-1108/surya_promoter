"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-[#173D2B] text-white border-t border-[#122e20]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* Brand & IAF Heritage */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0 rounded-2xl overflow-hidden border-2 border-[#EAB308] bg-white p-1">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-extrabold tracking-wider text-white">
                  SURYA PROMOTERS
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] font-bold">
                  ESTD. 2010 · MADURAI
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              {language === "ta"
                ? "மதுரையின் முதன்மையான நில மேம்பாட்டு நிறுவனம். இந்திய விமானப்படை வீரர் திரு. மாணிக்கம் நடராஜன் அவர்களின் 16+ வருட ஒழுக்கம் மற்றும் வெளிப்படைத்தன்மையுடன் கூடிய சேவை."
                : "Madurai's premier real estate & land development firm. 16+ years of disciplined, transparent property acquisition and development guided by Indian Air Force veteran leadership."}
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-emerald-300 text-xs font-mono font-bold w-fit">
              <ShieldCheck className="h-4 w-4 text-[#C6A66B]" />
              <span>100% Clear Computer Patta Guarantee</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "முக்கிய பக்கங்கள்" : "Navigation"}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "முகப்பு" : "Home"}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "திட்டங்கள்" : "Our Projects"}</span>
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "இருப்பிடம்" : "Project Locations"}</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "புகைப்படங்கள் & வீடியோ" : "Photo & Video Gallery"}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "எங்களைப் பற்றி" : "About Surya Promoters"}</span>
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-[#C6A66B] transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-[#C6A66B]" />
                  <span>{language === "ta" ? "வரைபடங்கள் பதிவிறக்கம்" : "Download Center (Maps & Brochures)"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "பிரிவுகள்" : "Categories"}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/projects?cat=residential" className="hover:text-[#C6A66B] transition-colors">
                  {language === "ta" ? "குடியிருப்பு மனைகள் & வீடுகள்" : "Residential Plots & Flats"}
                </Link>
              </li>
              <li>
                <Link href="/projects?cat=commercial" className="hover:text-[#C6A66B] transition-colors">
                  {language === "ta" ? "வணிக பெருநிலங்கள்" : "Commercial Corridors"}
                </Link>
              </li>
              <li>
                <Link href="/projects?cat=farm" className="hover:text-[#C6A66B] transition-colors">
                  {language === "ta" ? "இயற்கை பண்ணை மனைகள்" : "Agro Farm Land & Orchards"}
                </Link>
              </li>
              <li>
                <a
                  href="https://mapbhoomi.com/l/surya-promoters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A66B] transition-colors flex items-center gap-1.5 text-[#C6A66B] font-semibold"
                >
                  <span>MapBhoomi Live 3D</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "தொடர்பு விவரங்கள்" : "Direct Contact"}
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <a
                href="tel:+917708966452"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#173D2B] transition">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 font-mono">Direct Hotline</span>
                  <span className="font-mono font-bold text-white">+91 77089 66452</span>
                </div>
              </a>

              <a
                href="mailto:suryapromotersmdu@gmail.com"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C6A66B] group-hover:bg-[#C6A66B] group-hover:text-[#173D2B] transition">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 font-mono">Email Inquiries</span>
                  <span className="text-xs text-white">suryapromotersmdu@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C6A66B]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-xs text-gray-300">
                  <span className="block text-[11px] text-gray-400 font-mono">Registered Office</span>
                  <span>Madurai Region, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 Surya Promoters. All Rights Reserved. Madurai, Tamil Nadu.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <span>·</span>
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <span>·</span>
            <Link href="/admin" className="hover:text-white transition font-mono">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
