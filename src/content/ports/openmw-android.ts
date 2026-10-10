import type { Port } from "@/lib/ports/schema";

export const openmwAndroid: Port = {
  schema: "port",
  id: "openmw-android",
  title: "OpenMW Android",
  game: "The Elder Scrolls III: Morrowind",
  developers: ["Sisah2"],
  publisher: "Bethesda Softworks",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Sisah2/openmw-android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android port of OpenMW, the open-source Morrowind engine. It runs Morrowind with your own game data.",
  notesEs:
    "Port a Android de OpenMW, el motor de código abierto de Morrowind. Ejecuta Morrowind con tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/53/MorrowindCOVER.jpg",
    alt: "The Elder Scrolls III: Morrowind (box art)",
    credit: "Wikipedia",
  },
};
