import type { Port } from "@/lib/ports/schema";

export const GoldenSun: Port = {
  schema: "port",
  id: "golden-sun",
  title: "Golden Sun",
  game: "Golden Sun",
  developers: ["PascalPixel"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PascalPixel/alchemy"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Golden%20Sun%20(France).png",
    alt: "Golden Sun (box art)",
    credit: "Box art",
  },
  notes:
    "The decompilation of both Golden Sun games, preserving the GBA classics as readable code and assets.",
  notesEs:
    "Decompilación de ambos juegos de Golden Sun, preservando los clásicos de GBA como código y recursos legibles.",
};
