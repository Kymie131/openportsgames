import type { Port } from "@/lib/ports/schema";

export const eternalSonataReprise: Port = {
  schema: "port",
  id: "eternal-sonata-reprise",
  title: "Eternal Sonata: Reprise",
  game: "Eternal Sonata",
  developers: ["birabittoh"],
  publisher: "Bandai Namco",
  originalYear: 2007,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/birabittoh/EternalSonataReprise"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Eternal Sonata is a role-playing video game developed by tri-Crescendo and published by Bandai Namco Games. The game was originally released on Xbox 360 in 2007, followed by an expanded version releasing on PlayStation 3 the following year.",
  summaryEs: "Eternal Sonata —conocido en Japón como Trusty Bell: Chopin's Dream —, es un videojuego de rol creado por tri-Crescendo. La versión de Xbox 360 fue lanzado el 14 de junio de 2007 en Japón, 17 de septiembre de 2007 en Norteamérica, y 19 de octubre de 2007 en Europa. El juego también fue lanzado para PlayStation 3 el 18 de septiembre de 2008 en Japón, y el 21 de octubre de 2008 en Norteamérica con el contenido adicional Trusty Bell: Chopin's Dream - Reprise . En Europa fue lanzado con el nombre original Eternal Sonata el 13 de febrero de 2009.",
  notes:
    "Static recompilation of Eternal Sonata (Xbox 360) with ReXGlue. It converts the PPC executable to native x86_64 and wraps it in a small host runtime with overlays and hooks for mods; builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Recompilación estática de Eternal Sonata (Xbox 360) con ReXGlue. Convierte el ejecutable PPC en código x86_64 nativo y lo envuelve en un runtime propio con overlays y hooks para mods; builds para Windows, Linux, macOS y Android.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/aa/Eternal_Sonata.jpg",
    alt: "Eternal Sonata (box art)",
    credit: "Wikipedia",
  },
};
