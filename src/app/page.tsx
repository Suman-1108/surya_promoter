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
  Phone,
  MessageCircle,
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
  FileCheck,
} from "lucide-react";

// Project Data Model for the 4-Card Workflow
interface WorkflowProject {
  id: string;
  name: { en: string; ta: string };
  category: "residential" | "commercial" | "farm";
  categoryLabel: { en: string; ta: string };
  subcategory: "flat" | "plot" | "comm-building" | "comm-land" | "farm-land";
  subcategoryLabel: { en: string; ta: string };
  location: { en: string; ta: string };
  image: string;
  blueprint?: string;
  statusBadge: { en: string; ta: string };
  overview: { en: string; ta: string };
  highlights: { en: string[]; ta: string[] };
  mapsUrl: string;
  specs: { label: { en: string; ta: string }; value: { en: string; ta: string } }[];
}

const WORKFLOW_PROJECTS: WorkflowProject[] = [
  // 1. Residential - Flat Projects
  {
    id: "flat-projects",
    name: { en: "Flat Projects – Modern Apartments", ta: "பிளாட் திட்டங்கள் – நவீன அடுக்குமாடிகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "flat",
    subcategoryLabel: { en: "Flat Projects", ta: "அடுக்குமாடி" },
    location: { en: "Prime Residential Belts, Madurai", ta: "மதுரை பிரதான குடியிருப்பு பகுதி" },
    image: "/images/generated/residential-flat.jpg",
    statusBadge: { en: "Ongoing Project", ta: "விற்பனையில் உள்ளது" },
    overview: {
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
    id: "plot-projects",
    name: { en: "Plot Projects – Well-Planned Layouts", ta: "மனைப்பிரிவு திட்டங்கள் – வீட்டு மனைகள்" },
    category: "residential",
    categoryLabel: { en: "Residential", ta: "குடியிருப்பு" },
    subcategory: "plot",
    subcategoryLabel: { en: "Plot Projects", ta: "மனைப்பிரிவு" },
    location: { en: "Fast-Growing Residential Corridors, Madurai", ta: "மதுரை அதிவேக வளர்ச்சி குடியிருப்பு வழித்தடம்" },
    image: "/images/generated/residential-plot.jpg",
    statusBadge: { en: "Ready to Register", ta: "உடனடி பதிவு" },
    overview: {
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
    image: "/images/generated/vaigai-elite-garden.jpg",
    statusBadge: { en: "Prime Corridor", ta: "பிரைம் காரிடார்" },
    overview: {
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
    image: "/images/generated/vaigai-river-build.jpg",
    statusBadge: { en: "Riverfront Prime", ta: "நதிக்கரை பிரைம்" },
    overview: {
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
    image: "/images/generated/pandi-kovil-site.jpg",
    statusBadge: { en: "High Footfall", ta: "அதிக மக்கள் வரத்து" },
    overview: {
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
    image: "/images/generated/commercial-anna-nagar.jpg",
    statusBadge: { en: "Luxury Office Space", ta: "ஆடம்பர அலுவலகம்" },
    overview: {
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

  // 7. Commercial - Mayilan Gundu Site (MPF School)
  {
    id: "mayilan-gundu",
    name: { en: "Mayilan Gundu Site (MPF School)", ta: "மயிலன் குண்டு தளம் (MPF பள்ளி)" },
    category: "commercial",
    categoryLabel: { en: "Commercial", ta: "வணிகம்" },
    subcategory: "comm-land",
    subcategoryLabel: { en: "Institutional & Commercial", ta: "கல்வி & வணிக நிலம்" },
    location: { en: "Mayilan Gundu, Adjacent MPF International School, Madurai", ta: "மயிலன் குண்டு, MPF பள்ளி அருகில், மதுரை" },
    image: "/images/generated/mayilan-gundu-site.jpg",
    statusBadge: { en: "Institutional Hub", ta: "கல்வி நிறுவனம் தகுந்தது" },
    overview: {
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
    image: "/images/projects/madurai-farms.jpg",
    statusBadge: { en: "Managed Agro Estate", ta: "நிர்வகிக்கப்படும் பண்ணை" },
    overview: {
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
    image: "/images/generated/orange-garden.jpg",
    blueprint: "/images/projects/orange-garden/layout-blueprint.jpg",
    statusBadge: { en: "Running Ongoing Project", ta: "நடைபெறும் திட்டம்" },
    overview: {
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

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();

  // Selection states for the 4-Card Workflow
  const [selectedCategory, setSelectedCategory] = useState<"all" | "residential" | "commercial" | "farm">("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("vaigai-elite");

  // Project Detail Modal state
  const [detailModalProject, setDetailModalProject] = useState<WorkflowProject | null>(null);

  // Quick Enquiry Modal state
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);

  // Filter projects for Card 04 based on Category & Subcategory
  const filteredProjects = WORKFLOW_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "all" || p.subcategory === selectedSubcategory;
    return matchesCategory && matchesSubcategory;
  });

  // Active selected project
  const currentProject =
    WORKFLOW_PROJECTS.find((p) => p.id === selectedProjectId) || filteredProjects[0] || WORKFLOW_PROJECTS[0];

  const handleCategorySelect = (cat: "all" | "residential" | "commercial" | "farm") => {
    setSelectedCategory(cat);
    setSelectedSubcategory("all");
    const matching = WORKFLOW_PROJECTS.filter((p) => cat === "all" || p.category === cat);
    if (matching.length > 0) {
      setSelectedProjectId(matching[0].id);
    }
  };

  const handleSubcategorySelect = (subId: string) => {
    setSelectedSubcategory(subId);
    const matching = WORKFLOW_PROJECTS.filter(
      (p) => (selectedCategory === "all" || p.category === selectedCategory) && (subId === "all" || p.subcategory === subId)
    );
    if (matching.length > 0) {
      setSelectedProjectId(matching[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A0D12] font-sans antialiased selection:bg-[#EAB308] selection:text-[#0A0D12]">
      
      {/* 1. TOP NAVBAR: "S" LOGO SURYA PROMOTERS */}
      <header className="sticky top-0 z-50 w-full bg-[#0A0D12]/95 backdrop-blur-md border-b border-[#EAB308]/20 shadow-lg">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
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
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold">
              <ShieldCheck className="h-4 w-4 text-[#EAB308]" />
              <span>{language === "ta" ? "16+ ஆண்டுகள் · விமானப்படை நெறிமுறை" : "16+ Yrs · IAF Veteran Leadership"}</span>
            </div>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#EAB308]/20 border border-white/15 hover:border-[#EAB308]/40 text-white text-xs font-bold transition-all cursor-pointer"
              title="Toggle Language"
            >
              {language === "en" ? "தமிழ்" : "English"}
            </button>

            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20am%20interested%20in%20your%20Madurai%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+917708966452"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] text-xs font-black transition-all shadow-md shadow-[#EAB308]/30 cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 fill-[#0A0D12]" />
              <span>{language === "ta" ? "அழைக்க" : "Call Now"}</span>
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
            className="object-cover object-center opacity-30 brightness-90 contrast-105 scale-105"
          />
          {/* Deep Obsidian & Warm Gold Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/70 to-[#0A0D12]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20 flex flex-col items-center text-center">
          
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
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-medium mb-8">
            {language === "ta"
              ? "குடியிருப்பு மனைகள் & அடுக்குமாடிகள் · வணிக வழித்தடங்கள் · வேளாண் & பழத்தோட்ட பண்ணை நிலங்கள்"
              : "Discover Premium Residential, Commercial & Farm Land Opportunities Across Madurai."}
          </p>

          {/* Quick Communication Channels Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8 text-xs font-bold">
            <a
              href="tel:+917708966452"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5 text-[#EAB308]" />
              <span>+91 77089 66452</span>
            </a>

            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20project%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 fill-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="mailto:suryapromotersmdu@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5 text-[#EAB308]" />
              <span>suryapromotersmdu@gmail.com</span>
            </a>

            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EAB308] hover:bg-[#CA8A04] text-[#0A0D12] font-black transition-colors shadow-md cursor-pointer"
            >
              <FileCheck className="h-3.5 w-3.5" />
              <span>{language === "ta" ? "விசாரணை செய்க" : "Quick Enquiry"}</span>
            </button>
          </div>

          {/* Key Trust Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-white/10">
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

      {/* 3. STRICT REQUIREMENT: THE 4 WORKFLOW APPLICATION CARDS ONLY */}
      <section className="w-full bg-[#F8FAFC] py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1760px] mx-auto space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E2E8F0] gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] border border-[#EAB308]/40 text-[#854D0E] font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                <LayoutGrid className="h-3.5 w-3.5 text-[#B45309]" />
                <span>INTERACTIVE PROPERTY WORKFLOW · 4 CONNECTED CARDS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "ta" ? "4 படி வாடிக்கையாளர் நில தேர்வு முறை" : "Select, Explore & Choose Your Project"}
              </h2>
            </div>

            {/* Active Selected Project Pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs text-xs font-mono">
              <span className="text-[#64748B]">Active:</span>
              <span className="font-extrabold text-[#0F172A] bg-[#FEF9C3] text-[#854D0E] px-2.5 py-1 rounded-lg">
                {currentProject.name[language]}
              </span>
            </div>
          </div>

          {/* THE 4 WORKFLOW APPLICATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* ------------------------------------------------------------------- */}
            {/* WORKFLOW CARD 01 – OUR PROJECTS                                     */}
            {/* ------------------------------------------------------------------- */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => handleCategorySelect("all")}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all cursor-pointer min-h-[420px]"
            >
              <div>
                {/* Top Pill & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 01
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <Building2 className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "எங்கள் திட்டங்கள்" : "Our Projects"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "சூர்யா புரமோட்டர்ஸின் அனைத்து திட்டங்களையும் ஒரே பார்வையில் ஆராயுங்கள்."
                    : "Explore all Surya Promoters developments across Madurai."}
                </p>

                {/* Properties Summary Pill */}
                <div className="mt-5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E2E8F0]/70">
                    <span className="text-[#64748B] font-semibold">{language === "ta" ? "மொத்த திட்டங்கள்:" : "All Properties:"}</span>
                    <span className="font-mono font-bold text-[#854D0E] bg-white px-2.5 py-0.5 rounded-md border border-[#E2E8F0] shadow-2xs">
                      9 Sites
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1 text-xs font-bold text-[#0F172A]">
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#E2E8F0]/60">
                      <span>Residential</span>
                      <span className="text-[#B45309]">2 Projects</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#E2E8F0]/60">
                      <span>Commercial</span>
                      <span className="text-[#B45309]">5 Projects</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#E2E8F0]/60">
                      <span>Farm Land</span>
                      <span className="text-[#B45309]">2 Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                <span>{language === "ta" ? "அனைத்தையும் தேர்வு செய்" : "View All Developments"}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F5F9] group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] transition-colors">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------- */}
            {/* WORKFLOW CARD 02 – SELECT CATEGORY                                  */}
            {/* ------------------------------------------------------------------- */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[420px]"
            >
              <div>
                {/* Top Pill & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 02
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "பிரிவை தேர்வு செய்" : "Select Category"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "உங்கள் தேவைக்கேற்ற முதன்மை நிலப் பிரிவை தேர்வு செய்யுங்கள்."
                    : "Choose the property category you are interested in."}
                </p>

                {/* 3 Interactive Category Options */}
                <div className="mt-5 space-y-2">
                  {[
                    { id: "residential", label: language === "ta" ? "குடியிருப்பு (Residential)" : "Residential", sub: "Flats & Plots (2)" },
                    { id: "commercial", label: language === "ta" ? "வணிகம் (Commercial)" : "Commercial", sub: "Highway & Buildings (5)" },
                    { id: "farm", label: language === "ta" ? "விவசாய நிலம் (Farm Land)" : "Farm Land", sub: "Orchards & Agro (2)" },
                  ].map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.id as any)}
                        className={`w-full flex items-center justify-between p-3 rounded-2xl border text-xs font-bold transition cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md"
                            : "bg-[#F8FAFC] text-[#1E293B] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                        }`}
                      >
                        <div className="text-left">
                          <span className="block">{cat.label}</span>
                          <span className={`text-[10px] font-normal block ${isSelected ? "text-amber-300" : "text-[#64748B]"}`}>
                            {cat.sub}
                          </span>
                        </div>
                        {isSelected ? (
                          <Check className="h-4 w-4 text-[#EAB308]" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#64748B]">
                <span className="font-mono text-[11px] uppercase">Selected: {selectedCategory}</span>
                <ChevronRight className="h-4 w-4 text-[#EAB308]" />
              </div>
            </motion.div>

            {/* ------------------------------------------------------------------- */}
            {/* WORKFLOW CARD 03 – SELECT SUBCATEGORY                               */}
            {/* ------------------------------------------------------------------- */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[420px]"
            >
              <div>
                {/* Top Pill & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 03
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <Layers className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                  {language === "ta" ? "உட்பிரிவை தேர்வு செய்" : "Select Subcategory"}
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                  {language === "ta"
                    ? "தேவையான குறிப்பிட்ட நில வகையைக் கண்டறியவும்."
                    : "Find the exact type of property you are looking for."}
                </p>

                {/* Subcategories (Dynamically filtered) */}
                <div className="mt-5 space-y-2">
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
                          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
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

              {/* Reset Subcategory Filter */}
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs font-bold text-[#64748B]">
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

            {/* ------------------------------------------------------------------- */}
            {/* WORKFLOW CARD 04 – CHOOSE PROJECT                                   */}
            {/* ------------------------------------------------------------------- */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#EAB308]/60 transition-all min-h-[420px]"
            >
              <div>
                {/* Top Pill & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] font-mono text-[10px] font-bold tracking-wider border border-[#EAB308]/30">
                    STEP 04
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#EAB308] shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
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
                <div className="mt-4 max-h-[190px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
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
                          <p className="text-xs font-bold truncate leading-tight">{p.name[language]}</p>
                          <p className={`text-[10px] truncate ${isSelected ? "text-gray-300" : "text-[#64748B]"}`}>
                            {p.location[language]}
                          </p>
                        </div>
                        {isSelected && <span className="h-2 w-2 rounded-full bg-[#EAB308] shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button: Opens the Project Details Modal */}
              <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                <button
                  type="button"
                  onClick={() => setDetailModalProject(currentProject)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0F172A] hover:bg-neutral-800 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5 text-[#EAB308]" />
                  <span>{language === "ta" ? "திட்ட முழு விவரம் பார்க்க" : "View Project Details"}</span>
                  <ArrowRight className="h-3 w-3 text-[#EAB308]" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDIVIDUAL PROJECT DETAILS MODAL                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {detailModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setDetailModalProject(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Header Banner & Visuals */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-neutral-900">
                  <Image
                    src={detailModalProject.image}
                    alt={detailModalProject.name.en}
                    fill
                    sizes="800px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-[#EAB308] text-[#0A0D12]">
                      {detailModalProject.categoryLabel[language]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-white backdrop-blur-md">
                      {detailModalProject.subcategoryLabel[language]}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl sm:text-4xl font-black drop-shadow-md">
                      {detailModalProject.name[language]}
                    </h2>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 mt-1">
                      <MapPin className="h-4 w-4 text-[#EAB308]" />
                      <span>{detailModalProject.location[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Cadastral Blueprint Section if available (e.g. Orange Garden) */}
                {detailModalProject.blueprint && (
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#B45309] tracking-wider flex items-center gap-1.5">
                        <FileCheck className="h-4 w-4" />
                        {language === "ta" ? "அங்கீகரிக்கப்பட்ட கள வரைபடம் (Blueprint)" : "Cadastral Layout Blueprint"}
                      </span>
                      <a
                        href={detailModalProject.blueprint}
                        download
                        className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="h-3 w-3" />
                        {language === "ta" ? "வரைபடம் பதிவிறக்க" : "Download Blueprint"}
                      </a>
                    </div>
                    <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-neutral-900 border border-amber-200">
                      <Image
                        src={detailModalProject.blueprint}
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
                  {detailModalProject.specs.map((spec, i) => (
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
                    {detailModalProject.overview[language]}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-2.5">
                    {language === "ta" ? "முக்கிய சிறப்பம்சங்கள்" : "Key Highlights & Advantages"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {detailModalProject.highlights[language].map((hl, idx) => (
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
                    href={detailModalProject.mapsUrl}
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
                        detailModalProject.name.en
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
      {/* 5. QUICK ENQUIRY MODAL                                                    */}
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
                  <select
                    defaultValue={currentProject.name.en}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#EAB308] text-xs font-medium outline-hidden bg-white"
                  >
                    {WORKFLOW_PROJECTS.map((p) => (
                      <option key={p.id} value={p.name.en}>
                        {p.name.en}
                      </option>
                    ))}
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
