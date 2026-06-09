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
      { source: "/area/:path*", destination: "/bangalore/:path*", permanent: true },
      { source: "/services", destination: "/bangalore/services", permanent: true },
      { source: "/services/:path*", destination: "/bangalore/services/:path*", permanent: true },
      { source: "/projects", destination: "/bangalore/projects", permanent: true },
      { source: "/projects/:path*", destination: "/bangalore/projects/:path*", permanent: true },
      { source: "/portfolio/:path*", destination: "/bangalore/portfolio/:path*", permanent: true },
      { source: "/project-type/:path*", destination: "/bangalore/project-type/:path*", permanent: true },
      { source: "/interior-design-cost", destination: "/bangalore/interior-design-cost", permanent: true },
    ];
  },
};

export default nextConfig;
