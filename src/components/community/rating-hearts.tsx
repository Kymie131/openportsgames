"use client";

import { cn } from "@/lib/utils";

export const MAX_HEARTS = 5;

/** A 7x6 pixel heart drawn with sharp rectangles so it stays crisp when scaled. */
export function PixelHeart({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 7 6"
      shapeRendering="crispEdges"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <g fill={filled ? "currentColor" : "var(--border)"}>
        <rect x="1" y="0" width="2" height="1" />
        <rect x="4" y="0" width="2" height="1" />
        <rect x="0" y="1" width="7" height="2" />
        <rect x="1" y="3" width="5" height="1" />
        <rect x="2" y="4" width="3" height="1" />
        <rect x="3" y="5" width="1" height="1" />
      </g>
    </svg>
  );
}

export function Hearts({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: MAX_HEARTS }, (_, index) => (
        <PixelHeart
          key={index}
          filled={index < Math.round(value)}
          className={cn("size-4", index < Math.round(value) ? "text-rose-500" : "text-border")}
        />
      ))}
    </span>
  );
}

/** Formats an average as `4/5` or `4.3/5`. */
export function ratingLabel(average: number): string {
  return Number.isInteger(average) ? `${average}/5` : `${average.toFixed(1)}/5`;
}
