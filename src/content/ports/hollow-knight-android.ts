import type { Port } from "@/lib/ports/schema";

export const hollowKnightAndroid: Port = {
  schema: "port",
  id: "hollow-knight-android",
  title: "Hollow Knight (Android)",
  game: "Hollow Knight",
  developers: ["igawa6"],
  publisher: "Team Cherry",
  originalYear: 2017,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/igawa6/dualsouls"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Hollow Knight is a 2017 Metroidvania video game developed and published by Australian independent development studio Team Cherry. The player controls a nameless insectoid warrior in exploring Hallownest, a fallen kingdom plagued by a supernatural disease. The game is set in diverse subterranean locations, featuring friendly and hostile insectoid characters and numerous bosses. Players have the opportunity to unlock abilities as they explore, along with pieces of lore and flavour text that are spread throughout the kingdom.",
  summaryEs: "Hollow Knight es un videojuego perteneciente al género metroidvania. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017. La adaptación para Nintendo Switch fue lanzada el 12 de junio de 2018. El desarrollo fue parcialmente financiado como un proyecto Kickstarter que obtuvo 57 000 dólares hasta finales de 2014. El juego fue lanzado en las consolas PlayStation 4 y Xbox One el 25 de septiembre de 2018.",
  notes:
    "Unofficial Android port of Hollow Knight with dual-screen support, aimed at handhelds. It needs the game itself.",
  notesEs:
    "Port no oficial para Android de Hollow Knight con soporte de doble pantalla, pensado para consolas portátiles. Necesita el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/de/Hollow_Knight_2026_cover_art.jpg",
    alt: "Hollow Knight (box art)",
    credit: "Wikipedia",
  },
};
