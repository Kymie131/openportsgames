import type { Port } from "@/lib/ports/schema";

export const legendOfDragoonSeveredChains: Port = {
  schema: "port",
  id: "legend-of-dragoon-severed-chains",
  title: "Severed Chains (The Legend of Dragoon)",
  game: "The Legend of Dragoon",
  developers: ["Legend-of-Dragoon-Modding"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: [
    "https://github.com/Legend-of-Dragoon-Modding/Severed-Chains",
    "https://legendofdragoon.org/projects/severed-chains/",
  ],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "The Legend of Dragoon is a role-playing video game developed and published by Sony Computer Entertainment for the PlayStation. It was released in December 1999 in Japan, June 2000 in North America, and January 2001 in Europe. Set in a high fantasy fictional world called Endiness, the game follows a group of warriors led by the protagonist, Dart, as they attempt to stop the destruction of the world. The player controls a party of three-dimensional (3D) character models through pre-rendered, linear environments. Combat uses a combination of turn-based mechanics and real-time commands.",
  summaryEs: "The Legend of Dragoon es un videojuego de rol desarrollado y publicado por SCEI para PlayStation. Fue lanzado el 2 de diciembre de 1999 en Japón, en Norteamérica el 11 de junio de 2000 y en Europa el 19 de enero de 2001.",
  notes:
    "The Legend of Dragoon reverse engineered into high-level code with a modding API: not an emulator, the original assembly was disassembled and rewritten in Java. It is fully playable with no known crashes and fixes many bugs from the original. The README states AI was not used. Release release-3.0.0 ships Windows, Linux, macOS and Steam Deck builds.",
  notesEs:
    "The Legend of Dragoon reescrito a código de alto nivel con una API de modding: no es un emulador, el ensamblador original se desensambló y se reescribió en Java. Es totalmente jugable sin cierres conocidos y corrige muchos errores del original. El README afirma que no se usó IA. La release release-3.0.0 publica builds para Windows, Linux, macOS y Steam Deck.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/32/Legend_of_Dragoon.jpg",
    alt: "The Legend of Dragoon (box art)",
    credit: "Wikipedia",
  },
};
