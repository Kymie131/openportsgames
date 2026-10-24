import type { Port } from "@/lib/ports/schema";

export const renut: Port = {
  schema: "port",
  id: "renut",
  title: "reNut",
  game: "Banjo-Kazooie: Nuts & Bolts",
  developers: ["masterspike52"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/masterspike52/reNut"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Banjo-Kazooie: Nuts & Bolts is a 2008 platform game developed by Rare and published by Microsoft Game Studios for the Xbox 360. Set eight years after Banjo-Tooie (2000), Nuts & Bolts follows the bear-and-bird duo Banjo & Kazooie as they compete with the witch Gruntilda for ownership of their home. Although Nuts & Bolts retains the structure of previous Banjo-Kazooie games—collecting jigsaw puzzle pieces to progress—it shifts the focus from exploration to vehicle construction.",
  summaryEs: "Banjo-Kazooie: Nuts & Bolts es un juego CMS y una plataforma de la serie de videojuegos Banjo-Kazooie, de la compañía de juegos inglesa Rare. Fue anunciado por primera vez en la demostración de la Xbox 360. Es el quinto juego de la serie, pero es el tercero que es una aventura completa en una consola de sobremesa. Está situado 8 años después de Banjo-Tooie. También es el primer juego de la serie no afiliado a Nintendo.",
  notes:
    "Native recompilation of Banjo-Kazooie: Nuts & Bolts (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Banjo-Kazooie: Nuts & Bolts (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/Banjo-Kazooie_Nuts_%26_Bolts_Game_Cover.jpg",
    alt: "Banjo-Kazooie: Nuts & Bolts (box art)",
    credit: "Wikipedia",
  },
};
