import type { Port } from "@/lib/ports/schema";

export const crash2Recomp: Port = {
  schema: "port",
  id: "crash2-recomp",
  title: "Crash Bandicoot 2 Recompiled",
  game: "Crash Bandicoot 2: Cortex Strikes Back",
  developers: ["Zumbo06"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Zumbo06/Crash2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Crash Bandicoot 2: Cortex Strikes Back (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Crash Bandicoot 2: Cortex Strikes Back (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Crash%20Bandicoot%202%20-%20Cortex%20Strikes%20Back%20(USA).png",
    alt: "Crash Bandicoot 2: Cortex Strikes Back (box art)",
    credit: "Box art",
  },
};
