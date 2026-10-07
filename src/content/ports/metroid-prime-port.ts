import type { Port } from "@/lib/ports/schema";

export const metroidPrimePort: Port = {
  schema: "port",
  id: "metroid-prime-port",
  title: "Metroid Prime Native Port",
  game: "Metroid Prime",
  developers: ["Odrannnn"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Odrannnn/MetroidPrimePort"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Decompilation-based native port of Metroid Prime (GameCube). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Metroid Prime (GameCube). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Metroid%20Prime%20(USA).png",
    alt: "Metroid Prime (box art)",
    credit: "Box art",
  },
};
