import type { Port } from "@/lib/ports/schema";

export const carmageddonRecomp: Port = {
  schema: "port",
  id: "carmageddon-recomp",
  title: "Carmageddon (Dethrace)",
  game: "Carmageddon",
  developers: ["dethrace-labs"],
  publisher: "Interplay Entertainment",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dethrace-labs/dethrace"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Carmageddon is a vehicular combat video game released for PC in 1997. It was produced by Stainless Games and published by Interplay Productions and Sales Curve Interactive. It was ported to other platforms, and spawned a series.",
  summaryEs: "Carmageddon es un videojuego de combate en vehículos creado en 1997 que destacó por incluir una proporción importante de violencia en su modo de juego. El juego tiene como misión principal acabar la carrera o destrozar los coches de los contrarios, no obstante la matanza de peatones es un aliciente. En su época sufrió duras críticas que irónicamente lo llevaron a los primeros puestos de ventas. El juego fue producido por Stainless Software y publicado por Interplay y Sales Curve Interactive (SCi).",
  notes:
    "Reverse-engineered reimplementation of Carmageddon (1997) that runs the original game data on modern systems. It needs your own copy of the game.",
  notesEs:
    "Reimplementación por ingeniería inversa de Carmageddon (1997) que ejecuta los datos del juego original en sistemas modernos. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Carmageddon_box.jpg",
    alt: "Carmageddon (cover)",
    credit: "Wikipedia",
  },
};
