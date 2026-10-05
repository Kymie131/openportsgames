import type { Port } from "@/lib/ports/schema";

export const tokyoJungleRecompiled: Port = {
  schema: "port",
  id: "tokyo-jungle-recompiled",
  title: "Tokyo Jungle Recompiled",
  game: "Tokyo Jungle",
  developers: ["sp00nznet"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/tokyojungle"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
    "Native recompilation of Tokyo Jungle (PlayStation 3). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tokyo Jungle (PlayStation 3). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/sp00nznet/tokyojungle/master/assets/title-screen.gif",
      alt: "Title screen of Tokyo Jungle Recompiled",
      credit: "sp00nznet/tokyojungle",
    },
  ],
};
