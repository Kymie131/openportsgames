import type { Port } from "@/lib/ports/schema";

export const mkddRecompRust: Port = {
  schema: "port",
  id: "mkdd-recomp-rust",
  title: "Mario Kart: Double Dash!! (Rust recomp)",
  game: "Mario Kart: Double Dash!!",
  developers: ["LeftInWalmart"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/LeftInWalmart/MKDD-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
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
    "Recompilation of Mario Kart: Double Dash!! to Rust with a Bevy runtime, using a spreadsheet-style workflow from Ghidra p-code. A work in progress with no releases; no game files are included.",
  notesEs:
    "Recompilación de Mario Kart: Double Dash!! a Rust con runtime Bevy, mediante un flujo de trabajo tipo hoja de cálculo desde el p-code de Ghidra. Trabajo en curso sin releases; no incluye archivos del juego.",
  related: ["mkdd"],
  cover: {
    src: "https://openportsgames.com/covers/generated/mario-kart-double-dash.svg",
    alt: "Mario Kart: Double Dash!! (generated cover)",
    credit: "OpenPortsGames",
  },
};
