"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", inquiry: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `General Inquiry for Surya Promoters:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInquiry: ${form.inquiry}`
    );
    window.open(`https://wa.me/917708966452?text=${text}`, "_blank");
  };

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

        {/* Contact Grid: Cards + Form + Map */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Info & Hours */}
          <div className="space-y-4 lg:col-span-5">
            {/* Phone & WhatsApp Card */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#C6A15B] border border-[#E8E2D7]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77766F]">
                      {t.contact.phoneLabel} & WhatsApp
                    </span>
                    <a
                      href="tel:+917708966452"
                      className="block font-mono text-lg font-bold text-[#242820] transition hover:text-[#C6A15B]"
                    >
                      +91 77089 66452
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href="tel:+917708966452"
                    className="flex-1 rounded-xl border border-[#E8E2D7] bg-white py-2.5 text-center text-xs font-medium text-[#242820] transition hover:bg-[#F1EBDD]"
                  >
                    Click to Call
                  </a>
                  <a
                    href="https://wa.me/917708966452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-[#C6A15B] py-2.5 text-center text-xs font-semibold text-white shadow-xs transition hover:bg-[#b5924d]"
                  >
                    WhatsApp Chat
                  </a>
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

          {/* Right Column: Google Maps & Fast Inquiry */}
          <div className="space-y-6 lg:col-span-7">
            {/* Embedded Google Map with clean natural presentation */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E8E2D7] shadow-xs bg-[#F8F5EF]">
                <iframe
                  title="Surya Promoters Madurai Location"
                  src="https://maps.google.com/maps?q=Surya%20Promoters%20Pandi%20Kovil%20Ring%20Road%20Madurai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Quick Contact Form */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-6 md:p-8">
                <h3 className="font-display text-xl font-normal text-[#242820]">
                  Quick Message
                </h3>
                <p className="mt-1 text-xs text-[#77766F]">
                  Send your enquiry and our advisory team will connect with you.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="rounded-xl border border-[#E8E2D7] bg-white px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / WhatsApp Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="rounded-xl border border-[#E8E2D7] bg-white px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:outline-none"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email Address (optional)"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-[#E8E2D7] bg-white px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      placeholder="Your questions or land inquiry..."
                      value={form.inquiry}
                      onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                      className="w-full rounded-xl border border-[#E8E2D7] bg-white px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#b5924d]"
                    >
                      <span>Send Direct Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center text-emerald-700">
                    <CheckCircle2 className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm text-[#242820]">Thank you! Opening WhatsApp for instant message delivery.</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
