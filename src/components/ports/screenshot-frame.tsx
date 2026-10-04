import type { Port } from "@/lib/ports/schema";
import { assetPath, cn } from "@/lib/utils";

/**
 * Renders a screenshot without ever cropping it.
 *
 * The frame keeps a fixed 16:9 box so grids stay aligned, but the image itself
 * uses `object-contain`: a 4:3, 1:1 or 10:9 capture is letterboxed instead of
 * being cut top/bottom by `object-cover`. A scaled, blurred copy of the same
 * image fills the letterbox area so the box never looks empty.
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
      {/* Decorative backdrop: the same capture, enlarged and blurred. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolved}
        alt=""
        aria-hidden="true"
        loading={loading}
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-md"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-testid="screenshot-image"
        src={resolved}
        alt={alt}
        loading={loading}
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
