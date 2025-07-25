import { MapPin, Star, Users, Globe } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Global Gourmet Guide | Discover the World's Best Restaurants",
  description: "Learn about Global Gourmet Guide's mission to help food lovers discover amazing restaurants worldwide. Find out how we curate the best dining experiences.",
  keywords: "about us, restaurant guide, food discovery, dining recommendations, global cuisine",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Global Gourmet Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're passionate about connecting food lovers with amazing dining experiences 
            around the world. Our mission is simple: help you discover your next great meal.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To curate and showcase the world's best restaurants, making it easy for 
              food enthusiasts to discover exceptional dining experiences wherever they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Coverage
              </h3>
              <p className="text-gray-600">
                Featuring restaurants from major cities across multiple countries and cultures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Curation
              </h3>
              <p className="text-gray-600">
                Every restaurant is carefully selected based on reviews, quality, and dining experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Built for food lovers, by food lovers, with insights from local experts and travelers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                We combine local knowledge with global standards to bring you authentic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Curate
            </h2>
            <p className="text-lg text-gray-600">
              Our restaurant selection process ensures you get only the best recommendations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Research & Discovery
                </h3>
                <p className="text-gray-600">
                  We research restaurants using multiple sources including Google Reviews, TripAdvisor, 
                  local food blogs, and recommendations from culinary experts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Assessment
                </h3>
                <p className="text-gray-600">
                  Each restaurant must meet our criteria: 4.0+ star ratings, substantial review counts, 
                  current operations, and authentic customer feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Diversity & Balance
                </h3>
                <p className="text-gray-600">
                  We ensure our selections represent diverse cuisines, price ranges, and 
                  neighborhoods to cater to all dining preferences and budgets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Regular Updates
                </h3>
                <p className="text-gray-600">
                  Our listings are regularly updated to ensure restaurants are still operating 
                  and maintaining their quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            By the Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-gray-600">Curated Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Major Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.5+</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a restaurant recommendation? Want to suggest a city? 
            We'd love to hear from food lovers like you.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              <strong>Restaurant Suggestions:</strong> Know an amazing restaurant that should be featured? 
              Let us know and we'll consider it for our next update.
            </p>
            <p className="text-gray-600">
              <strong>City Requests:</strong> Want us to cover a specific city? 
              We're always expanding to new destinations based on community interest.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}