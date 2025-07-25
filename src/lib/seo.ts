import { SEOMetadata, City, Restaurant } from "@/data/types"

export function generateCitySEO(city: City): SEOMetadata {
  const title = `Best Restaurants in ${city.name} | Top 20 Places to Eat Near You`
  const description = `Discover the ${city.name}'s best restaurants. Find top-rated dining spots near you, from fine dining to casual eats. Your guide to where to eat in ${city.name}.`
  
  return {
    title,
    description,
    keywords: [
      `restaurants ${city.name}`,
      `best restaurants ${city.name}`,
      `where to eat ${city.name}`,
      `restaurants near me`,
      `good food ${city.name}`,
      `dining ${city.name}`,
      `${city.name} food guide`,
      `top restaurants ${city.name}`
    ],
    openGraph: {
      title: `${city.name}'s Best Restaurants - Where to Eat Guide`,
      description: `Find the top 20 restaurants in ${city.name}. Discover amazing food near you.`,
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
    title: "Global Gourmet Guide | Find Best Restaurants Near You Worldwide",
    description: "Discover the world's best restaurants in top cities. Find amazing dining spots near you with our curated guide to global cuisine and local favorites.",
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
      title: "Global Gourmet Guide - Discover Amazing Restaurants Worldwide",
      description: "Find the best restaurants in major cities around the world. Your guide to amazing dining experiences.",
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