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

const platformMarks: Partial<Record<PlatformKey, keyof typeof platformGlyphs>> = {
  windows: "windows",
  linux: "linux",
  macos: "macos",
  android: "android",
  web: "web",
  ios: "macos",
};

/** Short text mark for platforms without official Simple Icons artwork. */
const platformAbbr: Partial<Record<PlatformKey, string>> = {
  switch: "NS",
  psp: "PSP",
  psvita: "PSV",
  ds: "DS",
  "3ds": "3DS",
  wii: "Wii",
  wiiu: "WiiU",
  ps2: "PS2",
  ps3: "PS3",
  ps4: "PS4",
};

export function PlatformMark({
  platform,
  className,
}: {
  platform: PlatformKey;
  className?: string;
}) {
  const glyph = platformMarks[platform];
  if (glyph === undefined) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-4 min-w-4 items-center justify-center px-px text-[8px] font-semibold leading-none",
          className,
        )}
      >
        {platformAbbr[platform] ?? ""}
      </span>
    );
  }
  return <GlyphMark glyph={glyph} className={cn("size-4", className)} />;
}
