import Script from 'next/script'

interface LocalBusinessSchemaProps {
  cities: Array<{
    name: string
    country: string
    totalRestaurants: number
  }>
}

export function LocalBusinessSchema({ cities }: LocalBusinessSchemaProps) {
  const generateLocalBusinessSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Restaurants Near Me",
      "description": "Global restaurant discovery platform helping food lovers find amazing dining experiences in major cities worldwide.",
      "url": "https://restaurantsnearme.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://restaurantsnearme.tech/logo.png",
        "width": 512,
        "height": 512
      },
      "image": [
        "https://restaurantsnearme.tech/logo.png"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Multiple Countries",
        "addressLocality": "Global"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://restaurantsnearme.tech/contact",
        "availableLanguage": "English"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "Free",
      "serviceType": "Restaurant Directory and Discovery Service",
      "areaServed": cities.map(city => ({
        "@type": "City",
        "name": city.name,
        "addressCountry": city.country
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Restaurant Listings",
        "itemListElement": cities.map((city, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Restaurant Recommendations in ${city.name}`,
            "description": `Discover ${city.totalRestaurants} curated restaurants in ${city.name}, ${city.country}`
          },
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": `https://restaurantsnearme.tech/${city.name.toLowerCase().replace(/\s+/g, '-')}`
        }))
      },
      "knows": [
        {
          "@type": "Organization",
          "@id": "https://schema.org/Restaurant"
        },
        {
          "@type": "Organization", 
          "@id": "https://schema.org/FoodEstablishment"
        }
      ],
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://restaurantsnearme.tech/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "ViewAction",
          "target": "https://restaurantsnearme.tech",
          "name": "Browse Restaurants"
        }
      ]
    }
  }

  const schema = generateLocalBusinessSchema()

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}