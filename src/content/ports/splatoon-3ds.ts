import type { Port } from "@/lib/ports/schema";

export const splatoon3ds: Port = {
  schema: "port",
  id: "splatoon-3ds",
  title: "Splatoon (3DS demake)",
  game: "Splatoon",
  developers: ["CaramelKat"],
  publisher: "Nintendo",
  originalYear: 2015,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  category: "homebrew",
  platforms: ["3ds"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CaramelKat/Splatoon-3DS"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  related: ["splatoon"],
  notes:
    "A homebrew demake of Splatoon (Nintendo, 2015) for Nintendo 3DS, rebuilt from scratch as a fan project. It does not use any files from the original game.",
  notesEs:
    "Un demake homebrew de Splatoon (Nintendo, 2015) para Nintendo 3DS, reconstruido desde cero como proyecto fan. No usa archivos del juego original.",
};
