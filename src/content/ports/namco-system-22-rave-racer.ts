import type { Port } from "@/lib/ports/schema";

export const namcoSystem22RaveRacer: Port = {
  schema: "port",
  id: "namco-system-22-rave-racer",
  title: "Rave Racer (Namco System 22)",
  game: "Rave Racer",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1995,
  portType: "decompilation",
  genre: "racing",
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
    "Playable races with sound",
    "Windows and Linux packages on the releases page, no building needed",
    "Widescreen rendering on top of the original Mode 22 output",
  ],
  featuresEs: [
    "Carreras jugables con sonido",
    "Paquetes para Windows y Linux en la página de releases, sin necesidad de compilar",
    "Renderizado panorámico sobre la salida Mode 22 original",
  ],
  requirements: {
    minimum: "Your own Rave Racer ROM set from MAME 0.271 or later (raverace.zip, namcoc74.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/raverace-widescreen.png",
      alt: "Rave Racer running in widescreen on PC",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  notes:
    "Decompilation of the 1995 Namco arcade racer for PC. This one also needs the separate sound board ROM set (namcoc74.zip) alongside the game ROM.",
  notesEs:
    "Decompilación del arcade de carreras de Namco de 1995 para PC. Este además necesita el set de ROM de la placa de sonido (namcoc74.zip) junto con la ROM del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3c/Rave_Racer_Flyer.png",
    alt: "Rave Racer (box art)",
    credit: "Wikipedia",
  },
};
