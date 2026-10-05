import type { Port } from "@/lib/ports/schema";

export const reblue: Port = {
  schema: "port",
  id: "reblue",
  title: "re:Blue",
  game: "Blue Dragon",
  developers: ["zolaware"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/zolaware/reblue"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Blue Dragon (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Blue Dragon (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
};
