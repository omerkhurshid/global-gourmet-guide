import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog - Restaurant Guides & Dining Tips | Restaurants Near You",
  description: "Discover the latest restaurant guides, dining tips, and food trends from cities around the world. Expert reviews and culinary insights.",
}

const blogPosts = [
  {
    title: "Korean Food Revolution: Best Korean Restaurants in NYC 2025",
    slug: "korean-food-revolution-nyc",
    description: "Discover NYC's Korean food revolution! From authentic BBQ in K-Town to modern Korean fusion in Brooklyn, explore the restaurants driving the #1 trending cuisine of 2025.",
    city: "New York City",
    publishDate: "August 20, 2024",
    readTime: "12 min read",
    excerpt: "Korean cuisine officially takes over NYC as the #1 trending international cuisine, from Koreatown classics to Brooklyn fusion innovations.",
    featured: true,
    trending: true
  },
  {
    title: "Pakistani-Korean Fusion: Where East Truly Meets East in Lahore",
    slug: "pakistani-korean-fusion-lahore",
    description: "Experience the revolutionary Pakistani-Korean fusion taking Lahore by storm. Discover restaurants blending Korean techniques with Pakistani flavors, creating unique dishes like kimchi karahi and bulgogi biryani.",
    city: "Lahore, Pakistan", 
    publishDate: "August 20, 2024",
    readTime: "10 min read",
    excerpt: "Lahore pioneers unique East-meets-East fusion with kimchi karahi, bulgogi seekh kebabs, and Korean-Pakistani BBQ innovations.",
    trending: true
  },
  {
    title: "Sustainable Seafood Guide: Ocean-to-Table Dining in Karachi",
    slug: "sustainable-seafood-karachi",
    description: "Discover Karachi's sustainable seafood revolution! From Arabian Sea-to-table restaurants to eco-conscious fishing practices, explore how Pakistan's coastal capital is leading sustainable dining.",
    city: "Karachi, Pakistan",
    publishDate: "August 20, 2024",
    readTime: "11 min read", 
    excerpt: "Karachi leads Pakistan's sustainable dining movement with ocean-to-table restaurants supporting local fishermen and Arabian Sea conservation.",
    trending: true
  },
  {
    title: "The Sake Revolution: Best Japanese Rice Wine Bars in Major US Cities",
    slug: "sake-revolution-usa",
    description: "Discover America's sake revolution! From premium Japanese rice wine bars in NYC to artisanal sake breweries in LA, explore the trending beverage growing 4.8% annually across major US cities.",
    city: "USA Multi-City",
    publishDate: "August 20, 2024",
    readTime: "13 min read",
    excerpt: "American sake culture explodes with 4.8% annual growth, from traditional Tokyo-style bars in NYC to innovative sake breweries in LA.",
    trending: true
  },
  {
    title: "Filipino Food Boom: Hidden Gems Across America's Food Cities",
    slug: "filipino-food-boom-usa", 
    description: "Discover the Filipino food revolution sweeping America! From traditional turo-turo in LA to modern Filipino fine dining in NYC, explore the #2 trending Southeast Asian cuisine making waves across major US cities.",
    city: "USA Multi-City",
    publishDate: "August 20, 2024",
    readTime: "12 min read",
    excerpt: "Filipino cuisine emerges as America's #2 trending Southeast Asian cuisine with authentic comfort food and innovative fine dining across major cities.",
    trending: true
  },
  {
    title: "Free Food on GCSE Results Day 2025: Your Complete UK Guide",
    slug: "gcse-free-food",
    description: "Celebrate your GCSE results with free food! Discover where students can claim complimentary meals, desserts, and drinks across London, Oxford, Cambridge, and Edinburgh.",
    city: "UK Wide",
    publishDate: "August 19, 2024",
    readTime: "10 min read",
    excerpt: "From free burgers at Byron to complimentary churros at Las Iguanas, here's your city-by-city guide to scoring free food on GCSE results day."
  },
  {
    title: "Summer Dining: Best Outdoor Restaurants and Terraces in London",
    slug: "london-summer-outdoor-dining",
    description: "Discover London's most spectacular rooftop terraces, hidden gardens, and canal-side dining spots perfect for summer dining.",
    city: "London",
    publishDate: "August 19, 2024",
    readTime: "8 min read",
    excerpt: "From Sky Garden's breathtaking views to Towpath's canal-side charm, explore the capital's finest al fresco dining experiences."
  },
  {
    title: "Summer Dining: Best Outdoor Restaurants and Terraces in New York City",
    slug: "nyc-summer-outdoor-dining", 
    description: "From Brooklyn Bridge views to Manhattan rooftops, explore NYC's finest al fresco dining destinations.",
    city: "New York",
    publishDate: "August 19, 2024",
    readTime: "8 min read",
    excerpt: "Experience the Big Apple's outdoor dining scene with rooftop gardens, waterfront terraces, and hidden courtyards."
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
              RESTAURANT GUIDES & INSIGHTS
            </h1>
            <div className="w-20 h-px mx-auto mb-6 bg-black"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert dining guides, restaurant reviews, and culinary insights from cities around the world
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className={`bg-white border-2 p-8 hover:shadow-lg transition-shadow duration-300 relative ${
                  post.featured 
                    ? 'border-purple-400' 
                    : post.trending 
                      ? 'border-orange-400' 
                      : 'border-gray-200'
                }`}
              >
                {post.featured && (
                  <div className="absolute -top-3 left-8 bg-purple-600 text-white px-4 py-1 text-xs font-bold uppercase">
                    Featured Guide
                  </div>
                )}
                {post.trending && !post.featured && (
                  <div className="absolute -top-3 left-8 bg-orange-600 text-white px-4 py-1 text-xs font-bold uppercase">
                    Trending Now
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-semibold">{post.city}</span>
                  <span className="mx-2">•</span>
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-black mb-4 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {post.description}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-bold text-black hover:underline group"
                >
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            EXPLORE MORE RESTAURANTS
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover 193+ curated restaurants across 21 cities worldwide
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Browse All Cities
          </Link>
        </div>
      </section>
    </div>
  )
}