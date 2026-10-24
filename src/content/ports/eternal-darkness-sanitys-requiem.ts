import type { Port } from "@/lib/ports/schema";

export const EternalDarknessSanitysRequiem: Port = {
  schema: "port",
  id: "eternal-darkness-sanitys-requiem",
  title: "Eternal Darkness: Sanity's Requiem",
  game: "Eternal Darkness: Sanity's Requiem",
  developers: ["psdwizzard"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/psdwizzard/Eternal-Darkness---Decompile"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8d/Eternal_Darkness_box.jpg",
    alt: "Eternal Darkness: Sanity's Requiem (box art)",
    credit: "Wikipedia",
  },
  summary: "Eternal Darkness: Sanity's Requiem is a 2002 horror game developed by Silicon Knights and published by Nintendo for the GameCube. It was produced and directed by Denis Dyack. The game follows the story of several characters across a period of two millennia and four different locations on Earth, as they contend with an ancient evil who seeks to enslave humanity. The gameplay distinguishes itself with unique \"sanity effects\", visual and audial effects that confuse the player and often break the fourth wall.",
  summaryEs: "Eternal Darkness: Sanity's Requiem es un videojuego del género terror psicológico para la plataforma Nintendo GameCube, desarrollado por Silicon Knights. Fue lanzado el 24 de junio de 2002.",
  notes:
    "Matching decompilation of Eternal Darkness: Sanity's Requiem (GEDE01) — dtk/objdiff pipeline.",
  notesEs: "Decompilación que coincide de Eternal Darkness: Sanity's Requiem (GEDE01).",
};
