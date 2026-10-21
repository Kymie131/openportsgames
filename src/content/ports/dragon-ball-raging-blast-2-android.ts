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
  notes:
    "Android (arm64) port of RB2 Recompiled: Dragon Ball: Raging Blast 2 recompiled with the ReXGlue SDK, packaged as an Android APK. No game data included; you need your own legally dumped copy. Latest release: v1.2.3 (APK).",
  notesEs:
    "Port Android (arm64) de RB2 Recompiled: Dragon Ball: Raging Blast 2 recompilado con el SDK ReXGlue y empaquetado como APK de Android. Sin datos del juego; necesitas tu propia copia volcada legalmente. Última release: v1.2.3 (APK).",
};
