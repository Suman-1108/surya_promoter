"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#111827] text-white shadow-xl border border-white/20 transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#0F1E2E] hover:scale-110 hover:shadow-2xl focus:outline-none cursor-pointer"
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
