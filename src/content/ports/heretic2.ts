import type { Port } from "@/lib/ports/schema";

export const Heretic2: Port = {
  schema: "port",
  id: "heretic2",
  title: "Heretic II",
  game: "Heretic II",
  developers: ["0lvin"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/0lvin/heretic2"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "Heretic II is a 1998 third-person action game developed by Raven Software and published by Activision. It continues the story of Corvus, who returns to a plague-stricken world and fights with a staff and spells.",
  summaryEs:
    "Heretic II es un juego de acción en tercera persona de 1998 desarrollado por Raven Software y publicado por Activision. Continúa la historia de Corvus, que regresa a un mundo azotado por la plaga y lucha con un bastón y hechizos.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/0lvin/heretic2/releases/download/8.71H16/yquake2remaster-win64-8.71H16.tar.gz",
      size: "8.4 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/0lvin/heretic2/releases/download/8.71H16/yquake2remaster-win32-8.71H16.tar.gz",
      size: "8.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/ca/Heretic_II_Coverart.png",
    alt: "Heretic II (box art)",
    credit: "Wikipedia",
  },
  notes: "Heretic II playground sandbox. Can contain non GPL code. Be careful!",
  notesEs: "Banco de pruebas de Heretic II. Puede contener código no GPL. ¡Cuidado!",
};
