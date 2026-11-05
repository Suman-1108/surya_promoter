export interface LocalityItem {
  name: { en: string; ta: string };
  distance: string;
  time?: string;
}

export interface ProjectCustomerReview {
  name: string;
  role: { en: string; ta: string };
  rating: number;
  date: string;
  comment: { en: string; ta: string };
}

export interface ProjectExtendedDetails {
  galleryImages: string[];
  videoUrl?: string;
  transportation: LocalityItem[];
  hospitals: LocalityItem[];
  schoolsAndColleges: LocalityItem[];
  groundwater: {
    depth: { en: string; ta: string };
    quality: { en: string; ta: string };
    source: { en: string; ta: string };
  };
  neighborhood: {
    density: { en: string; ta: string };
    surrounding: { en: string; ta: string };
    atmosphere: { en: string; ta: string };
  };
  groundValue: {
    currentRate: { en: string; ta: string };
    guidelineValue: { en: string; ta: string };
  };
  futurePrediction: {
    threeYearROI: string;
    fiveYearROI: string;
    drivers: { en: string[]; ta: string[] };
  };
  customerReviews: ProjectCustomerReview[];
}

export const PROJECT_DETAILS_MAP: Record<string, ProjectExtendedDetails> = {
  // ---------------------------------------------------------------------------
  // 1. RESIDENTIAL FLAT PROJECTS
  // ---------------------------------------------------------------------------
  "flat-projects": {
    galleryImages: [
      "/images/generated/residential-flat.jpg",
      "/images/hero/hero-house.jpg",
      "/images/gallery/gallery-2.jpg",
      "/images/gallery/gallery-5.jpg",
    ],
    videoUrl: "/videos/projects/showcase.mp4",
    transportation: [
      { name: { en: "Madurai Outer Ring Road Corridor", ta: "மதுரை வெளிவட்ட சாலை" }, distance: "1.2 km", time: "3 mins" },
      { name: { en: "Mattuthavani Integrated Bus Terminal", ta: "மாட்டுத்தாவணி பேருந்து முனையம்" }, distance: "5.5 km", time: "12 mins" },
      { name: { en: "Madurai Junction Railway Station", ta: "மதுரை ரயில்வே சந்திப்பு" }, distance: "8.0 km", time: "18 mins" },
      { name: { en: "Madurai International Airport", ta: "மதுரை சர்வதேச விமான நிலையம்" }, distance: "14 km", time: "20 mins" },
    ],
    hospitals: [
      { name: { en: "Apollo Speciality Hospital", ta: "அப்பல்லோ ஸ்பெஷாலிட்டி மருத்துவமனை" }, distance: "4.0 km", time: "10 mins" },
      { name: { en: "Meenakshi Mission Hospital & Research", ta: "மீனாட்சி மிஷன் மருத்துவமனை" }, distance: "6.5 km", time: "14 mins" },
      { name: { en: "Vadamalayan Multi-Speciality Hospital", ta: "வடமலையான் மருத்துவமனை" }, distance: "7.0 km", time: "16 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "TVS Higher Secondary School", ta: "டிவிஎஸ் மேல்நிலைப் பள்ளி" }, distance: "3.0 km", time: "8 mins" },
      { name: { en: "Kendriya Vidyalaya Madurai", ta: "கேந்திரிய வித்யாலயா பள்ளி" }, distance: "4.5 km", time: "11 mins" },
      { name: { en: "Lady Doak College Campus", ta: "லேடி டோக் கல்லூரி" }, distance: "6.0 km", time: "15 mins" },
    ],
    groundwater: {
      depth: { en: "35 – 45 ft Sweet Potable Aquifer", ta: "35 – 45 அடி ஆழத்தில் சுவையான நிலத்தடி நீர்" },
      quality: { en: "100% Tested Sweet Drinking Water (TDS < 210, Zero Hardness)", ta: "100% பரிசோதிக்கப்பட்ட குடிநீர் (TDS < 210, உப்புத்தன்மை அற்றது)" },
      source: { en: "Deep High-Yield Borewell + Corporation Line Connection", ta: "ஆழ்துளை கிணறு + மதுரை மாநகராட்சி குடிநீர் இணைப்பு" },
    },
    neighborhood: {
      density: { en: "Established Upscale Residential Enclave", ta: "முழுமையாக உருவான ஆடம்பர குடியிருப்பு பகுதி" },
      surrounding: { en: "Doctor, Engineer & Senior Executive Gated Independent Villas", ta: "மருத்துவர்கள், பொறியாளர்கள் தனி பங்களாக்கள் சூழ அமைந்தது" },
      atmosphere: { en: "Calm, Gated 24/7 CCTV Monitored Environment with Landscaped Park", ta: "24/7 சிசிடிவி கண்காணிக்கப்படும் அமைதியான சூழல்" },
    },
    groundValue: {
      currentRate: { en: "₹3,800 – ₹4,500 / Sq.Ft", ta: "₹3,800 – ₹4,500 / சதுர அடி" },
      guidelineValue: { en: "Govt Guideline: ₹2,650 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹2,650 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+35% Projected Appreciation",
      fiveYearROI: "+65% Capital Growth",
      drivers: {
        en: [
          "Madurai Outer Ring Road arterial widening & rapid residential conversion",
          "Emerging Madurai IT park corridor & medical hub proximity",
          "High continuous rental demand from doctors & IT professionals (7.5% yield)",
        ],
        ta: [
          "மதுரை வெளிவட்ட சாலை விரிவாக்கம் மற்றும் அதிவேக குடியிருப்பு வளர்ச்சி",
          "புதிய தகவல் தொழில்நுட்ப பூங்கா மற்றும் மருத்துவ வளாக அருகாமை",
          "மருத்துவர்கள் மற்றும் ஐடி பணியாளர்களின் தொடர் வாடகை தேவை (7.5% வருவாய்)",
        ],
      },
    },
    customerReviews: [
      {
        name: "Dr. K. Ravichandran, MD",
        role: { en: "Verified Flat Owner (Tower A, 3 BHK)", ta: "குடியிருப்பு உரிமையாளர் (3 BHK)" },
        rating: 5,
        date: "October 2026",
        comment: {
          en: "Surya Promoters provided documentation and immediate lift & covered parking handover. The sweet potable groundwater at 40ft and calm neighborhood make this the best home for our family.",
          ta: "100% தெளிவான கணினி பட்டா ஆவணங்கள் மற்றும் உடனடி கார் பார்க்கிங், லிப்ட் வசதி கிடைத்தது. 40 அடியில் இனிய நன்னீர் மற்றும் அமைதியான குடியிருப்பு பகுதி எங்கள் குடும்பத்திற்கு முழு திருப்தி அளிக்கிறது.",
        },
      },
      {
        name: "S. Anand Kumar",
        role: { en: "Software Engineering Lead", ta: "மென்பொருள் பொறியாளர்" },
        rating: 5,
        date: "August 2026",
        comment: {
          en: "True IAF veteran transparency. Everything promised on the architectural brochure was delivered with zero hidden escalation charges. Excellent ventilation.",
          ta: "விமானப்படை அதிகாரியின் நேர்மையான அணுகுமுறை. சிற்றேட்டில் உறுதியளித்த அனைத்தும் துல்லியமாக நிறைவேற்றப்பட்டுள்ளது. மறைமுக கட்டணங்கள் இல்லை.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. RESIDENTIAL PLOT PROJECTS
  // ---------------------------------------------------------------------------
  "plot-projects": {
    galleryImages: [
      "/images/generated/residential-plot.jpg",
      "/images/hero/hero-gated-layout.jpg",
      "/images/projects/surya-green-enclave.jpg",
      "/images/gallery/gallery-1.jpg",
    ],
    videoUrl: "/videos/herosection.mp4",
    transportation: [
      { name: { en: "4-Lane National Highway (NH-44)", ta: "4-வழி தேசிய நெடுஞ்சாலை (NH-44)" }, distance: "400 meters", time: "2 mins" },
      { name: { en: "Madurai Outer Ring Road Junction", ta: "மதுரை வெளிவட்ட சாலை சந்திப்பு" }, distance: "1.5 km", time: "4 mins" },
      { name: { en: "Madurai International Airport", ta: "மதுரை சர்வதேச விமான நிலையம்" }, distance: "9.0 km", time: "12 mins" },
      { name: { en: "Kappalur Industrial Corridor", ta: "கப்பலூர் தொழில் வளாகம்" }, distance: "6.0 km", time: "9 mins" },
    ],
    hospitals: [
      { name: { en: "Velammal Medical College Hospital", ta: "வேலம்மாள் மருத்துவக் கல்லூரி மருத்துவமனை" }, distance: "5.0 km", time: "8 mins" },
      { name: { en: "Devaki Multi-Speciality Hospital", ta: "தேவகி பல்நோக்கு மருத்துவமனை" }, distance: "8.0 km", time: "14 mins" },
      { name: { en: "Proposed AIIMS Thoppur Campus", ta: "தோப்பூர் எய்ம்ஸ் மருத்துவமனை வளாகம்" }, distance: "11 km", time: "16 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Velammal Vidyalaya & Global CBSE", ta: "வேலம்மாள் வித்யாலயா பள்ளி" }, distance: "3.0 km", time: "6 mins" },
      { name: { en: "Thiagarajar College of Engineering", ta: "தியாகராஜர் பொறியியல் கல்லூரி" }, distance: "9.0 km", time: "15 mins" },
      { name: { en: "MPF International School", ta: "எம்பிஎஃப் சர்வதேச பள்ளி" }, distance: "4.0 km", time: "7 mins" },
    ],
    groundwater: {
      depth: { en: "30 – 40 ft Perennial Natural Table", ta: "30 – 40 அடியில் வற்றாத சுவையான நிலத்தடி நீர்" },
      quality: { en: "Crystal Clear Natural Potable Sweet Water (TDS < 180)", ta: "படிக தெளிவான இயற்கை குடிநீர் (TDS < 180)" },
      source: { en: "Continuous Natural Aquifer Table with Rainwater Harvesting Recharge", ta: "மழைநீர் சேகரிப்புடன் கூடிய இயற்கை நீர் ஊற்று" },
    },
    neighborhood: {
      density: { en: "Rapidly Expanding Gated Plotted Community", ta: "வேகமாக உருவாகும் நவீன வில்லா குடியிருப்பு" },
      surrounding: { en: "Newly Constructed Contemporary Independent Villas & Plotted Layouts", ta: "நவீன தனி வீடுகள் மற்றும் பூங்காக்கள் சூழ அமைந்தது" },
      atmosphere: { en: "40ft Wide Tarmac Roads, Solar Street Lighting & Boundary Fencing", ta: "40 அடி அகன்ற தார்ச் சாலைகள் மற்றும் சோலார் தெருவிளக்குகள்" },
    },
    groundValue: {
      currentRate: { en: "₹1,450 / Sq.Ft (₹6.3 Lakhs / Cent)", ta: "₹1,450 / சதுர அடி (₹6.3 லட்சம் / சென்ட்)" },
      guidelineValue: { en: "Govt Guideline: ₹950 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹950 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+42% Expected Appreciation",
      fiveYearROI: "+80% Capital Growth",
      drivers: {
        en: [
          "AIIMS Thoppur healthcare corridor infrastructure acceleration",
          "Outer Ring Road 6-lane bypass rapid residential migration",
          "High buyer preference for clear 100% individual computer patta layouts",
        ],
        ta: [
          "தோப்பூர் எய்ம்ஸ் உள்கட்டமைப்பு மற்றும் மருத்துவ மண்டல வளர்ச்சி",
          "வெளிவட்ட சாலை 6-வழி விரைவு குடியிருப்பு விரிவாக்கம்",
          "தனிநபர் கணினி பட்டா அங்கீகரிக்கப்பட்ட மனைகளுக்கான உச்சக்கட்ட தேவை",
        ],
      },
    },
    customerReviews: [
      {
        name: "M. Senthilkumar",
        role: { en: "Verified Plot Owner (Plot #14)", ta: "மனை உரிமையாளர் (மனை #14)" },
        rating: 5,
        date: "September 2026",
        comment: {
          en: "Registered my 1200 sq.ft plot within 48 hours of token advance. Clear cadastral boundary stones and wide 40ft blacktop bitumen road. Zero legal hassle.",
          ta: "முன்பணம் செலுத்திய 48 மணி நேரத்தில் தனி பட்டா பதிவு முடிந்தது. துல்லியமான எல்லைக் கற்கள் மற்றும் 40 அடி தார்ச் சாலை. எந்த சட்டச் சிக்கலும் இல்லை.",
        },
      },
      {
        name: "R. Jayalakshmi",
        role: { en: "NRI Investor (Singapore)", ta: "வெளிநாடு வாழ் முதலீட்டாளர் (சிங்கப்பூர்)" },
        rating: 5,
        date: "July 2026",
        comment: {
          en: "Purchased remotely from Singapore via Mapbhoomi 3D coordinates and video walkthroughs. Surya Promoters handled deed vetting with military honesty.",
          ta: "சிங்கப்பூரிலிருந்து Mapbhoomi 3D நேரடி வரைபடம் மற்றும் வீடியோக்கள் மூலம் பார்த்து வாங்கினேன். சூர்யா குழுவினர் இராணுவ ஒழுங்குடன் ஆவணங்களை முடித்துக் கொடுத்தனர்.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. VAIGAI ELITE GARDEN (Commercial)
  // ---------------------------------------------------------------------------
  "vaigai-elite": {
    galleryImages: [
      "/images/generated/vaigai-elite-garden.jpg",
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai/water-pool-1.jpg",
      "/images/projects/vaigai/water-pool-2.jpg",
      "/images/projects/vaigai-commercial.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-1.mp4",
    transportation: [
      { name: { en: "Direct NH-44 Expressway Frontage", ta: "நேரடி NH-44 தேசிய நெடுஞ்சாலை முகப்பு" }, distance: "0 km (Direct Access)", time: "0 mins" },
      { name: { en: "Madurai Outer Ring Road Junction", ta: "மதுரை வெளிவட்ட சாலை சந்திப்பு" }, distance: "500 meters", time: "1 min" },
      { name: { en: "Madurai International Airport Freight Terminal", ta: "விமான நிலைய சரக்கு முனையம்" }, distance: "7.5 km", time: "10 mins" },
      { name: { en: "Inland Container Depot (ICD Madurai)", ta: "உள்நாட்டு கொள்கலன் கிடங்கு" }, distance: "9.0 km", time: "12 mins" },
    ],
    hospitals: [
      { name: { en: "Proposed Multi-Speciality Medical Hub", ta: "பல்நோக்கு மருத்துவமனை மண்டலம்" }, distance: "1.5 km", time: "3 mins" },
      { name: { en: "Velammal Multi-Speciality Medical Campus", ta: "வேலம்மாள் மருத்துவ வளாகம்" }, distance: "6.0 km", time: "9 mins" },
      { name: { en: "Apollo Specialty Hospital", ta: "அப்பல்லோ சிறப்பு மருத்துவமனை" }, distance: "10 km", time: "15 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "KLN College of Engineering & Tech", ta: "கே.எல்.என் பொறியியல் கல்லூரி" }, distance: "5.5 km", time: "8 mins" },
      { name: { en: "Velammal Global CBSE School", ta: "வேலம்மாள் குளோபல் பள்ளி" }, distance: "4.0 km", time: "6 mins" },
    ],
    groundwater: {
      depth: { en: "40 – 48 ft High-Discharge Commercial Table", ta: "40 – 48 அடி ஆழத்தில் அதிவேக நிலத்தடி நீர்" },
      quality: { en: "Clean Commercial Supply with Low Mineral Hardness", ta: "வணிக நிறுவனங்களுக்கு உகந்த உயர்தர நன்னீர்" },
      source: { en: "Dual Heavy Industrial Borewells Ready", ta: "கனரக வணிக பயன்பாட்டு ஆழ்துளை கிணறு" },
    },
    neighborhood: {
      density: { en: "High-Visibility National Highway Commercial Belt", ta: "தேசிய நெடுஞ்சாலை பிரதான வர்த்தக மண்டலம்" },
      surrounding: { en: "Automobile Showrooms, Logistics Terminals & Multi-Axle Warehouses", ta: "வாகன ஷோரூம்கள், சரக்கு கிடங்குகள் மற்றும் வர்த்தக மையங்கள்" },
      atmosphere: { en: "Heavy Continuous Vehicle Exposure with Wide Turning Radius", ta: "கனரக சரக்கு வாகனங்கள் எளிதில் திரும்பும் அகலமான முகப்பு" },
    },
    groundValue: {
      currentRate: { en: "₹2,200 / Sq.Ft (₹9.5 Lakhs / Cent)", ta: "₹2,200 / சதுர அடி (₹9.5 லட்சம் / சென்ட்)" },
      guidelineValue: { en: "Govt Guideline: ₹1,550 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹1,550 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+52% Projected Growth",
      fiveYearROI: "+95% Capital Appreciation",
      drivers: {
        en: [
          "Outer Ring Road 6-lane multi-axle freight expansion corridor",
          "Surging land demand for proposed private multi-speciality hospital campuses",
          "Mapbhoomi verified 3D cadastral layout and instant clear title patta",
        ],
        ta: [
          "வெளிவட்ட சாலை 6-வழி சரக்கு போக்குவரத்து விரிவாக்கம்",
          "தனியார் பல்நோக்கு மருத்துவமனைகள் மற்றும் கிடங்குகளின் அதீத தேவை",
          "Mapbhoomi நேரடி 3D வரைபடம் மற்றும் 100% தெளிவான பட்டா",
        ],
      },
    },
    customerReviews: [
      {
        name: "R. Murugesan",
        role: { en: "Logistics Fleet Director", ta: "சரக்கு போக்குவரத்து இயக்குநர்" },
        rating: 5,
        date: "October 2026",
        comment: {
          en: "Purchased 2 acres for our container logistics depot. Frontage directly on NH-44 Outer Ring Road with multi-axle vehicle access is the best commercial investment in Madurai.",
          ta: "கண்டெய்னர் கிடங்கிற்காக 2 ஏக்கர் வாங்கியுள்ளோம். தேசிய நெடுஞ்சாலை நேரடி முகப்பு மற்றும் கனரக வாகனங்கள் வந்து செல்லும் வசதி மதுரைக்கு மிகச்சிறந்த முதலீடு.",
        },
      },
      {
        name: "V. Gurusamy",
        role: { en: "Hospitality & Convention Developer", ta: "ஹோட்டல் & மாநாட்டு அரங்கு தொழில் அதிபர்" },
        rating: 5,
        date: "September 2026",
        comment: {
          en: "Mapbhoomi interactive layout link showed exact cadastral coordinates. Clear parent documents since 1990 vetted thoroughly.",
          ta: "Mapbhoomi நேரடி மனை வரைபடம் மிக துல்லியமாக இருந்தது. 1990 முதல் தெளிவான மூலப்பத்திரங்கள்.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. VAIGAI RIVER BUILD (Commercial)
  // ---------------------------------------------------------------------------
  "vaigai-river": {
    galleryImages: [
      "/images/generated/vaigai-river-build.jpg",
      "/images/projects/vaigai-commercial.jpg",
      "/images/gallery/gallery-4.jpg",
      "/images/hero/hero-farmland-aerial.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-2.mp4",
    transportation: [
      { name: { en: "Vaigai Riverfront Highway Boulevard", ta: "வைகை நதிக்கரை நெடுஞ்சாலை" }, distance: "0 km (Direct Frontage)", time: "0 mins" },
      { name: { en: "Arapalayam Bus Terminus", ta: "ஆரப்பாளையம் பேருந்து நிலையம்" }, distance: "4.0 km", time: "9 mins" },
      { name: { en: "Madurai Railway Junction", ta: "மதுரை ரயில்வே சந்திப்பு" }, distance: "6.0 km", time: "12 mins" },
    ],
    hospitals: [
      { name: { en: "Meenakshi Mission Hospital", ta: "மீனாட்சி மிஷன் மருத்துவமனை" }, distance: "5.0 km", time: "11 mins" },
      { name: { en: "Govt Rajaji Hospital", ta: "அரசு ராஜாஜி மருத்துவமனை" }, distance: "5.5 km", time: "13 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Fatima College for Women", ta: "பாத்திமா மகளிர் கல்லூரி" }, distance: "3.0 km", time: "7 mins" },
      { name: { en: "Madura College Campus", ta: "மதுரா கல்லூரி" }, distance: "6.0 km", time: "14 mins" },
    ],
    groundwater: {
      depth: { en: "25 – 30 ft Perennial Riverbed Alluvial Water", ta: "25 – 30 அடியில் வற்றாத வைகை ஆற்றுப்படுகை நன்னீர்" },
      quality: { en: "Pristine Sweet Drinking Water Table (TDS < 150)", ta: "உயர்தர இனிமையான நன்னீர் (TDS < 150)" },
      source: { en: "Continuous Natural Riverbed Seepage", ta: "இயற்கை வைகை ஆற்றுப்படுகை நீர் ஊற்று" },
    },
    neighborhood: {
      density: { en: "Scenic Highway Hospitality & Event Corridor", ta: "எழில் கொஞ்சும் நதிக்கரை திருமண மண்டப வழித்தடம்" },
      surrounding: { en: "Luxury Convention Halls, Open-Air Banquet Lawns & Resorts", ta: "பிரமாண்ட திருமண மண்டபங்கள் & ரிசார்ட்டுகள்" },
      atmosphere: { en: "Panoramic Riverfront Breeze & Wide Tarmac Frontage", ta: "குளுமையான நதிக்கரை காற்று மற்றும் அகன்ற சாலை" },
    },
    groundValue: {
      currentRate: { en: "₹1,950 / Sq.Ft (₹8.5 Lakhs / Cent)", ta: "₹1,950 / சதுர அடி (₹8.5 லட்சம் / சென்ட்)" },
      guidelineValue: { en: "Govt Guideline: ₹1,350 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹1,350 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+45% Expected Growth",
      fiveYearROI: "+85% Capital Appreciation",
      drivers: {
        en: [
          "Vaigai riverfront beautification and elevated corridor development",
          "Madurai wedding tourism and grand banquet demand surge",
          "Limited rare riverside freehold commercial land availability",
        ],
        ta: [
          "வைகை நதிக்கரை அழகுபடுத்தல் மற்றும் மேம்பாலம் திட்டம்",
          "மதுரை திருமண மற்றும் மாநாட்டு சுற்றுலா வளர்ச்சி",
          "மிகக் குறைந்த அளவே கிடைக்கும் நதிக்கரை நேரடி வணிக நிலங்கள்",
        ],
      },
    },
    customerReviews: [
      {
        name: "S. Jeyakumar",
        role: { en: "Banquet Hall Developer", ta: "திருமண மண்டப உரிமையாளர்" },
        rating: 5,
        date: "August 2026",
        comment: {
          en: "Purchased riverfront parcel for an open-lawn wedding venue. Scenic backdrop and groundwater table at 25ft is incredible.",
          ta: "திருமண மண்டபத்திற்காக வாங்கினோம். நதிக்கரை அழகு மற்றும் 25 அடியில் நன்னீர் வசதி அருமை.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. PANDI KOVIL SITE (Commercial)
  // ---------------------------------------------------------------------------
  "pandi-kovil": {
    galleryImages: [
      "/images/generated/pandi-kovil-site.jpg",
      "/images/gallery/gallery-3.jpg",
      "/images/hero/hero-aerial-farmland.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-3.mp4",
    transportation: [
      { name: { en: "Pandi Kovil Ring Road Junction", ta: "பாண்டி கோவில் ரிங் ரோடு சந்திப்பு" }, distance: "200 meters", time: "1 min" },
      { name: { en: "Mattuthavani Integrated Bus Terminal", ta: "மாட்டுத்தாவணி பேருந்து நிலையம்" }, distance: "2.5 km", time: "5 mins" },
      { name: { en: "Madurai Airport via Ring Road", ta: "விமான நிலையம் (ரிங் ரோடு வழி)" }, distance: "11 km", time: "14 mins" },
    ],
    hospitals: [
      { name: { en: "Meenakshi Mission Hospital", ta: "மீனாட்சி மிஷன் மருத்துவமனை" }, distance: "2.5 km", time: "5 mins" },
      { name: { en: "Apollo Specialty Hospital", ta: "அப்பல்லோ ஸ்பெஷாலிட்டி" }, distance: "5.0 km", time: "10 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Vikas Vidyalaya CBSE School", ta: "விகாஸ் வித்யாலயா பள்ளி" }, distance: "3.0 km", time: "6 mins" },
      { name: { en: "Thiagarajar School of Management", ta: "தியாகராஜர் மேலாண்மை பள்ளி" }, distance: "8.0 km", time: "14 mins" },
    ],
    groundwater: {
      depth: { en: "38 – 45 ft Sweet Potable Borewell Table", ta: "38 – 45 அடியில் சுவையான ஆழ்துளை நீர்" },
      quality: { en: "Abundant Potable Water Suitable for High-Footfall Outlets", ta: "அதிக வாடிக்கையாளர் தேவைக்கான தரமான குடிநீர்" },
      source: { en: "Continuous Deep Borewell Supply", ta: "நம்பகமான ஆழ்துளை கிணற்று நீர்" },
    },
    neighborhood: {
      density: { en: "Heavy Footfall Commercial Hotspot", ta: "அதிக மக்கள் புழங்கும் முக்கிய வர்த்தக பகுதி" },
      surrounding: { en: "Top Highway Restaurants, Automobile Dealerships & Retail Hubs", ta: "பிரபல உணவகங்கள், ஆட்டோமொபைல் ஷோரூம்கள்" },
      atmosphere: { en: "24/7 Active Vehicular Exposure & Constant Commercial Movement", ta: "24 மணி நேரமும் இயங்கும் சுறுசுறுப்பான பகுதி" },
    },
    groundValue: {
      currentRate: { en: "₹2,800 / Sq.Ft (₹12.2 Lakhs / Cent)", ta: "₹2,800 / சதுர அடி (₹12.2 லட்சம் / சென்ட்)" },
      guidelineValue: { en: "Govt Guideline: ₹1,950 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹1,950 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+40% Projected Growth",
      fiveYearROI: "+72% Capital Appreciation",
      drivers: {
        en: [
          "Ring Road junction expansion and elevated flyover connect",
          "East Madurai commercial corridor boom",
          "Continuous demand from auto showrooms and multi-brand retail",
        ],
        ta: [
          "ரிங் ரோடு சந்திப்பு விரிவாக்கம் மற்றும் மேம்பால இணைப்பு",
          "கிழக்கு மதுரை வர்த்தக பெருக்கம்",
          "ஷோரூம்கள் மற்றும் பிராண்டட் கடைகளின் இடைவிடாத தேவை",
        ],
      },
    },
    customerReviews: [
      {
        name: "P. Saravanan",
        role: { en: "Automobile Dealership Owner", ta: "வாகன விற்பனை அதிபர்" },
        rating: 5,
        date: "September 2026",
        comment: {
          en: "High footfall junction right next to Pandi Kovil. Our customer visibility increased exponentially.",
          ta: "பாண்டி கோவில் அருகே அமைந்துள்ளதால் வாடிக்கையாளர் வருகை பல மடங்கு அதிகரித்துள்ளது.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. COMMERCIAL ANNA NAGAR (Commercial Building)
  // ---------------------------------------------------------------------------
  "commercial-anna-nagar": {
    galleryImages: [
      "/images/generated/commercial-anna-nagar.jpg",
      "/images/gallery/gallery-6.jpg",
      "/images/hero/hero_image.png",
    ],
    videoUrl: "/videos/projects/showcase.mp4",
    transportation: [
      { name: { en: "80 Feet Road Main Arterial Boulevard", ta: "80 அடி பிரதான வணிக சாலை" }, distance: "0 meters (Direct)", time: "0 mins" },
      { name: { en: "Madurai Junction Station", ta: "மதுரை ரயில் நிலையம்" }, distance: "6.5 km", time: "15 mins" },
      { name: { en: "Madurai Airport", ta: "விமான நிலையம்" }, distance: "13 km", time: "18 mins" },
    ],
    hospitals: [
      { name: { en: "Apollo Hospitals Madurai", ta: "அப்பல்லோ மருத்துவமனை மதுரை" }, distance: "1.2 km", time: "4 mins" },
      { name: { en: "Christian Mission Hospital", ta: "கிறிஸ்டியன் மிஷன் மருத்துவமனை" }, distance: "3.5 km", time: "9 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Ambika College of Arts & Science", ta: "அம்பிகா கல்லூரி" }, distance: "1.8 km", time: "5 mins" },
      { name: { en: "TVS Sundaram Higher Secondary", ta: "டிவிஎஸ் சுந்தரம் பள்ளி" }, distance: "2.5 km", time: "7 mins" },
    ],
    groundwater: {
      depth: { en: "35 – 42 ft Potable Urban Aquifer", ta: "35 – 42 அடியில் நகர்ப்புற நன்னீர்" },
      quality: { en: "Corporation Line + Heavy Borewell Hybrid System", ta: "மாநகராட்சி நீர் + ஆழ்துளை கிணறு இரட்டை வசதி" },
      source: { en: "24/7 Uninterrupted Supply with Advanced Filtration", ta: "24/7 தடையற்ற உயர்தர குடிநீர் வசதி" },
    },
    neighborhood: {
      density: { en: "Madurai's Most Prestigious Commercial Epicenter", ta: "மதுரையின் தலைசிறந்த உயர்தர வணிக மையம்" },
      surrounding: { en: "Leading National Banks, Corporate HQs, Top Jewellers & Cafes", ta: "வங்கிகள், பெருநிறுவன அலுவலகங்கள், நகைக்கடைகள்" },
      atmosphere: { en: "Curved Glass Facade, Executive Grand Lobby & Multi-Level Parking", ta: "கண்ணாடி முகப்பு, வரவேற்பறை மற்றும் மல்டி-லெவல் பார்க்கிங்" },
    },
    groundValue: {
      currentRate: { en: "₹7,500 / Sq.Ft (Rental Yield 8.2% p.a.)", ta: "₹7,500 / சதுர அடி (ஆண்டு வாடகை வருவாய் 8.2%)" },
      guidelineValue: { en: "Govt Guideline: ₹5,800 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹5,800 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+32% Capital Growth + Consistent High Rent",
      fiveYearROI: "+58% Premium Commercial Asset Value",
      drivers: {
        en: [
          "Permanent ultra-prime status of Anna Nagar high street",
          "Zero vacant commercial plots available along 80ft road",
          "High blue-chip corporate lease rates with long lock-in periods",
        ],
        ta: [
          "அண்ணா நகரின் நிரந்தர பிரைம் அந்தஸ்து",
          "80 அடி சாலையில் புதிய காலி மனைகள் எதுவும் இல்லை",
          "உயர்தர கார்ப்பரேட் நிறுவனங்களின் நீண்டகால வாடகை ஒப்பந்தம்",
        ],
      },
    },
    customerReviews: [
      {
        name: "Dr. N. Venkatesh",
        role: { en: "Diagnostic Center Director", ta: "மருத்துவ பரிசோதனை மைய இயக்குநர்" },
        rating: 5,
        date: "September 2026",
        comment: {
          en: "Purchased the 2nd floor for our advanced imaging center. Patients find the Anna Nagar location extremely prestigious and accessible.",
          ta: "எங்கள் ஸ்கேன் மையத்திற்காக வாங்கினோம். நோயாளிகள் எளிதில் வந்து செல்லக்கூடிய பிரைம் இடம்.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. MAYILAN GUNDU SITE (Institutional & Commercial)
  // ---------------------------------------------------------------------------
  "mayilan-gundu": {
    galleryImages: [
      "/images/generated/mayilan-gundu-site.jpg",
      "/images/hero/hero-gated-layout.jpg",
      "/images/gallery/gallery-1.jpg",
    ],
    videoUrl: "/videos/herosection.mp4",
    transportation: [
      { name: { en: "Outer Ring Road Feeder Highway", ta: "அவுட்டர் ரிங் ரோடு இணைப்பு" }, distance: "1.0 km", time: "3 mins" },
      { name: { en: "Madurai International Airport", ta: "விமான நிலையம்" }, distance: "11 km", time: "15 mins" },
      { name: { en: "Madurai Junction Station", ta: "மதுரை ரயில் நிலையம்" }, distance: "12 km", time: "22 mins" },
    ],
    hospitals: [
      { name: { en: "Velammal Medical College Hospital", ta: "வேலம்மாள் மருத்துவக் கல்லூரி" }, distance: "7.0 km", time: "11 mins" },
      { name: { en: "Vadamalayan Specialty Center", ta: "வடமலையான் சிறப்பு மையம்" }, distance: "9.0 km", time: "15 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "MPF International School (Immediate Adjacent)", ta: "எம்பிஎஃப் சர்வதேச பள்ளி (நேரடி முகப்பு)" }, distance: "0 meters (Direct)", time: "0 mins" },
      { name: { en: "Velammal Global CBSE Campus", ta: "வேலம்மாள் குளோபல் சிபிஎஸ்இ" }, distance: "4.0 km", time: "7 mins" },
    ],
    groundwater: {
      depth: { en: "32 – 40 ft Sweet Ground Table", ta: "32 – 40 அடியில் இனிய நன்னீர்" },
      quality: { en: "Uncontaminated Fresh Aquifer (Tested Safe & Clear)", ta: "மாசற்ற சுத்தமான நிலத்தடி நீர்" },
      source: { en: "Continuous Natural Subsurface Stream", ta: "இயற்கை நிலத்தடி நீரூற்று" },
    },
    neighborhood: {
      density: { en: "Thriving Educational & Institutional Hub", ta: "கல்வி மற்றும் விளையாட்டு நிறுவனங்கள் சூழ உள்ள பகுதி" },
      surrounding: { en: "School Campuses, Sports Academies & Gated Residential Layouts", ta: "பள்ளிகள், விளையாட்டு அகாடமிகள் மற்றும் குடியிருப்பு மனைகள்" },
      atmosphere: { en: "Wide Blacktop Road Built for Heavy School Buses & Transport", ta: "பள்ளி பேருந்துகள் எளிதாக செல்லக்கூடிய அகன்ற தார் சாலை" },
    },
    groundValue: {
      currentRate: { en: "₹1,350 / Sq.Ft (₹5.8 Lakhs / Cent)", ta: "₹1,350 / சதுர அடி (₹5.8 லட்சம் / சென்ட்)" },
      guidelineValue: { en: "Govt Guideline: ₹890 / Sq.Ft", ta: "அரசு வழிகாட்டி மதிப்பு: ₹890 / சதுர அடி" },
    },
    futurePrediction: {
      threeYearROI: "+46% Expected Growth",
      fiveYearROI: "+88% Capital Appreciation",
      drivers: {
        en: [
          "Adjacent MPF International School expansion & sports facilities",
          "Growing sports academy and coaching infrastructure demand",
          "Outer Ring Road rapid satellite residential development",
        ],
        ta: [
          "எம்பிஎஃப் சர்வதேச பள்ளி விரிவாக்கம் மற்றும் விளையாட்டு வளாகம்",
          "விளையாட்டு & பயிற்சி மையங்களுக்கான நிலத் தேவை",
          "வெளிவட்ட சாலை குடியிருப்பு விரிவாக்கம்",
        ],
      },
    },
    customerReviews: [
      {
        name: "M. Chandran",
        role: { en: "Sports Academy Founder", ta: "விளையாட்டு அகாடமி நிறுவனர்" },
        rating: 5,
        date: "October 2026",
        comment: {
          en: "Located adjacent to MPF International School. Wide road access for student transportation was our primary reason to invest here. Excellent documentation.",
          ta: "பள்ளிக்கு அருகிலேயே அமைந்துள்ளதால் மாணவர்களின் வசதிக்காக வாங்கினோம். மிகச்சிறந்த அணுகுமுறை சாலை.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. MADURAI FARMS & FRUITS (Farm Land)
  // ---------------------------------------------------------------------------
  "madurai-farms": {
    galleryImages: [
      "/images/projects/madurai-farms.jpg",
      "/images/projects/madurai-farms/entrance-gate.jpg",
      "/images/projects/madurai-farms/aerial-cottages.jpg",
      "/images/projects/madurai-farms/aerial-groves.jpg",
      "/images/projects/madurai-farms/water-reservoir.jpg",
      "/images/projects/madurai-farms/panoramic-mountain.jpg",
    ],
    videoUrl: "/videos/madurai-farms-tour.mp4",
    transportation: [
      { name: { en: "Madurai City Center (Goripalayam)", ta: "மதுரை நகர மையம் (கோரிப்பாளையம்)" }, distance: "16 km", time: "25 mins" },
      { name: { en: "Direct Tar Highway Approach Road", ta: "நேரடி தார் நெடுஞ்சாலை அணுகுமுறை" }, distance: "0 km (Direct)", time: "0 mins" },
      { name: { en: "Madurai Junction Station", ta: "மதுரை ரயில் நிலையம்" }, distance: "19 km", time: "30 mins" },
    ],
    hospitals: [
      { name: { en: "Sub-District Multi-Speciality Clinic", ta: "வட்டார மருத்துவமனை" }, distance: "3.5 km", time: "6 mins" },
      { name: { en: "Meenakshi Mission Hospital", ta: "மீனாட்சி மிஷன் மருத்துவமனை" }, distance: "15 km", time: "22 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Agricultural Polytechnic & Research Center", ta: "வேளாண் பாலிடெக்னிக் & ஆராய்ச்சி மையம்" }, distance: "5.0 km", time: "8 mins" },
      { name: { en: "Madurai Kamaraj University Campus", ta: "மதுரை காமராஜர் பல்கலைக்கழகம்" }, distance: "14 km", time: "20 mins" },
    ],
    groundwater: {
      depth: { en: "30 – 38 ft Perennial Mountain Basin Aquifer", ta: "30 – 38 அடியில் வற்றாத மலை அடிவார நன்னீர்" },
      quality: { en: "100% Pure Sweet Potable Water (Tested TDS 140, Zero Salinity)", ta: "100% தூய சுவையான குடிநீர் (TDS 140, உப்புத்தன்மை அற்றது)" },
      source: { en: "Natural Mountain Spring Water Reservoir + Automated Drip Irrigation Lines", ta: "இயற்கை நீர்த்தேக்கம் + சொட்டு நீர் பாசன வசதி" },
    },
    neighborhood: {
      density: { en: "Peaceful Organic Farming & Weekend Retreat Sanctuary", ta: "அமைதியான இயற்கை வேளாண் பண்ணை & ஓய்வு விடுதி" },
      surrounding: { en: "Existing Organic Cottages, Mango/Guava Groves & Agro Landowners", ta: "மாந்தோப்புகள், கொய்யா தோப்புகள் மற்றும் வார இறுதி பங்களாக்கள்" },
      atmosphere: { en: "Scenic Mountain Panorama, Fresh Air & Zero Industrial Pollution", ta: "மலைக் காட்சி, தூய்மையான காற்று மற்றும் மாசற்ற சூழல்" },
    },
    groundValue: {
      currentRate: { en: "₹3.8 Lakhs / Cent (Quarter / Half / 1 Acre Parcels)", ta: "₹3.8 லட்சம் / சென்ட் (கால் / அரை / 1 ஏக்கர் நிலங்கள்)" },
      guidelineValue: { en: "Govt Guideline: ₹2.4 Lakhs / Cent", ta: "அரசு வழிகாட்டி மதிப்பு: ₹2.4 லட்சம் / சென்ட்" },
    },
    futurePrediction: {
      threeYearROI: "+40% Agro Capital Appreciation + Annual Harvest Yield",
      fiveYearROI: "+82% Overall Land Valuation Growth",
      drivers: {
        en: [
          "Surging demand for organic managed agro-acreage & farmstay living",
          "Direct scenic highway connectivity to Madurai ring road",
          "100% tax-free agricultural income & weekend cottage rental yield",
        ],
        ta: [
          "இயற்கை விவசாய பண்ணை நிலங்களின் அதீத தேவை மற்றும் ஓய்வு இல்ல வாழ்க்கை",
          "மதுரை வெளிவட்ட சாலையிலிருந்து விரைவு இணைப்பு",
          "100% வரிவிலக்கு பெற்ற விவசாய வருமானம் & வார இறுதி வாடகை வருவாய்",
        ],
      },
    },
    customerReviews: [
      {
        name: "Er. V. Sundarrajan",
        role: { en: "Bangalore Tech Lead (Owns 50 Cents)", ta: "பண்ணை நில உரிமையாளர் (50 சென்ட்)" },
        rating: 5,
        date: "October 2026",
        comment: {
          en: "We built our weekend farm cottage here. The sweet water table at 30ft and pre-planted fruit trees make this our family's greatest happiness. Surya team manages irrigation flawlessly.",
          ta: "இங்கு 50 சென்ட் வாங்கி பண்ணை வீடு கட்டியுள்ளோம். 30 அடியில் தேன் போன்ற குடிநீர் மற்றும் மாந்தோப்பு எங்கள் குடும்பத்திற்கு அளவற்ற மகிழ்ச்சி. சூர்யா குழுவினர் சிறப்பாக பராமரிக்கின்றனர்.",
        },
      },
      {
        name: "Dr. A. Alagarsamy",
        role: { en: "Retired Professor & Agro Enthusiast", ta: "ஓய்வுபெற்ற பேராசிரியர்" },
        rating: 5,
        date: "August 2026",
        comment: {
          en: "Water is crystal sweet and soil is rich red loam. Best long-term generational wealth asset for our children with 100% computer patta.",
          ta: "நீர் மிக இனிமையாகவும் செம்மண் வளமாகவும் உள்ளது. எங்கள் குழந்தைகளுக்கு 100% கணினி பட்டாவுடன் கூடிய தலைமுறை சொத்து.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. ORANGE GARDEN (Gated Orchard)
  // ---------------------------------------------------------------------------
  "orange-garden": {
    galleryImages: [
      "/images/generated/orange-garden.jpg",
      "/images/projects/orange-garden/hero-orchard.jpg",
      "/images/projects/orange-garden/entrance-gate.jpg",
      "/images/projects/orange-garden/citrus-grove.jpg",
      "/images/projects/orange-garden/farmhouse-villa.jpg",
      "/images/projects/orange-garden/demarcated-plots.jpg",
      "/images/projects/orange-garden/layout-blueprint.jpg",
    ],
    videoUrl: "/videos/herosection.mp4",
    transportation: [
      { name: { en: "Thiruppuvanam to Narikudi State Highway Frontage", ta: "திருப்புவனம் - நரிக்குடி மாநில நெடுஞ்சாலை" }, distance: "0 km (Direct Frontage)", time: "0 mins" },
      { name: { en: "Thiruppuvanam Railway Station", ta: "திருப்புவனம் ரயில் நிலையம்" }, distance: "6.0 km", time: "8 mins" },
      { name: { en: "Madurai Ring Road Tollway", ta: "மதுரை ரிங் ரோடு டோல்வே" }, distance: "14 km", time: "16 mins" },
      { name: { en: "Madurai International Airport", ta: "மதுரை விமான நிலையம்" }, distance: "22 km", time: "25 mins" },
    ],
    hospitals: [
      { name: { en: "Thiruppuvanam Government Hospital", ta: "திருப்புவனம் அரசு மருத்துவமனை" }, distance: "6.5 km", time: "9 mins" },
      { name: { en: "Apollo Specialty Hospital Madurai", ta: "அப்பல்லோ சிறப்பு மருத்துவமனை மதுரை" }, distance: "20 km", time: "24 mins" },
    ],
    schoolsAndColleges: [
      { name: { en: "Velammal College of Engineering & Tech", ta: "வேலம்மாள் பொறியியல் கல்லூரி" }, distance: "12 km", time: "15 mins" },
      { name: { en: "Vivekananda Gurukula Matric School", ta: "விவேகானந்தா குருகுல பள்ளி" }, distance: "7.0 km", time: "10 mins" },
    ],
    groundwater: {
      depth: { en: "32 – 40 ft Sweet Shallow Potable Water", ta: "32 – 40 அடியில் இனிய வற்றாத நிலத்தடி நீர்" },
      quality: { en: "Naturally Filtered Sweet Drinking Water (TDS 160, Perennial Source)", ta: "இயற்கை வடிகட்டிய சுவையான குடிநீர் (TDS 160)" },
      source: { en: "Individual Borewell Line & Automated Micro-Drip System for Each Plot", ta: "ஒவ்வொரு மனைக்கும் தனி ஆழ்துளை மற்றும் சொட்டு நீர் பாசனம்" },
    },
    neighborhood: {
      density: { en: "Gated 10 Demarcated Orchard Plots (Plots 1 to 10)", ta: "10 இலக்கமிடப்பட்ட பிரத்தியேக பழத்தோட்ட மனைகள் (Plots 1-10)" },
      surrounding: { en: "Pre-Planted Citrus Orange Trees, Farmhouse Villas & Mountain Vista", ta: "ஆரஞ்சு மரங்கள், வார இறுதி வில்லாக்கள் மற்றும் மலை அடிவாரம்" },
      atmosphere: { en: "Direct Highway Frontage with Grand Arch Gate & 24/7 Caretaker", ta: "பிரதான முகப்பு வளைவு, பாதுகாப்பு மற்றும் பண்ணை பராமரிப்பாளர்" },
    },
    groundValue: {
      currentRate: { en: "₹4.2 Lakhs / Cent (Numbered Plots 1 to 10 with Individual Patta)", ta: "₹4.2 லட்சம் / சென்ட் (தனி பட்டாவுடன் மனைகள் 1 முதல் 10 வரை)" },
      guidelineValue: { en: "Govt Guideline: ₹2.65 Lakhs / Cent", ta: "அரசு வழிகாட்டி மதிப்பு: ₹2.65 லட்சம் / சென்ட்" },
    },
    futurePrediction: {
      threeYearROI: "+48% Projected Appreciation",
      fiveYearROI: "+85% Total Asset Growth",
      drivers: {
        en: [
          "Thiruppuvanam - Narikudi road widening to major commercial link corridor",
          "High scarcity of pre-planted sweet water gated orchards",
          "Mapbhoomi verified cadastral individual computer patta plots",
        ],
        ta: [
          "திருப்புவனம் - நரிக்குடி நெடுஞ்சாலை விரிவாக்கம்",
          "முழுமையாக நடப்பட்ட ஆரஞ்சு பழத்தோட்ட மனைகளின் அரிய வாய்ப்பு",
          "Mapbhoomi சரிபார்க்கப்பட்ட தனிநபர் கணினி பட்டா",
        ],
      },
    },
    customerReviews: [
      {
        name: "Capt. R. Sivakumar (Retd)",
        role: { en: "Orchard Owner (Plot #04)", ta: "தோட்ட உரிமையாளர் (மனை #04)" },
        rating: 5,
        date: "October 2026",
        comment: {
          en: "Boundary stones for Plots 1 to 10 are cleanly marked with cadastral coordinates. The pre-planted orange trees and sweet water table are remarkable. Highly recommend Surya Promoters.",
          ta: "மனைகள் 1 முதல் 10 வரை எல்லைக் கற்கள் துல்லியமாக நடப்பட்டுள்ளது. ஆரஞ்சு மரங்கள் மற்றும் நன்னீர் அருமை. சூர்யா நிறுவனத்தை உறுதியாக பரிந்துரைக்கிறேன்.",
        },
      },
      {
        name: "N. Kalyani",
        role: { en: "Madurai Resident & Investor", ta: "மதுரை வாசகர் & முதலீட்டாளர்" },
        rating: 5,
        date: "September 2026",
        comment: {
          en: "Directly on Thiruppuvanam - Narikudi Road. Visited on Sunday and registered our deed on Thursday. 100% genuine promoter with defense integrity.",
          ta: "நேரடி நெடுஞ்சாலை முகப்பில் உள்ளது. ஞாயிறு நேரில் பார்த்து வியாழன் பதிவு செய்தோம். நம்பகமான நிறுவனம்.",
        },
      },
    ],
  },
};

// Aliases for slug matching across components
PROJECT_DETAILS_MAP["vaigai-elite-garden"] = PROJECT_DETAILS_MAP["vaigai-elite"];
PROJECT_DETAILS_MAP["vaigai-river-build"] = PROJECT_DETAILS_MAP["vaigai-river"];
PROJECT_DETAILS_MAP["pandi-kovil-site"] = PROJECT_DETAILS_MAP["pandi-kovil"];
PROJECT_DETAILS_MAP["mayilan-gundu-site"] = PROJECT_DETAILS_MAP["mayilan-gundu"];
