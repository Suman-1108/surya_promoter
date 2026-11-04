"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Building2,
  LayoutGrid,
  Layers,
  MapPin,
  FileText,
  Images,
  MessageCircle,
  Phone,
  Mail,
  Download,
  Camera,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronRight,
  X,
  Star,
  ShieldCheck,
  Sparkles,
  Navigation,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

// Project Data tailored to the Surya Promoters Customer Workflow
interface WorkflowProject {
  id: string;
  name: { en: string; ta: string };
  category: "residential" | "commercial" | "farm";
  categoryLabel: { en: string; ta: string };
  subcategory: "flat" | "plot" | "comm-building" | "comm-land" | "farm-land";
  subcategoryLabel: { en: string; ta: string };
  location: { en: string; ta: string };
  image: string;
  statusText: { en: string; ta: string };
  overview: { en: string; ta: string };
  highlights: { en: string[]; ta: string[] };
  slug?: string;
  blueprint?: string;
  mapsUrl: string;
}

const WORKFLOW_PROJECTS: WorkflowProject[] = [
  // Commercial Projects (5)
  {
    id: "vaigai-elite",
    name: { en: "Vaigai Elite Garden", ta: "வைகை எலைட் கார்டன்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Madurai Outer Ring Road & NH-44", ta: "மதுரை அவுட்டர் ரிங் ரோடு & NH-44" },
    image: "/images/projects/vaigai/corridor-aerial.jpg",
    statusText: { en: "Active Corridor", ta: "விற்பனையில் உள்ளது" },
    overview: {
      en: "High-exposure commercial land parcels along NH-44 & Madurai Outer Ring Road, perfectly tailored for hospitals, logistics godowns, fleet terminals, and institutional centers.",
      ta: "NH-44 மற்றும் மதுரை ரிங் ரோட்டில் அமைந்துள்ள உயர் மதிப்பு வணிக நிலங்கள். மருத்துவமனைகள், குடோன்கள், மற்றும் வணிக நிறுவனங்களுக்கு மிகச் சிறந்தது.",
    },
    highlights: {
      en: [
        "Direct national highway multi-axle vehicle frontage",
        "100% computer patta with verified revenue records",
        "Perennial groundwater & high vehicular visibility",
      ],
      ta: [
        "தேசிய நெடுஞ்சாலை நேரடி முகப்பு வசதி",
        "100% கம்ப்யூட்டர் பட்டா மற்றும் தெளிவான மூலப்பத்திரங்கள்",
        "அதிவேக வாகன போக்குவரத்து மற்றும் சிறந்த விளம்பர மதிப்பு",
      ],
    },
    slug: "vaigai-elite-commercial-land",
    mapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road",
  },
  {
    id: "vaigai-river",
    name: { en: "Vaigai River Build", ta: "வைகை ரிவர் பில்ட்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Vaigai Riverfront Highway, Madurai", ta: "வைகை நதிக்கரை சாலை, மதுரை" },
    image: "/images/projects/vaigai-commercial.jpg",
    statusText: { en: "Prime Land", ta: "பிரைம் நிலம்" },
    overview: {
      en: "Exclusive riverfront commercial land plots with wide approach roads, ideal for hospitality ventures, wedding convention centers, and retail parks.",
      ta: "வைகை நதிக்கரை பகுதியில் அமைந்துள்ள பிரத்யேக வணிக நிலங்கள். திருமண மண்டபங்கள், ஹோட்டல்கள் மற்றும் வணிக வளாகங்களுக்கு உகந்தது.",
    },
    highlights: {
      en: [
        "Picturesque riverfront commercial frontage",
        "Unobstructed road access with wide tarmac roads",
        "Immediate registration & clear encumbrance certificate",
      ],
      ta: [
        "வைகை நதிக்கரை இயற்கை எழில் சூழ்ந்த வணிக முகப்பு",
        "அகலமான தார் சாலை இணைப்பு வசதிகள்",
        "உடனடி பத்திரப்பதிவு மற்றும் வில்லங்கமில்லா சான்றிதழ்",
      ],
    },
    slug: "vaigai-elite-commercial-land",
    mapsUrl: "https://maps.google.com/?q=Vaigai+Madurai",
  },
  {
    id: "pandi-kovil",
    name: { en: "Pandi Kovil Site", ta: "பாண்டி கோவில் வணிக மனை" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Pandi Kovil Ring Road Junction, Madurai", ta: "பாண்டி கோவில் ரிங் ரோடு சந்திப்பு, மதுரை" },
    image: "/images/hero/hero-farmland-aerial.jpg",
    statusText: { en: "High Demand", ta: "அதிக மதிப்பு" },
    overview: {
      en: "Strategic high-footfall commercial plots situated right at the prime Pandi Kovil Ring Road junction, Madurai's fastest expanding commercial district.",
      ta: "மதுரையின் முக்கிய வணிக சந்திப்பான பாண்டி கோவில் ரிங் ரோடு அருகே அமைந்துள்ள அதிவேக வளர்ச்சி பெறும் வணிக நிலங்கள்.",
    },
    highlights: {
      en: [
        "Unbeatable footfall and vehicular traffic 24/7",
        "Surrounded by leading restaurants, retail, and transit points",
        "Clear title deeds vetted by military standard scrutiny",
      ],
      ta: [
        "24 மணி நேர மக்கள் நடமாட்டம் மற்றும் வாகன போக்குவரத்து",
        "முக்கிய உணவகங்கள் மற்றும் வணிக மையங்களின் மையப்பகுதி",
        "இராணுவ ஒழுங்குடன் ஆய்வு செய்யப்பட்ட தெளிவான பத்திரங்கள்",
      ],
    },
    slug: "vaigai-elite-commercial-land",
    mapsUrl: "https://maps.google.com/?q=Pandi+Kovil+Ring+Road+Madurai",
  },
  {
    id: "anna-nagar-bldg",
    name: { en: "Commercial Building – Anna Nagar", ta: "வணிக கட்டிடம் – அண்ணா நகர்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-building",
    subcategoryLabel: { en: "Commercial Building", ta: "வணிக கட்டிடம்" },
    location: { en: "Anna Nagar Main Road, Madurai", ta: "அண்ணா நகர் மெயின் ரோடு, மதுரை" },
    image: "/images/gallery/gallery-2.jpg",
    statusText: { en: "Built Structure", ta: "கட்டிட வளாகம்" },
    overview: {
      en: "Premium commercial building opportunity in Madurai's upscale Anna Nagar corridor. Ideal for corporate banks, diagnostic centers, and flagship retail showrooms.",
      ta: "மதுரை அண்ணா நகரின் முதன்மை பகுதியில் அமைந்துள்ள வணிக கட்டிடம். வங்கிகள், கார்ப்பரேட் அலுவலகங்கள் மற்றும் ஷோரூம்களுக்கு ஏற்றது.",
    },
    highlights: {
      en: [
        "Prime urban retail address in Madurai",
        "Ample dedicated customer parking and frontage",
        "Substantial monthly rental yield potential",
      ],
      ta: [
        "மதுரையின் மிக முக்கிய வர்த்தக முகவரி",
        "விசாலமான வாடிக்கையாளர் வாகன நிறுத்துமிடம்",
        "உயர் மாத வாடகை வருவாய் வாய்ப்பு",
      ],
    },
    slug: "vaigai-elite-commercial-land",
    mapsUrl: "https://maps.google.com/?q=Anna+Nagar+Madurai",
  },
  {
    id: "mayilan-gundu",
    name: { en: "Mayilan Gundu Site – MPF School", ta: "மயிலன் குண்டு – MPF பள்ளி அருகே" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Near MPF International School, Madurai", ta: "MPF சர்வதேச பள்ளி அருகில், மதுரை" },
    image: "/images/gallery/gallery-3.jpg",
    statusText: { en: "Emerging Corridor", ta: "வளர்ச்சி பகுதி" },
    overview: {
      en: "Fast-developing commercial and institutional land parcels adjacent to leading educational schools, perfect for student hostels, commercial centers, and clinics.",
      ta: "முன்னணி சர்வதேச பள்ளியின் அருகில் அமைந்துள்ள அதிவேக வளர்ச்சி நிலங்கள். ஹாஸ்டல்கள், கிளினிக்குகள் மற்றும் வணிக நிறுவனங்களுக்கு உகந்தது.",
    },
    highlights: {
      en: [
        "Adjacent to renowned educational institutions",
        "Wide tarmac approach suitable for heavy transport",
        "Direct promoter sale with verified patta",
      ],
      ta: [
        "பிரபல சர்வதேச பள்ளியின் நேரடி அருகில்",
        "அகலமான தார் சாலை அணுகுமுறை",
        "நேரடி புரோமோட்டர் விற்பனை மற்றும் தெளிவான பட்டா",
      ],
    },
    slug: "vaigai-elite-commercial-land",
    mapsUrl: "https://maps.google.com/?q=Madurai+School+Zone",
  },

  // Farm Land Projects (2)
  {
    id: "madurai-farms",
    name: { en: "Madurai Farms & Fruits", ta: "மதுரை பார்ம்ஸ் & ஃப்ரூட்ஸ்" },
    category: "farm",
    categoryLabel: { en: "Farm Land", ta: "விவசாய நிலம்" },
    subcategory: "farm-land",
    subcategoryLabel: { en: "Farm Land", ta: "விவசாய பண்ணை" },
    location: { en: "Agricultural Green Belt, Madurai", ta: "மதுரை விவசாய பசுமை மண்டலம்" },
    image: "/images/projects/madurai-farms.jpg",
    statusText: { en: "Active Agro Acreage", ta: "விவசாய பண்ணை" },
    overview: {
      en: "Fertile managed agricultural farmsteads with perennial sweet groundwater aquifers, established fruit-bearing groves, and tranquil weekend farmhouse opportunities.",
      ta: "வளமான செம்மண் பூமி, வற்றாத நிலத்தடி நீரூற்று, பயனுள்ள பழ மரங்கள் மற்றும் அமைதியான வார இறுதி பண்ணை இல்லங்களுக்கான பிரத்யேக திட்டம்.",
    },
    highlights: {
      en: [
        "Perennial water table & pre-planted fruit plantations",
        "Individual surveyed boundary stones with registered patta",
        "Paved plantation avenues with round-the-clock caretaker support",
      ],
      ta: [
        "வற்றாத நிலத்தடி நீர் மற்றும் பலன் தரும் பழ மரங்கள்",
        "எல்லைக் கற்கள் நடப்பட்ட தனி கம்ப்யூட்டர் பட்டா",
        "அகலமான உள்சாலைகள் மற்றும் 24 மணி நேர பராமரிப்பு வசதி",
      ],
    },
    slug: "madurai-farms-and-fruits",
    mapsUrl: "https://maps.google.com/?q=Madurai+Farm+Land",
  },
  {
    id: "orange-garden",
    name: { en: "Orange Garden", ta: "ஆரஞ்ச் கார்டன்" },
    category: "farm",
    categoryLabel: { en: "Farm Land", ta: "விவசாய நிலம்" },
    subcategory: "farm-land",
    subcategoryLabel: { en: "Farm Land", ta: "பழத்தோட்ட பண்ணை" },
    location: { en: "Thiruppuvanam to Narikudi Road, Madurai", ta: "திருப்புவனம் - நரிக்குடி மெயின் ரோடு, மதுரை" },
    image: "/images/projects/orange-garden.jpg",
    blueprint: "/images/projects/orange-garden/layout-blueprint.jpg",
    statusText: { en: "Running Project (Ongoing)", ta: "நடைபெறும் திட்டம்" },
    overview: {
      en: "Gated orchard community and private farm estate plots. Numbered 10-unit layout plan with direct frontage along Thiruppuvanam to Narikudi Road, mature citrus groves, and clear titles.",
      ta: "கேட்டட் பழத்தோட்ட பண்ணை மனைகள். திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் நேரடி முகப்புடன் கூடிய 10 சர்வே செய்யப்பட்ட மனைகள் மற்றும் 100% தெளிவான பட்டா.",
    },
    highlights: {
      en: [
        "10 surveyed farm plots (Plots 1–10) with verified cadastral blueprint",
        "Direct frontage along Thiruppuvanam to Narikudi Road",
        "Integrated drip irrigation systems & gated security entrance",
      ],
      ta: [
        "அளவீடு செய்யப்பட்டு எண் குறிக்கப்பட்ட 10 மனைகள் (1-10)",
        "திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் நேரடி முகப்பு",
        "சொட்டு நீர்ப்பாசனம் மற்றும் பிரம்மாண்ட நுழைவு வளைவு",
      ],
    },
    slug: "orange-garden",
    mapsUrl: "https://goo.gl/maps/reSXDDNmSNzkve699?g_st=aw",
  },

  // Residential Projects (2)
  {
    id: "surya-green-enclave",
    name: { en: "Plot Projects (Surya Green Enclave)", ta: "பிளாட் திட்டங்கள் (கிரீன் என்கிளேவ்)" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "plot",
    subcategoryLabel: { en: "Plot Projects", ta: "மனைப்பிரிவு" },
    location: { en: "Mudukangulam Road, Madurai", ta: "முடுகங்குளம் ரோடு, மதுரை" },
    image: "/images/projects/surya-green-enclave.jpg",
    blueprint: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
    statusText: { en: "DTCP & RERA Delivered", ta: "DTCP & RERA அங்கீகாரம்" },
    overview: {
      en: "Fully developed residential township featuring DTCP & RERA approvals, wide bitumen roads, sweet groundwater, streetlights, and immediate individual patta.",
      ta: "DTCP மற்றும் RERA அங்கீகாரம் பெற்ற பிரீமியம் வீட்டு மனைப்பிரிவு. தார் சாலைகள், தெருவிளக்குகள், குடிநீர் மற்றும் உடனடி தனிப்பட்டா.",
    },
    highlights: {
      en: [
        "100% DTCP & RERA approved residential layouts",
        "Clear 30-year legal documentation scrutinized by IAF veterans",
        "Sweet potable groundwater at shallow depths",
      ],
      ta: [
        "100% DTCP & RERA அங்கீகரிக்கப்பட்ட வீட்டு மனைப்பிரிவு",
        "விமானப்படை அதிகாரிகளால் ஆராயப்பட்ட 30 வருட மூலப்பத்திரங்கள்",
        "குடிநீர் வசதி மற்றும் அமைதியான குடியிருப்பு சூழல்",
      ],
    },
    slug: "surya-green-enclave",
    mapsUrl: "https://maps.google.com/?q=Mudukangulam+Road+Madurai",
  },
  {
    id: "flat-projects",
    name: { en: "Flat Projects", ta: "அடுக்குமாடி குடியிருப்பு திட்டங்கள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "flat",
    subcategoryLabel: { en: "Flat Projects", ta: "அடுக்குமாடி" },
    location: { en: "Prime Urban Corridors, Madurai", ta: "மதுரை முக்கிய குடியிருப்பு பகுதிகள்" },
    image: "/images/gallery/gallery-4.jpg",
    statusText: { en: "Modern Living", ta: "நவீன குடியிருப்பு" },
    overview: {
      en: "Modern luxury apartment developments engineered with earthquake-resistant RCC design, covered car parking, 24/7 power backup, and prime Madurai city access.",
      ta: "நவீன வசதிகள், கார் பார்க்கிங், லிஃப்ட், 24 மணி நேர பாதுகாப்புடன் கூடிய நவீன அடுக்குமாடி குடியிருப்பு திட்டங்கள்.",
    },
    highlights: {
      en: [
        "Architecturally designed spacious 2 & 3 BHK floorplans",
        "Covered reserved vehicle parking and continuous power backup",
        "Strategic location with walkability to schools, markets & hospitals",
      ],
      ta: [
        "வாஸ்து முறைப்படி கட்டப்பட்ட விசாலமான 2 & 3 BHK வீடுகள்",
        "கார் பார்க்கிங் மற்றும் தடையற்ற மின்சார வசதி",
        "பள்ளிகள், மருத்துவமனைகளுக்கு மிக அருகில் உள்ள இருப்பிடம்",
      ],
    },
    slug: "surya-green-enclave",
    mapsUrl: "https://maps.google.com/?q=Madurai+City",
  },
];

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();

  // Workflow Interactive State
  const [selectedCategory, setSelectedCategory] = useState<"all" | "residential" | "commercial" | "farm">("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("orange-garden");

  // Modals for deep dive (Details, Resources, Enquiry)
  const [activeModal, setActiveModal] = useState<"none" | "details" | "resources" | "enquiry">("none");
  const [resourceTab, setResourceTab] = useState<"gallery" | "location" | "download">("gallery");

  // Enquiry Form State
  const [enquirySent, setEnquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Filtered projects based on Category & Subcategory
  const filteredProjects = WORKFLOW_PROJECTS.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
    if (selectedSubcategory !== "all" && p.subcategory !== selectedSubcategory) return false;
    return true;
  });

  // Currently active project for Details (Step 05), Resources (Step 06), and Enquiry (Step 07)
  const currentProject =
    WORKFLOW_PROJECTS.find((p) => p.id === selectedProjectId) || WORKFLOW_PROJECTS[0];

  const handleCategorySelect = (cat: "all" | "residential" | "commercial" | "farm") => {
    setSelectedCategory(cat);
    setSelectedSubcategory("all");
    const matching = WORKFLOW_PROJECTS.filter((p) => cat === "all" || p.category === cat);
    if (matching.length > 0) {
      setSelectedProjectId(matching[0].id);
    }
  };

  const handleSubcategorySelect = (subcat: string) => {
    setSelectedSubcategory(subcat);
    const matching = WORKFLOW_PROJECTS.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (subcat !== "all" && p.subcategory !== subcat) return false;
      return true;
    });
    if (matching.length > 0) {
      setSelectedProjectId(matching[0].id);
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setActiveModal("none");
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <main className="min-h-screen w-full bg-[#0A0D12] text-[#0F172A] font-sans antialiased selection:bg-[#EAB308]/30">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION (Full-Width Aerial Real Estate · No Green Color) */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#0A0D12]">
        
        {/* Full-Width Landscape Aerial Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-gated-layout.jpg"
            alt="Surya Promoters Madurai Plotted Real Estate Development"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Deep Obsidian & Gold-Toned Multi-Layer Gradient Overlay (Zero Green) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/75 to-[#0A0D12]/45" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Top Minimal Brand Bar (Integrated Inside Hero · No Old Navbar Bar) */}
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-14 pt-6 sm:pt-8 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-md p-0.5">
              <Image
                src="/images/surya-logo.png"
                alt="Surya Promoters Official Logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-black tracking-tight text-white">
                SURYA PROMOTERS
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#EAB308]">
                {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு · 2010" : "LAND & PROPERTY DEVELOPERS · ESTD. 2010"}
              </span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 16+ Yrs IAF Veteran Seal */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FEF08A] text-xs font-mono font-bold backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#EAB308]" />
              <span>16+ Yrs IAF Veteran Trust</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white shadow-xs transition backdrop-blur-sm cursor-pointer"
              title="Toggle Language"
            >
              <span>{language === "ta" ? "English" : "தமிழ்"}</span>
            </button>

            {/* Direct Discuss Project CTA */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-extrabold uppercase tracking-wider shadow-md transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 fill-[#0A0D12] text-[#0A0D12]" />
              <span className="hidden sm:inline">{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Project"}</span>
            </a>
          </div>

        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-14 py-16 sm:py-20 text-center flex flex-col items-center my-auto">
          
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#FEF08A] font-mono text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#EAB308]" />
            <span>{language === "ta" ? "இராணுவ ஒழுக்கம் · 100% தூய கம்ப்யூட்டர் பட்டா" : "MILITARY INTEGRITY · 100% CLEAR COMPUTER PATTA"}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.12]"
          >
            {language === "ta" ? "உங்கள் நிலம். உங்கள் எதிர்காலம்." : "Your Land. Your Future."}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 font-mono text-base sm:text-xl lg:text-2xl text-[#FEF08A] font-bold tracking-wide max-w-3xl"
          >
            {language === "ta"
              ? "குடியிருப்பு · வணிகம் · இயற்கை பண்ணை நில வாய்ப்புகள்"
              : "Discover Premium Residential, Commercial & Farm Land Opportunities."}
          </motion.p>

          {/* Explanatory subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed"
          >
            {language === "ta"
              ? "மதுரையின் அதிவேக வளர்ச்சி தாழ்வாரங்களில் நேரடி புரோமோட்டர் அணுகல், அளவிடப்பட்ட எல்லைக் கற்கள் மற்றும் வாழ்நாள் சொத்து மதிப்பு."
              : "Direct developer access to verified titles, surveyed boundary stones, and lifetime capital appreciation across Madurai."}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#workflow-section"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>{language === "ta" ? "திட்டங்களை ஆராய்க" : "Explore Projects"}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => setActiveModal("enquiry")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            >
              <Phone className="h-4 w-4 text-[#EAB308]" />
              <span>{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Your Project"}</span>
            </button>
          </motion.div>

        </div>

        {/* Bottom Floating Step Bar */}
        <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md py-3 px-4">
          <div className="max-w-[1760px] mx-auto flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span className="hidden sm:inline">APP-STYLE WORKFLOW: 7 GUIDED STEPS</span>
            <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-x-auto scrollbar-none">
              {["01 Projects", "02 Category", "03 Subcategory", "04 Choose", "05 Details", "06 Resources", "07 Contact"].map((step, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-gray-300 font-semibold whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EAB308]" />
                  <span>{step}</span>
                  {idx < 6 && <span className="text-gray-600">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* 2. APP-STYLE WORKFLOW SECTION (7 INTERACTIVE APPLICATION CARDS) */}
      {/* ========================================================================= */}
      <section
        id="workflow-section"
        className="w-full bg-[#F8FAFC] py-14 sm:py-20 px-4 sm:px-8 lg:px-14 border-t border-[#E2E8F0]"
      >
        <div className="max-w-[1760px] mx-auto space-y-8">
          
          {/* Workflow Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF9C3] border border-[#EAB308]/40 text-[#854D0E] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <LayoutGrid className="h-3.5 w-3.5 text-[#EAB308]" />
                <span>INTERACTIVE PROPERTY WORKFLOW · 7 CONNECTED STEPS</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
                {language === "ta" ? "7 படி வாடிக்கையாளர் நில தேர்வு முறை" : "Select, Explore & Acquire Your Ideal Property"}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#475569] max-w-2xl">
                {language === "ta"
                  ? "கீழ்கண்ட 7 அட்டவணைகளை பயன்படுத்தி உங்கள் விருப்பத்திற்கேற்ப திட்டங்கள், தள வரைபடங்கள் மற்றும் ஆவணங்களை உடனுக்குடன் அணுகலாம்."
                  : "Click through each modern application card below. Each step automatically syncs with your selected category and project."}
              </p>
            </div>

            {/* Live Context Badge */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs text-xs font-mono">
              <span className="text-[#64748B]">Active Project:</span>
              <span className="font-bold text-[#0F172A] bg-[#FEF9C3] text-[#854D0E] px-2.5 py-1 rounded-lg">
                {currentProject.name[language]}
              </span>
            </div>
          </div>


          {/* ----------------------------------------------------------------------- */}
          {/* ROW 1: 4 CARDS (Card 01, Card 02, Card 03, Card 04)                     */}
          {/* ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* WORKFLOW CARD 01 – OUR PROJECTS */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => handleCategorySelect("all")}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all cursor-pointer min-h-[320px]"
            >
              <div>
                {/* Card Top: Step Pill & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 01
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <Building2 className="h-5 w-5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "எங்கள் திட்டங்கள்" : "Our Projects"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "சூர்யா புரமோட்டர்ஸின் அனைத்து திட்டங்களையும் ஒரே பார்வையில் ஆராயுங்கள்."
                    : "Explore all Surya Promoters developments across Madurai."}
                </p>

                {/* Inner Content Preview / Counters */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center justify-between text-xs pb-1.5 border-b border-[#E2E8F0]/70">
                    <span className="text-[#64748B] font-medium">{language === "ta" ? "மொத்த திட்டங்கள்:" : "All Properties:"}</span>
                    <span className="font-mono font-bold text-[#854D0E] bg-white px-2 py-0.5 rounded-md border border-[#E2E8F0] shadow-2xs">9 Sites</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] font-mono font-bold text-[#0F172A]">
                      Residential (2)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] font-mono font-bold text-[#0F172A]">
                      Commercial (5)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] font-mono font-bold text-[#0F172A]">
                      Farm Land (2)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Indicator */}
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                <span>{language === "ta" ? "அனைத்தையும் தேர்வு செய்" : "View All Developments"}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F5F9] group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] transition-colors">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>


            {/* WORKFLOW CARD 02 – SELECT CATEGORY */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[320px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 02
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "பிரிவை தேர்வு செய்" : "Select Category"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "உங்கள் தேவைக்கேற்ற முதன்மை நிலப் பிரிவை தேர்வு செய்யுங்கள்."
                    : "Choose the property category you are interested in."}
                </p>

                {/* 3 Category Options */}
                <div className="mt-4 space-y-2">
                  {[
                    { id: "residential", label: language === "ta" ? "குடியிருப்பு (Residential)" : "Residential", sub: "Plots & Flats" },
                    { id: "commercial", label: language === "ta" ? "வணிகம் (Commercial)" : "Commercial", sub: "Buildings & Land" },
                    { id: "farm", label: language === "ta" ? "விவசாய நிலம் (Farm Land)" : "Farm Land", sub: "Farms & Orchards" },
                  ].map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id as any)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                            : "bg-[#F8FAFC] text-[#1E293B] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                        }`}
                      >
                        <span className="truncate">{cat.label}</span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-[#EAB308]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#64748B]">
                <span className="font-mono text-[11px]">Selected: {selectedCategory.toUpperCase()}</span>
                <ChevronRight className="h-4 w-4 text-[#EAB308]" />
              </div>
            </motion.div>


            {/* WORKFLOW CARD 03 – SELECT SUBCATEGORY */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[320px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 03
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <Layers className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "உட்பிரிவை தேர்வு செய்" : "Select Subcategory"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "தேவையான குறிப்பிட்ட நில வகையைக் கண்டறியவும்."
                    : "Find the exact type of property you are looking for."}
                </p>

                {/* Subcategories (Filtered dynamically) */}
                <div className="mt-4 space-y-1.5">
                  {[
                    { id: "flat", label: language === "ta" ? "அடுக்குமாடி (Flat Projects)" : "Flat Projects", cat: "residential" },
                    { id: "plot", label: language === "ta" ? "மனைப்பிரிவு (Plot Projects)" : "Plot Projects", cat: "residential" },
                    { id: "comm-building", label: language === "ta" ? "வணிக கட்டிடம் (Commercial Buildings)" : "Commercial Buildings", cat: "commercial" },
                    { id: "comm-land", label: language === "ta" ? "வணிக நிலம் (Commercial Land)" : "Commercial Land", cat: "commercial" },
                    { id: "farm-land", label: language === "ta" ? "பண்ணை நிலம் (Farm Land)" : "Farm Land", cat: "farm" },
                  ]
                    .filter((sub) => selectedCategory === "all" || sub.cat === selectedCategory)
                    .map((sub) => {
                      const isSelected = selectedSubcategory === sub.id;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleSubcategorySelect(sub.id)}
                          className={`w-full flex items-center justify-between py-2 px-2.5 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                            isSelected
                              ? "bg-[#FEF9C3] text-[#854D0E] border-[#EAB308] font-bold"
                              : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                          }`}
                        >
                          <span className="truncate">{sub.label}</span>
                          {isSelected ? (
                            <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                          )}
                        </button>
                      );
                    })}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#64748B]">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory("all")}
                  className="text-[11px] font-mono text-[#B45309] hover:underline cursor-pointer"
                >
                  Reset Filter
                </button>
                <ChevronRight className="h-4 w-4 text-[#EAB308]" />
              </div>
            </motion.div>


            {/* WORKFLOW CARD 04 – CHOOSE PROJECT */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[320px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 04
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {language === "ta" ? "திட்டத்தை தேர்வு செய்" : "Choose Project"}
                  </h3>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-[#0F172A]">
                    {filteredProjects.length}
                  </span>
                </div>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "எங்கள் தனிப்பட்ட மனைப்பிரிவுகளைப் பார்த்து தேர்வு செய்யுங்கள்."
                    : "Browse our individual property developments."}
                </p>

                {/* Project Selection Scroll List */}
                <div className="mt-4 max-h-[160px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                  {filteredProjects.map((p) => {
                    const isSelected = selectedProjectId === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => setSelectedProjectId(p.id)}
                        className={`flex items-center gap-2.5 p-2 rounded-xl border transition cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                            : "bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] hover:bg-gray-100"
                        }`}
                      >
                        <div className="relative h-10 w-10 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                          <Image
                            src={p.image}
                            alt={p.name.en}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold truncate">
                            {p.name[language]}
                          </h4>
                          <span className={`block text-[10px] truncate ${isSelected ? "text-gray-300" : "text-[#64748B]"}`}>
                            {p.location[language]}
                          </span>
                        </div>
                        {isSelected && <span className="h-2 w-2 rounded-full bg-[#EAB308] shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                <span className="text-[11px] font-mono text-[#B45309]">Tap to Select</span>
                <ChevronRight className="h-4 w-4 text-[#EAB308]" />
              </div>
            </motion.div>

          </div>


          {/* ----------------------------------------------------------------------- */}
          {/* ROW 2: 3 CARDS (Card 05, Card 06, Card 07)                             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* WORKFLOW CARD 05 – PROJECT DETAILS */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[380px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 05
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "திட்ட விவரங்கள்" : "Project Details"}
                </h3>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  {language === "ta"
                    ? "தேர்வு செய்யப்பட்ட திட்டத்தின் முழுமையான விவரங்களை பார்க்கவும்."
                    : "Explore detailed information about the selected project."}
                </p>

                {/* Selected Project Card Preview */}
                <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
                  <div className="relative aspect-[16/9] w-full bg-gray-200">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.name.en}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono text-[#FEF08A] font-bold uppercase tracking-wider block">
                        {currentProject.subcategoryLabel[language]}
                      </span>
                      <h4 className="font-display text-sm font-extrabold truncate">
                        {currentProject.name[language]}
                      </h4>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-full bg-[#0F172A]/90 text-white font-mono text-[9px] font-bold border border-white/20">
                        {currentProject.statusText[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-2">
                    <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                      {currentProject.overview[language]}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0F172A]">
                      <Check className="h-3.5 w-3.5 text-[#EAB308]" />
                      <span className="truncate">{currentProject.highlights[language][0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="mt-5 flex items-center gap-2.5 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => setActiveModal("details")}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{language === "ta" ? "விவரங்களை பார்க்க" : "View Full Details"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#EAB308]" />
                </button>

                {currentProject.slug && (
                  <Link
                    href={`/projects/${currentProject.slug}`}
                    className="p-2.5 rounded-xl border border-[#E2E8F0] hover:bg-gray-100 text-[#0F172A] transition"
                    title="Open Dedicated Page"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>


            {/* WORKFLOW CARD 06 – EXPLORE RESOURCES */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[380px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 06
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <Images className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "ஆவணங்கள் & படங்கள்" : "Explore Resources"}
                </h3>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  {language === "ta"
                    ? "தேர்வு செய்யப்பட்ட திட்டத்தின் படங்கள், வரைபடங்கள் மற்றும் வழிகாட்டிகளைப் பெறுங்கள்."
                    : "Access everything related to your selected project."}
                </p>

                {/* 3 Clickable Resource Tiles */}
                <div className="mt-4 space-y-2.5">
                  {/* 1. Gallery */}
                  <div
                    onClick={() => {
                      setResourceTab("gallery");
                      setActiveModal("resources");
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EAB308] hover:bg-white transition cursor-pointer group/tile shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#B45309] border border-[#E2E8F0] shadow-xs">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A]">
                          1. {language === "ta" ? "புகைப்படங்கள் & வீடியோக்கள்" : "Gallery & Drone Aerials"}
                        </h4>
                        <span className="text-[10px] text-[#64748B]">
                          {language === "ta" ? "தள படங்கள் & வான்வழி பார்வை" : "HD on-ground & aerial drone media"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309] group-hover/tile:translate-x-1 transition-transform">→</span>
                  </div>

                  {/* 2. Location */}
                  <div
                    onClick={() => {
                      setResourceTab("location");
                      setActiveModal("resources");
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EAB308] hover:bg-white transition cursor-pointer group/tile shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#B45309] border border-[#E2E8F0] shadow-xs">
                        <Navigation className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A]">
                          2. {language === "ta" ? "வரைபடம் & வழிகள்" : "Location Map & Directions"}
                        </h4>
                        <span className="text-[10px] text-[#64748B]">
                          {language === "ta" ? "நேரடி கூகிள் மேப் வழிகள்" : "GPS coordinates & highway distance"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309] group-hover/tile:translate-x-1 transition-transform">→</span>
                  </div>

                  {/* 3. Download */}
                  <div
                    onClick={() => {
                      setResourceTab("download");
                      setActiveModal("resources");
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EAB308] hover:bg-white transition cursor-pointer group/tile shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#B45309] border border-[#E2E8F0] shadow-xs">
                        <Download className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0F172A]">
                          3. {language === "ta" ? "வரைபடம் பதிவிறக்கம்" : "Download Blueprints & PDF"}
                        </h4>
                        <span className="text-[10px] text-[#64748B]">
                          {language === "ta" ? "அரசு சர்வே வரைபடம் & கையேடு" : "Cadastral maps, brochures, layouts"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#B45309] group-hover/tile:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                <span className="text-[11px] font-mono text-[#64748B]">3 Options Available</span>
                <button
                  type="button"
                  onClick={() => setActiveModal("resources")}
                  className="text-xs font-bold text-[#B45309] hover:underline cursor-pointer"
                >
                  Open Resource Viewer
                </button>
              </div>
            </motion.div>


            {/* WORKFLOW CARD 07 – CONTACT & ENQUIRY */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[380px]"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 07
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "தொடர்பு & விசாரணை" : "Contact & Enquiry"}
                </h3>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  {language === "ta"
                    ? "சூர்யா புரமோட்டர்ஸை நேரடியாக தொடர்பு கொள்ளுங்கள்."
                    : "Connect directly with Surya Promoters via Call, WhatsApp or Enquiry."}
                </p>

                {/* Communication 4 Options */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="tel:+917708966452"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F172A] text-[#0F172A] text-xs font-bold transition"
                  >
                    <Phone className="h-4 w-4 text-[#B45309]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20inquiring%20about%20${encodeURIComponent(currentProject.name.en)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EAB308] text-[#0F172A] text-xs font-bold transition"
                  >
                    <MessageCircle className="h-4 w-4 text-[#B45309]" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:suryapromotersmdu@gmail.com"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F172A] text-[#0F172A] text-xs font-bold transition"
                  >
                    <Mail className="h-4 w-4 text-[#B45309]" />
                    <span>Email Us</span>
                  </a>
                  <div
                    onClick={() => {
                      setResourceTab("location");
                      setActiveModal("resources");
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F172A] text-[#0F172A] text-xs font-bold transition cursor-pointer"
                  >
                    <MapPin className="h-4 w-4 text-[#B45309]" />
                    <span>Visit Office</span>
                  </div>
                </div>

                {/* Pre-filled Project Notice */}
                <div className="mt-3.5 p-2.5 rounded-xl bg-[#FEF9C3] border border-[#EAB308]/40 text-[11px] font-mono text-[#854D0E] flex items-center justify-between">
                  <span className="truncate">Selected: {currentProject.name[language]}</span>
                  <span className="font-bold">Ready</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => setActiveModal("enquiry")}
                  className="w-full py-3 px-4 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-extrabold uppercase tracking-wider shadow-md transition hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-[#0A0D12]" />
                  <span>{language === "ta" ? "விசாரணை படிவம் திறக்க" : "Submit Quick Enquiry"}</span>
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. INTERACTIVE MODAL DIALOGS (Details, Resources, Enquiry · Zero Reload) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal !== "none" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal("none")}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Top Header */}
              <div className="p-5 sm:p-6 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-[#EAB308] shadow-sm">
                    {activeModal === "details" && <FileText className="h-5 w-5" />}
                    {activeModal === "resources" && <Images className="h-5 w-5" />}
                    {activeModal === "enquiry" && <MessageCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#B45309] uppercase tracking-wider block">
                      {activeModal === "details" && "STEP 05: COMPLETE PROJECT DATA"}
                      {activeModal === "resources" && `STEP 06: ${resourceTab.toUpperCase()} EXPLORER`}
                      {activeModal === "enquiry" && "STEP 07: DIRECT COMMUNICATION & ENQUIRY"}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-black text-[#0F172A]">
                      {currentProject.name[language]}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal("none")}
                  className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-gray-200 transition cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

                {/* MODAL VIEW 1: FULL PROJECT DETAILS */}
                {activeModal === "details" && (
                  <div className="space-y-6">
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-200 shadow-md">
                      <Image
                        src={currentProject.image}
                        alt={currentProject.name.en}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="font-mono text-xs text-[#FEF08A] font-bold uppercase tracking-wider">
                          {currentProject.categoryLabel[language]} · {currentProject.subcategoryLabel[language]}
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-black mt-0.5">
                          {currentProject.name[language]}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-gray-200 mt-1">
                          <MapPin className="h-3.5 w-3.5 text-[#EAB308]" />
                          <span>{currentProject.location[language]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#64748B]">
                        Project Overview
                      </h4>
                      <p className="text-sm text-[#334155] leading-relaxed">
                        {currentProject.overview[language]}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#64748B]">
                        Key Highlights & Documentation
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentProject.highlights[language].map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]">
                            <Check className="h-4 w-4 text-[#EAB308] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cadastral Blueprint if Available */}
                    {currentProject.blueprint && (
                      <div className="space-y-3 pt-2 border-t border-[#E2E8F0]">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#64748B]">
                            Verified Cadastral Layout Blueprint
                          </h4>
                          <span className="font-mono text-xs text-[#B45309] font-bold">100% Survey Documented</span>
                        </div>
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0A0D12] border border-[#E2E8F0] flex items-center justify-center p-3">
                          <Image
                            src={currentProject.blueprint}
                            alt={`${currentProject.name.en} Blueprint`}
                            fill
                            className="object-contain p-2"
                            sizes="800px"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* MODAL VIEW 2: RESOURCES EXPLORER */}
                {activeModal === "resources" && (
                  <div className="space-y-6">
                    {/* Sub-Tabs */}
                    <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                      <button
                        onClick={() => setResourceTab("gallery")}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          resourceTab === "gallery"
                            ? "bg-[#0F172A] text-white shadow-xs"
                            : "bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                        }`}
                      >
                        <Camera className="h-3.5 w-3.5" />
                        <span>Gallery Photos & Drone</span>
                      </button>
                      <button
                        onClick={() => setResourceTab("location")}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          resourceTab === "location"
                            ? "bg-[#0F172A] text-white shadow-xs"
                            : "bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                        }`}
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>GPS Location & Map</span>
                      </button>
                      <button
                        onClick={() => setResourceTab("download")}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          resourceTab === "download"
                            ? "bg-[#0F172A] text-white shadow-xs"
                            : "bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]"
                        }`}
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Blueprints & Downloads</span>
                      </button>
                    </div>

                    {/* Tab: Gallery */}
                    {resourceTab === "gallery" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 border border-[#E2E8F0]">
                            <Image
                              src={currentProject.image}
                              alt={currentProject.name.en}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 text-white text-[10px] font-mono">
                              On-Ground View
                            </div>
                          </div>
                          {currentProject.blueprint ? (
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A0D12] border border-[#E2E8F0] p-2">
                              <Image
                                src={currentProject.blueprint}
                                alt="Cadastral Plan"
                                fill
                                className="object-contain p-2"
                              />
                              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 text-white text-[10px] font-mono">
                                Measured Layout Drawing
                              </div>
                            </div>
                          ) : (
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 border border-[#E2E8F0]">
                              <Image
                                src="/images/hero/hero-aerial-farmland.jpg"
                                alt="Aerial Horizon"
                                fill
                                className="object-cover"
                              />
                              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 text-white text-[10px] font-mono">
                                Aerial Drone Perspective
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tab: Location */}
                    {resourceTab === "location" && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-[#FEF9C3] border border-[#EAB308]/40 text-xs font-mono text-[#854D0E] space-y-1">
                          <div className="font-bold text-sm">Location Address: {currentProject.location[language]}</div>
                          <div>Fastest highway route & immediate motorable approach verified by revenue records.</div>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#0F172A] text-white text-center space-y-4">
                          <MapPin className="h-10 w-10 text-[#EAB308] mx-auto" />
                          <h4 className="font-display text-lg font-bold">
                            View on Google Maps & Satellite GPS
                          </h4>
                          <p className="text-xs text-gray-300 max-w-md mx-auto">
                            Navigate directly to {currentProject.name[language]} using Google Maps directions.
                          </p>
                          <a
                            href={currentProject.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-display text-xs font-bold uppercase tracking-wider shadow-md transition"
                          >
                            <span>Open Google Maps Directions</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Tab: Download */}
                    {resourceTab === "download" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-[#B45309]" />
                            <div>
                              <h5 className="text-xs font-bold text-[#0F172A]">
                                Official Project Brochure & Price Schedule
                              </h5>
                              <span className="text-[10px] font-mono text-[#64748B]">PDF Format · Instant Digital Pack</span>
                            </div>
                          </div>
                          <a
                            href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20brochure%20for%20${encodeURIComponent(currentProject.name.en)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B]"
                          >
                            <Download className="h-3.5 w-3.5 text-[#EAB308]" />
                            <span>Download PDF</span>
                          </a>
                        </div>

                        {currentProject.blueprint && (
                          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                            <div className="flex items-center gap-3">
                              <Layers className="h-5 w-5 text-[#B45309]" />
                              <div>
                                <h5 className="text-xs font-bold text-[#0F172A]">
                                  Cadastral Layout Blueprint & Survey Demarcation
                                </h5>
                                <span className="text-[10px] font-mono text-[#64748B]">HD Masterplan · JPG/PDF</span>
                              </div>
                            </div>
                            <a
                              href={currentProject.blueprint}
                              download
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B]"
                            >
                              <Download className="h-3.5 w-3.5 text-[#EAB308]" />
                              <span>Download Blueprint</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* MODAL VIEW 3: ENQUIRY & CONTACT */}
                {activeModal === "enquiry" && (
                  <div className="space-y-6">
                    {enquirySent ? (
                      <div className="p-8 rounded-2xl bg-[#FEF9C3] border border-[#EAB308] text-center space-y-3">
                        <CheckCircle2 className="h-12 w-12 text-[#B45309] mx-auto" />
                        <h4 className="font-display text-lg font-bold text-[#854D0E]">
                          {language === "ta" ? "உங்கள் விசாரணை பெறப்பட்டது!" : "Enquiry Received Successfully!"}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#854D0E]">
                          Our senior promoter advisor will contact you within 15 minutes regarding {currentProject.name[language]}.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleEnquirySubmit} className="space-y-4">
                        <div className="p-3.5 rounded-2xl bg-[#FEF9C3] border border-[#EAB308]/40 text-xs text-[#854D0E] font-medium flex items-center justify-between">
                          <span>Selected Development: <strong>{currentProject.name[language]}</strong></span>
                          <span className="font-mono text-[10px] uppercase font-bold">{currentProject.subcategoryLabel[language]}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono font-bold text-[#334155] mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] text-xs sm:text-sm transition outline-hidden"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold text-[#334155] mb-1">
                              Mobile / WhatsApp Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="10-Digit Mobile"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] text-xs sm:text-sm transition outline-hidden"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-[#334155] mb-1">
                            Email (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-11 px-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#EAB308] text-xs sm:text-sm transition outline-hidden"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-[#334155] mb-1">
                            Requirements / Preferred Visit Time
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Specify preferred budget, required cents / square footage, or request an on-site inspection visit..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-3.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:border-[#EAB308] text-xs sm:text-sm transition outline-hidden"
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-between gap-3">
                          <button
                            type="submit"
                            className="flex-1 py-3.5 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition hover:scale-[1.01] cursor-pointer"
                          >
                            Submit Enquiry &amp; Request Pricing
                          </button>

                          <a
                            href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20inquiring%20about%20${encodeURIComponent(currentProject.name.en)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-3.5 px-5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition"
                          >
                            <MessageCircle className="h-4 w-4 text-[#EAB308]" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </form>
                    )}
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>Surya Promoters Madurai · 16+ Yrs IAF Veteran Trust</span>
                <button
                  onClick={() => setActiveModal("none")}
                  className="px-4 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-[#0F172A] font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
