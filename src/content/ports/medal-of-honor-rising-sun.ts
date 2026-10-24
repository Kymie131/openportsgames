import type { Port } from "@/lib/ports/schema";

export const MedalOfHonorRisingSun: Port = {
  schema: "port",
  id: "medal-of-honor-rising-sun",
  title: "Medal of Honor: Rising Sun",
  game: "Medal of Honor: Rising Sun",
  developers: ["lifewillbeokay"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lifewillbeokay/moh-rising-sun"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Medal%20of%20Honor%20-%20Rising%20Sun%20(Europe)%20(En,Es,It,Nl,Sv)%20(Disc%201).png",
    alt: "Medal of Honor: Rising Sun (box art)",
    credit: "Box art",
  },
  summary: "Medal of Honor: Rising Sun is a first-person shooter video game and the fifth installment of the Medal of Honor video game series, released by EA Games in November 2003 for PlayStation 2, GameCube and Xbox. It is set in World War II, during the Pacific War. It features single-player and multiplayer modes, with multiplayer terminated as of 2007. In the single-player mode, the player assumes the role of Joseph Griffin of the United States Marine Corps.",
  summaryEs: "Medal of Honor: Rising Sun es un videojuego de disparos en primera persona basado en las batallas libradas durante la Segunda Guerra Mundial en el Océano Pacífico, desde el bombardeo de Pearl Harbor hasta las calles de Singapur.",
  notes:
    "Matching decompilation of Medal of Honor: Rising Sun (GameCube, USA / GR8E69). AI-assisted contributors welcome.",
  notesEs: "Decompilación que coincide de Medal of Honor: Rising Sun (GameCube, USA / GR8E69).",
};
