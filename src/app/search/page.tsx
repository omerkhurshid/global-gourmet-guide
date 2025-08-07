import { Metadata } from "next"
import { SearchResults } from "@/components/features/search-results"

export const metadata: Metadata = {
  title: "Search Restaurants | Find Restaurants Near Me Worldwide",
  description: "Search for restaurants by city, cuisine, or name. Find the best dining spots in major cities around the world.",
  keywords: "restaurant search, find restaurants, search by cuisine, restaurant finder",
  alternates: {
    canonical: 'https://restaurantsnearme.tech/search',
  },
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; city?: string; cuisine?: string }
}) {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f9f7f6'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8" style={{color: '#8b6355'}}>
          Restaurant Search Results
        </h1>
        <SearchResults searchParams={searchParams} />
      </div>
    </div>
  )
}