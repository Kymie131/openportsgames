import type { SVGProps } from "react";
import type { PlatformKey } from "@/lib/ports/schema";
import { cn } from "@/lib/utils";
import { platformGlyphs } from "./platform-glyphs";

const fillProps = {
  fill: "currentColor",
  strokeWidth: 0,
} as const;

/**
 * Renders the official Simple Icons artwork for a platform (see
 * platform-glyphs.ts for the CC0 / trademark attribution).
 *
 * The logo is filled with `currentColor` so it inherits the surrounding text
 * color; there is no platform brand color, no gradient and no hand-drawn
 * approximation.
 */
function GlyphMark({
  glyph,
  ...props
}: { glyph: keyof typeof platformGlyphs } & SVGProps<SVGSVGElement>) {
  const { paths } = platformGlyphs[glyph];
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      {...fillProps}
      {...props}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const platformMarks = {
  windows: "windows",
  linux: "linux",
  macos: "macos",
  android: "android",
} satisfies Record<PlatformKey, keyof typeof platformGlyphs>;

export function PlatformMark({
  platform,
  className,
}: {
  platform: PlatformKey;
  className?: string;
}) {
  const glyph = platformMarks[platform];
  return <GlyphMark glyph={glyph} className={cn("size-4", className)} />;
}
