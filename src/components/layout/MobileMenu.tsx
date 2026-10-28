"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: language === "ta" ? "முகப்பு" : "Home", href: "/" },
    { label: language === "ta" ? "எங்களைப் பற்றி" : "About", href: "/about" },
    { label: language === "ta" ? "திட்டங்கள்" : "Projects", href: "/#projects" },
    { label: language === "ta" ? "சேவைகள்" : "Services", href: "/#services" },
    { label: language === "ta" ? "புகைப்படங்கள்" : "Gallery", href: "/#gallery" },
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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FFFFFF] px-6 py-6 text-[#292B27] md:hidden shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-wider text-[#111827]">
                  SURYA PROMOTERS
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#77766F]">
                  ESTD. 2010 · MADURAI
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-[#EAE5DC] p-2 text-[#292B27] hover:bg-[#F8F5EF]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="my-auto flex flex-col gap-3 py-6">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-2 text-xl font-display font-bold text-[#111827] transition hover:text-[#C6A15B]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1 text-[#C6A15B]" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Controls & CTAs */}
          <div className="space-y-4 border-t border-[#EAE5DC] pt-4">
            {/* Language Switcher */}
            <div className="flex items-center justify-between rounded-xl bg-[#F8F5EF] p-3 border border-[#EAE5DC]">
              <span className="text-xs text-[#77766F]">Language / மொழி:</span>
              <button
                onClick={toggleLanguage}
                className="rounded-full bg-[#C6A15B] px-4 py-1 text-xs font-semibold text-white"
              >
                {language === "en" ? "தமிழ்" : "English"}
              </button>
            </div>

            {/* Direct Contact Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+917708966452"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#EAE5DC] bg-[#F8F5EF] py-3 text-xs font-medium text-[#292B27] transition hover:bg-[#F0EADF]"
              >
                <Phone className="h-4 w-4 text-[#C6A15B]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-3 text-xs font-semibold text-white transition hover:bg-[#b5924d]"
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
