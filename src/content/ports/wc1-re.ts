import type { Port } from "@/lib/ports/schema";

export const Wc1Re: Port = {
  schema: "port",
  id: "wc1-re",
  title: "Wc1-re",  game: "Warcraft: Orcs & Humans",
  developers: ["neuromancer"],  publisher: "Blizzard Entertainment",  originalYear: 1994,
  portType: "reimplementation",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.9.9", date: "2026-11-11" },
  sources: ["https://github.com/neuromancer/wc1-re"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Warcraft: Orcs & Humans is a 1994 real-time strategy game developed and published by Blizzard Entertainment. Humans and Orcs compete for the kingdom of Azeroth in campaigns and multiplayer battles.",  summaryEs: "Warcraft: Orcs & Humans es un juego de estrategia en tiempo real de 1994 desarrollado y publicado por Blizzard Entertainment. Humanos y orcos compiten por el reino de Azeroth en campañas y partidas multijugador.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-win32-msvc420.zip",
      size: "262 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-linux-x86_64-sdl2.zip",
      size: "41.0 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-macos-arm64.dmg",
      size: "36.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-macos-x86_64.dmg",
      size: "36.8 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-macos-arm64-sdl2.zip",
      size: "35.9 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/neuromancer/wc1-re/releases/download/v0.9.9/wc1-re-v0.9.9-macos-x86_64-sdl2.zip",
      size: "35.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/wc1-re.svg",
    alt: "wc1-re (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Wing Commander 1 source reconstruction and SDL2 port.",
  notesEs: "Reconstrucción del código fuente y port a SDL2 de Wing Commander 1.",
};
