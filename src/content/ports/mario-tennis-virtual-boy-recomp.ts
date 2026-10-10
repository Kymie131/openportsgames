import type { Port } from "@/lib/ports/schema";

export const marioTennisVirtualBoyRecomp: Port = {
  schema: "port",
  id: "mario-tennis-virtual-boy-recomp",
  title: "Mario's Tennis Recompiled",
  game: "Mario's Tennis",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1995,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MarioTennisVirtualBoyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Virtual Boy",
  notes:
    "Static recompilation of Mario's Tennis (Virtual Boy) using the vbrecomp toolkit. It requires your own ROM and does not include the game.",
  notesEs:
    "Recompilación estática de Mario's Tennis (Virtual Boy) con el kit vbrecomp. Requiere tu propia ROM y no incluye el juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Virtual%20Boy/Named_Boxarts/Mario's%20Tennis%20(Japan,%20USA)%20(En).png",
    alt: "Mario's Tennis (box art)",
    credit: "Box art",
  },
};
