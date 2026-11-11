import type { Port } from "@/lib/ports/schema";

export const openra: Port = {
  schema: "port",
  id: "openra",
  title: "OpenRA",
  game: "Command & Conquer: Red Alert",
  developers: ["Westwood Studios"],
  publisher: "Virgin Interactive",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "2025.0330", date: "2025-03-30" },
  sources: ["https://github.com/OpenRA/OpenRA"],
  website: "https://www.openra.net",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://www.openra.net/images/news/20250330-harvesters.png",
      alt: "Ore harvesters loading at refineries in OpenRA",
      credit: "OpenRA",
    },
    {
      src: "https://www.openra.net/images/news/20241116-vortex.webp",
      alt: "Post-processing vortex effect sweeping a battlefield in OpenRA",
      credit: "OpenRA",
    },
    {
      src: "https://www.openra.net/images/news/20241116-map-editor.webp",
      alt: "The revamped map editor with draggable selections in OpenRA",
      credit: "OpenRA",
    },
    {
      src: "https://www.openra.net/images/news/20241116-eva.webp",
      alt: "The in-game EVA database encyclopedia in OpenRA",
      credit: "OpenRA",
    },
  ],
  originalSystems: ["MS-DOS"],
  summary: "Command & Conquer: Red Alert is a real-time strategy video game in the Command & Conquer franchise, developed and published by Westwood Studios in 1996. The second game to bear the Command & Conquer title, Red Alert is the prequel to the original Command & Conquer of 1995, and takes place in the alternate early history of Command & Conquer when Allied Forces battle an aggressive Soviet Union for control over the European mainland.",
  summaryEs: "Command & Conquer Red Alert es un videojuego de estrategia en tiempo real de la serie Command & Conquer creado por Westwood Studios en 1996. Los eventos de Red Alert tienen lugar en una realidad alternativa en la cual las fuerzas aliadas se enfrentan a las fuerzas de la Unión Soviética en una encarnizada contienda militar por el control del continente europeo. Inicialmente sólo estaba en versión para PC, y subsiguientemente para PlayStation.",
  notes:
    "Reimplementation of the Command & Conquer real-time strategy games, supporting Red Alert, Tiberian Dawn and Dune 2000 alongside modern quality-of-life features, online multiplayer and a dedicated launcher. Version numbers follow date-based releases (the 2025.0330 build corresponds to the release-20250330 tag).",
  notesEs:
    "Reimplementación de los juegos de estrategia en tiempo real de Command & Conquer, compatible con Red Alert, Tiberian Dawn y Dune 2000, además de mejoras modernas de calidad de vida, multijugador en línea y un lanzador dedicado. Los números de versión siguen releases basadas en fecha (la build 2025.0330 corresponde a la etiqueta release-20250330).",
  downloads: [
    {
      label: "Windows x64",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-release-20250330-x64-winportable.zip",
      size: "69.7 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-release-20250330-x86-winportable.zip",
      size: "66.6 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-release-20250330-x64.exe",
      size: "58.4 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-release-20250330-x86.exe",
      size: "55.8 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-Dune-2000-x86_64.AppImage",
      size: "45.7 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/OpenRA/OpenRA/releases/download/release-20250330/OpenRA-Red-Alert-x86_64.AppImage",
      size: "42.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/71/Cncra-win-cover.jpg",
    alt: "Command & Conquer: Red Alert (box art)",
    credit: "Wikipedia",
  },
};
