import type { Port } from "@/lib/ports/schema";

export const midnightClubLaRecomp: Port = {
  schema: "port",
  id: "midnight-club-la-recomp",
  title: "Midnight Club: Los Angeles Recompiled",
  game: "Midnight Club: Los Angeles",
  developers: ["3bdull4h2008"],
  publisher: "Rockstar Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/3bdull4h2008/mcla-recompilation"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Midnight Club: Los Angeles (Xbox 360) for Windows. It needs the game itself.",
  notesEs:
    "Recompilación de Midnight Club: Los Angeles (Xbox 360) para Windows. Necesita el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ea/Midnight_Club-Los_Angeles.jpg",
    alt: "Midnight Club: Los Angeles (box art)",
    credit: "Wikipedia",
  },
};
