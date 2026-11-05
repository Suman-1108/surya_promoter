"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { X, Phone, MessageSquare, ArrowRight, ExternalLink, MapPin, Building2, Camera, Download, Info, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language } = useLanguage();

  const navLinks = [
    { label: language === "ta" ? "முகப்பு" : "Home", href: "/", icon: Home },
    { label: language === "ta" ? "திட்டங்கள்" : "Our Projects", href: "/projects", icon: Building2 },
    { label: language === "ta" ? "இருப்பிடம்" : "Location", href: "/location", icon: MapPin },
    { label: language === "ta" ? "புகைப்படங்கள்" : "Gallery", href: "/gallery", icon: Camera },
    { label: language === "ta" ? "எங்களைப் பற்றி" : "About", href: "/about", icon: Info },
    { label: language === "ta" ? "பதிவிறக்கம்" : "Download", href: "/download", icon: Download },
    { label: language === "ta" ? "தொடர்புக்கு" : "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#173D2B] text-white lg:hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#122e20]">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 rounded-2xl overflow-hidden border-2 border-[#EAB308] bg-white p-1">
                <Image
                  src="/images/surya-gold-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-wider text-white">
                  SURYA PROMOTERS
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C6A66B] font-bold">
                  ESTD. 2010 · MADURAI
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/20 p-2 text-gray-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all font-display text-lg font-bold"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#C6A66B]/20 text-[#C6A66B] flex items-center justify-center">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#C6A66B]" />
                </Link>
              );
            })}

            {/* 3D Masterplans link */}
            <a
              href="https://mapbhoomi.com/l/surya-promoters"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#C6A66B]/15 border border-[#C6A66B]/30 text-[#C6A66B] font-display text-base font-bold mt-4"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C6A66B] animate-pulse" />
                <span>{language === "ta" ? "நேரடி 3D மாதிரி வரைபடம்" : "MapBhoomi Live 3D Masterplans"}</span>
              </span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>

          {/* Bottom Fast Action Buttons */}
          <div className="p-6 border-t border-white/10 bg-[#122e20] space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+917708966452"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold border border-white/10 transition"
              >
                <Phone className="h-3.5 w-3.5 text-[#C6A66B]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs transition"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
