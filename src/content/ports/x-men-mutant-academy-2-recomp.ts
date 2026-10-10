import type { Port } from "@/lib/ports/schema";

export const xMenMutantAcademy2Recomp: Port = {
  schema: "port",
  id: "x-men-mutant-academy-2-recomp",
  title: "X-Men: Mutant Academy 2 Recompiled",
  game: "X-Men: Mutant Academy 2",
  developers: ["PortsDR"],
  publisher: "Activision",
  originalYear: 2001,
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
    "Listed on the PortsDR community index with no public repository. You need your own game data.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/X-Men%20-%20Mutant%20Academy%202%20(Europe).png",
    alt: "X-Men: Mutant Academy 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/X-Men%20-%20Mutant%20Academy%202%20(Europe).png",
      alt: "X-Men: Mutant Academy 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
