export type ProjectCategory = 'commercial' | 'farm' | 'residential' | 'industrial';
export type ProjectStatus = 'running' | 'completed' | 'upcoming' | 'ongoing' | 'available' | 'development' | 'prime';

export interface LocalizedString {
  en: string;
  ta: string;
}

export interface LocalizedArray {
  en: string[];
  ta: string[];
}

export interface NearbyFeatureItem {
  name: LocalizedString;
  distance: LocalizedString;
  category?: 'road' | 'transport' | 'hospital' | 'school' | 'landmark' | 'water';
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: ProjectCategory;
  categoryLabel: LocalizedString;
  location: LocalizedString;
  googleMapsUrl: string;
  photographyReferenceUrl?: string;
  mapBhoomiUrl?: string;
  brochureUrl?: string;
  mapBhoomiTotalUnits?: number;
  mapBhoomiAvailableUnits?: number;
  heroImage: string;
  galleryImages: string[];
  videoUrl?: string;
  videoUrls?: string[];
  description: LocalizedString;
  fullOverview: LocalizedString;
  suitableFor: LocalizedArray;
  highlights: LocalizedArray;
  layoutPlanImage?: string;
  nearbyFeatures?: NearbyFeatureItem[];
  status: ProjectStatus;
  projectType?: 'running' | 'completed' | 'upcoming';
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  iconName: string;
  image: string;
  features: LocalizedArray;
}

export type Language = 'en' | 'ta';
