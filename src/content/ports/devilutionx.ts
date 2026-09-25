import type { Port } from "@/lib/ports/schema";

export const devilutionX: Port = {
  schema: "port",
  id: "devilutionx",
  title: "DevilutionX",
  game: "Diablo",
  developers: ["Blizzard North"],
  publisher: "Blizzard Entertainment",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.5.5", date: "2025-10-30" },
  sources: ["https://github.com/diasurgical/devilutionX"],
  docs: "https://github.com/diasurgical/devilutionX/wiki",
  license: {
    spdx: "NOASSERTION",
    note: "revival project with a custom license statement",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/ee902926-6382-4ee5-b1c2-7947e8b434e9",
      alt: "The Diablo player inspecting a dropped item inside the cathedral",
      credit: "DevilutionX",
    },
  ],
  notes:
    "Reverse-engineered engine for Diablo and the Hellfire expansion, rebuilt for modern systems. Requires the original Diablo 1 and Hellfire data files.",
  installGuide: {
    steps: [
      "Own a copy of Diablo, from the original CD or a storefront re-release.",
      "Install the original game, or copy DIABLO.EXE and DIABDAT.MPQ from an install you hold the rights to.",
      "Place DIABLO.EXE and DIABDAT.MPQ in the DevilutionX data folder.",
      "Launch devilutionx; the modern engine runs the original game data.",
    ],
    stepsEs: [
      "Ten una copia de Diablo, del CD original o de una reedición de tienda digital.",
      "Instala el juego original, o copia DIABLO.EXE y DIABDAT.MPQ de una instalación de la que tengas los derechos.",
      "Coloca DIABLO.EXE y DIABDAT.MPQ en la carpeta de datos de DevilutionX.",
      "Lanza devilutionx; el motor moderno ejecuta los datos originales del juego.",
    ],
  },
};
