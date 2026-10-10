import type { Port } from "@/lib/ports/schema";

export const valdroid: Port = {
  schema: "port",
  id: "valdroid",
  title: "ValDroid",
  game: "Valheim",
  developers: ["udarmolota"],
  publisher: "Iron Gate Studio",
  originalYear: 2021,
  portType: "runtime-port",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/ValDroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android launcher for Valheim. It requires the desktop game files from your own copy.",
  notesEs:
    "Lanzador no oficial para Android de Valheim. Requiere los archivos del juego de escritorio de tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/77/Valheim_2021_logo.jpg",
    alt: "Valheim (box art)",
    credit: "Wikipedia",
  },
};
