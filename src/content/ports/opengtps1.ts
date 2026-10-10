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
  originalSystem: "PlayStation",
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
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Gran%20Turismo%202%20(USA)%20(Rev%201).png",
    alt: "Gran Turismo 2 (box art)",
    credit: "Box art",
  },
};
