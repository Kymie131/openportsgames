import type { Port } from "@/lib/ports/schema";

export const wcwNwoWorldTourRecomp: Port = {
  schema: "port",
  id: "wcw-nwo-world-tour-recomp",
  title: "WCW vs. nWo World Tour",
  game: "WCW vs. nWo World Tour",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WCWvsNWOWorldTourRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "WCW vs. nWo: World Tour is a professional wrestling video game released in 1997 for the Nintendo 64 game console. Released at the peak of World Championship Wrestling's (WCW) dominance in the Monday Night War, World Tour was THQ's first foray into the N64 wrestling scene and is a semi-sequel to the lesser known WCW vs. the World for the PlayStation. It is the second best-selling wrestling game for the N64 console.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Static recompilation of WCW vs. nWo World Tour (N64) with N64Recomp and the RT64 renderer. It requires the game itself.",
  notesEs:
    "Recompilación estática de WCW vs. nWo World Tour (N64) con N64Recomp y el renderizador RT64. Requiere el propio juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20vs.%20nWo%20-%20World%20Tour%20(Europe).png",
    alt: "WCW vs. nWo World Tour (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WCW%20vs.%20nWo%20-%20World%20Tour%20(Europe).png",
      alt: "WCW vs. nWo World Tour (screenshot)",
      credit: "Libretro",
    },
  ],
};
