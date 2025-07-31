import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { ConsentBanner } from "@/components/features/consent-banner";
import { AdSenseScript } from "@/components/features/adsense";
import { GoogleAnalytics } from "@/components/features/analytics";
import { Analytics } from '@vercel/analytics/react';
import { StructuredData } from "@/components/seo/structured-data";
import { generateHomepageSEO } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <AdSenseScript />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <StructuredData 
          type="website" 
          data={{}} 
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
