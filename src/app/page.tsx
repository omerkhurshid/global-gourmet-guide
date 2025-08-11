import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Utensils } from "lucide-react"
import { cities } from "@/data/cities"
import { generateCitySlug } from "@/lib/utils"
import { AdSenseAd, SearchBar } from "@/components/performance/client-components"
import { LocalBusinessSchema } from "@/components/seo/local-business-schema"
import { FAQSchema } from "@/components/seo/faq-schema"
import { FeaturedSidebar } from "@/components/features/featured-sidebar"
import dynamic from "next/dynamic"
import styles from "./HomePage.module.css"

const FAQSection = dynamic(() => import("@/components/features/faq-section").then(mod => ({ default: mod.FAQSection })), {
  ssr: true
})

const CityGrid = dynamic(() => import("@/components/features/city-grid").then(mod => ({ default: mod.CityGrid })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded"></div>
})

// Updated: Force deployment with terracotta color scheme
export default function Home() {
  // Organize cities by country
  const citiesByCountry = {
    "United States": cities.filter(city => city.country === "United States"),
    "United Kingdom": cities.filter(city => city.country === "United Kingdom"),
    "France": cities.filter(city => city.country === "France"),
    "Pakistan": cities.filter(city => city.country === "Pakistan"),
    "India": cities.filter(city => city.country === "India"),
  }

  return (
    <div className={`min-h-screen ${styles.container}`}>
      {/* SEO Schema */}
      <LocalBusinessSchema cities={cities} />
      <FAQSchema type="homepage" />
      
      {/* Clean divider line */}
      <div className={styles.dividerLine}></div>

      {/* Hero Content Section */}
      <section className={`py-20 ${styles.backgroundMain}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-12">
            <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tighter mb-4 px-2 ${styles.heroTitle}`}>
              RESTAURANTS
            </h1>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 tracking-tighter px-2 ${styles.heroSubtitle}`}>
              NEAR YOU
            </h2>
            <p className={`text-sm sm:text-base text-black max-w-2xl mx-auto mb-16 leading-relaxed tracking-wide px-4 ${styles.heroDescription}`}>
              Find the best restaurants near you with expert reviews and recommendations from 160+ top dining spots across 18 cities worldwide. Discover amazing local restaurants, from fine dining to hidden gems.
            </p>
          </div>
          
          {/* Search functionality */}
          <div className="max-w-xl mx-auto mb-14">
            <SearchBar 
              placeholder="Search cities or countries..."
              className="w-full"
            />
          </div>
          
          {/* Enhanced Stats with Location Context */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center mb-16">
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">193</div>
              <div className={`text-xs text-black uppercase ${styles.statsNumber}`}>RESTAURANTS</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">21</div>
              <div className={`text-xs text-black uppercase ${styles.statsNumber}`}>CITIES</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">5</div>
              <div className={`text-xs text-black uppercase ${styles.statsNumber}`}>COUNTRIES</div>
            </div>
          </div>

          {/* Location-Specific Value Proposition */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className={`text-xl md:text-2xl font-bold text-black mb-6 ${styles.valuePropositionTitle}`}>
              FIND AMAZING RESTAURANTS NEAR YOU
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="bg-white p-6 border border-gray-200">
                <h4 className={`font-black text-black mb-3 uppercase ${styles.valuePropositionHeading}`}>LOCAL FAVORITES</h4>
                <p>Discover hidden gems and local hotspots recommended by food enthusiasts in your city.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200">
                <h4 className={`font-black text-black mb-3 uppercase ${styles.valuePropositionHeading}`}>DIVERSE CUISINES</h4>
                <p>From street food to fine dining, explore authentic flavors from around the world.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200">
                <h4 className={`font-black text-black mb-3 uppercase ${styles.valuePropositionHeading}`}>CURATED SELECTION</h4>
                <p>Every restaurant is carefully vetted for quality, atmosphere, and exceptional dining experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after Hero */}
      <section className={`py-2 sm:py-4 ${styles.backgroundLight}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 sm:mb-4">
            <span className={`text-xs text-gray-400 ${styles.adLabel}`}>ADVERTISEMENT</span>
          </div>
          <AdSenseAd 
            adSlot="4780708832" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className={`py-24 ${styles.backgroundMain}`}>
        <div className={styles.mainContent}>
          {/* Main Content Area */}
          <div className={styles.contentArea}>
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-black text-black mb-4 ${styles.sectionTitleReduced}`}>
                EXPLORE CITIES
              </h2>
              <div className="w-20 h-px mx-auto mb-4 bg-black"></div>
              <p className={`text-sm max-w-xl mx-auto ${styles.sectionDescription}`}>
                TOP CULINARY DESTINATIONS WORLDWIDE
              </p>
            </div>
            
            <CityGrid citiesByCountry={citiesByCountry} />
          </div>

          {/* Featured Sidebar */}
          <div className={styles.sidebar}>
            <div className="mb-8">
              <h2 className={`font-black text-center mb-4 ${styles.featuredSectionTitle}`}>
                FEATURED DESTINATIONS
              </h2>
              <div className="w-16 h-px mx-auto bg-gray-400"></div>
              <p className="text-xs text-gray-500 text-center mt-3 uppercase tracking-wide">
                Curated picks & spotlights
              </p>
            </div>
            <FeaturedSidebar />
          </div>
        </div>
      </section>

      {/* Advertisement - Mid Content */}
      <section className={`py-8 sm:py-12 ${styles.backgroundLight}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className={`text-xs text-gray-400 ${styles.adLabel}`}>ADVERTISEMENT</span>
          </div>
          <AdSenseAd 
            adSlot="2819377018" 
            adFormat="auto"
            fullWidthResponsive={true}
            className="mx-auto max-w-2xl"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className={`py-32 text-black ${styles.backgroundMain}`}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className={`text-5xl md:text-7xl font-black mb-8 leading-none ${styles.ctaTitle}`}>
            DISCOVER<br />
            AMAZING FOOD
          </h2>
          <p className={`text-sm max-w-xl mx-auto leading-relaxed ${styles.ctaDescription}`}>
            FROM FINE DINING TO STREET FOOD<br />
            EXPLORE THE BEST RESTAURANTS WORLDWIDE
          </p>
        </div>
      </section>
    </div>
  )
}