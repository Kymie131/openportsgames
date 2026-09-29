import type { Port } from "@/lib/ports/schema";

export const beetleAdventureRacingRecomp: Port = {
  schema: "port",
  id: "beetle-adventure-racing-recomp",
  title: "Beetle Adventure Racing Recompiled",
  game: "Beetle Adventure Racing",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 1999,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.4.2-alpha", date: "2026-09-20" },
  sources: ["https://github.com/danielgomesvieira2000/beetle-adventure-racing-recomp"],
  license: { spdx: "AGPL-3.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "High framerate with high-FPS interpolation and working audio",
    "RecompFrontend launcher with settings, input binding and pause menu",
    "Widescreen with a HUD that expands with the aspect ratio",
    "Selectable divot seam filter",
  ],
  notes:
    "Static recompilation of Beetle Adventure Racing; the player supplies their own legally obtained game. The project describes itself as an alpha with a handful of polish items left.",
};
