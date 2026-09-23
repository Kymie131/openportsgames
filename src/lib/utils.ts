import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Subfolder prefix for `public/` assets (e.g. `/openportsgames` on GitHub
 * Pages). Inlined by Next at build time. Raw `<img>` tags are NOT rewritten
 * by `basePath`, so URLs pointing into `public/` must be prefixed manually.
 */
const assetBasePath = (process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "").replace(/\/+$/, "");

/** Prefixes a `public/` asset path with the deployment base path. */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${assetBasePath}${path}`;
}
