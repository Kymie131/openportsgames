import type { Port } from "@/lib/ports/schema";

export const xMenLegendsRecomp: Port = {
  schema: "port",
  id: "x-men-legends-recomp",
  title: "X-Men Legends Recompiled",
  game: "X-Men Legends",
  developers: ["GTTeancum"],
  publisher: "Activision",
  originalYear: 2004,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/OpenXML1xbox"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Static recompilation of X-Men Legends (Xbox) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de X-Men Legends (Xbox) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/X-Men%20Legends%20(USA).png",
    alt: "X-Men Legends (box art)",
    credit: "Box art",
  },
};
