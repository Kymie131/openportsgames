import type { NextConfig } from "next";

/**
 * Fully static export: no server, no API routes, deployable on any static
 * host. NEXT_PUBLIC_BASE_PATH supports subfolder deployments (GitHub Pages);
 * everything else is wired for a domain root (Cloudflare Pages, Vercel).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath && basePath.startsWith("/") ? { basePath } : {}),
};

export default nextConfig;