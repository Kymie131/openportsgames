import type { Port } from "@/lib/ports/schema";

export const theDarknessEstacado: Port = {
  schema: "port",
  id: "the-darkness-estacado",
  title: "Estacado",
  game: "The Darkness",
  developers: ["invinceble55-wq"],
  publisher: "2K Games",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/invinceble55-wq/Estacado-The-Darkness-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["the-darkness-recomp"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Darkness_cover.jpg",
    alt: "The Darkness (box art)",
    credit: "Wikipedia",
  },
  summary: "The Darkness is a first-person shooter video game developed by Starbreeze Studios and published by 2K for the PlayStation 3 and Xbox 360 consoles. The game was released in 2007 in North America and Europe and it is based on The Darkness comic book series published by Top Cow Productions. A sequel titled The Darkness II was released in 2012.",
  summaryEs: "The Darkness puede designar a:The Darkness, banda de hard rock de Reino Unido. The Darkness, serie de cómics creada por Top Cow Productions. The Darkness, videojuego de acción y terror psicológico desarrollado por Starbreeze Studios. The Darkness II, secuela del videojuego The Darkness. The Darkness, película de terror de 2016 dirigida por Greg McLean y protagonizada por Kevin Bacon.",
  notes:
    "Estacado: a native PC recompilation of The Darkness (Xbox 360, 2007), separate from the other The Darkness project in the catalog. The game's PowerPC code is translated to C++ and runs on Windows with a Direct3D 12 layer (ReXGlue + XenonRecomp). Free, non-commercial fan project; no game data included. Pre-release, tested only on one Windows 11 + NVIDIA RTX PC. Latest release: v0.9.8.",
  notesEs:
    "Estacado: recompilación nativa para PC de The Darkness (Xbox 360, 2007), distinta del otro proyecto de The Darkness del catálogo. El código PowerPC se traduce a C++ y corre en Windows con una capa Direct3D 12 (ReXGlue + XenonRecomp). Proyecto fan gratuito y no comercial; sin datos del juego. Pre-release, probado solo en un PC Windows 11 con NVIDIA RTX. Última release: v0.9.8.",
};
