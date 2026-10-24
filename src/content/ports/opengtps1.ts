import type { Port } from "@/lib/ports/schema";

export const openGtps1: Port = {
  schema: "port",
  id: "opengtps1",
  title: "OpenGTPS1",
  game: "Gran Turismo 2",
  developers: ["GTTeancum"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/OpenGTPS1"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Gran Turismo 2 is a 1999 sim racing video game developed by Polyphony Digital and published by Sony Computer Entertainment for the PlayStation. It is the sequel to Gran Turismo, the second installment of the Gran Turismo series, and the first video game to be developed by Polyphony Digital.",
  summaryEs: "Gran Turismo 2 es un videojuego de carreras para la PlayStation de Sony. Gran Turismo 2 fue desarrollado por Polyphony Digital y publicado por Sony Computer Entertainment en 1999. Es la secuela de Gran Turismo. Fue bien recibido de forma pública y crítica, con 1.71 millones de copias en Japón, 20.000 en el sudeste asiático, 3.96 millones en América del Norte y 3.68 millones en Europa por un total de 9.37 millones de copias al 30 de abril de 2008, y, finalmente, convertirse en un juego de Sony Greatest Hits. El título recibió un promedio de 93% en el agregado de Metacritic.",
  notes:
    "Native recompilation of Gran Turismo 2 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Gran Turismo 2 (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/GTTeancum/OpenGTPS1/main/docs/images/opengtps1-0.9b-seattle-circuit.png",
      alt: "Seattle Circuit in OpenGTPS1",
      credit: "OpenGTPS1",
    },
    {
      src: "https://raw.githubusercontent.com/GTTeancum/OpenGTPS1/main/docs/images/opengtps1-0.9b-red-rock-grid.png",
      alt: "Red Rock Valley grid in OpenGTPS1",
      credit: "OpenGTPS1",
    },
    {
      src: "https://raw.githubusercontent.com/GTTeancum/OpenGTPS1/main/docs/images/opengtps1-0.9b-midfield-raceway.png",
      alt: "Midfield Raceway in OpenGTPS1",
      credit: "OpenGTPS1",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6b/GranTurismo2.jpg",
    alt: "Gran Turismo 2 (box art)",
    credit: "Wikipedia",
  },
};
