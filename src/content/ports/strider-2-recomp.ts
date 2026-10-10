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
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Strider%202%20(Europe).png",
    alt: "Strider 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Strider%202%20(Europe).png",
      alt: "Strider 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
