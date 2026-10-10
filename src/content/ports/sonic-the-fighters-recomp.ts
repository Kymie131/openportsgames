import type { Port } from "@/lib/ports/schema";

export const sonicTheFightersRecomp: Port = {
  schema: "port",
  id: "sonic-the-fighters-recomp",
  title: "Sonic the Fighters Recompiled",
  game: "Sonic the Fighters",
  developers: ["Player124413"],
  publisher: "Sega",
  originalYear: 1996,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/FightersRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native Windows port of the Xbox Live Arcade version of Sonic the Fighters through recompilation, with no Xbox 360 emulation. It requires your own copy of the game.",
  notesEs:
    "Port nativo para Windows de la versión de Sonic the Fighters para Xbox Live Arcade mediante recompilación, sin emulación de Xbox 360. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5b/Sonic_the_Fighters.png",
    alt: "Sonic the Fighters (box art)",
    credit: "Wikipedia",
  },
};
