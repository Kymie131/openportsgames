import type { Port } from "@/lib/ports/schema";

export const sonicAdventureRecomp: Port = {
  schema: "port",
  id: "sonic-adventure-recomp",
  title: "Sonic Adventure Recompiled",
  game: "Sonic Adventure",
  developers: ["sonicfreak1337"],
  publisher: "Sega",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicfreak1337/SARecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Dreamcast",
  notes:
    "Native port of Sonic Adventure built on KatanaRecomp, playable on Windows, Linux and Steam Deck. It is a work in progress and needs your own copy of the game.",
  notesEs:
    "Port nativo de Sonic Adventure construido sobre KatanaRecomp, jugable en Windows, Linux y Steam Deck. Es un trabajo en progreso y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Boxarts/Sonic%20Adventure%20(Europe)%20(En,Ja,Fr,De,Es).png",
    alt: "Sonic Adventure (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Snaps/Sonic%20Adventure%20(Europe)%20(En,Ja,Fr,De,Es).png",
      alt: "Sonic Adventure (screenshot)",
      credit: "Libretro",
    },
  ],
};
