import type { Port } from "@/lib/ports/schema";

export const redahm: Port = {
  schema: "port",
  id: "redahm",
  title: "reDAHM",
  game: "Destroy All Humans! Path of the Furon",
  developers: ["masterspike52"],
  publisher: "THQ",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/masterspike52/reDAHM"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Destroy All Humans! Path of the Furon is an action-adventure video game developed by American studio Sandblast Games and published by THQ. The game is set in the 1970s and is the fourth and final installment in the original Destroy All Humans! franchise. It was released December 1, 2008 in North America for the Xbox 360. Path of the Furon expands on the open world format of the previous Destroy All Humans! games, with five open worlds on the ground and in the air to obliterate with weapons and alien powers.",
  summaryEs: "Destroy All Humans! Path of the Furon es un videojuego de acción y aventura desarrollado por el estudio americano Sandblast Games y distribuido por THQ. El juego está ambientado en los años 70 y es la cuarta entrega de la franquicia original de Destroy All Humans!. Fue lanzado el 1 de diciembre de 2008 en Norteamérica para la Xbox 360. Path of the Furon expande el formato del mundo abierto de los juegos anteriores de Destroy All Humans!, con cinco mundos abiertos en tierra y aire para destruir a los enemigos con armas y poderes alienígenas.",
  notes:
    "Native recompilation of Destroy All Humans! Path of the Furon (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Destroy All Humans! Path of the Furon (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Destroy_All_Humans%21_Path_of_the_Furon_cover.jpg",
    alt: "Destroy All Humans! Path of the Furon (box art)",
    credit: "Wikipedia",
  },
};
