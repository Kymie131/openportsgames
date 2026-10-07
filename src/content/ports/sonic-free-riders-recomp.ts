import type { Port } from "@/lib/ports/schema";

export const sonicFreeRidersRecomp: Port = {
  schema: "port",
  id: "sonic-free-riders-recomp",
  title: "Free Riders Recompiled",
  game: "Sonic Free Riders",
  developers: ["YuutaTsubasa"],
  publisher: "Sega",
  originalYear: 2010,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/YuutaTsubasa/Free-Riders-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Sonic Free Riders (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Sonic Free Riders (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
};
