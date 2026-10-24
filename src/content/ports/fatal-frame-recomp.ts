import type { Port } from "@/lib/ports/schema";

export const fatalFrameRecomp: Port = {
  schema: "port",
  id: "fatal-frame-recomp",
  title: "Fatal Frame (MikuPan)",
  game: "Fatal Frame",
  developers: ["Mikompilation"],
  publisher: "Tecmo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Mikompilation/MikuPan"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation 2"],
  summary: "Fatal Frame, titled Zero in Japan and Project Zero in Europe and Australia, is a Japanese survival horror video game series that was created, published, and developed by Koei Tecmo. Debuting in 2001 with the first entry in the series for the PlayStation 2, the series consists of five main entries. The series is set in 1980s Japan, with each entry focusing on a location beset by hostile supernatural events. In each scenario, the characters involved in the present investigation use Camera Obscura, objects created by Dr. Kunihiko Asou that can capture and pacify spirits.",
  summaryEs: "×Project Zero, conocido como Fatal Frame en Estados Unidos y Zero en Japón, es una saga de videojuegos de terror creada por el japonés Makoto Shibata. Es un exponente destacado del horror de supervivencia, y consta de cinco partes, una versión y dos spin-off, producidas por Tecmo.",
  notes:
    "Static recompilation of Fatal Frame (PlayStation 2) with ReXGlue. It requires your own game data.",
  notesEs:
    "Recompilación estática de Fatal Frame (PlayStation 2) con ReXGlue. Requiere tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b7/Fatal_Frame_Coverart.png",
    alt: "Fatal Frame (box art)",
    credit: "Wikipedia",
  },
};
