import type { Port } from "@/lib/ports/schema";

export const alephOne: Port = {
  schema: "port",
  id: "aleph-one",
  title: "Aleph One",
  game: "Marathon 2",
  developers: ["Bungie"],
  publisher: "Bungie",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.11.1", date: "2026-10-01" },
  sources: ["https://github.com/Aleph-One-Marathon/alephone"],
  discord: "https://discord.gg/NvF3pdV",
  website: "https://alephone.lhowon.org/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Macintosh"],
  features: [
    "Ready-to-run packages for Marathon, Marathon 2 and Marathon Infinity",
    "macOS, Windows and Linux Flatpak builds published together",
  ],
  featuresEs: [
    "Paquetes listos para ejecutar Marathon, Marathon 2 y Marathon Infinity",
    "Builds de macOS, Windows y Flatpak de Linux publicadas juntas",
  ],
  summary: "Marathon 2: Durandal is a first-person shooter video game, part of the science fiction series Marathon by Bungie. It was released on November 24, 1995. The game is mostly set on the fictional planet of Lh'owon, homeworld of the S'pht, and once again the player takes the role of a shipboard security officer from the Marathon. This is the only game in the series to be officially released for Windows and Xbox 360 XBLA in addition to the Mac.",
  summaryEs: "La trilogía de Marathon es una serie de videojuegos de ciencia ficción creado por Bungie, lanzada originalmente para Macintosh. Marathon se refiere al nombre de una gigantesca nave interestelar que hace las veces de colonia, la cual proporciona el escenario para el primer juego y se convierte en referencia prominente en el argumento de las secuelas; la nave fue construida a partir de la que fuera la segunda luna de Marte, Deimos.",
  notes:
    "Open source continuation of Bungie's Marathon 2 engine, played with the original game data. Upstream tags releases by date instead of semantic versioning, so the version mirrors the 20250829 build.",
  notesEs:
    "Continuación de código abierto del motor de Marathon 2 de Bungie, jugable con los datos del juego original. El proyecto etiqueta sus versiones por fecha en lugar de versionado semántico, así que la versión refleja la build 20250829.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/62/Marathon_2_-_Durandal_Coverart.png",
    alt: "Marathon 2 (cover art)",
    credit: "Wikipedia",
  },
};
