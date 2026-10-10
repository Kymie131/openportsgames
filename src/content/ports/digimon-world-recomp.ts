import type { Port } from "@/lib/ports/schema";

export const digimonWorldRecomp: Port = {
  schema: "port",
  id: "digimon-world-recomp",
  title: "Digimon World Recompiled",
  game: "Digimon World",
  developers: ["PortsDR"],
  publisher: "Bandai",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
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
    "Listed on the PortsDR community index with no public repository. You need your own copy of the game.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20World%20(Europe).png",
    alt: "Digimon World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Digimon%20World%20(Europe).png",
      alt: "Digimon World (screenshot)",
      credit: "Libretro",
    },
  ],
};
