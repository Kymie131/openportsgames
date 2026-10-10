import type { Port } from "@/lib/ports/schema";

export const streetFighterExPlusAlphaRecomp: Port = {
  schema: "port",
  id: "street-fighter-ex-plus-alpha-recomp",
  title: "Street Fighter EX Plus Alpha Recompiled",
  game: "Street Fighter EX Plus Alpha",
  developers: ["PortsDR"],
  publisher: "Capcom",
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
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Street%20Fighter%20EX%20Plus%20Alpha%20(Europe).png",
    alt: "Street Fighter EX Plus Alpha (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Street%20Fighter%20EX%20Plus%20Alpha%20(Europe).png",
      alt: "Street Fighter EX Plus Alpha (screenshot)",
      credit: "Libretro",
    },
  ],
};
