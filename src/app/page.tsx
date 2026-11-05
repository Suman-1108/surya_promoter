"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Building2,
  MapPin,
  Camera,
  ShieldCheck,
  Download,
  Phone,
  MessageCircle,
  Mail,
  Navigation,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  Star,
  Play,
  Folder,
  Layers,
  FileText,
  Search,
  Sparkles,
  Maximize2,
  FileCheck,
  Home,
  Trees,
  Briefcase,
  SlidersHorizontal,
  Compass,
  Grid,
  Info,
  PhoneCall,
  Share2,
  Car,
  HeartPulse,
  GraduationCap,
  Droplets,
  TrendingUp,
  DollarSign,
  ThumbsUp,
  Building,
  Clock,
} from "lucide-react";
import { PROJECT_DETAILS_MAP } from "@/data/projectDetailsExtra";

// Project Data Model for Surya Promoters App-Store Experience
interface AppProject {
  id: string;
  name: { en: string; ta: string };
  category: "residential" | "commercial" | "farm";
  categoryLabel: { en: string; ta: string };
  subcategory: "flat" | "plot" | "comm-building" | "comm-land" | "farm-land";
  subcategoryLabel: { en: string; ta: string };
  location: { en: string; ta: string };
  distanceInfo: { en: string; ta: string };
  image: string;
  blueprint?: string;
  mapbhoomiUrl?: string;
  statusBadge: { en: string; ta: string };
  rating: string;
  description: { en: string; ta: string };
  highlights: { en: string[]; ta: string[] };
  mapsUrl: string;
  specs: { label: { en: string; ta: string }; value: { en: string; ta: string } }[];
}

