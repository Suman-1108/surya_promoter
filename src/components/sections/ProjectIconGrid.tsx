"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Search,
  Home,
  LayoutGrid,
  Gamepad2,
  Palette,
  Layers,
  MessageCircle,
  Phone,
  MapPin,
  Building2,
  Wheat,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  Star,
  Award,
  Camera,
  Compass,
  Truck,
  Droplets,
  Share2,
  SlidersHorizontal,
  Info,
  Calendar,
  ArrowUpRight,
  ArrowRight,
  Download,
  AppWindow,
  Monitor,
  Check,
  Gift,
  Flame,
  TrendingUp,
  FileText,
  Wrench,
  Mail,
  Clock,
} from "lucide-react";

// Project & App Interfaces
export interface StoreProject {
  id: string;
  slug: string;
  name: string;
  nameTa: string;
  tagline: string;
  taglineTa: string;
  category: "commercial" | "farm" | "residential";
  categoryLabel: string;
  categoryLabelTa: string;
  projectType: "running" | "upcoming" | "completed";
  statusText: string;
  statusTextTa: string;
  badgeLabel: string;
  badgeLabelTa: string;
  badgeColor: string;
  actionLabel: string;
  actionLabelTa: string;
  priceTag: string;
  priceTagTa: string;
  location: string;
  locationTa: string;
  image: string;
  posterImage: string;
  screenshots: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  mapBhoomiUrl?: string;
  googleMapsUrl: string;
  specs: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    labelTa: string;
  }[];
  overview: string;
  overviewTa: string;
}

export interface StoreUtilityApp {
  id: string;
  name: string;
  nameTa: string;
  subtitle: string;
  subtitleTa: string;
  actionText: string;
  actionTextTa: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  actionType: "link" | "external" | "tel" | "whatsapp";
  targetUrl: string;
}

