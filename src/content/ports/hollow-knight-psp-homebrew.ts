import type { Port } from "@/lib/ports/schema";

export const hollowKnightPspHomebrew: Port = {
  schema: "port",
  id: "hollow-knight-psp-homebrew",
  title: "Hollow Knight (PSP, homebrew)",
  game: "Hollow Knight",
  developers: ["lkawf"],
  publisher: "Team Cherry",
  originalYear: 2017,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://lkawf.itch.io/hollow-knight-on-psp"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/de/Hollow_Knight_2026_cover_art.jpg",
    alt: "Hollow Knight (box art)",
    credit: "Wikipedia",
  },
  summary: "Hollow Knight is a 2017 Metroidvania video game developed and published by Australian independent development studio Team Cherry. The player controls a nameless insectoid warrior in exploring Hallownest, a fallen kingdom plagued by a supernatural disease. The game is set in diverse subterranean locations, featuring friendly and hostile insectoid characters and numerous bosses. Players have the opportunity to unlock abilities as they explore, along with pieces of lore and flavour text that are spread throughout the kingdom.",
  summaryEs: "Hollow Knight es un videojuego perteneciente al género metroidvania. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017. La adaptación para Nintendo Switch fue lanzada el 12 de junio de 2018. El desarrollo fue parcialmente financiado como un proyecto Kickstarter que obtuvo 57 000 dólares hasta finales de 2014. El juego fue lanzado en las consolas PlayStation 4 y Xbox One el 25 de septiembre de 2018.",
  notes:
    "Hollow Knight (Team Cherry, 2017) running on PlayStation Portable through source port. You need your own copy of the game.",
  notesEs:
    "Hollow Knight (Team Cherry, 2017) en PlayStation Portable mediante port de código. Necesitas tu propia copia del juego.",
};
