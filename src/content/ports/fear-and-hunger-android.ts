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
  originalSystem: "Microsoft Windows",
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
