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
      title: "Christmas Dining Magic in New York: Where Holiday Dreams Come True 2025",
      slug: "christmas-dining-new-york-2025",
      description: "Discover NYC's most enchanting Christmas dining from Rolf's legendary decorations to Michelin-starred holiday feasts.",
      city: "New York",
      publishDate: "December 15, 2025",
      readTime: "15 min read",
      featured: true,
      trending: true
    },
    {
      title: "New Year's Eve in NYC: Where Midnight Dreams Begin at the World's Greatest Tables",
      slug: "new-years-eve-dining-new-york-2025",
      description: "Experience ultimate NYE dining in NYC! From Times Square views to Michelin-starred celebrations welcoming 2026.",
      city: "New York",
      publishDate: "December 20, 2025",
      readTime: "16 min read",
      featured: true,
      trending: true
    },
    {
      title: "Christmas in London: Where Dickensian Dreams Meet Modern Culinary Magic 2025",
      slug: "christmas-dining-london-2025",
      description: "Explore London's enchanting Christmas dining from historic pubs to Michelin-starred feasts with British tradition.",
      city: "London",
      publishDate: "December 12, 2025",
      readTime: "14 min read",
      trending: true
    },
    {
      title: "New Year's Eve in London: Where Thames-Side Toasts Welcome 2025 in Royal Style",
      slug: "new-years-eve-dining-london-2025",
      description: "Experience London's most elegant NYE dining with Thames views, Big Ben midnight, and British sophistication.",
      city: "London",
      publishDate: "December 18, 2025",
      readTime: "15 min read",
      trending: true
    },
    {
      title: "Christmas in Los Angeles: Where Hollywood Magic Meets Holiday Dining Dreams 2025",
      slug: "christmas-dining-los-angeles-2025",
      description: "Discover LA's most glamorous Christmas dining from rooftop restaurants to celebrity chef holiday celebrations.",
      city: "Los Angeles",
      publishDate: "December 14, 2025",
      readTime: "15 min read",
      trending: true
    },
    {
      title: "Christmas in Edinburgh: Where Scottish Tradition Meets Holiday Magic 2025",
      slug: "christmas-dining-edinburgh-2025", 
      description: "Discover Edinburgh's enchanting Christmas dining from historic pubs to fine dining with Highland warmth.",
      city: "Edinburgh",
      publishDate: "December 11, 2025",
      readTime: "14 min read",
      trending: true
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
                  : post.trending
                    ? 'border-orange-400 hover:border-orange-600'
                    : 'border-blue-200 hover:border-blue-500'
              }`}
            >
              <div>
                <h4 className="font-black text-sm text-black group-hover:underline leading-tight mb-2">
                  {post.title.toUpperCase()}
                  {post.featured && (
                    <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">FEATURED</span>
                  )}
                  {post.trending && !post.featured && (
                    <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">TRENDING</span>
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

      {/* Blog Index Link */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <Link 
          href="/blog"
          className="block p-6 hover:from-orange-700 hover:to-red-700 transition-all duration-300 group"
        >
          <h3 className="font-black text-sm mb-2 uppercase tracking-wide group-hover:scale-105 transition-transform">
            <BookOpen className="inline w-4 h-4 mr-2" />
            View All Restaurant Guides
          </h3>
          <p className="text-xs text-orange-100 leading-tight">
            8 comprehensive dining guides • Trending cuisines • City-by-city recommendations
          </p>
        </Link>
      </div>
    </div>
  )
}