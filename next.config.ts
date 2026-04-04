import type { NextConfig } from "next";
import { ORPHAN_HYDERABAD_AREA_SLUGS } from "./src/lib/orphan-hyderabad-area-slugs";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/bengaluru", destination: "/bangalore", permanent: true },
      { source: "/bengaluru/:path*", destination: "/bangalore/:path*", permanent: true },
      ...ORPHAN_HYDERABAD_AREA_SLUGS.map((slug) => ({
        source: `/area/${slug}`,
        destination: "/services",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
