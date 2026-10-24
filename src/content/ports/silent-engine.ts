import type { Port } from "@/lib/ports/schema";

export const silentEngine: Port = {
  schema: "port",
  id: "silent-engine",
  title: "Silent Engine",
  game: "Silent Hill",
  developers: ["Sezzary"],
  publisher: "Konami",
  originalYear: 1999,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Sezzary/SilentEngine"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Silent Hill is a 1999 survival horror video game developed by Konami's Team Silent and published by Konami for the PlayStation. It is the first installment in the Silent Hill video game series. The game follows Harry Mason as he searches for his missing adopted daughter in the eponymous fictional American town of Silent Hill. Stumbling upon a cult conducting a rite to revive a deity it worships, he discovers her true origin. Five game endings are possible, depending on the actions taken by the player, including one joke ending.",
  summaryEs: "Silent Hill es un videojuego de terror y supervivencia desarrollado por Team Silent y publicado por Konami, un grupo de Konami Computer Entertainment Tokyo. Fue lanzado para PlayStation en Norteamérica en enero de 1999, y en Japón y Europa más tarde ese mismo año. Silent Hill emplea una cámara en tercera persona y entornos tridimensionales en tiempo real; los desarrolladores usaron niebla y oscuridad para disfrazar las limitaciones del hardware.",
  notes:
    "Hand-written native engine for Silent Hill, developed by a contributor to the decompilation project as a non-AI alternative to the AI-assisted PC port. It runs the game natively on PC and requires a copy of the game. An independent project from the other Silent Hill PC port in the catalog.",
  notesEs:
    "Motor nativo escrito a mano para Silent Hill, desarrollado por un contribuidor del proyecto de decompilación como alternativa sin IA al port de PC asistido por IA. Ejecuta el juego de forma nativa en PC y requiere una copia del juego. Es un proyecto independiente del otro port de Silent Hill para PC del catálogo.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Silent%20Hill%20(USA).png",
    alt: "Silent Hill (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Silent%20Hill%20(USA).png",
      alt: "Silent Hill (screenshot)",
      credit: "Libretro",
    },
  ],
};
