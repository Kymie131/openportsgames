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
  release: { version: "1.0.0", date: "2023-11-04" },
  sources: ["https://github.com/Chokage/Fear-and-Hunger-2-Termina-Mobile"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Fear & Hunger is a 2018 survival horror role-playing video game developed by Miro Haverinen and published by Happy Paintings. It was released on 11 December 2018 for Windows, macOS, and Linux. The game is set in an alternate history medieval dark fantasy setting and follows four characters, one of whom the player chooses as a playable protagonist. Their goal is to find a man named Le'garde inside the labyrinthine, deadly Dungeons of Fear and Hunger, where monsters and gods dwell.",
  summaryEs: "Fear & Hunger 2: Termina es un videojuego de rol creado por Miro Haverinen en 2022 como secuela de Fear & Hunger, combinando elementos de survival horror y simulación inmersiva. Se lanzó el 9 de diciembre de 2022 para Steam e Itch.io.",
  notes:
    "Ongoing community project to bring Fear & Hunger 2: Termina to Android. It runs the game without an emulator and needs your own copy.",
  notesEs:
    "Proyecto comunitario en curso para llevar Fear & Hunger 2: Termina a Android. Ejecuta el juego sin emulador y necesita tu propia copia.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/Chokage/Fear-and-Hunger-2-Termina-Mobile/releases/download/v1.0.0/Fear.and.Hunger.2-.Termina.apk",
      size: "1370.6 MB",
    },
  ],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/2171440/header.jpg",
    alt: "Fear & Hunger 2: Termina (cover)",
    credit: "Steam",
  },
};