export default function ProjectIconGrid({
  initialNav = "home",
}: {
  initialNav?: "home" | "projects" | "services" | "about" | "gallery" | "3d" | "contact";
}) {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();

  // Navigation State
  const [activeNav, setActiveNav] = useState<"home" | "projects" | "services" | "about" | "gallery" | "3d" | "contact">(initialNav);
  const [projectSubFilter, setProjectSubFilter] = useState<"all" | "running" | "upcoming" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<StoreProject | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  const handleNavChange = (nav: "home" | "projects" | "services" | "about" | "gallery" | "3d" | "contact") => {
    if (nav === "3d") {
      window.open("https://mapbhoomi.com/l/surya-promoters", "_blank");
      return;
    }
    setActiveNav(nav);
    setSearchQuery("");
    if (typeof window !== "undefined") {
      const newPath = nav === "home" ? "/" : `/${nav}`;
      window.history.pushState(null, "", newPath);
    }
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname.replace(/^\//, "") as any;
        if (["projects", "services", "about", "gallery", "contact"].includes(path)) {
          setActiveNav(path);
        } else {
          setActiveNav("home");
        }
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (initialNav) setActiveNav(initialNav);
  }, [initialNav]);

  // Lock body scroll when modal or lightbox is active so background does not scroll
  useEffect(() => {
    if (selectedProject || previewImage) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selectedProject, previewImage]);

  // Pagination for horizontal scroll shelves
  const [featuredShelfScroll, setFeaturedShelfScroll] = useState(0);
  const [trendingProjectsPage, setTrendingProjectsPage] = useState(0);
  const [trendingAppsPage, setTrendingAppsPage] = useState(0);
  const [quickChannelsPage, setQuickChannelsPage] = useState(0);

  // Store Projects Data (The 4 verified real estate developments)
  const storeProjects: StoreProject[] = useMemo(
    () => [
      {
        id: "vaigai-elite",
        slug: "vaigai-elite-commercial-land",
        name: "Vaigai Elite",
        nameTa: "வைகை எலைட்",
        tagline: "Prime Highway Commercial Acreage",
        taglineTa: "நெடுஞ்சாலை வணிக நிலம்",
        category: "commercial",
        categoryLabel: "Commercial Highway Land",
        categoryLabelTa: "வணிக நெடுஞ்சாலை நிலம்",
        projectType: "running",
        statusText: "2026 RUNNING",
        statusTextTa: "2026 நடைபெறுகிறது",
        badgeLabel: "Running 2026",
        badgeLabelTa: "நடைபெறுகிறது",
        badgeColor: "bg-emerald-600 text-white",
        actionLabel: "Enquire Now",
        actionLabelTa: "விபரம் கேட்க",
        priceTag: "Price on Enquiry",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Madurai Outer Ring Road (NH-44)",
        locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44)",
        image: "/images/projects/vaigai/corridor-aerial.jpg",
        posterImage: "/images/projects/vaigai/corridor-aerial.jpg",
        screenshots: [
          "/images/projects/vaigai/corridor-aerial.jpg",
          "/images/projects/vaigai-commercial.jpg",
          "/images/projects/vaigai/water-pool-1.jpg",
          "/images/projects/vaigai/water-pool-2.jpg",
        ],
        gradient: "from-amber-500 via-orange-600 to-amber-700",
        icon: Building2,
        mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Tamil+Nadu",
        specs: [
          { icon: Building2, label: "Commercial Zone", labelTa: "வணிக மண்டலம்" },
          { icon: Truck, label: "NH-44 Frontage", labelTa: "NH-44 முகப்பு" },
          { icon: ShieldCheck, label: "100% Clear Patta", labelTa: "தெளிவான பட்டா" },
          { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
        ],
        overview:
          "High-exposure commercial land parcels situated strategically on the Madurai Outer Ring Road (NH-44). Ideal for heavy logistics parks, fuel stations, retail frontage, healthcare centers, and educational complexes with uninterrupted highway frontage.",
        overviewTa:
          "மதுரை வெளிவட்டச் சாலையில் (NH-44) அமைந்துள்ள முதன்மையான வணிக நிலம். லாஜிஸ்டிக்ஸ், பெட்ரோல் பங்க், சில்லறை வணிகம், மருத்துவமனை மற்றும் கல்வி நிறுவனங்களுக்கு மிகச் சிறந்த இடம்.",
      },
      {
        id: "madurai-farms",
        slug: "madurai-farms-and-fruits",
        name: "Madurai Farms",
        nameTa: "மதுரை ஃபார்ம்ஸ்",
        tagline: "Managed Organic Agro-Acreage",
        taglineTa: "இயற்கை பண்ணை நிலங்கள்",
        category: "farm",
        categoryLabel: "Agro Farm Plots",
        categoryLabelTa: "விவசாயப் பண்ணை நிலம்",
        projectType: "running",
        statusText: "2026 RUNNING",
        statusTextTa: "2026 நடைபெறுகிறது",
        badgeLabel: "Running 2026",
        badgeLabelTa: "நடைபெறுகிறது",
        badgeColor: "bg-emerald-600 text-white",
        actionLabel: "Enquire Now",
        actionLabelTa: "விபரம் கேட்க",
        priceTag: "Price on Enquiry",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Agricultural Belt, Madurai",
        locationTa: "விவசாய மண்டலம், மதுரை",
        image: "/images/projects/madurai-farms/aerial-cottage.jpg",
        posterImage: "/images/projects/madurai-farms/aerial-cottage.jpg",
        screenshots: [
          "/images/projects/madurai-farms/aerial-cottage.jpg",
          "/images/projects/madurai-farms/panoramic-view.jpg",
          "/images/projects/madurai-farms/aerial-grove.jpg",
          "/images/projects/madurai-farms/water-reservoir.jpg",
          "/images/projects/madurai-farms/entrance-gate.jpg",
        ],
        gradient: "from-emerald-500 via-green-600 to-teal-700",
        icon: Wheat,
        mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-acres",
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Tamil+Nadu+Farm+Land",
        specs: [
          { icon: Wheat, label: "Fertile Farmland", labelTa: "செழிப்பான பண்ணை" },
          { icon: Droplets, label: "Sweet Groundwater", labelTa: "சுத்தமான நீர்வளம்" },
          { icon: ShieldCheck, label: "Clear FMB Survey", labelTa: "துல்லிய FMB சர்வே" },
          { icon: Layers, label: "3D Layout Live", labelTa: "3D வரைபடம்" },
        ],
        overview:
          "Managed organic farmland and farm plot acres surrounded by lush greenery in Madurai's fertile agricultural belt. Features sweet groundwater, mature timber and fruit tree plantations, private weekend farmhouse cottage provisions, and crystal-clear boundary demarcations.",
        overviewTa:
          "மதுரையின் வளமான விவசாயப் பகுதியில் அமைந்துள்ள இயற்கை பண்ணை மனைகள். சுத்தமான நிலத்தடி நீர், மரங்கள், வார இறுதி பண்ணை வீடு அமைக்கும் வசதி மற்றும் தெளிவான எல்லைக் கற்களுடன் கூடியது.",
      },
      {
        id: "orange-garden",
        slug: "orange-garden",
        name: "Orange Garden",
        nameTa: "ஆரஞ்ச் கார்டன்",
        tagline: "Gated Orchard & Farm Estate",
        taglineTa: "பழத்தோட்ட எஸ்டேட் மனைகள்",
        category: "farm",
        categoryLabel: "Gated Orchard Estate",
        categoryLabelTa: "பழத்தோட்ட எஸ்டேட்",
        projectType: "upcoming",
        statusText: "UPCOMING 2026",
        statusTextTa: "2026 வரவிருக்கும் திட்டம்",
        badgeLabel: "Upcoming 2026",
        badgeLabelTa: "வரவிருக்கும் திட்டம்",
        badgeColor: "bg-amber-400 text-black font-extrabold",
        actionLabel: "Launching Soon",
        actionLabelTa: "விரைவில் தொடக்கம்",
        priceTag: "Early Bird Booking",
        priceTagTa: "முன்பதிவு சலுகை",
        location: "Scenic Green Belt, Madurai",
        locationTa: "பசுமை மண்டலம், மதுரை",
        image: "/images/projects/orange-garden/hero-orchard.jpg",
        posterImage: "/images/projects/orange-garden/hero-orchard.jpg",
        screenshots: [
          "/images/projects/orange-garden/hero-orchard.jpg",
          "/images/projects/orange-garden/entrance-gate.jpg",
          "/images/projects/orange-garden/citrus-groves.jpg",
          "/images/projects/orange-garden/demarcated-plots.jpg",
          "/images/projects/orange-garden/farmhouse-cottage.jpg",
          "/images/projects/orange-garden/orchard-aerial.jpg",
        ],
        gradient: "from-amber-500 via-orange-500 to-amber-700",
        icon: Sparkles,
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Orchard+Land",
        specs: [
          { icon: Wheat, label: "Harvested Orchards", labelTa: "பழத்தோட்டங்கள்" },
          { icon: Home, label: "Farmhouse Plots", labelTa: "பண்ணை வீடு" },
          { icon: ShieldCheck, label: "Registered Patta", labelTa: "பதிவு செய்யப்பட்ட பட்டா" },
          { icon: Sparkles, label: "Launching Soon", labelTa: "விரைவில் தொடக்கம்" },
        ],
        overview:
          "A signature upcoming gated orchard community offering citrus plantation plots, demarcated farm estates, grand entry portal, drip irrigation systems, and exclusive farmhouse cottage ownership opportunities in Madurai.",
        overviewTa:
          "மதுரையில் அமையவிருக்கும் பிரத்யேக பழத்தோட்ட எஸ்டேட் மனைப்பிரிவு. சொட்டு நீர்ப்பாசனம், பிரம்மாண்ட நுழைவு வளைவு மற்றும் சொகுசு பண்ணை வீடு அமைக்கும் வாய்ப்பு.",
      },
      {
        id: "surya-green-enclave",
        slug: "surya-green-enclave",
        name: "Green Enclave",
        nameTa: "கிரீன் என்கிளேவ்",
        tagline: "DTCP & RERA Approved Township",
        taglineTa: "DTCP & RERA மனைப்பிரிவு",
        category: "residential",
        categoryLabel: "DTCP & RERA Township",
        categoryLabelTa: "DTCP & RERA மனைப்பிரிவு",
        projectType: "completed",
        statusText: "100% COMPLETED",
        statusTextTa: "நிறைவடைந்தது",
        badgeLabel: "100% Delivered",
        badgeLabelTa: "நிறைவடைந்தது",
        badgeColor: "bg-blue-600 text-white",
        actionLabel: "Completed",
        actionLabelTa: "நிறைவடைந்தது",
        priceTag: "Delivered & Sold",
        priceTagTa: "ஒப்படைக்கப்பட்டது",
        location: "Mudukangulam Road, Madurai",
        locationTa: "முதுகுளத்தூர் சாலை, மதுரை",
        image: "/images/projects/surya-green-enclave.jpg",
        posterImage: "/images/projects/surya-green-enclave.jpg",
        screenshots: [
          "/images/projects/surya-green-enclave/road-corridor.jpg",
          "/images/projects/surya-green-enclave/layout-blueprint.jpg",
          "/images/projects/surya-green-enclave.jpg",
        ],
        gradient: "from-blue-600 via-indigo-600 to-sky-700",
        icon: CheckCircle2,
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Residential+Plots",
        specs: [
          { icon: Home, label: "DTCP & RERA Approved", labelTa: "DTCP மனைப்பிரிவு" },
          { icon: Sparkles, label: "30-40ft Bitumen Road", labelTa: "அகலமான தார்ச்சாலை" },
          { icon: ShieldCheck, label: "Individual Patta", labelTa: "தனிநபர் பட்டா" },
          { icon: CheckCircle2, label: "100% Delivered", labelTa: "ஒப்படைக்கப்பட்டது" },
        ],
        overview:
          "A landmark successfully delivered residential gated township layout on Mudukangulam Road, Madurai. Featuring 30-40ft wide tar roads, individual computer patta, secure fencing, streetlights, and immediate home construction readiness.",
        overviewTa:
          "முதுகுளத்தூர் சாலையில் வெற்றிகரமாக முடிக்கப்பட்டு ஒப்படைக்கப்பட்ட குடியிருப்பு மனைப்பிரிவு. 30-40 அடி தார்ச்சாலை, தனிநபர் பட்டா மற்றும் உடனடி வீடு கட்டும் வசதி கொண்டது.",
      },
      {
        id: "highway-logistics",
        slug: "vaigai-elite-commercial-land",
        name: "NH-44 Commercial",
        nameTa: "NH-44 வணிக நிலம்",
        tagline: "Logistics & Warehousing Parcels",
        taglineTa: "லாஜிஸ்டிக்ஸ் & கிடங்கு நிலங்கள்",
        category: "commercial",
        categoryLabel: "Commercial Highway Land",
        categoryLabelTa: "வணிக நெடுஞ்சாலை நிலம்",
        projectType: "running",
        statusText: "2026 RUNNING",
        statusTextTa: "2026 நடைபெறுகிறது",
        badgeLabel: "Heavy Access",
        badgeLabelTa: "நேரடி முகப்பு",
        badgeColor: "bg-emerald-600 text-white",
        actionLabel: "Enquire Now",
        actionLabelTa: "விபரம் கேட்க",
        priceTag: "Price on Request",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Madurai Outer Ring Road (NH-44)",
        locationTa: "மதுரை வெளிவட்டச் சாலை (NH-44)",
        image: "/images/projects/vaigai-commercial.jpg",
        posterImage: "/images/projects/vaigai-commercial.jpg",
        screenshots: ["/images/projects/vaigai-commercial.jpg", "/images/projects/vaigai/corridor-aerial.jpg"],
        gradient: "from-amber-600 to-orange-700",
        icon: Truck,
        mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Tamil+Nadu",
        specs: [
          { icon: Truck, label: "6-Lane Frontage", labelTa: "6-வழிச்சாலை முகப்பு" },
          { icon: Building2, label: "Commercial Zone", labelTa: "வணிக மண்டலம்" },
          { icon: ShieldCheck, label: "Clear Title", labelTa: "தெளிவான ஆவணம்" },
          { icon: Layers, label: "3D Layout", labelTa: "3D வரைபடம்" },
        ],
        overview:
          "High-capacity commercial acreage along NH-44 tailored for logistics hubs, manufacturing, commercial warehousing, and corporate investment.",
        overviewTa:
          "NH-44 நெடுஞ்சாலையில் லாஜிஸ்டிக்ஸ் மற்றும் கிடங்குகள் அமைப்பதற்கான பிரத்யேக வணிக நிலம்.",
      },
      {
        id: "madurai-agro-farmland",
        slug: "madurai-farms-and-fruits",
        name: "Agro Farmsteads",
        nameTa: "பண்ணை தோட்டங்கள்",
        tagline: "Fertile Farmland with Sweet Water",
        taglineTa: "நீர்வளம் மிக்க பண்ணை நிலம்",
        category: "farm",
        categoryLabel: "Agro Farm Plots",
        categoryLabelTa: "விவசாயப் பண்ணை நிலம்",
        projectType: "running",
        statusText: "2026 RUNNING",
        statusTextTa: "2026 நடைபெறுகிறது",
        badgeLabel: "Sweet Water",
        badgeLabelTa: "நல்ல நீர்வளம்",
        badgeColor: "bg-emerald-600 text-white",
        actionLabel: "Enquire Now",
        actionLabelTa: "விபரம் கேட்க",
        priceTag: "Price on Request",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Scenic Green Belt, Madurai",
        locationTa: "பசுமை மண்டலம், மதுரை",
        image: "/images/projects/madurai-farms/aerial-grove.jpg",
        posterImage: "/images/projects/madurai-farms/aerial-grove.jpg",
        screenshots: [
          "/images/projects/madurai-farms/aerial-grove.jpg",
          "/images/projects/madurai-farms/panoramic-view.jpg",
        ],
        gradient: "from-green-600 to-emerald-800",
        icon: Droplets,
        mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-acres",
        googleMapsUrl: "https://maps.google.com/?q=Madurai+Farm+Plots",
        specs: [
          { icon: Droplets, label: "Sweet Groundwater", labelTa: "சுத்தமான நீர்வளம்" },
          { icon: Wheat, label: "Organic Soil", labelTa: "இயற்கை மண்" },
          { icon: ShieldCheck, label: "Clear Patta", labelTa: "தெளிவான பட்டா" },
          { icon: Layers, label: "3D Map", labelTa: "3D வரைபடம்" },
        ],
        overview:
          "Premium farmstead parcels with tested sweet groundwater and fertile red soil, perfect for organic farming and family weekend retreats.",
        overviewTa:
          "இயற்கை விவசாயம் மற்றும் குடும்ப வார இறுதி ஓய்வுக்கு ஏற்ற செழிப்பான நிலம்.",
      },
    ],
    []
  );

  // Store Direct Contact Methods & Services (Replacing "Trending apps")
  const storeUtilityApps: StoreUtilityApp[] = useMemo(
    () => [
      {
        id: "whatsapp",
        name: "WhatsApp Direct",
        nameTa: "வாட்ஸ்அப் நேரடி",
        subtitle: "Instant Price & Layout PDF",
        subtitleTa: "உடனடி விலை & வரைபடம்",
        actionText: "Chat",
        actionTextTa: "அரட்டை",
        badge: "Fast",
        badgeColor: "bg-emerald-500",
        icon: MessageCircle,
        gradient: "from-[#25D366] to-[#128C7E]",
        actionType: "whatsapp",
        targetUrl: "https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots.",
      },
      {
        id: "call",
        name: "Direct Hotline",
        nameTa: "நேரடி அழைப்பு",
        subtitle: "+91 77089 66452",
        subtitleTa: "+91 77089 66452",
        actionText: "Call",
        actionTextTa: "அழைக்க",
        badge: "Verified",
        badgeColor: "bg-blue-600",
        icon: Phone,
        gradient: "from-blue-500 to-indigo-600",
        actionType: "tel",
        targetUrl: "tel:+917708966452",
      },
      {
        id: "mapbhoomi",
        name: "3D Masterplan",
        nameTa: "3D வரைபடம்",
        subtitle: "MapBhoomi Live 3D Views",
        subtitleTa: "நேரடி 3D மாதிரி வரைபடம்",
        actionText: "Open 3D",
        actionTextTa: "3D திறக்க",
        badge: "Live 3D",
        badgeColor: "bg-amber-500 text-black",
        icon: Layers,
        gradient: "from-amber-500 to-yellow-600",
        actionType: "external",
        targetUrl: "https://mapbhoomi.com/l/surya-promoters",
      },
      {
        id: "gallery",
        name: "Site Photos",
        nameTa: "தள புகைப்படங்கள்",
        subtitle: "HD Aerial Drone Media",
        subtitleTa: "ட்ரோன் புகைப்படங்கள்",
        actionText: "Browse",
        actionTextTa: "பார்க்க",
        badge: "HD Media",
        badgeColor: "bg-purple-600",
        icon: Camera,
        gradient: "from-purple-500 to-indigo-600",
        actionType: "link",
        targetUrl: "/gallery",
      },
      {
        id: "location",
        name: "Google Maps",
        nameTa: "கூகுள் வரைபடம்",
        subtitle: "Madurai Office Navigation",
        subtitleTa: "அலுவலக வழிகாட்டி",
        actionText: "Navigate",
        actionTextTa: "வழிகாட்டி",
        badge: "GPS",
        badgeColor: "bg-rose-500",
        icon: MapPin,
        gradient: "from-red-500 to-rose-600",
        actionType: "external",
        targetUrl: "https://maps.google.com/?q=Surya+Promoters+Madurai",
      },
      {
        id: "legal-patta",
        name: "Patta & Legal Hub",
        nameTa: "பட்டா & ஆவணங்கள்",
        subtitle: "IAF Veteran Due Diligence",
        subtitleTa: "100% தெளிவான பட்டா",
        actionText: "Inspect",
        actionTextTa: "ஆராய்",
        badge: "100% Clear",
        badgeColor: "bg-cyan-600",
        icon: ShieldCheck,
        gradient: "from-cyan-600 to-blue-700",
        actionType: "link",
        targetUrl: "/about",
      },
    ],
    []
  );

  // 8 Squircle items for "Verified Projects & Developments >"
  const loveShelfApps = useMemo(
    () => [
      {
        id: "love-orange",
        name: "Orange Garden",
        nameTa: "ஆரஞ்ச் கார்டன்",
        type: "Upcoming Orchard",
        image: "/images/projects/orange-garden/hero-orchard.jpg",
        icon: Sparkles,
        badge: "Upcoming 2026",
        badgeBg: "bg-amber-400 text-black",
        gradient: "from-amber-500 to-yellow-600",
        onClick: () => setSelectedProject(storeProjects[2]),
      },
      {
        id: "love-vaigai",
        name: "Vaigai Elite",
        nameTa: "வைகை எலைட்",
        type: "Commercial Highway",
        image: "/images/projects/vaigai/corridor-aerial.jpg",
        icon: Building2,
        badge: "Running 2026",
        badgeBg: "bg-emerald-600 text-white",
        gradient: "from-amber-500 to-orange-600",
        onClick: () => setSelectedProject(storeProjects[0]),
      },
      {
        id: "love-farms",
        name: "Madurai Farms",
        nameTa: "மதுரை ஃபார்ம்ஸ்",
        type: "Agro Farm Plots",
        image: "/images/projects/madurai-farms/aerial-cottage.jpg",
        icon: Wheat,
        badge: "Running 2026",
        badgeBg: "bg-emerald-600 text-white",
        gradient: "from-emerald-500 to-green-600",
        onClick: () => setSelectedProject(storeProjects[1]),
      },
      {
        id: "love-green",
        name: "Green Enclave",
        nameTa: "கிரீன் என்கிளேவ்",
        type: "DTCP Township",
        image: "/images/projects/surya-green-enclave.jpg",
        icon: CheckCircle2,
        badge: "Completed",
        badgeBg: "bg-blue-600 text-white",
        gradient: "from-blue-600 to-indigo-600",
        onClick: () => setSelectedProject(storeProjects[3]),
      },
      {
        id: "love-3d",
        name: "3D Masterplan",
        nameTa: "3D மாதிரி",
        type: "MapBhoomi Live",
        image: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
        icon: Layers,
        badge: "Live 3D",
        badgeBg: "bg-purple-600 text-white",
        gradient: "from-purple-600 to-indigo-700",
        onClick: () => window.open("https://mapbhoomi.com/l/surya-promoters", "_blank"),
      },
      {
        id: "love-gallery",
        name: "Site Gallery",
        nameTa: "தள படங்கள்",
        type: "HD Aerials",
        image: "/images/gallery/gallery-1.jpg",
        icon: Camera,
        badge: "HD Media",
        badgeBg: "bg-pink-600 text-white",
        gradient: "from-pink-500 to-rose-600",
        onClick: () => router.push("/gallery"),
      },
      {
        id: "love-patta",
        name: "Clear Patta",
        nameTa: "தெளிவான பட்டா",
        type: "IAF Veteran Trust",
        image: "/images/founder/founder.png",
        icon: ShieldCheck,
        badge: "100% Clear",
        badgeBg: "bg-cyan-600 text-white",
        gradient: "from-cyan-600 to-blue-700",
        onClick: () => router.push("/about"),
      },
      {
        id: "love-call",
        name: "Direct Hotline",
        nameTa: "நேரடி அழைப்பு",
        type: "+91 77089 66452",
        image: "/images/surya-logo.png",
        icon: Phone,
        badge: "Verified",
        badgeBg: "bg-green-600 text-white",
        gradient: "from-green-500 to-emerald-600",
        onClick: () => window.open("tel:+917708966452", "_self"),
      },
    ],
    [storeProjects, router]
  );

  // Row of 8 Channels for "Direct Contact & Communication Channels >"
  const quickChannels = useMemo(
    () => [
      {
        id: "qc-whatsapp",
        name: "WhatsApp Direct",
        nameTa: "வாட்ஸ்அப்",
        tag: "Instant Message",
        icon: MessageCircle,
        bg: "bg-[#25D366]",
        url: "https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements.",
      },
      {
        id: "qc-call",
        name: "Direct Call",
        nameTa: "அழைக்க",
        tag: "+91 77089 66452",
        icon: Phone,
        bg: "bg-[#2563EB]",
        url: "tel:+917708966452",
      },
      {
        id: "qc-mapbhoomi",
        name: "MapBhoomi 3D",
        nameTa: "3D வரைபடம்",
        tag: "Interactive Layout",
        icon: Layers,
        bg: "bg-[#D97706]",
        url: "https://mapbhoomi.com/l/surya-promoters",
      },
      {
        id: "qc-maps",
        name: "Google Maps",
        nameTa: "வழிகாட்டி",
        tag: "Madurai Office",
        icon: MapPin,
        bg: "bg-[#EA4335]",
        url: "https://maps.google.com/?q=Surya+Promoters+Madurai",
      },
      {
        id: "qc-email",
        name: "Direct Email",
        nameTa: "மின்னஞ்சல்",
        tag: "Instant Response",
        icon: Mail,
        bg: "bg-[#7C3AED]",
        url: "mailto:suryapromotersmadurai@gmail.com",
      },
      {
        id: "qc-patta",
        name: "Patta Records",
        nameTa: "பட்டா ஆவணம்",
        tag: "Verified Documents",
        icon: ShieldCheck,
        bg: "bg-[#059669]",
        url: "/about",
      },
      {
        id: "qc-gallery",
        name: "HD Media",
        nameTa: "புகைப்படங்கள்",
        tag: "Drone & Aerials",
        icon: Camera,
        bg: "bg-[#DB2777]",
        url: "/gallery",
      },
      {
        id: "qc-services",
        name: "Advisory",
        nameTa: "சேவைகள்",
        tag: "Veteran Advisory",
        icon: Award,
        bg: "bg-[#0284C7]",
        url: "/services",
      },
    ],
    []
  );

  // Filtered projects
  const filteredProjects = useMemo(() => {
    let list = storeProjects;
    if (activeNav === "projects") {
      if (projectSubFilter === "running") list = list.filter((p) => p.projectType === "running");
      else if (projectSubFilter === "upcoming") list = list.filter((p) => p.projectType === "upcoming");
      else if (projectSubFilter === "completed") list = list.filter((p) => p.projectType === "completed");
    } else if (activeNav === "3d") {
      list = list.filter((p) => Boolean(p.mapBhoomiUrl));
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameTa.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.locationTa.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    );
  }, [storeProjects, activeNav, projectSubFilter, searchQuery]);

  // Filtered utility apps
  const filteredUtilityApps = useMemo(() => {
    if (!searchQuery.trim()) return storeUtilityApps;
    const q = searchQuery.toLowerCase().trim();
    return storeUtilityApps.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.nameTa.toLowerCase().includes(q) ||
        app.subtitle.toLowerCase().includes(q) ||
        app.actionText.toLowerCase().includes(q)
    );
  }, [storeUtilityApps, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#F3F3F3] text-[#1E293B] flex flex-col font-sans selection:bg-[#EAB308]/30">
      
      {/* 1. TOP STORE NAVBAR (THE ONE AND ONLY NAVBAR - CLEAN WINDOW TITLEBAR AS SHOWN IN SCREENSHOTS) */}
      <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-2xs">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Left: Surya Promoters Brand Identity & Store Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white shadow-xs p-0.5 transition-transform group-hover:scale-105">
              <Image
                src="/images/surya-logo.png"
                alt="Surya Promoters Logo"
                fill
                priority
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-sm md:text-base font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                SURYA PROMOTERS
              </span>
              <span className="text-[9px] font-mono text-[#64748B] tracking-wider uppercase font-semibold">
                {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு · 2010" : "LAND & PROPERTY DEVELOPERS · ESTD. 2010"}
              </span>
            </div>
          </Link>

          {/* Center: Search Bar (Exact Microsoft Store Pill Search Bar) */}
          <div className="flex-1 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "ta"
                    ? "திட்டங்கள், விவசாய நிலம், வணிக மனைகளைத் தேடுங்கள்..."
                    : "Search projects, farm land, commercial plots, locations..."
                }
                className="w-full h-10 pl-10 pr-9 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0]/70 focus:bg-[#FFFFFF] border border-[#CBD5E1] focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/30 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B] transition-all outline-hidden shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#0F172A] rounded-full hover:bg-gray-200 transition cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Language switch + Veteran Badge + "DISCUSS YOUR PROJECT" / WhatsApp + User Avatar */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Toggle Pill (Tamil / English) */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-white hover:bg-gray-50 text-xs font-mono font-bold text-[#0F172A] shadow-2xs transition cursor-pointer"
              title="Toggle Language"
            >
              <span>{language === "ta" ? "English" : "தமிழ்"}</span>
            </button>

            {/* IAF Veteran Trust Seal */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>16+ Yrs IAF Vet</span>
            </div>

            {/* Solid CTA: Discuss Your Project / WhatsApp */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20discuss%20my%20property%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] text-xs font-extrabold uppercase tracking-wider shadow-xs transition hover:scale-105"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-[#0A0D12] text-[#0A0D12]" />
              <span className="hidden sm:inline">{language === "ta" ? "கலந்தாலோசிக்க" : "Discuss Project"}</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. MAIN STORE FRAME (SIDEBAR + MAIN CONTENT CANVAS) */}
      <div className="flex-1 max-w-[1760px] w-full mx-auto flex">
        
        {/* LEFT SIDEBAR (CLEAN REAL ESTATE STORE SIDEBAR) */}
        <aside className="hidden md:flex flex-col w-20 lg:w-60 shrink-0 bg-[#F3F3F3] border-r border-[#E2E8F0] py-6 px-2 lg:px-3">
          
          {/* Top Section: Navigation Items */}
          <div className="space-y-1">
              
              {/* 1. HOME (Blue squircle icon with active blue indicator bar on left) */}
              <button
                onClick={() => handleNavChange("home")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                  activeNav === "home"
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
              >
                {activeNav === "home" && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  activeNav === "home" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                }`}>
                  <Home className="h-4 w-4" />
                </div>
                <span className="hidden lg:inline">{language === "ta" ? "முகப்பு" : "Home"}</span>
              </button>

              {/* 2. PROJECTS (Apps icon - with Running, Upcoming, Completed sub-filters) */}
              <div className="space-y-1">
                <button
                  onClick={() => {
                    handleNavChange("projects");
                    setProjectSubFilter("all");
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                    activeNav === "projects"
                      ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                  }`}
                >
                  {activeNav === "projects" && (
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                  )}
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                    activeNav === "projects" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                  }`}>
                    <LayoutGrid className="h-4 w-4" />
                  </div>
                  <div className="hidden lg:flex items-center justify-between w-full">
                    <span>{language === "ta" ? "திட்டங்கள்" : "Projects"}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-gray-100 text-[#0F172A]">
                      4
                    </span>
                  </div>
                </button>

                {/* Subcategories (Running 2, Upcoming 1, Completed 1) */}
                {activeNav === "projects" && (
                  <div className="hidden lg:flex flex-col pl-11 pr-2 py-1 space-y-1 text-xs">
                    <button
                      onClick={() => setProjectSubFilter("all")}
                      className={`text-left py-1 px-2 rounded-lg transition ${
                        projectSubFilter === "all" ? "font-bold text-[#0F172A] bg-gray-100" : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      {language === "ta" ? "அனைத்து" : "All Projects"} (4)
                    </button>
                    <button
                      onClick={() => setProjectSubFilter("running")}
                      className={`text-left py-1 px-2 rounded-lg flex items-center justify-between transition ${
                        projectSubFilter === "running" ? "font-bold text-emerald-700 bg-emerald-50" : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>{language === "ta" ? "நடைபெறுபவை" : "Running"}</span>
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-100 text-emerald-800 font-mono">2</span>
                    </button>
                    <button
                      onClick={() => setProjectSubFilter("upcoming")}
                      className={`text-left py-1 px-2 rounded-lg flex items-center justify-between transition ${
                        projectSubFilter === "upcoming" ? "font-bold text-amber-700 bg-amber-50" : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>{language === "ta" ? "வரவிருக்கும்" : "Upcoming"}</span>
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-amber-100 text-amber-800 font-mono">1</span>
                    </button>
                    <button
                      onClick={() => setProjectSubFilter("completed")}
                      className={`text-left py-1 px-2 rounded-lg flex items-center justify-between transition ${
                        projectSubFilter === "completed" ? "font-bold text-blue-700 bg-blue-50" : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>{language === "ta" ? "நிறைவடைந்தவை" : "Completed"}</span>
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-blue-100 text-blue-800 font-mono">1</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 3. SERVICES */}
              <button
                onClick={() => handleNavChange("services")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                  activeNav === "services"
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
              >
                {activeNav === "services" && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  activeNav === "services" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                }`}>
                  <Wrench className="h-4 w-4" />
                </div>
                <span className="hidden lg:inline">{language === "ta" ? "சேவைகள்" : "Services"}</span>
              </button>

              {/* 4. ABOUT US (IAF Veteran Leadership) */}
              <button
                onClick={() => handleNavChange("about")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                  activeNav === "about"
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
              >
                {activeNav === "about" && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  activeNav === "about" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                }`}>
                  <Award className="h-4 w-4" />
                </div>
                <span className="hidden lg:inline">{language === "ta" ? "எங்களைப் பற்றி" : "About Us"}</span>
              </button>

              {/* 5. GALLERY */}
              <button
                onClick={() => handleNavChange("gallery")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                  activeNav === "gallery"
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
              >
                {activeNav === "gallery" && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  activeNav === "gallery" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                }`}>
                  <Camera className="h-4 w-4" />
                </div>
                <span className="hidden lg:inline">{language === "ta" ? "புகைப்படங்கள்" : "Gallery"}</span>
              </button>

              {/* 6. 3D MASTERPLANS */}
              <a
                href="https://mapbhoomi.com/l/surya-promoters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-white/60 transition-all cursor-pointer"
              >
                <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 text-[#EAB308]">
                  <Layers className="h-4 w-4" />
                </div>
                <div className="hidden lg:flex items-center justify-between w-full">
                  <span>{language === "ta" ? "3D வரைபடம்" : "3D Masterplans"}</span>
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded-xs bg-[#EAB308]/20 text-[#854D0E] font-bold">
                    LIVE
                  </span>
                </div>
              </a>

              {/* 7. CONTACT */}
              <button
                onClick={() => handleNavChange("contact")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer relative ${
                  activeNav === "contact"
                    ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
                }`}
              >
                {activeNav === "contact" && (
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#0284C7] rounded-r-full" />
                )}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  activeNav === "contact" ? "bg-[#0284C7] text-white shadow-xs" : "text-[#64748B]"
                }`}>
                  <Phone className="h-4 w-4" />
                </div>
                <span className="hidden lg:inline">{language === "ta" ? "தொடர்புக்கு" : "Contact"}</span>
              </button>

            </div>

        </aside>

        {/* RIGHT: MAIN STORE CANVAS */}
        <main ref={mainRef} className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          
          {/* SEARCH ACTIVE NOTICE */}
          {searchQuery && (
            <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0F172A]">
                <Search className="h-4 w-4 text-[#EAB308]" />
                <span>
                  {language === "ta" ? "தேடல் முடிவுகள்:" : "Showing search results for:"}{" "}
                  <strong className="text-[#B45309]">"{searchQuery}"</strong> ({filteredProjects.length + filteredUtilityApps.length} items found)
                </span>
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-mono font-bold text-red-600 hover:text-red-700 underline cursor-pointer"
              >
                {language === "ta" ? "தேடலை நீக்கு" : "Clear Search"}
              </button>
            </div>
          )}

          {/* HOME VIEW: HERO, SHELVES, PANELS, AND COMMUNICATION CHANNELS */}
          {activeNav === "home" && !searchQuery && (
            <>
          {/* 3. HERO SHOWCASE SECTION (UPCOMING PROJECT ON LEFT, ABOUT US & RUNNING/COMPLETED TILES ON RIGHT!) */}
          {!searchQuery && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              
              {/* Left Large Card: UPCOMING PROJECT: ORANGE GARDEN (As requested by user!) */}
              <div
                onClick={() => setSelectedProject(storeProjects[2])}
                className="lg:col-span-7 xl:col-span-8 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 p-6 sm:p-8 lg:p-10 text-white relative shadow-lg flex flex-col justify-between min-h-[300px] sm:min-h-[340px] cursor-pointer group"
              >
                {/* Background Hero Image */}
                <Image
                  src="/images/projects/orange-garden/hero-orchard.jpg"
                  alt="Orange Garden Upcoming Project"
                  fill
                  priority
                  className="object-cover opacity-35 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />

                {/* Ambient Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

                {/* Big Upcoming Sparkles / Project Emblem on Right */}
                <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none">
                  <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-3xl bg-black/40 backdrop-blur-md flex items-center justify-center p-4 shadow-xl border border-white/20 group-hover:scale-108 transition-transform">
                    <Sparkles className="h-16 w-16 sm:h-20 sm:w-20 text-[#EAB308]" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-lg space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-black font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
                    <Sparkles className="h-3 w-3 text-black" />
                    <span>{language === "ta" ? "2026 வரவிருக்கும் பிரம்மாண்ட திட்டம்" : "2026 UPCOMING PROJECT LAUNCH"}</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                    {language === "ta" ? "ஆரஞ்ச் கார்டன்" : "Orange Garden"}
                  </h1>

                  <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed drop-shadow-xs">
                    {language === "ta"
                      ? "கேட்டட் பழத்தோட்டம் & பண்ணை எஸ்டேட் மனைகள். பிரம்மாண்ட நுழைவு வளைவு, சொட்டு நீர்ப்பாசனம் மற்றும் வார இறுதி பண்ணை வீடு அமைக்கும் வாய்ப்பு."
                      : "Gated Orchard & Farm Estate Plots in Madurai's green belt with grand entrance gate, drip irrigation, and luxury farmhouse provisions."}
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          "https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20Orange%20Garden%20upcoming%20project.%20Please%20share%20details.",
                          "_blank"
                        );
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-[#B45309] hover:bg-amber-50 font-display text-sm font-extrabold shadow-md transition hover:scale-105"
                    >
                      <MessageCircle className="h-4 w-4 fill-[#B45309]" />
                      <span>{language === "ta" ? "முன்பதிவு செய்ய" : "Early Bird Booking"}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(storeProjects[2]);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white border border-white/30 text-xs font-bold backdrop-blur-md transition"
                    >
                      <span>{language === "ta" ? "விவரங்கள்" : "View Details"}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Badge Details at Bottom */}
                <div className="relative z-10 flex items-center gap-3 pt-4 text-xs font-mono text-amber-200">
                  <span>Scenic Green Belt, Madurai</span>
                  <span>·</span>
                  <span>100% Clear Registered Patta</span>
                </div>
              </div>

              {/* Right Side: ABOUT US CARD (TOP) + RUNNING PROJECT & COMPLETED PROJECT (BOTTOM TILES) */}
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-4">
                
                {/* Top Tile: ABOUT US & IAF VETERAN LEADERSHIP (As requested by user!) */}
                <Link
                  href="/about"
                  className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-800 p-5 text-white flex items-center justify-between shadow-md relative overflow-hidden group hover:shadow-lg transition-all"
                >
                  <div className="relative z-10 space-y-1.5 max-w-[70%]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#EAB308]" />
                      <span>{language === "ta" ? "16+ ஆண்டுகள் நம்பிக்கை" : "16+ Yrs Veteran Leadership"}</span>
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold leading-tight">
                      {language === "ta" ? "எங்களைப் பற்றி (About Us)" : "Built On Military Precision"}
                    </h3>
                    <p className="text-[11px] text-blue-100 line-clamp-1">
                      {language === "ta" ? "விமானப்படை ஒழுக்கம் & 100% தெளிவான பட்டா" : "Indian Air Force Veteran Integrity & Clear Patta"}
                    </p>
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white text-blue-800 font-display text-xs font-bold shadow-xs group-hover:bg-blue-50 transition">
                        <span>{language === "ta" ? "அறிய (About Us)" : "Explore About"}</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Founder / IAF Shield Visual on Right */}
                  <div className="relative h-18 w-18 shrink-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-108 transition-transform">
                      <Award className="h-9 w-9 text-[#EAB308]" />
                    </div>
                  </div>
                </Link>

                {/* Bottom 2 Mini-Tiles: RUNNING PROJECT (Vaigai Elite) & COMPLETED PROJECT (Green Enclave) */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Tile 1: RUNNING PROJECT - Vaigai Elite */}
                  <div
                    onClick={() => setSelectedProject(storeProjects[0])}
                    className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
                  >
                    <Image
                      src="/images/projects/vaigai/corridor-aerial.jpg"
                      alt="Vaigai Elite Running Project"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="text-[8px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-emerald-600 text-white flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                        <span>Running 2026</span>
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="font-display text-xs font-bold text-white group-hover:text-[#EAB308] truncate">
                        Vaigai Elite
                      </h4>
                      <span className="text-[9px] text-gray-300 block truncate">NH-44 Commercial</span>
                    </div>
                  </div>

                  {/* Tile 2: COMPLETED PROJECT - Surya Green Enclave */}
                  <div
                    onClick={() => setSelectedProject(storeProjects[3])}
                    className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
                  >
                    <Image
                      src="/images/projects/surya-green-enclave.jpg"
                      alt="Surya Green Enclave Completed Project"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="text-[8px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-blue-600 text-white">
                        100% Completed
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="font-display text-xs font-bold text-white group-hover:text-[#EAB308] truncate">
                        Green Enclave
                      </h4>
                      <span className="text-[9px] text-gray-300 block truncate">DTCP Township</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* 4. SHELF: "Verified Projects & Developments >" */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                <span>{language === "ta" ? "சரிபார்க்கப்பட்ட திட்டங்கள்" : "Verified Projects & Developments"}</span>
                <ChevronRight className="h-4 w-4 text-[#64748B]" />
              </h2>

              <div className="flex items-center gap-1 text-[#64748B]">
                <button
                  onClick={() => setFeaturedShelfScroll((p) => Math.max(0, p - 1))}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setFeaturedShelfScroll((p) => p + 1)}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Row of 8 Squircle Apps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {loveShelfApps.map((item) => {
                const IconComp = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={item.onClick}
                    className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#EAB308] hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="relative aspect-square w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-xs border border-gray-100 bg-gray-100 group-hover:scale-108 transition-transform">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-30 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-7 w-7 rounded-lg bg-black/50 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                          <IconComp className="h-3.5 w-3.5 text-[#EAB308]" />
                        </div>
                      </div>
                    </div>

                    <span className="font-display text-xs font-bold text-[#0F172A] group-hover:text-[#B45309] truncate max-w-full mt-2">
                      {language === "ta" ? item.nameTa : item.name}
                    </span>
                    <span className="text-[10px] text-[#64748B] truncate max-w-full">
                      {item.type}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. THE TWO SIDE-BY-SIDE PANELS (REAL ESTATE PROJECTS ON LEFT, CONTACT METHODS ON RIGHT - REMOVED "FREE" WORD AS REQUESTED!) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* PANEL 1: "Our Land & Property Projects >" (NO "Trending games", NO "Free", NO "Game Pass"!) */}
            <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>{language === "ta" ? "எங்கள் மனைப்பிரிவு திட்டங்கள்" : "Our Land & Property Projects"}</span>
                  <ChevronRight className="h-4 w-4 text-[#64748B]" />
                </h2>

                <div className="flex items-center gap-1 text-[#64748B]">
                  <button
                    onClick={() => setTrendingProjectsPage((p) => Math.max(0, p - 1))}
                    disabled={trendingProjectsPage === 0}
                    className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTrendingProjectsPage((p) => p + 1)}
                    className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 2-Column × 3-Row Grid (Clean Real Estate Status, NO "Free"!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                {filteredProjects.slice(0, 6).map((project) => {
                  const IconComp = project.icon;
                  const isUpcoming = project.projectType === "upcoming";
                  const isRunning = project.projectType === "running";

                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Squircle Project Icon */}
                        <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-gray-200 bg-gray-100 group-hover:scale-105 transition-transform">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-30 mix-blend-multiply`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-7 w-7 rounded-lg bg-black/50 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                              <IconComp className="h-3.5 w-3.5 text-[#EAB308]" />
                            </div>
                          </div>
                        </div>

                        {/* Title & Category */}
                        <div className="min-w-0 flex flex-col">
                          <span className="font-display text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#B45309] truncate">
                            {language === "ta" ? project.nameTa : project.name}
                          </span>
                          <span className="text-[11px] text-[#64748B] truncate mt-0.5">
                            {language === "ta" ? project.categoryLabelTa : project.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-[#94A3B8] truncate">
                            {language === "ta" ? project.locationTa : project.location}
                          </span>
                        </div>
                      </div>

                      {/* Right Tag: Clean Status Pill (REMOVED "FREE" AS REQUESTED!) */}
                      <div className="shrink-0 text-right">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                            isUpcoming
                              ? "bg-amber-100 text-amber-900"
                              : isRunning
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-blue-100 text-blue-900"
                          }`}
                        >
                          {isUpcoming ? "2026 Launch" : isRunning ? "Active" : "Delivered"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* PANEL 2: "Direct Contact & Quick Services >" (NO "Trending apps", NO "Free"!) */}
            <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>{language === "ta" ? "நேரடி தொடர்பு & சேவைகள்" : "Direct Contact & Quick Services"}</span>
                  <ChevronRight className="h-4 w-4 text-[#64748B]" />
                </h2>

                <div className="flex items-center gap-1 text-[#64748B]">
                  <button
                    onClick={() => setTrendingAppsPage((p) => Math.max(0, p - 1))}
                    disabled={trendingAppsPage === 0}
                    className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTrendingAppsPage((p) => p + 1)}
                    className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 2-Column × 3-Row Grid (Clean Action Button, NO "Free"!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                {filteredUtilityApps.slice(0, 6).map((app) => {
                  const IconComp = app.icon;

                  const handleAppClick = () => {
                    if (app.actionType === "link") router.push(app.targetUrl);
                    else window.open(app.targetUrl, app.actionType === "tel" ? "_self" : "_blank");
                  };

                  return (
                    <div
                      key={app.id}
                      onClick={handleAppClick}
                      className="group flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Squircle App Icon */}
                        <div
                          className={`relative aspect-square w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gradient-to-br ${app.gradient} flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform`}
                        >
                          <IconComp className="h-7 w-7 sm:h-8 sm:w-8 text-white drop-shadow-md" />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="min-w-0 flex flex-col">
                          <span className="font-display text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#B45309] truncate">
                            {language === "ta" ? app.nameTa : app.name}
                          </span>
                          <span className="text-[11px] text-[#64748B] truncate mt-0.5">
                            {language === "ta" ? app.subtitleTa : app.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Right Tag: Action Button (REMOVED "FREE" AS REQUESTED!) */}
                      <div className="shrink-0 text-right">
                        <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-lg">
                          {language === "ta" ? app.actionTextTa : app.actionText}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* 6. BOTTOM SHELF: "Direct Communication Channels >" */}
          <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9] mb-4">
              <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                <span>{language === "ta" ? "நேரடி தொடர்பு வழிகள்" : "Direct Communication Channels"}</span>
                <ChevronRight className="h-4 w-4 text-[#64748B]" />
              </h2>

              <div className="flex items-center gap-1 text-[#64748B]">
                <button
                  onClick={() => setQuickChannelsPage((p) => Math.max(0, p - 1))}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setQuickChannelsPage((p) => p + 1)}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Row of 8 Squircle Apps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {quickChannels.map((item) => {
                const IconComp = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.url.startsWith("http") || item.url.startsWith("tel:") || item.url.startsWith("mailto:")) {
                        window.open(item.url, item.url.startsWith("http") ? "_blank" : "_self");
                      } else {
                        handleNavChange(item.url.replace("/", "") as any);
                      }
                    }}
                    className="group flex flex-col items-center text-center p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer"
                  >
                    <div className={`relative aspect-square w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${item.bg} text-white flex items-center justify-center shadow-md group-hover:scale-108 transition-transform border border-white/20`}>
                      <IconComp className="h-8 w-8 text-white drop-shadow-sm" />
                    </div>

                    <span className="font-display text-xs font-bold text-[#0F172A] group-hover:text-[#B45309] truncate max-w-full mt-2.5">
                      {language === "ta" ? item.nameTa : item.name}
                    </span>
                    <span className="text-[10px] text-[#64748B] truncate max-w-full">
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
          </>
          )}

          {/* ========================================================================= */}
          {/* TAB 1: PROJECTS CANVAS VIEW (Active when "Projects" is clicked)          */}
          {/* ========================================================================= */}
          {activeNav === "projects" && !searchQuery && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Header & Sub-filter pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-2xs">
                <div>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    {language === "ta" ? "எங்கள் மனைப்பிரிவு திட்டங்கள்" : "Property Developments & Projects"}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    {language === "ta"
                      ? "100% தெளிவான கணினி பட்டா மற்றும் உடனடி பத்திரப்பதிவுடன் மதுரையின் முதன்மை திட்டங்கள்."
                      : "Madurai's prime residential, commercial, and agricultural projects with 100% Computer Patta."}
                  </p>
                </div>

                {/* Sub-filter tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-2xl self-start sm:self-auto">
                  {(["all", "running", "upcoming", "completed"] as const).map((filter) => {
                    const filterLabels = {
                      all: language === "ta" ? "அனைத்து (4)" : "All (4)",
                      running: language === "ta" ? "நடைபெறுபவை (2)" : "Running (2)",
                      upcoming: language === "ta" ? "வரவிருக்கும் (1)" : "Upcoming (1)",
                      completed: language === "ta" ? "நிறைவடைந்தவை (1)" : "Completed (1)",
                    };
                    return (
                      <button
                        key={filter}
                        onClick={() => setProjectSubFilter(filter)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          projectSubFilter === filter
                            ? "bg-white text-[#0F172A] shadow-xs"
                            : "text-[#64748B] hover:text-[#0F172A]"
                        }`}
                      >
                        {filterLabels[filter]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {storeProjects
                  .filter((p) => {
                    if (projectSubFilter === "all") return true;
                    return p.projectType === projectSubFilter;
                  })
                  .map((project) => {
                    return (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#EAB308] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          {/* Image Banner */}
                          <div className="relative aspect-[16/10] w-full bg-gray-900 overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, 600px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            
                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase text-white border border-white/20">
                                {language === "ta" ? project.categoryLabelTa : project.categoryLabel}
                              </span>
                              <span
                                className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase text-white backdrop-blur-md ${
                                  project.projectType === "running"
                                    ? "bg-emerald-600"
                                    : project.projectType === "upcoming"
                                    ? "bg-amber-500 text-black font-extrabold"
                                    : "bg-blue-600"
                                }`}
                              >
                                {language === "ta" ? project.statusTextTa : project.statusText}
                              </span>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="font-display text-2xl font-extrabold text-white group-hover:text-[#EAB308] transition-colors">
                                {language === "ta" ? project.nameTa : project.name}
                              </h3>
                              <p className="text-xs text-amber-200 font-mono mt-0.5">
                                {language === "ta" ? project.locationTa : project.location}
                              </p>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="p-6 space-y-4">
                            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                              {language === "ta" ? project.overviewTa : project.overview}
                            </p>

                            <div className="grid grid-cols-2 gap-2">
                              {project.specs.slice(0, 4).map((spec, i) => {
                                const SpecIcon = spec.icon;
                                return (
                                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 text-[11px] font-mono text-[#334155]">
                                    <SpecIcon className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                                    <span className="truncate">{language === "ta" ? spec.labelTa : spec.label}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Actions Footer */}
                        <div className="p-6 pt-0 flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="flex-1 py-2.5 rounded-xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold transition text-center"
                          >
                            {language === "ta" ? "விவரங்கள் பார்க்க" : "View Details"}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                `https://wa.me/917708966452?text=${encodeURIComponent(
                                  `Hello Surya Promoters, please share price and details for ${project.name}.`
                                )}`,
                                "_blank"
                              );
                            }}
                            className="flex-1 py-2.5 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-black text-xs font-extrabold uppercase transition text-center"
                          >
                            {language === "ta" ? "விலை கேட்க" : "WhatsApp Price"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: SERVICES CANVAS VIEW (Matches user screenshot exactly!)            */}
          {/* ========================================================================= */}
          {activeNav === "services" && !searchQuery && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Heading, Metrics, Social Proof */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#B45309]">
                      {language === "ta" ? "எங்கள் சேவைகள்" : "OUR CORE EXPERTISE"}
                    </span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
                    <span>{language === "ta" ? "முழுமையான" : "Comprehensive"} </span>
                    <span className="text-[#64748B] block mt-1">
                      {language === "ta" ? "ரியல் எஸ்டேட் தீர்வுகள்" : "Real Estate Solutions"}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {language === "ta"
                      ? "100% சரிபார்க்கப்பட்ட நிலங்கள், தெளிவான பட்டா ஆவணங்கள் மற்றும் மதுரையின் மிக வேகமாக வளரும் பகுதிகளில் வாழ்நாள் மதிப்பு உயர்வுடன் கூடிய சேவைகள்."
                      : "Directly connecting you to 100% verified land parcels, clear legal documentation, and lifetime appreciation across Madurai's fastest-growing corridors."}
                  </p>

                  {/* Overlapping Avatars Cluster */}
                  <div className="pt-2 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs bg-gray-200">
                        <Image src="/images/founder/founder.png" alt="Founder Manickam" fill className="object-cover" sizes="36px" />
                      </div>
                      <div className="h-9 w-9 rounded-full bg-emerald-600 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        IAF
                      </div>
                      <div className="h-9 w-9 rounded-full bg-[#0284C7] border-2 border-white text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        RERA
                      </div>
                      <div className="h-9 w-9 rounded-full bg-amber-500 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        4.9★
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {language === "ta" ? "1000+ குடும்பங்கள் நம்பிய நிறுவனம்" : "1000+ Families Trusted across Tamil Nadu"}
                    </span>
                  </div>

                  {/* 3 Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    <div>
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">100%</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                        {language === "ta" ? "தெளிவான பட்டா" : "CLEAR TITLES"}
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">16+ Yrs</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                        {language === "ta" ? "அனுபவம்" : "EXPERIENCE"}
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">4.9 ★</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                        {language === "ta" ? "நம்பிக்கை ரேட்டிங்" : "TRUST RATING"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: 4 Service Cards */}
                <div className="lg:col-span-7 space-y-4">
                  {[
                    {
                      icon: Home,
                      highlight: language === "ta" ? "தேர்ந்தெடுங்கள்" : "Explore",
                      title: language === "ta" ? "சிறந்த குடியிருப்பு மனைகள்" : "great residential layouts",
                      desc: language === "ta"
                        ? "DTCP மற்றும் RERA அனுமதி, அகலமான தார்ச்சாலைகள், நல்ல குடிநீர் மற்றும் உடனடி பட்டாவுடன் கூடிய வீட்டு மனைகள்."
                        : "DTCP & RERA approved villa plots with wide bitumen roads, sweet groundwater, and immediate individual patta.",
                      wa: "Hello Surya Promoters, I am interested in exploring your residential plots.",
                    },
                    {
                      icon: Building2,
                      highlight: language === "ta" ? "முதலீடு செய்யுங்கள்" : "Find highly",
                      title: language === "ta" ? "மதிப்பிடப்பட்ட வணிகப் பாதைகள்" : "rated commercial corridors",
                      desc: language === "ta"
                        ? "NH-44 மற்றும் மதுரை ரிங் ரோட்டில் குடோன்கள், மருத்துவமனைகள் மற்றும் நிறுவனங்களுக்கான முக்கிய இடங்கள்."
                        : "High-exposure parcels along NH-44 and Madurai Ring Road tailored for warehouses, godowns, and hospitals.",
                      wa: "Hello Surya Promoters, I am interested in commercial land and highway corridors.",
                    },
                    {
                      icon: Wheat,
                      highlight: language === "ta" ? "கண்டறியுங்கள்" : "Discover",
                      title: language === "ta" ? "செழிப்பான விவசாயப் பண்ணைகள்" : "fertile agricultural farms",
                      desc: language === "ta"
                        ? "செழிப்பான மண்வளம், வற்றாத நீர்வளம் மற்றும் பழ மரங்களுடன் அமைதியான வார இறுதி பண்ணை மனைகள்."
                        : "Rich soils, perennial water tables, and pre-planted fruit groves for tranquil weekend farmhouse retreats.",
                      wa: "Hello Surya Promoters, I would like information on agricultural farm plots.",
                    },
                    {
                      icon: ShieldCheck,
                      highlight: language === "ta" ? "பெறுங்கள்" : "Receive",
                      title: language === "ta" ? "நிபுணத்துவ சட்ட ஆலோசனை" : "expert legal title advisory",
                      desc: language === "ta"
                        ? "30 ஆண்டு வில்லங்க சரிபார்ப்பு, பட்டா ஆவண ஆய்வு மற்றும் இந்திய விமானப்படை ஒழுக்கத்துடன் கூடிய வழிகாட்டுதல்."
                        : "Rigorous 30-year encumbrance scrutiny, revenue survey vetting, and complete buyer protection by IAF veterans.",
                      wa: "Hello Surya Promoters, I need legal title and documentation advisory for land.",
                    },
                  ].map((item, idx) => {
                    const IconC = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => window.open(`https://wa.me/917708966452?text=${encodeURIComponent(item.wa)}`, "_blank")}
                        className="group p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#EAB308] hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 group-hover:scale-105 group-hover:bg-[#EAB308] group-hover:text-black transition-all">
                            <IconC className="h-6 w-6" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                              <span className="font-extrabold">{item.highlight}</span> {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="h-10 w-10 rounded-full border border-gray-200 group-hover:border-[#EAB308] group-hover:bg-[#EAB308] flex items-center justify-center shrink-0 text-[#64748B] group-hover:text-black transition-all">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: ABOUT CANVAS VIEW (IAF Veteran Heritage & Pillars)                 */}
          {/* ========================================================================= */}
          {activeNav === "about" && !searchQuery && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Hero Founder Card */}
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30">
                      <ShieldCheck className="h-4 w-4" />
                      <span>INDIAN AIR FORCE VETERAN LEADERSHIP</span>
                    </div>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                      {language === "ta" ? "விமானப்படை ஒழுக்கம் & 16+ ஆண்டுகள் அசைக்க முடியாத நம்பிக்கை" : "Built On Military Discipline, Honesty & Absolute Patta Integrity"}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                      {language === "ta"
                        ? "சூர்யா புரமோட்டர்ஸ் 2010 ஆம் ஆண்டு இந்திய விமானப்படை ஓய்வுபெற்ற வீரர் திரு. மாணிக்கம் நடராஜன் அவர்களால் நிறுவப்பட்டது. மதுரை மற்றும் தென் தமிழகத்தில் 100% கணினி பட்டா, உடனடி பத்திரப்பதிவு மற்றும் வாடிக்கையாளர் திருப்தியுடன் நில மேம்பாடு செய்து வருகிறோம்."
                        : "Founded in 2010 by Indian Air Force Veteran Mr. Manickam Natarajan. We bring military standard rigor, zero dispute land titles, transparent revenue documentation, and generational growth to land buyers in Madurai."}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-amber-400">
                      <span>✓ Estd. 2010</span>
                      <span>✓ 100% Clear Computer Patta</span>
                      <span>✓ 1000+ Happy Families</span>
                      <span>✓ Zero Legal Disputes</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-[#EAB308]/60 shadow-2xl bg-gray-800">
                      <Image src="/images/founder/founder.png" alt="Founder Manickam Natarajan" fill className="object-cover object-top" sizes="224px" />
                      <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/80 backdrop-blur-xs text-center">
                        <span className="font-display text-xs font-bold text-white block">Mr. Manickam Natarajan</span>
                        <span className="text-[10px] font-mono text-amber-300">IAF Veteran · Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: language === "ta" ? "விமானப்படை ஒழுக்கம்" : "Military Precision",
                    desc: language === "ta" ? "ஒவ்வொரு எல்லையும் துல்லியமான ஜிபிஎஸ் அளவீடுடன் அமைக்கப்படுகிறது." : "Exact boundary markings, surveyor vetted perimeters, and honest square footage.",
                    icon: ShieldCheck,
                  },
                  {
                    title: language === "ta" ? "100% கணினி பட்டா" : "100% Clear Computer Patta",
                    desc: language === "ta" ? "30 ஆண்டுகால வில்லங்க சான்று மற்றும் வருவாய்த்துறை சரிபார்ப்பு." : "Flawless 30-year encumbrance search and immediate individual patta transfer.",
                    icon: Award,
                  },
                  {
                    title: language === "ta" ? "முக்கிய வளர்ச்சி வழித்தடம்" : "Strategic Corridors",
                    desc: language === "ta" ? "NH-44 மற்றும் மதுரை ரிங் ரோடு போன்ற அதிவேக வளர்ச்சி பகுதிகளில் நிலங்கள்." : "Prime connectivity along Madurai Ring Road and industrial growth belts.",
                    icon: Compass,
                  },
                  {
                    title: language === "ta" ? "வாழ்க்கை முழுமைக்கும் உறவு" : "Generational Trust",
                    desc: language === "ta" ? "விற்பனைக்கு பிறகும் மனை பராமரிப்பு மற்றும் வழிகாட்டுதல் உதவி." : "Post-purchase layout management, security fencing, and resale guidance.",
                    icon: CheckCircle2,
                  },
                ].map((pillar, i) => {
                  const IconP = pillar.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs space-y-2">
                      <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                        <IconP className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-[#0F172A]">{pillar.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: GALLERY CANVAS VIEW (Site Photos with Lightbox Modal)              */}
          {/* ========================================================================= */}
          {activeNav === "gallery" && !searchQuery && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-2xs flex items-center justify-between">
                <div>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    {language === "ta" ? "களப் புகைப்படங்கள் & ட்ரோன் காட்சிகள்" : "On-Site Photography & Drone Media"}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    {language === "ta"
                      ? "எங்கள் நேரடி மனைப்பிரிவு வளர்ச்சி, சாலைகள் மற்றும் எல்லைக் கற்களின் உண்மையான படங்கள்."
                      : "Authentic on-ground photos of road corridors, boundary demarcation, and orchard developments."}
                  </p>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold">
                  6 Verified Locations
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: "/images/projects/orange-garden/hero-orchard.jpg", title: "Orange Garden Orchard", location: "Madurai Green Belt" },
                  { src: "/images/projects/vaigai/corridor-aerial.jpg", title: "Vaigai Elite Highway View", location: "NH-44 Outer Ring Road" },
                  { src: "/images/projects/madurai-farms/aerial-grove.jpg", title: "Madurai Farms Agro Land", location: "Agricultural Belt" },
                  { src: "/images/projects/surya-green-enclave.jpg", title: "Green Enclave Township", location: "DTCP Residential" },
                  { src: "/images/projects/orange-garden/entrance-gate.jpg", title: "Orange Garden Grand Arch", location: "Upcoming Orchard" },
                  { src: "/images/projects/madurai-farms/panoramic-view.jpg", title: "Madurai Farms Countryside Panorama", location: "Agro Farmland" },
                ].map((photo, i) => (
                  <div
                    key={i}
                    onClick={() => setPreviewImage(photo.src)}
                    className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-900 border border-gray-200 shadow-xs cursor-pointer hover:shadow-xl transition-all"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-display text-sm font-bold group-hover:text-amber-400 transition-colors">{photo.title}</h3>
                      <span className="text-[11px] font-mono text-gray-300 block">{photo.location}</span>
                    </div>
                    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: CONTACT CANVAS VIEW (Direct Calling, WhatsApp, Office Maps)        */}
          {/* ========================================================================= */}
          {activeNav === "contact" && !searchQuery && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-2xs">
                <div className="max-w-2xl space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono text-xs font-bold">
                    <Phone className="h-3.5 w-3.5 text-emerald-600" />
                    <span>DIRECT OFFICE ASSISTANCE</span>
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                    {language === "ta" ? "எங்களை நேரடியாக தொடர்பு கொள்ள" : "Connect With Our Madurai Office"}
                  </h1>
                  <p className="text-sm text-[#64748B]">
                    {language === "ta"
                      ? "மனைப்பிரிவு விலைகள், மனை வரைபடங்கள் மற்றும் தளப் பார்வைக்கு எப்போது வேண்டுமானாலும் அழைக்கவும்."
                      : "Call our direct hotline or WhatsApp us for instant layout PDFs, pricing, and free guided site visits."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                  <a
                    href="tel:+917708966452"
                    className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-blue-500 hover:shadow-md transition-all text-center space-y-3 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#64748B] font-bold">Official Hotline</span>
                      <div className="font-display text-lg font-bold text-[#0F172A] mt-0.5">+91 77089 66452</div>
                    </div>
                    <span className="inline-block text-xs font-bold text-blue-600">Click to Call Now →</span>
                  </a>

                  <a
                    href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20know%20about%20your%20properties."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-emerald-500 hover:shadow-md transition-all text-center space-y-3 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#64748B] font-bold">WhatsApp Direct</span>
                      <div className="font-display text-lg font-bold text-[#0F172A] mt-0.5">+91 77089 66452</div>
                    </div>
                    <span className="inline-block text-xs font-bold text-emerald-600">Start Instant Chat →</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Surya+Promoters+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-amber-500 hover:shadow-md transition-all text-center space-y-3 group"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#64748B] font-bold">Office Location</span>
                      <div className="font-display text-sm font-bold text-[#0F172A] mt-0.5">Vandiyur / Ring Road, Madurai</div>
                    </div>
                    <span className="inline-block text-xs font-bold text-amber-600">Open in Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 7. INTEGRATED MICROSOFT STORE STYLE FOOTER */}
          <footer className="pt-8 pb-4 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Brand Col */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-7 w-7 rounded-full overflow-hidden border border-[#EAB308]">
                    <Image src="/images/surya-logo.png" alt="Surya Promoters" fill sizes="28px" className="object-contain" />
                  </div>
                  <span className="font-display text-sm font-extrabold text-[#0F172A]">
                    Surya Promoters
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Established in 2010 by Mr. Manickam Natarajan (Indian Air Force Veteran). Providing 100% clear computer patta, transparent land banking, and managed developments in Madurai.
                </p>
              </div>

              {/* Projects Col */}
              <div className="space-y-2">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  {language === "ta" ? "திட்டங்கள்" : "Projects"}
                </span>
                <ul className="space-y-1 text-[11px]">
                  <li><Link href="/projects/orange-garden" className="text-amber-700 font-bold hover:underline">Orange Garden (Upcoming 2026)</Link></li>
                  <li><Link href="/projects/vaigai-elite-commercial-land" className="hover:text-[#0F172A]">Vaigai Elite (NH-44 Running)</Link></li>
                  <li><Link href="/projects/madurai-farms-and-fruits" className="hover:text-[#0F172A]">Madurai Farms & Fruits (Running)</Link></li>
                  <li><Link href="/projects/surya-green-enclave" className="hover:text-[#0F172A]">Surya Green Enclave (Delivered)</Link></li>
                </ul>
              </div>

              {/* Services & Quick Links */}
              <div className="space-y-2">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  {language === "ta" ? "சேவைகள் & இணைப்புகள்" : "Services & Links"}
                </span>
                <ul className="space-y-1 text-[11px]">
                  <li><Link href="/services" className="hover:text-[#0F172A]">Commercial Land Advisory</Link></li>
                  <li><Link href="/services" className="hover:text-[#0F172A]">Organic Agro Farmland</Link></li>
                  <li><Link href="/about" className="hover:text-[#0F172A]">IAF Veteran Leadership</Link></li>
                  <li><Link href="/gallery" className="hover:text-[#0F172A]">Site Photo Gallery</Link></li>
                  <li><a href="https://mapbhoomi.com/l/surya-promoters" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F172A]">MapBhoomi 3D Layout</a></li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  {language === "ta" ? "தொடர்பு விபரம்" : "Contact & Support"}
                </span>
                <p className="text-[11px] leading-relaxed">
                  Madurai, Tamil Nadu, India<br />
                  Hotline: +91 77089 66452<br />
                  Email: suryapromotersmadurai@gmail.com
                </p>
                <div className="pt-1">
                  <a
                    href="https://wa.me/917708966452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-bold"
                  >
                    <MessageCircle className="h-3 w-3 fill-white" />
                    <span>WhatsApp Help</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Copyright & Disclaimer */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#94A3B8]">
              <span>© 2026 Surya Promoters. All Rights Reserved.</span>
              <span className="font-mono">100% Clear Title & Computer Patta Guarantee</span>
            </div>
          </footer>

        </main>

      </div>

      {/* 9. LIGHTBOX IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
          onWheel={(e) => e.stopPropagation()}
          data-lenis-prevent
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-5 right-5 z-50 h-10 w-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={previewImage} alt="Preview" fill className="object-contain" sizes="1200px" />
          </div>
        </div>
      )}

      {/* 8. STORE APP PRODUCT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          onWheel={(e) => e.stopPropagation()}
          data-lenis-prevent
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl bg-white border border-gray-200 shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col"
          >
            {/* Top Close Button (pinned on top right) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition cursor-pointer shadow-lg"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Scrollable Modal Content (Inner container with clean inset scrollbar) */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
            >

            {/* Modal Image Banner */}
            <div className="relative aspect-[16/9] w-full bg-gray-900 overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Status and Category Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  {language === "ta" ? selectedProject.categoryLabelTa : selectedProject.categoryLabel}
                </span>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md ${
                    selectedProject.projectType === "running"
                      ? "bg-emerald-600/95"
                      : selectedProject.projectType === "upcoming"
                      ? "bg-amber-500/95 text-black font-extrabold"
                      : "bg-blue-600/95"
                  }`}
                >
                  {language === "ta" ? selectedProject.statusTextTa : selectedProject.statusText}
                </span>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Product Header */}
              <div className="flex items-start gap-4">
                <div className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-md border border-gray-200 bg-gray-100">
                  <Image
                    src={selectedProject.posterImage}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${selectedProject.gradient} opacity-30 mix-blend-multiply`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                    {language === "ta" ? selectedProject.nameTa : selectedProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#B45309] mt-0.5">
                    {language === "ta" ? selectedProject.taglineTa : selectedProject.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] mt-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                    <span>{language === "ta" ? selectedProject.locationTa : selectedProject.location}</span>
                  </div>

                  {/* Rating / Veteran Trust Seal */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A]">5.0</span>
                    <span className="text-[11px] text-[#64748B]">· 100% Clear Title Patta</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-[#F1F5F9]">
                <a
                  href={`https://wa.me/917708966452?text=${encodeURIComponent(
                    `Hello Surya Promoters, please share price, layout plan and details for ${selectedProject.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 font-display text-sm font-bold uppercase tracking-wider shadow-md transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>
                    {language === "ta"
                      ? "வாட்ஸ்அப்பில் விலை விவரம் கேட்க"
                      : "Enquire on WhatsApp (Instant Price & PDF)"}
                  </span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+917708966452"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-[#0F172A] py-2.5 text-xs font-bold uppercase tracking-wider transition"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>{language === "ta" ? "நேரடி அழைப்பு" : "Direct Call"}</span>
                  </a>

                  {selectedProject.mapBhoomiUrl && (
                    <a
                      href={selectedProject.mapBhoomiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAB308]/60 bg-[#0F172A] hover:bg-black text-[#EAB308] py-2.5 text-xs font-bold uppercase tracking-wider transition"
                    >
                      <Layers className="h-4 w-4 text-[#EAB308]" />
                      <span>{language === "ta" ? "3D வரைபடம்" : "3D Masterplan"}</span>
                    </a>
                  )}

                  <button
                    onClick={() => router.push(`/projects/${selectedProject.slug}`)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0A0D12] py-2.5 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                  >
                    <span>{language === "ta" ? "முழு பக்கம்" : "Full Page"}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Property Specification Grid */}
              <div className="space-y-3 pt-2 border-t border-[#F1F5F9]">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {language === "ta" ? "முக்கிய அம்சங்கள்" : "Key Specifications"}
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {selectedProject.specs.map((spec, i) => {
                    const SpecIcon = spec.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <SpecIcon className="h-4 w-4 text-[#EAB308] shrink-0" />
                        <span className="font-mono text-xs text-[#1E293B] truncate">
                          {language === "ta" ? spec.labelTa : spec.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description Overview */}
              <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {language === "ta" ? "திட்ட விளக்கம்" : "Project Overview"}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {language === "ta" ? selectedProject.overviewTa : selectedProject.overview}
                </p>
              </div>

            </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
