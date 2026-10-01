import type { Port } from "@/lib/ports/schema";

export const crispyDoom: Port = {
  schema: "port",
  id: "crispy-doom",
  title: "Crispy Doom",
  game: "Doom",
  developers: ["Fabian Greffrath"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "7.1", date: "2025-09-23" },
  sources: ["https://github.com/fabiangreffrath/crispy-doom"],
  website: "https://fabiangreffrath.github.io/crispy-homepage",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Hi-res sprites and textures replacing the Doom 1 art",
    "Optional sound effects pack",
    "Gamepad support with analog movement and aiming",
  ],
  notes:
    "Modern source port that keeps the vanilla Doom 1 experience while adding optional enhancements.",
  screenshots: [
    {
      src: "https://github.com/fabiangreffrath/crispy-doom/blob/master/data/doom.png",
      alt: "Crispy Doom Icon",
      credit: "fabiangreffrath",
    },
    {
      src: "https://github.com/fabiangreffrath/crispy-doom/actions/workflows/main.yml/badge.svg",
      alt: "Build Status",
      credit: "fabiangreffrath",
    },
    {
      src: "https://www.openhub.net/p/crispy-doom/widgets/project_thin_badge?style=flat&format=gif",
      alt: "Open Hub",
      credit: "fabiangreffrath",
    },
  ],
};
