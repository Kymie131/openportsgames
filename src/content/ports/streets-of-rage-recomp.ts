import type { Port } from "@/lib/ports/schema";

export const streetsOfRageRecomp: Port = {
  schema: "port",
  id: "streets-of-rage-recomp",
  title: "Streets of Rage Project",
  game: "Streets of Rage",
  developers: ["RuiNelson"],
  publisher: "Sega",
  originalYear: 1991,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RuiNelson/StreetsOfRageProject"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Sega Mega Drive / Genesis",
  notes:
    "Native recompilation of Streets of Rage (Sega Mega Drive / Genesis). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Streets of Rage (Sega Mega Drive / Genesis). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Mega%20Drive%20-%20Genesis/Named_Boxarts/Streets%20of%20Rage%20(USA).png",
    alt: "Streets of Rage (box art)",
    credit: "Box art",
  },
};
