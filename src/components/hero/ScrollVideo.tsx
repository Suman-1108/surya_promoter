"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface ScrollVideoProps {
  progress: number; // 0.0 to 1.0
}

export default function ScrollVideo({ progress }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(10);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);

  // Safe seek handler
  const applySeek = useCallback((targetTime: number) => {
    const video = videoRef.current;
    if (!video) return;

    isSeekingRef.current = true;
    try {
      if ("fastSeek" in video && typeof (video as unknown as { fastSeek: (t: number) => void }).fastSeek === "function") {
        (video as unknown as { fastSeek: (t: number) => void }).fastSeek(targetTime);
      } else {
        video.currentTime = targetTime;
      }
    } catch {
      video.currentTime = targetTime;
    }
  }, []);

  // Initialize and load video metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoadedMetadata = () => {
      const dur = video.duration || 10;
      setVideoDuration(dur);
      video.pause();
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      const diff = Math.abs(video.currentTime - targetTimeRef.current);
      if (diff > 0.04) {
        applySeek(targetTimeRef.current);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [applySeek]);

  // Smoothly scrub currentTime based on scroll progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoDuration) return;

    const targetTime = Math.min(
      videoDuration - 0.03,
      Math.max(0, progress * videoDuration)
    );
    targetTimeRef.current = targetTime;

    if (!isSeekingRef.current) {
      const diff = Math.abs(video.currentTime - targetTime);
      if (diff > 0.03) {
        applySeek(targetTime);
      }
    }
  }, [progress, videoDuration, applySeek]);

  // Subtle camera push-in at final stage (0.88 -> 1.0)
  const cameraScale = progress > 0.88 ? 1 + (progress - 0.88) * 0.35 : 1;

  return (
    <div
      className="absolute inset-0 h-full w-full overflow-hidden select-none bg-[#F8F5EF] transition-transform duration-300 ease-out"
      style={{
        transform: `scale(${cameraScale})`,
      }}
    >
      {/* Clean Single Video Stream - No Overlapping Duplicate Images */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center"
        muted
        playsInline
        preload="auto"
        poster="/images/image1.jpeg"
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
      </video>

      {/* Subtle Warm Daylight Architectural Vignette (Gentle, keeping daylight natural) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#242820]/45 via-transparent to-[#242820]/25 pointer-events-none" />

      {/* Minimal Architectural Star Emblem on the right (matching reference) */}
      <div className="absolute right-8 md:right-16 bottom-24 pointer-events-none select-none z-10 hidden sm:block">
        <svg
          className="w-6 h-6 text-white/90 drop-shadow-md animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </div>
  );
}
