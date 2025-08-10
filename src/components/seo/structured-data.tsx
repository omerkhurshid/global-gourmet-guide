import Script from 'next/script'

interface StructuredDataProps {
  type: 'website' | 'restaurant' | 'city'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'website':
        return [
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": data.name || "Restaurants Near Me",
            "url": data.url || "https://restaurantsnearme.tech",
            "description": data.description || "Find the best restaurants near you worldwide.",
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
              "url": "https://restaurantsnearme.tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://restaurantsnearme.tech/logo.png",
                "width": 512,
                "height": 512
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Restaurants Near Me",
            "url": "https://restaurantsnearme.tech",
            "description": "Global restaurant discovery platform helping food lovers find amazing dining experiences worldwide.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://restaurantsnearme.tech/logo.png",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://restaurantsnearme.tech"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://restaurantsnearme.tech/contact"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "Global Restaurant Directory",
            "description": `Comprehensive database of ${data.totalRestaurants || 160} restaurants across ${data.totalCities || 18} cities in ${data.totalCountries || 5} countries.`,
            "url": "https://restaurantsnearme.tech",
            "publisher": {
              "@type": "Organization",
              "name": "Restaurants Near Me"
            },
            "distribution": {
              "@type": "DataDownload",
              "encodingFormat": "text/html",
              "contentUrl": "https://restaurantsnearme.tech"
            }
          }
        ]

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

  // Handle both single schema objects and arrays of schemas
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((item, index) => (
          <Script
            key={`structured-data-${type}-${index}`}
            id={`structured-data-${type}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    )
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}