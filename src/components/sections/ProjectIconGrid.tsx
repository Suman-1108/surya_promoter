"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Search,
  Home,
  Grid,
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
  Download,
  AppWindow,
  Monitor,
  Check,
  Flame,
  TrendingUp,
  Mail,
  Navigation,
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
  badgeLabel?: string;
  badgeColor?: string;
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
  tag: string;
  tagTa: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  actionType: "link" | "external" | "tel" | "whatsapp";
  targetUrl: string;
}

export default function ProjectIconGrid() {
  const router = useRouter();
  const { language } = useLanguage();

  // Navigation State
  const [activeNav, setActiveNav] = useState<"home" | "running" | "upcoming" | "completed" | "3d" | "gallery">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<StoreProject | null>(null);

  // Pagination for panels
  const [trendingProjectsPage, setTrendingProjectsPage] = useState(0);
  const [trendingAppsPage, setTrendingAppsPage] = useState(0);
  const [appsLovePage, setAppsLovePage] = useState(0);

  // Listen to search events from Navbar
  useEffect(() => {
    const handleSearch = (e: any) => {
      setSearchQuery(e.detail || "");
    };
    if (typeof window !== "undefined") {
      window.addEventListener("store-search", handleSearch);
      return () => window.removeEventListener("store-search", handleSearch);
    }
  }, []);

  // Store Projects
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
        badgeLabel: "Clear Patta",
        badgeColor: "bg-emerald-600",
        actionLabel: "Free Consult",
        actionLabelTa: "இலவச ஆலோசனை",
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
        badgeLabel: "FMB Survey",
        badgeColor: "bg-emerald-600",
        actionLabel: "Free Consult",
        actionLabelTa: "இலவச ஆலோசனை",
        priceTag: "Price on Enquiry",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Agricultural Belt, Madurai",
        locationTa: "விவசாய மண்டலம், மதுரை",
        image: "/images/projects/madurai-farms/aerial-cottage.jpg",
        posterImage: "/images/projects/madurai-farms/aerial-cottage.jpg",
        screenshots: [
          "/images/projects/madurai-farms/aerial-cottage.jpg",
          "/images/projects/madurai-farms/aerial-groves.jpg",
          "/images/projects/madurai-farms/entrance-gate.jpg",
          "/images/projects/madurai-farms/panoramic-acres.jpg",
          "/images/projects/madurai-farms/water-reservoir.jpg",
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
        badgeLabel: "Upcoming Launch",
        badgeColor: "bg-amber-500 text-black",
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
        badgeColor: "bg-blue-600",
        actionLabel: "Completed",
        actionLabelTa: "நிறைவடைந்தது",
        priceTag: "Sold Out",
        priceTagTa: "விற்கப்பட்டது",
        location: "Mudukangulam Road, Madurai",
        locationTa: "முதுகுளத்தூர் சாலை, மதுரை",
        image: "/images/projects/surya-green-enclave/road-corridor.jpg",
        posterImage: "/images/projects/surya-green-enclave/road-corridor.jpg",
        screenshots: [
          "/images/projects/surya-green-enclave/road-corridor.jpg",
          "/images/projects/surya-green-enclave/layout-overview.jpg",
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
        badgeLabel: "Heavy Vehicle Access",
        badgeColor: "bg-emerald-600",
        actionLabel: "Enquire",
        actionLabelTa: "விபரம் பெற",
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
        badgeColor: "bg-emerald-600",
        actionLabel: "Enquire",
        actionLabelTa: "விபரம் பெற",
        priceTag: "Price on Request",
        priceTagTa: "விலை விபரம் கேட்க",
        location: "Scenic Green Belt, Madurai",
        locationTa: "பசுமை மண்டலம், மதுரை",
        image: "/images/projects/madurai-farms/aerial-groves.jpg",
        posterImage: "/images/projects/madurai-farms/aerial-groves.jpg",
        screenshots: ["/images/projects/madurai-farms/aerial-groves.jpg"],
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

  // Store Utility Apps (Matches the "Trending apps >" panel in Microsoft Store)
  const storeUtilityApps: StoreUtilityApp[] = useMemo(
    () => [
      {
        id: "whatsapp",
        name: "WhatsApp Chat",
        nameTa: "வாட்ஸ்அப் அரட்டை",
        subtitle: "Instant Price & Layout PDF",
        subtitleTa: "உடனடி விலை & வரைபடம்",
        tag: "Chat",
        tagTa: "தொடர்பு",
        badge: "Fast",
        badgeColor: "bg-emerald-500",
        icon: MessageCircle,
        gradient: "from-[#25D366] to-[#128C7E]",
        actionType: "whatsapp",
        targetUrl: "https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots.",
      },
      {
        id: "call",
        name: "Direct Call",
        nameTa: "நேரடி அழைப்பு",
        subtitle: "+91 77089 66452",
        subtitleTa: "+91 77089 66452",
        tag: "Call",
        tagTa: "அழைக்க",
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
        tag: "Open 3D",
        tagTa: "3D பார்க்க",
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
        tag: "Browse",
        tagTa: "பார்க்க",
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
        tag: "Maps",
        tagTa: "வரைபடம்",
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
        tag: "Inspect",
        tagTa: "ஆராய்",
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

  // Horizontal "Apps we think you'll love >" shelf items (From Image 1)
  const appsWeLove = useMemo(
    () => [
      {
        id: "vaigai-app",
        name: "Vaigai Elite",
        nameTa: "வைகை எலைட்",
        category: "Highway Land",
        categoryTa: "வணிக நிலம்",
        image: "/images/projects/vaigai/corridor-aerial.jpg",
        icon: Building2,
        tag: "Free",
        tagTa: "இலவசம்",
        projectSlug: "vaigai-elite-commercial-land",
      },
      {
        id: "farms-app",
        name: "Madurai Farms",
        nameTa: "மதுரை ஃபார்ம்ஸ்",
        category: "Organic Agro",
        categoryTa: "இயற்கை பண்ணை",
        image: "/images/projects/madurai-farms/aerial-cottage.jpg",
        icon: Wheat,
        tag: "Free",
        tagTa: "இலவசம்",
        projectSlug: "madurai-farms-and-fruits",
      },
      {
        id: "orange-app",
        name: "Orange Garden",
        nameTa: "ஆரஞ்ச் கார்டன்",
        category: "Orchard Estate",
        categoryTa: "பழத்தோட்டம்",
        image: "/images/projects/orange-garden/hero-orchard.jpg",
        icon: Sparkles,
        tag: "Upcoming",
        tagTa: "வரவிருக்கும்",
        projectSlug: "orange-garden",
      },
      {
        id: "green-app",
        name: "Green Enclave",
        nameTa: "கிரீன் என்கிளேவ்",
        category: "DTCP Township",
        categoryTa: "DTCP மனை",
        image: "/images/projects/surya-green-enclave/road-corridor.jpg",
        icon: CheckCircle2,
        tag: "Delivered",
        tagTa: "ஒப்படைப்பு",
        projectSlug: "surya-green-enclave",
      },
      {
        id: "map-app",
        name: "MapBhoomi 3D",
        nameTa: "3D வரைபடம்",
        category: "Live 3D Layout",
        categoryTa: "3D வரைபடம்",
        icon: Layers,
        gradient: "from-amber-500 to-yellow-600",
        tag: "Free",
        tagTa: "இலவசம்",
        externalUrl: "https://mapbhoomi.com/l/surya-promoters",
      },
      {
        id: "chat-app",
        name: "WhatsApp Desk",
        nameTa: "வாட்ஸ்அப்",
        category: "Instant Support",
        categoryTa: "உடனடி சேவை",
        icon: MessageCircle,
        gradient: "from-[#25D366] to-[#128C7E]",
        tag: "Free",
        tagTa: "இலவசம்",
        externalUrl: "https://wa.me/917708966452",
      },
      {
        id: "gallery-app",
        name: "Drone Gallery",
        nameTa: "ட்ரோன் படங்கள்",
        category: "HD Visuals",
        categoryTa: "HD படங்கள்",
        icon: Camera,
        gradient: "from-purple-500 to-indigo-600",
        tag: "Free",
        tagTa: "இலவசம்",
        internalUrl: "/gallery",
      },
      {
        id: "patta-app",
        name: "Clear Patta Hub",
        nameTa: "பட்டா வழிகாட்டி",
        category: "100% Certified",
        categoryTa: "100% தெளிவானது",
        icon: ShieldCheck,
        gradient: "from-blue-600 to-cyan-600",
        tag: "Free",
        tagTa: "இலவசம்",
        internalUrl: "/about",
      },
    ],
    []
  );

  // Filter projects by search query & navigation tab
  const filteredProjects = useMemo(() => {
    let list = storeProjects;
    if (activeNav === "running") {
      list = list.filter((p) => p.projectType === "running");
    } else if (activeNav === "upcoming") {
      list = list.filter((p) => p.projectType === "upcoming");
    } else if (activeNav === "completed") {
      list = list.filter((p) => p.projectType === "completed");
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
  }, [storeProjects, activeNav, searchQuery]);

  // Filter utility apps by search query
  const filteredUtilityApps = useMemo(() => {
    if (!searchQuery.trim()) return storeUtilityApps;
    const q = searchQuery.toLowerCase().trim();
    return storeUtilityApps.filter(
      (app) =>
        app.name.toLowerCase().includes(q) ||
        app.nameTa.toLowerCase().includes(q) ||
        app.subtitle.toLowerCase().includes(q) ||
        app.tag.toLowerCase().includes(q)
    );
  }, [storeUtilityApps, searchQuery]);

  // 4 Core Poster Cards for "Best Selling Land Portfolios"
  const bestSellingProjects = useMemo(() => storeProjects.slice(0, 4), [storeProjects]);

  return (
    <div className="w-full bg-[#F3F3F3] text-[#1E293B] flex flex-col font-sans selection:bg-[#EAB308]/30">
      
      {/* MAIN STORE CONTAINER (Left Rail + Content Body) */}
      <div className="flex-1 max-w-[1760px] w-full mx-auto flex">
        
        {/* LEFT NAVIGATION RAIL (Like Microsoft Store Left Sidebar) */}
        <aside className="hidden md:flex flex-col justify-between w-18 lg:w-56 shrink-0 bg-[#F3F3F3] border-r border-[#E2E8F0] py-6 px-2 lg:px-3">
          <div className="space-y-1.5">
            
            {/* Home Tab */}
            <button
              onClick={() => {
                setActiveNav("home");
                setSearchQuery("");
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("store-search-clear"));
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                activeNav === "home"
                  ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
              }`}
            >
              <div className="relative">
                <Home className={`h-4 w-4 ${activeNav === "home" ? "text-[#EAB308]" : "text-[#64748B]"}`} />
                {activeNav === "home" && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-5 w-1 bg-[#EAB308] rounded-r-full" />
                )}
              </div>
              <span className="hidden lg:inline">{language === "ta" ? "முகப்பு ஸ்டோர்" : "Store Home"}</span>
            </button>

            {/* Running Projects */}
            <button
              onClick={() => setActiveNav("running")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                activeNav === "running"
                  ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
              }`}
            >
              <Building2 className={`h-4 w-4 ${activeNav === "running" ? "text-emerald-600" : "text-[#64748B]"}`} />
              <div className="hidden lg:flex items-center justify-between w-full">
                <span>{language === "ta" ? "நடைபெறுபவை" : "Running"}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-mono">
                  2
                </span>
              </div>
            </button>

            {/* Upcoming Projects */}
            <button
              onClick={() => setActiveNav("upcoming")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                activeNav === "upcoming"
                  ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
              }`}
            >
              <Sparkles className={`h-4 w-4 ${activeNav === "upcoming" ? "text-amber-500" : "text-[#64748B]"}`} />
              <div className="hidden lg:flex items-center justify-between w-full">
                <span>{language === "ta" ? "வரவிருக்கும்" : "Upcoming"}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-100 text-amber-800 font-mono">
                  1
                </span>
              </div>
            </button>

            {/* Completed Projects */}
            <button
              onClick={() => setActiveNav("completed")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                activeNav === "completed"
                  ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
              }`}
            >
              <CheckCircle2 className={`h-4 w-4 ${activeNav === "completed" ? "text-blue-600" : "text-[#64748B]"}`} />
              <div className="hidden lg:flex items-center justify-between w-full">
                <span>{language === "ta" ? "நிறைவடைந்தவை" : "Completed"}</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-800 font-mono">
                  1
                </span>
              </div>
            </button>

            {/* 3D Masterplans */}
            <button
              onClick={() => setActiveNav("3d")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                activeNav === "3d"
                  ? "bg-white text-[#0F172A] shadow-xs border border-[#E2E8F0]"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/60"
              }`}
            >
              <Layers className={`h-4 w-4 ${activeNav === "3d" ? "text-[#EAB308]" : "text-[#64748B]"}`} />
              <span className="hidden lg:inline">{language === "ta" ? "3D வரைபடங்கள்" : "3D Masterplans"}</span>
            </button>

            {/* Site Photos / Gallery */}
            <Link
              href="/gallery"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-xs lg:text-sm font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-white/60 transition-all"
            >
              <Camera className="h-4 w-4 text-[#64748B]" />
              <span className="hidden lg:inline">{language === "ta" ? "தள படங்கள்" : "Site Gallery"}</span>
            </Link>
          </div>

          {/* Bottom Sidebar Hub: About & Call */}
          <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
            <Link
              href="/about"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-white/50 transition"
            >
              <Award className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="hidden lg:inline">{language === "ta" ? "16+ ஆண்டுகள் நம்பிக்கை" : "16+ Yrs Veteran"}</span>
            </Link>
            <a
              href="tel:+917708966452"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-white/50 transition"
            >
              <Phone className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="hidden lg:inline">+91 77089 66452</span>
            </a>
          </div>
        </aside>

        {/* RIGHT / MAIN STORE BODY */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          
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
                onClick={() => {
                  setSearchQuery("");
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("store-search-clear"));
                  }
                }}
                className="text-xs font-mono font-bold text-red-600 hover:text-red-700 underline"
              >
                {language === "ta" ? "தேடலை நீக்கு" : "Clear Search"}
              </button>
            </div>
          )}

          {/* 1. TOP HERO SHOWCASE SECTION (EXACT LAYOUT FROM USER'S IMAGE 1) */}
          {!searchQuery && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              
              {/* LEFT BIG GLOWING CARD: WhatsApp Showcase (Exact match to Image 1: Green with ambient glow, doodles, "Open" button, big logo) */}
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#128C7E] via-[#25D366] to-[#075E54] text-white p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(37,211,102,0.35)] border border-[#25D366]/60 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
                {/* Subtle Doodle Pattern Background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Big WhatsApp Logo floating on right side */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 opacity-30 sm:opacity-50 pointer-events-none scale-120 sm:scale-140">
                  <MessageCircle className="h-40 w-40 sm:h-56 sm:w-56 text-white stroke-[1.2]" />
                </div>

                <div className="relative z-10 space-y-2 max-w-md">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                    WhatsApp
                  </h2>
                  <p className="text-sm sm:text-base text-emerald-100 font-medium">
                    {language === "ta"
                      ? "நேரடி அரட்டை & உடனடி விலை விபரம், மனை வரைபடங்கள்"
                      : "Private messaging, direct pricing & verified layout plans"}
                  </p>
                </div>

                {/* Bottom Action Pill Button & Pagination Dots (Exact from Image 1) */}
                <div className="relative z-10 pt-8 flex items-center justify-between">
                  <a
                    href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20land%20and%20plots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-[#005C4B] hover:bg-[#00473A] text-white text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <span>{language === "ta" ? "தொடங்க" : "Open"}</span>
                  </a>

                  {/* Pagination Dots */}
                  <div className="flex items-center gap-1.5 px-2">
                    <span className="h-1.5 w-4 rounded-full bg-white" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: 3 Cards (Top Reward/Trust Card + 2 Bottom Promo Cards from Image 1) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                
                {/* Top Card: "Get rewarded" / IAF Veteran Trust Card (Matches Image 1 top right) */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white p-5 sm:p-6 shadow-md border border-blue-400/30 flex items-center justify-between">
                  <div className="relative z-10 space-y-2 max-w-[65%]">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {language === "ta" ? "16+ ஆண்டுகள் நம்பிக்கை" : "16+ Yrs Veteran Trust"}
                    </h3>
                    <p className="text-xs text-blue-100">
                      {language === "ta"
                        ? "100% தெளிவான பட்டா & நேரடி ஆவண சரிபார்ப்பு"
                        : "100% Clear Computer Patta & Transparent Deals"}
                    </p>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-white text-blue-900 text-xs font-bold shadow-xs hover:bg-gray-100 transition mt-1"
                    >
                      <span>{language === "ta" ? "விபரம்" : "Get"}</span>
                    </Link>
                  </div>

                  {/* Gold Medal & Trust Badge Visual */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-lg flex items-center justify-center text-white border-2 border-white/40">
                      <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow" />
                    </div>
                  </div>
                </div>

                {/* Bottom Two Promo Cards Side-by-Side (Matches Image 1 bottom right: Football Manager & GRAVHOuNDS) */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Card A: Orange Garden (Upcoming) */}
                  <div
                    onClick={() => {
                      const og = storeProjects.find((p) => p.id === "orange-garden");
                      if (og) setSelectedProject(og);
                    }}
                    className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 shadow-sm border border-gray-200 cursor-pointer"
                  >
                    <Image
                      src="/images/projects/orange-garden/hero-orchard.jpg"
                      alt="Orange Garden"
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-400 text-black text-[9px] font-mono font-extrabold uppercase">
                        Upcoming 2026
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#EAB308] transition-colors truncate block">
                        Orange Garden
                      </span>
                    </div>
                  </div>

                  {/* Card B: Vaigai Elite (Running) */}
                  <div
                    onClick={() => {
                      const ve = storeProjects.find((p) => p.id === "vaigai-elite");
                      if (ve) setSelectedProject(ve);
                    }}
                    className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 shadow-sm border border-gray-200 cursor-pointer"
                  >
                    <Image
                      src="/images/projects/vaigai/corridor-aerial.jpg"
                      alt="Vaigai Elite"
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-mono font-extrabold uppercase">
                        Running 2026
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#EAB308] transition-colors truncate block">
                        Vaigai Elite (NH-44)
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* 2. "Apps we think you'll love >" SHELF (EXACT HORIZONTAL ROW FROM IMAGE 1) */}
          <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1F5F9]">
              <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-1.5">
                <span>{language === "ta" ? "பரிந்துரைக்கப்படும் திட்டங்கள் & செயலிகள்" : "Apps we think you'll love"}</span>
                <ChevronRight className="h-4 w-4 text-[#64748B]" />
              </h2>

              <div className="flex items-center gap-1 text-[#64748B]">
                <button
                  onClick={() => setAppsLovePage((p) => Math.max(0, p - 1))}
                  disabled={appsLovePage === 0}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 transition cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setAppsLovePage((p) => p + 1)}
                  className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Row of Rounded App Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {appsWeLove.map((item) => {
                const IconComp = item.icon;

                const handleClick = () => {
                  if (item.projectSlug) {
                    const p = storeProjects.find((x) => x.slug === item.projectSlug);
                    if (p) setSelectedProject(p);
                  } else if (item.internalUrl) {
                    router.push(item.internalUrl);
                  } else if (item.externalUrl) {
                    window.open(item.externalUrl, "_blank");
                  }
                };

                return (
                  <div
                    key={item.id}
                    onClick={handleClick}
                    className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer text-center"
                  >
                    {/* Squircle Icon */}
                    <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl overflow-hidden shadow-xs border border-gray-200 group-hover:scale-108 transition-transform flex items-center justify-center bg-gray-50">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}>
                          <IconComp className="h-7 w-7" />
                        </div>
                      )}
                    </div>

                    <div className="mt-2.5">
                      <span className="font-display text-xs font-bold text-[#0F172A] group-hover:text-[#B45309] block truncate">
                        {language === "ta" ? item.nameTa : item.name}
                      </span>
                      <span className="text-[10px] text-[#64748B] block truncate mt-0.5">
                        {language === "ta" ? item.categoryTa : item.category}
                      </span>
                    </div>

                    <span className="mt-2 text-[10px] font-semibold text-[#94A3B8]">
                      {language === "ta" ? item.tagTa : item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. THE TWO CORE SIDE-BY-SIDE PANELS (FROM USER'S IMAGE 2: Trending games & Trending apps) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* PANEL 1: "Trending land projects >" (Matching "Trending games >") */}
            <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>{language === "ta" ? "முன்னணி திட்டங்கள்" : "Trending land projects"}</span>
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

              {/* 2-Column × 3-Row Grid (6 App items per panel) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                {filteredProjects.slice(0, 6).map((project) => {
                  const IconComp = project.icon;
                  const isUpcoming = project.projectType === "upcoming";

                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-gray-200 bg-gray-100 group-hover:scale-105 transition-transform">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-30 mix-blend-multiply`} />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-7 w-7 rounded-lg bg-black/50 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                              <IconComp className="h-3.5 w-3.5 text-[#EAB308]" />
                            </div>
                          </div>

                          {project.badgeLabel && (
                            <div className="absolute top-0.5 left-0.5">
                              <span
                                className={`text-[7px] font-mono font-extrabold uppercase px-1 py-0.2 rounded-xs shadow-2xs ${
                                  isUpcoming
                                    ? "bg-amber-400 text-black"
                                    : "bg-emerald-600 text-white"
                                }`}
                              >
                                {isUpcoming ? "Upcoming" : "Verified"}
                              </span>
                            </div>
                          )}
                        </div>

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

                      <div className="shrink-0 text-right">
                        <span className="text-xs font-semibold text-[#64748B] group-hover:text-[#0F172A]">
                          {language === "ta" ? "இலவசம்" : "Free"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* PANEL 2: "Trending apps" (Matching "Trending apps >") */}
            <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#B45309] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>{language === "ta" ? "முக்கிய சேவைகள் & செயலிகள்" : "Trending apps"}</span>
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

              {/* 2-Column × 3-Row Grid (6 Utility App items) */}
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
                        <div
                          className={`relative aspect-square w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gradient-to-br ${app.gradient} flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform`}
                        >
                          <IconComp className="h-7 w-7 sm:h-8 sm:w-8 text-white drop-shadow-md" />

                          {app.badge && (
                            <div className="absolute top-1 right-1">
                              <span
                                className={`text-[7px] font-mono font-extrabold uppercase px-1 py-0.2 rounded-full ${app.badgeColor || "bg-red-500"} text-white border border-white shadow-2xs`}
                              >
                                {app.badge}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex flex-col">
                          <span className="font-display text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#B45309] truncate">
                            {language === "ta" ? app.nameTa : app.name}
                          </span>
                          <span className="text-[11px] text-[#64748B] truncate mt-0.5">
                            {language === "ta" ? app.subtitleTa : app.subtitle}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 font-semibold truncate">
                            {language === "ta" ? app.tagTa : app.tag}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="text-xs font-semibold text-[#64748B] group-hover:text-[#0F172A]">
                          {language === "ta" ? "இலவசம்" : "Free"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* 4. BOTTOM SHELF: "Talk. share. smile. >" / DIRECT CONNECT CHANNELS (FROM USER'S IMAGE 2) */}
          <div className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F1F5F9]">
              <h2 className="font-display text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-1.5">
                <span>{language === "ta" ? "நேரடி தொடர்புகள் & வரைபடங்கள்" : "Talk. share. smile."}</span>
                <ChevronRight className="h-4 w-4 text-[#64748B]" />
              </h2>
            </div>

            {/* Row of Communication & Project App Tiles (Matches Image 2 bottom shelf) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {/* Tile 1: WhatsApp */}
              <a
                href="https://wa.me/917708966452"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <MessageCircle className="h-8 w-8 fill-white" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  WhatsApp Beta
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </a>

              {/* Tile 2: Direct Call */}
              <a
                href="tel:+917708966452"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <Phone className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  Direct Line
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </a>

              {/* Tile 3: 3D Map */}
              <a
                href="https://mapbhoomi.com/l/surya-promoters"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-amber-500 flex items-center justify-center text-black shadow-xs group-hover:scale-108 transition">
                  <Layers className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  MapBhoomi 3D
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </a>

              {/* Tile 4: Google Maps */}
              <a
                href="https://maps.google.com/?q=Surya+Promoters+Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <MapPin className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  Google Maps
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </a>

              {/* Tile 5: Photo Gallery */}
              <Link
                href="/gallery"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <Camera className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  Site Gallery
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </Link>

              {/* Tile 6: All Projects */}
              <Link
                href="/projects"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <Building2 className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  All Projects
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </Link>

              {/* Tile 7: Legal Patta */}
              <Link
                href="/about"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-cyan-600 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  Patta Verified
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </Link>

              {/* Tile 8: Email Support */}
              <a
                href="mailto:suryconstruction@gmail.com"
                className="group flex flex-col justify-between p-3 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition text-center"
              >
                <div className="relative aspect-square w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gray-800 flex items-center justify-center text-white shadow-xs group-hover:scale-108 transition">
                  <Mail className="h-7 w-7" />
                </div>
                <span className="font-display text-xs font-bold text-[#0F172A] mt-2 truncate block">
                  Email Desk
                </span>
                <span className="text-[10px] text-[#94A3B8] block">Free</span>
              </a>
            </div>
          </div>

        </main>

      </div>

      {/* STORE APP PRODUCT DETAIL POPUP (WHEN ANY ITEM IS CLICKED) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-gray-200 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 h-8 w-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

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
              
              {/* Product Header: Icon + Title + Rating */}
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

              {/* Action Buttons: "Enquire on WhatsApp" + "Direct Call" */}
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
                    className="inline-flex items-center justify-center gap-1.5 px-4 rounded-xl bg-[#EAB308] hover:bg-[#ca9a07] text-[#0F172A] py-2.5 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
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
      )}

    </div>
  );
}
