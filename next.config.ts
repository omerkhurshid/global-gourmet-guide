import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds for now
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during builds
    ignoreBuildErrors: true,
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // SEO and Performance optimizations
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ],
  
  // Domain redirects for SEO consistency
  redirects: async () => [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'restaurantsnearme.vercel.app',
        },
      ],
      destination: 'https://restaurantsnearme.tech/:path*',
      permanent: true,
    },
  ],
};

export default nextConfig;
