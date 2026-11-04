"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Download,
  FileText,
  Film,
  Image as ImageIcon,
  Map,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  Eye,
  X,
} from "lucide-react";

interface DownloadItem {
  id: string;
  name: { en: string; ta: string };
  project: { en: string; ta: string };
  category: "residential" | "commercial" | "farmland";
  type: "map" | "brochure" | "video" | "photo";
  fileFormat: "PDF" | "JPG" | "MP4" | "ZIP";
  fileSize: string;
  thumbnailUrl: string;
  downloadUrl: string;
  description: { en: string; ta: string };
}

const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "orange-garden-blueprint",
    name: {
      en: "Orange Garden 10-Unit Cadastral Masterplan & Road Access Blueprint",
      ta: "ஆரஞ்ச் கார்டன் 10 அலகுகள் கொண்ட பண்ணை நில வரைபடம்",
    },
    project: { en: "Orange Garden", ta: "ஆரஞ்ச் கார்டன்" },
    category: "farmland",
    type: "map",
    fileFormat: "JPG",
    fileSize: "1.4 MB",
    thumbnailUrl: "/images/projects/orange-garden/layout-blueprint.jpg",
    downloadUrl: "/images/projects/orange-garden/layout-blueprint.jpg",
    description: {
      en: "Authentic cadastral layout plan detailing units 1 through 10 along Thiruppuvanam to Narikudi Road with internal access lanes.",
      ta: "திருப்புவனம் முதல் நரிக்குடி சாலையில் அமைந்துள்ள 10 பண்ணை மனைப் பிரிவுகளின் துல்லியமான கள வரைபடம்.",
    },
  },
  {
    id: "orange-garden-brochure",
    name: {
      en: "Orange Garden Official Orchard Farmstead Brochure",
      ta: "ஆரஞ்ச் கார்டன் அதிகாரப்பூர்வ பண்ணை தகவல் கையேடு",
    },
    project: { en: "Orange Garden", ta: "ஆரஞ்ச் கார்டன்" },
    category: "farmland",
    type: "brochure",
    fileFormat: "PDF",
    fileSize: "3.8 MB",
    thumbnailUrl: "/images/projects/orange-garden.jpg",
    downloadUrl: "/images/projects/orange-garden.jpg",
    description: {
      en: "Complete project specification including soil report, fruit tree planting roster, drip irrigation layout, and legal clear title documentation.",
      ta: "மண் பரிசோதனை அறிக்கை, பழ மரங்களின் பட்டியல், சொட்டு நீர் பாசன வசதிகள் மற்றும் பட்டா விவரங்கள் அடங்கிய கையேடு.",
    },
  },
  {
    id: "green-enclave-dtcp-blueprint",
    name: {
      en: "Surya Green Enclave DTCP Approved Layout & Bitumen Roads Blueprint",
      ta: "சூர்யா கிரீன் என்கிளேவ் DTCP அங்கீகரிக்கப்பட்ட லேஅவுட் வரைபடம்",
    },
    project: { en: "Plot Projects (Green Enclave)", ta: "பிளாட் திட்டங்கள் (கிரீன் என்கிளேவ்)" },
    category: "residential",
    type: "map",
    fileFormat: "JPG",
    fileSize: "2.1 MB",
    thumbnailUrl: "/images/projects/surya-green-enclave-blueprint.jpg",
    downloadUrl: "/images/projects/surya-green-enclave-blueprint.jpg",
    description: {
      en: "Verified DTCP & RERA approved plotted layout plan showcasing plot numbering, 30-ft bitumen roads, open spaces, and boundary coordinates.",
      ta: "DTCP & RERA அங்கீகரிக்கப்பட்ட வீட்டு மனை எண்கள், 30 அடி தார் சாலைகள் மற்றும் எல்லை அளவீடுகள் கொண்ட வரைபடம்.",
    },
  },
  {
    id: "green-enclave-brochure",
    name: {
      en: "Surya Green Enclave Residential Plots Investment Dossier",
      ta: "சூர்யா கிரீன் என்கிளேவ் முதலீட்டாளர் விரிவான கையேடு",
    },
    project: { en: "Plot Projects (Green Enclave)", ta: "பிளாட் திட்டங்கள் (கிரீன் என்கிளேவ்)" },
    category: "residential",
    type: "brochure",
    fileFormat: "PDF",
    fileSize: "4.2 MB",
    thumbnailUrl: "/images/projects/surya-green-enclave.jpg",
    downloadUrl: "/images/projects/surya-green-enclave.jpg",
    description: {
      en: "Key investment metrics, bank loan approvals (SBI, HDFC), surrounding educational hub distances, and price appreciation charts.",
      ta: "வங்கி கடன் வசதிகள், அருகிலுள்ள கல்லூரிகள், பள்ளிகள் மற்றும் மனை வளர்ச்சி சாத்தியக்கூறுகள் குறித்த விபரங்கள்.",
    },
  },
  {
    id: "vaigai-elite-blueprint",
    name: {
      en: "Vaigai Elite Garden Commercial Outer Ring Road Corridor Masterplan",
      ta: "வைகை எலைட் கார்டன் வெளிவட்ட ரிங் ரோடு வணிக நில வரைபடம்",
    },
    project: { en: "Vaigai Elite Garden", ta: "வைகை எலைட் கார்டன்" },
    category: "commercial",
    type: "map",
    fileFormat: "JPG",
    fileSize: "3.2 MB",
    thumbnailUrl: "/images/projects/vaigai-commercial.jpg",
    downloadUrl: "/images/projects/vaigai-commercial.jpg",
    description: {
      en: "Commercial highway frontage dimensions, heavy vehicle ingress/egress points, and NH-44 connectivity coordinates.",
      ta: "தேசிய நெடுஞ்சாலை-44 முகப்பு அளவு, கனரக வாகன போக்குவரத்து வசதிகள் மற்றும் வரைபட அளவீடுகள்.",
    },
  },
  {
    id: "vaigai-river-build-plan",
    name: {
      en: "Vaigai River Build Scenic Riverfront Master Development Layout",
      ta: "வைகை ரிவர் பில்ட் நதிக்கரை மேம்பாட்டு முழு வரைபடம்",
    },
    project: { en: "Vaigai River Build", ta: "வைகை ரிவர் பில்ட்" },
    category: "commercial",
    type: "map",
    fileFormat: "PDF",
    fileSize: "2.8 MB",
    thumbnailUrl: "/images/hero/hero-aerial-farmland.jpg",
    downloadUrl: "/images/hero/hero-aerial-farmland.jpg",
    description: {
      en: "River corridor boundary clearance, eco-hospitality zoning demarcation, and highway access schematics.",
      ta: "நதிக்கரை சூழலியல் அனுமதி, வணிக தங்குமிடம் மற்றும் சாலை இணைப்பு திட்ட வரைபடம்.",
    },
  },
  {
    id: "pandi-kovil-brochure",
    name: {
      en: "Pandi Kovil Commercial Parcel High-Footfall Investment Brief",
      ta: "பாண்டி கோவில் வணிக நிலம் முதலீட்டு விவரக் கையேடு",
    },
    project: { en: "Pandi Kovil Site", ta: "பாண்டி கோவில் தளம்" },
    category: "commercial",
    type: "brochure",
    fileFormat: "PDF",
    fileSize: "2.9 MB",
    thumbnailUrl: "/images/gallery/gallery-4.jpg",
    downloadUrl: "/images/gallery/gallery-4.jpg",
    description: {
      en: "High-density pedestrian and vehicle traffic statistics, showroom frontage zoning, and legal encumbrance certificate (EC).",
      ta: "அதிக மக்கள் நடமாட்டம் உள்ள பாண்டி கோவில் பகுதியின் வணிக வாய்ப்புகள் மற்றும் வில்லங்க சான்றிதழ் விவரங்கள்.",
    },
  },
  {
    id: "anna-nagar-commercial-plan",
    name: {
      en: "Anna Nagar Commercial Building Floorplans & Structural Elevation",
      ta: "அண்ணா நகர் வணிக வளாக கட்டிட வடிவமைப்பு வரைபடம்",
    },
    project: { en: "Commercial Building – Anna Nagar", ta: "வணிக கட்டிடம் – அண்ணா நகர்" },
    category: "commercial",
    type: "map",
    fileFormat: "PDF",
    fileSize: "5.1 MB",
    thumbnailUrl: "/images/gallery/gallery-6.jpg",
    downloadUrl: "/images/gallery/gallery-6.jpg",
    description: {
      en: "Detailed multi-level commercial floor layout, parking basement plan, elevator core placement, and rental yield forecast.",
      ta: "வணிக கட்டிட தரைத்தள வரைபடம், வாகன நிறுத்துமிடம் மற்றும் மாதாந்திர வாடகை வருவாய் மதிப்பீடு.",
    },
  },
  {
    id: "mpf-school-site-dossier",
    name: {
      en: "Mayilan Gundu Site – MPF International School Corridor Plan",
      ta: "மயிலன் குண்டு தளம் – MPF பள்ளி வளாக சாலை திட்ட வரைபடம்",
    },
    project: { en: "Mayilan Gundu Site – MPF School", ta: "மயிலன் குண்டு தளம் – MPF பள்ளி" },
    category: "commercial",
    type: "map",
    fileFormat: "PDF",
    fileSize: "3.5 MB",
    thumbnailUrl: "/images/gallery/gallery-5.jpg",
    downloadUrl: "/images/gallery/gallery-5.jpg",
    description: {
      en: "Institutional zoning layout situated adjacent to MPF International School with bus transit turning radius clearances.",
      ta: "MPF சர்வதேச பள்ளிக்கு அருகில் அமைந்துள்ள கல்வி மற்றும் வணிக நிறுவனங்களுக்கான நில வரைபடம்.",
    },
  },
  {
    id: "madurai-farms-tour-video",
    name: {
      en: "Madurai Farms & Fruits HD Drone Site Inspection & Orchard Tour",
      ta: "மதுரை பார்ம்ஸ் & ஃப்ரூட்ஸ் முழுமையான ட்ரோன் வீடியோ பதிவு",
    },
    project: { en: "Madurai Farms & Fruits", ta: "மதுரை பார்ம்ஸ் & ஃப்ரூட்ஸ்" },
    category: "farmland",
    type: "video",
    fileFormat: "MP4",
    fileSize: "57.3 MB",
    thumbnailUrl: "/images/projects/madurai-farms.jpg",
    downloadUrl: "/videos/madurai-farms-tour.mp4",
    description: {
      en: "Ultra-HD aerial fly-through showing lush teak and fruit plantations, private approach roads, drip irrigation network, and farm cottage.",
      ta: "செழிப்பான பழமரங்கள், இயற்கை சூழல் மற்றும் பண்ணை வீட்டை முழுமையாகக் காட்டும் உயர் வரையறை ட்ரோன் வீடியோ.",
    },
  },
  {
    id: "vaigai-elite-drone-video",
    name: {
      en: "Vaigai Elite Highway Outer Ring Road High-Resolution Aerial Footage",
      ta: "வைகை எலைட் நெடுஞ்சாலை முகப்பு வான்வழி ட்ரோன் வீடியோ",
    },
    project: { en: "Vaigai Elite Garden", ta: "வைகை எலைட் கார்டன்" },
    category: "commercial",
    type: "video",
    fileFormat: "MP4",
    fileSize: "4.5 MB",
    thumbnailUrl: "/images/projects/vaigai-commercial.jpg",
    downloadUrl: "/videos/vaigai/vaigai-drone-1.mp4",
    description: {
      en: "Cinematic drone footage capturing vehicles navigating the Outer Ring Road corridor directly past the project perimeter.",
      ta: "வைகை எலைட் வணிக நிலத்தின் ரிங் ரோடு இணைப்பு மற்றும் முகப்பை விளக்கும் ட்ரோன் வீடியோ.",
    },
  },
  {
    id: "surya-corporate-profile",
    name: {
      en: "Surya Promoters Corporate Profile & 16-Year IAF Veteran Heritage",
      ta: "சூர்யா புரமோட்டர்ஸ் நிறுவன அறிமுகம் & 16 வருட சாதனை புத்தகம்",
    },
    project: { en: "Surya Promoters Corporate", ta: "சூர்யா புரமோட்டர்ஸ் நிறுவனம்" },
    category: "residential",
    type: "brochure",
    fileFormat: "PDF",
    fileSize: "6.4 MB",
    thumbnailUrl: "/images/founder/founder.png",
    downloadUrl: "/images/founder/founder.png",
    description: {
      en: "Comprehensive company profile, founder military credentials, track record of 1000+ satisfied landowners, and DTCP validation methodology.",
      ta: "இந்திய விமானப்படை வீரர் திரு. மாணிக்கம் நடராஜன் அவர்களின் மேலாண்மை, நிறுவன வரலாறு மற்றும் சட்ட பாதுகாப்பு சான்றுகள்.",
    },
  },
  {
    id: "flat-projects-luxury-concept",
    name: {
      en: "Madurai Luxury Apartments Conceptual Architectural Catalog",
      ta: "மதுரை சொகுசு அடுக்குமாடி குடியிருப்பு மாதிரி வடிவமைப்பு கையேடு",
    },
    project: { en: "Flat Projects (Luxury Residences)", ta: "பிளாட் திட்டங்கள் (சொகுசு குடியிருப்புகள்)" },
    category: "residential",
    type: "brochure",
    fileFormat: "PDF",
    fileSize: "4.7 MB",
    thumbnailUrl: "/images/hero/hero-house.jpg",
    downloadUrl: "/images/hero/hero-house.jpg",
    description: {
      en: "Floor space index (FSI) analysis, structural 3D elevations, common amenity specifications, and parking allocations.",
      ta: "அடுக்குமாடி கட்டிட திட்ட வரைபடங்கள், வசதிகள் மற்றும் வடிவமைப்பு மாதிரி கையேடு.",
    },
  },
];

