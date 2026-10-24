import type { Port } from "@/lib/ports/schema";

export const EarthboundBeginnings: Port = {
  schema: "port",
  id: "earthbound-beginnings",
  title: "Earthbound Beginnings",
  game: "Earthbound Beginnings",
  developers: ["GrasonHumphrey"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GrasonHumphrey/Earthbound-Zero-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c4/EarthBound_Beginnings_cover_art.png",
    alt: "Earthbound Beginnings (cover)",
    credit: "Wikipedia",
  },
  summary: "EarthBound Beginnings, originally released in Japan as Mother, is a 1989 role-playing video game developed by Ape Inc. and Nintendo and published by Nintendo for the Family Computer. It is the first entry in the Mother series and was first released in Japan on July 27, 1989. The game was re-released in Japan along with its sequel on the single-cartridge compilation Mother 1+2 for the Game Boy Advance in 2003.",
  summaryEs: "EarthBound, conocido en Japón como Mother 2: Giygas Strikes Back es un videojuego de rol desarrollado por Ape y HAL Laboratory, y publicado por Nintendo para la consola Super Nintendo, fue lanzado en Japón el 27 de agosto de 1994 y en América del Norte el 5 de junio de 1995. A diferencia de otros juegos de ese tipo, EarthBound sitúa su historia en un contexto más \"real\" y contemporáneo. Es la segunda entrega de la saga Mother y fue el primero de la serie en ser lanzado fuera de Japón.",
  notes: "Ghidra decompilation of Earthbound Zero (Mother) with no copyrighted material.",
  notesEs:
    "Decompilación con Ghidra de EarthBound Zero (Mother), sin material con derechos de autor.",
};
