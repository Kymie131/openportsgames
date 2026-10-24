import type { Port } from "@/lib/ports/schema";

export const dinoCrisis2Recomp: Port = {
  schema: "port",
  id: "dino-crisis-2-recomp",
  title: "Dino Crisis 2 Recompiled",
  game: "Dino Crisis 2",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/dino-crisis-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Dino Crisis 2 is a 2000 action-adventure game developed by Capcom Production Studio 4 and published by Capcom for the PlayStation. It is the second installment in the Dino Crisis series, with designer Shu Takumi taking over as game director from Shinji Mikami from the first game. The narrative continues the story of special operative Regina, who must deal with the fallout of a time-distorting event which transports a research base and the surrounding area through time. Regina and team leader Dylan Morton must battle against dinosaurs in order to find a way to get back to the present.",
  summaryEs: "Dino Crisis 2 es un videojuego de terror de acción y aventura, secuela del Dino Crisis original. El juego fue desarrollado por Capcom y lanzado para PlayStation el 13 de septiembre de 2000. El juego fue seguido de otra secuela, Dino Crisis 3, lanzado en 2003 para la Xbox.",
  notes:
    "Recompilation of Dino Crisis 2 (PS1, USA SLUS-01279) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Dino Crisis 2 (PS1, USA SLUS-01279) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/49/Dino_Crisis_2.jpg",
    alt: "Dino Crisis 2 (box art)",
    credit: "Wikipedia",
  },
};
