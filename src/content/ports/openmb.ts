import type { Port } from "@/lib/ports/schema";

export const Openmb: Port = {
  schema: "port",
  id: "openmb",
  title: "OpenMB",
  game: "OpenMB",
  developers: ["cookgreen"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.2.1", date: "2022-10-07" },
  sources: ["https://github.com/cookgreen/OpenMB"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "OpenMB is a role-playing game, released in 2000.",
  summaryEs: "OpenMB es un videojuego de rol, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "GoogleTranslateAPI-2.2.1",
      url: "https://github.com/cookgreen/OpenMB/releases/download/googletransapi-2.2.1/GoogleTranslateAPI-2.2.1.7z",
      size: "205 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openmb.svg",
    alt: "OpenMB (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Open Source role-playing game engine for Taleworlds' Mount&Blade Series written in C# using Ogre3d Engine.",
  notesEs:
    "Motor de rol de código abierto para la saga Mount&Blade de Taleworlds, escrito en C# con Ogre3D.",
};
