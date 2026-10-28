import type { Port } from "@/lib/ports/schema";

export const ptPc: Port = {
  schema: "port",
  id: "pt-pc",
  title: "P.T. PC Port",
  game: "P.T. (Playable Teaser)",
  developers: ["LoreanXavier"],
  publisher: "Konami",
  originalYear: 2014,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.0.8", date: "2026-10-22" },
  sources: ["https://github.com/LoreanXavier/pt-pc"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-27",
  originalSystems: ["PlayStation 4"],
  summary: "P.T. (Playable Teaser) is a action-adventure game published by Konami for PlayStation 4, released in 2014.",
  summaryEs: "P.T. (Playable Teaser) es un videojuego de acci�n y aventura publicado por Konami para PlayStation 4, lanzado en 2014.",
  summaryGenerated: true,
  notes:
    "Native PC port of the P.T. teaser (PS4, CUSA01127): the game logic is rebuilt in C++ with a Vulkan renderer, and every level, model, texture, sound, script and cutscene is read at runtime from your own PS4 copy. It is not an emulator or a remake, and it ships no game data. It plays the whole teaser start to finish, with DLSS/FSR/XeSS, ray tracing, photo mode, mods and experimental VR. Konami removed P.T. from the PlayStation Store in 2015, so a USA copy (CUSA01127) can no longer be bought.",
  notesEs:
    "Port nativo para PC del teaser P.T. (PS4, CUSA01127): la lógica del juego se reconstruye en C++ con un renderizador Vulkan, y cada nivel, modelo, textura, sonido, script y cinemática se leen en tiempo de ejecución de tu propia copia de PS4. No es un emulador ni un remake, y no incluye datos del juego. Reproduce todo el teaser de principio a fin, con DLSS/FSR/XeSS, trazado de rayos, modo foto, mods y VR experimental. Konami retiró P.T. de la PlayStation Store en 2015, así que una copia USA (CUSA01127) ya no se puede comprar.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/LoreanXavier/pt-pc/main/docs/media/lisa.gif",
      alt: "P.T. (Playable Teaser) gameplay",
      credit: "P.T. PC Port",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a8/P.T._cover_art.jpg",
    alt: "P.T. (Playable Teaser) (box art)",
    credit: "Wikipedia",
  },
};
