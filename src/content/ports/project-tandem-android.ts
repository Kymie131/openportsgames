import type { Port } from "@/lib/ports/schema";

export const projectTandemAndroid: Port = {
  schema: "port",
  id: "project-tandem-android",
  title: "Project Tandem (Android)",
  game: "Mario Kart: Double Dash!!",
  developers: ["slex2jf"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: "1.1", date: "2026-11-12" },
  sources: ["https://github.com/slex2jf/Project-Tandem--ANDROID"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["GameCube"],
  summary:
    "Mario Kart: Double Dash!! is a 2003 kart racing game developed and published by Nintendo for the GameCube. It is the fourth main entry in the Mario Kart series. Similar to previous titles, Double Dash challenges Mario series player characters to race against each other on 16 Mario-themed tracks. The game introduced a number of gameplay features, such as having two riders per kart.",
  summaryEs:
    "Mario Kart: Double Dash es un videojuego de carreras desarrollado por Nintendo EAD y publicado por Nintendo. El juego salió a la venta para GameCube en noviembre de 2003 en Japón, Europa, Norteamérica y Australia. Es la cuarta entrega de la serie Mario Kart y la primera en la que se puede jugar con dos personajes en un mismo kart. El juego retoma a los personajes principales del universo Super Mario para que compitan en carreras de karts a lo largo de diversos circuitos situados en el Reino Champiñón.",
  notes:
    "Android ARM64 continuation of the Project Tandem recompilation of Mario Kart: Double Dash!!, using OpenGL ES with audio and on-screen touch controls. It ships no game files: you must supply your own copy.",
  notesEs:
    "Continuación para Android ARM64 de la recompilación Project Tandem de Mario Kart: Double Dash!!, con OpenGL ES, audio y controles táctiles en pantalla. No incluye archivos del juego: debes aportar tu propia copia.",
  related: ["mkdd"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/78/Mario_Kart_Double_Dash.jpg",
    alt: "Mario Kart: Double Dash!! (box art)",
    credit: "Wikipedia",
  },
};
