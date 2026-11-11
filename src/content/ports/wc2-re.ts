import type { Port } from "@/lib/ports/schema";

export const Wc2Re: Port = {
  schema: "port",
  id: "wc2-re",
  title: "Wc2-re",  game: "Warcraft II: Tides of Darkness",
  developers: ["neuromancer"],  publisher: "Blizzard Entertainment",  originalYear: 1995,
  portType: "reimplementation",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.9.5", date: "2026-11-11" },
  sources: ["https://github.com/neuromancer/wc2-re"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Warcraft II: Tides of Darkness is a 1995 real-time strategy game developed and published by Blizzard Entertainment. The Alliance and the Horde fight across Azeroth and beyond with naval units, new buildings and a map editor.",  summaryEs: "Warcraft II: Tides of Darkness es un juego de estrategia en tiempo real de 1995 desarrollado y publicado por Blizzard Entertainment. La Alianza y la Horda luchan por Azeroth y más allá con unidades navales, nuevos edificios y editor de mapas.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-win32-msvc410.zip",
      size: "288 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-linux-x86_64-sdl2.zip",
      size: "12.9 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-macos-arm64.dmg",
      size: "8.6 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-macos-x86_64.dmg",
      size: "8.6 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-macos-arm64-sdl2.zip",
      size: "7.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/neuromancer/wc2-re/releases/download/v0.9.5/wc2-re-v0.9.5-macos-x86_64-sdl2.zip",
      size: "7.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/wc2-re.svg",
    alt: "wc2-re (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Wing Commander 2 source reconstruction and SDL2 port.",
  notesEs: "Reconstrucción del código fuente y port a SDL2 de Wing Commander 2.",
};
