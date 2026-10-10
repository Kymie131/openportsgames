import type { Port } from "@/lib/ports/schema";

export const battleArenaToshindenRecomp: Port = {
  schema: "port",
  id: "battle-arena-toshinden-recomp",
  title: "Battle Arena Toshinden Recompiled",
  game: "Battle Arena Toshinden",
  developers: ["PortsDR"],
  publisher: "Takara",
  originalYear: 1995,
  portType: "recompilation",
  genre: "fighting",
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
    "Listed on the PortsDR community index with no public repository. You need the original game.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Battle%20Arena%20Toshinden%20(Europe).png",
    alt: "Battle Arena Toshinden (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Battle%20Arena%20Toshinden%20(Europe).png",
      alt: "Battle Arena Toshinden (screenshot)",
      credit: "Libretro",
    },
  ],
};
