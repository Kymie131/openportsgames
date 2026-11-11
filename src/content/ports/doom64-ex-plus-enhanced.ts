import type { Port } from "@/lib/ports/schema";

export const Doom64ExPlusEnhanced: Port = {
  schema: "port",
  id: "doom64-ex-plus-enhanced",
  title: "DOOM64-EX-Plus-Enhanced",  game: "Doom 64",
  developers: ["Styd051"],  publisher: "Midway Games",  originalYear: 1997,
  portType: "source-port",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0.0.1", date: "2025-10-28" },
  sources: ["https://github.com/Styd051/DOOM64-EX-Plus-Enhanced"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Nintendo 64"],  summary: "Doom 64 is a 1997 first-person shooter developed and published by Midway Games for the Nintendo 64. A direct sequel to Doom II, it follows the Doomguy as he returns to Mars to stop a new demonic invasion.",  summaryEs: "Doom 64 es un shooter en primera persona de 1997 desarrollado y publicado por Midway Games para Nintendo 64. Es la secuela directa de Doom II y sigue al Doomguy en su regreso a Marte para detener una nueva invasión demoníaca.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Styd051/DOOM64-EX-Plus-Enhanced/releases/download/V1.0.0.1/doom64ex-plus-enhanced-1.0.0.1-win64.zip",
      size: "16.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2b/Doom_64_box.jpg",
    alt: "Doom 64 (box art)",
    credit: "Wikipedia",
  },
  notes:
    "This is a custom fork of the EX+ engine with news customs contents, news customs options, news customs features, and possibly more in the future.",
  notesEs:
    "Bifurcación personalizada del motor EX+ con contenido, opciones y funciones nuevos, y posiblemente más cosas en el futuro.",
};
