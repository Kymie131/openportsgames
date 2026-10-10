import type { Port } from "@/lib/ports/schema";

export const bombermanWorldRecomp: Port = {
  schema: "port",
  id: "bomberman-world-recomp",
  title: "Bomberman World Recompiled",
  game: "Bomberman World",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
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
    "Recompilation of Bomberman World (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Bomberman World (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
    alt: "Bomberman World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
      alt: "Bomberman World (screenshot)",
      credit: "Libretro",
    },
  ],
};
