import type { Port } from "@/lib/ports/schema";

export const threeDstris: Port = {
  schema: "port",
  id: "3dstris",
  title: "3DStris",
  game: "3DStris",
  developers: ["3DStris"],
  publisher: "3DStris",
  originalYear: 2020,
  portType: "reimplementation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "open",
  category: "homebrew",
  platforms: ["3ds"],
  status: "stable",
  release: { version: "1.6.9", date: "2020-06-06" },
  sources: ["https://github.com/3DStris/3DStris"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "3DStris is a puzzle game published by 3DStris, released in 2020.",
  summaryEs: "3DStris es un videojuego de puzles publicado por 3DStris, lanzado en 2020.",
  summaryGenerated: true,
  notes:
    "3DStris is a homebrew Tetris-style game for Nintendo 3DS with 3D graphics, a level editor and custom themes. It is free and needs no original game.",
  notesEs:
    "3DStris es un juego homebrew tipo Tetris para Nintendo 3DS con gráficos 3D, editor de niveles y temas personalizados. Es gratis y no necesita el juego original.",
};
