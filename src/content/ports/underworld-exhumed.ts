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
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-linux-x86_64.AppImage",
      size: "3.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-linux-x86_64.tar.gz",
      size: "2.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-macos.zip",
      size: "4.9 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-windows-x86_64.zip",
      size: "3.6 MB",
    },
  ],
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
