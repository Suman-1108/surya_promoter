"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Sun,
  Search,
  MessageCircle,
  Phone,
  Layers,
  Camera,
  MapPin,
  Building2,
  FolderKanban,
  Wifi,
  Volume2,
  BatteryCharging,
  ChevronUp,
  X,
  ShieldCheck,
  Award,
  ExternalLink,
  Sparkles,
  Info,
  Clock,
  AppWindow,
} from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  // Start Menu Popup State
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Live Real-Time Clock State
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format time: HH:MM
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);

      // Format date: DD-MM-YYYY
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setCurrentDate(`${day}-${month}-${year}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* WINDOWS 11 START MENU FLYOUT (Toggled when Windows Start button is clicked) */}
      {startMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:pb-16 p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setStartMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-[#FFFFFF]/95 backdrop-blur-2xl border border-[#CBD5E1] shadow-2xl p-6 space-y-5 animate-in slide-in-from-bottom-5 duration-200"
          >
            {/* Start Menu Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#EAB308] to-[#B45309] flex items-center justify-center text-white shadow-xs">
                  <AppWindow className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0F172A]">
                    Surya Promoters OS
                  </h3>
                  <p className="text-[10px] font-mono text-[#64748B]">
                    Estd. 2010 · Madurai, Tamil Nadu
                  </p>
                </div>
              </div>
              <button
                onClick={() => setStartMenuOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Pinned Real Estate Apps in Start Menu */}
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                {language === "ta" ? "முக்கிய இணைப்புகள்" : "Pinned Apps & Destinations"}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
                <Link
                  href="/"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-[#EAB308]/20 flex items-center justify-center text-[#B45309] group-hover:scale-105 transition">
                    <AppWindow className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    Store Home
                  </span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    Projects
                  </span>
                </Link>

                <a
                  href="https://mapbhoomi.com/l/surya-promoters"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-105 transition">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    3D Map
                  </span>
                </a>

                <Link
                  href="/gallery"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 group-hover:scale-105 transition">
                    <Camera className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    Gallery
                  </span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-105 transition">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    About Us
                  </span>
                </Link>

                <a
                  href="https://wa.me/917708966452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#128C7E] group-hover:scale-105 transition">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="tel:+917708966452"
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 group-hover:scale-105 transition">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    Direct Call
                  </span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setStartMenuOpen(false)}
                  className="flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-gray-100/80 transition group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700 group-hover:scale-105 transition">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] mt-1.5 truncate max-w-full">
                    Contact
                  </span>
                </Link>
              </div>
            </div>

            {/* Veteran Leadership Banner inside Start Menu */}
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#0F172A] block">
                  IAF Veteran Leadership Guarantee
                </span>
                <span className="text-[#64748B]">
                  100% Computer Patta, transparent transactions & legal documentation verified.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WINDOWS 11 SYSTEM TASKBAR FOOTER DOCK (EXACT REPLICA FROM USER'S SCREENSHOTS) */}
      <footer className="sticky bottom-0 z-40 w-full bg-[#F3F3F3]/95 backdrop-blur-xl border-t border-[#CBD5E1] shadow-xl select-none">
        <div className="max-w-[1760px] mx-auto px-3 sm:px-6 h-12 sm:h-13 flex items-center justify-between gap-2">
          
          {/* BOTTOM LEFT: Weather Widget (Exact replica: "31°C Sunny · Madurai") */}
          <div className="flex items-center gap-2 sm:gap-2.5 p-1 rounded-xl hover:bg-white/60 transition cursor-pointer shrink-0">
            <Sun className="h-5 w-5 text-amber-500 animate-[spin_12s_linear_infinite]" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-bold text-[#0F172A]">31°C Sunny</span>
              <span className="text-[10px] font-mono text-[#64748B]">Madurai, TN</span>
            </div>
          </div>

          {/* BOTTOM CENTER: Centered Windows 11 Pinned Apps Dock (Exact layout from screenshots) */}
          <div className="flex items-center justify-center gap-1 sm:gap-1.5">
            
            {/* Windows 11 Start Button */}
            <button
              onClick={() => setStartMenuOpen(!startMenuOpen)}
              className="group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition cursor-pointer"
              title="Start Menu"
            >
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-2 w-2 rounded-xs bg-[#0078D4]" />
                <div className="h-2 w-2 rounded-xs bg-[#0078D4]" />
                <div className="h-2 w-2 rounded-xs bg-[#0078D4]" />
                <div className="h-2 w-2 rounded-xs bg-[#0078D4]" />
              </div>
            </button>

            {/* Search Pill */}
            <button
              onClick={() => {
                if (pathname !== "/") router.push("/");
                const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (input) input.focus();
              }}
              className="hidden md:flex items-center gap-2 h-8 px-3 rounded-full bg-white/70 hover:bg-white border border-[#CBD5E1] text-xs text-[#64748B] transition cursor-pointer shadow-2xs"
              title="Search Projects"
            >
              <Search className="h-3.5 w-3.5 text-[#0F172A]" />
              <span>Search</span>
            </button>

            {/* Pinned App 1: Surya Store Home (With Active Indicator Dot) */}
            <Link
              href="/"
              className={`group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition ${
                pathname === "/" ? "bg-white shadow-2xs" : ""
              }`}
              title="Surya Promoters Store (Active)"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-gradient-to-tr from-[#EAB308] to-[#CA8A04] flex items-center justify-center text-white shadow-xs">
                <AppWindow className="h-4 w-4" />
              </div>
              {/* Active Indicator Underneath */}
              {pathname === "/" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-[#EAB308]" />
              )}
            </Link>

            {/* Pinned App 2: WhatsApp (with Badge "4" as seen in user's taskbar screenshot!) */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition"
              title="WhatsApp Live Chat"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-[#25D366] flex items-center justify-center text-white shadow-xs">
                <MessageCircle className="h-4 w-4 fill-white" />
              </div>
              {/* Notification Badge "4" like user screenshot */}
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-red-600 text-white font-mono text-[8px] font-extrabold flex items-center justify-center border border-white">
                4
              </span>
            </a>

            {/* Pinned App 3: Phone Direct Call */}
            <a
              href="tel:+917708966452"
              className="group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition"
              title="Call Surya Promoters (+91 77089 66452)"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Phone className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Pinned App 4: 3D Masterplan (MapBhoomi Live) */}
            <a
              href="https://mapbhoomi.com/l/surya-promoters"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition"
              title="Open 3D Masterplan"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-[#EAB308] flex items-center justify-center text-black shadow-xs">
                <Layers className="h-4 w-4" />
              </div>
            </a>

            {/* Pinned App 5: Site Photo Gallery */}
            <Link
              href="/gallery"
              className={`group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition ${
                pathname === "/gallery" ? "bg-white shadow-2xs" : ""
              }`}
              title="Site Photos Gallery"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-purple-600 flex items-center justify-center text-white shadow-xs">
                <Camera className="h-3.5 w-3.5" />
              </div>
              {pathname === "/gallery" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-purple-600" />
              )}
            </Link>

            {/* Pinned App 6: Projects Archive / File Explorer */}
            <Link
              href="/projects"
              className={`group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 flex items-center justify-center transition ${
                pathname === "/projects" ? "bg-white shadow-2xs" : ""
              }`}
              title="All Projects Archive"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-amber-500 flex items-center justify-center text-white shadow-xs">
                <FolderKanban className="h-3.5 w-3.5" />
              </div>
              {pathname === "/projects" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-amber-500" />
              )}
            </Link>

            {/* Pinned App 7: Google Maps Location */}
            <a
              href="https://maps.google.com/?q=Surya+Promoters+Madurai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex group relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-white/80 active:scale-95 items-center justify-center transition"
              title="Google Maps Office Location"
            >
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-rose-500 flex items-center justify-center text-white shadow-xs">
                <MapPin className="h-3.5 w-3.5" />
              </div>
            </a>

          </div>

          {/* BOTTOM RIGHT: Windows 11 System Tray (Language, WiFi, Volume, Live Clock) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Hidden Tray Icons Chevron */}
            <button
              onClick={() => setStartMenuOpen(!startMenuOpen)}
              className="p-1 rounded-md hover:bg-white/60 text-[#64748B] transition"
              title="System Tray"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>

            {/* Language Switch: ENG IN / தமிழ் */}
            <button
              onClick={toggleLanguage}
              className="px-1.5 py-0.5 rounded-md hover:bg-white/70 text-[10px] font-mono font-bold text-[#0F172A] transition cursor-pointer"
              title="Input Language Switch"
            >
              {language === "ta" ? "தமிழ்" : "ENG IN"}
            </button>

            {/* Status Icons: Wi-Fi, Volume, Battery */}
            <div className="hidden sm:flex items-center gap-1.5 text-[#64748B]">
              <Wifi className="h-3.5 w-3.5" />
              <Volume2 className="h-3.5 w-3.5" />
              <BatteryCharging className="h-3.5 w-3.5 text-emerald-600" />
            </div>

            {/* Live Clock & Date Display (Exact Windows 11 System Tray Clock) */}
            <div className="flex flex-col text-right leading-tight pl-1 sm:pl-2 border-l border-[#CBD5E1]">
              <span className="text-[11px] font-mono font-bold text-[#0F172A]">
                {currentTime || "11:28"}
              </span>
              <span className="text-[9px] font-mono text-[#64748B]">
                {currentDate || "04-11-2026"}
              </span>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
