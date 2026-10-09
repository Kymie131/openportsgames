import type { Port } from "@/lib/ports/schema";

export const srb2Android: Port = {
  schema: "port",
  id: "srb2-android",
  title: "Sonic Robo Blast 2 (Android)",
  game: "Sonic Robo Blast 2",
  developers: ["bitten2up"],
  publisher: "Sonic Team Jr.",
  originalYear: 1998,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "freeware",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/bitten2up/SRB2-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android build of Sonic Robo Blast 2, the free 3D Sonic fangame based on a modified Doom Legacy engine. It is a standalone game and needs no original assets.",
  notesEs:
    "Build para Android de Sonic Robo Blast 2, el fangame 3D gratuito de Sonic basado en una versión modificada del motor Doom Legacy. Es un juego independiente y no necesita recursos originales.",
};
