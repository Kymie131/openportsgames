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
  originalSystems: ["Windows"],
  summary: "The Elder Scrolls III: Morrowind is a 2002 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the third installment in The Elder Scrolls series, following 1996's The Elder Scrolls II: Daggerfall, and was released for Microsoft Windows and Xbox. The main story takes place on Vvardenfell, an island in the Dunmer province of Morrowind, part of the continent of Tamriel. The central quests concern the demigod Dagoth Ur, housed within the volcanic Red Mountain, who seeks to gain power and break Morrowind free from Imperial reign.",
  summaryEs: "The Elder Scrolls III: Morrowind es la tercera entrega de la conocida serie de videojuegos de rol The Elder Scrolls. El videojuego fue publicado en América del Norte y Europa para PC y Xbox entre el 1 de mayo y el 22 de noviembre de 2002, y ha sido desarrollado por Bethesda Game Studios y distribuido por Bethesda Softworks y Ubisoft. El juego ha vendido más de 4 millones de copias en todo el mundo. El juego ha sido lanzado en inglés, pero cuenta con una traducción no oficial al español.",
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
