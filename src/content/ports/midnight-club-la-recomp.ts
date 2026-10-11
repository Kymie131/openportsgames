import type { Port } from "@/lib/ports/schema";

export const midnightClubLaRecomp: Port = {
  schema: "port",
  id: "midnight-club-la-recomp",
  title: "Midnight Club: Los Angeles Recompiled",
  game: "Midnight Club: Los Angeles",
  developers: ["holdmysocks"],
  publisher: "Rockstar Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/holdmysocks/mcla-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Midnight Club: Los Angeles (Xbox 360) for PC and PS5. No game data included.",
  notesEs:
    "Recompilación estática de Midnight Club: Los Angeles (Xbox 360) para PC y PS5. No incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ea/Midnight_Club-Los_Angeles.jpg",
    alt: "Midnight Club: Los Angeles (box art)",
    credit: "Wikipedia",
  },
};
