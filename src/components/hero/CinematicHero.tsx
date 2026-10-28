"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ScrollVideo from "./ScrollVideo";
import HeroText from "./HeroText";

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: prefersReducedMotion ? "+=900" : "+=3400",
        pin: sticky,
        scrub: prefersReducedMotion ? false : 0.3,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#FFFFFF]">
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full overflow-hidden bg-[#F8F5EF]"
      >
        {/* Crisp Single-Stream Scrubbable Video Timelapse */}
        <ScrollVideo progress={progress} />

        {/* Minimal High-End Typography Overlay */}
        <HeroText progress={progress} />
      </div>
    </section>
  );
}