const ALL_PROJECTS: AppProject[] = [
  // -------------------------------------------------------------------------
  // 1. RESIDENTIAL PROJECTS (Flat & Plot)
  // -------------------------------------------------------------------------
  {
    id: "flat-projects",
    name: { en: "Flat Projects – Modern Apartments", ta: "பிளாட் திட்டங்கள் – நவீன அடுக்குமாடிகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "flat",
    subcategoryLabel: { en: "Flat Project", ta: "அடுக்குமாடி" },
    location: { en: "Prime Residential Belts, Madurai", ta: "மதுரை பிரதான குடியிருப்பு பகுதி" },
    distanceInfo: { en: "8 km from Meenakshi Amman Temple · 15 min to Airport", ta: "மீனாட்சி அம்மன் கோவிலில் இருந்து 8 கி.மீ · விமான நிலையத்திற்கு 15 நிமிடம்" },
    image: "/images/generated/residential-flat.jpg",
    statusBadge: { en: "Ongoing Project", ta: "விற்பனையில் உள்ளது" },
    rating: "4.9",
    description: {
      en: "Contemporary luxury apartments featuring private balconies, covered car parking, passenger lift, 24/7 security surveillance, and 100% clear title patta documentation.",
      ta: "பாதுகாப்பான குடியிருப்பு வளாகத்தில் பால்கனி, லிப்ட், கார் பார்க்கிங், மற்றும் 100% தெளிவான பட்டாவுடன் கூடிய நவீன அடுக்குமாடி குடியிருப்புகள்.",
    },
    highlights: {
      en: [
        "Contemporary architecture with landscaped garden",
        "Dedicated covered car parking & passenger lift",
        "24/7 security surveillance & power backup",
        "100% Computer Patta & RERA compliant approval",
      ],
      ta: [
        "இயற்கை எழில் கொஞ்சும் நவீன கட்டிட வடிவமைப்பு",
        "பாதுகாப்பான கார் பார்க்கிங் மற்றும் லிப்ட் வசதி",
        "24/7 சிசிடிவி பாதுகாப்பு மற்றும் ஜெனரேட்டர் பேக்கப்",
        "100% கம்ப்யூட்டர் பட்டா மற்றும் RERA அனுமதி",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Madurai+Residential",
    specs: [
      { label: { en: "Type", ta: "வகை" }, value: { en: "2 & 3 BHK Apartments", ta: "2 & 3 BHK அடுக்குமாடிகள்" } },
      { label: { en: "Approval", ta: "அனுமதி" }, value: { en: "DTCP & RERA Compliant", ta: "DTCP & RERA அனுமதி" } },
      { label: { en: "Water", ta: "குடிநீர்" }, value: { en: "Sweet Potable Groundwater", ta: "இனிமையான நிலத்தடி நீர்" } },
    ],
  },

  {
    id: "plot-projects",
    name: { en: "Plot Projects – Well-Planned Layouts", ta: "மனைப்பிரிவு திட்டங்கள் – வீட்டு மனைகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "plot",
    subcategoryLabel: { en: "Plot Project", ta: "மனைப்பிரிவு" },
    location: { en: "Fast-Growing Residential Corridors, Madurai", ta: "மதுரை அதிவேக வளர்ச்சி குடியிருப்பு வழித்தடம்" },
    distanceInfo: { en: "Adjacent to 4-Lane Highway · Quick ring road connectivity", ta: "4-வழி தேசிய நெடுஞ்சாலை அருகில் · நேரடி இணைப்பு" },
    image: "/images/generated/residential-plot.jpg",
    statusBadge: { en: "Ready to Register", ta: "உடனடி பதிவு" },
    rating: "5.0",
    description: {
      en: "Ready-to-build residential villa plots with wide blacktop bitumen roads, solar street lighting, curbed walkways, sweet potable water table, and immediate individual registration.",
      ta: "அகன்ற தார்ச் சாலைகள், தெருவிளக்குகள், நடைபாதைகள் மற்றும் குடிநீர் வசதியுடன் உடனடியாக வீடு கட்டத் தகுந்த பிரீமியம் வீட்டுமனைகள்.",
    },
    highlights: {
      en: [
        "DTCP & RERA approved plotted community",
        "30 ft & 40 ft wide blacktop bitumen roads",
        "Sweet potable groundwater at shallow depth",
        "Immediate individual computer patta registration",
      ],
      ta: [
        "DTCP & RERA அங்கீகரிக்கப்பட்ட குடியிருப்பு பகுதி",
        "30 மற்றும் 40 அடி அகலமான தார்ச் சாலைகள்",
        "சுவையான நிலத்தடி குடிநீர் வசதி",
        "உடனடி தனிநபர் கணினி பட்டா பதிவு",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Madurai+Plots",
    specs: [
      { label: { en: "Plot Sizes", ta: "அளவுகள்" }, value: { en: "600 to 2400 Sq.Ft", ta: "600 முதல் 2400 ச.அடி" } },
      { label: { en: "Road Width", ta: "சாலை அகலம்" }, value: { en: "30 Ft & 40 Ft Tarmac", ta: "30 & 40 அடி தார் சாலை" } },
      { label: { en: "Legal Title", ta: "பத்திரங்கள்" }, value: { en: "30-Year Clear Title Vetting", ta: "30 வருட மூலப்பத்திரம் ஆய்வு" } },
      { label: { en: "Finance", ta: "வங்கி கடன்" }, value: { en: "Bank Loan Assistance Available", ta: "வங்கி கடன் வசதி உண்டு" } },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. COMMERCIAL PROJECTS (Building & Land - 5 Projects)
  // -------------------------------------------------------------------------
  {
    id: "vaigai-elite",
    name: { en: "Vaigai Elite Garden (Commercial)", ta: "வைகை எலைட் கார்டன் (வணிக நிலம்)" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Madurai Outer Ring Road & NH-44", ta: "மதுரை அவுட்டர் ரிங் ரோடு & NH-44" },
    distanceInfo: { en: "Direct National Highway Frontage · High multi-axle exposure", ta: "தேசிய நெடுஞ்சாலை முகப்பு · கனரக வாகன வசதி" },
    image: "/images/generated/vaigai-elite-garden.jpg",
    mapbhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
    statusBadge: { en: "Prime Corridor", ta: "பிரைம் காரிடார்" },
    rating: "4.9",
    description: {
      en: "High-exposure commercial land parcels along NH-44 and Madurai Outer Ring Road, tailored for hospitals, godowns, logistics terminals, and retail complexes.",
      ta: "NH-44 மற்றும் மதுரை ரிங் ரோட்டில் அமைந்துள்ள உயர் மதிப்பு வணிக நிலங்கள். மருத்துவமனைகள், குடோன்கள் மற்றும் வணிக நிறுவனங்களுக்கு மிகச் சிறந்தது.",
    },
    highlights: {
      en: [
        "Direct national highway multi-axle vehicle frontage",
        "100% computer patta with verified revenue records",
        "Perennial groundwater & immense vehicular visibility",
        "Rapidly appreciating commercial transit hub",
      ],
      ta: [
        "தேசிய நெடுஞ்சாலை நேரடி முகப்பு வசதி",
        "100% கணினி பட்டா மற்றும் தெளிவான மூலப்பத்திரங்கள்",
        "அதிவேக வாகன போக்குவரத்து மற்றும் சிறந்த விளம்பர மதிப்பு",
        "வேகமாக உயர்ந்து வரும் வணிக முதலீட்டு பகுதி",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road",
    specs: [
      { label: { en: "Highway", ta: "நெடுஞ்சாலை" }, value: { en: "NH-44 & Outer Ring Road", ta: "NH-44 & வெளிவட்டச் சாலை" } },
      { label: { en: "Access", ta: "போக்குவரத்து" }, value: { en: "Multi-Axle Truck Friendly", ta: "கனரக லாரிகள் எளிதில் செல்லலாம்" } },
      { label: { en: "Patta", ta: "பட்டா" }, value: { en: "100% Computer Patta", ta: "100% கணினி பட்டா" } },
      { label: { en: "Suitability", ta: "பயன்பாடு" }, value: { en: "Godowns / Showrooms / Hospitals", ta: "குடோன் / ஷோரூம் / மருத்துவமனை" } },
    ],
  },

  {
    id: "vaigai-river",
    name: { en: "Vaigai River Build", ta: "வைகை ரிவர் பில்ட்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Vaigai Riverfront Highway, Madurai", ta: "வைகை நதிக்கரை சாலை, மதுரை" },
    distanceInfo: { en: "5 min from Madurai City Center · Scenic riverbank frontage", ta: "நகரின் மையப்பகுதியில் இருந்து 5 நிமிடம்" },
    image: "/images/generated/vaigai-river-build.jpg",
    statusBadge: { en: "Riverfront Prime", ta: "நதிக்கரை பிரைம்" },
    rating: "4.8",
    description: {
      en: "Exclusive riverfront commercial land plots with wide approach roads, ideal for hospitality ventures, wedding convention centers, and retail parks.",
      ta: "வைகை நதிக்கரை பகுதியில் அமைந்துள்ள பிரத்யேக வணிக நிலங்கள். திருமண மண்டபங்கள், ஹோட்டல்கள் மற்றும் வணிக வளாகங்களுக்கு உகந்தது.",
    },
    highlights: {
      en: [
        "Picturesque riverfront commercial frontage",
        "Unobstructed road access with wide tarmac roads",
        "Immediate registration & clear encumbrance certificate",
        "Ideal for convention halls, resorts & retail",
      ],
      ta: [
        "வைகை நதிக்கரை நேரடி முகப்பு அழகு",
        "அகன்ற தார்ச் சாலை வசதி",
        "உடனடி பதிவு மற்றும் வில்லங்கமற்ற பத்திரங்கள்",
        "திருமண மண்டபம் மற்றும் ரிசார்ட்டுகளுக்கு உகந்தது",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Vaigai+River+Madurai",
    specs: [
      { label: { en: "Location", ta: "அமைவிடம்" }, value: { en: "Vaigai Riverfront Boulevard", ta: "வைகை நதிக்கரை சாலை" } },
      { label: { en: "Zoning", ta: "வகைப்பாடு" }, value: { en: "Commercial / Hospitality", ta: "வணிகம் / விருந்தோம்பல்" } },
      { label: { en: "Title", ta: "உரிமம்" }, value: { en: "Clean Revenue Records", ta: "தெளிவான வருவாய்த்துறை ஆவணம்" } },
      { label: { en: "Environment", ta: "சூழல்" }, value: { en: "Scenic River Breeze", ta: "இயற்கை நதிக்காற்று & அமைதி" } },
    ],
  },

  {
    id: "pandi-kovil",
    name: { en: "Pandi Kovil Site", ta: "பாண்டி கோவில் வணிக தளம்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Commercial Land", ta: "வணிக நிலம்" },
    location: { en: "Pandi Kovil Ring Road Junction, Madurai", ta: "பாண்டி கோவில் ரிங் ரோடு சந்திப்பு, மதுரை" },
    distanceInfo: { en: "Busiest ring road hub · High visibility for branded retail", ta: "அதிக போக்குவரத்து மிகுந்த ரிங் ரோடு மையம்" },
    image: "/images/generated/pandi-kovil-site.jpg",
    statusBadge: { en: "High Footfall", ta: "அதிக மக்கள் வரத்து" },
    rating: "4.9",
    description: {
      en: "High-traffic commercial showroom and investment plots situated near the bustling Pandi Kovil Ring Road corridor with heavy daily vehicle footfall.",
      ta: "அதிக போக்குவரத்து நெரிசலும் விளம்பர மதிப்பும் கொண்ட பாண்டி கோவில் ரிங் ரோடு பகுதியில் அமைந்துள்ள வணிக முதலீட்டு நிலங்கள்.",
    },
    
    highlights: {
      en: [
        "Prime junction visibility with continuous vehicular traffic",
        "Perfect for auto showrooms, retail outlets & restaurants",
        "Legally vetted 30-year parent documentation",
        "High commercial rental yield potential",
      ],
      ta: [
        "தொடர்ச்சியான வாகன போக்குவரத்து மற்றும் விளம்பர மதிப்பு",
        "ஆட்டோமொபைல் ஷோரூம் மற்றும் உணவகங்களுக்கு ஏற்றது",
        "30 வருட தெளிவான மூலப்பத்திரங்கள்",
        "உயர் வாடகை வருமானம் தரும் பிரைம் இடம்",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Pandi+Kovil+Ring+Road+Madurai",
    specs: [
      { label: { en: "Corridor", ta: "வழித்தடம்" }, value: { en: "Pandi Kovil Ring Road", ta: "பாண்டி கோவில் ரிங் ரோடு" } },
      { label: { en: "Visibility", ta: "பார்வைத்திறன்" }, value: { en: "100% High Impact Frontage", ta: "100% நேரடி விளம்பர மதிப்பு" } },
      { label: { en: "Ownership", ta: "உரிமை" }, value: { en: "Freehold Immediate Patta", ta: "உடனடி பட்டா உரிமை" } },
      { label: { en: "Appreciation", ta: "வளர்ச்சி" }, value: { en: "Consistently High", ta: "தொடர்ச்சியான அசுர வளர்ச்சி" } },
    ],
  },

  {
    id: "commercial-anna-nagar",
    name: { en: "Commercial Building – Anna Nagar", ta: "வணிக கட்டிடம் – அண்ணா நகர்" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-building",
    subcategoryLabel: { en: "Commercial Building", ta: "வணிக கட்டிடம்" },
    location: { en: "80 Feet Road, Anna Nagar, Madurai", ta: "80 அடி ரோடு, அண்ணா நகர், மதுரை" },
    distanceInfo: { en: "Madurai's premier commercial high street · Full retail density", ta: "மதுரையின் முதன்மை வணிக பிரதான சாலை" },
    image: "/images/generated/commercial-anna-nagar.jpg",
    statusBadge: { en: "Luxury Office Space", ta: "ஆடம்பர அலுவலகம்" },
    rating: "5.0",
    description: {
      en: "Prestigious multi-storey commercial building suited for corporate headquarters, IT branches, banks, diagnostic centers, and premium retail in prime Anna Nagar.",
      ta: "அண்ணா நகர் 80 அடி சாலையில் அமைந்துள்ள நவீன வணிக கட்டிடம். வங்கிகள், கார்ப்பரேட் அலுவலகங்கள் மற்றும் ஷோரூம்களுக்கு ஏற்றது.",
    },
    highlights: {
      en: [
        "Curved modern glass elevation & corporate grand lobby",
        "Multi-level basement & surface customer parking",
        "100% power backup & high-speed passenger elevators",
        "Highest commercial footfall location in Madurai",
      ],
      ta: [
        "நவீன கண்ணாடி முகப்பு மற்றும் பிரம்மாண்ட வரவேற்பறை",
        "அண்டர்கிரவுண்ட் கார் பார்க்கிங் வசதி",
        "24 மணி நேர ஜெனரேட்டர் மற்றும் அதிவேக லிப்ட் வசதி",
        "மதுரையின் மிக முக்கிய வணிக கேந்திரம்",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Anna+Nagar+80+Feet+Road+Madurai",
    specs: [
      { label: { en: "Structure", ta: "கட்டமைப்பு" }, value: { en: "Multi-Storey Commercial Glass", ta: "பல அடுக்கு நவீன கண்ணாடி வளாகம்" } },
      { label: { en: "Road Width", ta: "சாலை அகலம்" }, value: { en: "80 Feet Main Road", ta: "80 அடி பிரதான சாலை" } },
      { label: { en: "Elevator", ta: "லிப்ட்" }, value: { en: "High Speed Passenger Lift", ta: "அதிவேக லிப்ட்" } },
      { label: { en: "Parking", ta: "பார்க்கிங்" }, value: { en: "Multi-Level Dedicated Parking", ta: "பிரத்யேக பார்க்கிங் வசதி" } },
    ],
  },
  
  {
    id: "mayilan-gundu",
    name: { en: "Mayilan Gundu Site (MPF School)", ta: "மயிலன் குண்டு தளம் (MPF பள்ளி)" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Institutional & Commercial", ta: "கல்வி & வணிக நிலம்" },
    location: { en: "Mayilan Gundu, Adjacent MPF International School, Madurai", ta: "மயிலன் குண்டு, MPF பள்ளி அருகில், மதுரை" },
    distanceInfo: { en: "Opposite MPF International School · Broad access road", ta: "MPF சர்வதேச பள்ளிக்கு மிக அருகில்" },
    image: "/images/generated/mayilan-gundu-site.jpg",
    statusBadge: { en: "Institutional Hub", ta: "கல்வி நிறுவனம் தகுந்தது" },
    rating: "4.8",
    description: {
      en: "Expansive commercial and institutional land development with wide approach roads, ideal for schools, sports academies, colleges, and commercial depots.",
      ta: "MPF சர்வதேச பள்ளிக்கு அருகில் அமைந்துள்ள கல்வி மற்றும் வணிக நிறுவனங்களுக்கான பிரம்மாண்ட நிலப்பரப்பு.",
    },
    highlights: {
      en: [
        "Immediate frontage adjacent to MPF International School",
        "Wide blacktop road suitable for heavy buses & transport",
        "Clear institutional classification & unencumbered title",
        "Rapidly developing educational hub in Madurai",
      ],
      ta: [
        "MPF சர்வதேச பள்ளியை ஒட்டிய நேரடி முகப்பு",
        "பள்ளி பேருந்துகள் எளிதில் செல்ல அகன்ற தார் சாலை",
        "வில்லங்கமற்ற தெளிவான பட்டா ஆவணங்கள்",
        "கல்வி நிறுவனங்கள் அமைய மிகச் சிறந்த சூழல்",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Mayilan+Gundu+Madurai",
    specs: [
      { label: { en: "Classification", ta: "வகை" }, value: { en: "Institutional / Commercial Land", ta: "கல்வி / வணிக பெருநிலம்" } },
      { label: { en: "Road Access", ta: "சாலை" }, value: { en: "Wide Asphalt Road", ta: "அகன்ற தார்ச் சாலை" } },
      { label: { en: "Groundwater", ta: "நிலத்தடி நீர்" }, value: { en: "Abundant & Perennial", ta: "வற்றாத நிலத்தடி நீர் வளம்" } },
      { label: { en: "Patta", ta: "பட்டா" }, value: { en: "Verified Computer Patta", ta: "சரிபார்க்கப்பட்ட கணினி பட்டா" } },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. FARM LAND PROJECTS (2 Projects)
  // -------------------------------------------------------------------------
  {
    id: "madurai-farms",
    name: { en: "Madurai Farms & Fruits", ta: "மதுரை பார்ம்ஸ் & புரூட்ஸ்" },
    category: "farm",
    categoryLabel: { en: "Farm Land", ta: "பண்ணை நிலம்" },
    subcategory: "farm-land",
    subcategoryLabel: { en: "Agro Farmland", ta: "வேளாண் பண்ணை" },
    location: { en: "Agricultural Green Belt, Madurai", ta: "விவசாய பசுமை மண்டலம், மதுரை" },
    distanceInfo: { en: "Scenic Countryside · 25 min from Madurai city center", ta: "இயற்கை எழில் கொஞ்சும் கிராமப்புறம் · 25 நிமிடம்" },
    image: "/images/projects/madurai-farms.jpg",
    mapbhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-acres",
    statusBadge: { en: "Managed Agro Estate", ta: "நிர்வகிக்கப்படும் பண்ணை" },
    rating: "4.9",
    description: {
      en: "Managed organic agro-acreage with pre-planted fruit groves (mango, guava, coconut), drip irrigation systems, scenic mountain views, and weekend farmhouse living.",
      ta: "மா, கொய்யா, தென்னை மரங்கள் மற்றும் சொட்டு நீர் பாசன வசதியுடன் கூடிய நிர்வகிக்கப்படும் இயற்கை விவசாய பண்ணை மனைகள்.",
    },
    highlights: {
      en: [
        "Rich fertile red soil with shallow sweet water table",
        "Pre-planted yielding fruit trees with automated drip systems",
        "Gated community with 24/7 security & ongoing farm maintenance",
        "Generates continuous organic agricultural yield & tax-free income",
      ],
      ta: [
        "வற்றாத நிலத்தடி நீருடன் கூடிய வளமான செம்மண் பூமி",
        "சொட்டு நீர் பாசனத்துடன் கூடிய பலன் தரும் பழ மரங்கள்",
        "24/7 காவலாளி மற்றும் தோட்டப் பராமரிப்பு வசதி",
        "வரிவிலக்குடன் கூடிய தொடர் விவசாய வருமானம்",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Madurai+Agricultural+Belt",
    specs: [
      { label: { en: "Acreage Type", ta: "பண்ணை வகை" }, value: { en: "Organic Fruit & Tree Farm", ta: "இயற்கை பழத்தோட்ட பண்ணை" } },
      { label: { en: "Irrigation", ta: "பாசனம்" }, value: { en: "Installed Drip Systems", ta: "சொட்டு நீர் பாசன அமைப்பு" } },
      { label: { en: "Soil Type", ta: "மண் வகை" }, value: { en: "High-Yield Red Soil", ta: "வளமான செம்மண்" } },
      { label: { en: "Management", ta: "பராமரிப்பு" }, value: { en: "Full Turnkey Maintenance", ta: "முழுமையான பராமரிப்பு உண்டு" } },
    ],
  },
  {
    id: "orange-garden",
    name: { en: "Orange Garden", ta: "ஆரஞ்ச் கார்டன்" },
    category: "farm",
    categoryLabel: { en: "Farm Land", ta: "பண்ணை நிலம்" },
    subcategory: "farm-land",
    subcategoryLabel: { en: "Gated Orchard", ta: "வேலி அமைக்கப்பட்ட தோட்டம்" },
    location: { en: "Thiruppuvanam to Narikudi Road, Madurai Region", ta: "திருப்புவனம் முதல் நரிக்குடி சாலை, மதுரை மண்டலம்" },
    distanceInfo: { en: "Direct Main Road Frontage · 10 Numbered Gated Plots", ta: "பிரதான சாலை முகப்பு · 10 இலக்கமிடப்பட்ட மனைகள்" },
    image: "/images/generated/orange-garden.jpg",
    blueprint: "/images/projects/orange-garden/layout-blueprint.jpg",
    mapbhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/Kalathur",
    statusBadge: { en: "Running Ongoing Project", ta: "நடைபெறும் திட்டம்" },
    rating: "5.0",
    description: {
      en: "Gated Orchard & Farm Estate plots (Plots 1 to 10) featuring pre-planted citrus orange trees, mountain backdrop, 100% documented clear titles, and direct highway connectivity.",
      ta: "திருப்புவனம் - நரிக்குடி சாலையில் அமைந்துள்ள 10 மனைப் பிரிவுகள் கொண்ட வேலி அமைக்கப்பட்ட ஆரஞ்சு பழத்தோட்ட பண்ணை மனைகள். 100% தெளிவான பட்டா.",
    },
    highlights: {
      en: [
        "Demarcated 10 numbered orchard plots (Plots 1 to 10)",
        "Direct blacktop road frontage on Thiruppuvanam - Narikudi Road",
        "100% documented clear computer patta and revenue records",
        "Ongoing running project with rapid capital appreciation",
      ],
      ta: [
        "10 இலக்கமிடப்பட்ட பிரத்யேக தோட்ட மனைகள் (மனைகள் 1 - 10)",
        "திருப்புவனம் - நரிக்குடி பிரதான சாலையில் நேரடி முகப்பு",
        "100% கணினி பட்டா மற்றும் வில்லங்கமற்ற ஆவணங்கள்",
        "வேகமாக வளர்ந்து வரும் மதிப்புமிக்க திட்டம்",
      ],
    },
    mapsUrl: "https://maps.google.com/?q=Thiruppuvanam+to+Narikudi+Road",
    specs: [
      { label: { en: "Total Plots", ta: "மொத்த மனைகள்" }, value: { en: "10 Demarcated Orchard Plots", ta: "10 பழத்தோட்ட மனைகள்" } },
      { label: { en: "Corridor", ta: "சாலை" }, value: { en: "Thiruppuvanam to Narikudi Road", ta: "திருப்புவனம் - நரிக்குடி சாலை" } },
      { label: { en: "Title Status", ta: "பட்டா நிலை" }, value: { en: "100% Documented Clear Titles", ta: "100% தெளிவான ஆவணங்கள்" } },
      { label: { en: "Blueprint", ta: "புளூபிரிண்ட்" }, value: { en: "Cadastral Layout Approved", ta: "கள வரைபடம் அங்கீகரிக்கப்பட்டது" } },
    ],
  },
];

// Video Folders for Gallery
const GALLERY_VIDEO_FOLDERS = [
  {
    id: "drone-reels",
    title: { en: "Aerial Drone Overview Reel", ta: "வான்வழி ட்ரோன் வீடியோக்கள்" },
    count: "3 Videos",
    thumbnail: "/images/hero/hero-gated-layout.jpg",
    videos: [
      { title: { en: "Madurai Outer Ring Road Corridor", ta: "மதுரை அவுட்டர் ரிங் ரோடு வழித்தடம்" }, duration: "1:45" },
      { title: { en: "Vaigai Highway Commercial Aerial", ta: "வைகை நெடுஞ்சாலை வணிக வான்பார்வை" }, duration: "2:10" },
      { title: { en: "Madurai Farms Agro Panorama", ta: "மதுரை பார்ம்ஸ் இயற்கை காட்சி" }, duration: "3:05" },
    ],
  },
  {
    id: "commercial-corridors",
    title: { en: "Commercial Corridors Tour", ta: "வணிக வழித்தட வீடியோக்கள்" },
    count: "2 Videos",
    thumbnail: "/images/generated/vaigai-elite-garden.jpg",
    videos: [
      { title: { en: "Vaigai Elite Garden Site Walkthrough", ta: "வைகை எலைட் கார்டன் நேரடி ஆய்வு" }, duration: "2:30" },
      { title: { en: "Anna Nagar Commercial Hub Elevation", ta: "அண்ணா நகர் வணிக கட்டிட பார்வை" }, duration: "1:55" },
    ],
  },
  {
    id: "farm-agro",
    title: { en: "Madurai Farms Agro Acreage", ta: "மதுரை பார்ம்ஸ் வேளாண் பண்ணை" },
    count: "2 Videos",
    thumbnail: "/images/projects/madurai-farms.jpg",
    videos: [
      { title: { en: "Managed Organic Drip Irrigation", ta: "சொட்டு நீர் பாசன அமைப்பு செயல்முறை" }, duration: "2:40" },
      { title: { en: "Weekend Farmhouse Living Tour", ta: "வார இறுதி பண்ணை வீடு வாழ்க்கை" }, duration: "3:15" },
    ],
  },
  {
    id: "orange-garden-reel",
    title: { en: "Orange Garden Orchard Walkthrough", ta: "ஆரஞ்ச் கார்டன் பழத்தோட்ட உலா" },
    count: "2 Videos",
    thumbnail: "/images/generated/orange-garden.jpg",
    videos: [
      { title: { en: "Thiruppuvanam Highway Entrance & Plots", ta: "திருப்புவனம் சாலை முகப்பு மற்றும் மனைகள்" }, duration: "2:15" },
      { title: { en: "Citrus Groves & Cadastral Boundary Stones", ta: "பழ மரங்கள் மற்றும் எல்லைக்கற்கள்" }, duration: "1:50" },
    ],
  },
  {
    id: "client-handover",
    title: { en: "Customer Testimonials & Patta Handover", ta: "வாடிக்கையாளர் கருத்துக்கள் & பட்டா வழங்கல்" },
    count: "3 Videos",
    thumbnail: "/images/founder/founder.png",
    videos: [
      { title: { en: "IAF Veteran Leadership - Buyer Trust", ta: "விமானப்படை அதிகாரியின் நேர்மையான சேவை" }, duration: "3:40" },
      { title: { en: "Immediate Registration Client Experience", ta: "உடனடி பத்திர பதிவு அனுபவம்" }, duration: "2:05" },
    ],
  },
];

// Image Folders for Gallery
const GALLERY_IMAGE_FOLDERS = [
  {
    id: "orange-garden-photos",
    title: { en: "Orange Garden Orchard & Blueprint", ta: "ஆரஞ்ச் கார்டன் & புளூபிரிண்ட்" },
    count: "6 Photos",
    thumbnail: "/images/generated/orange-garden.jpg",
    images: [
      "/images/generated/orange-garden.jpg",
      "/images/projects/orange-garden/layout-blueprint.jpg",
      "/images/projects/orange-garden/entrance-gate.jpg",
      "/images/projects/orange-garden/hero-orchard.jpg",
      "/images/projects/orange-garden/demarcated-plots.jpg",
      "/images/projects/orange-garden/farmhouse-cottage.jpg",
    ],
  },
  {
    id: "vaigai-photos",
    title: { en: "Vaigai Elite Highway & Ring Road", ta: "வைகை எலைட் & ரிங் ரோடு" },
    count: "4 Photos",
    thumbnail: "/images/generated/vaigai-elite-garden.jpg",
    images: [
      "/images/generated/vaigai-elite-garden.jpg",
      "/images/generated/vaigai-river-build.jpg",
      "/images/generated/pandi-kovil-site.jpg",
      "/images/projects/vaigai/corridor-aerial.jpg",
    ],
  },
  {
    id: "farms-photos",
    title: { en: "Madurai Farms Agro Acreage", ta: "மதுரை பார்ம்ஸ் வேளாண் நிலங்கள்" },
    count: "6 Photos",
    thumbnail: "/images/projects/madurai-farms.jpg",
    images: [
      "/images/projects/madurai-farms.jpg",
      "/images/projects/madurai-farms/panoramic-view.jpg",
      "/images/projects/madurai-farms/entrance-gate.jpg",
      "/images/projects/madurai-farms/concrete-pathway.jpg",
      "/images/projects/madurai-farms/aerial-grove.jpg",
      "/images/projects/madurai-farms/water-reservoir.jpg",
    ],
  },
  {
    id: "residential-photos",
    title: { en: "Residential Flats & Villa Plots", ta: "குடியிருப்பு அடுக்குமாடி & மனைப்பிரிவுகள்" },
    count: "4 Photos",
    thumbnail: "/images/generated/residential-flat.jpg",
    images: [
      "/images/generated/residential-flat.jpg",
      "/images/generated/residential-plot.jpg",
      "/images/hero/hero-house.jpg",
      "/images/projects/surya-green-enclave.jpg",
    ],
  },
  {
    id: "commercial-photos",
    title: { en: "Anna Nagar & Educational Belts", ta: "அண்ணா நகர் & கல்வி நிறுவன வளாகங்கள்" },
    count: "4 Photos",
    thumbnail: "/images/generated/commercial-anna-nagar.jpg",
    images: [
      "/images/generated/commercial-anna-nagar.jpg",
      "/images/generated/mayilan-gundu-site.jpg",
      "/images/projects/vaigai-commercial.jpg",
      "/images/gallery/gallery-2.jpg",
    ],
  },
];

// Downloads Hub Items
const DOWNLOAD_ITEMS = [
  {
    id: "mapbhoomi-cadastral-portal",
    title: { en: "Mapbhoomi Interactive 3D Cadastral Layout Portal", ta: "Mapbhoomi நேரடி 3D மனை வரைபட தளம்" },
    category: { en: "Interactive Cadastral Layouts", ta: "நேரடி மனை வரைபடம்" },
    fileType: "Live 3D / Web App",
    fileSize: "Live Online",
    downloadUrl: "https://mapbhoomi.com/l/surya-promoters",
    badge: "Official Surya Promoters Hub",
  },
  {
    id: "orange-garden-map",
    title: { en: "Orange Garden Cadastral Layout Map", ta: "ஆரஞ்ச் கார்டன் கள வரைபடம் (புளூபிரிண்ட்)" },
    category: { en: "Cadastral Layout Blueprint", ta: "கள வரைபடம்" },
    fileType: "JPG / Blueprint",
    fileSize: "27.6 KB",
    downloadUrl: "/images/projects/orange-garden/layout-blueprint.jpg",
    badge: "Plots 1 to 10 Demarcated",
  },
  {
    id: "vaigai-elite-plan",
    title: { en: "Vaigai Elite Commercial Highway Masterplan", ta: "வைகை எலைட் வணிக வரைபடம்" },
    category: { en: "Commercial Masterplan", ta: "வணிக வரைபடம்" },
    fileType: "PDF / Plan",
    fileSize: "3.4 MB",
    downloadUrl: "/images/generated/vaigai-elite-garden.jpg",
    badge: "NH-44 Multi-Axle Frontage",
  },
  {
    id: "surya-green-enclave-map",
    title: { en: "Surya Green Enclave DTCP Layout Map", ta: "சூர்யா கிரீன் என்கிளேவ் DTCP வரைபடம்" },
    category: { en: "DTCP Layout Map", ta: "DTCP வரைபடம்" },
    fileType: "PDF / Cadastral",
    fileSize: "36.8 KB",
    downloadUrl: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
    badge: "DTCP Approved",
  },
  {
    id: "madurai-farms-map",
    title: { en: "Madurai Farms Managed Agro Estate Map", ta: "மதுரை பார்ம்ஸ் வேளாண் பண்ணை வரைபடம்" },
    category: { en: "Agro Estate Layout", ta: "வேளாண் வரைபடம்" },
    fileType: "PDF / Layout",
    fileSize: "2.1 MB",
    downloadUrl: "/images/projects/madurai-farms.jpg",
    badge: "Drip Irrigation Layout",
  },
  {
    id: "portfolio-brochure",
    title: { en: "Surya Promoters 2026 Complete Portfolio Brochure", ta: "சூர்யா புரமோட்டர்ஸ் 2026 முழு திட்ட கையேடு" },
    category: { en: "Company Brochure", ta: "முழு கையேடு" },
    fileType: "PDF / Document",
    fileSize: "6.8 MB",
    downloadUrl: "/images/hero-poster.jpg",
    badge: "All 9 Developments",
  },
  {
    id: "drone-video-pack",
    title: { en: "HD Aerial Video & Drone Footage Reel", ta: "HD ட்ரோன் வீடியோ தொகுப்பு" },
    category: { en: "Video Reel", ta: "வீடியோ தொகுப்பு" },
    fileType: "MP4 / HD Video",
    fileSize: "42.5 MB",
    downloadUrl: "/images/hero/hero-gated-layout.jpg",
    badge: "4K Aerial Reel",
  },
];

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();

  // Navigation State: Which of the 5 Main Icons / Sections is Active
  // 'home' | 'projects' | 'location' | 'gallery' | 'about' | 'download'
  const [activeTab, setActiveTab] = useState<"home" | "projects" | "location" | "gallery" | "about" | "download" | "contact">("home");

  // In "Our Projects": Which Category is Active ('residential' | 'commercial' | 'farm')
  const [activeCategory, setActiveCategory] = useState<"residential" | "commercial" | "farm" | null>(null);

  // Search input query
  const [searchQuery, setSearchQuery] = useState("");

  // Modals & Popups
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(null);
  const [selectedFolderImages, setSelectedFolderImages] = useState<{ title: string; images: string[] } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; duration: string } | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Lock body & background scrolling whenever any modal popup is open
  useEffect(() => {
    const isAnyModalOpen = Boolean(selectedProject || selectedFolderImages || selectedVideo || isEnquiryModalOpen);
    if (isAnyModalOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [selectedProject, selectedFolderImages, selectedVideo, isEnquiryModalOpen]);

  // Project Details Modal interactive media & tab states
  const [modalActiveImage, setModalActiveImage] = useState<string | null>(null);
  const [modalMediaMode, setModalMediaMode] = useState<"photos" | "video">("photos");
  const [modalSectionTab, setModalSectionTab] = useState<"overview" | "locality" | "valuation" | "reviews">("overview");

  useEffect(() => {
    if (selectedProject) {
      setModalActiveImage(selectedProject.image);
      setModalMediaMode("photos");
      setModalSectionTab("overview");
    }
  }, [selectedProject]);

  // Filter projects inside active category
  const activeCategoryProjects = activeCategory
    ? ALL_PROJECTS.filter((p) => {
        const matchesCategory = p.category === activeCategory;
        const matchesSearch =
          searchQuery.trim() === "" ||
          p.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.name.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.en.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : [];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0A0D12] font-sans antialiased flex flex-col selection:bg-[#EAB308] selection:text-[#0A0D12]">
      
      {/* ------------------------------------------------------------------------- */}
      {/* 1. TOP APP STORE WINDOW HEADER (Search & Quick Controls)                  */}
      {/* ------------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs select-none">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Left Brand Identity: "S" Logo + Surya Promoters */}
          <Link href="/" className="flex items-center  gap-1.5 sm:gap-2  shrink-0 group">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/surya-gold-logo.png"
                alt="Surya Promoters Logo"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>
            <div className="flex items-center -ml-2 sm:-ml-2.5">
              <span className="font-black text-lg sm:text-xl text-[#0A0D12] group-hover:text-[#B45309] transition-colors leading-none flex items-center">
                <span className="tracking-tighter">URYA</span>
                <span className="ml-1.5 font-extrabold text-[#0A0D12] tracking-tight">PROMOTERS</span>
              </span>
              <span className="hidden sm:inline-flex ml-2 px-1.5 py-0.5 rounded-md text-[9px] font-black bg-[#FEF08A] text-[#854D0E] border border-amber-300 whitespace-nowrap">
                ESTD. 2010
              </span>
            </div>
          </Link>

          {/* Center: Search Bar (Microsoft Store Window Search) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "ta"
                  ? "திட்டங்கள், இடங்கள், வணிக நிலங்களைத் தேடுங்கள்..."
                  : "Search projects, locations, farm land, and more..."
              }
              className="w-full pl-10 pr-9 py-2 bg-neutral-100 hover:bg-neutral-100/80 focus:bg-white text-xs font-semibold text-neutral-800 placeholder-neutral-400 rounded-xl border border-neutral-200 focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 outline-hidden transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-neutral-400 hover:text-black cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Right: Quick Controls, Language Switch & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-xs">
            
            {/* IAF Veteran Trust Seal */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#854D0E] font-bold">
              <ShieldCheck className="h-3.5 w-3.5 text-[#B45309]" />
              <span>16+ Yrs IAF Vet</span>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[#0A0D12] font-bold border border-neutral-200 transition-colors cursor-pointer"
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20Madurai%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-all shadow-xs cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Call Now */}
            <a
              href="tel:+917708966452"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-[#EAB308] font-bold transition-all shadow-xs cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 text-[#EAB308]" />
              <span className="hidden xs:inline">+91 77089 66452</span>
            </a>
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------------------- */}
      {/* 2. MAIN APPLICATION STORE BODY (Left Vertical Nav + Content Window)       */}
      {/* ------------------------------------------------------------------------- */}
      <div className="flex-1 flex max-w-[1760px] w-full mx-auto overflow-hidden">
        
        {/* LEFT VERTICAL APP STORE NAVIGATION BAR (Like Microsoft Store Left Rail - Desktop Only) */}
        <aside className="hidden md:flex md:w-56 shrink-0 bg-[#FFFFFF] border-r border-[#E5E7EB] flex-col justify-between py-4 select-none">
          <div className="space-y-1.5 px-2">
            
            {/* Nav Item: Home */}
            <button
              onClick={() => setActiveTab("home")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "home"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "home" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <Home className={`h-5 w-5 shrink-0 ${activeTab === "home" ? "text-[#EAB308]" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "முகப்பு" : "Store Home"}
              </span>
            </button>

            {/* Nav Item: Our Projects */}
            <button
              onClick={() => {
                setActiveTab(activeTab === "projects" ? "home" : "projects");
                setActiveCategory(null);
              }}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "projects"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "projects" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <Building2 className={`h-5 w-5 shrink-0 ${activeTab === "projects" ? "text-[#B45309]" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "திட்டங்கள்" : "Our Projects"}
              </span>
            </button>

            {/* Nav Item: Site Location */}
            <button
              onClick={() => setActiveTab(activeTab === "location" ? "home" : "location")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "location"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "location" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <MapPin className={`h-5 w-5 shrink-0 ${activeTab === "location" ? "text-blue-600" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "தள அமைவிடம்" : "Site Location"}
              </span>
            </button>

            {/* Nav Item: Gallery */}
            <button
              onClick={() => setActiveTab(activeTab === "gallery" ? "home" : "gallery")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "gallery"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "gallery" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <Camera className={`h-5 w-5 shrink-0 ${activeTab === "gallery" ? "text-purple-600" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "புகைப்படங்கள் & வீடியோ" : "Gallery Folders"}
              </span>
            </button>

            {/* Nav Item: About Company */}
            <button
              onClick={() => setActiveTab(activeTab === "about" ? "home" : "about")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "about"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "about" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <ShieldCheck className={`h-5 w-5 shrink-0 ${activeTab === "about" ? "text-emerald-700" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "நிறுவனம் பற்றி" : "About Company"}
              </span>
            </button>

            {/* Nav Item: Download Layout */}
            <button
              onClick={() => setActiveTab(activeTab === "download" ? "home" : "download")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "download"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "download" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}


              <Download className={`h-5 w-5 shrink-0 ${activeTab === "download" ? "text-amber-700" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "வரைபடம் பதிவிறக்கம்" : "Download Layout"}
              </span>
            </button>

            {/* Nav Item: Contact */}
            <button
              onClick={() => setActiveTab(activeTab === "contact" ? "home" : "contact")}
              className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer relative ${
                activeTab === "contact"
                  ? "bg-neutral-100 text-[#0A0D12] font-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 font-semibold"
              }`}
            >
              {activeTab === "contact" && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-md bg-[#EAB308]" />
              )}
              <PhoneCall className={`h-5 w-5 shrink-0 ${activeTab === "contact" ? "text-[#B45309]" : "text-neutral-500"}`} />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "நேரடி தொடர்பு" : "Contact Us"}
              </span>
            </button>

          </div>

          {/* Bottom Rail: Direct Communication Link */}
          <div className="px-2 pt-3 border-t border-neutral-100 space-y-1">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="w-full flex items-center gap-3 p-2.5 rounded-xl text-left text-neutral-700 hover:bg-amber-50 hover:text-[#B45309] transition-colors cursor-pointer font-bold"
            >
              <PhoneCall className="h-5 w-5 text-[#B45309] shrink-0" />
              <span className="hidden md:inline text-xs truncate">
                {language === "ta" ? "நேரடி தொடர்பு" : "Direct Contact"}
              </span>
            </button>
          </div>
        </aside>

        {/* MAIN STORE CONTENT CANVAS */}
        <main className="flex-1 overflow-y-auto p-3.5 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 pb-28 md:pb-8">
          
          {/* =================================================================== */}
          {/* 1. STORE HOME SCREEN (Visible ONLY when activeTab === "home")        */}
          {/* =================================================================== */}
          {activeTab === "home" && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
          =

          {/* ------------------------------------------------------------------- */}
          {/* THE 6 MAIN APP-STORE ICONS (Apps we think you'll love row)           */}
          {/* ------------------------------------------------------------------- */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-lg font-black text-neutral-900 flex items-center gap-1.5">
                <span>{language === "ta" ? "பிரதான சேவைகள் & அம்சங்கள்" : "Explore Surya Promoters (6 Main Icons)"}</span>
                <ChevronRight className="h-4 w-4 text-neutral-400 shrink-0" />
              </h2>
            </div>

            {/* The 6 Rounded Squircle App Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
              
              {/* App Tile 1: Our Projects */}
              <button
                onClick={() => {
                  setActiveTab("projects");
                  setActiveCategory(null);
                }}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-[#EAB308]/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-amber-50 text-[#B45309] border border-amber-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-[#FEF08A] text-[#854D0E]">
                    3 Types
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-[#B45309] transition-colors">
                    {language === "ta" ? "எங்கள் திட்டங்கள்" : "Our Projects"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "3 பிரிவுகள் · 9 தளங்கள்" : "Residential, Commercial & Farm"}
                  </p>
                </div>
              </button>

              {/* App Tile 2: Site Location */}
              <button
                onClick={() => setActiveTab("location")}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-blue-400/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-blue-100 text-blue-700">
                    GPS Live
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {language === "ta" ? "தள அமைவிடம்" : "Site Location"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "கூகிள் மேப்ஸ் & 3D வரைபடங்கள்" : "3D Cadastral & GPS Maps"}
                  </p>
                </div>
              </button>

              {/* App Tile 3: Gallery */}
              <button
                onClick={() => setActiveTab("gallery")}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-purple-400/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-purple-100 text-purple-700">
                    HD Media
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-purple-600 transition-colors">
                    {language === "ta" ? "புகைப்படங்கள் & வீடியோ" : "Gallery"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "கோப்பு முறை மையம்" : "Videos & Photos Folders"}
                  </p>
                </div>
              </button>

              {/* App Tile 4: About Company */}
              <button
                onClick={() => setActiveTab("about")}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-emerald-500/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-emerald-100 text-emerald-800">
                    IAF Vet
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-emerald-700 transition-colors">
                    {language === "ta" ? "நிறுவனம் பற்றி" : "About Company"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "நிறுவனர் & 16+ வரலாறு" : "Founder & 16+ Yrs Legacy"}
                  </p>
                </div>
              </button>

              {/* App Tile 5: Download Layout */}
              <button
                onClick={() => setActiveTab("download")}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-amber-500/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-amber-100 text-amber-800">
                    PDF Hub
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {language === "ta" ? "வரைபடம் பதிவிறக்கம்" : "Download Layout"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "புளூபிரிண்ட், வரைபடம், கையேடுகள்" : "Blueprints, Layouts & PDFs"}
                  </p>
                </div>
              </button>

              {/* App Tile 6: Contact Us */}
              <button
                onClick={() => setActiveTab("contact")}
                className="p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-[#FFFFFF] hover:bg-neutral-50 border-neutral-200/80 shadow-xs hover:border-[#EAB308]/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="h-11 w-11 sm:h-13 sm:w-13 rounded-2xl bg-amber-50 text-[#B45309] border border-[#EAB308] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-[#FEF08A] text-[#854D0E]">
                    24/7 Live
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm text-neutral-900 group-hover:text-[#B45309] transition-colors">
                    {language === "ta" ? "நேரடி தொடர்பு" : "Contact Us"}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 line-clamp-1">
                    {language === "ta" ? "அழைப்பு, வாட்ஸ்அப் & அலுவலகம்" : "Phone, WhatsApp & Office"}
                  </p>
                </div>
              </button>

            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* =================================================================== */}
      {/* 2. TAB 1: OUR PROJECTS (Screen Changes Completely: Categories vs Cards) */}
      {/* =================================================================== */}
      {activeTab === "projects" && (
        <section className="space-y-6 animate-fadeIn pt-1">
          {activeCategory === null ? (
            /* ----------------------------------------------------------------- */
            /* SCREEN A: 3 CATEGORY SELECTION CARDS ONLY (No project cards below) */
            /* ----------------------------------------------------------------- */
            <div className="space-y-6">
              {/* Back to Home & Section Title Header */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-xs"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-neutral-900 leading-tight">
                      {language === "ta" ? "எங்கள் திட்டங்கள் (3 முக்கிய பிரிவுகள்)" : "Our Projects (3 Main Categories)"}
                    </h3>
                    <p className="text-[11px] text-neutral-500 hidden sm:block">
                      {language === "ta" ? "பிரிவை கிளிக் செய்து அந்த பிரிவின் திட்டங்களை தனி பக்கத்தில் காண்க" : "Click any category below to navigate to its dedicated project cards"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-2 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section and return to Home"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 3 Categories Main Hub Box */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200/80 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#B45309] tracking-wider block mb-0.5">
                      {language === "ta" ? "படி 1: திட்ட பிரிவை தேர்ந்தெடுக்கவும்" : "Step 1: Choose Property Category"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
                      {language === "ta" ? "3 பிரிவுகள் (Residential · Commercial · Farm Land)" : "Our 3 Property Categories"}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {language === "ta" ? "கீழே உள்ள பிரிவை கிளிக் செய்யவும் — திட்டங்கள் புதிய பக்கத்தில் திறக்கும்" : "Click a category card to open that category's dedicated project page"}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3.5 py-1.5 rounded-full w-fit">
                    9 Total Developments
                  </span>
                </div>

                {/* 3 Categories Box / Icons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category 1: Residential plot / flat project */}
                  <button
                    onClick={() => setActiveCategory("residential")}
                    className="p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden bg-white hover:bg-amber-50/40 text-neutral-900 border-neutral-200 shadow-xs hover:shadow-lg hover:border-[#EAB308] hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-xs bg-amber-50 text-[#B45309] border border-amber-200">
                        <Home className="h-7 w-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-[#B45309]">
                        2 Projects
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest block text-neutral-400 mb-1">
                        Category 01
                      </span>
                      <h4 className="text-base sm:text-lg font-black leading-snug group-hover:text-[#B45309] transition-colors">
                        {language === "ta" ? "1. குடியிருப்பு பிளாட் / அடுக்குமாடி" : "1. Residential Plot / Flat Project"}
                      </h4>
                      <p className="text-xs mt-1.5 leading-relaxed text-neutral-500">
                        {language === "ta" ? "Flat Project & Plot Project (2 Cards)" : "Flat Project & Plot Project Cards (2 Sites)"}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#B45309]">
                      <span>{language === "ta" ? "கார்டுகளை காண கிளிக் செய்க" : "Click to View Cards"}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>

                  {/* Category 2: Commercial building / land project */}
                  <button
                    onClick={() => setActiveCategory("commercial")}
                    className="p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden bg-white hover:bg-blue-50/40 text-neutral-900 border-neutral-200 shadow-xs hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-xs bg-blue-50 text-blue-600 border border-blue-200">
                        <Briefcase className="h-7 w-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-700">
                        5 Projects
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest block text-neutral-400 mb-1">
                        Category 02
                      </span>
                      <h4 className="text-base sm:text-lg font-black leading-snug group-hover:text-blue-700 transition-colors">
                        {language === "ta" ? "2. வணிக கட்டிடம் / நிலம்" : "2. Commercial Building / Land Project"}
                      </h4>
                      <p className="text-xs mt-1.5 leading-relaxed text-neutral-500">
                        {language === "ta" ? "NH-44 & ரிங் ரோடு வணிக நிலங்கள் (5 Cards)" : "NH-44, Ring Road & Buildings (5 Cards)"}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>{language === "ta" ? "கார்டுகளை காண கிளிக் செய்க" : "Click to View Cards"}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>

                  {/* Category 3: Farm land project */}
                  <button
                    onClick={() => setActiveCategory("farm")}
                    className="p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden bg-white hover:bg-emerald-50/40 text-neutral-900 border-neutral-200 shadow-xs hover:shadow-lg hover:border-emerald-400 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Trees className="h-7 w-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                        2 Projects
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest block text-neutral-400 mb-1">
                        Category 03
                      </span>
                      <h4 className="text-base sm:text-lg font-black leading-snug group-hover:text-emerald-800 transition-colors">
                        {language === "ta" ? "3. பண்ணை நில திட்டங்கள்" : "3. Farm Land Project"}
                      </h4>
                      <p className="text-xs mt-1.5 leading-relaxed text-neutral-500">
                        {language === "ta" ? "மதுரை பார்ம்ஸ் & ஆரஞ்சு கார்டன் (2 Cards)" : "Madurai Farms & Orange Garden (2 Cards)"}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>{language === "ta" ? "கார்டுகளை காண கிளிக் செய்க" : "Click to View Cards"}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
               </div>

                {/* Direct Contact strip */}
                <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-700">{language === "ta" ? "நேரடி ஆலோசனை:" : "Direct Assistance:"}</span>
                    <a href="tel:+917708966452" className="font-mono font-bold text-neutral-900 hover:text-[#B45309]">
                      +91 77089 66452
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ----------------------------------------------------------------- */
            /* SCREEN B: DEDICATED CATEGORY PROJECTS VIEW (Cards ONLY, no hub)   */
            /* ----------------------------------------------------------------- */
            <div className="space-y-6">
              {/* Back to Categories Navigation Header */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  {/* Back to Categories Button */}
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white text-xs sm:text-sm font-black transition-all hover:scale-105 cursor-pointer shadow-md"
                  >
                    <ArrowLeft className="h-4 w-4 text-[#EAB308]" />
                    <span>{language === "ta" ? "3 பிரிவுகளுக்கு திரும்புக" : "Back to Categories"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("home");
                      setActiveCategory(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Home className="h-3.5 w-3.5" />
                    <span>{language === "ta" ? "முகப்பு" : "Home"}</span>
                  </button>

                  <div className="h-4 w-px bg-neutral-200 hidden md:block" />

                  {/* Breadcrumb */}
                  <div className="text-xs text-neutral-500 font-medium hidden sm:flex items-center gap-1.5">
                    <span>Our Projects</span>
                    <span>/</span>
                    <span className="font-bold text-neutral-900">
                      {activeCategory === "residential" && (language === "ta" ? "1. குடியிருப்பு" : "1. Residential")}
                      {activeCategory === "commercial" && (language === "ta" ? "2. வணிகம்" : "2. Commercial")}
                      {activeCategory === "farm" && (language === "ta" ? "3. பண்ணை நிலம்" : "3. Farm Land")}
                    </span>
                  </div>
                </div>

                {/* Category Switcher Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setActiveCategory("residential")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeCategory === "residential"
                        ? "bg-[#0A0D12] text-[#EAB308] shadow-xs font-black ring-1 ring-[#EAB308]"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    1. Residential (2)
                  </button>
                  <button
                    onClick={() => setActiveCategory("commercial")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeCategory === "commercial"
                        ? "bg-[#0A0D12] text-[#EAB308] shadow-xs font-black ring-1 ring-[#EAB308]"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    2. Commercial (5)
                  </button>
                  <button
                    onClick={() => setActiveCategory("farm")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeCategory === "farm"
                        ? "bg-[#0A0D12] text-[#EAB308] shadow-xs font-black ring-1 ring-[#EAB308]"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    3. Farm Land (2)
                  </button>
                </div>
              </div>

              {/* Category Page Title Banner */}
              <div className="bg-gradient-to-r from-[#0A0D12] via-[#111827] to-[#1F2937] text-white rounded-3xl p-5 sm:p-7 shadow-lg border border-neutral-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#EAB308] text-xs font-bold mb-2">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>
                        {activeCategory === "residential" && (language === "ta" ? "பிரிவு 01: குடியிருப்பு திட்டங்கள்" : "Category 01: Residential Projects")}
                        {activeCategory === "commercial" && (language === "ta" ? "பிரிவு 02: வணிக பெருநிலங்கள் & கட்டிடங்கள்" : "Category 02: Commercial Projects")}
                        {activeCategory === "farm" && (language === "ta" ? "பிரிவு 03: பண்ணை நிலங்கள் & எஸ்டேட்கள்" : "Category 03: Farm Land Projects")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {activeCategory === "residential" && (language === "ta" ? "குடியிருப்பு பிளாட் / அடுக்குமாடி திட்டங்கள்" : "Residential Plot & Flat Projects")}
                      {activeCategory === "commercial" && (language === "ta" ? "வணிக கட்டிடம் & நெடுஞ்சாலை நிலங்கள்" : "Commercial Building & Highway Land Projects")}
                      {activeCategory === "farm" && (language === "ta" ? "இயற்கை பண்ணை நிலங்கள் & ஆரஞ்சு கார்டன்" : "Farm Land & Orange Garden Projects")}
                    </h3>
                    {/* <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                      {activeCategory === "residential" && (language === "ta" ? "அடுக்குமாடி குடியிருப்பு & வீட்டு மனைப்பிரிவுகள் — 100% கம்ப்யூட்டர் பட்டா மற்றும் உடனடி பத்திரப்பதிவு." : "Contemporary luxury flat apartments and ready-to-build villa plotted layouts with 100% verified computer patta.")}
                      {activeCategory === "commercial" && (language === "ta" ? "NH-44 & ரிங் ரோடு வணிக நிலங்கள், மருத்துவமனை, கிடங்கு, கல்லூரிகளுக்கு ஏற்ற பிரதான இடங்கள்." : "High-exposure commercial land parcels along NH-44, Madurai Outer Ring Road, and city commercial buildings.")}
                      {activeCategory === "farm" && (language === "ta" ? "சுத்தமான நிலத்தடி நீருடன் கூடிய இயற்கை விவசாய பண்ணை எஸ்டேட்கள் மற்றும் ஆரஞ்சு கார்டன்." : "Managed agro farm acreage, orchard estates, and fertile farmland with sweet potable water table.")}
                    </p> */}
                  </div>
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-1 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
                    <span className="text-2xl font-black text-[#EAB308]">{activeCategoryProjects.length}</span>
                    <span className="text-xs text-neutral-400 font-semibold">{language === "ta" ? "திட்டங்கள் உள்ளன" : "Verified Projects"}</span>
                  </div>
                </div>
              </div>

              {/* Cards Grid for activeCategory */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${activeCategoryProjects.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-5`}>
                {activeCategoryProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-xl hover:border-[#EAB308]/60 transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    {/* Card Thumbnail */}
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={project.image}
                        alt={project.name.en}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0A0D12]/90 text-[#EAB308] border border-[#EAB308]/40 pointer-events-none">
                        {project.statusBadge[language]}
                      </div>

                      <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                        {project.mapbhoomiUrl && (
                          <a
                            href={project.mapbhoomiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-2.5 py-0.5 rounded-full text-[9px] font-black bg-[#0A0D12]/95 hover:bg-[#EAB308] text-[#EAB308] hover:text-[#0A0D12] border border-[#EAB308]/60 flex items-center gap-1 shadow-md transition-all hover:scale-105 cursor-pointer pointer-events-auto"
                            title="Open map on Mapbhoomi"
                          >
                            <Compass className="h-3 w-3" />
                            <span>Mapbhoomi ↗</span>
                          </a>
                        )}
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-white/90 text-[#0A0D12] pointer-events-none">
                          {project.subcategoryLabel[language]}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                        <h3 className="text-base font-black leading-tight drop-shadow-md group-hover:text-[#EAB308] transition-colors">
                          {project.name[language]}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-300 mt-0.5">
                          <MapPin className="h-3 w-3 text-[#EAB308] shrink-0" />
                          <span className="line-clamp-1">{project.location[language]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
                          {project.description[language]}
                        </p>

                        <div className="space-y-1 mb-4 pb-3 border-b border-neutral-100">
                          {project.highlights[language].slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-700 font-medium">
                              <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-neutral-100 group-hover:bg-[#0A0D12] text-neutral-900 group-hover:text-white text-xs font-bold transition-all text-center cursor-pointer"
                          >
                            {language === "ta" ? "முழு விவரம்" : "Project Details"}
                          </button>

                          <a
                            href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20want%20details%20for%20${encodeURIComponent(
                              project.name.en
                            )}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full py-2 px-3 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>{language === "ta" ? "விசாரிக்க" : "Enquire"}</span>
                          </a>
                        </div>

                        {/* Direct Mapbhoomi Layout Button */}
                        {project.mapbhoomiUrl && (
                          <a
                            href={project.mapbhoomiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full py-2 px-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-[#EAB308] hover:text-white border border-[#EAB308]/50 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm group/mb cursor-pointer"
                          >
                            <Compass className="h-3.5 w-3.5 text-[#EAB308] group-hover/mb:rotate-45 transition-transform shrink-0" />
                            <span>{language === "ta" ? "Mapbhoomi வரைபடம் (Open map ↗)" : "Open map (Mapbhoomi) ↗"}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Back Button */}
              <div className="flex items-center justify-center pt-4 pb-2">
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 shadow-sm hover:shadow-md text-xs sm:text-sm font-bold transition-all cursor-pointer hover:border-[#EAB308]"
                >
                  <ArrowLeft className="h-4 w-4 text-[#B45309]" />
                  <span>{language === "ta" ? "← அனைத்து 3 பிரிவுகளுக்கும் திரும்புக" : "← Back to All 3 Categories"}</span>
                </button>
              </div>
            </div>
          )}
        </section>
      )}

          {/* ------------------------------------------------------------------- */}
          {/* TAB 2: LOCATION (All Project Maps in Card Style)                    */}
          {/* ------------------------------------------------------------------- */}
          {activeTab === "location" && (
            <section className="space-y-5 animate-fadeIn pt-1">
              {/* Back to Home Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <h3 className="text-sm font-black text-neutral-900 leading-tight">
                    {language === "ta" ? "திட்டங்களின் அமைவிடம் (Google Maps)" : "All Project Map Locations (Google Maps)"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-1.5 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider block mb-1">
                    Geolocation & Mapbhoomi Hub
                  </span>
                  <h3 className="text-xl font-black text-neutral-900 mb-1">
                    {language === "ta" ? "அனைத்து திட்டங்களின் அமைவிடம் & Mapbhoomi" : "All Project Map Locations & Mapbhoomi"}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    {language === "ta"
                      ? "மதுரையின் முக்கிய தேசிய நெடுஞ்சாலைகள், ரிங் ரோடு மற்றும் Mapbhoomi நேரடி மனை வரைபடங்களை பார்வையிடவும்."
                      : "Directly navigate to each development along Madurai's NH-44, Ring Road, and interactive Mapbhoomi 3D cadastral layouts."}
                  </p>
                </div>
                <a
                  href="https://mapbhoomi.com/l/surya-promoters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0A0D12] text-[#EAB308] hover:bg-neutral-800 text-xs font-black transition-all border border-[#EAB308]/40 shadow-md shrink-0 w-fit"
                >
                  <Compass className="h-4 w-4 text-[#EAB308]" />
                  <span>{language === "ta" ? "Mapbhoomi நேரடி தளம் ↗" : "Surya Promoters on Mapbhoomi ↗"}</span>
                </a>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ALL_PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-3xl p-4 border border-neutral-200 shadow-xs hover:shadow-md hover:border-[#EAB308]/60 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative h-13 w-13 rounded-xl overflow-hidden shrink-0 border border-neutral-200">
                          <Image
                            src={project.image}
                            alt={project.name.en}
                            fill
                            sizes="52px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <span className="px-2 py-0.2 rounded-md text-[9px] font-black uppercase bg-blue-50 text-blue-700">
                            {project.categoryLabel[language]}
                          </span>
                          <h4 className="font-black text-neutral-900 group-hover:text-[#B45309] text-sm mt-0.5 leading-snug transition-colors">
                            {project.name[language]}
                          </h4>
                        </div>
                      </div>

                      <div className="bg-neutral-50 rounded-xl p-3 mb-3 border border-neutral-100 space-y-1.5 text-xs">
                        <div className="flex items-start gap-1.5 text-neutral-700">
                          <MapPin className="h-3.5 w-3.5 text-[#B45309] shrink-0 mt-0.5" />
                          <span className="font-semibold">{project.location[language]}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-[11px] text-neutral-500">
                          <Navigation className="h-3 w-3 text-blue-600 shrink-0 mt-0.5" />
                          <span>{project.distanceInfo[language]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {project.mapbhoomiUrl && (
                        <a
                          href={project.mapbhoomiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2 px-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-[#EAB308] border border-[#EAB308]/40 text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Compass className="h-3.5 w-3.5 text-[#EAB308]" />
                          <span>{language === "ta" ? "Mapbhoomi நேரடி வரைபடம் ↗" : "Open Mapbhoomi Cadastral ↗"}</span>
                        </a>
                      )}

                      <a
                        href={project.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Navigation className="h-3 w-3" />
                        <span>{language === "ta" ? "கூகிள் மேப்ஸில் திறக்க" : "Open in Google Maps"}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="w-full py-1.5 px-3 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white text-neutral-800 text-xs font-bold transition-all text-center cursor-pointer"
                      >
                        {language === "ta" ? "திட்டத்தின் குறிப்புகள்" : "View Overview"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ------------------------------------------------------------------- */}
          {/* TAB 3: GALLERY (Videos and Images in Folder Style)                  */}
          {/* ------------------------------------------------------------------- */}
          {activeTab === "gallery" && (
            <section className="space-y-6 animate-fadeIn pt-1">
              {/* Back to Home Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <h3 className="text-sm font-black text-neutral-900 leading-tight">
                    {language === "ta" ? "புகைப்படங்கள் & வீடியோ (Folder Style Gallery)" : "Photo & Video Gallery (Folder Style)"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-1.5 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-xs">
                <span className="text-[10px] font-black uppercase text-purple-600 tracking-wider block mb-1">
                  Multimedia Center
                </span>
                <h3 className="text-xl font-black text-neutral-900 mb-1">
                  {language === "ta" ? "கோப்பு முறை புகைப்பட & வீடியோ மையம்" : "Folder-Style Media Gallery"}
                </h3>
                <p className="text-xs text-neutral-600">
                  {language === "ta"
                    ? "ட்ரோன் வீடியோக்கள் மற்றும் தள புகைப்படங்கள் கோப்பு வடிவில் ஏற்பாடு செய்யப்பட்டுள்ளன."
                    : "4K aerial drone videos and high-resolution site photos organized by project folders."}
                </p>
              </div>

              {/* Videos Folders */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-purple-600" />
                  <h4 className="text-sm font-black text-neutral-900">
                    {language === "ta" ? "1. வீடியோ கோப்புகள் (Folder Style)" : "1. Video Folders (Folder Style)"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {GALLERY_VIDEO_FOLDERS.map((folder) => (
                    <div
                      key={folder.id}
                      className="bg-white rounded-3xl p-4 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 text-purple-700 text-[10px] font-bold border border-purple-200 flex items-center gap-1">
                            <Folder className="h-3 w-3 fill-purple-700" />
                            {folder.count}
                          </span>
                          <span className="text-[10px] font-bold text-neutral-400">4K Reel</span>
                        </div>

                        <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-3 bg-neutral-900 group">
                          <Image
                            src={folder.thumbnail}
                            alt={folder.title.en}
                            fill
                            sizes="300px"
                            className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="h-10 w-10 rounded-full bg-white text-purple-700 flex items-center justify-center shadow-md">
                              <Play className="h-4 w-4 fill-purple-700 ml-0.5" />
                            </div>
                          </div>
                        </div>

                        <h5 className="font-extrabold text-neutral-900 text-sm mb-2">{folder.title[language]}</h5>

                        <div className="space-y-1 mb-3">
                          {folder.videos.map((vid, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedVideo({ title: vid.title[language], duration: vid.duration })}
                              className="w-full text-left flex items-center justify-between p-1.5 rounded-lg hover:bg-neutral-50 text-[11px] text-neutral-700 cursor-pointer"
                            >
                              <span className="font-semibold truncate">▶ {vid.title[language]}</span>
                              <span className="text-[9px] text-neutral-400 font-mono ml-2 shrink-0">{vid.duration}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedVideo({ title: folder.videos[0].title[language], duration: folder.videos[0].duration })}
                        className="w-full py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Play className="h-3.5 w-3.5 fill-purple-700" />
                        <span>{language === "ta" ? "வீடியோ பார்க்க" : "Play Reel"}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Folders */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-[#B45309]" />
                  <h4 className="text-sm font-black text-neutral-900">
                    {language === "ta" ? "2. புகைப்பட கோப்புகள் (Folder Style)" : "2. Image Folders (Folder Style)"}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {GALLERY_IMAGE_FOLDERS.map((folder) => (
                    <div
                      key={folder.id}
                      className="bg-white rounded-3xl p-4 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 text-[#B45309] text-[10px] font-bold border border-amber-200 flex items-center gap-1">
                            <Folder className="h-3 w-3 fill-[#B45309]" />
                            {folder.count}
                          </span>
                          <span className="text-[10px] font-bold text-neutral-400">HD Photos</span>
                        </div>

                        <div
                          onClick={() => setSelectedFolderImages({ title: folder.title[language], images: folder.images })}
                          className="relative h-40 w-full rounded-2xl overflow-hidden mb-3 bg-neutral-900 cursor-pointer group"
                        >
                          <Image
                            src={folder.thumbnail}
                            alt={folder.title.en}
                            fill
                            sizes="300px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="h-9 w-9 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md">
                              <Maximize2 className="h-4 w-4" />
                            </div>
                          </div>
                        </div>

                        <h5 className="font-extrabold text-neutral-900 text-sm mb-1">{folder.title[language]}</h5>
                        <p className="text-[11px] text-neutral-500 mb-3">High-resolution site photography</p>
                      </div>

                      <button
                        onClick={() => setSelectedFolderImages({ title: folder.title[language], images: folder.images })}
                        className="w-full py-2 rounded-xl bg-neutral-100 hover:bg-[#0A0D12] text-neutral-900 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Camera className="h-3.5 w-3.5" />
                        <span>{language === "ta" ? "புகைப்படங்கள் பார்க்க" : "View Photo Folder"}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          )}

          {/* ------------------------------------------------------------------- */}
          {/* TAB 4: ABOUT (Surya Promoters Details & Founder Profile)             */}
          {/* ------------------------------------------------------------------- */}
          {activeTab === "about" && (
            <section className="space-y-6 animate-fadeIn pt-1">
              {/* Back to Home Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <h3 className="text-sm font-black text-neutral-900 leading-tight">
                    {language === "ta" ? "எங்களைப் பற்றி (About Surya Promoters)" : "About Surya Promoters (Founder & Legacy)"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-1.5 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Founder Profile Banner */}
              <div className="bg-[#0A0D12] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-sm flex flex-col md:flex-row items-center gap-6">
                <div className="relative h-44 w-44 rounded-2xl overflow-hidden shrink-0 border-2 border-[#EAB308] bg-white/10 shadow-lg">
                  <Image
                    src="/images/founder/founder.png"
                    alt="Mr. Manickam Natarajan - Founder & Director"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 py-0.5 rounded-md bg-[#0A0D12]/90 text-[9px] font-black text-center text-[#EAB308]">
                    IAF VETERAN
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAB308]/20 text-[#EAB308] text-[10px] font-black uppercase tracking-wider mb-2 inline-block">
                    Founder & Managing Director
                  </span>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {language === "ta" ? "திரு. மாணிக்கம் நடராஜன்" : "Mr. Manickam Natarajan"}
                  </h3>
                  <p className="text-xs font-semibold text-amber-300 mb-3">
                    Indian Air Force Veteran · Established Surya Promoters in 2010
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-xl">
                    {language === "ta"
                      ? "விமானப்படை ஒழுங்குமுறை, நேர்மை மற்றும் வெளிப்படைத்தன்மையுடன் 2010 ஆம் ஆண்டு தொடங்கப்பட்டது. ஒவ்வொரு மனைக்கும் 100% தெளிவான கணினி பட்டா உறுதி செய்யப்படுகிறது."
                      : "Founded in 2010 on principles of military precision, unyielding honesty, and zero-compromise on legal due diligence. Every land parcel carries verified 30-year parent documentation."}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 text-center">
                  <span className="text-3xl font-black text-[#B45309]">16+</span>
                  <p className="text-xs font-bold text-neutral-800 mt-0.5">Years Experience</p>
                  <p className="text-[10px] text-neutral-400">Since 2010</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 text-center">
                  <span className="text-3xl font-black text-[#0A0D12]">1000+</span>
                  <p className="text-xs font-bold text-neutral-800 mt-0.5">Happy Families</p>
                  <p className="text-[10px] text-neutral-400">Settled in Tamil Nadu</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 text-center">
                  <span className="text-3xl font-black text-emerald-700">100%</span>
                  <p className="text-xs font-bold text-neutral-800 mt-0.5">Clear Patta</p>
                  <p className="text-[10px] text-neutral-400">Zero disputes</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-neutral-200 text-center">
                  <span className="text-3xl font-black text-[#EAB308]">4.9 ★</span>
                  <p className="text-xs font-bold text-neutral-800 mt-0.5">Client Rating</p>
                  <p className="text-[10px] text-neutral-400">Verified Reviews</p>
                </div>
              </div>

            </section>
          )}

          {/* ------------------------------------------------------------------- */}
          {/* TAB 5: DOWNLOAD MAP (Blueprints, Layout Maps, Brochures)            */}
          {/* ------------------------------------------------------------------- */}
          {activeTab === "download" && (
            <section className="space-y-5 animate-fadeIn pt-1">
              {/* Back to Home Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <h3 className="text-sm font-black text-neutral-900 leading-tight">
                    {language === "ta" ? "பதிவிறக்க மையம் (Downloads Hub)" : "Download Map & Resources Hub"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-1.5 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-xs">
                <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider block mb-1">
                  Downloads Hub
                </span>
                <h3 className="text-xl font-black text-neutral-900 mb-1">
                  {language === "ta" ? "வரைபடம், புளூபிரிண்ட் & கையேடுகள் பதிவிறக்கம்" : "Download Project Maps & Resources"}
                </h3>
                <p className="text-xs text-neutral-600">
                  {language === "ta"
                    ? "ஆரஞ்ச் கார்டன், வைகை எலைட் உள்ளிட்ட அனைத்து திட்டங்களின் கள வரைபடம், கையேடுகள் மற்றும் வீடியோக்களை பதிவிறக்குங்கள்."
                    : "Download high-resolution cadastral layout maps, blueprints, project brochures, and video reels directly."}
                </p>
              </div>

              {toastMessage && (
                <div className="p-3.5 rounded-2xl bg-[#0A0D12] text-[#EAB308] border border-[#EAB308]/40 shadow-lg flex items-center justify-between text-xs font-bold">
                  <span>✓ {toastMessage}</span>
                  <button onClick={() => setToastMessage(null)} className="text-white">✕</button>
                </div>
              )}

              {/* Downloads Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOWNLOAD_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase bg-amber-50 text-[#854D0E]">
                          {item.category[language]}
                        </span>
                        <span className="text-xs font-mono text-neutral-400">{item.fileSize}</span>
                      </div>
                      <h4 className="font-extrabold text-neutral-900 text-sm mb-1">{item.title[language]}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-4">
                        <FileText className="h-3.5 w-3.5 text-[#B45309]" />
                        <span>{item.fileType}</span>
                        <span>·</span>
                        <span className="text-emerald-700 font-semibold">{item.badge}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={item.downloadUrl}
                        download
                        onClick={() => triggerToast(`Downloading ${item.title[language]}...`)}
                        className="py-2 px-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5 text-[#EAB308]" />
                        <span>{language === "ta" ? "பதிவிறக்க" : "Download"}</span>
                      </a>

                      <a
                        href={item.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>{language === "ta" ? "முன்னோட்டம்" : "Preview"}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =================================================================== */}
          {/* TAB 6: CONTACT (Direct Communication Channels, Office HQ & Enquiry) */}
          {/* =================================================================== */}
          {activeTab === "contact" && (
            <section className="space-y-6 animate-fadeIn pt-1">
              {/* Back to Home Header */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("home")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>{language === "ta" ? "முகப்புக்கு திரும்புக" : "Back to Home"}</span>
                  </button>
                  <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
                  <h3 className="text-sm font-black text-neutral-900 leading-tight">
                    {language === "ta" ? "நேரடி தொடர்பு மையம் (Contact Us)" : "Direct Communication Channels & Contact"}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab("home")}
                  className="p-1.5 rounded-xl hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  title="Close section"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Contact Top Banner */}
              <div className="bg-[#0A0D12] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-xl">
                
                  <h2 className="text-2xl sm:text-3xl font-black mb-2">
                    {language === "ta" ? "எங்களை நேரடியாக தொடர்பு கொள்ளவும்" : "Direct Communication Channels"}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {language === "ta"
                      ? "மதுரையின் சிறந்த குடியிருப்பு, வணிகம் மற்றும் பண்ணை நிலங்களுக்கான நேரடி ஆலோசனை மற்றும் களப் பார்வை முன்பதிவு."
                      : "Connect directly with our veteran land advisory team for certified computer patta verification, free site inspection cabs, and transparent pricing."}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
                  <span className="text-xs text-neutral-400 font-semibold">{language === "ta" ? "அலுவலக நேரம்:" : "Office Hours:"}</span>
                  <span className="text-sm font-black text-[#EAB308]">8:30 AM – 8:30 PM (7 Days a Week)</span>
                  <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Site Visits Available Every Day
                  </span>
                </div>
              </div>

              {/* 4 Interactive Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* 1. Phone Call */}
                <div className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-xs hover:border-[#EAB308]/80 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-amber-50 text-[#B45309] border border-amber-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Phone className="h-6 w-6 text-[#B45309]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#B45309] block mb-0.5">
                      {language === "ta" ? "தொலைபேசி அழைப்பு" : "Direct Call"}
                    </span>
                    <h4 className="text-base font-black text-neutral-900 mb-1">+91 77089 66452</h4>
                    <p className="text-xs text-neutral-500 mb-4">
                      {language === "ta" ? "நில ஆலோசகருடன் உடனே பேச நேரடி அழைப்பு." : "Speak directly with our senior land acquisition specialist."}
                    </p>
                  </div>
                  <a
                    href="tel:+917708966452"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-[#EAB308]" />
                    <span>{language === "ta" ? "அழைக்க" : "Call Now"}</span>
                  </a>
                </div>

                {/* 2. WhatsApp Business */}
                <div className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-xs hover:border-emerald-500/80 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <MessageCircle className="h-6 w-6 text-emerald-600 fill-emerald-100" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block mb-0.5">
                      {language === "ta" ? "வாட்ஸ்அப் அரட்டை" : "WhatsApp Chat"}
                    </span>
                    <h4 className="text-base font-black text-neutral-900 mb-1">WhatsApp Official</h4>
                    <p className="text-xs text-neutral-500 mb-4">
                      {language === "ta" ? "மனை வரைபடங்கள், விலை பட்டியல் மற்றும் வீடியோ பெற." : "Instant layout blueprints, pricing quotes, and video reels."}
                    </p>
                  </div>
                  <a
                    href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20Madurai%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-white" />
                    <span>{language === "ta" ? "வாட்ஸ்அப் தொடர்பு" : "Chat on WhatsApp"}</span>
                  </a>
                </div>

                {/* 3. Corporate Email */}
                <div className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-xs hover:border-blue-500/80 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block mb-0.5">
                      {language === "ta" ? "மின்னஞ்சல்" : "Official Email"}
                    </span>
                    <h4 className="text-base font-black text-neutral-900 mb-1 truncate">info@suryapromoters.com</h4>
                    <p className="text-xs text-neutral-500 mb-4">
                      {language === "ta" ? "கார்ப்பரேட் கோரிக்கைகள் மற்றும் கூட்டாண்மை விசாரணை." : "Send corporate inquiries, deeds verification, or proposals."}
                    </p>
                  </div>
                  <a
                    href="mailto:info@suryapromoters.com"
                    className="w-full py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-neutral-300"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    <span>{language === "ta" ? "மின்னஞ்சல் அனுப்ப" : "Send Email"}</span>
                  </a>
                </div>

                {/* 4. Book Free Site Inspection Cab */}
                <div className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-xs hover:border-[#EAB308]/80 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-amber-50 text-[#854D0E] border border-amber-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <FileCheck className="h-6 w-6 text-[#EAB308]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#854D0E] block mb-0.5">
                      {language === "ta" ? "களப் பார்வை முன்பதிவு" : "Site Visit & Booking"}
                    </span>
                    <h4 className="text-base font-black text-neutral-900 mb-1">{language === "ta" ? "இலவச வாகன வசதி" : "Enquiry"}</h4>
                    <p className="text-xs text-neutral-500 mb-4">
                      {language === "ta" ? "குடும்பத்துடன் இடத்தை நேரில் பார்வையிட இலவச ஏற்பாடு." : "Complimentary pick-up & drop cab across Madurai."}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-black text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{language === "ta" ? "முன்பதிவு படிவம்" : "Book Site Inspection"}</span>
                  </button>
                </div>

              </div>

              {/* Head Office Information & Map Link (Buttons Aligned to Right Side) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-[#B45309]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#B45309]">
                      {language === "ta" ? "தலைமை அலுவலகம்" : "Corporate Headquarters"}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-2">
                    SURYA PROMOTERS · MADURAI
                  </h3>
                  <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                      <span>Madurai City Corporate Office & Project Centers across Ring Road, NH-44 & Thiruppuvanam Road, Madurai, Tamil Nadu.</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700 font-semibold">
                      <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Mon – Sun: 8:30 AM to 8:30 PM (Direct Site Visits Every Day)</span>
                    </div>
                  </div>
                </div>

                {/* Right Aligned Action Buttons */}
                <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center md:justify-end gap-2.5">
                  <a
                    href="https://maps.google.com/?q=Madurai,Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#EAB308]" />
                    <span>{language === "ta" ? "கூகிள் மேப்ஸ் வழித்தடம்" : "Open in Google Maps"}</span>
                  </a>
                  <a
                    href="https://mapbhoomi.com/l/surya-promoters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer border border-neutral-300 shadow-2xs"
                  >
                    <Compass className="h-3.5 w-3.5 text-[#EAB308]" />
                    <span>Mapbhoomi 3D Store ↗</span>
                  </a>
                </div>
              </div>

            </section>
          )}

        </main>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* MOBILE BOTTOM APP NAVIGATION DOCK (Play Store / Mobile App Style)         */}
      {/* ------------------------------------------------------------------------- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-xl border-t border-neutral-200/90 shadow-2xl px-2 py-1.5 flex items-center justify-around">
        {/* Home */}
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            activeTab === "home" ? "text-[#0A0D12] font-black" : "text-neutral-500 font-medium"
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-colors ${activeTab === "home" ? "bg-[#EAB308] text-[#0A0D12] shadow-xs" : "text-neutral-500"}`}>
            <Home className="h-4.5 w-4.5" />
          </div>
          <span className="text-[10px] mt-0.5 leading-none">
            {language === "ta" ? "முகப்பு" : "Home"}
          </span>
        </button>

        {/* Our Projects */}
        <button
          onClick={() => {
            setActiveTab("projects");
            setActiveCategory(null);
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            activeTab === "projects" ? "text-[#0A0D12] font-black" : "text-neutral-500 font-medium"
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-colors ${activeTab === "projects" ? "bg-[#EAB308] text-[#0A0D12] shadow-xs" : "text-neutral-500"}`}>
            <Building2 className="h-4.5 w-4.5" />
          </div>
          <span className="text-[10px] mt-0.5 leading-none">
            {language === "ta" ? "திட்டங்கள்" : "Projects"}
          </span>
        </button>

        {/* Site Location */}
        <button
          onClick={() => setActiveTab("location")}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === "location" ? "text-blue-600 font-black" : "text-neutral-500 font-medium"
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-colors ${activeTab === "location" ? "bg-blue-600 text-white shadow-xs" : "text-neutral-500"}`}>
            <MapPin className="h-4 w-4" />
          </div>
          <span className="text-[9px] mt-0.5 leading-none">
            {language === "ta" ? "அமைவிடம்" : "Site Location"}
          </span>
        </button>

        {/* Download Layout */}
        <button
          onClick={() => setActiveTab("download")}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === "download" ? "text-amber-700 font-black" : "text-neutral-500 font-medium"
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-colors ${activeTab === "download" ? "bg-amber-600 text-white shadow-xs" : "text-neutral-500"}`}>
            <Download className="h-4 w-4" />
          </div>
          <span className="text-[9px] mt-0.5 leading-none">
            {language === "ta" ? "வரைபடம்" : "Layout"}
          </span>
        </button>

        {/* Contact */}
        <button
          onClick={() => setActiveTab("contact")}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === "contact" ? "text-[#B45309] font-black" : "text-neutral-500 font-medium"
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-colors ${activeTab === "contact" ? "bg-[#0A0D12] text-[#EAB308] shadow-xs" : "text-neutral-500"}`}>
            <PhoneCall className="h-4 w-4" />
          </div>
          <span className="text-[9px] mt-0.5 leading-none">
            {language === "ta" ? "தொடர்பு" : "Contact"}
          </span>
        </button>
      </nav>

      {/* ------------------------------------------------------------------------- */}
      {/* 3. INDIVIDUAL PROJECT DETAILS MODAL                                       */}
      {/* ------------------------------------------------------------------------- */}
      <AnimatePresence>
        {selectedProject && (() => {
          const projectExtra = PROJECT_DETAILS_MAP[selectedProject.id];
          const gallery = projectExtra?.galleryImages && projectExtra.galleryImages.length > 0
            ? projectExtra.galleryImages
            : [selectedProject.image];
          const activeImage = modalActiveImage || selectedProject.image;
          const videoUrl = projectExtra?.videoUrl;

          return (
            <div
              data-lenis-prevent
              onClick={() => setSelectedProject(null)}
              onWheel={(e) => e.stopPropagation()}
              className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                data-lenis-prevent
                className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] sm:max-h-[88vh] my-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg"
                  title="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Scrollable Container */}
                <div
                  data-lenis-prevent
                  onWheel={(e) => e.stopPropagation()}
                  className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-7 space-y-6 overscroll-contain"
                >
                  {/* 1. MEDIA BANNER & VIDEO TOUR */}
                  <div className="space-y-3">
                    <div className="relative h-60 sm:h-80 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-inner">
                      {modalMediaMode === "video" && videoUrl ? (
                        <video
                          src={videoUrl}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <Image
                            src={activeImage}
                            alt={selectedProject.name.en}
                            fill
                            sizes="900px"
                            className="object-cover transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                        </>
                      )}

                      {/* Top Badges & Media Switcher */}
                      <div className="absolute top-3 left-3 right-14 flex items-center justify-between gap-2 z-10 pointer-events-auto">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-[#EAB308] text-[#0A0D12]">
                            {selectedProject.categoryLabel[language]}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/70 text-white backdrop-blur-md">
                            {selectedProject.subcategoryLabel[language]}
                          </span>
                        </div>

                        {videoUrl && (
                          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/20">
                            <button
                              onClick={() => setModalMediaMode("photos")}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                                modalMediaMode === "photos"
                                  ? "bg-[#EAB308] text-[#0A0D12]"
                                  : "text-white/80 hover:text-white"
                              }`}
                            >
                              Photos ({gallery.length})
                            </button>
                            <button
                              onClick={() => setModalMediaMode("video")}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                                modalMediaMode === "video"
                                  ? "bg-[#EAB308] text-[#0A0D12]"
                                  : "text-white/80 hover:text-white"
                              }`}
                            >
                              <Play className="h-3 w-3 fill-current" />
                              Video
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Banner Bottom Title Info */}
                      <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                        <div className="flex items-center gap-1 text-[#EAB308] text-xs font-black mb-1">
                          <Star className="h-3.5 w-3.5 fill-[#EAB308]" />
                          <span>{selectedProject.rating}</span>
                          <span className="text-white/70 font-normal">
                            ({projectExtra?.customerReviews.length || 2} verified client reviews)
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-3xl font-black drop-shadow-md">
                          {selectedProject.name[language]}
                        </h2>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-300 mt-0.5">
                          <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                          <span>{selectedProject.location[language]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Image Thumbnails Strip */}
                    {gallery.length > 1 && (
                      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                        {gallery.map((thumb, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setModalActiveImage(thumb);
                              setModalMediaMode("photos");
                            }}
                            className={`relative h-14 w-20 sm:h-16 sm:w-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                              modalMediaMode === "photos" && activeImage === thumb
                                ? "border-[#EAB308] scale-105 shadow-md ring-2 ring-[#EAB308]/40"
                                : "border-neutral-200 opacity-70 hover:opacity-100 hover:border-neutral-400"
                            }`}
                          >
                            <Image src={thumb} alt={`Photo ${idx + 1}`} fill sizes="100px" className="object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. MAPBHOOMI LIVE CADASTRAL LINK */}
                  {selectedProject.mapbhoomiUrl && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0A0D12] via-[#111827] to-[#1F2937] text-white border border-[#EAB308]/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-[#EAB308] text-[#0A0D12] flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                          <Compass className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-black text-white">Mapbhoomi Interactive 3D Cadastral Layout</h4>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              Live Map
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-300 mt-0.5 max-w-xl leading-relaxed">
                            {language === "ta"
                              ? "ஒவ்வொரு மனையின் எல்லைகள், அளவு மற்றும் விபரங்களை Mapbhoomi நேரடி தளத்தில் பார்க்கவும்."
                              : "Explore verified cadastral plot boundaries, numbering, and dimensions on the official Mapbhoomi interactive layout."}
                          </p>
                        </div>
                      </div>
                      <a
                        href={selectedProject.mapbhoomiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-black text-xs transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-md hover:scale-105 cursor-pointer"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>Open map ↗</span>
                      </a>
                    </div>
                  )}

                  {/* 3. CADASTRAL BLUEPRINT (if available) */}
                  {selectedProject.blueprint && (
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-[#B45309] tracking-wider flex items-center gap-1.5">
                          <FileCheck className="h-4 w-4" />
                          Cadastral Layout Blueprint (Plots 1 to 10)
                        </span>
                        <a
                          href={selectedProject.blueprint}
                          download
                          className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-1"
                        >
                          <Download className="h-3 w-3" />
                          Download
                        </a>
                      </div>
                      <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-neutral-900 border border-amber-200">
                        <Image
                          src={selectedProject.blueprint}
                          alt="Project Cadastral Blueprint"
                          fill
                          sizes="700px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* 4. MODAL SECTION TABS */}
                  <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-2xl overflow-x-auto border border-neutral-200/80">
                    <button
                      onClick={() => setModalSectionTab("overview")}
                      className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                        modalSectionTab === "overview"
                          ? "bg-[#0A0D12] text-[#EAB308] shadow-xs"
                          : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      {language === "ta" ? "கண்ணோட்டம்" : "Overview & Specs"}
                    </button>
                    <button
                      onClick={() => setModalSectionTab("locality")}
                      className={`flex-1 min-w-[150px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                        modalSectionTab === "locality"
                          ? "bg-[#0A0D12] text-[#EAB308] shadow-xs"
                          : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      {language === "ta" ? "அமைவிடம் & வசதிகள்" : "Locality & Infra"}
                    </button>
                    <button
                      onClick={() => setModalSectionTab("valuation")}
                      className={`flex-1 min-w-[150px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                        modalSectionTab === "valuation"
                          ? "bg-[#0A0D12] text-[#EAB308] shadow-xs"
                          : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      {language === "ta" ? "விலை & எதிர்கால மதிப்பு" : "Ground Value & ROI"}
                    </button>
                    <button
                      onClick={() => setModalSectionTab("reviews")}
                      className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                        modalSectionTab === "reviews"
                          ? "bg-[#0A0D12] text-[#EAB308] shadow-xs"
                          : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      {language === "ta" ? "வாடிக்கையாளர் கருத்து" : "Customer Reviews"}
                    </button>
                  </div>

                  {/* TAB 1: OVERVIEW & SPECS */}
                  {modalSectionTab === "overview" && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {selectedProject.specs.map((spec, i) => (
                          <div key={i} className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {spec.label[language]}
                            </span>
                            <span className="text-xs font-black text-neutral-900 block mt-0.5">
                              {spec.value[language]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Overview */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                        <h3 className="text-sm font-black text-neutral-900">
                          {language === "ta" ? "திட்டத்தின் முழு விவரம்" : "Project Overview"}
                        </h3>
                        <p className="text-xs text-neutral-700 leading-relaxed">
                          {selectedProject.description[language]}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                        <h3 className="text-sm font-black text-neutral-900">
                          {language === "ta" ? "முக்கிய சிறப்பம்சங்கள்" : "Key Highlights"}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedProject.highlights[language].map((hl, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-700">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: LOCALITY & INFRASTRUCTURE */}
                  {modalSectionTab === "locality" && projectExtra && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Transportation */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-[#CA8A04]" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            {language === "ta" ? "அருகிலுள்ள போக்குவரத்து வசதிகள்" : "Nearby Transportation & Connectivity"}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {projectExtra.transportation.map((item, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-800">{item.name[language]}</span>
                              <div className="flex items-center gap-1.5 shrink-0 text-right">
                                <span className="text-[11px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-md">
                                  {item.distance}
                                </span>
                                {item.time && (
                                  <span className="text-[10px] text-neutral-500 font-medium">({item.time})</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hospitals & Healthcare */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <HeartPulse className="h-4 w-4 text-rose-600" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            {language === "ta" ? "அருகிலுள்ள மருத்துவமனைகள்" : "Nearby Hospitals & Healthcare"}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {projectExtra.hospitals.map((item, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-800">{item.name[language]}</span>
                              <span className="text-[11px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-md">
                                {item.distance} {item.time && `· ${item.time}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Schools & Colleges */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-blue-600" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            {language === "ta" ? "பள்ளிகள் & கல்லூரிகள்" : "Nearby Schools & Colleges"}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {projectExtra.schoolsAndColleges.map((item, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-800">{item.name[language]}</span>
                              <span className="text-[11px] font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-md">
                                {item.distance} {item.time && `· ${item.time}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Groundwater Facility */}
                      <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-cyan-600" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-cyan-950">
                            {language === "ta" ? "நிலத்தடி நீர் வசதி & தரம்" : "Groundwater Facility & Potable Table"}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-xl bg-white border border-cyan-200/60">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "நீர் மட்டம் ஆழம்" : "Water Table Depth"}
                            </span>
                            <span className="text-xs font-black text-neutral-900 block mt-0.5">
                              {projectExtra.groundwater.depth[language]}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-cyan-200/60">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "குடிநீர் தரம்" : "Tested Quality"}
                            </span>
                            <span className="text-xs font-black text-emerald-700 block mt-0.5">
                              {projectExtra.groundwater.quality[language]}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-cyan-200/60">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "நீர் ஆதாரம்" : "Water Source"}
                            </span>
                            <span className="text-xs font-black text-neutral-900 block mt-0.5">
                              {projectExtra.groundwater.source[language]}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Neighbour Houses & Community */}
                      <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-neutral-800" />
                          <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            {language === "ta" ? "அண்டை வீடுகள் & குடியிருப்பு சூழல்" : "Neighbour Houses & Community Environment"}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "குடியிருப்பு அடர்த்தி" : "Community Density"}
                            </span>
                            <span className="text-xs font-bold text-neutral-800 block mt-0.5">
                              {projectExtra.neighborhood.density[language]}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "சூழ்ந்துள்ள வீடுகள்" : "Surrounding Dwellings"}
                            </span>
                            <span className="text-xs font-bold text-neutral-800 block mt-0.5">
                              {projectExtra.neighborhood.surrounding[language]}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "சூழல் & பாதுகாப்பு" : "Atmosphere & Security"}
                            </span>
                            <span className="text-xs font-bold text-neutral-800 block mt-0.5">
                              {projectExtra.neighborhood.atmosphere[language]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: GROUND VALUE & FUTURE ROI PREDICTION */}
                  {modalSectionTab === "valuation" && projectExtra && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Current Ground Value Card */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-amber-700" />
                            <h4 className="text-sm font-black text-neutral-900">
                              {language === "ta" ? "தற்போதைய மனை / நில மதிப்பு" : "Current Ground Value & Prevailing Rate"}
                            </h4>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#0A0D12] text-[#EAB308]">
                            Verified Market Price
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-xs">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "தற்போதைய சந்தை விலை" : "Current Market Rate"}
                            </span>
                            <span className="text-base sm:text-lg font-black text-[#0A0D12] block mt-1">
                              {projectExtra.groundValue.currentRate[language]}
                            </span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "அரசு வழிகாட்டி மதிப்பு" : "Government Guideline Value"}
                            </span>
                            <span className="text-base sm:text-lg font-black text-neutral-700 block mt-1">
                              {projectExtra.groundValue.guidelineValue[language]}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Future Ground Value Predicted Card */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-300/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                            <h4 className="text-sm font-black text-neutral-900">
                              {language === "ta" ? "எதிர்கால மதிப்பு முன்கணிப்பு (ROI)" : "Future Ground Value Predicted (ROI)"}
                            </h4>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-600 text-white">
                            High Growth Potential
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-xs">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "3 வருட உத்தேச வளர்ச்சி" : "3-Year Projected Growth"}
                            </span>
                            <span className="text-base sm:text-lg font-black text-emerald-600 block mt-1">
                              {projectExtra.futurePrediction.threeYearROI}
                            </span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-emerald-200 shadow-xs">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                              {language === "ta" ? "5 வருட மூலதன மதிப்பு" : "5-Year Projected Growth"}
                            </span>
                            <span className="text-base sm:text-lg font-black text-emerald-700 block mt-1">
                              {projectExtra.futurePrediction.fiveYearROI}
                            </span>
                          </div>
                        </div>

                        {/* Growth Drivers */}
                        <div className="p-3 rounded-xl bg-white/80 border border-emerald-200/60 space-y-1.5 mt-2">
                          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-950 block">
                            {language === "ta" ? "மதிப்பு உயர்வதற்கான முக்கிய காரணங்கள்:" : "Key Drivers of Future Appreciation:"}
                          </span>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            {projectExtra.futurePrediction.drivers[language].map((driver, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-1.5">
                                <TrendingUp className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{driver}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: CUSTOMER REVIEWS */}
                  {modalSectionTab === "reviews" && projectExtra && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      {/* Overall Rating Banner */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0D12] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-[#EAB308] text-[#0A0D12] flex flex-col items-center justify-center font-black shrink-0">
                            <span className="text-base leading-none">5.0</span>
                            <div className="flex text-[8px] mt-0.5">★★★★★</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white">
                              {language === "ta" ? "உறுதிப்படுத்தப்பட்ட வாடிக்கையாளர் மதிப்புரை" : "Verified Customer Satisfaction"}
                            </h4>
                            <p className="text-xs text-neutral-300 mt-0.5">
                              98.6% Client Approval Rating · 500+ Happy Families · 16+ Years IAF Veteran Trust
                            </p>
                          </div>
                        </div>
                     
                      </div>

                      {/* Reviews Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projectExtra.customerReviews.map((rev, rIdx) => (
                          <div key={rIdx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2 flex flex-col justify-between">
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-[#EAB308]">
                                  {Array.from({ length: rev.rating }).map((_, s) => (
                                    <Star key={s} className="h-3.5 w-3.5 fill-[#EAB308]" />
                                  ))}
                                </div>
                                <span className="text-[10px] text-neutral-400 font-medium">{rev.date}</span>
                              </div>
                              <p className="text-xs text-neutral-700 leading-relaxed italic">
                                &ldquo;{rev.comment[language]}&rdquo;
                              </p>
                            </div>
                            <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between mt-2">
                              <div>
                                <span className="text-xs font-black text-neutral-900 block">{rev.name}</span>
                                <span className="text-[10px] text-neutral-500 block">{rev.role[language]}</span>
                              </div>
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800">
                                Verified Buyer ✓
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 5. ACTION FOOTER */}
                  <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                      <a
                        href={selectedProject.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Navigation className="h-3.5 w-3.5 text-blue-600" />
                        <span>{language === "ta" ? "கூகிள் மேப்ஸ்" : "Google Maps"}</span>
                      </a>

                      {selectedProject.mapbhoomiUrl && (
                        <a
                          href={selectedProject.mapbhoomiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-[#EAB308] border border-[#EAB308]/50 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Compass className="h-3.5 w-3.5 text-[#EAB308]" />
                          <span>Mapbhoomi (Open map ↗)</span>
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href="tel:+917708966452"
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0A0D12] text-white hover:bg-neutral-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#EAB308]" />
                        <span>{language === "ta" ? "நேரடி அழைப்பு" : "Call Advisor"}</span>
                      </a>

                      <a
                        href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20${encodeURIComponent(
                          selectedProject.name.en
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <MessageCircle className="h-3.5 w-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* ------------------------------------------------------------------------- */}
      {/* 4. LIGHTBOX & VIDEO MODALS                                                */}
      {/* ------------------------------------------------------------------------- */}
      <AnimatePresence>
        {selectedFolderImages && (
          <div
            data-lenis-prevent
            onClick={() => setSelectedFolderImages(null)}
            onWheel={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-5xl bg-white rounded-3xl p-5 sm:p-7 max-h-[88vh] overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                <h3 className="text-base font-black text-neutral-900">{selectedFolderImages.title}</h3>
                <button onClick={() => setSelectedFolderImages(null)} className="p-1 text-neutral-500 cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedFolderImages.images.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-xl overflow-hidden bg-neutral-900 group">
                    <Image src={img} alt="Photo" fill sizes="300px" className="object-cover" />
                    <a
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <div
            data-lenis-prevent
            onClick={() => setSelectedVideo(null)}
            onWheel={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-2xl bg-[#0A0D12] text-white rounded-3xl p-6 border border-neutral-800 max-h-[88vh] overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <h3 className="text-base font-black text-white">{selectedVideo.title}</h3>
                <button onClick={() => setSelectedVideo(null)} className="p-1 text-neutral-400 cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-64 sm:h-80 w-full rounded-2xl bg-neutral-950 flex flex-col items-center justify-center p-6 text-center border border-neutral-800">
                <div className="h-14 w-14 rounded-full bg-[#EAB308] text-[#0A0D12] flex items-center justify-center mb-3">
                  <Play className="h-6 w-6 fill-[#0A0D12] ml-0.5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{selectedVideo.title}</h4>
                <p className="text-xs text-neutral-400 mb-4">4K drone footage stream available on request</p>
                <a
                  href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20full%20project%20video."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>Request Full Video on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------------- */}
      {/* 5. QUICK ENQUIRY MODAL                                                    */}
      {/* ------------------------------------------------------------------------- */}
      <AnimatePresence>
        {isEnquiryModalOpen && (
          <div
            data-lenis-prevent
            onClick={() => setIsEnquiryModalOpen(false)}
            onWheel={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200 max-h-[88vh] overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                <h3 className="text-base font-black text-neutral-900">Direct Enquiry</h3>
                <button onClick={() => setIsEnquiryModalOpen(false)} className="p-1 text-neutral-400 cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(language === "ta" ? "நன்றி! உங்கள் தகவல் பெறப்பட்டது." : "Thank you! Your enquiry has been received.");
                  setIsEnquiryModalOpen(false);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-medium outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-medium outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Select Project</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-medium outline-hidden bg-white">
                    {ALL_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name.en}>
                        {p.name.en}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer mt-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                  <span>Submit Quick Enquiry</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
