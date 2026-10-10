import type { Port } from "@/lib/ports/schema";

export const twistedMetal4Recomp: Port = {
  schema: "port",
  id: "twisted-metal-4-recomp",
  title: "Twisted Metal 4 Recompiled",
  game: "Twisted Metal 4",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
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
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Twisted%20Metal%204%20(USA)%20(Rev%201).png",
    alt: "Twisted Metal 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Twisted%20Metal%204%20(USA)%20(Rev%201).png",
      alt: "Twisted Metal 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
