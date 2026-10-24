import type { Port } from "@/lib/ports/schema";

export const parasiteEveIiDecomp: Port = {
  schema: "port",
  id: "parasite-eve-ii-decomp",
  title: "Parasite Eve II Decompilation",
  game: "Parasite Eve II",
  developers: ["GabeRealB"],
  publisher: "Square Enix",
  originalYear: 1999,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/GabeRealB/parasite-eve-2-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Parasite Eve II is a 1999 action role-playing game released for the PlayStation. The game was developed and published by Square, published in Japan in 1999 and in both North America and, unlike the previous game, in PAL regions in 2000. It is the sequel to Parasite Eve and the second game in the series of the same name.",
  summaryEs: "Parasite Eve II es un videojuego de terror de un jugador publicado en el año 1999 por la compañía japonesa Squaresoft para la videoconsola PlayStation de Sony. A diferencia de su predecesor, Parasite Eve, que es un videojuego de rol o RPG, Parasite Eve II pertenece al género de videojuegos de terror.",
  notes:
    "Completed decompilation of the US release of Parasite Eve II (PlayStation). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación completada de la versión USA de Parasite Eve II (PlayStation). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Parasite%20Eve%20II%20(USA).png",
    alt: "Parasite Eve II (box art)",
    credit: "Box art",
  },
};
