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
  sources: ["https://github.com/strider973/STRIDER-2-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Strider 2, released in Japan as Strider Hiryū 2 , and then as Strider Hiryū 1&2 , is a 1999 hack and slash game developed and published by Capcom for arcades. The game is a direct sequel to the original Strider and the second sequel to Strider produced, following U.S. Gold's 1990 noncanonical Strider II, a game with which Capcom was not directly involved. The Capcom-produced Strider 2 makes no references to the Western-only Strider Returns/Strider II. The game was released for arcades in 1999 and was ported to the PlayStation in 2000.",
  summaryEs: "Strider 2 es un videojuego de plataformas publicado por Capcom en 1999.",
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
