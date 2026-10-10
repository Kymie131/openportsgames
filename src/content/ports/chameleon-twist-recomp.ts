import type { Port } from "@/lib/ports/schema";

export const chameleonTwistRecomp: Port = {
  schema: "port",
  id: "chameleon-twist-recomp",
  title: "Chameleon Twist",
  game: "Chameleon Twist",
  developers: ["Rainchus"],
  publisher: "Sunsoft",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/ChameleonTwist1-JP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Chameleon Twist (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Chameleon Twist (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%20(Europe).png",
    alt: "Chameleon Twist (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Chameleon%20Twist%20(Europe).png",
      alt: "Chameleon Twist (screenshot)",
      credit: "Libretro",
    },
  ],
};
