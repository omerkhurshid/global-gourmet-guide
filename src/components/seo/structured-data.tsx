import Script from 'next/script'

interface StructuredDataProps {
  type: 'website' | 'restaurant' | 'city'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Restaurants Near Me",
          "url": "https://restaurantsnearme.tech",
          "description": "Discover the best restaurants in top cities worldwide. Curated dining experiences from fine dining to local gems.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://restaurantsnearme.tech/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Restaurants Near Me",
            "url": "https://restaurantsnearme.tech"
          }
        }

      case 'restaurant':
        return {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": data.name,
          "description": data.description,
          "url": `https://restaurantsnearme.tech/${data.citySlug}`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address.street,
            "addressLocality": data.address.city,
            "addressCountry": data.address.country,
            "postalCode": data.address.postalCode
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data.location.lat,
            "longitude": data.location.lng
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data.rating,
            "reviewCount": data.reviewCount,
            "bestRating": 5,
            "worstRating": 1
          },
          "priceRange": data.priceLevel,
          "servesCuisine": data.cuisine,
          "telephone": data.contact.phone,
          "openingHours": "Mo-Su 11:00-23:00"
        }

      case 'city':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `Best Restaurants in ${data.cityName}`,
          "description": `Curated list of top-rated restaurants in ${data.cityName}`,
          "url": `https://restaurantsnearme.tech/${data.citySlug}`,
          "numberOfItems": data.restaurantCount,
          "itemListElement": data.restaurants.map((restaurant: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Restaurant",
              "name": restaurant.name,
              "url": `https://restaurantsnearme.tech/${data.citySlug}`,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": restaurant.rating,
                "reviewCount": restaurant.reviewCount
              }
            }
          }))
        }

      default:
        return {}
    }
  }

  const schema = generateSchema()

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}