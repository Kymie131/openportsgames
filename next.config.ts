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
  experimental: {
    globalNotFound: true,
    // The catalog prerenders thousands of pages; a handful of workers keeps the
    // export inside the memory budget of typical CI builders and developer
    // machines (11 workers on a 16 GB box gets OOM-killed).
    cpus: 4,
    memoryBasedWorkersCount: true,
    // The export writes tens of thousands of files; keeping a persistent
    // Turbopack cache on disk doubles the footprint and often exhausts the
    // space budget on developer machines.
    turbopackFileSystemCacheForBuild: false,
  },
  ...(basePath && basePath.startsWith("/") ? { basePath } : {}),
};

export default nextConfig;
