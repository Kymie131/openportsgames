import type { Port } from "@/lib/ports/schema";

export const zelda3: Port = {
  schema: "port",
  id: "zelda3",
  title: "zelda3",
  game: "The Legend of Zelda: A Link to the Past",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "0.3", date: "2023-08-17" },
  sources: ["https://github.com/snesrev/zelda3"],
  discord: "https://discord.gg/AJJbJAzNNJ",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Super Nintendo",
  features: [
    "Native builds for Windows and Linux",
    "Plays from the original zelda3.sfc ROM placed next to the executable",
  ],
  featuresEs: [
    "Builds nativas para Windows y Linux",
    "Se ejecuta desde la ROM original zelda3.sfc colocada junto al ejecutable",
  ],
  notes:
    "Native port of The Legend of Zelda: A Link to the Past produced from the Super Nintendo source code, distributed as the tagged v0.3 release. Requires a legally owned ROM of the game.",
  notesEs:
    "Port nativo de The Legend of Zelda: A Link to the Past producido a partir del código fuente de Super Nintendo y distribuido como la release etiquetada v0.3. Requiere una ROM del juego obtenida legalmente.",
  installGuide: {
    steps: [
      "Own a copy of A Link to the Past for the Super Nintendo (North American).",
      "Dump the ROM from your cartridge with a tool you are legally entitled to use.",
      "Rename the dump to zelda3.sfc and place it next to the game executable.",
      "Launch the port; the original zelda3.sfc data is played locally.",
    ],
    stepsEs: [
      "Ten una copia de A Link to the Past para Super Nintendo (versión americana).",
      "Vuelca la ROM desde tu cartucho con una herramienta que tengas permiso legal de usar.",
      "Renombra el volcado a zelda3.sfc y colócalo junto al ejecutable del juego.",
      "Lanza el port; los datos del original zelda3.sfc se reproducen localmente.",
    ],
  },
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20(USA).png",
    alt: "The Legend of Zelda: A Link to the Past (box art)",
    credit: "Box art",
  },
};
