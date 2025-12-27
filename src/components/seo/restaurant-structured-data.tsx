import { Restaurant } from "@/data/types"

interface RestaurantStructuredDataProps {
  restaurant: Restaurant
}

export function RestaurantStructuredData({ restaurant }: RestaurantStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "description": restaurant.description,
    "image": restaurant.images.hero,
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
      "reviewCount": restaurant.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Restaurant Guide Team"
      },
      "reviewBody": restaurant.reviewSummary,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": restaurant.rating,
        "bestRating": "5"
      }
    },
    "priceRange": restaurant.priceLevel,
    "servesCuisine": restaurant.cuisine,
    "telephone": restaurant.contact.phone,
    "url": restaurant.contact.website,
    "hasMenu": "https://restaurantsnearme.tech/" + restaurant.address.city.toLowerCase() + "/" + restaurant.name.toLowerCase().replace(/\s+/g, '-'),
    "openingHours": "Mo-Su 12:00-23:00" // Default hours, you can make this dynamic
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What type of cuisine does ${restaurant.name} serve?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${restaurant.name} specializes in ${restaurant.cuisine.join(', ')} cuisine in ${restaurant.address.city}.`
        }
      },
      {
        "@type": "Question", 
        "name": `What is the price range at ${restaurant.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${restaurant.name} has a ${restaurant.priceLevel} price range, offering excellent value for ${restaurant.cuisine.join(' and ')} dining.`
        }
      },
      {
        "@type": "Question",
        "name": `What is ${restaurant.name} rated?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${restaurant.name} has an excellent rating of ${restaurant.rating} out of 5 stars based on ${restaurant.reviewCount} reviews.`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  )
}