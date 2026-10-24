import type { Port } from "@/lib/ports/schema";

export const dragonBallRagingBlast2Android: Port = {
  schema: "port",
  id: "dragon-ball-raging-blast-2-android",
  title: "Dragon Ball: Raging Blast 2 (Android)",
  game: "Dragon Ball: Raging Blast 2",
  developers: ["moddedrounds"],
  publisher: "Bandai Namco",
  originalYear: 2010,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/moddedrounds/RB2-Android"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["dragon-ball-raging-blast-2-recomp"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6f/Raging_Blast_2.jpg",
    alt: "Dragon Ball: Raging Blast 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Dragon Ball: Raging Blast 2 is a video game based on the manga and anime franchise Dragon Ball and is a follow-up to the 2009 video game Dragon Ball: Raging Blast. It was developed by Spike and published by Namco Bandai under the Bandai label for the PlayStation 3 and Xbox 360 gaming consoles in the beginning of November 2010.",
  summaryEs: "Dragon Ball: Raging Blast 2 es un videojuego basado en el manga y anime Dragon Ball y es el que sigue el juego de 2009 Dragon Ball: Raging Blast. Es desarrollado por Spike y publicado por Namco Bandai para las consolas de PlayStation 3 y Xbox 360 en todo Norteamérica, mientras que en cualquier otra parte que sería publicada bajo la etiqueta Bandai. Fue lanzado en noviembre de 2010.",
  notes:
    "Android (arm64) port of RB2 Recompiled: Dragon Ball: Raging Blast 2 recompiled with the ReXGlue SDK, packaged as an Android APK. No game data included; you need your own legally dumped copy. Latest release: v1.2.3 (APK).",
  notesEs:
    "Port Android (arm64) de RB2 Recompiled: Dragon Ball: Raging Blast 2 recompilado con el SDK ReXGlue y empaquetado como APK de Android. Sin datos del juego; necesitas tu propia copia volcada legalmente. Última release: v1.2.3 (APK).",
};
