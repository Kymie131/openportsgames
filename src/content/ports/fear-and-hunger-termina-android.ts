import type { Port } from "@/lib/ports/schema";

export const fearAndHungerTerminaAndroid: Port = {
  schema: "port",
  id: "fear-and-hunger-termina-android",
  title: "Fear & Hunger 2: Termina (Android)",
  game: "Fear & Hunger 2: Termina",
  developers: ["Chokage"],
  publisher: "Miro Haverinen",
  originalYear: 2022,
  portType: "runtime-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Chokage/Fear-and-Hunger-2-Termina-Mobile"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Ongoing community project to bring Fear & Hunger 2: Termina to Android. It runs the game without an emulator and needs your own copy.",
  notesEs:
    "Proyecto comunitario en curso para llevar Fear & Hunger 2: Termina a Android. Ejecuta el juego sin emulador y necesita tu propia copia.",
};
