"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { CheckCircle, Car, Shield, Send } from "lucide-react";

export default function SiteVisitSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Vaigai Elite Commercial Land",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const text = encodeURIComponent(
      `Site Visit Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nProject: ${formData.project}\nDate: ${formData.date}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/917708966452?text=${text}`, "_blank");
  };

  return (
    <section id="site-visit" className="relative bg-[#F8F5EF] py-6 text-[#242820] md:py-10 border-b border-[#E8E2D7]">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D7] bg-[#FFFFFF] px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#77766F]">
                  {t.siteVisit.badge}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <TextReveal
                text={t.siteVisit.title}
                as="h2"
                className="font-display text-3xl font-extrabold text-[#111827] md:text-4xl lg:text-5xl"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-[#77766F]">
                {t.siteVisit.subtitle}
              </p>
            </ScrollReveal>

            {/* Visit Guarantees */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-[#E8E2D7] bg-[#FFFFFF] p-4">
                  <Car className="h-5 w-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-medium text-[#242820]">
                      Escorted Madurai Transport
                    </h4>
                    <p className="text-xs text-[#77766F]">
                      Comfortable pickup and return coordination across Madurai.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E8E2D7] bg-[#FFFFFF] p-4">
                  <Shield className="h-5 w-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-medium text-[#242820]">
                      Live Document Scrutiny On-Site
                    </h4>
                    <p className="text-xs text-[#77766F]">
                      Examine FMB field maps, boundary stones, and parent deeds right on location.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean White Booking Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-[#E8E2D7] bg-[#FFFFFF] p-8 md:p-10 shadow-xs">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77766F] mb-2">
                          {t.siteVisit.form.name} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77766F] mb-2">
                          {t.siteVisit.form.phone} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77766F] mb-2">
                          {t.siteVisit.form.project}
                        </label>
                        <select
                          value={formData.project}
                          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-4 py-3 text-sm text-[#242820] focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        >
                          <option value="Vaigai Elite Commercial Land">Vaigai Elite Commercial Land</option>
                          <option value="Madurai Farms and Fruits">Madurai Farms and Fruits</option>
                          <option value="Orange Garden">Orange Garden Farm Project</option>
                          <option value="General Residential Plots">General Residential Plot Options</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77766F] mb-2">
                          {t.siteVisit.form.date}
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-4 py-3 text-sm text-[#242820] focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77766F] mb-2">
                        {t.siteVisit.form.message}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements (residential, agro-farming, or commercial)..."
                        className="w-full rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] px-4 py-3 text-sm text-[#242820] placeholder-[#77766F]/50 focus:border-[#C6A15B] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6A15B] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-[#b5924d]"
                    >
                      <span>{t.siteVisit.form.submit}</span>
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                ) : (
                  <div className="py-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-normal text-[#242820]">
                      Site Visit Request Received
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-[#77766F]">
                      {t.siteVisit.form.success}
                    </p>
                    <div className="mt-6 flex justify-center gap-3">
                      <a
                        href="https://wa.me/917708966452"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#C6A15B] px-6 py-2.5 text-xs font-semibold text-white"
                      >
                        Message Directly on WhatsApp
                      </a>
                    </div>
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
