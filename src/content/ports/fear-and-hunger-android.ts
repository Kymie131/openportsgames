import type { Port } from "@/lib/ports/schema";

export const fearAndHungerAndroid: Port = {
  schema: "port",
  id: "fear-and-hunger-android",
  title: "Fear & Hunger (Android)",
  game: "Fear & Hunger",
  developers: ["Chokage"],
  publisher: "Miro Haverinen",
  originalYear: 2018,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Chokage/Fear-And-Hunger-Android-Application"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Fear & Hunger is a 2018 survival horror role-playing video game developed by Miro Haverinen and published by Happy Paintings. It was released on 11 December 2018 for Windows, macOS, and Linux. The game is set in an alternate history medieval dark fantasy setting and follows four characters, one of whom the player chooses as a playable protagonist. Their goal is to find a man named Le'garde inside the labyrinthine, deadly Dungeons of Fear and Hunger, where monsters and gods dwell.",
  summaryEs: "Fear & Hunger es un videojuego de rol creado por Miro Haverinen en 2018 que combina elementos de survival horror y simulación inmersiva. Se desarrolla en un entorno moderno temprano de fantasía oscura y sigue a uno de los cuatro personajes jugables mientras se adentra en las Mazmorras del Miedo y el Hambre, enfrentándose a trampas mortales, acertijos y monstruos a medida que avanzan hacia las profundidades para rescatar al líder mercenario Le'garde.",
  notes:
    "Android version of Fear & Hunger that runs the game without an emulator. It is a community port distributed as an app and needs a copy of the game.",
  notesEs:
    "Versión para Android de Fear & Hunger que ejecuta el juego sin emulador. Es un port comunitario distribuido como app y necesita una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Fear_%26_Hunger.jpg",
    alt: "Fear & Hunger (box art)",
    credit: "Wikipedia",
  },
};
