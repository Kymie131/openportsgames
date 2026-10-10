import type { Port } from "@/lib/ports/schema";

export const shadowsOfTheEmpireRecomp: Port = {
  schema: "port",
  id: "shadows-of-the-empire-recomp",
  title: "Shadows of the Empire Recompiled",
  game: "Star Wars: Shadows of the Empire",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Recompilation of Star Wars: Shadows of the Empire (Nintendo 64) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.",
  notesEs:
    "Recompilación de Star Wars: Shadows of the Empire (Nintendo 64) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20-%20Shadows%20of%20the%20Empire%20(Europe).png",
    alt: "Star Wars: Shadows of the Empire (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Star%20Wars%20-%20Shadows%20of%20the%20Empire%20(Europe).png",
      alt: "Star Wars: Shadows of the Empire (screenshot)",
      credit: "Libretro",
    },
  ],
};
