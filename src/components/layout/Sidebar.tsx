"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Home,
  LayoutGrid,
  Wrench,
  Award,
  Camera,
  Layers,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { language } = useLanguage();

  // Lock background scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    {
      id: "home",
      name: "Home",
      nameTa: "முகப்பு",
      href: "/",
      icon: Home,
    },
    {
      id: "projects",
      name: "Projects",
      nameTa: "திட்டங்கள்",
      href: "/projects",
      icon: LayoutGrid,
      count: 4,
    },
    {
      id: "services",
      name: "Services",
      nameTa: "சேவைகள்",
      href: "/services",
      icon: Wrench,
    },
    {
      id: "about",
      name: "About Us",
      nameTa: "எங்களைப் பற்றி",
      href: "/about",
      icon: Award,
    },
    {
      id: "gallery",
      name: "Gallery",
      nameTa: "புகைப்படங்கள்",
      href: "/gallery",
      icon: Camera,
    },
    {
      id: "masterplans",
      name: "3D Masterplans",
      nameTa: "3D வரைபடம்",
      href: "/masterplans",
      icon: Layers,
      isLive: true,
    },
    {
      id: "contact",
      name: "Contact",
      nameTa: "தொடர்புக்கு",
      href: "/contact",
      icon: Phone,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP FIXED LEFT SIDEBAR                                             */}
      {/* ========================================================================= */}
      <aside className="hidden md:flex flex-col w-20 lg:w-60 shrink-0 bg-[#F3F4F6] border-r border-[#E2E8F0] py-6 px-2 lg:px-3 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto justify-between select-none">
        
        {/* Top: Navigation Menu List */}
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all relative group cursor-pointer ${
                  active
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
                title={language === "ta" ? item.nameTa : item.name}
              >
                {/* Active Left Indicator Bar */}
                {active && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}

                {/* Icon Container */}
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    active
                      ? "bg-[#0284C7] text-white shadow-xs"
                      : "text-[#64748B] group-hover:text-[#0F172A]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                {/* Label and Badge on Large Screens */}
                <div className="hidden lg:flex items-center justify-between w-full">
                  <span>{language === "ta" ? item.nameTa : item.name}</span>

                  {item.count !== undefined && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-gray-100 text-[#0F172A]">
                      {item.count}
                    </span>
                  )}

                  {item.isLive && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-xs bg-[#EAB308]/20 text-[#854D0E] font-bold">
                      LIVE
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom: Hotline Card & IAF Veteran Trust Seal */}
        <div className="hidden lg:block pt-4 border-t border-[#E2E8F0] space-y-3">
          <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-bold block">
              HOTLINE
            </span>
            <a
              href="tel:+917708966452"
              className="text-xs font-mono font-bold text-[#0F172A] hover:text-[#B45309] transition flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5 text-[#EAB308]" />
              <span>+91 77089 66452</span>
            </a>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">16+ Yrs IAF Vet Trust</span>
          </div>
        </div>

      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE HORIZONTAL QUICK CATEGORY STRIP (UNDER TOP NAVBAR)              */}
      {/* ========================================================================= */}
      <div className="md:hidden sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-3 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none shadow-2xs select-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                active
                  ? "bg-[#0284C7] text-white shadow-xs"
                  : "bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{language === "ta" ? item.nameTa : item.name}</span>
              {item.isLive && (
                <span className={`text-[8px] font-mono px-1 rounded-xs font-bold ${
                  active ? "bg-white/20 text-white" : "bg-amber-100 text-amber-900"
                }`}>
                  LIVE
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE RESPONSIVE SLIDE-OUT NAVIGATION DRAWER                          */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <div className="relative w-[300px] max-w-[85vw] bg-[#F8F9FA] h-full flex flex-col shadow-2xl z-10 border-r border-[#E2E8F0]">
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between bg-white">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <div className="relative h-9 w-9 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white p-0.5">
                  <Image
                    src="/images/surya-logo.png"
                    alt="Surya Promoters Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-sm font-extrabold text-[#0F172A]">
                    SURYA PROMOTERS
                  </span>
                  <span className="text-[9px] font-mono text-[#EAB308] font-bold">
                    ESTD. 2010 · MADURAI
                  </span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100 transition cursor-pointer"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Items List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-display text-sm font-bold transition-all relative cursor-pointer ${
                      active
                        ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                        : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {active && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1.5 bg-[#0284C7] rounded-r-full" />
                      )}
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                          active
                            ? "bg-[#0284C7] text-white shadow-xs"
                            : "text-[#64748B] bg-white/70"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{language === "ta" ? item.nameTa : item.name}</span>
                    </div>

                    {item.count !== undefined && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gray-100 text-[#0F172A] font-bold">
                        {item.count}
                      </span>
                    )}

                    {item.isLive && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#EAB308]/20 text-[#854D0E] font-bold">
                        LIVE
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Bottom: IAF Veteran Trust & Hotline */}
            <div className="p-4 border-t border-[#E2E8F0] bg-white space-y-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>16+ Yrs IAF Veteran Leadership</span>
              </div>
              <a
                href="tel:+917708966452"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0F172A] text-white font-mono text-xs font-bold shadow-xs hover:bg-[#1E293B] transition"
              >
                <Phone className="h-3.5 w-3.5 text-[#EAB308]" />
                <span>+91 77089 66452</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

