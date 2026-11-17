import type { Port } from "@/lib/ports/schema";

export const mariokartddRecomp: Port = {
  schema: "port",
  id: "mariokartdd-recomp",
  title: "Mario Kart: Double Dash!! (mariokartdd-recomp)",
  game: "Mario Kart: Double Dash!!",
  developers: ["ethannicholas"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ethannicholas/mariokartdd-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  wip: true,
  addedAt: "2026-11-16",
  originalSystems: ["GameCube"],
  summary:
    "Mario Kart: Double Dash!! is a 2003 kart racing game developed and published by Nintendo for the GameCube. It is the fourth main entry in the Mario Kart series. Similar to previous titles, Double Dash challenges Mario series player characters to race against each other on 16 Mario-themed tracks. The game introduced a number of gameplay features, such as having two riders per kart.",
  summaryEs:
    "Mario Kart: Double Dash es un videojuego de carreras desarrollado por Nintendo EAD y publicado por Nintendo. El juego salió a la venta para GameCube en noviembre de 2003 en Japón, Europa, Norteamérica y Australia. Es la cuarta entrega de la serie Mario Kart y la primera en la que se puede jugar con dos personajes en un mismo kart. El juego retoma a los personajes principales del universo Super Mario para que compitan en carreras de karts a lo largo de diversos circuitos situados en el Reino Champiñón.",
  notes:
    "Static recompilation of Mario Kart: Double Dash!! for Windows and macOS using its own gcn-recomp runtime. There are no releases yet: you build it from source with your own disc image, and no game files are included.",
  notesEs:
    "Recompilación estática de Mario Kart: Double Dash!! para Windows y macOS con su propio runtime gcn-recomp. Todavía no hay releases: se compila desde el código con tu propia imagen del disco y no incluye archivos del juego.",
  related: ["mkdd"],
  cover: {
    src: "https://openportsgames.com/covers/generated/mario-kart-double-dash.svg",
    alt: "Mario Kart: Double Dash!! (generated cover)",
    credit: "OpenPortsGames",
  },
};
