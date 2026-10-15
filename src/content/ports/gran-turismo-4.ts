import type { Port } from "@/lib/ports/schema";

export const GranTurismo4: Port = {
  schema: "port",
  id: "gran-turismo-4",
  title: "Gran Turismo 4",
  game: "Gran Turismo 4",
  developers: ["gustavocanepa"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/gustavocanepa/gt4-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Gran%20Turismo%204%20(Asia).png",
    alt: "Gran Turismo 4 (box art)",
    credit: "Box art",
  },
  notes:
    "Matching decompilation of the Gran Turismo 4 (PS2) engine, AI-assisted. No game data included.",
  notesEs:
    "Decompilación que coincide del motor de Gran Turismo 4 (PS2), asistida por IA. No incluye datos del juego.",
};
