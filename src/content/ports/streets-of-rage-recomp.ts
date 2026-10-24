import type { Port } from "@/lib/ports/schema";

export const streetsOfRageRecomp: Port = {
  schema: "port",
  id: "streets-of-rage-recomp",
  title: "Streets of Rage Project",
  game: "Streets of Rage",
  developers: ["RuiNelson"],
  publisher: "Sega",
  originalYear: 1991,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RuiNelson/StreetsOfRageProject"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Sega Mega Drive / Genesis"],
  summary: "Streets of Rage is a 1991 beat 'em up video game developed and published by Sega for the Sega Genesis. Players control one of three former police officers turned vigilantes who battle a crime syndicate. It establishes many conventions of the Streets of Rage series, such as two-player cooperative play and an acclaimed techno soundtrack from composer Yuzo Koshiro. It was ported for the Game Gear, Sega CD and Master System and has been rereleased as part of various compilations and on download services.",
  summaryEs: "Streets of Rage, conocido en Japón como Bare Knuckle: Ikari no Tekken , es un videojuego de tipo beat 'em up con scroll lateral publicado por Sega en 1991 para la videoconsola Mega Drive/Genesis. Se trata de la primera entrega de la serie de videojuegos Streets of Rage, que fue seguida por Streets of Rage 2 y Streets of Rage 3. El juego también fue convertido para Game Gear, Mega-CD y Master System. En 2007, el juego fue lanzado para la Consola Virtual de Wii en América del Norte y Europa, y en 2009 fue publicado para iOS a través de la App Store.",
  notes:
    "Native recompilation of Streets of Rage (Sega Mega Drive / Genesis). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Streets of Rage (Sega Mega Drive / Genesis). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Mega%20Drive%20-%20Genesis/Named_Boxarts/Streets%20of%20Rage%20(USA).png",
    alt: "Streets of Rage (box art)",
    credit: "Box art",
  },
};
