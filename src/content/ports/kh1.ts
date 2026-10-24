import type { Port } from "@/lib/ports/schema";

export const kh1: Port = {
  schema: "port",
  id: "kh1",
  title: "Kingdom Hearts Decompilation",
  game: "Kingdom Hearts",
  developers: ["ethteck"],
  publisher: "Square",
  originalYear: 2002,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/ethteck/kh1"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Kingdom Hearts is a 2002 action role-playing game developed and published by Square for the PlayStation 2. It is the first game in the Kingdom Hearts series and is the result of a collaboration between Square and The Walt Disney Company. An expanded re-release of the game featuring new and additional content, Kingdom Hearts Final Mix, was released exclusively in Japan in December 2002. The Final Mix version of the game was later remastered in high definition and released globally as part of the Kingdom Hearts HD 1.5 Remix collection for the PlayStation 3.",
  summaryEs: "Kingdom Hearts es un videojuego de rol de acción desarrollado y publicado por Squaresoft en el 2002 para la consola Sony PlayStation 2. Kingdom Hearts es el resultado de una colaboración entre Square y The Walt Disney Company. El juego combina personajes y escenarios de los dibujos animados de Disney con los de la saga Final Fantasy, desarrollada por Square. La historia se centra en un joven llamado Sora, quien se adentra en una épica batalla en contra de la oscuridad. A él se le unen el Pato Donald y Goofy, personajes del universo de Mickey Mouse, quienes lo ayudan en su aventura.",
  notes:
    "Decompilation of Kingdom Hearts for the PlayStation 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Kingdom Hearts para PlayStation 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/85/Kingdom_Hearts.jpg",
    alt: "Kingdom Hearts (cover)",
    credit: "Wikipedia",
  },
};
