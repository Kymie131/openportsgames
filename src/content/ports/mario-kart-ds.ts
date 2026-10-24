import type { Port } from "@/lib/ports/schema";

export const MarioKartDs: Port = {
  schema: "port",
  id: "mario-kart-ds",
  title: "Mario Kart DS",
  game: "Mario Kart DS",
  developers: ["XorTroll"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/XorTroll/mkds-re"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo DS"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/86/Mario_Kart_DS_cover.jpg",
    alt: "Mario Kart DS (box art)",
    credit: "Wikipedia",
  },
  summary: "Mario Kart DS is a 2005 kart racing game developed and published by Nintendo for the Nintendo DS. Like other games in the Mario Kart series, Mario Kart DS features characters from the Mario series and pits them against each other as they race in karts on tracks based on locations from the Mario series. It was released in November 2005 in North America, Europe, and Australia, and in December 2005 in Japan, and re-released for the Wii U's Virtual Console in North America and PAL regions in April 2015 and in Japan in May 2016.",
  summaryEs: "Mario Kart DS es un videojuego de carreras de karts desarrollado y publicado por Nintendo para la consola portátil Nintendo DS. Al igual que otros títulos de la serie, cuenta con personajes de la saga Mario y los enfrenta entre sí en competiciones por circuitos inspirados en escenarios de la franquicia. Salió a la venta en noviembre de 2005 en Norteamérica, Europa y Australia, y el 8 de diciembre en Japón, y lo relanzaron para la Consola Virtual de Wii U en Estados Unidos y las regiones PAL en abril de 2015 y en Japón en mayo de 2016.",
  notes: "Mario Kart DS (EU) reverse-engineering work: ASM-hacking and other tools.",
  notesEs:
    "Trabajo de ingeniería inversa de Mario Kart DS (EU): hacking de ASM y otras herramientas.",
};
