import type { Port } from "@/lib/ports/schema";

export const rampageThroughTimeRecomp: Port = {
  schema: "port",
  id: "rampage-through-time-recomp",
  title: "Rampage: Through Time Recompiled",
  game: "Rampage: Through Time",
  developers: ["PortsDR"],
  publisher: "Midway Games",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
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
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rampage%20-%20Through%20Time%20(Europe)%20(En,Fr,De).png",
    alt: "Rampage: Through Time (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Rampage%20-%20Through%20Time%20(Europe)%20(En,Fr,De).png",
      alt: "Rampage: Through Time (screenshot)",
      credit: "Libretro",
    },
  ],
};
