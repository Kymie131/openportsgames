import type { Port } from "@/lib/ports/schema";

export const spaceCadetPinball: Port = {
  schema: "port",
  id: "space-cadet-pinball",
  title: "3D Pinball Space Cadet",
  game: "3D Pinball for Windows: Space Cadet",
  developers: ["k4zmu2a"],
  publisher: "Microsoft",
  originalYear: 1995,
  genre: "simulation",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "macos"],
  status: "stable",
  release: { version: "2.1.0", date: "2023-10-16" },
  sources: ["https://github.com/k4zmu2a/SpaceCadetPinball"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Windows"],
  features: [
    "Faithful recreation of the original physics and rules",
    "Cross-platform desktop builds",
  ],
  featuresEs: [
    "Recreación fiel de la física y las reglas originales",
    "Builds de escritorio multiplataforma",
  ],
  summary: "Pinball games are a family of games in which a ball is propelled into a specially designed table where it bounces off various obstacles, scoring points either en-route or when it comes to rest. Historically the board was studded with nails called 'pins' and had hollows or pockets which scored points if the ball came to rest in them. Today, pinball is most commonly an arcade game in which the ball is fired into a specially designed cabinet known as a pinball machine, hitting various lights, bumpers, ramps, and other targets depending on its design.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Open source recreation of the Windows 95 Space Cadet pinball game, released under CC0 by Microsoft.",
  notesEs:
    "Recreación de código abierto del pinball Space Cadet de Windows 95, publicado bajo CC0 por Microsoft.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Space-cadet.png",
    alt: "3D Pinball for Windows: Space Cadet (screenshot)",
    credit: "Wikimedia Commons",
  },
};
