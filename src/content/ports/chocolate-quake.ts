import type { Port } from "@/lib/ports/schema";

export const ChocolateQuake: Port = {
  schema: "port",
  id: "chocolate-quake",
  title: "Chocolate Quake",
  game: "Chocolate Quake",
  developers: ["Henrique194"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Henrique194/chocolate-quake"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Chocolate Quake is a shooter game for MS-DOS, released in 2000.",
  summaryEs: "Chocolate Quake es un videojuego de disparos para MS-DOS, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/chocolate-quake.svg",
    alt: "Chocolate Quake (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "A purist Quake source port that restores the original look and feel of v1.09 and earlier.",
  notesEs: "Port purista de Quake que recupera el aspecto y la sensación de la v1.09 y anteriores.",
};
