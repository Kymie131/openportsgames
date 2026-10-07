import type { Port } from "@/lib/ports/schema";

export const animalCrossingPcPort: Port = {
  schema: "port",
  id: "animal-crossing-pc-port",
  title: "Animal Crossing PC Port",
  game: "Animal Crossing",
  developers: ["flyngmt"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/flyngmt/ACGC-PC-Port"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Decompilation-based native port of Animal Crossing (GameCube). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Animal Crossing (GameCube). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Animal%20Crossing%20(USA).png",
    alt: "Animal Crossing (box art)",
    credit: "Box art",
  },
};
