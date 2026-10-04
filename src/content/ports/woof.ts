import type { Port } from "@/lib/ports/schema";

export const woofPort: Port = {
  schema: "port",
  id: "woof",
  title: "Woof",
  game: "Doom",
  developers: ["Fabian Greffrath"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "16.0.0", date: "2026-09-08" },
  sources: ["https://github.com/fabiangreffrath/woof"],
  website: "https://fabiangreffrath.github.io/woof/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Multiple game modes including Boom and MBF",
    "High-resolution replacement textures",
    "SDL2 input and video backends",
  ],
  featuresEs: [
    "Múltiples modos de juego, incluidos Boom y MBF",
    "Texturas de reemplazo de alta resolución",
    "Backends de entrada y video SDL2",
  ],
  notes: "Doom engine covering the Doom 1, Doom 2 and Boom era limits, with SDL2 backends.",
  notesEs: "Motor de Doom que cubre la era de Doom 1, Doom 2 y Boom, con backends SDL2.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/fabiangreffrath/woof/master/data/woof.png",
      alt: "Woof! Icon",
      credit: "fabiangreffrath",
    },
  ],
};
