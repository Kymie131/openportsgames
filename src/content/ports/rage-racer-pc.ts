import type { Port } from "@/lib/ports/schema";

export const rageRacerPc: Port = {
  schema: "port",
  id: "rage-racer-pc",
  title: "Rage Racer PC",
  game: "Rage Racer",
  developers: ["khasinski"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/khasinski/rage-racer-pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Rage Racer (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Rage Racer (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rage%20Racer%20(USA).png",
    alt: "Rage Racer (box art)",
    credit: "Box art",
  },
};
