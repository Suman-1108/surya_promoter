"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import SummitFooter from "@/components/layout/SummitFooter";
import {
  Home,
  Building2,
  Wheat,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === "ta" ? "சிறந்த குடியிருப்பு மனைப்பிரிவுகள்" : "Explore great residential layouts",
      desc:
        language === "ta"
          ? "DTCP & RERA அங்கீகரிக்கப்பட்ட பிரத்யேக மனைப்பிரிவுகள், அகலமான தார் சாலைகள், நல்ல குடிநீர் வளம் மற்றும் உடனடி தனிப்பட்டா வசதி."
          : "DTCP & RERA approved villa plots with wide bitumen roads, sweet groundwater, and immediate individual patta.",
      icon: Home,
      href: "/projects?category=residential",
    },
    {
      title: language === "ta" ? "முதன்மையான வணிக நெடுஞ்சாலை நிலங்கள்" : "Find highly rated commercial corridors",
      desc:
        language === "ta"
          ? "NH-44 மற்றும் மதுரை ரிங் ரோடு நான்கு வழிச்சாலையில் கிடங்குகள், மருத்துவமனைகள், ஷோரூம்களுக்கு உகந்த அதிக முகப்பு கொண்ட வணிக நிலங்கள்."
          : "High-exposure parcels along NH-44 and Madurai Ring Road tailored for warehouses, godowns, and hospitals.",
      icon: Building2,
      href: "/projects?category=commercial",
    },
    {
      title: language === "ta" ? "வளமான இயற்கை விவசாய பண்ணை நிலங்கள்" : "Discover fertile agricultural farms",
      desc:
        language === "ta"
          ? "செழுமையான வண்டல் மண், வற்றாத நிலத்தடி நீரூற்று மற்றும் பயனுள்ள பழத்தோட்டங்களுடன் கூடிய அமைதியான வார இறுதி பண்ணை எஸ்டேட்கள்."
          : "Rich soils, perennial water tables, and pre-planted fruit groves for tranquil weekend farmhouse retreats.",
      icon: Wheat,
      href: "/projects?category=farm",
    },
    {
      title: language === "ta" ? "நிபுணத்துவ சட்ட ஆலோசனை & பட்டா பாதுகாப்பு" : "Receive expert legal title advisory",
      desc:
        language === "ta"
          ? "விமானப்படை அதிகாரியின் மேற்பார்வையில் 30 வருட வில்லங்கச் சான்றிதழ் ஆய்வு, நேரடி சர்வே எல்லை சரிபார்ப்பு மற்றும் முழுமையான பாதுகாப்பு."
          : "Rigorous 30-year encumbrance scrutiny, revenue survey vetting, and complete buyer protection by IAF veterans.",
      icon: ShieldCheck,
      href: "/contact",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Services Canvas Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Metrics, Social Proof */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#B45309]">
                {language === "ta" ? "எங்கள் சேவைகள்" : "OUR CORE EXPERTISE"}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">
              {language === "ta"
                ? "நம்பகமான நில & மனை மேம்பாட்டு சேவைகள்"
                : "Comprehensive Real Estate Solutions"}
            </h1>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {language === "ta"
                ? "100% சரிபார்க்கப்பட்ட நிலங்கள், தெளிவான மூலப்பத்திர ஆவணங்கள் மற்றும் மதுரையின் அதிவேக வளர்ச்சிப் பாதைகளில் வாழ்நாள் மதிப்புமிக்க முதலீடுகளை உங்களுக்கு வழங்குகிறோம்."
                : "Directly connecting you to 100% verified land parcels, clear legal documentation, and lifetime appreciation across Madurai's fastest-growing corridors."}
            </p>

            {/* Social Proof Cluster */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <Image src="/images/founder/founder.png" alt="Client" fill className="object-cover" />
                </div>
                <div className="h-9 w-9 rounded-full bg-emerald-700 text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  IAF
                </div>
                <div className="h-9 w-9 rounded-full bg-blue-700 text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  RERA
                </div>
                <div className="h-9 w-9 rounded-full bg-[#EAB308] text-[#0A0D12] font-mono text-[10px] font-extrabold flex items-center justify-center border-2 border-white shadow-xs">
                  4.9★
                </div>
              </div>
              <span className="text-xs font-bold text-[#0F172A]">
                {language === "ta" ? "1000+ குடும்பங்கள் தமிழகம் முழுவதும் நம்புகிறார்கள்" : "1000+ Families Trusted across Tamil Nadu"}
              </span>
            </div>

            {/* 3 Key Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  100%
                </span>
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider font-bold">
                  {language === "ta" ? "தெளிவான பட்டா" : "CLEAR TITLES"}
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  16+ <span className="text-sm font-normal">Yrs</span>
                </span>
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider font-bold">
                  {language === "ta" ? "அனுபவம்" : "EXPERIENCE"}
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#EAB308]">
                  4.9 <span className="text-sm font-normal text-amber-500">★</span>
                </span>
                <span className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider font-bold">
                  {language === "ta" ? "நம்பிக்கை" : "TRUST RATING"}
                </span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <a
                href="https://wa.me/917708966452?text=Hello%20Surya%20Promoters,%20I%20would%20like%20to%20consult%20about%20your%20real%20estate%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0F172A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition shadow-md hover:scale-105"
              >
                <MessageCircle className="h-4 w-4 text-[#EAB308]" />
                <span>{language === "ta" ? "சேவை ஆலோசனை பெற" : "Consult with an Expert"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Real Estate Solution Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-start sm:items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#EAB308] hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B45309] flex items-center justify-center shrink-0 group-hover:bg-[#EAB308] group-hover:text-[#0A0D12] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-50 group-hover:bg-[#EAB308] text-[#64748B] group-hover:text-[#0A0D12] flex items-center justify-center shrink-0 ml-3 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Page Footer */}
      <SummitFooter />
    </div>
  );
}
