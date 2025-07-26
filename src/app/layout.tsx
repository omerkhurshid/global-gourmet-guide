import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/features/navigation";
import { AdSenseScript } from "@/components/features/adsense";
import { GoogleAnalytics } from "@/components/features/analytics";
import { Analytics } from '@vercel/analytics/react';
import { generateHomepageSEO } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const seoData = generateHomepageSEO();

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords.join(", "),
  authors: [{ name: "Global Gourmet Guide" }],
  creator: "Global Gourmet Guide",
  publisher: "Global Gourmet Guide",
  alternates: {
    canonical: 'https://restaurantsnearme.vercel.app',
  },
  openGraph: {
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    type: "website",
    images: [seoData.openGraph.image],
    url: 'https://restaurantsnearme.vercel.app',
    siteName: 'Global Gourmet Guide',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    images: [seoData.openGraph.image],
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
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
