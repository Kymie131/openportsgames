import type { Port } from "@/lib/ports/schema";

export const RotpFusion: Port = {
  schema: "port",
  id: "rotp-fusion",
  title: "Rotp-Fusion",
  game: "Rotp-Fusion",
  developers: ["BrokenRegistry"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/BrokenRegistry/Rotp-Fusion"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Rotp-Fusion is a action-adventure game, released in 1993.",
  summaryEs: "Rotp-Fusion es un videojuego de acci�n y aventura, lanzado en 1993.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/BrokenRegistry/Rotp-Fusion/releases/download/2026/11/09/1854/rotp-Fusion-2026-11-09-windows.zip",
      size: "352.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/rotp-fusion.svg",
    alt: "Rotp-Fusion (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Created by Ray Fowler, Remnants of the Precursors is an open-source modernization of the original 1993 Master of Orion.",
  notesEs:
    "Remnants of the Precursors es una modernización de código abierto del Master of Orion original de 1993, creada por Ray Fowler.",
};
