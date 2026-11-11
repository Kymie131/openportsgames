import type { Port } from "@/lib/ports/schema";

export const openblack: Port = {
  schema: "port",
  id: "openblack",
  title: "openblack",
  game: "Black & White",
  developers: ["openblack"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.0", date: "2024-09-04" },
  sources: ["https://github.com/openblack/openblack"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Black & White is a god video game developed by Lionhead Studios and published by Electronic Arts for Microsoft Windows in 2001 and by Feral Interactive in 2002 for Mac OS. Black & White combines elements of artificial life and strategy. The player acts as a god whose goal is to defeat Nemesis, another god who wants to take over the world. A primary theme is the concept of good and evil, with the atmosphere being affected by the player's moral choices.",
  summaryEs: "Black & White es un videojuego creado por Lionhead Studios, con Peter Molyneux a la cabeza. Fue lanzado en 2001 para Windows, y distribuido por la compañía Electronic Arts. Inicialmente también iba a tener versión para PlayStation y PlayStation 2, de las que se llegaron a ver vídeos e incluso demos para la prensa. Inexplicablemente, fue cancelado",
  notes:
    "Open-source reimplementation of Black & White that runs the original game assets. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de Black & White que ejecuta los recursos del juego original. Necesita tu propia copia del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-v0.1.0-linux-x64-release.tar.gz",
      size: "28.6 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-v0.1.0-osx-x64-release.zip",
      size: "21.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-v0.1.0-windows-x64-release.zip",
      size: "10.6 MB",
    },
    {
      label: "iOS",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-v0.1.0-ios-arm64-release.zip",
      size: "3.7 MB",
    },
    {
      label: "openblack-clang-build-analysis-v0.1.0",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-clang-build-analysis-v0.1.0.zip",
      size: "9.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/openblack/openblack/releases/download/v0.1.0/openblack-v0.1.0-linux-arm64-release.tar.gz",
      size: "5.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7b/Black_%26_White_Coverart.png",
    alt: "Black & White (cover)",
    credit: "Wikipedia",
  },
};
