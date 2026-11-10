import { assetPath, cn } from "@/lib/utils";

/**
 * Console mark for /emulators: official logo when available, otherwise a
 * typographic monogram chip.
 */
export function ConsoleMark({
  abbreviation,
  color,
  logo,
  size = "md",
  className,
}: {
  abbreviation: string;
  color: string;
  logo?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = size === "lg" ? "size-16" : size === "md" ? "size-12" : "size-8";
  // Wordmark logos need a wider frame than square monograms.
  const logoBox = size === "lg" ? "h-16 w-20" : size === "md" ? "h-12 w-16" : "h-8 w-10";
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={assetPath(`/logos/console/${logo}.png`)}
        alt=""
        aria-hidden="true"
        decoding="async"
        className={cn(
          logoBox,
          "shrink-0 rounded-md bg-white object-contain p-1 ring-1 ring-border",
          className,
        )}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: color }}
      className={cn(
        box,
        "inline-flex items-center justify-center rounded-md font-mono font-bold tracking-tight text-white shadow-xs",
        size === "lg" ? "text-base" : size === "md" ? "text-xs" : "text-[10px]",
        className,
      )}
    >
      {abbreviation}
    </span>
  );
}
