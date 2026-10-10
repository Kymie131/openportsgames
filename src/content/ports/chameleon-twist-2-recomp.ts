import type { Port } from "@/lib/ports/schema";

export const chameleonTwist2Recomp: Port = {
  schema: "port",
  id: "chameleon-twist-2-recomp",
  title: "Chameleon Twist 2: Recompiled",
  game: "Chameleon Twist 2",
  developers: ["Rainchus"],
  publisher: "Sunsoft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/ChameleonTwist2-JP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Chameleon Twist 2 (N64, Japanese release) with N64Recomp and RT64. It adds widescreen, unlocked framerate, an optional dual-analog camera and Linux and Steam Deck support.",
  notesEs:
    "Recompilación estática de Chameleon Twist 2 (N64, versión japonesa) con N64Recomp y RT64. Añade widescreen, framerate libre, cámara analógica dual opcional y soporte de Linux y Steam Deck.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%202%20(USA).png",
    alt: "Chameleon Twist 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Chameleon%20Twist%202%20(USA).png",
      alt: "Chameleon Twist 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
