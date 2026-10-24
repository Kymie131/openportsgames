import type { Port } from "@/lib/ports/schema";

export const GoldenSun: Port = {
  schema: "port",
  id: "golden-sun",
  title: "Golden Sun",
  game: "Golden Sun",
  developers: ["PascalPixel"],
  publisher: "Nintendo",
  originalYear: 2001,
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
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Golden%20Sun%20(France).png",
    alt: "Golden Sun (box art)",
    credit: "Box art",
  },
  summary: "Golden Sun is a 2001 role-playing video game developed by Camelot Software Planning and published by Nintendo for the Game Boy Advance. The game follows a band of magic-attuned teenagers called Adepts on a mission to protect the world of Weyard from alchemy, a potentially destructive power that was sealed away long ago. During their quest, the Adepts develop new magic abilities called Psynergy, assist others, and learn more about why alchemy was sealed away. Golden Sun is followed by a sequel, The Lost Age, which together form a complete story.",
  summaryEs: "Golden Sun es la primera entrega de una serie de videojuegos RPG, lanzada para Game Boy Advance, distribuida por Nintendo y desarrollada por Camelot Software Planning. Fue lanzada en agosto de 2001 en Japón, en noviembre del mismo año en Estados Unidos y en Europa en febrero de 2002.",
  notes:
    "The decompilation of both Golden Sun games, preserving the GBA classics as readable code and assets.",
  notesEs:
    "Decompilación de ambos juegos de Golden Sun, preservando los clásicos de GBA como código y recursos legibles.",
};
