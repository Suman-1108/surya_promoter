"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#111827] border-t border-gray-100">
      <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-14">
          {/* Column 1: Brand & Socials (Nexora Reference) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative h-11 w-11 shrink-0">
                <Image
                  src="/images/surya-logo.png"
                  alt="Surya Promoters Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-extrabold tracking-wider text-[#111827]">
                  SURYA PROMOTERS
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#6B7280]">
                  ESTD. 2010 · MADURAI
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#6B7280] max-w-md">
              Surya Promoters is your trusted partner in finding exceptional land and property investment
              opportunities across Madurai and Tamil Nadu.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="https://wa.me/917708966452"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827] transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:suryconstruction@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827] transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://goo.gl/maps/reSXDDNmSNzkve699?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827] transition hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
                aria-label="Location"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-[#111827]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#6B7280]">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-600 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#111827]">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#6B7280]">
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Commercial &amp; Industrial Land
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Managed Agricultural Farms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Residential Plot Layouts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Legal Title Verification Advisory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Escorted On-Ground Site Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#111827]">
              Newsletter
            </h4>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Subscribe to get the latest updates on verified land releases and investment opportunities.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-14 text-sm text-[#111827] placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 flex w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-sm font-semibold text-emerald-600">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-sm text-[#6B7280] md:flex-row">
          <p>© 2026 Surya Promoters. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/about" className="hover:text-[#111827] transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-[#111827] transition">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
