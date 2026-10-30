export type ProjectCategory = 'commercial' | 'farm' | 'residential' | 'industrial';
export type ProjectStatus = 'running' | 'completed' | 'ongoing' | 'available' | 'development' | 'prime';

export interface LocalizedString {
  en: string;
  ta: string;
}

export interface LocalizedArray {
  en: string[];
  ta: string[];
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
  description: LocalizedString;
  fullOverview: LocalizedString;
  suitableFor: LocalizedArray;
  highlights: LocalizedArray;
  layoutPlanImage?: string;
  status: ProjectStatus;
  projectType?: 'running' | 'completed';
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
