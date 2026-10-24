import type { Port } from "@/lib/ports/schema";

export const godOfWarRecomp: Port = {
  schema: "port",
  id: "god-of-war-recomp",
  title: "God of War Recompiled",
  game: "God of War",
  developers: ["KIexster"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/KIexster/god-of-war-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation 2"],
  summary: "God of War is a 2005 action-adventure game developed by Santa Monica Studio and published by Sony Computer Entertainment (SCE). First released for the PlayStation 2 on March 22, 2005, the game is the first installment in the God of War series and the fourth chronologically. Loosely based on Greek mythology, it is set in ancient Greece with vengeance as its central motif. The player controls the protagonist Kratos, a Spartan warrior who serves the Olympian gods.",
  summaryEs: "God of War es un videojuego de acción y aventuras hack and slash desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment para la PlayStation 2. Es la primera entrega de la serie God of War y la tercera cronológicamente. Basado libremente en la mitología griega, está ambientado en la antigua Grecia con la venganza como motivo central. El jugador controla al protagonista Kratos, un guerrero espartano que sirve a los dioses del Olimpo.",
  notes:
    "Static recompilation of God of War (PlayStation 2, NTSC-U SCUS-97399) with PS2Recomp. In development; it needs your own copy of the game.",
  notesEs:
    "Recompilación estática de God of War (PlayStation 2, NTSC-U SCUS-97399) con PS2Recomp. En desarrollo; necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/God_of_War_%282005%29_cover.jpg",
    alt: "God of War (cover)",
    credit: "Wikipedia",
  },
};
