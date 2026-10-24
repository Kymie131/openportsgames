import type { Port } from "@/lib/ports/schema";

export const theForceEngineVr: Port = {
  schema: "port",
  id: "the-force-engine-vr",
  title: "The Force Engine VR",
  game: "Star Wars: Dark Forces",
  developers: ["SoVRHere"],
  publisher: "LucasArts",
  originalYear: 1995,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SoVRHere/TheForceEngineVR"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Star Wars: Dark Forces is a first-person shooter video game developed and published by LucasArts. It was released in 1995 for MS-DOS and Macintosh, and in 1996 for the PlayStation. The story is set in the Star Wars expanded universe and begins shortly before the original Star Wars film, before flashing forward to a year after the film's events.",
  summaryEs: "Star Wars: Dark Forces fue el primer FPS basado en el universo de Star Wars y uno de los primeros videojuegos en comercializarse en formato CD-ROM por las secuencias de video que incorporaba, que ocupaban un considerable tamaño para la época.",
  notes:
    "VR-oriented build of The Force Engine (a Jedi Engine replacement) that supports Dark Forces and its mods on Android. It needs the original game.",
  notesEs:
    "Build orientada a RV de The Force Engine (un reemplazo del Jedi Engine) que soporta Dark Forces y sus mods en Android. Necesita el juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4f/Dark_Forces_box_cover.jpg",
    alt: "Star Wars: Dark Forces (box art)",
    credit: "Wikipedia",
  },
};
