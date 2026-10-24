import type { Port } from "@/lib/ports/schema";

export const MarioAndLuigiBowsersInsideStory: Port = {
  schema: "port",
  id: "mario-and-luigi-bowsers-inside-story",
  title: "Mario & Luigi: Bowser's Inside Story",
  game: "Mario & Luigi: Bowser's Inside Story",
  developers: ["istornz"],
  publisher: "Nintendo",
  originalYear: 2009,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/istornz/bowsers-inside-story-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["Nintendo DS"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Mario_%26_Luigi_3_NA_Cover.PNG",
    alt: "Mario & Luigi: Bowser's Inside Story (box art)",
    credit: "Wikipedia",
  },
  summary: "Mario & Luigi: Bowser's Inside Story is a 2009 role-playing video game developed by AlphaDream and published by Nintendo for the Nintendo DS. It is the third game in the Mario & Luigi series, following Partners in Time (2005). It uses the interactive screens of the DS in some of its gameplay mechanics while also introducing several elements that would be used in the series' future gameplay.",
  summaryEs: "Mario & Luigi: Bowser's Inside Story, conocido en España como Mario & Luigi: Viaje al centro de Bowser y en Japón como Mario & Luigi RPG 3!!!, es un videojuego de rol, desarrollado por AlphaDream y publicado por Nintendo para Nintendo DS en 2009. Se trata de la tercera entrega de la serie Mario & Luigi tras Mario & Luigi: Superstar Saga y Mario & Luigi: Compañeros en el Tiempo.",
  notes:
    "A work-in-progress matching decompilation of Mario & Luigi: Bowser's Inside Story (Nintendo DS).",
  notesEs:
    "Decompilación que coincide de Mario & Luigi: Bowser's Inside Story (Nintendo DS), en desarrollo.",
};
