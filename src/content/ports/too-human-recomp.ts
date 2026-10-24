import type { Port } from "@/lib/ports/schema";

export const tooHumanRecomp: Port = {
  schema: "port",
  id: "too-human-recomp",
  title: "Too Human Recomp",
  game: "Too Human",
  developers: ["thextictac"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/thextictac/Too-Human-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Too Human is an action role-playing game developed by Silicon Knights and published by Microsoft Studios. It was released in August 2008 for the Xbox 360. The game's story is a science-fictional futuristic retelling of Norse mythology that portrays the Æsir, the Norse gods, as cybernetically enhanced humans, tasked with protecting mankind from the onslaught of Loki's army of machines. The player takes the role of the Norse god Baldur, who is less cybernetic than the other gods thus being \"too human\".",
  summaryEs: "Too Human es un videojuego desarrollado por la desarrolladora canadiense Silicon Knights. El juego se centra en el futuro de la tecnología y en sus efectos en la humanidad. El juego también es enormemente influenciado por la mitología nórdica. Es el primer episodio de una serie de tres juegos.",
  notes:
    "Native recompilation of Too Human (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Too Human (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/78/Too_Human.jpg",
    alt: "Too Human (box art)",
    credit: "Wikipedia",
  },
};
