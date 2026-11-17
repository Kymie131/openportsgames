import type { Port } from "@/lib/ports/schema";

export const ptPc: Port = {
  schema: "port",
  id: "pt-pc",
  title: "P.T. (Playable Teaser)",
  game: "P.T.",
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
  summary: "P.T. is a 2014 first-person horror teaser developed by Kojima Productions and published by Konami for the PlayStation 4.",
  summaryEs: "P.T. es un teaser de terror en primera persona de 2014 desarrollado por Kojima Productions y publicado por Konami para PlayStation 4.",  notes:
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
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/LoreanXavier/pt-pc/releases/download/v1.0.8/P.T.PC.Port-portable-windows.zip",
      size: "469.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/LoreanXavier/pt-pc/releases/download/v1.0.8/P.T.PC.Port-portable-linux.zip",
      size: "431.6 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a8/P.T._cover_art.jpg",
    alt: "P.T. (Playable Teaser) (box art)",
    credit: "Wikipedia",
  },
};
