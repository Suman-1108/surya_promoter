"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-[#FFFFFF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#F8F5EF] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                {t.contact.badge}
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-3">
            <TextReveal
              text={t.contact.title}
              as="h2"
              className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-2 text-base text-[#77766F]">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Grid: Cards + Map */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact Info & Hours */}
          <div className="space-y-4 lg:col-span-5 flex flex-col justify-between">
            {/* Phone & WhatsApp Card */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#C6A15B] border border-[#E8E2D7]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href="tel:+917708966452"
                      className="block text-base font-semibold text-[#242820] transition hover:text-[#C6A15B]"
                    >
                      +91 77089 66452
                    </a>
                    <span className="text-xs text-[#77766F]">Direct Phone & WhatsApp</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#C6A15B] border border-[#E8E2D7]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href="mailto:suryconstruction@gmail.com"
                      className="block text-sm font-medium text-[#242820] transition hover:text-[#C6A15B]"
                    >
                      suryconstruction@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Address Card */}
            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#C6A15B] border border-[#E8E2D7]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
                      {t.contact.addressLabel}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-[#242820]">
                      No. 11, Arasu Nagar, Near Rio Hospital, Pandi Kovil Ring Road, Vandiyur, Madurai – 625020, Tamil Nadu.
                    </p>
                    <a
                      href="https://goo.gl/maps/reSXDDNmSNzkve699?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium uppercase text-[#C6A15B] hover:underline"
                    >
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Office Hours */}
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-3 rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] p-4 text-xs text-[#77766F]">
                <Clock className="h-4 w-4 text-[#C6A15B] shrink-0" />
                <span>{t.contact.hours}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal direction="left" className="h-full">
              <div className="relative h-full min-h-[380px] md:min-h-[440px] w-full overflow-hidden rounded-2xl border border-[#E8E2D7] shadow-xs bg-[#F8F5EF]">
                <iframe
                  title="Surya Promoters Madurai Location"
                  src="https://maps.google.com/maps?q=Surya%20Promoters%20Pandi%20Kovil%20Ring%20Road%20Madurai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
