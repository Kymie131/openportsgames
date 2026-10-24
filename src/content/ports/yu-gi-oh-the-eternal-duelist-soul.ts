import type { Port } from "@/lib/ports/schema";

export const YuGiOhTheEternalDuelistSoul: Port = {
  schema: "port",
  id: "yu-gi-oh-the-eternal-duelist-soul",
  title: "Yu-Gi-Oh! The Eternal Duelist Soul",
  game: "Yu-Gi-Oh! The Eternal Duelist Soul",
  developers: ["CosmicScribe64"],
  publisher: "Konami",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CosmicScribe64/eds-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Yu-Gi-Oh!%20-%20The%20Eternal%20Duelist%20Soul%20(USA).png",
    alt: "Yu-Gi-Oh! The Eternal Duelist Soul (box art)",
    credit: "Box art",
  },
  summary: "Yu-Gi-Oh! The Eternal Duelist Soul is a card battle video game based on the Yu-Gi-Oh! franchise. It was developed and published by Konami and released on July 5, 2001 in Japan, October 16, 2002 in the United States for Game Boy Advance. It features a single-player campaign against opponents from the Yu-Gi-Oh! anime as well as a multiplayer head-to-head mode.",
  summaryEs: "Yu-Gi-Oh! The Eternal Duelist Soul es un videojuego de acción y aventura publicado por Konami en 2001.",
  notes: "Matching decompilation of Yu-Gi-Oh! The Eternal Duelist Soul (GBA). Bring your own ROM.",
  notesEs:
    "Decompilación que coincide de Yu-Gi-Oh! The Eternal Duelist Soul (GBA). Aporta tu propia ROM.",
};
