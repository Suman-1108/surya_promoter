"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { X, Phone, MessageSquare, ArrowRight, ExternalLink, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: language === "ta" ? "முகப்பு" : "Home", href: "/" },
    { label: language === "ta" ? "திட்டங்கள்" : "Projects", href: "/projects" },
    { label: language === "ta" ? "சேவைகள்" : "Services", href: "/services" },
    { label: language === "ta" ? "எங்களைப் பற்றி" : "About Us", href: "/about" },
    { label: language === "ta" ? "புகைப்படங்கள்" : "Gallery", href: "/gallery" },
    { label: language === "ta" ? "தொடர்புக்கு" : "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0D12] px-6 py-6 text-white md:hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-xs p-1">
                <div className="relative h-full w-full rounded-full overflow-hidden">
                  <Image
                    src="/images/surya-logo.png"
                    alt="Surya Promoters Logo"
                    fill
                    sizes="40px"
                    className="object-contain scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-wider text-white">
                  SURYA PROMOTERS
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#EAB308]">
                  ESTD. 2010 · MADURAI
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between font-display text-2xl font-bold uppercase tracking-wider text-gray-200 transition-colors hover:text-[#EAB308]"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-5 w-5 text-[#EAB308]" />
              </Link>
            ))}


            <a
              href="https://mapbhoomi.com/l/surya-promoters"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between font-display text-xl font-bold uppercase tracking-wider text-[#EAB308] border-t border-white/10 pt-4"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#EAB308] animate-pulse" />
                <span>{language === "ta" ? "நேரடி 3D வரைபடங்கள் (MapBhoomi)" : "Live 3D Maps (MapBhoomi)"}</span>
              </span>
              <ExternalLink className="h-5 w-5 text-[#EAB308]" />
            </a>




          </nav>

          {/* Footer Actions */}
          <div className="space-y-4 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gray-400">Language / மொழி:</span>
              <button
                onClick={toggleLanguage}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold text-white hover:border-[#EAB308]"
              >
                {language === "en" ? "தமிழ் (Tamil)" : "English"}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+917708966452"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-bold uppercase text-white"
              >
                <Phone className="h-4 w-4 text-[#EAB308]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#EAB308] py-3 text-xs font-bold uppercase text-[#0A0D12]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
