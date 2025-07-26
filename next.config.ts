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
