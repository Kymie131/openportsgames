import type { Port } from "@/lib/ports/schema";
import { assetPath, cn } from "@/lib/utils";

/**
 * Fixed 16:9 frame for screenshots. The image uses `object-contain`, so a
 * capture that is not 16:9 is letterboxed instead of cropped; a blurred copy of
 * the same image fills the empty area.
 */
export function ScreenshotFrame({
  src,
  alt,
  pixelated = false,
  className,
  imageClassName,
  eager = false,
}: {
  src: string;
  alt: string;
  pixelated?: boolean;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
}) {
  const resolved = assetPath(src);
  const loading = eager ? "eager" : "lazy";
  return (
    <div
      data-testid="screenshot-frame"
      className={cn("relative overflow-hidden bg-surface-2", className)}
    >
      {/* Blurred backdrop: same URL, so one network response. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolved}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding="async"
        fetchPriority="low"
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-md"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-testid="screenshot-image"
        src={resolved}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
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
