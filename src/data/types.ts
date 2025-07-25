export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string[];
  priceLevel: '$' | '$$' | '$$$';
  rating: number;
  reviewCount: number;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode?: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  contact: {
    phone?: string;
    website?: string;
    email?: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  features: string[];
  openingHours?: {
    [key: string]: string;
  };
  specialties: string[];
  lastUpdated: string;
  sources: string[];
  seoKeywords: string[];
}

export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  heroImage: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  featuredRestaurants: string[]; // Restaurant IDs
  totalRestaurants: number;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  cities: City[];
  heroImage: string;
  description: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  structuredData?: Record<string, unknown>;
}