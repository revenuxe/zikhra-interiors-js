import type { NextConfig } from "next";

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
      { source: "/area/chandanagar", destination: "/area/chanda-nagar", permanent: true },
    ];
  },
};

export default nextConfig;
