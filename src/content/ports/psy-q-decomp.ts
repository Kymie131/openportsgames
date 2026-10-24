import type { Port } from "@/lib/ports/schema";

export const psyQDecomp: Port = {
  schema: "port",
  id: "psy-q-decomp",
  title: "PS1 Psy-Q SDK",
  game: "PS1 Psy-Q SDK Libraries",
  developers: ["sozud"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1994,
  portType: "decompilation",
  kind: "tool",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sozud/psy-q-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  cover: {
    src: "https://openportsgames.com/covers/generated/ps1-psy-q-sdk-libraries.svg",
    alt: "PS1 Psy-Q SDK Libraries (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Work-in-progress decompilation of the PS1 Psy-Q SDK libraries. It is a development kit, not a game.",
  notesEs:
    "Decompilación en progreso de las librerías PS1 Psy-Q SDK. Es un kit de desarrollo, no un juego.",
};
