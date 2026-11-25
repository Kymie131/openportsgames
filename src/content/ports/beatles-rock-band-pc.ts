import type { Port } from "@/lib/ports/schema";

export const beatlesRockBandPc: Port = {
  schema: "port",
  id: "beatles-rock-band-pc",
  title: "The Beatles: Rock Band",
  game: "The Beatles: Rock Band",
  developers: ["mercurialw0rld"],
  publisher: "MTV Games",
  originalYear: 2009,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.6.1", date: "2026-10-24" },
  sources: ["https://github.com/mercurialw0rld/thebeatlesrockband-pcport"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["Xbox 360"],
  summary:
    "The Beatles: Rock Band is a 2009 music game developed by Harmonix and published by MTV Games. It recreates the band's career across studios and eras, with instrument controllers and three-part vocal harmonies.",
  summaryEs:
    "The Beatles: Rock Band es un videojuego de música de 2009 desarrollado por Harmonix y publicado por MTV Games. Recorre la carrera de la banda por estudios y épocas, con controladores de instrumentos y armonías vocales a tres voces.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/mercurialw0rld/thebeatlesrockband-pcport/releases/download/v0.7.3/BeatlesRockBand-PC-v0.7.3-preview-portable.zip",
      size: "17.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0f/The_Beatles_Rock_Band_box_art.jpg",
    alt: "The Beatles: Rock Band (box art)",
    credit: "Wikipedia",
  },
  notes: "The Beatles: Rock Band: native recompilation of The Beatles: Rock Band for windows. Bring your own copy of the game.",
  notesEs: "The Beatles: Rock Band: recompilación nativo de The Beatles: Rock Band para windows. Aporta tu propia copia del juego.",
};
