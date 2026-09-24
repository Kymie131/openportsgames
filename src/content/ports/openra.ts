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
  aiDisclosure: false,
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
  originalSystem: "MS-DOS",
  notes:
    "Reimplementation of the Command & Conquer real-time strategy games, supporting Red Alert, Tiberian Dawn and Dune 2000 alongside modern quality-of-life features, online multiplayer and a dedicated launcher. Version numbers follow date-based releases (the 2025.0330 build corresponds to the release-20250330 tag).",
};
