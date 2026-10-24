import type { Port } from "@/lib/ports/schema";

export const lighthouseVita: Port = {
  schema: "port",
  id: "lighthouse-vita",
  title: "Lighthouse (PS Vita)",
  game: "Banjo-Kazooie",
  developers: ["Rinnegatamante"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rinnegatamante/Lighthouse"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Banjo-Kazooie is a 1998 platform game developed by Rare and published by Nintendo for the Nintendo 64. Controlling the player characters, the bear Banjo and the bird Kazooie, the player attempts to save Banjo's kidnapped sister Tooty from the witch Gruntilda. The player explores nine nonlinear worlds to gather items and progress. Using Banjo and Kazooie's traversal and combat abilities, they complete challenges such as solving puzzles, jumping over obstacles, and defeating bosses.",
  summaryEs: "Banjo-Kazooie es un videojuego de plataformas de 1998 desarrollado por la compañía británica Rare y publicado por Nintendo para Nintendo 64. Controlando a los personajes, el oso Banjo y el pájaro Kazooie, el jugador intenta salvar a la hermana secuestrada de Banjo, Tooty, de la bruja Gruntilda. Se puede explorar nueve mundos no lineales para reunir elementos y progresar. Usando las habilidades transversales y de combate de Banjo y Kazooie, completan desafíos como resolver acertijos, saltar obstáculos y derrotar a jefes.",
  notes:
    "PlayStation Vita port of Lighthouse, the native Banjo-Kazooie decompilation. Requires your own ROM.",
  notesEs:
    "Port para PlayStation Vita de Lighthouse, la decompilación nativa de Banjo-Kazooie. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/7c220a2091c26a7f5e9f1cfb099511e3.png",
    alt: "Banjo-Kazooie (cover)",
    credit: "SteamGridDB",
  },
};
