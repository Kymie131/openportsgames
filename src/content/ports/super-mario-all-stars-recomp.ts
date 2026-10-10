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
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
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
