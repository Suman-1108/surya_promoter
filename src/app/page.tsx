"use client";

import React, { useState } from "react";
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
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  X,
  Star,
  Play,
  Folder,
  Layers,
  FileText,
  Search,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  FileCheck,
  Check,
  Home,
  Trees,
  Briefcase,
  SlidersHorizontal,
} from "lucide-react";

// Project Data Model for the App-Style Experience
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
  statusBadge: { en: string; ta: string };
  description: { en: string; ta: string };
  highlights: { en: string[]; ta: string[] };
  mapsUrl: string;
  specs: { label: { en: string; ta: string }; value: { en: string; ta: string } }[];
}

const ALL_PROJECTS: AppProject[] = [
  // 1. Residential - Flat Projects
  {
    id: "residential-flat",
    name: { en: "Flat Projects – Modern Apartments", ta: "பிளாட் திட்டங்கள் – நவீன அடுக்குமாடி குடியிருப்புகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "flat",
    subcategoryLabel: { en: "Flat Project", ta: "பிளாட் திட்டம்" },
    location: { en: "Prime Residential Belts, Madurai", ta: "மதுரை பிரதான குடியிருப்பு பகுதி" },
    distanceInfo: { en: "8 km from Meenakshi Amman Temple · 15 min to Airport", ta: "மீனாட்சி அம்மன் கோவிலில் இருந்து 8 கி.மீ · விமான நிலையத்திற்கு 15 நிமிடம்" },
    image: "/images/generated/residential-flat.jpg",
    statusBadge: { en: "Ongoing Project", ta: "விற்பனையில் உள்ளது" },
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
      { label: { en: "Title", ta: "பட்டா" }, value: { en: "100% Clear Computer Patta", ta: "100% கணினி பட்டா" } },
      { label: { en: "Approval", ta: "அனுமதி" }, value: { en: "DTCP & RERA Compliant", ta: "DTCP & RERA அனுமதி" } },
      { label: { en: "Water", ta: "குடிநீர்" }, value: { en: "Sweet Potable Groundwater", ta: "இனிமையான நிலத்தடி நீர்" } },
    ],
  },

  // 2. Residential - Plot Projects
  {
    id: "residential-plot",
    name: { en: "Plot Projects – Well-Planned Layouts", ta: "மனைப்பிரிவு திட்டங்கள் – திட்டமிடப்பட்ட வீட்டு மனைகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "plot",
    subcategoryLabel: { en: "Plot Project", ta: "மனைப்பிரிவு திட்டம்" },
    location: { en: "Fast-Growing Residential Corridors, Madurai", ta: "மதுரை அதிவேக வளர்ச்சி குடியிருப்பு வழித்தடம்" },
    distanceInfo: { en: "Adjacent to 4-Lane Highway · Quick ring road connectivity", ta: "4-வழி தேசிய நெடுஞ்சாலை அருகில் · நேரடி இணைப்பு" },
    image: "/images/generated/residential-plot.jpg",
    statusBadge: { en: "Ready to Register", ta: "உடனடி பதிவு" },
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

  // 3. Commercial - Vaigai Elite Garden
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
    statusBadge: { en: "Prime Corridor", ta: "பிரைம் காரிடார்" },
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

  // 4. Commercial - Vaigai River Build
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

  // 5. Commercial - Pandi Kovil Site
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

  // 6. Commercial - Commercial Building Anna Nagar
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

  // 7. Commercial - Mayilan Gundu Site (MPF International School)
  {
    id: "mayilan-gundu",
    name: { en: "Mayilan Gundu Site (MPF School)", ta: "மயிலன் குண்டு தளம் (MPF பள்ளி அருகில்)" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Institutional & Commercial", ta: "கல்வி & வணிக நிலம்" },
    location: { en: "Mayilan Gundu, Adjacent MPF International School, Madurai", ta: "மயிலன் குண்டு, MPF பள்ளி அருகில், மதுரை" },
    distanceInfo: { en: "Opposite MPF International School · Broad access road", ta: "MPF சர்வதேச பள்ளிக்கு மிக அருகில்" },
    image: "/images/generated/mayilan-gundu-site.jpg",
    statusBadge: { en: "Institutional Hub", ta: "கல்வி நிறுவனம் தகுந்தது" },
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

  // 8. Farm Land - Madurai Farms & Fruits
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
    statusBadge: { en: "Managed Agro Estate", ta: "நிர்வகிக்கப்படும் பண்ணை" },
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

  // 9. Farm Land - Orange Garden
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
    statusBadge: { en: "Running Ongoing Project", ta: "நடைபெறும் திட்டம்" },
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

// Gallery Folders Data
const GALLERY_VIDEO_FOLDERS = [
  {
    id: "drone-reels",
    title: { en: "Aerial Drone Overview Reel", ta: "வான்வழி ட்ரோன் வீடியோக்கள்" },
    count: "3 Videos",
    thumbnail: "/images/hero/hero-gated-layout.jpg",
    videos: [
      { title: { en: "Madurai Outer Ring Road Corridor", ta: "மதுரை அவுட்டர் ரிங் ரோடு வழித்தடம்" }, duration: "1:45", views: "2.4k" },
      { title: { en: "Vaigai Highway Commercial Aerial", ta: "வைகை நெடுஞ்சாலை வணிக வான்பார்வை" }, duration: "2:10", views: "1.8k" },
      { title: { en: "Madurai Farms Agro Panorama", ta: "மதுரை பார்ம்ஸ் இயற்கை காட்சி" }, duration: "3:05", views: "3.1k" },
    ],
  },
  {
    id: "commercial-corridors",
    title: { en: "Commercial Corridors Tour", ta: "வணிக வழித்தட வீடியோக்கள்" },
    count: "2 Videos",
    thumbnail: "/images/generated/vaigai-elite-garden.jpg",
    videos: [
      { title: { en: "Vaigai Elite Garden Site Walkthrough", ta: "வைகை எலைட் கார்டன் நேரடி ஆய்வு" }, duration: "2:30", views: "1.5k" },
      { title: { en: "Anna Nagar Commercial Hub Elevation", ta: "அண்ணா நகர் வணிக கட்டிட பார்வை" }, duration: "1:55", views: "2.9k" },
    ],
  },
  {
    id: "farm-agro",
    title: { en: "Madurai Farms Agro Acreage", ta: "மதுரை பார்ம்ஸ் வேளாண் பண்ணை" },
    count: "2 Videos",
    thumbnail: "/images/projects/madurai-farms.jpg",
    videos: [
      { title: { en: "Managed Organic Drip Irrigation", ta: "சொட்டு நீர் பாசன அமைப்பு செயல்முறை" }, duration: "2:40", views: "1.9k" },
      { title: { en: "Weekend Farmhouse Living Tour", ta: "வார இறுதி பண்ணை வீடு வாழ்க்கை" }, duration: "3:15", views: "4.2k" },
    ],
  },
  {
    id: "orange-garden-reel",
    title: { en: "Orange Garden Orchard Walkthrough", ta: "ஆரஞ்ச் கார்டன் பழத்தோட்ட உலா" },
    count: "2 Videos",
    thumbnail: "/images/generated/orange-garden.jpg",
    videos: [
      { title: { en: "Thiruppuvanam Highway Entrance & Plots", ta: "திருப்புவனம் சாலை முகப்பு மற்றும் மனைகள்" }, duration: "2:15", views: "2.7k" },
      { title: { en: "Citrus Groves & Cadastral Boundary Stones", ta: "பழ மரங்கள் மற்றும் எல்லைக்கற்கள்" }, duration: "1:50", views: "2.1k" },
    ],
  },
  {
    id: "client-handover",
    title: { en: "Customer Testimonials & Patta Handover", ta: "வாடிக்கையாளர் கருத்துக்கள் & பட்டா வழங்கல்" },
    count: "3 Videos",
    thumbnail: "/images/founder/founder.png",
    videos: [
      { title: { en: "IAF Veteran Leadership - Buyer Trust", ta: "விமானப்படை அதிகாரியின் நேர்மையான சேவை" }, duration: "3:40", views: "5.4k" },
      { title: { en: "Immediate Registration Client Experience", ta: "உடனடி பத்திர பதிவு அனுபவம்" }, duration: "2:05", views: "3.8k" },
      { title: { en: "Investment Growth Stories in Madurai", ta: "முதலீட்டு வளர்ச்சி வெற்றிக் கதைகள்" }, duration: "2:50", views: "4.6k" },
    ],
  },
];

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

// Downloads Data
const DOWNLOAD_ITEMS = [
  {
    id: "orange-garden-map",
    title: { en: "Orange Garden Cadastral Layout Map", ta: "ஆரஞ்ச் கார்டன் கள வரைபடம் (புளூபிரிண்ட்)" },
    category: { en: "Cadastral Layout Blueprint", ta: "கள வரைபடம்" },
    fileType: "JPG / Blueprint",
    fileSize: "27.6 KB",
    downloadUrl: "/images/projects/orange-garden/layout-blueprint.jpg",
    badge: "10 Demarcated Plots",
  },
  {
    id: "vaigai-elite-plan",
    title: { en: "Vaigai Elite Commercial Highway Masterplan", ta: "வைகை எலைட் வணிக பெருந்திட்ட வரைபடம்" },
    category: { en: "Commercial Masterplan", ta: "வணிக வரைபடம்" },
    fileType: "PDF / Plan",
    fileSize: "3.4 MB",
    downloadUrl: "/images/generated/vaigai-elite-garden.jpg",
    badge: "NH-44 Frontage",
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
    badge: "4K Drone Footage",
  },
];

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();

  // Navigation State: 5 Main App-Style Icons
  // 'projects' | 'location' | 'gallery' | 'about' | 'download'
  const [activeTab, setActiveTab] = useState<"projects" | "location" | "gallery" | "about" | "download">("projects");

  // Filter inside "Our Projects": 'all' | 'residential' | 'commercial' | 'farm'
  const [projectCategory, setProjectCategory] = useState<"all" | "residential" | "commercial" | "farm">("all");

  // Search Query
  const [searchQuery, setSearchQuery] = useState("");

  // Modals
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(null);
  const [selectedFolderImages, setSelectedFolderImages] = useState<{ title: string; images: string[] } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; duration: string } | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  // Filter projects by category and search
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    const matchesCategory = projectCategory === "all" || p.category === projectCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.ta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.ta.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadTrigger = (itemName: string) => {
    setDownloadSuccessToast(
      language === "ta" ? `${itemName} பதிவிறக்கம் தொடங்கப்பட்டது` : `Downloading ${itemName}...`
    );
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A0D12] font-sans antialiased selection:bg-[#EAB308] selection:text-[#0A0D12]">
      
      {/* 1. TOP NAVBAR: "S" LOGO SURYA PROMOTERS */}
      <header className="sticky top-0 z-50 w-full bg-[#0A0D12]/95 backdrop-blur-md border-b border-[#EAB308]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Identity: "S" Logo + SURYA PROMOTERS */}
          <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-[#EAB308] bg-white p-0.5 shadow-md shadow-[#EAB308]/20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/surya-logo.png"
                alt="Surya Promoters S Logo"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#EAB308] transition-colors">
                  SURYA PROMOTERS
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EAB308]/15 text-[#EAB308] border border-[#EAB308]/30">
                  ESTD. 2010
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wide text-neutral-400">
                {language === "ta" ? "மதுரை மனைப்பிரிவுகள் & நில மேம்பாடு" : "Madurai Land & Property Developers"}
              </span>
            </div>
          </Link>

          {/* Right Navigation & Quick Channels */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* IAF Veteran Trust Seal */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#EAB308]" />
              <span>{language === "ta" ? "16+ ஆண்டுகள் · விமானப்படை நெறிமுறை" : "16+ Yrs · IAF Veteran Leadership"}</span>
            </div>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#EAB308]/20 border border-white/15 hover:border-[#EAB308]/40 text-white text-xs font-bold transition-all cursor-pointer"
              title="Toggle Language"
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>

            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20Madurai%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+917708966452"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-bold transition-all shadow-md shadow-[#EAB308]/30 cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 fill-[#0A0D12]" />
              <span className="hidden xs:inline">{language === "ta" ? "தொடர்பு கொள்ள" : "Call Now"}</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative w-full bg-[#0A0D12] text-white overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-gated-layout.jpg"
            alt="Surya Promoters Real Estate in Madurai"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 brightness-90 contrast-105 scale-105 animate-subtle-pulse"
          />
          {/* Deep Obsidian & Warm Gold Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/70 to-[#0A0D12]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center">
          
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#EAB308] text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{language === "ta" ? "மதுரை பிரீமியம் நில மேம்பாட்டாளர்கள்" : "Madurai's Most Trusted Land Developers"}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl leading-[1.15] mb-4 text-white">
            {language === "ta" ? (
              <>
                உங்கள் நிலம். உங்கள் எதிர்காலம். <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEF08A] via-[#EAB308] to-[#B45309]">
                  மதுரையில் நிலைத்த வளர்ச்சி.
                </span>
              </>
            ) : (
              <>
                Your Land. Your Future. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEF08A] via-[#EAB308] to-[#B45309]">
                  In Madurai.
                </span>
              </>
            )}
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-medium mb-6">
            {language === "ta"
              ? "குடியிருப்பு மனைகள் & அடுக்குமாடிகள் · வணிக வழித்தடங்கள் · வேளாண் & பழத்தோட்ட பண்ணை நிலங்கள்"
              : "Residential Plots & Flats · Commercial Highway Corridors · Agro & Orchard Farm Land"}
          </p>

          {/* Quick Search & Filter Input */}
          <div className="w-full max-w-xl relative mb-8">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "ta"
                    ? "திட்டங்கள், இடங்கள், வணிக நிலங்களைத் தேடுங்கள்..."
                    : "Search projects (e.g. Vaigai Elite, Orange Garden, Flats)..."
                }
                className="w-full pl-12 pr-10 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-[#0A0D12] placeholder-neutral-400 focus:placeholder-neutral-500 rounded-2xl border border-white/20 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/20 text-sm font-semibold transition-all outline-hidden backdrop-blur-md shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 rounded-full text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Key Trust Stats Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-4 border-t border-white/10">
            <div className="flex flex-col items-center p-2">
              <span className="text-xl sm:text-2xl font-black text-[#EAB308]">100%</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                {language === "ta" ? "கணினி பட்டா" : "Clear Computer Patta"}
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-xl sm:text-2xl font-black text-[#EAB308]">16+ Yrs</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                {language === "ta" ? "நம்பகமான அனுபவம்" : "Legacy Since 2010"}
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-xl sm:text-2xl font-black text-[#EAB308]">1000+</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                {language === "ta" ? "மகிழ்ச்சியான குடும்பங்கள்" : "Happy Families"}
              </span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-xl sm:text-2xl font-black text-[#EAB308]">0 Disputes</span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                {language === "ta" ? "சட்ட சிக்கல்கள் இல்லாதவை" : "Zero Legal Disputes"}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. APP-STYLE PLAY STORE 5 ICONS DASHBOARD DOCKED CONTAINER */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-3 sm:p-5 shadow-2xl border border-neutral-200/80">
          
          {/* Header of the App Navigation Dock */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-neutral-100 gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#EAB308] animate-ping" />
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-neutral-500 uppercase">
                {language === "ta" ? "சூர்யா புரமோட்டர்ஸ் பிரதான சேவைகள்" : "Surya Promoters Application Suite"}
              </h2>
            </div>
            <div className="text-[11px] text-neutral-400 font-medium">
              {language === "ta" ? "கீழே உள்ள ஐகான்களைக் கிளிக் செய்து உடனடியாக ஆராயுங்கள்" : "Click any app tile below to explore"}
            </div>
          </div>

          {/* THE 5 PLAY STORE STYLE APPLICATION ICONS */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-4">
            
            {/* App Icon 1: Our Projects */}
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                activeTab === "projects"
                  ? "bg-gradient-to-b from-[#0A0D12] to-[#1E293B] text-white shadow-xl ring-2 ring-[#EAB308] scale-[1.02]"
                  : "bg-neutral-50 hover:bg-neutral-100/90 text-neutral-800 border border-neutral-200/60"
              }`}
            >
              <div className={`relative h-13 w-13 sm:h-15 sm:w-15 rounded-2xl flex items-center justify-center mb-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 ${
                activeTab === "projects"
                  ? "bg-gradient-to-br from-[#FEF08A] to-[#EAB308] text-[#0A0D12]"
                  : "bg-white text-[#B45309] border border-amber-200"
              }`}>
                <Building2 className="h-7 w-7" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-[#EAB308] text-[#0A0D12]">
                  9
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${activeTab === "projects" ? "text-white" : "text-neutral-900"}`}>
                {language === "ta" ? "திட்டங்கள்" : "Our Projects"}
              </span>
              <span className={`text-[10px] mt-0.5 font-medium line-clamp-1 ${activeTab === "projects" ? "text-amber-300" : "text-neutral-500"}`}>
                {language === "ta" ? "3 பிரிவுகள் · 9 தளங்கள்" : "3 Categories · 9 Sites"}
              </span>
            </button>

            {/* App Icon 2: Location */}
            <button
              onClick={() => setActiveTab("location")}
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                activeTab === "location"
                  ? "bg-gradient-to-b from-[#0A0D12] to-[#1E293B] text-white shadow-xl ring-2 ring-[#EAB308] scale-[1.02]"
                  : "bg-neutral-50 hover:bg-neutral-100/90 text-neutral-800 border border-neutral-200/60"
              }`}
            >
              <div className={`relative h-13 w-13 sm:h-15 sm:w-15 rounded-2xl flex items-center justify-center mb-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 ${
                activeTab === "location"
                  ? "bg-gradient-to-br from-[#FEF08A] to-[#EAB308] text-[#0A0D12]"
                  : "bg-white text-blue-600 border border-blue-200"
              }`}>
                <Navigation className="h-7 w-7" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-blue-600 text-white">
                  GPS
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${activeTab === "location" ? "text-white" : "text-neutral-900"}`}>
                {language === "ta" ? "இருப்பிடம்" : "Location"}
              </span>
              <span className={`text-[10px] mt-0.5 font-medium line-clamp-1 ${activeTab === "location" ? "text-amber-300" : "text-neutral-500"}`}>
                {language === "ta" ? "கூகிள் மேப்ஸ் வழித்தடம்" : "All Project Google Maps"}
              </span>
            </button>

            {/* App Icon 3: Gallery */}
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                activeTab === "gallery"
                  ? "bg-gradient-to-b from-[#0A0D12] to-[#1E293B] text-white shadow-xl ring-2 ring-[#EAB308] scale-[1.02]"
                  : "bg-neutral-50 hover:bg-neutral-100/90 text-neutral-800 border border-neutral-200/60"
              }`}
            >
              <div className={`relative h-13 w-13 sm:h-15 sm:w-15 rounded-2xl flex items-center justify-center mb-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 ${
                activeTab === "gallery"
                  ? "bg-gradient-to-br from-[#FEF08A] to-[#EAB308] text-[#0A0D12]"
                  : "bg-white text-purple-600 border border-purple-200"
              }`}>
                <Camera className="h-7 w-7" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-purple-600 text-white">
                  HD
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${activeTab === "gallery" ? "text-white" : "text-neutral-900"}`}>
                {language === "ta" ? "புகைப்படங்கள் & வீடியோ" : "Gallery"}
              </span>
              <span className={`text-[10px] mt-0.5 font-medium line-clamp-1 ${activeTab === "gallery" ? "text-amber-300" : "text-neutral-500"}`}>
                {language === "ta" ? "வீடியோ & புகைப்பட கோப்புகள்" : "Videos & Photos Folders"}
              </span>
            </button>

            {/* App Icon 4: About */}
            <button
              onClick={() => setActiveTab("about")}
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                activeTab === "about"
                  ? "bg-gradient-to-b from-[#0A0D12] to-[#1E293B] text-white shadow-xl ring-2 ring-[#EAB308] scale-[1.02]"
                  : "bg-neutral-50 hover:bg-neutral-100/90 text-neutral-800 border border-neutral-200/60"
              }`}
            >
              <div className={`relative h-13 w-13 sm:h-15 sm:w-15 rounded-2xl flex items-center justify-center mb-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 ${
                activeTab === "about"
                  ? "bg-gradient-to-br from-[#FEF08A] to-[#EAB308] text-[#0A0D12]"
                  : "bg-white text-emerald-700 border border-emerald-200"
              }`}>
                <ShieldCheck className="h-7 w-7" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-emerald-700 text-white">
                  IAF
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${activeTab === "about" ? "text-white" : "text-neutral-900"}`}>
                {language === "ta" ? "எங்களைப் பற்றி" : "About Surya"}
              </span>
              <span className={`text-[10px] mt-0.5 font-medium line-clamp-1 ${activeTab === "about" ? "text-amber-300" : "text-neutral-500"}`}>
                {language === "ta" ? "நிறுவனர் & 16+ வருட வரலாறு" : "Founder & 16+ Yrs Legacy"}
              </span>
            </button>

            {/* App Icon 5: Download Map */}
            <button
              onClick={() => setActiveTab("download")}
              className={`col-span-2 sm:col-span-1 flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                activeTab === "download"
                  ? "bg-gradient-to-b from-[#0A0D12] to-[#1E293B] text-white shadow-xl ring-2 ring-[#EAB308] scale-[1.02]"
                  : "bg-neutral-50 hover:bg-neutral-100/90 text-neutral-800 border border-neutral-200/60"
              }`}
            >
              <div className={`relative h-13 w-13 sm:h-15 sm:w-15 rounded-2xl flex items-center justify-center mb-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 ${
                activeTab === "download"
                  ? "bg-gradient-to-br from-[#FEF08A] to-[#EAB308] text-[#0A0D12]"
                  : "bg-white text-amber-700 border border-amber-200"
              }`}>
                <Download className="h-7 w-7" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-amber-600 text-white">
                  PDF
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${activeTab === "download" ? "text-white" : "text-neutral-900"}`}>
                {language === "ta" ? "வரைபடம் பதிவிறக்கம்" : "Download Map"}
              </span>
              <span className={`text-[10px] mt-0.5 font-medium line-clamp-1 ${activeTab === "download" ? "text-amber-300" : "text-neutral-500"}`}>
                {language === "ta" ? "புளூபிரிண்ட், கையேடு, வீடியோ" : "Blueprints, Videos & Maps"}
              </span>
            </button>

          </div>

          {/* DIRECT COMMUNICATION CHANNELS BAR */}
          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <span className="font-bold text-neutral-700 flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#B45309]" />
              {language === "ta" ? "நேரடி தொடர்பு வழிமுறைகள்:" : "Direct Communication Channels:"}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="tel:+917708966452"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-amber-100/80 text-neutral-900 font-bold transition-colors cursor-pointer"
              >
                <Phone className="h-3 w-3 text-neutral-700" />
                <span>+91 77089 66452</span>
              </a>

              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20project%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold transition-colors cursor-pointer"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-[#128C7E]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:suryapromotersmdu@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold transition-colors cursor-pointer"
              >
                <Mail className="h-3 w-3 text-neutral-700" />
                <span>Email</span>
              </a>

              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-bold transition-colors shadow-xs cursor-pointer"
              >
                <FileCheck className="h-3.5 w-3.5 text-[#EAB308]" />
                <span>{language === "ta" ? "விசாரணை படிவம்" : "Quick Enquiry"}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MAIN DYNAMIC APPLICATION WORKFLOW VIEWS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* ========================================================================= */}
        {/* VIEW 1: OUR PROJECTS (Residential, Commercial, Farm Land)                 */}
        {/* ========================================================================= */}
        {activeTab === "projects" && (
          <section className="space-y-6 animate-fadeIn">
            
            {/* Header & Category Selection Boxes/Icons */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-neutral-100 gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>{language === "ta" ? "திட்டங்கள் மற்றும் பிரிவுகள்" : "Explore Project Categories"}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    {language === "ta" ? "எங்களின் நில மேம்பாட்டு திட்டங்கள்" : "Surya Promoters Portfolio"}
                  </h2>
                </div>

                {/* Category Selection Tabs (Residential, Commercial, Farm Land) */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setProjectCategory("all")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      projectCategory === "all"
                        ? "bg-[#0A0D12] text-white shadow-md"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    {language === "ta" ? "அனைத்தும் (9)" : "All Projects (9)"}
                  </button>

                  <button
                    onClick={() => setProjectCategory("residential")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      projectCategory === "residential"
                        ? "bg-[#B45309] text-white shadow-md shadow-amber-900/20"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    <Home className="h-3.5 w-3.5" />
                    <span>{language === "ta" ? "குடியிருப்பு (2)" : "1. Residential (2)"}</span>
                  </button>

                  <button
                    onClick={() => setProjectCategory("commercial")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      projectCategory === "commercial"
                        ? "bg-[#0A0D12] text-white shadow-md"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[#EAB308]" />
                    <span>{language === "ta" ? "வணிகம் (5)" : "2. Commercial (5)"}</span>
                  </button>

                  <button
                    onClick={() => setProjectCategory("farm")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      projectCategory === "farm"
                        ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    <Trees className="h-3.5 w-3.5" />
                    <span>{language === "ta" ? "பண்ணை நிலம் (2)" : "3. Farm Land (2)"}</span>
                  </button>
                </div>
              </div>

              {/* Sub-Category Descriptive Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                <span className="font-semibold text-neutral-400">
                  {language === "ta" ? "பிரிவு விவரங்கள்:" : "Category Highlights:"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 font-medium">
                  {language === "ta" ? "1. குடியிருப்பு: பிளாட் & மனைப்பிரிவுகள்" : "1. Residential: Flats & Villa Plots"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 font-medium">
                  {language === "ta" ? "2. வணிகம்: நெடுஞ்சாலை நிலம் & கட்டிடங்கள்" : "2. Commercial: Highway Corridors & Buildings"}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 font-medium">
                  {language === "ta" ? "3. பண்ணை: வேளாண் பண்ணை & ஆரஞ்ச் கார்டன்" : "3. Farm Land: Agro Acreage & Orange Garden"}
                </span>
              </div>
            </div>

            {/* PROJECTS GRID (Cards with high-resolution generated and real images) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Project Image & Badges */}
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={project.name.en}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/80 via-transparent to-black/20" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0A0D12]/85 text-[#EAB308] border border-[#EAB308]/40 backdrop-blur-md">
                      {project.statusBadge[language]}
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/90 text-[#0A0D12] shadow-xs">
                      {project.categoryLabel[language]}
                    </div>

                    {/* Title overlay in image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-semibold text-amber-300 block">
                        {project.subcategoryLabel[language]}
                      </span>
                      <h3 className="text-lg font-black tracking-tight leading-tight drop-shadow-md">
                        {project.name[language]}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Location & Highway tag */}
                      <div className="flex items-start gap-1.5 text-xs text-neutral-600 mb-3">
                        <MapPin className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                        <span className="font-semibold line-clamp-1">{project.location[language]}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                        {project.description[language]}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-5 pb-4 border-b border-neutral-100">
                        {project.highlights[language].slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-700 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-[#0A0D12] text-neutral-900 hover:text-white text-xs font-bold transition-all text-center cursor-pointer"
                      >
                        {language === "ta" ? "முழு விவரம்" : "Project Details"}
                      </button>

                      <a
                        href={`https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20want%20details%20for%20${encodeURIComponent(
                          project.name.en
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>{language === "ta" ? "விசாரிக்க" : "Enquire Now"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: LOCATION (All Project Maps in Card Style)                         */}
        {/* ========================================================================= */}
        {activeTab === "location" && (
          <section className="space-y-6 animate-fadeIn">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  <Navigation className="h-4 w-4" />
                  <span>{language === "ta" ? "அனைத்து திட்டங்களின் இருப்பிட வரைபடம்" : "Google Maps Geolocation Hub"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  {language === "ta" ? "திட்டங்களின் வரைபடம் & அமைவிடம்" : "All Project Map Locations"}
                </h2>
                <p className="text-sm text-neutral-600 font-medium">
                  {language === "ta"
                    ? "மதுரையின் முக்கிய போக்குவரத்து மையங்கள், விமான நிலையம் மற்றும் தேசிய நெடுஞ்சாலைகளில் அமைந்துள்ள எங்களின் அனைத்து திட்டங்களையும் வரைபடத்தில் நேரடியாக பாருங்கள்."
                    : "Directly navigate to each development along Madurai's NH-44, Ring Road, and transit hubs using verified Google Maps links."}
                </p>
              </div>
            </div>

            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Image Thumbnail + Category */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="relative h-14 w-14 rounded-2xl overflow-hidden shrink-0 border border-neutral-200">
                        <Image
                          src={project.image}
                          alt={project.name.en}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-blue-50 text-blue-700">
                          {project.categoryLabel[language]}
                        </span>
                        <h3 className="font-extrabold text-neutral-900 text-sm mt-1 leading-snug">
                          {project.name[language]}
                        </h3>
                      </div>
                    </div>

                    {/* Address & Highway Details */}
                    <div className="bg-neutral-50 rounded-2xl p-3.5 mb-4 border border-neutral-100 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-neutral-700">
                        <MapPin className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                        <span className="font-medium">{project.location[language]}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[11px] text-neutral-500 font-medium">
                        <Navigation className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{project.distanceInfo[language]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <a
                      href={project.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>{language === "ta" ? "கூகிள் மேப்ஸில் திறக்க" : "Open in Google Maps"}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-all text-center cursor-pointer"
                    >
                      {language === "ta" ? "திட்டத்தின் குறிப்புகள்" : "View Project Overview"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: GALLERY (Videos and Images in Folder Style)                       */}
        {/* ========================================================================= */}
        {activeTab === "gallery" && (
          <section className="space-y-8 animate-fadeIn">
            
            {/* Gallery Intro Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                  <Camera className="h-4 w-4" />
                  <span>{language === "ta" ? "வீடியோக்கள் & புகைப்பட தொகுப்பு" : "Multimedia Asset Folders"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {language === "ta" ? "கோப்பு முறை புகைப்பட & வீடியோ மையம்" : "Folder-Style Media Gallery"}
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  {language === "ta"
                    ? "அனைத்து திட்டங்களின் ட்ரோன் வீடியோக்கள் மற்றும் புகைப்படங்கள் கோப்பு வடிவில் ஏற்பாடு செய்யப்பட்டுள்ளன."
                    : "Organized by project folders for easy browsing of HD aerial drone footage and on-ground photos."}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                  {language === "ta" ? "5 வீடியோ கோப்புகள்" : "5 Video Folders"}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-[#B45309] border border-amber-200">
                  {language === "ta" ? "5 புகைப்பட கோப்புகள்" : "5 Image Folders"}
                </span>
              </div>
            </div>

            {/* SECTION 1: VIDEOS IN FOLDER STYLE */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-extrabold text-neutral-900">
                  {language === "ta" ? "1. வீடியோ கோப்புகள் (Folder Style)" : "1. Video Folders (Folder Style)"}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {GALLERY_VIDEO_FOLDERS.map((folder) => (
                  <div
                    key={folder.id}
                    className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Folder Top Tab Graphic */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                          <Folder className="h-3.5 w-3.5 fill-purple-700" />
                          <span>{folder.count}</span>
                        </div>
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                          4K Reel
                        </span>
                      </div>

                      {/* Folder Thumbnail with Play Overlay */}
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-neutral-900 group">
                        <Image
                          src={folder.thumbnail}
                          alt={folder.title.en}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-white/90 text-purple-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="h-5 w-5 fill-purple-700 ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <h4 className="font-extrabold text-neutral-900 text-base mb-2">
                        {folder.title[language]}
                      </h4>

                      {/* Video Items inside this folder */}
                      <div className="space-y-1.5 mb-4">
                        {folder.videos.map((vid, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedVideo({ title: vid.title[language], duration: vid.duration })}
                            className="w-full text-left flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 transition-colors text-xs text-neutral-700 cursor-pointer group/vid"
                          >
                            <span className="font-semibold line-clamp-1 group-hover/vid:text-purple-700">
                              ▶ {vid.title[language]}
                            </span>
                            <span className="text-[10px] text-neutral-400 font-mono ml-2 shrink-0">
                              {vid.duration}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedVideo({ title: folder.videos[0].title[language], duration: folder.videos[0].duration })}
                      className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-purple-700" />
                      <span>{language === "ta" ? "வீடியோ இயக்க" : "Play Folder Videos"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: IMAGES IN FOLDER STYLE */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-[#B45309]" />
                <h3 className="text-lg font-extrabold text-neutral-900">
                  {language === "ta" ? "2. புகைப்பட கோப்புகள் (Folder Style)" : "2. Image Folders (Folder Style)"}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {GALLERY_IMAGE_FOLDERS.map((folder) => (
                  <div
                    key={folder.id}
                    className="bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Tab Graphic */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-50 text-[#B45309] text-xs font-bold border border-amber-200">
                          <Folder className="h-3.5 w-3.5 fill-[#B45309]" />
                          <span>{folder.count}</span>
                        </div>
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                          HD Photos
                        </span>
                      </div>

                      {/* Folder Cover Stack */}
                      <div
                        onClick={() => setSelectedFolderImages({ title: folder.title[language], images: folder.images })}
                        className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-neutral-900 cursor-pointer group"
                      >
                        <Image
                          src={folder.thumbnail}
                          alt={folder.title.en}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Maximize2 className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      <h4 className="font-extrabold text-neutral-900 text-base mb-1">
                        {folder.title[language]}
                      </h4>
                      <p className="text-xs text-neutral-500 mb-4">
                        {language === "ta" ? "அதிவேக HD புகைப்படங்கள் பார்வை" : "High-resolution project gallery photos"}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedFolderImages({ title: folder.title[language], images: folder.images })}
                      className="w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-[#0A0D12] text-neutral-900 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Camera className="h-3.5 w-3.5" />
                      <span>{language === "ta" ? "புகைப்படங்களை பார்க்க" : "View Photo Gallery"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: ABOUT (Surya Promoters Details & Founder Profile)                  */}
        {/* ========================================================================= */}
        {activeTab === "about" && (
          <section className="space-y-8 animate-fadeIn">
            
            {/* Founder Highlight Banner */}
            <div className="bg-gradient-to-br from-[#0A0D12] to-[#1E293B] text-white rounded-3xl p-6 sm:p-10 border border-[#EAB308]/20 shadow-xl overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                
                {/* Founder Photo */}
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-3xl overflow-hidden shrink-0 border-4 border-[#EAB308] shadow-2xl p-1 bg-white/10">
                  <Image
                    src="/images/founder/founder.png"
                    alt="Mr. Manickam Natarajan - Founder & Director"
                    fill
                    sizes="224px"
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-2 left-2 right-2 py-1 px-2 rounded-xl bg-[#0A0D12]/90 backdrop-blur-md text-[10px] font-black text-center text-[#EAB308] border border-[#EAB308]/30">
                    IAF VETERAN DIRECTED
                  </div>
                </div>

                {/* Founder Story */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAB308]/20 text-[#EAB308] text-xs font-black uppercase tracking-wider mb-3">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{language === "ta" ? "நிறுவனர் மற்றும் நிர்வாக இயக்குனர்" : "Founder & Managing Director"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
                    {language === "ta" ? "திரு. மாணிக்கம் நடராஜன்" : "Mr. Manickam Natarajan"}
                  </h2>

                  <p className="text-sm font-semibold text-amber-300 mb-4">
                    {language === "ta"
                      ? "இந்திய விமானப்படை முன்னாள் அதிகாரி (Indian Air Force Veteran)"
                      : "Indian Air Force Veteran · Established Surya Promoters in 2010"}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-medium">
                    {language === "ta"
                      ? "இந்திய விமானப்படையில் பணியாற்றிய ஒழுக்கம், நேர்மை மற்றும் கடமை உணர்வுடன் 2010 ஆம் ஆண்டு சூர்யா புரமோட்டர்ஸ் தொடங்கப்பட்டது. ஒவ்வொரு சதுர அடி நிலமும் 100% தெளிவான கணினி பட்டா மற்றும் 30 வருட மூலப்பத்திர ஆய்வுக்கு பின்னரே வாடிக்கையாளர்களுக்கு வழங்கப்படுகிறது."
                      : "Founded in 2010 on principles of military precision, unyielding honesty, and zero-compromise on legal due diligence. Every plot and land parcel developed by Surya Promoters carries verified 30-year parent documentation, computerized patta, and complete peace of mind."}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
                      <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                      <span>{language === "ta" ? "100% கணினி பட்டா உத்தரவாதம்" : "100% Computer Patta Guarantee"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
                      <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                      <span>{language === "ta" ? "0 சட்ட சிக்கல்கள்" : "Zero Title Disputes"}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Success Metrics & Client Satisfaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-sm text-center">
                <span className="text-4xl font-black text-[#B45309]">16+</span>
                <h4 className="font-extrabold text-neutral-900 text-sm mt-1 mb-1">
                  {language === "ta" ? "ஆண்டுகள் அனுபவம்" : "Years of Legacy"}
                </h4>
                <p className="text-xs text-neutral-500">
                  {language === "ta" ? "2010 முதல் மதுரையில் முதன்மை சேவை" : "Serving Madurai since 2010"}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-sm text-center">
                <span className="text-4xl font-black text-[#0A0D12]">1000+</span>
                <h4 className="font-extrabold text-neutral-900 text-sm mt-1 mb-1">
                  {language === "ta" ? "மகிழ்ச்சியான வாடிக்கையாளர்கள்" : "Satisfied Families"}
                </h4>
                <p className="text-xs text-neutral-500">
                  {language === "ta" ? "தமிழ்நாடு முழுவதும் பதிவு செய்யப்பட்ட மனைகள்" : "Settled across Tamil Nadu"}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-sm text-center">
                <span className="text-4xl font-black text-emerald-700">100%</span>
                <h4 className="font-extrabold text-neutral-900 text-sm mt-1 mb-1">
                  {language === "ta" ? "தெளிவான கணினி பட்டா" : "Clear Computer Titles"}
                </h4>
                <p className="text-xs text-neutral-500">
                  {language === "ta" ? "வருவாய்த்துறை ஒப்புதல் பெற்ற நிலங்கள்" : "Zero encumbrance record"}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-sm text-center">
                <div className="flex items-center justify-center gap-1 text-[#EAB308]">
                  <Star className="h-7 w-7 fill-[#EAB308]" />
                  <span className="text-4xl font-black text-neutral-900">4.9</span>
                </div>
                <h4 className="font-extrabold text-neutral-900 text-sm mt-1 mb-1">
                  {language === "ta" ? "வாடிக்கையாளர் திருப்தி" : "Trust Rating"}
                </h4>
                <p className="text-xs text-neutral-500">
                  {language === "ta" ? "வாடிக்கையாளர் மதிப்பீடு" : "Based on verified buyer reviews"}
                </p>
              </div>
            </div>

            {/* Core Pillars: Vision, Mission, Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
                <div className="h-10 w-10 rounded-2xl bg-amber-50 text-[#B45309] flex items-center justify-center mb-4">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="font-black text-neutral-900 text-lg mb-2">
                  {language === "ta" ? "எங்களின் நோக்கம் (Vision)" : "Our Vision"}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {language === "ta"
                    ? "ஒவ்வொரு குடும்பமும் பாதுகாப்பான, அதிவேக மதிப்பு உயர்வு கொண்ட நில உரிமையாளராக மாற உயர்தர நிலங்களை குறைந்த செலவில் உருவாக்குதல்."
                    : "To empower every aspiring landowner with safe, high-appreciation, legally immaculate real estate opportunities across southern Tamil Nadu."}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
                <div className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-black text-neutral-900 text-lg mb-2">
                  {language === "ta" ? "எங்களின் உறுதிமொழி (Mission)" : "Our Mission"}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {language === "ta"
                    ? "விமானப்படை ஒழுங்குமுறையுடன் ஒவ்வொரு பட்டாவையும் ஆய்வு செய்து, எதிர்கால சந்ததிக்கான நிலைத்த சொத்துக்களை உருவாக்குதல்."
                    : "To maintain military rigor in document scrutiny, ensuring zero disputes, instant individual computer patta, and unmatched infrastructure quality."}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
                <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="font-black text-neutral-900 text-lg mb-2">
                  {language === "ta" ? "சாதனைகள் & நம்பகத்தன்மை" : "Achievements & Integrity"}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {language === "ta"
                    ? "16 ஆண்டுகளுக்கும் மேலாக ஒரு சிறிய சட்ட தகராறு கூட இல்லாத நம்பகமான ரியல் எஸ்டேட் நிறுவனமாக மதுரையில் செயல்பட்டு வருகிறோம்."
                    : "Over 16 continuous years of clean business operation without a single court case or contested title deed across residential, commercial, and agro projects."}
                </p>
              </div>

            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: DOWNLOAD MAP (Blueprints, Layout Maps, Brochures)                 */}
        {/* ========================================================================= */}
        {activeTab === "download" && (
          <section className="space-y-6 animate-fadeIn">
            
            {/* Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  <Download className="h-4 w-4" />
                  <span>{language === "ta" ? "அதிகாரப்பூர்வ வரைபடங்கள் மற்றும் ஆவணங்கள்" : "Official Downloads Hub"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {language === "ta" ? "வரைபடம், புளூபிரிண்ட் & கையேடுகள் பதிவிறக்கம்" : "Download Project Maps & Resources"}
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  {language === "ta"
                    ? "ஆரஞ்ச் கார்டன், வைகை எலைட், பசுமை நகர் உள்ளிட்ட அனைத்து திட்டங்களின் புளூபிரிண்ட், கையேடுகள் மற்றும் வீடியோக்களை பதிவிறக்குங்கள்."
                    : "Download high-resolution cadastral layout maps, site blueprints, project brochures, and video reels directly."}
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-[#B45309] text-xs font-extrabold shrink-0">
                {language === "ta" ? "100% இலவச பதிவிறக்கம்" : "Instant Free Access"}
              </div>
            </div>

            {/* Toast Notification */}
            {downloadSuccessToast && (
              <div className="p-4 rounded-2xl bg-[#0A0D12] text-[#EAB308] border border-[#EAB308]/40 shadow-xl flex items-center justify-between animate-bounce">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#EAB308]" />
                  <span className="text-xs sm:text-sm font-bold">{downloadSuccessToast}</span>
                </div>
                <button
                  onClick={() => setDownloadSuccessToast(null)}
                  className="text-white hover:text-[#EAB308] text-xs"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Downloads List Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DOWNLOAD_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-amber-100/70 text-amber-900">
                        {item.category[language]}
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-mono">
                        {item.fileSize}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-neutral-900 text-base mb-1">
                      {item.title[language]}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-5">
                      <FileText className="h-3.5 w-3.5 text-[#B45309]" />
                      <span>{item.fileType}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">{item.badge}</span>
                    </div>
                  </div>

                  {/* Download Action */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={item.downloadUrl}
                      download
                      onClick={() => handleDownloadTrigger(item.title[language])}
                      className="py-2.5 px-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5 text-[#EAB308]" />
                      <span>{language === "ta" ? "பதிவிறக்க" : "Download File"}</span>
                    </a>

                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
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

      </main>

      {/* ========================================================================= */}
      {/* 5. INDIVIDUAL PROJECT DETAILS MODAL                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Header Banner & Visuals */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-neutral-900">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name.en}
                    fill
                    sizes="800px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-[#EAB308] text-[#0A0D12]">
                      {selectedProject.categoryLabel[language]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-white backdrop-blur-md">
                      {selectedProject.subcategoryLabel[language]}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl sm:text-4xl font-black drop-shadow-md">
                      {selectedProject.name[language]}
                    </h2>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 mt-1">
                      <MapPin className="h-4 w-4 text-[#EAB308]" />
                      <span>{selectedProject.location[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Cadastral Blueprint Section if available */}
                {selectedProject.blueprint && (
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#B45309] tracking-wider flex items-center gap-1.5">
                        <FileCheck className="h-4 w-4" />
                        {language === "ta" ? "அங்கீகரிக்கப்பட்ட கள வரைபடம் (Blueprint)" : "Cadastral Layout Blueprint"}
                      </span>
                      <a
                        href={selectedProject.blueprint}
                        download
                        className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="h-3 w-3" />
                        {language === "ta" ? "பதிவிறக்க" : "Download Blueprint"}
                      </a>
                    </div>
                    <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-neutral-900 border border-amber-200">
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

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProject.specs.map((spec, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-0.5">
                        {spec.label[language]}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-neutral-900 block">
                        {spec.value[language]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Overview Description */}
                <div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-2">
                    {language === "ta" ? "திட்டத்தின் முழு விவரம்" : "Project Overview"}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                    {selectedProject.description[language]}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-2.5">
                    {language === "ta" ? "முக்கிய சிறப்பம்சங்கள்" : "Key Highlights & Advantages"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights[language].map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Call to Actions */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={selectedProject.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Navigation className="h-4 w-4 text-blue-600" />
                    <span>{language === "ta" ? "கூகிள் மேப்ஸில் பார்க்க" : "View on Google Maps"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href="tel:+917708966452"
                      className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#0A0D12] text-white hover:bg-neutral-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
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
                      className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 6. FOLDER PHOTO LIGHTBOX MODAL                                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedFolderImages && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-[#B45309]" />
                  <h3 className="text-lg font-black text-neutral-900">{selectedFolderImages.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedFolderImages(null)}
                  className="p-1 rounded-full text-neutral-500 hover:text-black cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedFolderImages.images.map((img, idx) => (
                  <div key={idx} className="relative h-56 rounded-2xl overflow-hidden bg-neutral-900 group">
                    <Image
                      src={img}
                      alt={`Gallery Photo ${idx + 1}`}
                      fill
                      sizes="350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <a
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 p-2 rounded-xl bg-black/60 text-white hover:bg-black transition-colors"
                      title="Open full image"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 7. VIDEO PLAYER MODAL                                                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0A0D12] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-black text-white">{selectedVideo.title}</h3>
                  <span className="text-xs text-amber-400 font-mono">Duration: {selectedVideo.duration}</span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Video Simulated Screen */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center justify-center p-6 text-center border border-neutral-800">
                <div className="h-16 w-16 rounded-full bg-[#EAB308] text-[#0A0D12] flex items-center justify-center mb-4 shadow-xl">
                  <Play className="h-7 w-7 fill-[#0A0D12] ml-1" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">{selectedVideo.title}</h4>
                <p className="text-xs text-neutral-400 max-w-md mb-4">
                  {language === "ta"
                    ? "நேரடி தள ஆய்வு மற்றும் ட்ரோன் காட்சிகளைப் பார்க்க எங்கள் வாட்ஸ்அப் அல்லது தொலைபேசி எண்ணை தொடர்பு கொள்ளவும்."
                    : "Full 4K drone footage available on request. Contact our representative to schedule an on-site visit."}
                </p>
                <a
                  href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20full%20project%20video."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>{language === "ta" ? "முழு வீடியோவை வாட்ஸ்அப்பில் பெற" : "Request Video on WhatsApp"}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 8. QUICK ENQUIRY MODAL                                                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isEnquiryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-black text-neutral-900">
                    {language === "ta" ? "நேரடி விசாரணை படிவம்" : "Direct Enquiry Form"}
                  </h3>
                  <span className="text-xs text-neutral-500">
                    {language === "ta" ? "எங்கள் அதிகாரி உங்களை விரைவில் தொடர்புகொள்வார்" : "Our advisor will respond within 15 minutes"}
                  </span>
                </div>
                <button
                  onClick={() => setIsEnquiryModalOpen(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-black cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(language === "ta" ? "நன்றி! உங்கள் தகவல் பெறப்பட்டது." : "Thank you! Your enquiry has been submitted.");
                  setIsEnquiryModalOpen(false);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    {language === "ta" ? "உங்கள் பெயர்" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs font-medium outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    {language === "ta" ? "தொலைபேசி எண்" : "Mobile Number"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#EAB308] focus:ring-2 focus:ring-[#EAB308]/20 text-xs font-medium outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    {language === "ta" ? "விருப்பமான திட்டம்" : "Interested Project"}
                  </label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#EAB308] text-xs font-medium outline-hidden bg-white">
                    <option value="Vaigai Elite Garden">Vaigai Elite Garden (Commercial)</option>
                    <option value="Orange Garden">Orange Garden (Gated Orchard)</option>
                    <option value="Madurai Farms & Fruits">Madurai Farms & Fruits (Agro)</option>
                    <option value="Residential Flat">Residential Flat Projects</option>
                    <option value="Residential Plot">Residential Plot Projects</option>
                    <option value="Commercial Building Anna Nagar">Commercial Building – Anna Nagar</option>
                    <option value="Pandi Kovil Site">Pandi Kovil Site</option>
                    <option value="Vaigai River Build">Vaigai River Build</option>
                    <option value="Mayilan Gundu Site">Mayilan Gundu Site (MPF School)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    {language === "ta" ? "செய்தி / குறிப்பு (விரும்பினால்)" : "Message (Optional)"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={language === "ta" ? "உங்கள் கேள்விகளை இங்கே பதிவு செய்யவும்..." : "Your questions or site visit request..."}
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 focus:border-[#EAB308] text-xs font-medium outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0A0D12] hover:bg-neutral-800 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#EAB308]" />
                  <span>{language === "ta" ? "விசாரணையை சமர்ப்பிக்க" : "Submit Enquiry"}</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
