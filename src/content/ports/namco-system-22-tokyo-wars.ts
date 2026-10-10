import type { Port } from "@/lib/ports/schema";

export const namcoSystem22TokyoWars: Port = {
  schema: "port",
  id: "namco-system-22-tokyo-wars",
  title: "Tokyo Wars (Namco System 22)",
  game: "Tokyo Wars",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.4.2", date: "2026-09-27" },
  sources: ["https://github.com/spacestate1/namco22-decompile"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "Namco System 22",
  features: [
    "Attract mode and full game playable, with sound",
    "Widescreen rendering on top of the original Mode 22 output",
    "Windows and Linux packages on the releases page, no building needed",
  ],
  featuresEs: [
    "Modo attract y juego completo jugables, con sonido",
    "Renderizado panorámico sobre la salida Mode 22 original",
    "Paquetes para Windows y Linux en la página de releases, sin necesidad de compilar",
  ],
  requirements: {
    minimum: "Your own Tokyo Wars ROM set from MAME 0.271 or later (tokyowar.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/tokyowar-widescreen.png",
      alt: "Tokyo Wars running in widescreen on PC, main menu open",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  notes:
    "Decompilation of the 1996 Namco arcade tank combat game for PC. Single ROM set, no separate sound board data required.",
  notesEs:
    "Decompilación del juego arcade de combate de tanques de Namco de 1996 para PC. Un único set de ROM, sin datos de placa de sonido aparte.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/94/TokyoWarsArcadeFlyer.jpg",
    alt: "Tokyo Wars (box art)",
    credit: "Wikipedia",
  },
};
