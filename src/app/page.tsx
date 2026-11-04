"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { projectsData } from "@/data/projects";
import {
  Building2,
  MapPin,
  Camera,
  Info,
  Download,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  Mail,
  Home as HomeIcon,
  TreePine,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const [enquirySent, setEnquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Orange Garden",
    message: "",
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setFormData({ name: "", phone: "", email: "", project: "Orange Garden", message: "" });
    }, 4000);
  };

  // The 5 Main Navigation Cards
  const fiveNavCards = [
    {
      title: language === "ta" ? "திட்டங்கள்" : "Our Projects",
      subtitle: language === "ta" ? "குடியிருப்பு · வணிகம் · பண்ணை" : "Residential · Commercial · Farm",
      icon: Building2,
      href: "/projects",
      badge: "Explore",
    },
    {
      title: language === "ta" ? "இருப்பிடம்" : "Location",
      subtitle: language === "ta" ? "மதுரை வரைபடம் & வழிகள்" : "Madurai Maps & Routes",
      icon: MapPin,
      href: "/location",
      badge: "GPS View",
    },
    {
      title: language === "ta" ? "புகைப்படங்கள்" : "Gallery",
      subtitle: language === "ta" ? "ட்ரோன் காட்சிகள் & படங்கள்" : "Drone Aerials & Videos",
      icon: Camera,
      href: "/gallery",
      badge: "HD Media",
    },
    {
      title: language === "ta" ? "எங்களைப் பற்றி" : "About",
      subtitle: language === "ta" ? "16+ வருட விமானப்படை நம்பிக்கை" : "16+ Yrs IAF Veteran Trust",
      icon: Info,
      href: "/about",
      badge: "Legacy",
    },
    {
      title: language === "ta" ? "வரைபடங்கள்" : "Download Map",
      subtitle: language === "ta" ? "அரசு அங்கீகார வரைபடங்கள்" : "Approved Blueprints & PDF",
      icon: Download,
      href: "/download",
      badge: "Instant PDF",
    },
  ];

  // 3 Major Categories
  const categories = [
    {
      title: language === "ta" ? "குடியிருப்பு திட்டங்கள்" : "Residential",
      subtitle: language === "ta" ? "அங்கீகரிக்கப்பட்ட மனைப்பிரிவுகள் & அடுக்குமாடி" : "Approved Villa Plots & Flat Developments",
      icon: HomeIcon,
      href: "/projects?cat=residential",
      image: "/images/projects/surya-green-enclave.jpg",
      count: "2 Projects",
      desc: language === "ta"
        ? "DTCP & RERA அனுமதி பெற்ற மனைகள், அகலமான தார் சாலைகள், நல்ல குடிநீர் வளம் மற்றும் தனிப்பட்டா."
        : "DTCP & RERA approved residential villa plots with bitumen roads, sweet groundwater, and immediate individual patta.",
    },
    {
      title: language === "ta" ? "வணிக நிலங்கள்" : "Commercial",
      subtitle: language === "ta" ? "நெடுஞ்சாலை முகப்பு & வணிக வளாகங்கள்" : "Highway Corridors & Commercial Buildings",
      icon: Building2,
      href: "/projects?cat=commercial",
      image: "/images/projects/vaigai/corridor-aerial.jpg",
      count: "5 Projects",
      desc: language === "ta"
        ? "ரிங் ரோடு, பாண்டி கோவில் மற்றும் அண்ணா நகரில் மருத்துவமனை, குடோன், ஷோரூம்களுக்கு உகந்த நிலங்கள்."
        : "High-exposure parcels along NH-44, Ring Road, and Anna Nagar ideal for hospitals, godowns, and showrooms.",
    },
    {
      title: language === "ta" ? "இயற்கை பண்ணை மனைகள்" : "Farm Land",
      subtitle: language === "ta" ? "பழத்தோட்டங்கள் & வார இறுதி பண்ணை வீடு" : "Agricultural Land, Orchards & Farm Estates",
      icon: TreePine,
      href: "/projects?cat=farm",
      image: "/images/projects/orange-garden/hero-orchard.jpg",
      count: "2 Projects",
      desc: language === "ta"
        ? "சொட்டு நீர்ப்பாசனம், ஆரஞ்சு பழ மரங்கள் மற்றும் வார இறுதி ஓய்வு இல்லங்களுக்கான கேட்டட் பண்ணை எஸ்டேட்."
        : "Gated agro-acreage with drip irrigation, thriving citrus groves, and private weekend farmhouse cottages.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F4EE] text-[#171B18] font-sans selection:bg-[#C6A66B]/30">
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-Width Aerial Real Estate Visual with Branding) */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#173D2B]">
        {/* Aerial Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-aerial-farmland.jpg"
            alt="Surya Promoters Madurai Aerial Real Estate"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Subtle Multi-Layer Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B] via-[#173D2B]/75 to-[#173D2B]/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-24 text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C6A66B] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-[#C6A66B]" />
            <span>{language === "ta" ? "16+ வருட விமானப்படை ஒழுக்கம் & வெளிப்படைத்தன்மை" : "16+ Years IAF Veteran Leadership · Madurai · Estd. 2010"}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15]"
          >
            {language === "ta" ? "உங்கள் நிலம். உங்கள் எதிர்காலம் மதுரையில்." : "Your Land. Your Future in Madurai."}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 font-mono text-sm sm:text-base lg:text-lg text-gray-200 tracking-wider font-semibold max-w-2xl"
          >
            {language === "ta"
              ? "குடியிருப்பு மனைகள் · வணிகப் பெருநிலங்கள் · இயற்கை பண்ணை எஸ்டேட்கள்"
              : "Residential | Commercial | Farm Land"}
          </motion.p>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed"
          >
            {language === "ta"
              ? "100% தூய கம்ப்யூட்டர் பட்டா, நேரடி சாலை முகப்பு மற்றும் சட்டப்பூர்வ மூலப்பத்திரங்களுடன் மதுரையின் அதிவேக வளர்ச்சி பகுதிகளில் முதலீடு செய்யுங்கள்."
              : "Direct developer access to 100% verified titles, surveyed boundary stones, and lifetime appreciation across Madurai's fastest growing corridors."}
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C6A66B] hover:bg-[#b5955a] text-[#171B18] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <span>{language === "ta" ? "எங்கள் திட்டங்களை பார்க்க" : "Explore Our Projects"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4 text-[#C6A66B]" />
              <span>{language === "ta" ? "தொடர்பு கொள்ள" : "Contact Us"}</span>
            </Link>
          </motion.div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. FIVE MAIN NAVIGATION CARDS (Desktop: Horizontal Row · Mobile: App Grid) */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-12 w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {fiveNavCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group relative flex flex-col justify-between p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-[#E8E2D7] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#173D2B] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F4EE] group-hover:bg-[#173D2B] text-[#173D2B] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#C6A66B]/15 text-[#173D2B]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-sm sm:text-base font-extrabold text-[#171B18] group-hover:text-[#173D2B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-[#64865A] font-medium mt-0.5 line-clamp-1">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-2 border-t border-[#F5F4EE] text-[11px] font-bold text-[#173D2B]">
                  <span>{language === "ta" ? "திறக்க" : "Open"}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-[#C6A66B] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. CORE CATEGORIES & CUSTOMER JOURNEY (Residential, Commercial, Farm Land) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#E8E2D7] pb-5">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
              {language === "ta" ? "எங்கள் மூன்று முதன்மை பிரிவுகள்" : "Our Core Real Estate Portfolio"}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#173D2B] mt-1">
              {language === "ta" ? "உங்கள் தேவைகேற்ற நிலப் பிரிவுகள்" : "Explore Projects by Category"}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#173D2B] hover:text-[#64865A] transition"
          >
            <span>{language === "ta" ? "அனைத்து திட்டங்களையும் பார்க்க" : "View All Projects"}</span>
            <ArrowRight className="h-4 w-4 text-[#C6A66B]" />
          </Link>
        </div>

        {/* 3 Large Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col rounded-3xl bg-white border border-[#E8E2D7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Canvas */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-[#173D2B] shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20">
                      {cat.count}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono text-[#C6A66B] font-semibold block">{cat.subtitle}</span>
                    <h3 className="font-display text-xl font-bold">{cat.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-3 border-t border-[#F5F4EE] flex items-center justify-between">
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#173D2B] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#122e20]"
                    >
                      <span>{language === "ta" ? "திட்டங்களை பார்க்க" : "Explore Projects"}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#C6A66B]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. FOUNDER PROFILE & MILITARY TRUST (Mr. Manickam Natarajan · IAF Veteran) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#FFFFFF] border-y border-[#E8E2D7] py-16 sm:py-20">
        <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Founder Photograph & Credentials Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border-4 border-[#C6A66B] bg-[#173D2B] shadow-2xl">
                <Image
                  src="/images/founder/founder.png"
                  alt="Founder Mr. Manickam Natarajan, Indian Air Force Veteran"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="font-mono text-xs text-[#C6A66B] font-bold uppercase tracking-widest block">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">
                    Mr. Manickam Natarajan
                  </h3>
                  <span className="inline-block mt-1 font-mono text-xs text-gray-300">
                    Indian Air Force (IAF) Veteran
                  </span>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>16+ Years Defense-Grade Title Integrity</span>
              </div>
            </div>

            {/* Founder Message & Real Estate Principles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A66B]/15 text-[#173D2B] text-xs font-mono font-bold">
                <Sparkles className="h-3.5 w-3.5 text-[#C6A66B]" />
                <span>Estd. 2010 · Madurai, Tamil Nadu</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#173D2B] leading-tight">
                {language === "ta"
                  ? "இராணுவ ஒழுக்கம், நேர்மை & 100% தெளிவான பட்டா உத்தரவாதம்"
                  : "Built On Military Discipline, Absolute Honesty & 100% Clear Computer Patta"}
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {language === "ta"
                  ? "இந்திய விமானப்படையில் பணியாற்றிய திரு. மாணிக்கம் நடராஜன் அவர்களால் 2010 ஆம் ஆண்டு சூர்யா புரமோட்டர்ஸ் தொடங்கப்பட்டது. நிலம் வாங்குபவர்களின் வாழ்நாள் சேமிப்பைப் பாதுகாக்கும் வகையில், ஒவ்வொரு நிலமும் தீவிர சட்ட ஆய்வுக்குப் பின்னரே விற்பனை செய்யப்படுகிறது."
                  : "Founded in 2010 by Indian Air Force Veteran Mr. Manickam Natarajan, Surya Promoters brings defense-standard rigor and uncompromising honesty to Madurai's real estate sector. We believe a family's land purchase is their lifelong financial fortress."}
              </p>

              {/* 4 Pillars of Surya Promoters */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <span className="block font-display text-2xl font-extrabold text-[#173D2B]">16+ Yrs</span>
                  <span className="text-xs text-gray-600 font-medium">Military-Grade Experience</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <span className="block font-display text-2xl font-extrabold text-[#173D2B]">100%</span>
                  <span className="text-xs text-gray-600 font-medium">Verified Computer Patta</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <span className="block font-display text-2xl font-extrabold text-[#173D2B]">1000+</span>
                  <span className="text-xs text-gray-600 font-medium">Happy Landowner Families</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F4EE] border border-[#E8E2D7]">
                  <span className="block font-display text-2xl font-extrabold text-[#173D2B]">Zero</span>
                  <span className="text-xs text-gray-600 font-medium">Legal Encumbrance Disputes</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173D2B] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#122e20] transition"
                >
                  <span>{language === "ta" ? "முழுமையான நிறுவன விவரம்" : "Read Full Company Profile"}</span>
                  <ArrowRight className="h-4 w-4 text-[#C6A66B]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. DIRECT COMMUNICATION CHANNELS & QUICK ENQUIRY FORM */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: 4 Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                {language === "ta" ? "நேரடி தொடர்பு" : "Direct Assistance"}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#173D2B] mt-1">
                {language === "ta" ? "எங்களை நேரடியாக தொடர்பு கொள்ளுங்கள்" : "Speak Directly With Our Promoters"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {language === "ta"
                  ? "மனைப்பிரிவுகள், விலைப்பட்டியல் மற்றும் களப்பார்வை முன்பதிவு செய்ய கீழ்கண்ட வழிகளில் எங்களை தொடர்பு கொள்ளலாம்."
                  : "Request pricing, cadastral survey maps, or arrange a private site inspection tour with our senior property advisors."}
              </p>
            </div>

            {/* 4 Cards */}
            <div className="space-y-3">
              {/* Call Now */}
              <a
                href="tel:+917708966452"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:border-[#173D2B] hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-[#173D2B] group-hover:text-white transition">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-gray-500 font-bold">1. Call Promoter</span>
                    <span className="font-display text-sm sm:text-base font-extrabold text-[#171B18]">+91 77089 66452</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:border-[#25D366] hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-gray-500 font-bold">2. Instant WhatsApp</span>
                    <span className="font-display text-sm sm:text-base font-extrabold text-[#171B18]">+91 77089 66452</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">Chat Fast</span>
              </a>

              {/* Email */}
              <a
                href="mailto:suryapromotersmdu@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:border-[#173D2B] hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 group-hover:bg-[#173D2B] group-hover:text-white transition">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-gray-500 font-bold">3. Official Email</span>
                    <span className="font-display text-xs sm:text-sm font-bold text-[#171B18]">suryapromotersmdu@gmail.com</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full">Write</span>
              </a>

              {/* Visit Office */}
              <Link
                href="/location"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:border-[#173D2B] hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 group-hover:bg-[#173D2B] group-hover:text-white transition">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-gray-500 font-bold">4. Visit Office</span>
                    <span className="font-display text-xs sm:text-sm font-bold text-[#171B18]">Madurai Region, Tamil Nadu</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-purple-800 bg-purple-50 px-3 py-1 rounded-full">Directions</span>
              </Link>
            </div>
          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6A66B]">
                {language === "ta" ? "விசாரணை படிவம்" : "Quick Enquiry Form"}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#173D2B] mt-1">
                {language === "ta" ? "உங்கள் விருப்பத்தை எங்களிடம் பகிருங்கள்" : "Get Detailed Project Brochure & Price List"}
              </h3>
            </div>

            {enquirySent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h4 className="font-display text-lg font-bold text-emerald-900">
                  {language === "ta" ? "உங்கள் விவரங்கள் பெறப்பட்டது!" : "Enquiry Received Successfully!"}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  {language === "ta"
                    ? "எங்கள் மூத்த நில ஆலோசகர் விரைவில் உங்களை அழைப்பார்."
                    : "Our senior promoter advisor will contact you within 15 minutes."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] focus:bg-white focus:border-[#173D2B] focus:ring-1 focus:ring-[#173D2B] text-xs sm:text-sm transition outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-Digit WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] focus:bg-white focus:border-[#173D2B] focus:ring-1 focus:ring-[#173D2B] text-xs sm:text-sm transition outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] focus:bg-white focus:border-[#173D2B] focus:ring-1 focus:ring-[#173D2B] text-xs sm:text-sm transition outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 mb-1">
                      Interested Project
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] focus:bg-white focus:border-[#173D2B] text-xs sm:text-sm transition outline-hidden"
                    >
                      <option value="Orange Garden">Orange Garden (Orchard & Plots 1-10)</option>
                      <option value="Madurai Farms & Fruits">Madurai Farms & Fruits (Agro Acreage)</option>
                      <option value="Vaigai Elite Garden">Vaigai Elite Garden (Outer Ring Road)</option>
                      <option value="Vaigai River Build">Vaigai River Build (Riverfront Commercial)</option>
                      <option value="Pandi Kovil Site">Pandi Kovil Site (Ring Road Junction)</option>
                      <option value="Commercial Building – Anna Nagar">Commercial Building – Anna Nagar</option>
                      <option value="Mayilan Gundu Site – MPF School">Mayilan Gundu Site – MPF School</option>
                      <option value="Plot Projects (Surya Green Enclave)">Plot Projects (Surya Green Enclave)</option>
                      <option value="Flat Projects (Luxury Residences)">Flat Projects (Luxury Residences)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-700 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your budget, preferred square footage or cents, and convenient time for site visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-[#E8E2D7] bg-[#F5F4EE] focus:bg-white focus:border-[#173D2B] text-xs sm:text-sm transition outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#173D2B] hover:bg-[#122e20] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition hover:scale-[1.01] cursor-pointer"
                >
                  {language === "ta" ? "விசாரணையை அனுப்பவும்" : "Submit Enquiry & Request Brochure"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
