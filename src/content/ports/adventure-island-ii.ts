import type { Port } from "@/lib/ports/schema";

export const AdventureIslandIi: Port = {
  schema: "port",
  id: "adventure-island-ii",
  title: "Adventure Island II",
  game: "Adventure Island II",
  developers: ["Junior-Jones"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Junior-Jones/Adventure-Island-II-NES-Static-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo Entertainment System",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2c/Adventure_Island_2_box_art.jpg",
    alt: "Adventure Island II (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Static recompilation of Adventure Island II (NES) for Windows 10 and 11. ROM not included.",
  notesEs:
    "Recompilación estática de Adventure Island II (NES) para Windows 10 y 11. No incluye la ROM.",
};
