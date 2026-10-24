import type { Port } from "@/lib/ports/schema";

export const virtuaFighter2Recomp: Port = {
  schema: "port",
  id: "virtua-fighter-2-recomp",
  title: "Virtua Fighter 2 Recomp",
  game: "Virtua Fighter 2",
  developers: ["mr-finster"],
  publisher: "Sega",
  originalYear: 1994,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mr-finster/vf2-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Arcade"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/01/Virtua-fighter-2-box.jpg",
    alt: "Virtua Fighter 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Virtua Fighter 2 is a 1994 fighting game developed and published by Sega for arcades. It is the second game in the Virtua Fighter series and the sequel to Virtua Fighter (1993). Created by Sega's Yu Suzuki-headed AM2 team, it was designed on the purpose-made Sega Model 2 hardware, which provided a significant upgrade in graphical capabilities. Following its release in arcades, Virtua Fighter 2 was ported to the Sega Saturn in November 1995, while ports for other platforms appeared later.",
  summaryEs: "Virtua Fighter 2 es un juego de lucha desarrollado por Sega. Es la secuela de Virtua Fighter y el segundo juego de la serie Virtua Fighter. El juego fue creado por AM2 durante el mandato de Yu Suzuki y lanzado al mercado Arcade en 1994. Fue convertido a Sega Saturn en 1995 y a Microsoft Windows en 1997. En 1996 se lanzó en Arcades una versión con personajes deformados llamada Virtua Fighter Kids, convertido a Sega Saturn ese mismo año.",
  notes:
    "Virtua Fighter 2 (Sega, arcade, Model 2, 1994) as a native PC game: the arcade's i960 program is recompiled to native code, with render scales up to 6x, widescreen and smooth motion at any refresh rate. Bring your own vf2.zip. Latest release: v0.1.9.",
  notesEs:
    "Virtua Fighter 2 (Sega, arcade, Model 2, 1994) como juego nativo de PC: el programa i960 de la recreativa se recompila a código nativo, con escalas de render hasta 6x, widescreen y movimiento fluido a cualquier refresco. Aporta tu propio vf2.zip. Última release: v0.1.9.",
};
