import type { Port } from "@/lib/ports/schema";

export const streetFighterEx2PlusRecomp: Port = {
  schema: "port",
  id: "street-fighter-ex2-plus-recomp",
  title: "Street Fighter EX2 Plus Recompiled",
  game: "Street Fighter EX2 Plus",
  developers: ["strider973"],
  publisher: "Capcom",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Street Fighter EX2 Plus (PlayStation) built on PSXRecomp. It requires the original game.",
  notesEs:
    "Recompilación estática de Street Fighter EX2 Plus (PlayStation) construida sobre PSXRecomp. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Street%20Fighter%20EX2%20Plus%20(Europe).png",
    alt: "Street Fighter EX2 Plus (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Street%20Fighter%20EX2%20Plus%20(Europe).png",
      alt: "Street Fighter EX2 Plus (screenshot)",
      credit: "Libretro",
    },
  ],
};
