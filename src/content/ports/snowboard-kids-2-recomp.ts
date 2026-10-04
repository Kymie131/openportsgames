import type { Port } from "@/lib/ports/schema";

export const snowboardKids2Recomp: Port = {
  schema: "port",
  id: "snowboard-kids-2-recomp",
  title: "Snowboard Kids 2: Recompiled",
  game: "Snowboard Kids 2",
  developers: ["cdlewis"],
  publisher: "Atlus",
  originalYear: 1999,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cdlewis/snowboardkids2-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Snowboard Kids 2 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Snowboard Kids 2 (Nintendo 64). El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
};
