import type { Port } from "@/lib/ports/schema";

export const raze: Port = {
  schema: "port",
  id: "raze",
  title: "Raze",
  game: "Duke Nukem 3D",
  developers: ["3D Realms"],
  publisher: "GT Interactive",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "macos"],
  status: "stable",
  release: { version: "1.11.0", date: "2025-02-22" },
  sources: ["https://github.com/ZDoom/Raze"],
  website: "https://raze.zdoom.org/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  summary: "Duke Nukem 3D is a 1996 first-person shooter game developed by 3D Realms and published by FormGen for MS-DOS. It is a sequel to the platform games Duke Nukem and Duke Nukem II, published by 3D Realms.",
  summaryEs: "Duke Nukem 3D es un videojuego de disparos en primera persona en 3D, desarrollado y distribuido por 3D Realms en 1996. Es la continuación de dos videojuegos de plataformas anteriores, Duke Nukem y Duke Nukem II. Posee una expansión llamada Duke Nukem 3D: Atomic Edition.",
  notes:
    "Source port of the Build-engine games Duke Nukem 3D, Blood, Shadow Warrior, Redneck Rampage and Powerslave, built on GZDoom technology. Requires the original game files.",
  notesEs:
    "Port de código fuente de los juegos del motor Build Duke Nukem 3D, Blood, Shadow Warrior, Redneck Rampage y Powerslave, construido sobre tecnología de GZDoom. Requiere los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/61/Duke_Nukem_3D_Coverart.png",
    alt: "Duke Nukem 3D (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
