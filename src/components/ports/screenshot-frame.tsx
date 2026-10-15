"use client";

import { useState, type ReactNode } from "react";
import type { Port } from "@/lib/ports/schema";
import { cn } from "@/lib/utils";

/**
 * Fixed 16:9 frame for remote images (export is static, so `next/image` runs
 * without the optimizer). The image uses `object-contain`, so a capture that is
 * not 16:9 is letterboxed instead of cropped; a blurred copy of the same image
 * fills the empty area. `referrerPolicy="no-referrer"` keeps us from leaking the
 * page as a hotlinking referer. When the image fails, `fallback` is shown
 * instead of a broken-image icon.
 */
export function ScreenshotFrame({
  src,
  alt,
  pixelated = false,
  className,
  imageClassName,
  eager = false,
  fallback = null,
}: {
  src: string;
  alt: string;
  pixelated?: boolean;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
  fallback?: ReactNode;
}) {
  const [errored, setErrored] = useState(false);
  const loading = eager ? "eager" : "lazy";

  if (errored) {
    return (
      <div
        data-testid="screenshot-frame"
        className={cn("relative overflow-hidden bg-surface-2", className)}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      data-testid="screenshot-frame"
      className={cn("relative overflow-hidden bg-surface-2", className)}
    >
      {/* Blurred backdrop: same URL, so one network response. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding="async"
        fetchPriority="low"
        referrerPolicy="no-referrer"
        onError={() => setErrored(true)}
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-md"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-testid="screenshot-image"
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        referrerPolicy="no-referrer"
        onError={() => setErrored(true)}
        className={cn(
          "relative z-10 h-full w-full object-contain",
          pixelated && "image-pixelated",
          imageClassName,
        )}
      />
    </div>
  );
}

export type Screenshot = NonNullable<Port["screenshots"]>[number];
