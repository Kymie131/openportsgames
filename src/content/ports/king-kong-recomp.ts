import type { Port } from "@/lib/ports/schema";

export const kingKongRecomp: Port = {
  schema: "port",
  id: "king-kong-recomp",
  title: "King Kong Recompiled",
  game: "Peter Jackson's King Kong",
  developers: ["TekRantGaming"],
  publisher: "Ubisoft",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/king-kong-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Peter Jackson's King Kong (the official game of the movie) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de King Kong de Peter Jackson (el videojuego oficial de la película) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Peter%20Jackson's%20King%20Kong%20-%20The%20Official%20Game%20of%20the%20Movie%20(Europe,%20Australia)%20(En,Fr,De,Es,It,Nl,Sv,No,Da,Fi).png",
    alt: "Peter Jackson's King Kong (box art)",
    credit: "Box art",
  },
};
