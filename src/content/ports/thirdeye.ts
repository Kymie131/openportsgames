import type { Port } from "@/lib/ports/schema";

export const Thirdeye: Port = {
  schema: "port",
  id: "thirdeye",
  title: "Thirdeye",
  game: "Thirdeye",
  developers: ["psi29a"],
  publisher: "Unknown",
  originalYear: 2019,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.89.0", date: "2026-07-13" },
  sources: ["https://github.com/psi29a/thirdeye"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Third Eye is a hack 'n' slash adventure game with its roots set in Indian culture. A game that is made by a group of 8 people putting in all their efforts to bring you the experience of a hack and slash adventure game made in India",
  summaryEs: "Thirdeye es un videojuego de acción y aventura publicado por Vanishing Point Game Studios en 2019.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/psi29a/thirdeye/releases/download/thirdeye-0.89.0/Thirdeye-0.89.0-x86_64.AppImage",
      size: "44.0 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/psi29a/thirdeye/releases/download/thirdeye-0.89.0/Thirdeye-0.89.0.dmg",
      size: "43.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/psi29a/thirdeye/releases/download/thirdeye-0.89.0/Thirdeye-0.89.0-win64.exe",
      size: "23.6 MB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/515060/header.jpg?t=1591045643",
    alt: "Thirdeye (Steam header)",
    credit: "Steam",
  },
  notes:
    "ThirdEye is an open source AESOP replacement to play Eye of the Beholder 3 and Dungeon Hack.",
  notesEs:
    "ThirdEye es un reemplazo de código abierto de AESOP para jugar a Eye of the Beholder 3 y Dungeon Hack.",
};
