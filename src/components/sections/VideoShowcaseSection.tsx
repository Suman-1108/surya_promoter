"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function VideoShowcaseSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <section className="relative bg-[#142C23] py-8 text-[#F5F0E5] md:py-12 overflow-hidden border-t border-[#C99427]/20">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99427]/40 bg-[#1E4434] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E6B84D]" />
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#E6B84D]">
                {t.videoShowcase.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-6">
            <TextReveal
              text={t.videoShowcase.title}
              as="h2"
              className="font-serif text-3xl font-medium text-white md:text-5xl"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-base text-white/70">
              {t.videoShowcase.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Video Player Container */}
        <ScrollReveal delay={0.3}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-[#C99427]/40 bg-black shadow-2xl">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src="/videos/projects/showcase.mp4"
                poster="/images/projects/vaigai-commercial.jpg"
                className="h-full w-full object-cover"
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Big Center Play Overlay Button if paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-xs transition hover:bg-black/20"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#E6B84D] bg-[#142C23]/90 text-[#E6B84D] shadow-2xl transition hover:scale-110">
                    <Play className="h-8 w-8 ml-1 fill-[#E6B84D]" />
                  </div>
                </div>
              )}

              {/* Custom Player Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="rounded-full bg-white/10 p-2.5 backdrop-blur-md transition hover:bg-[#C99427] hover:text-[#142C23]"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="rounded-full bg-white/10 p-2.5 backdrop-blur-md transition hover:bg-white/20"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5 text-red-400" /> : <Volume2 className="h-5 w-5" />}
                  </button>

                  <span className="font-mono text-xs tracking-wider text-white/80">
                    MADURAI REGION PROPERTY SHOWCASE
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden font-mono text-xs text-[#E6B84D] md:inline">
                    4K ULTRA HD DRONE CAPTURE
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    className="rounded-full bg-white/10 p-2.5 backdrop-blur-md transition hover:bg-white/20"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

