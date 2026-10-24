import type { Port } from "@/lib/ports/schema";

export const UnderworldExhumed: Port = {
  schema: "port",
  id: "underworld-exhumed",
  title: "Underworld Exhumed",
  game: "Underworld Exhumed",
  developers: ["abedegno"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/abedegno/underworld-exhumed"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Underworld Exhumed is a action-adventure game, released in 2000.",
  summaryEs: "Underworld Exhumed es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/underworld-exhumed.svg",
    alt: "Underworld Exhumed (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Underworld Exhumed: Ultima Underworld I and II as byte-matching source code and native ports for macOS, Windows and Linux.",
  notesEs:
    "Underworld Exhumed: Ultima Underworld I y II como código fuente byte a byte y ports nativos para macOS, Windows y Linux.",
};
