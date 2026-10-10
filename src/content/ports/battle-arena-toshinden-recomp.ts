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
    "Recompilation of Battle Arena Toshinden (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Battle Arena Toshinden (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
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
