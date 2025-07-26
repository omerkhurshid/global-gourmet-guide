export interface Restaurant {
  id: string;
  name: string;
  description: string;
  reviewSummary?: string;
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
  spotlight?: RestaurantSpotlight;
}

export interface RestaurantSpotlight {
  title: string;
  excerpt: string;
  introduction: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  locations: string[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  menuHighlights?: {
    [category: string]: string;
  };
  tips?: string[];
  finalVerdict: string;
  author?: string;
  publishDate: string;
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