import type { Port } from "@/lib/ports/schema";

export const gtaIvLibertyRecomp: Port = {
  schema: "port",
  id: "gta-iv-liberty-recomp",
  title: "Liberty Recompiled",
  game: "Grand Theft Auto IV",
  developers: ["OZORDI"],
  publisher: "Rockstar Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "0.1.1", date: "2025-12-13" },
  sources: ["https://github.com/OZORDI/LibertyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh entry overall. Set in the fictional Liberty City, based on New York City, the single-player story follows Eastern European war veteran Niko Bellic and his attempts to escape his past while under pressure from high-profile criminals.",
  summaryEs: "Grand Theft Auto IV es un videojuego de acción-aventura de mundo abierto de disparos en tercera persona desarrollado por Rockstar North y distribuido por Rockstar Games. Es la sexta entrada principal de la serie Grand Theft Auto, después de Grand Theft Auto: Vice City Stories de 2006, y la undécima entrega en general. Ambientada en la ficticia Liberty City, basada en la ciudad de Nueva York, la historia para un jugador sigue al veterano de guerra de Europa del Este Niko Bellic, y sus intentos de escapar de su pasado mientras se encuentra bajo la presión de criminales de alto perfil.",
  notes:
    "Recompilation of the Xbox 360 Grand Theft Auto IV with a ReXGlue SDK fork, in early development. It targets Windows, Linux, macOS and Android (plus iOS and Switch) to bring the game to platforms it never reached.",
  notesEs:
    "Recompilación del GTA IV de Xbox 360 con un fork del SDK ReXGlue, en desarrollo temprano. Apunta a Windows, Linux, macOS y Android (además de iOS y Switch) para llevar el juego a plataformas donde nunca salió.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b7/Grand_Theft_Auto_IV_cover.jpg",
    alt: "Grand Theft Auto IV (box art)",
    credit: "Wikipedia",
  },
};
