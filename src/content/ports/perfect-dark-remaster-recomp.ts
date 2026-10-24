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
  originalSystems: ["Xbox 360"],
  summary: "Perfect Dark is a 2000 first-person shooter game developed and published by Rare for the Nintendo 64. The first game of the Perfect Dark series, it follows Joanna Dark, an agent of the Carrington Institute research centre, as she attempts to stop an extraterrestrial conspiracy by rival corporation dataDyne. The game features a campaign mode where the player must complete a series of levels to progress through the story, as well as a range of multiplayer options, including a co-operative mode and traditional deathmatch settings with computer-controlled bots.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Native recompilation of Perfect Dark (XBLA Remaster) (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Perfect Dark (XBLA Remaster) (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/32/Perfect_dark_box.jpg",
    alt: "Perfect Dark (XBLA Remaster) (box art)",
    credit: "Wikipedia",
  },
};
