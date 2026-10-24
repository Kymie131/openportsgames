import type { Port } from "@/lib/ports/schema";

export const Turok2SeedsOfEvil: Port = {
  schema: "port",
  id: "turok-2-seeds-of-evil",
  title: "Turok 2: Seeds of Evil",
  game: "Turok 2: Seeds of Evil",
  developers: ["mgrz18"],
  publisher: "Unknown",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mgrz18/turok2-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20(Europe)%20(Demo)%20(Kiosk).png",
    alt: "Turok 2: Seeds of Evil (box art)",
    credit: "Box art",
  },
  summary: "Turok 2: Seeds of Evil is a first-person shooter video game developed by Iguana Entertainment and published by Acclaim Entertainment. It was released for the Nintendo 64 console in 1998 and ported to Microsoft Windows computers in 1999. Seeds of Evil is the second game in the Turok video game series and a sequel to Turok: Dinosaur Hunter. The game follows the story of a Turok and his efforts to stop a powerful alien entity from escaping the confines of his Lightship.",
  summaryEs: "Turok 2: Seeds of Evil es un videojuego de disparos en primera persona para Nintendo 64, Windows 9x y Game Boy Color. Fue lanzado en 1998 y está basado en una serie de cómics de Acclaim Comics, Turok. Fue un juego adelantado a su época, mostrando unos gráficos excelentes, una excelente banda sonora, además de un vasto y creativo arsenal de armas. También fue uno de los primeros juegos de Nintendo 64 en utilizar el aumento de RAM del Expansion Pak, como Star Wars: Rogue Squadron, Top Gear Overdrive y NFL Quarterback Club '99.",
  notes:
    "Work-in-progress decompilation of Turok 2: Seeds of Evil (N64). Stepping stone toward native macOS/Android ports of the Acclaim Studios London engine.",
  notesEs:
    "Decompilación de Turok 2: Seeds of Evil (N64), en desarrollo. Paso previo a ports nativos del motor de Acclaim Studios London.",
};
