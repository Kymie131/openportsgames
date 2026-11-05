import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Base path prefix for `public/` assets (raw `<img>` tags are not rewritten by Next). */
const assetBasePath = (process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "").replace(/\/+$/, "");

/** Prefixes a `public/` asset path with the deployment base path. */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${assetBasePath}${path}`;
}

/**
 * Site-hosted images are stored as absolute production URLs. Rewrite them to
 * the local asset path so previews and `next dev` serve the local copy instead
 * of the live one.
 */
export function imageSrc(src: string): string {
  const origin = "https://openportsgames.com";
  if (src.startsWith(`${origin}/`)) return assetPath(src.slice(origin.length));
  return src;
}
