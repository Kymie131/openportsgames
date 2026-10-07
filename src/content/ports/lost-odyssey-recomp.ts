import type { Port } from "@/lib/ports/schema";

export const lostOdysseyRecomp: Port = {
  schema: "port",
  id: "lost-odyssey-recomp",
  title: "Lost Odyssey Recompiled",
  game: "Lost Odyssey",
  developers: ["freefrank"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/freefrank/LostOdysseyRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Lost Odyssey (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Lost Odyssey (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
};
