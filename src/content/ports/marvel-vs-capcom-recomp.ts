import type { Port } from "@/lib/ports/schema";

export const marvelVsCapcomRecomp: Port = {
  schema: "port",
  id: "marvel-vs-capcom-recomp",
  title: "Marvel vs. Capcom Recompiled",
  game: "Marvel vs. Capcom: Clash of Super Heroes",
  developers: ["PortsDR"],
  publisher: "Capcom",
  originalYear: 1998,
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
    "Recompilation of Marvel vs. Capcom: Clash of Super Heroes (PlayStation) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Marvel vs. Capcom: Clash of Super Heroes (PlayStation) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Marvel%20vs.%20Capcom%20-%20Clash%20of%20Super%20Heroes%20(Europe).png",
    alt: "Marvel vs. Capcom: Clash of Super Heroes (box art)",
    credit: "Box art",
  },
};
