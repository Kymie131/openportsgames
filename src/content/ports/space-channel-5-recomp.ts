import type { Port } from "@/lib/ports/schema";

export const spaceChannel5Recomp: Port = {
  schema: "port",
  id: "space-channel-5-recomp",
  title: "Space Channel 5 Recompiled",
  game: "Space Channel 5",
  developers: ["PortsDR"],
  publisher: "Sega",
  originalYear: 1999,
  portType: "recompilation",
  genre: "music",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Dreamcast",
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Boxarts/Space%20Channel%205%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Space Channel 5 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Snaps/Space%20Channel%205%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Space Channel 5 (screenshot)",
      credit: "Libretro",
    },
  ],
};
