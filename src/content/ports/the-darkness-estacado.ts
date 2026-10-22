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
  notes:
    "Estacado: a native PC recompilation of The Darkness (Xbox 360, 2007), separate from the other The Darkness project in the catalog. The game's PowerPC code is translated to C++ and runs on Windows with a Direct3D 12 layer (ReXGlue + XenonRecomp). Free, non-commercial fan project; no game data included. Pre-release, tested only on one Windows 11 + NVIDIA RTX PC. Latest release: v0.9.8.",
  notesEs:
    "Estacado: recompilación nativa para PC de The Darkness (Xbox 360, 2007), distinta del otro proyecto de The Darkness del catálogo. El código PowerPC se traduce a C++ y corre en Windows con una capa Direct3D 12 (ReXGlue + XenonRecomp). Proyecto fan gratuito y no comercial; sin datos del juego. Pre-release, probado solo en un PC Windows 11 con NVIDIA RTX. Última release: v0.9.8.",
};
