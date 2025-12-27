import { Restaurant } from "@/data/types"

interface CityStructuredDataProps {
  city: string
  restaurants: Restaurant[]
}

export function CityStructuredData({ city, restaurants }: CityStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Best Restaurants in ${city}`,
    "description": `Top-rated restaurants in ${city} with reviews, ratings, and cuisine information`,
    "numberOfItems": restaurants.length,
    "itemListElement": restaurants.slice(0, 10).map((restaurant, index) => ({
      "@type": "Restaurant",
      "position": index + 1,
      "name": restaurant.name,
      "description": restaurant.reviewSummary,
      "servesCuisine": restaurant.cuisine,
      "priceRange": restaurant.priceLevel,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": restaurant.rating,
        "reviewCount": restaurant.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      },
      "address": {
        "@type": "PostalAddress", 
        "addressLocality": restaurant.address.city,
        "addressCountry": restaurant.address.country
      },
      "url": `https://restaurantsnearme.tech/${city.toLowerCase()}/${restaurant.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
    }))
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage", 
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What are the best restaurants in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The top restaurants in ${city} include ${restaurants.slice(0, 5).map(r => r.name).join(', ')}. These offer diverse cuisines with ratings from ${Math.min(...restaurants.map(r => r.rating))} to ${Math.max(...restaurants.map(r => r.rating))} stars.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of cuisine are available in ${city}?`, 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${city} offers diverse dining options including ${[...new Set(restaurants.flatMap(r => r.cuisine))].slice(0, 8).join(', ')} and many more international cuisines.`
        }
      },
      {
        "@type": "Question",
        "name": `What price ranges are available for restaurants in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Restaurants in ${city} range from budget-friendly $ options to luxury $$$$ establishments, with something for every budget and occasion.`
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}