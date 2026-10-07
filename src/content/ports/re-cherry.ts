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
  originalSystem: "Xbox 360",
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
