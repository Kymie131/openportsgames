import type { SVGProps } from "react";
import type { PlatformKey } from "@/lib/ports/schema";
import { cn } from "@/lib/utils";
import { platformGlyphs } from "./platform-glyphs";

const fillProps = {
  fill: "currentColor",
  strokeWidth: 0,
} as const;

/** Official Simple Icons platform artwork (CC0 1.0; see platform-glyphs.ts), filled with `currentColor`. */
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
  web: "web",
  ios: "macos",
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
