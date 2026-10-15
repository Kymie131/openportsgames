import type { Port } from "@/lib/ports/schema";

export const YuGiOhTheEternalDuelistSoul: Port = {
  schema: "port",
  id: "yu-gi-oh-the-eternal-duelist-soul",
  title: "Yu-Gi-Oh! The Eternal Duelist Soul",
  game: "Yu-Gi-Oh! The Eternal Duelist Soul",
  developers: ["CosmicScribe64"],
  publisher: "Unknown",
  originalYear: 2000,
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
  originalSystem: "Game Boy Advance",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Yu-Gi-Oh!%20-%20The%20Eternal%20Duelist%20Soul%20(USA).png",
    alt: "Yu-Gi-Oh! The Eternal Duelist Soul (box art)",
    credit: "Box art",
  },
  notes: "Matching decompilation of Yu-Gi-Oh! The Eternal Duelist Soul (GBA). Bring your own ROM.",
  notesEs:
    "Decompilación que coincide de Yu-Gi-Oh! The Eternal Duelist Soul (GBA). Aporta tu propia ROM.",
};
