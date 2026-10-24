import type { Port } from "@/lib/ports/schema";

export const lookingGlassAlice: Port = {
  schema: "port",
  id: "looking-glass-alice",
  title: "LookingGlass (American McGee's Alice)",
  game: "American McGee's Alice",
  developers: ["skulitom"],
  publisher: "Electronic Arts",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/skulitom/LookingGlass"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "American McGee's Alice is a 2000 third-person dark fantasy action-adventure video game developed by Rogue Entertainment under the direction of designer American McGee and published by Electronic Arts under the EA Games banner. The game was originally released for Windows and Mac OS. Although a planned PlayStation 2 port was cancelled, the game was later released digitally for the PlayStation 3 and Xbox 360 via downloadable content for its sequel.",
  summaryEs: "American McGee's Alice es un videojuego de terror y acción en tercera persona para ordenador lanzado el 6 de diciembre del 2000, y toma lugar en el universo de Alicia en el País de las Maravillas. Fue desarrollado por Rogue Entertainment, diseñado por American McGee y publicado por Electronic Arts. Su banda musical fue compuesta por Chris Vrenna.",
  notes:
    "Rust reimplementation of American McGee's Alice that runs the full campaign on Windows with controller support and modern display options. It is an experimental preview and needs your own game data.",
  notesEs:
    "Reimplementación en Rust de American McGee's Alice que ejecuta la campaña completa en Windows con soporte de mando y opciones de pantalla modernas. Es una preview experimental y necesita tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a9/American_McGee_Alice_cover.png",
    alt: "American McGee's Alice (box art)",
    credit: "Wikipedia",
  },
};
