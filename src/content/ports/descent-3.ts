import type { Port } from "@/lib/ports/schema";

export const descent3: Port = {
  schema: "port",
  id: "descent-3",
  title: "Descent 3 (Source Release)",
  game: "Descent 3",
  developers: ["DescentDevelopers"],
  publisher: "Interplay Entertainment",
  originalYear: 1999,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DescentDevelopers/Descent3"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Descent 3 is a first-person shooter video game developed by Outrage Entertainment and published by Interplay Entertainment. It was originally released for Microsoft Windows in North America on June 17, 1999. Descent 3 is the third game in the Descent video game series and a sequel to Descent II. The game takes place in a science fiction setting of the Solar System where the player is cast as Material Defender, a mercenary who must help an organization known as the Red Acropolis Research Team to stop robots infected by an alien virus.",
  summaryEs: "Descent 3 es un videojuego de disparos publicado por Interplay Entertainment en 1999.",
  notes:
    "Official open-source release of Descent 3 published by the Descent Developers, with builds for Windows, Linux and macOS. It needs the retail game data to play.",
  notesEs:
    "Publicación de código abierto oficial de Descent 3 por los Descent Developers, con builds para Windows, Linux y macOS. Necesita los datos del juego comercial para jugar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b2/D3_Box_Art.jpg",
    alt: "Descent 3 (box art)",
    credit: "Wikipedia",
  },
};
