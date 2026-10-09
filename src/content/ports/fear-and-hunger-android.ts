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
    "Android version of Fear & Hunger that runs the game without an emulator. It is a community port distributed as an app and needs your own copy of the game.",
  notesEs:
    "Versión para Android de Fear & Hunger que ejecuta el juego sin emulador. Es un port comunitario distribuido como app y necesita tu propia copia del juego.",
};
