import type { Port } from "@/lib/ports/schema";

export const fZeroSnesRecompiled: Port = {
  schema: "port",
  id: "f-zero-snes-recompiled",
  title: "F-Zero SNES Recompiled",
  game: "F-Zero",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.8.3", date: "2026-09-22" },
  sources: ["https://github.com/mstan/FZeroSNESRecomp"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Super Nintendo",
  features: [
    "Widescreen up to 32:9 with optional HD Mode 7 rendering",
    "60-360 FPS high refresh rate presentation",
    "Save states with thumbnails and rewind",
    "CRT/LCD shaders and MSU-1 music packs",
  ],
  notes:
    "Native recompilation of the Super Nintendo classic F-Zero. Requires the player's own legally dumped F-Zero ROM; the port also supports optional BS F-Zero Deluxe content and MSU-1 music expansions.",
};