import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/features/navigation";
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
  openGraph: {
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    type: "website",
    images: [seoData.openGraph.image],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    images: [seoData.openGraph.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
