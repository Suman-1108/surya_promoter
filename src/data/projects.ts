import { Project } from "@/types/project";

export const MAPBHOOMI_SURYA_URL = "https://mapbhoomi.com/l/surya-promoters";

export const projectsData: Project[] = [
  // ==========================================
  // COMMERCIAL PROJECTS (5 Projects as required)
  // ==========================================
  {
    id: "vaigai-elite-garden",
    slug: "vaigai-elite-garden",
    title: {
      en: "Vaigai Elite Garden",
      ta: "வைகை எலைட் கார்டன் வணிக நிலம்",
    },
    subtitle: {
      en: "High-Visibility Commercial Highway Corridor on Outer Ring Road",
      ta: "வெளிவட்ட ரிங் ரோட்டில் அதிவேக வளர்ச்சி பெறும் வணிக நிலம்",
    },
    category: "commercial",
    categoryLabel: {
      en: "Commercial Land & Highway Corridor",
      ta: "வணிக நிலம் & நெடுஞ்சாலை முகப்பு",
    },
    location: {
      en: "NH-44 Outer Ring Road Corridor, Madurai, Tamil Nadu",
      ta: "தேசிய நெடுஞ்சாலை-44 வெளிவட்ட சாலை, மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Madurai+Outer+Ring+Road+Commercial",
    mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road",
    brochureUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-rameshwaram-nh-road/brochure?layout=01a16275-c6df-721b-adaa-45994b084ec7",
    mapBhoomiTotalUnits: 6,
    mapBhoomiAvailableUnits: 6,
    heroImage: "/images/projects/vaigai/corridor-aerial.jpg",
    galleryImages: [
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai/water-pool-1.jpg",
      "/images/projects/vaigai/water-pool-2.jpg",
      "/images/projects/vaigai-commercial.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-1.mp4",
    videoUrls: [
      "/videos/vaigai/vaigai-drone-1.mp4",
      "/videos/vaigai/vaigai-drone-2.mp4",
      "/videos/vaigai/vaigai-drone-3.mp4",
    ],
    layoutPlanImage: "/images/projects/vaigai/corridor-aerial.jpg",
    status: "running",
    projectType: "running",
    description: {
      en: "Strategic commercial parcels tailored for proposed multi-speciality hospitals, logistics godowns, fleet transport terminals, and highway hospitality hubs.",
      ta: "மருத்துவமனைகள், தங்கும் விடுதிகள், குடோன்கள், சரக்குக் கிடங்குகள் மற்றும் பிற வணிக நிறுவனங்கள் அமைப்பதற்கு மிகவும் உகந்த வணிக நிலம்.",
    },
    fullOverview: {
      en: "Vaigai Elite Garden is a signature commercial land project developed by Surya Promoters along Madurai's bustling Outer Ring Road corridor. With wide vehicular frontage, smooth connectivity to NH-44, and rock-solid legal title backed by 16+ years of defense-standard due diligence, this location offers exponential commercial appreciation.",
      ta: "வைகை எலைட் கார்டன் என்பது மதுரையின் முக்கிய வெளிவட்ட சாலையில் அமைந்துள்ள ஒரு முதன்மையான வணிக நிலத் திட்டமாகும். கனரக வாகனங்கள் வந்து செல்லக்கூடிய அகலமான முகப்பு சாலை, 100% தெளிவான பட்டா மற்றும் விமானப்படை ஒழுங்குமுறையுடன் கூடிய நம்பகமான நிலம்.",
    },
    suitableFor: {
      en: [
        "Proposed Multi-Speciality Hospitals & Healthcare Campuses",
        "Hospitality Establishments, Motels & Convention Centers",
        "Commercial Godowns, Logistics Hubs & Cold Storage",
        "Automobile Showrooms, Service Centers & Enterprise Offices",
      ],
      ta: [
        "நவீன பல்நோக்கு மருத்துவமனைகள் மற்றும் சுகாதார மையங்கள்",
        "ஹோட்டல்கள், தங்கும் விடுதிகள் மற்றும் திருமண மண்டபங்கள்",
        "சரக்குக் கிடங்குகள், குடோன்கள் மற்றும் குளிர்பதன மையங்கள்",
        "வாகன காட்சி அரங்குகள் மற்றும் பெருநிறுவன அலுவலகங்கள்",
      ],
    },
    highlights: {
      en: [
        "Direct Outer Ring Road vehicular access supporting container traffic",
        "100% verified computer patta and clear parent documents since 1990",
        "Proximity to Pandi Kovil junction and airport freight corridors",
        "Elevated non-flood terrain with natural gradient for quick civil work",
      ],
      ta: [
        "கனரக சரக்கு வாகனங்கள் வந்து செல்லக்கூடிய நேரடி ரிங் ரோடு முகப்பு",
        "100% சரிபார்க்கப்பட்ட கம்ப்யூட்டர் பட்டா மற்றும் வில்லங்கமற்ற மூலப்பத்திரம்",
        "பாண்டி கோவில் சந்திப்பு மற்றும் மதுரை விமான நிலையத்திற்கு விரைவான இணைப்பு",
        "வெள்ள நீர் தேங்காத உயர்ந்த சிறப்பான நிலப்பரப்பு அமைப்பு",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Madurai Ring Road Highway Bypass", ta: "மதுரை ரிங் ரோடு நெடுஞ்சாலை" },
        distance: { en: "Direct Frontage", ta: "நேரடி முகப்பு" },
        category: "road",
      },
      {
        name: { en: "Pandi Kovil Ring Road Junction", ta: "பாண்டி கோவில் சந்திப்பு" },
        distance: { en: "5 Mins", ta: "5 நிமிடங்கள்" },
        category: "landmark",
      },
      {
        name: { en: "Madurai International Airport", ta: "மதுரை சர்வதேச விமான நிலையம்" },
        distance: { en: "12 Mins", ta: "12 நிமிடங்கள்" },
        category: "transport",
      },
    ],
  },
  {
    id: "vaigai-river-build",
    slug: "vaigai-river-build",
    title: {
      en: "Vaigai River Build",
      ta: "வைகை ரிவர் பில்ட் வணிக வளாகம்",
    },
    subtitle: {
      en: "Scenic Commercial & Enterprise Space along Vaigai Riverfront",
      ta: "வைகை ஆற்றங்கரை அருகிலான பிரத்யேக வணிக & நிறுவன வளாகம்",
    },
    category: "commercial",
    categoryLabel: {
      en: "Riverfront Commercial Development",
      ta: "ஆற்றங்கரை வணிக நிலம்",
    },
    location: {
      en: "Vaigai Riverfront Corridor, Madurai, Tamil Nadu",
      ta: "வைகை ஆற்றங்கரை மண்டலம், மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Vaigai+River+Madurai",
    heroImage: "/images/projects/vaigai-commercial.jpg",
    galleryImages: [
      "/images/projects/vaigai-commercial.jpg",
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai/water-pool-1.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-2.mp4",
    status: "running",
    projectType: "running",
    description: {
      en: "High-exposure commercial development plots situated near Vaigai River arterial road, ideal for commercial showrooms, riverside resorts, institutional campuses, and office complexes.",
      ta: "வைகை ஆற்றங்கரை சாலையையொட்டி அமைந்துள்ள பிரதான வணிக நிலம். வணிக வளாகங்கள், ரிசார்ட் மற்றும் அலுவலகங்கள் அமைக்க உகந்தது.",
    },
    fullOverview: {
      en: "Vaigai River Build combines natural riverfront prominence with central Madurai arterial connectivity. Engineered for multi-use commercial and hospitality ventures, this property benefits from high vehicular visibility and tranquil river breeze aesthetics.",
      ta: "வைகை நதியின் எழில்மிகு சூழலில் அமையப்பெற்ற இந்த வணிக திட்டம், நகரின் முக்கிய இணைப்புகளுடன் கூடிய சிறப்பான எதிர்கால முதலீட்டு வாய்ப்பாகும்.",
    },
    suitableFor: {
      en: [
        "Eco Resorts & Riverside Leisure Venues",
        "Corporate Training Institutes & Colleges",
        "Commercial Office Complexes & Tech Campuses",
        "Automotive Showrooms & Dealerships",
      ],
      ta: [
        "சுற்றுச்சூழல் ரிசார்ட்டுகள் மற்றும் பொழுதுபோக்கு மையங்கள்",
        "பெருநிறுவன பயிற்சி மையங்கள் மற்றும் கல்லூரிகள்",
        "வணிக அலுவலக வளாகங்கள் மற்றும் தகவல் தொழில்நுட்ப மையங்கள்",
        "வாகன காட்சி அரங்குகள் மற்றும் டீலர்ஷிப்புகள்",
      ],
    },
    highlights: {
      en: [
        "Unobstructed river-view exposure with wide arterial approach road",
        "Perennial groundwater table and rich soil stability",
        "100% Computer Patta and DTCP-aligned commercial zoning",
        "Fast 10-minute connectivity to Madurai Central & Meenakshi Amman Temple zone",
      ],
      ta: [
        "அகலமான அணுகு சாலையுடன் கூடிய இயற்கை எழில்மிக்க முகப்பு",
        "வற்றாத நிலத்தடி நீர் வளம் மற்றும் உறுதியான மண் தரம்",
        "100% கம்ப்யூட்டர் பட்டா மற்றும் தெளிவான சட்ட ஆவணங்கள்",
        "மதுரை மத்திய பகுதிக்கு 10 நிமிடங்களில் செல்லும் வசதி",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Vaigai River North Bank Road", ta: "வைகை வடகரை சாலை" },
        distance: { en: "Direct Frontage", ta: "நேரடி முகப்பு" },
        category: "road",
      },
      {
        name: { en: "Goripalayam Junction", ta: "கோரிப்பாளையம் சந்திப்பு" },
        distance: { en: "8 Mins", ta: "8 நிமிடங்கள்" },
        category: "landmark",
      },
    ],
  },
  {
    id: "pandi-kovil-site",
    slug: "pandi-kovil-site",
    title: {
      en: "Pandi Kovil Site",
      ta: "பாண்டி கோவில் வணிக மனைப்பிரிவு",
    },
    subtitle: {
      en: "Ultra High-Footfall Commercial Land Near Ring Road Junction",
      ta: "பாண்டி கோவில் ரிங் ரோடு சந்திப்பு அருகிலான அதிவேக வணிக நிலம்",
    },
    category: "commercial",
    categoryLabel: {
      en: "High-Traffic Commercial Hub",
      ta: "மக்கள் நடமாட்டம் மிகுந்த வணிக நிலம்",
    },
    location: {
      en: "Pandi Kovil Ring Road Junction, Madurai, Tamil Nadu",
      ta: "பாண்டி கோவில் ரிங் ரோடு சந்திப்பு, மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Pandi+Kovil+Madurai",
    heroImage: "/images/projects/vaigai/water-pool-1.jpg",
    galleryImages: [
      "/images/projects/vaigai/water-pool-1.jpg",
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai-commercial.jpg",
    ],
    videoUrl: "/videos/vaigai/vaigai-drone-3.mp4",
    status: "running",
    projectType: "running",
    description: {
      en: "Premium commercial parcel strategically positioned at the renowned Pandi Kovil Ring Road junction, witnessing over 50,000+ daily commuter and pilgrim footfalls.",
      ta: "தினசரி 50,000-க்கும் மேற்பட்ட பயணிகள் மற்றும் பக்தர்கள் வந்து செல்லும் பாண்டி கோவில் ரிங் ரோடு சந்திப்பில் அமைந்துள்ள முதன்மை வணிக நிலம்.",
    },
    fullOverview: {
      en: "Pandi Kovil Site is an irreplaceable commercial asset ideal for retail super-marts, multi-cuisine food courts, budget hotels, highway fuel stations, and logistics transfer points. Backed by Surya Promoters' clean legal guarantee.",
      ta: "சூப்பர் மார்க்கெட்டுகள், உணவகங்கள், தங்கும் விடுதிகள் மற்றும் பெட்ரோல் பங்க் அமைப்பதற்கு மதுரையின் மிகச்சிறந்த வணிக முதலீட்டு மையம்.",
    },
    suitableFor: {
      en: [
        "Retail Super-Marts & Commercial Complex",
        "Highway Food Courts & Restaurants",
        "Budget Pilgrim Hotels & Lodging Facilities",
        "Fuel Filling Stations & EV Charging Plazas",
      ],
      ta: [
        "ஷாப்பிங் காம்ப்ளக்ஸ் மற்றும் சூப்பர் மார்க்கெட்",
        "நெடுஞ்சாலை உணவகங்கள் மற்றும் உணவு விடுதிகள்",
        "தங்கும் விடுதிகள் மற்றும் யாத்ரீகர்கள் தங்குமிடங்கள்",
        "பெட்ரோல் பங்க் மற்றும் மின்வாகன சார்ஜிங் மையங்கள்",
      ],
    },
    highlights: {
      en: [
        "Massive pedestrian & vehicular footfall 24x7 throughout the year",
        "Direct dual-frontage access on Outer Ring Road arterial",
        "Immediate registration and clear legal revenue ownership",
        "Proven 4.9-star appreciation record in the fastest growing eastern Madurai sector",
      ],
      ta: [
        "ஆண்டு முழுவதும் 24 மணி நேரமும் மக்கள் மற்றும் வாகனப் போக்குவரத்து",
        "இருபுறமும் அகலமான சாலை முகப்பு வசதி",
        "உடனடி பத்திரப்பதிவு மற்றும் தெளிவான வருவாய்த்துறை ஆவணங்கள்",
        "கிழக்கு மதுரையின் அதிவேக வளர்ச்சி பெறும் பகுதி",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Pandi Kovil Temple & Ring Road Circle", ta: "பாண்டி கோவில் மற்றும் ரிங் ரோடு சந்திப்பு" },
        distance: { en: "2 Mins", ta: "2 நிமிடங்கள்" },
        category: "landmark",
      },
      {
        name: { en: "Madurai Sivagangai Highway", ta: "மதுரை சிவகங்கை நெடுஞ்சாலை" },
        distance: { en: "4 Mins", ta: "4 நிமிடங்கள்" },
        category: "road",
      },
    ],
  },
  {
    id: "commercial-building-anna-nagar",
    slug: "commercial-building-anna-nagar",
    title: {
      en: "Commercial Building – Anna Nagar",
      ta: "அண்ணா நகர் வணிக கட்டிடம் & நிலம்",
    },
    subtitle: {
      en: "Prime Upmarket Commercial Real Estate in Central Anna Nagar Corridor",
      ta: "அண்ணா நகரின் பிரதான பகுதியில் அமைந்துள்ள மதிப்புமிக்க வணிக சொத்து",
    },
    category: "commercial",
    categoryLabel: {
      en: "Prime Urban Commercial Real Estate",
      ta: "நகர மைய வணிக சொத்து",
    },
    location: {
      en: "80 Feet Road, Anna Nagar, Madurai, Tamil Nadu",
      ta: "80 அடி ரோடு, அண்ணா நகர், மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Anna+Nagar+Madurai",
    heroImage: "/images/projects/vaigai/corridor-aerial.jpg",
    galleryImages: [
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai-commercial.jpg",
      "/images/projects/vaigai/water-pool-2.jpg",
    ],
    status: "running",
    projectType: "running",
    description: {
      en: "High-yield commercial building and plot in the heart of Anna Nagar, Madurai's premier commercial and financial district with maximum rental demand.",
      ta: "மதுரையின் முன்னணி வணிக மையமான அண்ணா நகரில் அமைந்துள்ள அதிக வாடகை வருவாய் தரும் முதன்மை வணிக சொத்து.",
    },
    fullOverview: {
      en: "Located on Anna Nagar's prestigious high-street corridor, this property guarantees steady capital appreciation and top-tier rental yields from banks, retail brands, diagnostic centers, and corporate offices.",
      ta: "வங்கிகள், கார்ப்பரேட் அலுவலகங்கள், கிளினிக்குகள் மற்றும் பிராண்டட் ஷோரூம்களுக்கு வாடகைக்கு விட உகந்த அண்ணா நகரின் முக்கிய வணிகப் பகுதி.",
    },
    suitableFor: {
      en: [
        "Banking & Financial Institutions",
        "Diagnostic Centers & Specialty Polyclinics",
        "Fashion Retail Showrooms & Boutiques",
        "IT & Corporate Regional Headquarters",
      ],
      ta: [
        "வங்கிகள் மற்றும் நிதி நிறுவனங்கள்",
        "ஸ்கேன் மையங்கள் மற்றும் மருத்துவ கிளினிக்குகள்",
        "ஆடை ஆபரண ஷோரூம்கள்",
        "ஐடி மற்றும் கார்ப்பரேட் தலைமை அலுவலகங்கள்",
      ],
    },
    highlights: {
      en: [
        "Unrivaled central city prestige in Anna Nagar 80 Feet Road sector",
        "High rental yield with immediate tenancy potential",
        "Dedicated multi-car parking and broad pedestrian pavement",
        "100% verified urban municipal title with zero encumbrance",
      ],
      ta: [
        "அண்ணா நகர் 80 அடி ரோட்டின் முக்கிய வணிக மையம்",
        "உடனடி வாடகை வருமானம் தரும் சிறப்பான கட்டமைப்பு",
        "பிரத்யேக கார் பார்க்கிங் மற்றும் நடைபாதை வசதி",
        "100% வில்லங்கமற்ற தூய மூலப்பத்திரங்கள்",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Anna Nagar Main 80 Feet Road", ta: "அண்ணா நகர் மெயின் 80 அடி ரோடு" },
        distance: { en: "Direct Frontage", ta: "நேரடி முகப்பு" },
        category: "road",
      },
      {
        name: { en: "Madurai Corporation Central Office", ta: "மதுரை மாநகராட்சி அலுவலகம்" },
        distance: { en: "6 Mins", ta: "6 நிமிடங்கள்" },
        category: "landmark",
      },
    ],
  },
  {
    id: "mayilan-gundu-site-mpf-school",
    slug: "mayilan-gundu-site-mpf-school",
    title: {
      en: "Mayilan Gundu Site – MPF International School",
      ta: "மயிலன் குண்டு – MPF பள்ளி அருகிலான நிலம்",
    },
    subtitle: {
      en: "Institutional & Commercial Acreage Adjacent to MPF International School",
      ta: "MPF சர்வதேச பள்ளிக்கு அருகிலுள்ள கல்வி & வணிக நிலம்",
    },
    category: "commercial",
    categoryLabel: {
      en: "Institutional & Commercial Acreage",
      ta: "கல்வி & வணிக பெருநிலப்பரப்பு",
    },
    location: {
      en: "Mayilan Gundu, Near MPF School, Madurai, Tamil Nadu",
      ta: "மயிலன் குண்டு, MPF பள்ளி அருகில், மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Mayilan+Gundu+Madurai",
    heroImage: "/images/projects/vaigai/water-pool-2.jpg",
    galleryImages: [
      "/images/projects/vaigai/water-pool-2.jpg",
      "/images/projects/vaigai/corridor-aerial.jpg",
      "/images/projects/vaigai-commercial.jpg",
    ],
    status: "running",
    projectType: "running",
    description: {
      en: "Expansive commercial and institutional land parcel bordering the prestigious MPF International School campus, suitable for academies, hostelling, student amenities, and commercial ventures.",
      ta: "MPF சர்வதேச பள்ளிக்கு மிக அருகில் அமைந்துள்ள விரிவான நிலப்பரப்பு. கல்வி நிறுவனங்கள், விடுதிகள் மற்றும் வணிக திட்டங்களுக்கு மிகவும் சிறந்தது.",
    },
    fullOverview: {
      en: "Mayilan Gundu Site offers large contiguous land parcels in a rapidly appreciating residential-institutional corridor. Perfect for educational foundations, student recreation centers, daycare campuses, and commercial utility markets.",
      ta: "மயிலன் குண்டு பகுதியில் கல்வி நிறுவனங்களை சுற்றியுள்ள அதிவேக வளர்ச்சி பெறும் முதலீட்டு மண்டலம்.",
    },
    suitableFor: {
      en: [
        "Educational Academies & Skill Centers",
        "Student Hostels & Residential Quarters",
        "Sports Arenas & Swimming Complexes",
        "Commercial Utility Shopping Centers",
      ],
      ta: [
        "கல்விக்கூடங்கள் மற்றும் பயிற்சி மையங்கள்",
        "மாணவர் விடுதிகள் மற்றும் குடியிருப்புகள்",
        "விளையாட்டு மைதானங்கள் மற்றும் உடற்பயிற்சி கூடங்கள்",
        "வணிக பல்பொருள் அங்காடிகள்",
      ],
    },
    highlights: {
      en: [
        "Direct boundary touchpoint with MPF International School campus",
        "Clean, peaceful suburban academic environment with broad approach roads",
        "Abundant sweet groundwater and clear survey boundaries",
        "Immediate documentation and patta ownership guarantee",
      ],
      ta: [
        "MPF சர்வதேச பள்ளியின் எல்லையை ஒட்டிய பிரதான அமைவிடம்",
        "அமைதியான கல்விச் சூழல் மற்றும் அகலமான சாலை வசதி",
        "ஏராளமான நல்ல நிலத்தடி குடிநீர் வசதி",
        "உடனடி பத்திரப்பதிவு மற்றும் கம்ப்யூட்டர் பட்டா உறுதி",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "MPF International School Main Gate", ta: "MPF சர்வதேச பள்ளி பிரதான வாசல்" },
        distance: { en: "Adjacent", ta: "அருகிலேயே" },
        category: "school",
      },
    ],
  },

  // ==========================================
  // FARM LAND PROJECTS (2 Projects as required)
  // ==========================================
  {
    id: "madurai-farms-and-fruits",
    slug: "madurai-farms-and-fruits",
    title: {
      en: "Madurai Farms & Fruits",
      ta: "மதுரை பார்ம்ஸ் & ஃப்ரூட்ஸ்",
    },
    subtitle: {
      en: "Managed Organic Agro-Acreage & Weekend Farmhouse Plots",
      ta: "இயற்கை விவசாய பண்ணை மனைகள் & வார இறுதி பண்ணை வீடு",
    },
    category: "farm",
    categoryLabel: {
      en: "Managed Agro Farmland",
      ta: "பராமரிக்கப்படும் பண்ணை நிலம்",
    },
    location: {
      en: "Agricultural Green Belt, Madurai, Tamil Nadu",
      ta: "விவசாய பசுமை மண்டலம், மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://goo.gl/maps/reSXDDNmSNzkve699?g_st=aw",
    mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/madurai-farms",
    mapBhoomiTotalUnits: 12,
    mapBhoomiAvailableUnits: 12,
    heroImage: "/images/projects/madurai-farms.jpg",
    galleryImages: [
      "/images/projects/madurai-farms.jpg",
      "/images/projects/madurai-farms/entrance-gate.jpg",
      "/images/projects/madurai-farms/aerial-grove.jpg",
      "/images/projects/madurai-farms/panoramic-view.jpg",
      "/images/projects/madurai-farms/concrete-pathway.jpg",
      "/images/projects/madurai-farms/aerial-cottage.jpg",
      "/images/projects/madurai-farms/water-reservoir.jpg",
    ],
    videoUrl: "/videos/madurai-farms-tour.mp4",
    videoUrls: ["/videos/madurai-farms-tour.mp4"],
    layoutPlanImage: "/images/projects/madurai-farms/panoramic-view.jpg",
    status: "running",
    projectType: "running",
    description: {
      en: "Fertile managed organic farm acreage featuring perennial groundwater, pre-planted fruit canopies, wide concrete plantation pathways, and ready weekend cottage setups.",
      ta: "மதுரையின் வளமான பகுதியில் அமைந்துள்ள இயற்கை பண்ணை மனைகள். சுத்தமான நிலத்தடி நீர், மரங்கள், வார இறுதி பண்ணை வீடு அமைக்கும் வசதி மற்றும் தெளிவான எல்லைக் கற்களுடன் கூடியது.",
    },
    fullOverview: {
      en: "Madurai Farms & Fruits is Surya Promoters' signature agro-living development. Every parcel is demarcated with surveyed stone markers and connected via private motorable avenues with dedicated water reservoirs and drip irrigation networks.",
      ta: "மதுரை பார்ம்ஸ் & ஃப்ரூட்ஸ் என்பது உங்கள் குடும்பத்திற்கான ஆரோக்கியமான பசுமை சொத்து. பழ மரங்கள், சொட்டு நீர்ப்பாசனம், மின்சாரம் மற்றும் பாதுகாப்புடன் கூடிய பண்ணை எஸ்டேட்.",
    },
    suitableFor: {
      en: [
        "Organic Horticulture & Citrus/Guava/Mango Groves",
        "Weekend Farmhouse Cottages & Family Retreats",
        "Generational Agro Land Banking & Pure Air Living",
        "High-Return Natural Farmland Investment",
      ],
      ta: [
        "பழ மரத் தோட்டங்கள் மற்றும் இயற்கை விவசாயம்",
        "வார இறுதி பண்ணை வீடு மற்றும் ஓய்வு இல்லம்",
        "தலைமுறைக்கான பாதுகாப்பான நில முதலீடு",
        "அமைதியான பசுமையான இயற்கை சூழல்",
      ],
    },
    highlights: {
      en: [
        "Flourishing multi-crop fruit plantations with mature trees",
        "24x7 perennial groundwater aquifer with dedicated drip lines",
        "Wide motorable internal concrete pathways and streetlights",
        "100% Computer Patta, verified parent deeds and gated community security",
      ],
      ta: [
        "செழித்து வளரும் பலவகை பழ மரங்கள் மற்றும் நிழல் தரும் மரங்கள்",
        "வற்றாத நிலத்தடி நீர் வசதி மற்றும் சொட்டு நீர்ப்பாசன குழாய்கள்",
        "அகலமான கான்கிரீட் சாலைகள் மற்றும் மின்விளக்குகள்",
        "100% கம்ப்யூட்டர் பட்டா மற்றும் முழுமையான பாதுகாப்பு",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Madurai Ring Road Highway", ta: "மதுரை ரிங் ரோடு நெடுஞ்சாலை" },
        distance: { en: "15 Mins", ta: "15 நிமிடங்கள்" },
        category: "road",
      },
      {
        name: { en: "Perennial Water Canal", ta: "வற்றாத நீர் வாய்க்கால்" },
        distance: { en: "Direct On-Site", ta: "நேரடி பாசனம்" },
        category: "water",
      },
    ],
  },
  {
    id: "orange-garden",
    slug: "orange-garden",
    title: {
      en: "Orange Garden",
      ta: "ஆரஞ்ச் கார்டன்",
    },
    subtitle: {
      en: "Gated Orchard & Farm Estate Plots (Plots 1–10)",
      ta: "கேட்டட் பழத்தோட்டம் & பண்ணை எஸ்டேட் மனைகள்",
    },
    category: "farm",
    categoryLabel: {
      en: "Gated Orchard & Farm Estate",
      ta: "கேட்டட் பழத்தோட்டம் & பண்ணை எஸ்டேட்",
    },
    location: {
      en: "Thiruppuvanam to Narikudi Road, Madurai Region, Tamil Nadu",
      ta: "திருப்புவனம் - நரிக்குடி மெயின் ரோடு, மதுரை மண்டலம், தமிழ்நாடு",
    },
    googleMapsUrl: "https://goo.gl/maps/reSXDDNmSNzkve699?g_st=aw",
    heroImage: "/images/projects/orange-garden/entrance-gate.jpg",
    galleryImages: [
      "/images/projects/orange-garden/entrance-gate.jpg",
      "/images/projects/orange-garden/layout-blueprint.jpg",
      "/images/projects/orange-garden/citrus-groves.jpg",
      "/images/projects/orange-garden/demarcated-plots.jpg",
      "/images/projects/orange-garden/farmhouse-cottage.jpg",
      "/images/projects/orange-garden/orchard-aerial.jpg",
    ],
    layoutPlanImage: "/images/projects/orange-garden/layout-blueprint.jpg",
    status: "running",
    projectType: "running",
    description: {
      en: "Exclusive gated orchard community offering mature citrus plantations, 10 surveyed numbered plot demarcations, and luxury farmhouse cottage ownership with direct frontage on Thiruppuvanam to Narikudi Road.",
      ta: "செழிப்பான பழத்தோட்டம், 10 எண் குறிக்கப்பட்ட பண்ணை மனைகள் (Plots 1-10) மற்றும் திருப்புவனம் - நரிக்குடி சாலையில் நேரடி முகப்பு கொண்ட கேட்டட் பண்ணை மனை திட்டம்.",
    },
    fullOverview: {
      en: "Orange Garden: Gated Orchard & Farm Estate Plots is an exclusive 10-unit agricultural community situated along Thiruppuvanam to Narikudi Road. Designed with a grand gated entrance portal, broad central avenue road, well-demarcated farm estate parcels with boundary stones (Plots 1 through 10), and flourishing citrus orchards with drip irrigation.",
      ta: "ஆரஞ்ச் கார்டன் என்பது திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் அமைந்துள்ள 10 பண்ணை மனைகள் கொண்ட கேட்டட் திட்டம். பிரம்மாண்ட நுழைவு வளைவு, எல்லைக் கற்கள் நடப்பட்ட மனைகள் (1 முதல் 10 வரை), சொட்டு நீர்ப்பாசனம் மற்றும் பண்ணை வீடு கட்டும் வசதியுடன் கூடியது.",
    },
    suitableFor: {
      en: [
        "10 Exclusive Private Farmhouse Cottages & Retreats",
        "High-Yield Citrus & Sweet Lime Tree Farming",
        "Family Weekend Barbecue & Leisure Gazebos",
        "High-Appreciation Real Estate Land Banking",
      ],
      ta: [
        "பிரத்யேக பண்ணை வீடு மற்றும் வார இறுதி இல்லம்",
        "ஆரஞ்சு மற்றும் எலுமிச்சை பழ மர சாகுபடி",
        "குடும்ப கொண்டாட்டங்களுக்கான கெஸீபோ & பூங்கா",
        "பாதுகாப்பான நில வங்கி மற்றும் எதிர்கால சொத்து",
      ],
    },
    highlights: {
      en: [
        "10 surveyed farm plots (Plots 1–10) with direct road frontage on Thiruppuvanam to Narikudi Road",
        "Grand architectural gated entrance portal with 24/7 security & illuminated avenue",
        "Clear boundary demarcations with surveyed stones and plot markings",
        "Flourishing orange & citrus orchards with integrated drip irrigation pipelines",
        "Clear legal title documentation, revenue records, and smooth registration process",
      ],
      ta: [
        "திருப்புவனம் - நரிக்குடி மெயின் ரோட்டில் நேரடி முகப்புடன் 10 அளவீடு செய்யப்பட்ட பண்ணை மனைகள் (மனைகள் 1-10)",
        "24/7 பாதுகாப்பு மற்றும் மின்விளக்குகளுடன் கூடிய பிரம்மாண்ட நுழைவு வளைவு",
        "அளவீடு செய்யப்பட்டு எண் குறிக்கப்பட்ட தனித்தனி எல்லைக் கற்கள்",
        "சொட்டு நீர்ப்பாசன குழாய்களுடன் செழித்து வளரும் ஆரஞ்சு & பழ மரத் தோட்டங்கள்",
        "தெளிவான மூலப்பத்திரங்கள், அரசு ஆவணங்கள் மற்றும் உடனடி பத்திரப்பதிவு வசதி",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Thiruppuvanam to Narikudi Main Road", ta: "திருப்புவனம் - நரிக்குடி மெயின் ரோடு" },
        distance: { en: "Direct Frontage", ta: "நேரடி முகப்பு" },
        category: "road",
      },
      {
        name: { en: "Thiruppuvanam Railway Station & Market", ta: "திருப்புவனம் ரயில் நிலையம் & சந்தை" },
        distance: { en: "8 Mins", ta: "8 நிமிடங்கள்" },
        category: "transport",
      },
      {
        name: { en: "Madurai Ring Road & Highway Connectivity", ta: "மதுரை ரிங் ரோடு & நெடுஞ்சாலை இணைப்பு" },
        distance: { en: "15 Mins", ta: "15 நிமிடங்கள்" },
        category: "road",
      },
    ],
  },

  // ==========================================
  // RESIDENTIAL PROJECTS (2 Subcategories as required)
  // ==========================================
  {
    id: "plot-projects",
    slug: "plot-projects",
    title: {
      en: "Plot Projects (Surya Green Enclave)",
      ta: "மனைப்பிரிவு திட்டங்கள் (சூர்யா கிரீன் என்கிளேவ்)",
    },
    subtitle: {
      en: "DTCP & RERA Approved Residential Villa Plotted Township",
      ta: "DTCP & RERA அனுமதி பெற்ற குடியிருப்பு வீட்டு மனைப்பிரிவு",
    },
    category: "residential",
    categoryLabel: {
      en: "Approved Residential Plotted Development",
      ta: "அங்கீகரிக்கப்பட்ட வீட்டு மனைப்பிரிவு",
    },
    location: {
      en: "Mudukangulam Road, Madurai Region, Tamil Nadu",
      ta: "முதுகங்குளம் சாலை, மதுரை மண்டலம், தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Mudukangulam+Madurai",
    mapBhoomiUrl: "https://mapbhoomi.com/l/surya-promoters/green-enclave",
    heroImage: "/images/projects/surya-green-enclave.jpg",
    galleryImages: [
      "/images/projects/surya-green-enclave.jpg",
      "/images/projects/surya-green-enclave/layout-blueprint.jpg",
      "/images/projects/surya-green-enclave/road-corridor.jpg",
      "/images/hero/hero-gated-layout.jpg",
    ],
    layoutPlanImage: "/images/projects/surya-green-enclave/layout-blueprint.jpg",
    status: "completed",
    projectType: "completed",
    description: {
      en: "Premium residential plotted development featuring wide bitumen tar roads, street lights, sweet groundwater, clear boundary stones, and instant individual patta registration.",
      ta: "அகலமான தார் சாலைகள், தெருவிளக்குகள், இனிமையான நிலத்தடி நீர் மற்றும் உடனடி தனிப்பட்டா வசதியுடன் கூடிய DTCP குடியிருப்பு மனைப்பிரிவு.",
    },
    fullOverview: {
      en: "Our Plot Projects deliver planned residential communities in peaceful, fast-developing residential belts. Surya Green Enclave provides 15+ surveyed villa plots with immediate construction viability, excellent groundwater, and verified patta documentation.",
      ta: "சூர்யா கிரீன் என்கிளேவ் என்பது மதுரையின் அமைதியான குடியிருப்பு பகுதியில் அமைந்துள்ள DTCP மனைப்பிரிவாகும். உடனடியாக வீடு கட்ட உகந்த இடம், நல்ல குடிநீர் வளம் மற்றும் உடனடி பட்டா.",
    },
    suitableFor: {
      en: [
        "Independent Luxury Villa Construction",
        "High-Appreciation Residential Plot Investment",
        "Retirement Homes & Peaceful Family Living",
        "Generational Wealth Creation in Madurai",
      ],
      ta: [
        "சொந்த தனி வில்லா வீடு கட்டுவதற்கு",
        "மதிப்பு உயரும் குடியிருப்பு மனை முதலீடு",
        "அமைதியான குடும்ப வாழ்வியல்",
        "தலைமுறைக்கான பாதுகாப்பான நில சொத்து",
      ],
    },
    highlights: {
      en: [
        "DTCP and RERA approved plotted township layout",
        "30-feet and 24-feet wide bitumen tar roads with avenue trees",
        "Immediate individual computer patta and name transfer guarantee",
        "100% Delivered and completed project with satisfied homeowners",
      ],
      ta: [
        "DTCP மற்றும் RERA அரசு அனுமதி பெற்ற வரைபடம்",
        "30 அடி மற்றும் 24 அடி அகலமான தார் சாலைகள் & மரங்கள்",
        "உடனடி தனி கம்ப்யூட்டர் பட்டா மற்றும் பெயர் மாற்ற உத்தரவாதம்",
        "100% வெற்றிகரமாக நிறைவேற்றப்பட்ட நம்பகமான மனைப்பிரிவு",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Mudukangulam Main Road", ta: "முதுகங்குளம் பிரதான சாலை" },
        distance: { en: "Direct Frontage", ta: "நேரடி முகப்பு" },
        category: "road",
      },
      {
        name: { en: "Madurai Ring Road Junction", ta: "மதுரை ரிங் ரோடு சந்திப்பு" },
        distance: { en: "10 Mins", ta: "10 நிமிடங்கள்" },
        category: "road",
      },
    ],
  },
  {
    id: "flat-projects",
    slug: "flat-projects",
    title: {
      en: "Flat Projects (Upcoming Luxury Residences)",
      ta: "அடுக்குமாடி குடியிருப்பு திட்டங்கள்",
    },
    subtitle: {
      en: "Modern Gated Apartment Communities & Luxury Living Spaces",
      ta: "நவீன கேட்டட் சொகுசு அடுக்குமாடி குடியிருப்புகள்",
    },
    category: "residential",
    categoryLabel: {
      en: "Premium Apartment Development",
      ta: "சொகுசு அடுக்குமாடி குடியிருப்பு",
    },
    location: {
      en: "Prime Urban Residential Corridors, Madurai, Tamil Nadu",
      ta: "முக்கிய நகர்ப்புற குடியிருப்பு மண்டலம், மதுரை, தமிழ்நாடு",
    },
    googleMapsUrl: "https://maps.google.com/?q=Madurai+Residential",
    heroImage: "/images/hero/hero-house.jpg",
    galleryImages: [
      "/images/hero/hero-house.jpg",
      "/images/hero/hero-gated-layout.jpg",
      "/images/projects/surya-green-enclave.jpg",
    ],
    status: "upcoming",
    projectType: "upcoming",
    description: {
      en: "Conceptual modern luxury apartment developments in Madurai offering contemporary architectural elevation, dedicated parking, elevator access, and premium urban community amenities.",
      ta: "நவீன கட்டிடக்கலை, கார் பார்க்கிங், லிப்ட் மற்றும் அனைத்து வசதிகளுடன் மதுரையில் வரவிருக்கும் சொகுசு அடுக்குமாடி குடியிருப்பு திட்டம்.",
    },
    fullOverview: {
      en: "Surya Promoters' upcoming Flat Projects are conceptualized to bring world-class vertical living to Madurai. Incorporating seismic-resistant structures, energy-efficient designs, lush terrace gardens, and 24/7 security surveillance.",
      ta: "மதுரையின் மையப்பகுதிகளில் உலகத்தரம் வாய்ந்த நவீன வசதிகளுடன் அமையவிருக்கும் அடுக்குமாடி குடியிருப்பு திட்டங்கள். உயர்தர பாதுகாப்பு மற்றும் அமைதியான சூழல்.",
    },
    suitableFor: {
      en: [
        "Modern Urban Nuclear Families & Working Professionals",
        "High-Yield Rental Property Portfolios",
        "NRI Real Estate Investment in Madurai",
        "Low-Maintenance Luxury Living",
      ],
      ta: [
        "நவீன நகர குடும்பங்கள் மற்றும் பணியாளர்கள்",
        "அதிக வாடகை வருவாய் தரும் அடுக்குமாடி முதலீடு",
        "வெளிநாட்டு வாழ் தமிழர்களின் நம்பகமான சொத்து",
        "பராமரிப்பு எளிதான நவீன சொகுசு வாழ்க்கை",
      ],
    },
    highlights: {
      en: [
        "Prime location with easy access to premier schools and hospitals",
        "Vastu-compliant architectural floorplans with abundant natural sunlight",
        "Covered reserved car parking and automatic passenger elevators",
        "Dedicated rainwater harvesting and backup electrical systems",
      ],
      ta: [
        "முன்னணி பள்ளிகள் மற்றும் மருத்துவமனைகளுக்கு மிக அருகில்",
        "முழுமையான வாஸ்து முறைப்படி காற்றோட்டமான வடிவமைப்பு",
        "பாதுகாப்பான கார் பார்க்கிங் மற்றும் அதிநவீன லிப்ட் வசதி",
        "மழைநீர் சேகரிப்பு மற்றும் ஜெனரேட்டர் மின்வசதி",
      ],
    },
    nearbyFeatures: [
      {
        name: { en: "Madurai City Center & Bus Terminus", ta: "மதுரை நகர மையம் & பேருந்து நிலையம்" },
        distance: { en: "10 Mins", ta: "10 நிமிடங்கள்" },
        category: "transport",
      },
    ],
  },
];
