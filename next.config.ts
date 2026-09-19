import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: no server, no API routes, deployable on any static host.
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
