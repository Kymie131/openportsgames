import type { Port } from "@/lib/ports/schema";

export const zelda2AdventureOfLinkRecomp: Port = {
  schema: "port",
  id: "zelda-2-adventure-of-link-recomp",
  title: "Zelda II: The Adventure of Link Recompiled",
  game: "Zelda II: The Adventure of Link",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1987,
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
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Recompilation of Zelda II: The Adventure of Link (Nintendo Entertainment System) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Zelda II: The Adventure of Link (Nintendo Entertainment System) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Zelda%20II%20-%20The%20Adventure%20of%20Link%20(Europe)%20(Rev%201).png",
    alt: "Zelda II: The Adventure of Link (box art)",
    credit: "Box art",
  },
};
