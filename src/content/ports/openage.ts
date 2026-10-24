import type { Port } from "@/lib/ports/schema";

export const openage: Port = {
  schema: "port",
  id: "openage",
  title: "openage",
  game: "Age of Empires II",
  developers: ["Ensemble Studios"],
  publisher: "Microsoft",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.0", date: "2024-11-26" },
  sources: ["https://github.com/SFTtech/openage"],
  website: "https://openage.dev",
  license: {
    spdx: "GPL-3.0-or-later",
  },
  verified: false,
  summary: "Age of Empires II: The Age of Kings is a real-time strategy video game developed by Ensemble Studios and published by Microsoft. Released in 1999 for Microsoft Windows and Macintosh in 2001, it is the second game in the Age of Empires series. The Age of Kings is set in the Middle Ages and contains 13 playable civilizations. Players aim to gather resources, which they use to build towns, create armies, and defeat their enemies.",
  summaryEs: "Age of Empires II: The Age of Kings es un videojuego de estrategia en tiempo real para computadoras personales, fue desarrollado por Ensemble Studios y distribuido por Microsoft Game Studios para los sistemas operativos Windows, Mac OS X y Konami para PlayStation 2. Fue lanzado en el 30 de septiembre de 1999 y es el segundo título que compone la serie Age of Empires.",
  notes:
    "Volunteer project recreating the Genie engine used by Age of Empires, Age of Empires II and Star Wars: Galactic Battlegrounds. The last tagged release is 0.6.0, although development continues.",
  notesEs:
    "Proyecto voluntario que recrea el motor Genie usado por Age of Empires, Age of Empires II y Star Wars: Galactic Battlegrounds. La última release etiquetada es 0.6.0, aunque el desarrollo continúa.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/SFTtech/openage/master/assets/doc/matrixroom.svg",
      alt: "openage community badge",
      credit: "SFTtech/openage",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png",
    alt: "Age of Empires II (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS","Windows"],
};
