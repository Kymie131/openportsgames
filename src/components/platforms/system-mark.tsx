import { cn } from "@/lib/utils";
import { consoleGlyphs } from "./console-glyphs";

const fillProps = {
  fill: "currentColor",
  strokeWidth: 0,
} as const;

/**
 * Original-system badge for tiles and detail pages. Systems with a Simple Icons
 * artwork render as a glyph in `currentColor`; the rest fall back to a short
 * text label. No invented logos.
 */
export function SystemMark({
  system,
  className,
  glyphClassName,
  labelClassName,
}: {
  system: string;
  className?: string;
  glyphClassName?: string;
  labelClassName?: string;
}) {
  const glyph = systemToGlyph[system];

  if (glyph !== undefined) {
    const { paths } = consoleGlyphs[glyph];
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        focusable="false"
        className={cn("size-4", glyphClassName, className)}
        {...fillProps}
      >
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn("text-xs font-medium leading-none", labelClassName, className)}
    >
      {systemToLabel[system] ?? system}
    </span>
  );
}

export function systemGlyph(system: string): { glyph: keyof typeof consoleGlyphs } | null {
  const glyph = systemToGlyph[system];
  return glyph === undefined ? null : { glyph };
}

/** Exact originalSystem -> Simple Icons glyph name. */
const systemToGlyph: Record<string, keyof typeof consoleGlyphs> = {
  PlayStation: "playstation",
  "PlayStation 2": "playstation2",
  "PlayStation 3": "playstation3",
  "PlayStation 4": "playstation4",
  "PlayStation 5": "playstation5",
  "Sega Saturn": "saturn",
  "Sega Mega Drive / Genesis": "sega",
  "Atari 2600": "atari",
  Atari: "atari",
  "Commodore 64": "commodore",
  Commodore: "commodore",
};

/** Short text labels for systems without a Simple Icons artwork. */
const systemToLabel: Record<string, string> = {
  "Nintendo 64": "N64",
  "Super Nintendo": "SNES",
  "Nintendo Entertainment System": "NES",
  "Nintendo GameCube": "GameCube",
  GameCube: "GameCube",
  "Game Boy": "Game Boy",
  "Game Boy Advance": "GBA",
  "Nintendo DS": "NDS",
  "Nintendo 3DS": "3DS",
  Wii: "Wii",
  "Xbox 360": "X360",
  "MS-DOS": "DOS",
  "Microsoft Windows": "Win",
  Macintosh: "Mac",
  "PlayStation / Sega Saturn": "PS1 · Saturn",
  "MS-DOS / Amiga": "DOS · Amiga",
  "Microsoft Windows / MS-DOS": "Win · DOS",
};
