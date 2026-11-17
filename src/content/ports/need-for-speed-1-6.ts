import type { Port } from "@/lib/ports/schema";

export const NeedForSpeed16: Port = {
  schema: "port",
  kind: "tool",
  id: "need-for-speed-1-6",
  title: "Need for Speed 1-6 (tool)",
  game: "Need for Speed",
  developers: ["OpenNFS"],
  publisher: "Electronic Arts",
  originalYear: 1994,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenNFS/OpenNFS"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Need for Speed 1-6 is a data-unpacking and recreation project for the classic Need for Speed games, from the 1994 original through the early 2000s entries.",
  summaryEs: "Need for Speed 1-6 es un proyecto de extracción de datos y recreación de los Need for Speed clásicos, desde el original de 1994 hasta las entregas de principios de los 2000.",
  cover: {
    src: "https://openportsgames.com/covers/generated/need-for-speed-1-6.svg",
    alt: "Need For Speed 1-6 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "An attempt to recreate the classic Need for Speed Games (1-6), unpacking their original data files into a modern, scratch built engine.",
  notesEs:
    "Intento de recrear los clásicos Need for Speed (1-6), extrayendo sus datos originales a un motor nuevo.",
};
