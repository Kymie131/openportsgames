import type { Port } from "@/lib/ports/schema";

export const klonoaDoorToPhantomileRecomp: Port = {
  schema: "port",
  id: "klonoa-door-to-phantomile-recomp",
  title: "Klonoa: Door to Phantomile Recompiled",
  game: "Klonoa: Door to Phantomile",
  developers: ["PortsDR"],
  publisher: "Namco",
  originalYear: 1997,
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
    "Recompilation of Klonoa: Door to Phantomile (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Klonoa: Door to Phantomile (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Klonoa%20-%20Door%20to%20Phantomile%20(Europe).png",
    alt: "Klonoa: Door to Phantomile (box art)",
    credit: "Box art",
  },
};
