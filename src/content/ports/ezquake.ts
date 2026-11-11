import type { Port } from "@/lib/ports/schema";

export const ezquake: Port = {
  schema: "port",
  id: "ezquake",
  title: "ezQuake",
  game: "QuakeWorld",
  developers: ["QW-Group"],
  publisher: "id Software",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "3.6.9", date: "2026-03-01" },
  sources: ["https://github.com/QW-Group/ezquake-source"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "QuakeWorld is the multiplayer-focused version of Quake released by id Software in 1996. It improves network play with client-side prediction and dedicated servers.",
  summaryEs:
    "QuakeWorld es la versión de Quake centrada en el multijugador publicada por id Software en 1996. Mejora el juego en red con predicción en el cliente y servidores dedicados.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/QW-Group/ezquake-source/releases/download/3.6.9/ezQuake-linux-x86_64.zip",
      size: "21.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/QW-Group/ezquake-source/releases/download/3.6.9/ezQuake-macOS-universal.zip",
      size: "8.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/QW-Group/ezquake-source/releases/download/3.6.9/ezQuake-windows-x64.zip",
      size: "3.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/ezquake.svg",
    alt: "QuakeWorld (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "ezQuake is the main source port for QuakeWorld, adding modern rendering, HUD customization and match features. It requires the original game data.",
  notesEs:
    "ezQuake es el principal port del código fuente de QuakeWorld y añade renderizado moderno, personalización del HUD y funciones para partidas. Requiere los datos originales del juego.",
};
