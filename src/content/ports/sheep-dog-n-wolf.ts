import type { Port } from "@/lib/ports/schema";

export const SheepDogNWolf: Port = {
  schema: "port",
  id: "sheep-dog-n-wolf",
  title: "Sheep, Dog 'n' Wolf",
  game: "Sheep, Dog 'n' Wolf",
  developers: ["SDW-Community"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SDW-Community/sdw-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8c/Sheep_Dog_n_Wolf.jpg",
    alt: "Sheep, Dog 'n' Wolf (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A byte-matching decompilation of Sheep, Dog 'n' Wolf (Sheep Raider, 2001, PC): source that compiles with the original Visual C++ 6.0 to the exact original exe, plus a mod loader, a 3D level editor and tools. Bring your own copy of the game.",
  notesEs:
    "Decompilación byte a byte de Sheep, Dog 'n' Wolf (Sheep Raider, 2001, PC), con mod loader, editor de niveles 3D y herramientas. Aporta tu propia copia.",
};
