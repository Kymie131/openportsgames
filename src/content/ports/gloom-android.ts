import type { Port } from "@/lib/ports/schema";

export const gloomAndroid: Port = {
  schema: "port",
  id: "gloom-android",
  title: "ZGloom (Gloom)",
  game: "Gloom",
  developers: ["Andiweli"],
  publisher: "Guildhall",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Andiweli/ZGloom-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["MS-DOS","Amiga"],
  summary: "Gloom is a 1995 computer game for the Amiga computer. Gloom was the first commercially released Amiga clone of first-person shooter Doom.",
  summaryEs: "Gloom es un videojuego de disparos publicado por Idigicon Limited en 1995.",
  notes:
    "Modern source port of the Amiga FPS Gloom with an improved renderer, focused on Android. It needs the original game data.",
  notesEs:
    "Source port moderno del FPS de Amiga Gloom con un renderizador mejorado, centrado en Android. Necesita los datos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gloom_front.jpg",
    alt: "Gloom (box art)",
    credit: "Wikipedia",
  },
};
