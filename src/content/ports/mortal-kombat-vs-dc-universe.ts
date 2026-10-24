import type { Port } from "@/lib/ports/schema";

export const MortalKombatVsDcUniverse: Port = {
  schema: "port",
  id: "mortal-kombat-vs-dc-universe",
  title: "Mortal Kombat vs. DC Universe",
  game: "Mortal Kombat vs. DC Universe",
  developers: ["KawaiiBunga"],
  publisher: "Midway Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/KawaiiBunga/MKVDCU-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Mortal_Kombat_vs._DC_Universe_Coverart.png",
    alt: "Mortal Kombat vs. DC Universe (box art)",
    credit: "Wikipedia",
  },
  summary: "Mortal Kombat vs. DC Universe is a 2008 crossover fighting game developed and published by Midway Games for the PlayStation 3 and Xbox 360. The game is a crossover between Mortal Kombat and the DC Universe, and is the eighth main installment in the Mortal Kombat franchise. The game was released on November 16, 2008.",
  summaryEs: "Mortal Kombat vs. DC Universe es un videojuego de peleas que junta las franquicias de Mortal Kombat y DC Comics, fue desarrollado por Midway Games —siendo este su último proyecto, ya que la compañía entró en bancarrota poco después— y por Warner Bros. Interactive. Es el primer título de la franquicia Mortal Kombat que solo se encuentra disponible para consolas de séptima generación. Salió a la venta 16 de noviembre de 2008 para las plataformas de Xbox 360 y PlayStation 3, posee dos bandos con 11 personajes cada uno, 22 en total.",
  notes: "An unofficial port of Mortal Kombat vs. DC Universe to PC (More platforms coming).",
  notesEs:
    "Un port no oficial de Mortal Kombat vs. DC Universe a PC (más plataformas próximamente).",
};
