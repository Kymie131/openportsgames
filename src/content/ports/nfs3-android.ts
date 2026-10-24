import type { Port } from "@/lib/ports/schema";

export const nfs3Android: Port = {
  schema: "port",
  id: "nfs3-android",
  title: "Need for Speed III: Hot Pursuit (Android)",
  game: "Need for Speed III: Hot Pursuit",
  developers: ["ZloiKILLER"],
  publisher: "Electronic Arts",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZloiKILLER/nfs3recompiled-android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Need for Speed III: Hot Pursuit is a 1998 racing video game developed for PlayStation by EA Canada and Microsoft Windows by EA Seattle, and published by Electronic Arts. It is the third major installment in the Need for Speed franchise, incorporating police pursuits as a major part of gameplay. Hot Pursuit remains focused on racing using exotic sports cars, but features races that primarily take place in locations within North America, including varied settings and climates. Police AI is improved over the first game, utilizing several tactics to stop both the player and opponent.",
  summaryEs: "Need for Speed III: Hot Pursuit u Over Drivin' III: Hot Pursuit en Japón, es un videojuego de carreras lanzado en 1998. Es la tercera gran entrega de la serie Need for Speed, que incorpora como novedad las actividades policiales como parte importante del juego. Hot Pursuit sigue centrado en las carreras de deportivos exóticos, pero ofrece pistas que tienen lugar principalmente en lugares de América del Norte, incluyendo variados entornos y climas. Además, la IA de la policía está bastante desarrollada, utilizando varias tácticas para detener tanto al jugador como al oponente.",
  notes:
    "Recompilation of Need for Speed III: Hot Pursuit that runs on Android. It needs your own game files.",
  notesEs:
    "Recompilación de Need for Speed III: Hot Pursuit que funciona en Android. Necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a6/NFS_III_Hot_Pursuit_%28PC%2C_US%29_cover_art.jpg",
    alt: "Need for Speed III: Hot Pursuit (box art)",
    credit: "Wikipedia",
  },
};
