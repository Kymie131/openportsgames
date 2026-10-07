import type { Port } from "@/lib/ports/schema";

export const perfectDarkRemasterRecomp: Port = {
  schema: "port",
  id: "perfect-dark-remaster-recomp",
  title: "Perfect Dark Remaster Recompilation",
  game: "Perfect Dark (XBLA Remaster)",
  developers: ["nikolaygorb"],
  publisher: "Microsoft Game Studios",
  originalYear: 2010,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/PerfectDarkRemasterRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Perfect Dark (XBLA Remaster) (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Perfect Dark (XBLA Remaster) (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
};
