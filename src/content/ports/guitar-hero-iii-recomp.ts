import type { Port } from "@/lib/ports/schema";

export const guitarHeroIiiRecomp: Port = {
  schema: "port",
  id: "guitar-hero-iii-recomp",
  title: "Guitar Hero III: Legends of Rock Recompiled",
  game: "Guitar Hero III: Legends of Rock",
  developers: ["luisxl15"],
  publisher: "Activision",
  originalYear: 2007,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/luisxl15/Guitar-Hero-3-Recomp-"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Guitar Hero III: Legends of Rock is a 2007 rhythm game developed by Neversoft and published by Activision. It is the third main installment, the fourth overall installment in the Guitar Hero series and the first game in the series to be developed by Neversoft after Activision's acquisition of RedOctane and MTV Games' purchase of Harmonix, the previous development studio for the series. The game was released worldwide for the PlayStation 2, PlayStation 3, Xbox 360, and Wii in October 2007. Aspyr published the Microsoft Windows and Mac OS X versions of the game, releasing them later in 2007.",
  summaryEs: "Guitar Hero III: Legends of Rock es un videojuego de música y el tercer título de la serie Guitar Hero. El juego fue publicado por Activision y RedOctane y es el primero de la serie en ser desarrollado por Neversoft, después de que Activision adquiriera a RedOctane y de que MTV Games comprara a Harmonix Music Systems, el anterior estudio desarrollador de la serie.",
  notes:
    "Static recompilation of Guitar Hero III: Legends of Rock (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Guitar Hero III: Legends of Rock (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/93/Guitar-hero-iii-cover-image.jpg",
    alt: "Guitar Hero III: Legends of Rock (cover)",
    credit: "Wikipedia",
  },
};
