import type { Port } from "@/lib/ports/schema";

export const dragonBallGtFinalBoutRecomp: Port = {
  schema: "port",
  id: "dragon-ball-gt-final-bout-recomp",
  title: "Dragon Ball GT: Final Bout Recompiled",
  game: "Dragon Ball GT: Final Bout",
  developers: ["PortsDR"],
  publisher: "Bandai",
  originalYear: 1997,
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
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Dragon%20Ball%20GT%20-%20Final%20Bout%20(USA).png",
    alt: "Dragon Ball GT: Final Bout (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Dragon%20Ball%20GT%20-%20Final%20Bout%20(USA).png",
      alt: "Dragon Ball GT: Final Bout (screenshot)",
      credit: "Libretro",
    },
  ],
};
