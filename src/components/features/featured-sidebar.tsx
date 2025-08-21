import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, BookOpen } from "lucide-react"

interface FeaturedSidebarProps {
  className?: string
}

export function FeaturedSidebar({ className = "" }: FeaturedSidebarProps) {
  // Featured cities with descriptions
  const featuredCities = [
    {
      name: "New York",
      slug: "new-york",
      image: "/images/cities/new-york-hero.jpg",
      description: "The world's culinary playground where every cuisine finds its perfect expression.",
      restaurantCount: 22
    },
    {
      name: "London", 
      slug: "london",
      image: "/images/cities/london-hero.jpg",
      description: "From historic pubs to Michelin stars, London's dining scene reigns supreme.",
      restaurantCount: 10
    },
    {
      name: "Lahore",
      slug: "lahore", 
      image: "/images/cities/lahore-hero.jpg",
      description: "Pakistan's food capital where Mughlai flavors and street food culture thrive.",
      restaurantCount: 16
    }
  ]

  // Featured spotlight restaurants
  const featuredRestaurants = [
    {
      name: "Theodora",
      city: "New York",
      citySlug: "new-york",
      slug: "theodora",
      description: "Brooklyn's Mediterranean marvel serving wood-fired whole fish with smoky coastal flavors.",
      cuisine: "Mediterranean",
      rating: 4.7
    },
    {
      name: "CORE by Clare Smyth",
      city: "London", 
      citySlug: "london",
      slug: "core-by-clare-smyth",
      description: "Three Michelin stars showcase modern British cuisine at its absolute finest.",
      cuisine: "Modern British",
      rating: 4.9
    },
    {
      name: "Amu",
      city: "Lahore",
      citySlug: "lahore",
      slug: "amu", 
      description: "Contemporary Pakistani dining where traditional flavors meet sophisticated presentation.",
      cuisine: "Contemporary Pakistani",
      rating: 4.5
    }
  ]

  // Featured blog posts
  const featuredBlogPosts = [
    {
      title: "Free Food on GCSE Results Day 2025",
      slug: "gcse-free-food",
      description: "Complete UK guide to free meals and treats for GCSE students across London, Oxford, Cambridge & Edinburgh.",
      city: "UK Wide",
      publishDate: "August 19, 2024",
      readTime: "10 min read",
      featured: true
    },
    {
      title: "Summer Dining: Best Outdoor Restaurants in London",
      slug: "london-summer-outdoor-dining",
      description: "Discover London's most spectacular rooftop terraces, hidden gardens, and canal-side dining spots.",
      city: "London",
      publishDate: "August 19, 2024",
      readTime: "8 min read"
    },
    {
      title: "Summer Dining: Best Outdoor Restaurants in New York",
      slug: "nyc-summer-outdoor-dining", 
      description: "From Brooklyn Bridge views to Manhattan rooftops, explore NYC's finest al fresco dining.",
      city: "New York",
      publishDate: "August 19, 2024",
      readTime: "8 min read"
    }
  ]

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Featured Cities Section */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <MapPin className="w-5 h-5 mr-2 text-gray-600" />
          <h3 className="text-lg font-black uppercase tracking-wide text-black">
            Featured Cities
          </h3>
        </div>
        
        <div className="space-y-4">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group block border-l-4 border-gray-200 hover:border-black transition-colors pl-4"
            >
              <div className="flex items-start space-x-3">
                <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={city.image}
                    alt={`${city.name} restaurants`}
                    width={64}
                    height={48}
                    className="object-cover group-hover:scale-105 transition-transform duration-300 w-16 h-12"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-sm text-black group-hover:underline">
                    {city.name.toUpperCase()}
                  </h4>
                  <p className="text-xs text-gray-600 leading-tight mt-1 line-clamp-2">
                    {city.description}
                  </p>
                  <p className="text-xs font-bold text-gray-500 mt-1">
                    {city.restaurantCount} restaurants
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Restaurants Section */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          <h3 className="text-lg font-black uppercase tracking-wide text-black">
            Spotlight Restaurants
          </h3>
        </div>
        
        <div className="space-y-4">
          {featuredRestaurants.map((restaurant) => (
            <Link
              key={`${restaurant.citySlug}-${restaurant.slug}`}
              href={`/${restaurant.citySlug}/${restaurant.slug}`}
              className="group block border-l-4 border-yellow-200 hover:border-yellow-500 transition-colors pl-4"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-black text-sm text-black group-hover:underline">
                    {restaurant.name.toUpperCase()}
                  </h4>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-bold text-gray-600">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  {restaurant.cuisine} • {restaurant.city}
                </p>
                <p className="text-xs text-gray-600 leading-tight line-clamp-2">
                  {restaurant.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Blog Posts Section */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
          <h3 className="text-lg font-black uppercase tracking-wide text-black">
            Latest Guides
          </h3>
        </div>
        
        <div className="space-y-4">
          {featuredBlogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block border-l-4 transition-colors pl-4 ${
                post.featured 
                  ? 'border-purple-400 hover:border-purple-600' 
                  : 'border-blue-200 hover:border-blue-500'
              }`}
            >
              <div>
                <h4 className="font-black text-sm text-black group-hover:underline leading-tight mb-2">
                  {post.title.toUpperCase()}
                  {post.featured && (
                    <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">NEW</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  {post.city} • {post.readTime}
                </p>
                <p className="text-xs text-gray-600 leading-tight line-clamp-2 mb-2">
                  {post.description}
                </p>
                <p className="text-xs text-gray-400">
                  {post.publishDate}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white p-6 text-center">
        <h3 className="font-black text-sm mb-2 uppercase tracking-wide">
          Discover More
        </h3>
        <p className="text-xs text-gray-300 leading-tight">
          Explore 193+ curated restaurants across 21 cities worldwide
        </p>
      </div>
    </div>
  )
}