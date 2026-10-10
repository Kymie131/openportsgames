import type { Port } from "@/lib/ports/schema";

export const superMarioAllStarsRecomp: Port = {
  schema: "port",
  id: "super-mario-all-stars-recomp",
  title: "Super Mario All-Stars Recompiled",
  game: "Super Mario All-Stars",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1993,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Recompilation of Super Mario All-Stars (Super Nintendo) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Super Mario All-Stars (Super Nintendo) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20(Europe).png",
    alt: "Super Mario All-Stars (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Mario%20All-Stars%20(Europe).png",
      alt: "Super Mario All-Stars (screenshot)",
      credit: "Libretro",
    },
  ],
};
