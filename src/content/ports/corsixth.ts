import type { Port } from "@/lib/ports/schema";

export const corsixth: Port = {
  schema: "port",
  id: "corsixth",
  title: "CorsixTH",
  game: "Theme Hospital",
  developers: ["Bullfrog Productions"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.70.1", date: "2026-08-28" },
  sources: ["https://github.com/CorsixTH/CorsixTH"],
  website: "https://corsixth.com/",
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://corsixth.com/media/screenshots/1.jpg",
      alt: "Theme Hospital gameplay rendered by CorsixTH",
      credit: "CorsixTH",
    },
    {
      src: "https://corsixth.com/media/screenshots/2.jpg",
      alt: "A hospital corridor in Theme Hospital running on CorsixTH",
      credit: "CorsixTH",
    },
  ],
  notes:
    "Re-implementation of the Theme Hospital engine that loads the original game data. The free demo and the GOG release of the game are supported.",
};
