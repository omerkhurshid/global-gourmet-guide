import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const generateBreadcrumbSchema = () => {
    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://restaurantsnearme.tech"
      }
    ]

    items.forEach((item, index) => {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://restaurantsnearme.tech${item.href}` : undefined
      })
    })

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    }
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link 
              href="/" 
              className="text-gray-500 hover:text-black transition-colors duration-200 flex items-center"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.current ? (
                <span 
                  className="text-black font-medium" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href || "#"} 
                  className="text-gray-500 hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export function generateCityBreadcrumb(cityName: string): BreadcrumbItem[] {
  return [
    { label: cityName, current: true }
  ]
}

export function generateRestaurantBreadcrumb(cityName: string, citySlug: string, restaurantName: string): BreadcrumbItem[] {
  return [
    { label: cityName, href: `/${citySlug}` },
    { label: restaurantName, current: true }
  ]
}

export function generateSpotlightBreadcrumb(cityName: string, citySlug: string, restaurantName: string): BreadcrumbItem[] {
  return [
    { label: "Spotlight", href: "/spotlight" },
    { label: cityName, href: `/${citySlug}` },
    { label: restaurantName, current: true }
  ]
}