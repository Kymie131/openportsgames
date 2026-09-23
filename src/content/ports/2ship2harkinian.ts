import type { Port } from "@/lib/ports/schema";

export const twoShip: Port = {
  schema: "port",
  id: "2ship2harkinian",
  title: "2 Ship 2 Harkinian",
  game: "The Legend of Zelda: Majora's Mask",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "5.0.1", date: "2026-09-18" },
  sources: ["https://github.com/HarbourMasters/2ship2harkinian"],
  website: "https://www.harbourmasters.org/game/2ship2harkinian",
  license: {
    spdx: "CC0-1.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Native port of Majora's Mask from the decompilation project. Requires the original North American Majora's Mask N64 ROM (legally obtained).",
  installGuide: {
    steps: [
      "Own a copy of Majora's Mask, from the Nintendo 64 cartridge or the Nintendo 3DS release.",
      "Extract the game data following the project's official extraction guide using the version you own.",
      "Run the project's extraction tool to build the o2r.otr archive and place it next to the executable.",
      "Launch the port; the game data is read locally from o2r.otr and never distributed.",
    ],
    stepsEs: [
      "Ten una copia de Majora's Mask, del cartucho de Nintendo 64 o de la versión para Nintendo 3DS.",
      "Extrae los datos del juego siguiendo la guía oficial de extracción del proyecto usando la versión que poseas.",
      "Ejecuta la herramienta de extracción del proyecto para generar el archivo o2r.otr y colócalo junto al ejecutable.",
      "Lanza el port; los datos del juego se leen localmente desde o2r.otr y nunca se redistribuyen.",
    ],
  },
};