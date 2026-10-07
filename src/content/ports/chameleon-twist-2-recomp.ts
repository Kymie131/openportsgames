import type { Port } from "@/lib/ports/schema";

export const chameleonTwist2Recomp: Port = {
  schema: "port",
  id: "chameleon-twist-2-recomp",
  title: "Chameleon Twist 2: Recompiled",
  game: "Chameleon Twist 2",
  developers: ["Rainchus"],
  publisher: "Sunsoft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/ChameleonTwist2-JP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Chameleon Twist 2 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Chameleon Twist 2 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%202%20(USA).png",
    alt: "Chameleon Twist 2 (box art)",
    credit: "Box art",
  },
};
