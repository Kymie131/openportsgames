import type { Port } from "@/lib/ports/schema";

export const metroidPrimeHuntersRecompiled: Port = {
  schema: "port",
  id: "metroid-prime-hunters-recompiled",
  title: "Metroid Prime Hunters Recompiled",
  game: "Metroid Prime Hunters",
  developers: ["Nintendo Software Technology"],
  publisher: "Nintendo",
  originalYear: 2006,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.7.3-alpha", date: "2026-09-10" },
  sources: ["https://github.com/mstan/MetroidPrimeHuntersRecomp"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo DS",
  features: [
    "Windows and Linux (Steam Deck-ready AppImage) builds",
    "Dynamic widescreen plus 5:3, 2:1 and 21:9 modes",
    "Mouse/keyboard and remappable gamepad controls",
    "Experimental Wiimmfi online play",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/mstan/MetroidPrimeHuntersRecomp/main/docs/media/prime-hunters-video-preview.jpg",
      alt: "Metroid Prime Hunters gameplay frame from the project preview",
      credit: "Metroid Prime Hunters Recompiled",
    },
  ],
  notes:
    "Native recompilation of the Nintendo DS first-person shooter Metroid Prime Hunters, labeled by its author as a public alpha. Requires the player's own legally obtained copy of the game.",
};
