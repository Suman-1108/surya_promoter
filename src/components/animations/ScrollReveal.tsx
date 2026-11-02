"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "zoom" | "blur";
  duration?: number;
  distance?: number;
  once?: boolean;
  scale?: number;
  blur?: boolean;
  margin?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.75,
  distance = 36,
  once = true,
  scale,
  blur = false,
  margin = "-40px 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as any,
  });

  const getInitial = () => {
    const initial: Record<string, any> = { opacity: 0 };

    switch (direction) {
      case "up":
        initial.y = distance;
        break;
      case "down":
        initial.y = -distance;
        break;
      case "left":
        initial.x = distance;
        break;
      case "right":
        initial.x = -distance;
        break;
      case "zoom":
        initial.scale = scale ?? 0.94;
        break;
      case "blur":
        initial.filter = "blur(8px)";
        initial.y = distance / 2;
        break;
      case "none":
      default:
        break;
    }

    if (scale && direction !== "zoom") {
      initial.scale = scale;
    }

    if (blur && direction !== "blur") {
      initial.filter = "blur(6px)";
    }

    return initial;
  };

  const getAnimate = () => {
    const animate: Record<string, any> = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    };

    if (blur || direction === "blur") {
      animate.filter = "blur(0px)";
    }

    return animate;
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth luxury cubic-bezier deceleration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SectionReveal: Wraps entire sections to provide smooth, graceful scroll entry
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/**
 * StaggerContainer & StaggerItem for cascading card lists, grids & feature sets
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delay: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.staggerDelay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      custom={{ staggerDelay, delay }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
