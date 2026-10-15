import type { Port } from "@/lib/ports/schema";

export const gta2Re: Port = {
  schema: "port",
  id: "gta2-re",
  title: "GTA2 Re",
  game: "Grand Theft Auto 2",
  developers: ["CriminalRETeam"],
  publisher: "Rockstar Games",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CriminalRETeam/gta2_re"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Reimplementation of Grand Theft Auto 2 (PC 10.5). It needs your own copy of the game files.",
  notesEs:
    "Reimplementación de Grand Theft Auto 2 (PC 10.5). Necesita tu propia copia de los archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/GTA2_Box_art.jpg",
    alt: "Grand Theft Auto 2 (cover)",
    credit: "Wikipedia",
  },
};
