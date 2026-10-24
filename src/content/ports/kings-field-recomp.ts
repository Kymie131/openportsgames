import type { Port } from "@/lib/ports/schema";

export const kingsFieldRecomp: Port = {
  schema: "port",
  id: "kings-field-recomp",
  title: "verdite1",
  game: "King's Field",
  developers: ["Voicedrew11"],
  publisher: "FromSoftware",
  originalYear: 1994,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Voicedrew11/verdite1"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "King's Field is a 1994 action role-playing game developed and published by FromSoftware for the PlayStation. It was FromSoftware's debut video game project after developing business software for eight years, as well as the first game in what would become the King's Field series; this first title was only released in Japan, with the follow-up, King's Field II (1995) releasing globally as simply King's Field. In the game, the player navigates a vast underground labyrinth to discover the source of an invasion of monsters.",
  summaryEs: "King's Field es un videojuego de rol (RPG) en primera persona desarrollado y publicado por FromSoftware para PlayStation en diciembre de 1994. Es el primer título de la serie King's Field, y en él los jugadores deben recorrer un vasto laberinto subterráneo para descubrir el origen de una invasión de monstruos. El ataque y el uso de hechizos están ligados a un medidor de resistencia, que se agota con cada acción y debe rellenarse antes de que el jugador pueda volver a actuar.",
  notes:
    "Native recompilation of King's Field (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de King's Field (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/King's%20Field%20(USA).png",
    alt: "King's Field (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/King's%20Field%20(USA).png",
      alt: "King's Field (screenshot)",
      credit: "Libretro",
    },
  ],
};
