import type { Port } from "@/lib/ports/schema";

export const yamagiQuake2: Port = {
  schema: "port",
  id: "yamagi-quake2",
  title: "Yamagi Quake II",
  game: "Quake II",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "8.70", date: "2026-05-14" },
  sources: ["https://github.com/yquake2/yquake2"],
  website: "https://www.yamagi.org/quake2/",
  license: {
    spdx: "GPL-2.0",
    note: "based on id Software's GPL-2.0 Quake II release",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  summary: "Quake II is a 1997 first-person shooter game developed by id Software and published by Activision. It is the second installment of the Quake series, following Quake. Developed over the course of a year, Quake II was released on December 9, 1997. In contrast to the first game, which featured a combination of science fiction and fantasy elements, Quake II entirely drops the latter elements and is set during humankind's war against a rogue alien race known as the Strogg, half-mutant half-machine creatures whose homeplanet, Stroggos, is the target of the humans' invasion force.",
  summaryEs: "Quake II es un videojuego de disparos en primera persona desarrollado por id Software y distribuido por Activision en 1997. Aunque usa el nombre de Quake, también de id Software y es considerado, de hecho como su secuela, su historia se aparta totalmente del ambiente mítico-medieval visto en Quake para adentrarse en la ciencia ficción",
  notes:
    "Maintained source port of the Quake II engine. Requires Quake II gamedata (shareware baseq2 files freely available).",
  notesEs:
    "Port de código fuente mantenido del motor de Quake II. Requiere los datos de Quake II (los archivos baseq2 shareware están disponibles gratis).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/Quake2box.jpg",
    alt: "Quake II (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
