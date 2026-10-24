import type { Port } from "@/lib/ports/schema";

export const wweSmackdownVsRaw2011Recomp: Port = {
  schema: "port",
  id: "wwe-smackdown-vs-raw-2011-recomp",
  title: "WWE SmackDown vs. Raw 2011 (PC)",
  game: "WWE SmackDown vs. Raw 2011",
  developers: ["KaikoClanworth1"],
  publisher: "THQ",
  originalYear: 2010,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/KaikoClanworth1/wwe-svr2011-pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/79/Wwe_svr_11_cover_art.jpg",
    alt: "WWE SmackDown vs. Raw 2011 (box art)",
    credit: "Wikipedia",
  },
  summary: "WWE SmackDown vs. Raw 2011 is a professional wrestling video game developed by Yuke's and published by THQ for the PlayStation 2, PlayStation 3, PlayStation Portable, Xbox 360, and Wii systems. The game was released worldwide in October 2010, with the PS3 and Xbox 360 versions for Japan in February 2011.",
  summaryEs: "WWE SmackDown vs. Raw 2011 es un videojuego de lucha libre profesional desarrollado por Yuke's y distribuido por THQ para los sistemas PlayStation 2 (PS2), PlayStation 3 (PS3), PlayStation Portable, Wii y Xbox 360. Es el duodécimo juego de la serie WWE SmackDown vs. Raw y es la secuela de WWE SmackDown vs. Raw 2010. Fue lanzado el 26 de octubre de 2010 en América del Norte, el 28 de octubre de 2010 en Australia y el 29 de octubre de 2010 en Europa. El juego se basa en las dos marcas de la World Wrestling Entertainment (WWE), Raw y SmackDown.",
  notes:
    "Native Windows port of WWE SmackDown vs. Raw 2011 (Xbox 360, 2010). The game's code is statically recompiled to C++ (ReXGlue SDK) and built into an ordinary Windows program on a Xenia-derived runtime, Direct3D 12, XAudio2 and XInput. Adds 720p/900p/1080p/1440p/4K, anti-aliasing, VSync and 60 fps. Bring your own disc. Latest release: v2.1.3.",
  notesEs:
    "Port nativo para Windows de WWE SmackDown vs. Raw 2011 (Xbox 360, 2010). El código del juego se recompila estáticamente a C++ (ReXGlue SDK) y se compila como un programa Windows normal sobre un runtime derivado de Xenia, Direct3D 12, XAudio2 y XInput. Añade 720p/900p/1080p/1440p/4K, antialiasing, VSync y 60 fps. Aporta tu propio disco. Última release: v2.1.3.",
};
