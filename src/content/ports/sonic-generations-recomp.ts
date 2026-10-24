import type { Port } from "@/lib/ports/schema";

export const sonicGenerationsRecomp: Port = {
  schema: "port",
  id: "sonic-generations-recomp",
  title: "Sonic Generations Recompiled",
  game: "Sonic Generations",
  developers: ["Player124413"],
  publisher: "Sega",
  originalYear: 2011,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/Sonic-Generations-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Sonic Generations is a 2011 platform game developed by Sonic Team and published by Sega for the PlayStation 3, Xbox 360, Windows, and Nintendo 3DS. Produced in commemoration of the 20th anniversary of the Sonic the Hedgehog series, the game follows Sonic and his sidekick Tails as they form an alliance with their past selves and travel through levels from previous Sonic games.",
  summaryEs: "Sonic Generations es un videojuego de plataformas de la serie Sonic the Hedgehog. Fue producido por Sega y su lanzamiento fue el 1 de noviembre de 2011, para celebrar el 20º aniversario del nacimiento de Sonic. Está disponible para las plataformas Windows, Nintendo 3DS, Xbox 360 y PlayStation 3.",
  notes:
    "Recompilation of Sonic Generations (Xbox 360) built with XenonRecomp and XenosRecomp, with Windows and Android builds. It needs a copy of the game.",
  notesEs:
    "Recompilación de Sonic Generations (Xbox 360) construida con XenonRecomp y XenosRecomp, con builds para Windows y Android. Necesita una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7d/SonicGenerations.jpg",
    alt: "Sonic Generations (box art)",
    credit: "Wikipedia",
  },
};
