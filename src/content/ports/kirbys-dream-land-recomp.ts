import type { Port } from "@/lib/ports/schema";

export const kirbysDreamLandRecomp: Port = {
  schema: "port",
  id: "kirbys-dream-land-recomp",
  title: "Kirby's Dream Land Recompiled",
  game: "Kirby's Dream Land",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1992,
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
  originalSystem: "Game Boy",
  notes:
    "Recompilation of Kirby's Dream Land (Game Boy) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Kirby's Dream Land (Game Boy) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Kirby's%20Dream%20Land%20(USA,%20Europe).png",
    alt: "Kirby's Dream Land (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Snaps/Kirby's%20Dream%20Land%20(USA,%20Europe).png",
      alt: "Kirby's Dream Land (screenshot)",
      credit: "Libretro",
    },
  ],
};
