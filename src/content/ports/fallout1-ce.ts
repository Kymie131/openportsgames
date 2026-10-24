import type { Port } from "@/lib/ports/schema";

export const fallout1Ce: Port = {
  schema: "port",
  id: "fallout1-ce",
  title: "Fallout Community Edition",
  game: "Fallout",
  developers: ["Interplay Productions"],
  publisher: "Interplay Productions",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.1.0", date: "2024-03-03" },
  sources: ["https://github.com/alexbatalov/fallout1-ce"],
  license: {
    spdx: "NOASSERTION",
    note: "project states it derives from a public domain release of the Fallout source",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  summary: "Fallout is an American media franchise of post-apocalyptic role-playing video games created by Tim Cain and Leonard Boyarsky, at Interplay Entertainment. The series, set in the first half of the 3rd millennium, follows the descendants of survivors of a mutually destructive nuclear exchange between the United States and China that marked the culmination of a series of conflicts over resources which began in the middle of the 21st century.",
  summaryEs: "Fallout es una serie de videojuegos de rol publicados originalmente por Interplay, posteriormente por Bethesda Softworks y actualmente por Xbox Game Studios. Aunque las tramas de los videojuegos se desarrollan en los siglos XXII y XXIII, prevalece una gran influencia de la cultura de posguerra desarrollada en los años 1950 en Estados Unidos, así como la combinación de esperanza y progreso tecnológico, junto con el miedo a la aniquilación nuclear y los efectos de una tercera guerra mundial a finales del siglo XXI y posterior.",
  notes:
    "Community engine for Fallout rebuilt for modern operating systems. Requires the original Fallout game files.",
  notesEs:
    "Motor comunitario de Fallout adaptado a sistemas operativos modernos. Requiere los archivos del juego original de Fallout.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/af/Fallout.jpg",
    alt: "Fallout (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