export default function DownloadCenterClient() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [previewItem, setPreviewItem] = useState<DownloadItem | null>(null);

  const categories = [
    { id: "all", labelEn: "All Projects", labelTa: "அனைத்து திட்டங்கள்" },
    { id: "residential", labelEn: "Residential", labelTa: "குடியிருப்பு" },
    { id: "commercial", labelEn: "Commercial", labelTa: "வணிக வளாகம்" },
    { id: "farmland", labelEn: "Farm Land", labelTa: "பண்ணை நிலம்" },
  ];

  const types = [
    { id: "all", labelEn: "All Formats", labelTa: "அனைத்து கோப்புகள்", icon: Filter },
    { id: "map", labelEn: "Project Maps & Blueprints", labelTa: "வரைபடங்கள் & லேஅவுட்", icon: Map },
    { id: "brochure", labelEn: "Brochures & Dossiers", labelTa: "தகவல் கையேடுகள்", icon: FileText },
    { id: "video", labelEn: "Drone Videos (MP4)", labelTa: "ட்ரோன் வீடியோக்கள்", icon: Film },
    { id: "photo", labelEn: "High-Res Photography", labelTa: "புகைப்படங்கள்", icon: ImageIcon },
  ];

  const filteredItems = useMemo(() => {
    return DOWNLOAD_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesType = selectedType === "all" || item.type === selectedType;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.project.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.en.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const handleDownload = (item: DownloadItem) => {
    // If it's a direct file path, trigger browser download
    const link = document.createElement("a");
    link.href = item.downloadUrl;
    link.download = `${item.id}.${item.fileFormat.toLowerCase()}`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-[#173D2B] text-white pt-16 pb-20 px-6 sm:px-10 lg:px-16 border-b border-[#64865A]/30">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>
              {language === "ta"
                ? "100% சரிபார்க்கப்பட்ட ஆவணங்கள் · DTCP அங்கீகாரம்"
                : "100% Clear Titles · DTCP Approved · Direct Downloads"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            {language === "ta"
              ? "திட்ட வரைபடங்கள் மற்றும் ஆவணங்கள் பதிவிறக்க மையம்"
              : "Project Maps, Layout Blueprints & Document Download Centre"}
          </h1>

          <p className="text-sm sm:text-base text-[#F5F4EE]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {language === "ta"
              ? "மதுரையில் சூர்யா புரமோட்டர்ஸ் வழங்கும் அனைத்து திட்டங்களின் துல்லியமான லேஅவுட் வரைபடங்கள், அங்கீகரிக்கப்பட்ட பத்திரங்கள், மற்றும் கையேடுகளை உடனடியாகப் பதிவிறக்குங்கள்."
              : "Access verified CAD blueprints, official RERA/DTCP layouts, investor brochures, and HD drone footage for all Surya Promoters developments in Madurai."}
          </p>

          {/* Quick Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#64865A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "ta"
                    ? "திட்டம் அல்லது ஆவணத்தின் பெயரைத் தேடுங்கள்..."
                    : "Search by project name, blueprint, or document..."
                }
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-[#171B18] text-sm font-sans placeholder-[#77766F] focus:outline-none focus:ring-2 focus:ring-[#C6A66B] shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#77766F] hover:text-[#171B18]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        {/* Category Filters (Section 14 requirement: All, Residential, Commercial, Farm Land) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E2D7]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64865A] mr-2">
              {language === "ta" ? "பிரிவு:" : "Category:"}
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#173D2B] text-white shadow-sm"
                    : "bg-white text-[#171B18] border border-[#E8E2D7] hover:border-[#173D2B]"
                }`}
              >
                {language === "ta" ? cat.labelTa : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Result Count */}
          <div className="text-xs font-mono font-medium text-[#77766F]">
            {language === "ta"
              ? `${filteredItems.length} ஆவணங்கள் கிடைக்கின்றன`
              : `Showing ${filteredItems.length} official documents`}
          </div>
        </div>

        {/* File Type Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6 pb-8">
          {types.map((type) => {
            const Icon = type.icon;
            const isActive = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition cursor-pointer ${
                  isActive
                    ? "bg-[#64865A] text-white shadow-xs"
                    : "bg-[#F5F4EE] text-[#171B18] border border-[#E8E2D7] hover:bg-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{language === "ta" ? type.labelTa : type.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Downloads Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#E8E2D7] shadow-xs">
            <FileText className="h-12 w-12 text-[#64865A] mx-auto mb-3 opacity-60" />
            <h3 className="font-display text-lg font-bold text-[#171B18]">
              {language === "ta"
                ? "பொருத்தமான ஆவணங்கள் எதுவும் கிடைக்கவில்லை"
                : "No matching documents found"}
            </h3>
            <p className="text-xs text-[#77766F] mt-1 max-w-md mx-auto">
              {language === "ta"
                ? "வேறு வகை அல்லது தேடல் சொல்லைப் பயன்படுத்தி முயற்சிக்கவும்."
                : "Try adjusting your search criteria or category filter to discover available project blueprints and brochures."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedType("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#173D2B] text-white text-xs font-mono font-bold hover:bg-[#64865A] transition"
            >
              {language === "ta" ? "அனைத்தையும் காட்டு" : "Reset All Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C6A66B] transition-all duration-300"
              >
                {/* Thumbnail Preview Area with Overlay */}
                <div className="relative h-48 w-full bg-[#173D2B]/5 overflow-hidden">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.name.en}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges: Format & Size */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#173D2B] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                      {item.fileFormat}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono font-medium">
                      {item.fileSize}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#173D2B] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Quick Preview Button */}
                  <button
                    onClick={() => setPreviewItem(item)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#171B18] shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Quick Preview"
                  >
                    <Eye className="h-4 w-4 text-[#173D2B]" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#64865A] uppercase tracking-wider">
                      {language === "ta" ? item.project.ta : item.project.en}
                    </span>
                    <h3 className="font-display text-sm font-bold text-[#171B18] line-clamp-2 mt-0.5 leading-snug group-hover:text-[#173D2B] transition-colors">
                      {language === "ta" ? item.name.ta : item.name.en}
                    </h3>
                  </div>

                  <p className="text-xs text-[#77766F] line-clamp-2 leading-relaxed flex-1">
                    {language === "ta" ? item.description.ta : item.description.en}
                  </p>

                  {/* Download Action Footer */}
                  <div className="pt-2 border-t border-[#F5F4EE] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleDownload(item)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#173D2B] hover:bg-[#64865A] text-white text-xs font-mono font-bold tracking-wider uppercase transition shadow-2xs cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>{language === "ta" ? "பதிவிறக்கு" : "Download File"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WhatsApp & Certified Revenue Copy Dispatch Card */}
        <div className="mt-16 bg-gradient-to-br from-[#173D2B] to-[#25523b] text-white rounded-3xl p-8 sm:p-12 border border-[#C6A66B]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>{language === "ta" ? "பட்டா & வில்லங்க சான்று உதவி" : "Official Revenue Encumbrance & Patta Verification"}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              {language === "ta"
                ? "முழுமையான பத்திர நகல்கள் மற்றும் வரைபடங்கள் தேவையா?"
                : "Need Physical Blueprints, Certified Chitta / Adangal or Parent Deeds?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F4EE]/80 leading-relaxed font-sans">
              {language === "ta"
                ? "எங்கள் இந்திய விமானப்படை அதிகாரி குழுவின் 100% சரிபார்க்கப்பட்ட வருவாய்த்துறை சான்றிதழ்கள், நில வரைபடங்கள் மற்றும் ஆவணங்களை உடனே வாட்ஸ்அப் வழியாகப் பெறுங்கள்."
                : "Our IAF Veteran legal verification cell provides verified computerized Patta extracts, 30-year Encumbrance Certificates (EC), and high-resolution CAD layout prints directly via WhatsApp or registered courier."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20please%20send%20me%20the%20verified%20blueprint%20and%20patta%20documents%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{language === "ta" ? "வாட்ஸ்அப் ஆவணக் கோரிக்கை" : "Request on WhatsApp"}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F5F4EE] text-[#173D2B] font-mono font-bold text-xs uppercase tracking-wider shadow-sm transition"
            >
              <span>{language === "ta" ? "நேரில் பார்க்க" : "Visit Office"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox / Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E8E2D7] bg-[#F5F4EE]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#64865A] uppercase tracking-wider">
                  {previewItem.project.en} · {previewItem.fileFormat} ({previewItem.fileSize})
                </span>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#171B18]">
                  {language === "ta" ? previewItem.name.ta : previewItem.name.en}
                </h4>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-2 rounded-full hover:bg-white text-[#171B18] transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Media Content */}
            <div className="relative h-[50vh] sm:h-[60vh] w-full bg-[#171B18] flex items-center justify-center">
              {previewItem.type === "video" ? (
                <video
                  src={previewItem.downloadUrl}
                  controls
                  autoPlay
                  className="max-h-full max-w-full"
                />
              ) : (
                <Image
                  src={previewItem.thumbnailUrl}
                  alt={previewItem.name.en}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between p-4 bg-white border-t border-[#E8E2D7]">
              <p className="text-xs text-[#77766F] hidden sm:block max-w-lg">
                {language === "ta" ? previewItem.description.ta : previewItem.description.en}
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setPreviewItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-[#77766F] hover:text-[#171B18]"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownload(previewItem)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#173D2B] text-white text-xs font-mono font-bold uppercase hover:bg-[#64865A] transition shadow"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
