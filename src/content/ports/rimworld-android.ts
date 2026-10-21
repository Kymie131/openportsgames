import type { Port } from "@/lib/ports/schema";

export const rimworldAndroid: Port = {
  schema: "port",
  id: "rimworld-android",
  title: "RimDroid",
  game: "RimWorld",
  developers: ["udarmolota"],
  publisher: "Ludeon Studios",
  originalYear: 2018,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/rimdroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  notes:
    "Android launcher that runs RimWorld on phones and tablets. It requires the desktop game files from your own copy.",
  notesEs:
    "Lanzador para Android que ejecuta RimWorld en teléfonos y tablets. Requiere los archivos del juego de escritorio de tu propia copia.",
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
    alt: "RimWorld (cover)",
    credit: "Steam",
  },
};
