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
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OZORDI/LibertyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of the Xbox 360 Grand Theft Auto IV with a ReXGlue SDK fork, in early development. It targets Windows, Linux, macOS and Android (plus iOS and Switch) to bring the game to platforms it never reached.",
  notesEs:
    "Recompilación del GTA IV de Xbox 360 con un fork del SDK ReXGlue, en desarrollo temprano. Apunta a Windows, Linux, macOS y Android (además de iOS y Switch) para llevar el juego a plataformas donde nunca salió.",
};
