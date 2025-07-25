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
};

export default nextConfig;
