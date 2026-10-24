import type { Port } from "@/lib/ports/schema";

export const Unvanquished: Port = {
  schema: "port",
  id: "unvanquished",
  title: "Unvanquished",
  game: "Unvanquished",
  developers: ["Unvanquished"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Unvanquished/Unvanquished"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Unvanquished is a free and open-source video game. It is a multiplayer first-person shooter and real-time strategy game where Humans and Aliens fight for domination.",
  summaryEs: "Unvanquished es un videojuego de disparos.",
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Unvanquished-0.52-on-screen-tutorial.jpg/960px-Unvanquished-0.52-on-screen-tutorial.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    alt: "Unvanquished (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Unvanquished is a free and open source FPS/RTS hybrid game powered by the Daemon game engine. Historically based on Tremulous as a continuation with decades of work over it.",
  notesEs:
    "Unvanquished es un juego FPS/RTS híbrido libre y de código abierto sobre el motor Daemon. Nació como continuación de Tremulous y lleva años de trabajo encima.",
};
