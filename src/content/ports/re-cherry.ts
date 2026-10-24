import type { Port } from "@/lib/ports/schema";

export const reCherry: Port = {
  schema: "port",
  id: "re-cherry",
  title: "Re-Cherry",
  game: "Lollipop Chainsaw",
  developers: ["MaxDeadBear"],
  publisher: "Warner Bros. Interactive Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/MaxDeadBear/Re-Cherry"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Lollipop Chainsaw is a 2012 action-adventure game developed by Grasshopper Manufacture. A collaboration between game designer Goichi Suda and filmmaker James Gunn, the game was published in Japan by Kadokawa Games and internationally by Warner Bros. Interactive Entertainment.",
  summaryEs: "Lollipop Chainsaw es un videojuego de acción y aventura del género hack and slash desarrollado por Grasshopper Manufacture para las plataformas Xbox 360 y PlayStation 3. El juego cuenta la historia de una animadora que debe luchar contra una invasión zombi en un colegio ficticio de California. Su lanzamiento fue el 14 de junio de 2012 en Japón, el 12 de junio de 2012 en Norteamérica y el 15 de junio de 2012 en Europa.",
  notes:
    "Native recompilation of Lollipop Chainsaw (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Lollipop Chainsaw (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox%20360/Named_Boxarts/Lollipop%20Chainsaw%20(Japan).png",
    alt: "Lollipop Chainsaw (box art)",
    credit: "Box art",
  },
};
