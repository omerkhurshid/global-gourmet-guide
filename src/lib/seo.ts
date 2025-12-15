import { SEOMetadata, City, Restaurant } from "@/data/types"

export function generateCitySEO(city: City): SEOMetadata {
  const title = `${city.name}'s BEST Restaurants 2025 🍽️ | Top Rated Places Near You`
  const description = `🏆 Discover ${city.name}'s most amazing restaurants! Local favorites, hidden gems & top-rated spots. ⭐ Real reviews from food lovers. Find your next incredible meal near you!`
  
  return {
    title,
    description,
    keywords: [
      `restaurants in ${city.name}`,
      `${city.name} restaurants`,
      `best restaurants in ${city.name}`,
      `best restaurant ${city.name}`,
      `top restaurants in ${city.name}`,
      `${city.name.toLowerCase()} restaurants`,
      `list of restaurants in ${city.name}`,
      `restaurants near me ${city.name}`,
      `where to eat ${city.name}`,
      `good food ${city.name}`,
      `dining ${city.name}`,
      `${city.name} food guide`,
      `restaurants ${city.name.toLowerCase()}`,
      `best restaurants ${city.name.toLowerCase()}`
    ],
    openGraph: {
      title: `${city.name}'s BEST Restaurants 2025 🍽️ - Locals' Top Picks`,
      description: `🏆 ${city.name}'s most amazing restaurants, rated by locals! Hidden gems & top spots.`,
      image: city.heroImage,
      type: 'website'
    }
  }
}

export function generateRestaurantSEO(restaurant: Restaurant): SEOMetadata {
  const title = `${restaurant.name} - ${restaurant.address.city} | ${restaurant.cuisine.join(', ')} Restaurant`
  const description = `Visit ${restaurant.name} in ${restaurant.address.city}. ${restaurant.description} Rated ${restaurant.rating}/5 stars. Get directions and reviews.`
  
  return {
    title,
    description,
    keywords: [
      ...restaurant.seoKeywords,
      `${restaurant.name} restaurant`,
      `${restaurant.cuisine.join(' ')} ${restaurant.address.city}`,
      `restaurants near me`,
      `${restaurant.address.city} dining`
    ],
    openGraph: {
      title: `${restaurant.name} - ${restaurant.cuisine.join(', ')} in ${restaurant.address.city}`,
      description,
      image: restaurant.images.hero,
      type: 'restaurant'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": restaurant.name,
      "description": restaurant.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": restaurant.address.street,
        "addressLocality": restaurant.address.city,
        "addressCountry": restaurant.address.country,
        "postalCode": restaurant.address.postalCode
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": restaurant.location.lat,
        "longitude": restaurant.location.lng
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": restaurant.rating,
        "reviewCount": restaurant.reviewCount
      },
      "priceRange": restaurant.priceLevel,
      "servesCuisine": restaurant.cuisine,
      "telephone": restaurant.contact.phone,
      "url": restaurant.contact.website,
      "image": restaurant.images.hero
    }
  }
}

export function generateHomepageSEO(): SEOMetadata {
  return {
    title: "🍽️ BEST Restaurants Near Me 2025 | Top Local Spots in 21 Cities",
    description: "🏆 Find amazing restaurants near you! 193+ top-rated spots across 21 cities worldwide. Local favorites, hidden gems & must-visit places. ⭐ Real reviews, real food lovers!",
    keywords: [
      "restaurants near me",
      "best restaurants worldwide",
      "global restaurant guide",
      "where to eat",
      "restaurant finder",
      "dining guide",
      "food discovery",
      "top restaurants",
      "local restaurants",
      "restaurant reviews"
    ],
    openGraph: {
      title: "🍽️ BEST Restaurants Near Me 2025 - 193+ Top Spots!",
      description: "🏆 Amazing restaurants in 21 cities! Local favorites & hidden gems rated by real food lovers.",
      image: "/images/hero-global-cuisine.jpg",
      type: "website"
    }
  }
}

export function generateLocationBasedKeywords(city: string, country: string): string[] {
  return [
    `restaurants in ${city}`,
    `${city} restaurants`,
    `best restaurants ${city}`,
    `where to eat in ${city}`,
    `${city} dining`,
    `restaurants near me ${city}`,
    `${city} food guide`,
    `good restaurants ${city}`,
    `${city} ${country} restaurants`,
    `top rated restaurants ${city}`,
    `${city} restaurant reviews`,
    `dining out ${city}`,
    `${city} food scene`,
    `restaurant finder ${city}`,
    `${city} eateries`
  ]
}