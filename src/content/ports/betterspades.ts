import type { Port } from "@/lib/ports/schema";

export const betterspades: Port = {
  schema: "port",
  id: "betterspades",
  title: "BetterSpades",
  game: "Ace of Spades",
  developers: ["xtreme8000"],
  publisher: "Jagex",
  originalYear: 2012,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.5", date: "2021-05-14" },
  sources: ["https://github.com/xtreme8000/BetterSpades"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "Ace of Spades is a multiplayer first-person shooter with voxel-based destructible environments. It began as a free browser game in 2011 and was later published by Jagex in 2012.",
  summaryEs:
    "Ace of Spades es un shooter multijugador en primera persona con entornos destruibles basados en vóxeles. Empezó como un juego gratuito de navegador en 2011 y Jagex lo publicó en 2012.",
  cover: {
    src: "https://openportsgames.com/covers/generated/betterspades.svg",
    alt: "Ace of Spades (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "BetterSpades is an open-source Ace of Spades client aimed at low-end systems with OpenGL/ES 1.1 support. It runs without the original client.",
  notesEs:
    "BetterSpades es un cliente de código abierto de Ace of Spades pensado para equipos modestos con soporte OpenGL/ES 1.1. Funciona sin el cliente original.",
};
