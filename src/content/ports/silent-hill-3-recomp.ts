import type { Port } from "@/lib/ports/schema";

export const silentHill3Recomp: Port = {
  schema: "port",
  id: "silent-hill-3-recomp",
  title: "Silent Hill 3 Recompiled",
  game: "Silent Hill 3",
  developers: ["cutarev"],
  publisher: "Konami",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cutarev/sh3-nx"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  notes:
    "Silent Hill 3 (PlayStation 2) statically recompiled for the Nintendo Switch. It needs your own copy of the game.",
  notesEs:
    "Silent Hill 3 (PlayStation 2) recompilado de forma estática para Nintendo Switch. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Silent%20Hill%203%20(USA)%20(En,Ja,Fr,De,Es,It,Ko).png",
    alt: "Silent Hill 3 (box art)",
    credit: "Box art",
  },
};
