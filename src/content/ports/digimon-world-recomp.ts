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
    "Recompilation of Digimon World (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Digimon World (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20World%20(Europe).png",
    alt: "Digimon World (box art)",
    credit: "Box art",
  },
};
