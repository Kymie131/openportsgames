import type { Port } from "@/lib/ports/schema";

export const ResidentEvil4: Port = {
  schema: "port",
  id: "resident-evil-4",
  title: "Resident Evil 4",
  game: "Resident Evil 4",
  developers: ["adonis-singh"],
  publisher: "Capcom",
  originalYear: 2005,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/adonis-singh/re4"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Resident%20Evil%204%20(Australia)%20(En,Fr,De,Es,It)%20(Bonus%20Disc).png",
    alt: "Resident Evil 4 (box art)",
    credit: "Box art",
  },
  summary: "Resident Evil 4 is a 2005 survival horror game developed and published by Capcom for the GameCube. Players control the special agent Leon S. Kennedy on a mission to rescue the president of the United States's daughter, Ashley Graham, who has been abducted by a religious cult in rural Spain. Leon fights hordes of enemies infected by a mind-controlling parasite and reunites with the female spy and mercenary Ada Wong.",
  summaryEs: "Resident Evil 4 — conocido en Japón como Biohazard 4 — es un videojuego de acción-aventura de disparos en tercera persona de terror y supervivencia desarrollado y publicado por Capcom para la GameCube. Los jugadores controlan al agente especial Leon S. Kennedy en una misión para rescatar a la hija del presidente estadounidense, Ashley Graham, que ha sido secuestrada por una secta religiosa en la España rural. Leon lucha contra hordas de enemigos infectados por un parásito que controla la mente y se reúne con la espía Ada Wong.",
  notes:
    "Resident Evil 4 (GameCube, G4BE08 debug build) — complete byte-identical decompilation to C/C++.",
  notesEs:
    "Resident Evil 4 (GameCube, build de depuración G4BE08): decompilación completa byte a byte a C/C++.",
};
