import type { Port } from "@/lib/ports/schema";

export const legendOfLegaiaRecomp: Port = {
  schema: "port",
  id: "legend-of-legaia-recomp",
  title: "Legend of Legaia Recompiled",
  game: "Legend of Legaia",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
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
    "Recompilation of Legend of Legaia (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Legend of Legaia (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legend%20of%20Legaia%20(Europe).png",
    alt: "Legend of Legaia (box art)",
    credit: "Box art",
  },
};
