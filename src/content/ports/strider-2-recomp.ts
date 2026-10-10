import type { Port } from "@/lib/ports/schema";

export const strider2Recomp: Port = {
  schema: "port",
  id: "strider-2-recomp",
  title: "Strider 2 Recompiled",
  game: "Strider 2",
  developers: ["PortsDR"],
  publisher: "Capcom",
  originalYear: 1999,
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
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Strider 2 (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Strider 2 (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Strider%202%20(Europe).png",
    alt: "Strider 2 (box art)",
    credit: "Box art",
  },
};
