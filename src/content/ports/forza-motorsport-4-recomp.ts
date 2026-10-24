import type { Port } from "@/lib/ports/schema";

export const forzaMotorsport4Recomp: Port = {
  schema: "port",
  id: "forza-motorsport-4-recomp",
  title: "Forza Motorsport 4 Recompiled",
  game: "Forza Motorsport 4",
  developers: ["Alexbeav"],
  publisher: "Microsoft Studios",
  originalYear: 2011,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Alexbeav/fm4-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Forza Motorsport 4 is a 2011 racing video game developed by Turn 10 Studios and published by Microsoft Studios for the Xbox 360. It is the fourth installment in the Forza series. It is the first title in the series to support the Kinect sensor alongside the traditional controller-based gameplay. It is the last Forza Motorsport released for Xbox 360; 2012's Forza Horizon and its 2014 sequel were the last two Forza games for the platform, while 2013's Forza Motorsport 5 was released as an Xbox One exclusive.",
  summaryEs: "Forza Motorsport 4 es un videojuego de carreras desarrollado por Turn 10 Studios para la Xbox 360.",
  notes:
    "Recompilation of Forza Motorsport 4 (Xbox 360) to native Windows via ReXGlue. You supply the game files.",
  notesEs:
    "Recompilación de Forza Motorsport 4 (Xbox 360) a Windows nativo mediante ReXGlue. Tú aportas los archivos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f1/Forza_Motorsport_4_cover.jpg",
    alt: "Forza Motorsport 4 (box art)",
    credit: "Wikipedia",
  },
};
