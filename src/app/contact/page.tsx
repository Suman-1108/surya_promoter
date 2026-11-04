"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Orange Garden",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Open WhatsApp directly with the details
    const text = encodeURIComponent(
      `Hello Surya Promoters,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${
        formData.email || "N/A"
      }\nProject Interested: ${formData.project}\nMessage: ${
        formData.message || "I would like to schedule a site visit and discuss clear title property."
      }`
    );

    window.open(`https://wa.me/917708966452?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-2xs">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 mb-2 text-emerald-800">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            {language === "ta" ? "நேரடி தொடர்பு & ஆலோசனை" : "Direct Hotline & Veteran Advisory"}
          </span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A]">
          {language === "ta" ? "சூர்யா புரமோட்டர்ஸை தொடர்பு கொள்ளுங்கள்" : "Get in Touch With Surya Promoters"}
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
          {language === "ta"
            ? "விமானப்படை அதிகாரியின் நேரடி வழிகாட்டுதலில் தெளிவான பட்டா நிலங்களை தேர்வு செய்ய எங்களை உடனடியாக தொடர்பு கொள்ளவும்."
            : "Connect directly with our veteran-led real estate team in Madurai for clear title verified plots, commercial land, and agro estates."}
        </p>
      </div>

      {/* Grid: Contact Channels (Left) + Enquiry Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#0F172A]">
              {language === "ta" ? "நேரடி தொலைபேசி எண்" : "Direct Promoter Hotline"}
            </h3>
            <p className="text-xs text-[#64748B]">
              {language === "ta" ? "உடனடி அழைப்பு மற்றும் வழிகாட்டுதல்:" : "Immediate call support & plot queries:"}
            </p>
            <a
              href="tel:+917708966452"
              className="font-mono text-base font-bold text-[#0F172A] hover:text-[#B45309] block transition"
            >
              +91 77089 66452
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="h-10 w-10 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#0F172A]">
              {language === "ta" ? "வாட்ஸ்அப் நேரடி சாட்" : "WhatsApp Instant Price & Layout"}
            </h3>
            <p className="text-xs text-[#64748B]">
              {language === "ta" ? "வரைபடங்கள் மற்றும் விலை விபரம் பெற:" : "Receive PDF blueprints & video tours on WhatsApp:"}
            </p>
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{language === "ta" ? "வாட்ஸ்அப்பில் பேச" : "Chat on WhatsApp"}</span>
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-2">
            <div className="h-10 w-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-bold text-[#0F172A]">
              {language === "ta" ? "மதுரை தலைமை அலுவலகம்" : "Madurai Registered Office"}
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Surya Promoters, Madurai Region, Tamil Nadu, India.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#64748B] pt-1">
              <Clock className="h-3.5 w-3.5 text-[#EAB308]" />
              <span>{language === "ta" ? "திங்கள் - ஞாயிறு: காலை 8:00 - இரவு 8:00" : "Mon - Sun: 8:00 AM - 8:00 PM"}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Quick Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
              {language === "ta" ? "தள பார்வை / விலை விபரம் கோரவும்" : "Schedule a Site Visit or Request Pricing"}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 mb-6">
              {language === "ta"
                ? "உங்கள் விபரங்களை உள்ளிடுங்கள், எங்கள் குழு உடனடியாக உங்களைத் தொடர்பு கொள்ளும்."
                : "Fill in your details below to receive instant pricing and coordinate a complimentary site visit."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                    {language === "ta" ? "உங்கள் பெயர் *" : "Your Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === "ta" ? "பெயர்" : "Full Name"}
                    className="w-full h-11 px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs sm:text-sm outline-hidden transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                    {language === "ta" ? "தொலைபேசி எண் *" : "Mobile Phone Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full h-11 px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs sm:text-sm outline-hidden transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                    {language === "ta" ? "மின்னஞ்சல் (விரும்பினால்)" : "Email Address (Optional)"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full h-11 px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs sm:text-sm outline-hidden transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                    {language === "ta" ? "ஆர்வமுள்ள திட்டம்" : "Project of Interest"}
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs sm:text-sm outline-hidden transition"
                  >
                    <option value="Orange Garden">Orange Garden (Orchard &amp; Farm Estate)</option>
                    <option value="Vaigai Elite">Vaigai Elite (NH-44 Commercial Highway)</option>
                    <option value="Madurai Farms">Madurai Farms &amp; Fruits (Agro Acreage)</option>
                    <option value="Surya Green Enclave">Surya Green Enclave (DTCP Township)</option>
                    <option value="General Enquiry">General Consultation / Land Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  {language === "ta" ? "உங்கள் தேவைகள் / செய்தி" : "Requirements / Preferred Plot Size"}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === "ta"
                      ? "உங்களுக்கு தேவையான மனை அளவு, பட்ஜெட் மற்றும் விபரங்களை குறிப்பிடவும்..."
                      : "Describe your preferred plot dimensions, budget, or preferred site visit date..."
                  }
                  className="w-full p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs sm:text-sm outline-hidden transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>
                    {language === "ta" ? "வாட்ஸ்அப் மூலம் உடனடியாக அனுப்ப" : "Submit Enquiry & Open WhatsApp"}
                  </span>
                </button>
              </div>

              {sent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>
                    {language === "ta"
                      ? "உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! எங்கள் குழு விரைவில் உங்களை தொடர்புகொள்ளும்."
                      : "Enquiry prepared! WhatsApp opened to connect directly with Surya Promoters."}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}
