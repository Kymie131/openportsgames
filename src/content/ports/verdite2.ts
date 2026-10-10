import type { Port } from "@/lib/ports/schema";

export const verdite2: Port = {
  schema: "port",
  id: "verdite2",
  title: "Verdite2",
  game: "King's Field",
  developers: ["Voicedrew11"],
  publisher: "FromSoftware",
  originalYear: 1994,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Voicedrew11/verdite2"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of King's Field (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de King's Field (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/King's%20Field%20(USA).png",
    alt: "King's Field (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/King's%20Field%20(USA).png",
      alt: "King's Field (screenshot)",
      credit: "Libretro",
    },
  ],
};
