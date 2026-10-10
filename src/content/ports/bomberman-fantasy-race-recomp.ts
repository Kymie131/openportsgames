import type { Port } from "@/lib/ports/schema";

export const bombermanFantasyRaceRecomp: Port = {
  schema: "port",
  id: "bomberman-fantasy-race-recomp",
  title: "Bomberman Fantasy Race Recompiled",
  game: "Bomberman Fantasy Race",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Bomberman Fantasy Race (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Bomberman Fantasy Race (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20Fantasy%20Race%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Bomberman Fantasy Race (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20Fantasy%20Race%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Bomberman Fantasy Race (screenshot)",
      credit: "Libretro",
    },
  ],
};
