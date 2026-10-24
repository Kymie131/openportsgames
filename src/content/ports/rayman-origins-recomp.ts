import type { Port } from "@/lib/ports/schema";

export const raymanOriginsRecomp: Port = {
  schema: "port",
  id: "rayman-origins-recomp",
  title: "Rayman Origins Recompiled",
  game: "Rayman Origins",
  developers: ["XDanfr"],
  publisher: "Ubisoft",
  originalYear: 2011,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/XDanfr/RaymanOriginsRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Rayman Origins is a 2011 platform game developed and published by Ubisoft. It is the fourth main installment in the Rayman series and the first main installment following Rayman 3: Hoodlum Havoc (2003). The game was released for the PlayStation 3, Xbox 360, and Wii platforms worldwide, with PlayStation Vita, Nintendo 3DS, and Microsoft Windows versions being released the following year. The OS X version of the game was released on December 12, 2013, by Feral Interactive.",
  summaryEs: "Rayman Origins es un videojuego de plataformas desarrollado por Ubisoft Montpellier y publicado por Ubisoft para las consolas PlayStation 3, Wii, Xbox 360, Nintendo 3DS y PlayStation Vita. Posteriormente salió también una versión para Microsoft Windows. La historia sigue a Rayman, su amigo Globox y a dos Diminutos en su lucha contra los Darktoons y otras criaturas malvadas que han infectado el Claro de los sueños.",
  notes:
    "Static recompilation of Rayman Origins (Xbox 360) for Nintendo Switch, built with XenonRecomp. It requires the game itself.",
  notesEs:
    "Recompilación estática de Rayman Origins (Xbox 360) para Nintendo Switch, con XenonRecomp. Requiere el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7f/Rayman_Origins_Box_Art.jpg",
    alt: "Rayman Origins (box art)",
    credit: "Wikipedia",
  },
};
