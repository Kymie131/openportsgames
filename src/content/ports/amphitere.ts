import type { Port } from "@/lib/ports/schema";

export const amphitere: Port = {
  schema: "port",
  id: "amphitere",
  title: "Amphitere (NetHack)",
  game: "NetHack",
  developers: ["fancypantalons"],
  publisher: "NetHack DevTeam",
  originalYear: 1987,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fancypantalons/Amphitere"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Android port of NetHack focused on dual-screen devices. It is a standalone build that does not need the original game.",
  notesEs:
    "Port a Android de NetHack centrado en dispositivos de doble pantalla. Es una build independiente que no necesita el juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/NetHack.png",
    alt: "NetHack (box art)",
    credit: "Wikipedia",
  },
};
