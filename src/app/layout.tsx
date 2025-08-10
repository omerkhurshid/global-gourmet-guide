import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Navigation } from "@/components/features/navigation";
import { StructuredData } from "@/components/seo/structured-data";
import { ResourceHints } from "@/components/performance/resource-hints";
import { ServiceWorkerRegistration } from "@/components/performance/service-worker";
import { ConsentBanner, AdSenseScript, GoogleAnalytics, AnalyticsComponent } from "@/components/performance/client-components";
import { generateHomepageSEO } from "@/lib/seo";

// Dynamic imports for SSR-compatible components only
const Footer = dynamic(() => import("@/components/features/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
  display: 'swap',
});

const seoData = generateHomepageSEO();

export const metadata: Metadata = {
  metadataBase: new URL('https://restaurantsnearme.tech'),
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords.join(", "),
  authors: [{ name: "Restaurants Near Me" }],
  creator: "Restaurants Near Me",
  publisher: "Restaurants Near Me",
  alternates: {
    canonical: 'https://restaurantsnearme.tech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    type: "website",
    images: [
      {
        url: 'https://restaurantsnearme.tech/logo.png',
        width: 512,
        height: 512,
        alt: 'Restaurants Near Me Logo',
      }
    ],
    url: 'https://restaurantsnearme.tech',
    siteName: 'Restaurants Near Me',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    images: ['https://restaurantsnearme.tech/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-7652171156655375",
    "msvalidate.01": "5400E5AD854718715E1F73D37E5B307A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ResourceHints />
        <AdSenseScript />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <StructuredData 
          type="website" 
          data={{
            name: "Restaurants Near Me",
            url: "https://restaurantsnearme.tech",
            description: "Find the best restaurants near you in 18 cities worldwide. Discover amazing local dining spots, from fine dining to casual eats.",
            totalRestaurants: 160,
            totalCities: 18,
            totalCountries: 5
          }} 
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        <ServiceWorkerRegistration />
        <AnalyticsComponent />
      </body>
    </html>
  );
}
