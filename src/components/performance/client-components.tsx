"use client"

import dynamic from "next/dynamic"

// Client-side only components that need ssr: false
export const ConsentBanner = dynamic(() => import("@/components/features/consent-banner").then(mod => ({ default: mod.ConsentBanner })), {
  ssr: false
})

export const AdSenseScript = dynamic(() => import("@/components/features/adsense").then(mod => ({ default: mod.AdSenseScript })), {
  ssr: false
})

export const GoogleAnalytics = dynamic(() => import("@/components/features/analytics").then(mod => ({ default: mod.GoogleAnalytics })), {
  ssr: false
})

export const AnalyticsComponent = dynamic(() => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })), {
  ssr: false
})

export const AdSenseAd = dynamic(() => import("@/components/features/adsense").then(mod => ({ default: mod.AdSenseAd })), {
  ssr: false,
  loading: () => <div className="w-full h-24 bg-gray-100 animate-pulse rounded"></div>
})

export const SearchBar = dynamic(() => import("@/components/features/search-bar").then(mod => ({ default: mod.SearchBar })), {
  ssr: false,
  loading: () => <div className="w-full h-12 bg-gray-100 animate-pulse rounded-lg"></div>
})