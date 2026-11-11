import type { Port } from "@/lib/ports/schema";

export const KirbysReturnToDreamLandKirbyWiiRecomp: Port = {
  schema: "port",
  id: "kirbys-return-to-dream-land-kirby-wii-recomp",
  title: "Kirby's Return to Dream Land (Kirby Wii Recomp)",  game: "Kirby's Return to Dream Land",
  developers: ["ExpansionPak"],  publisher: "Nintendo",  originalYear: 2011,
  portType: "recompilation",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ExpansionPak/ModernGekko"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Wii"],  summary: "Kirby's Return to Dream Land is a 2011 platform game developed by HAL Laboratory and published by Nintendo for the Wii. Kirby and up to three friends travel across Planet Popstar to recover the pieces of the crashed ship Lor Starcutter.",  summaryEs: "Kirby's Return to Dream Land es un juego de plataformas de 2011 desarrollado por HAL Laboratory y publicado por Nintendo para Wii. Kirby y hasta tres amigos recorren el Planeta Popstar para recuperar las piezas de la nave estrellada Lor Starcutter.",  downloads: [
    {
      label: "Linux",
      url: "https://github.com/ExpansionPak/ModernGekko/releases/download/kirby/KirbyWiiRecomp-Linux-x86_64.zip",
      size: "44.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/ExpansionPak/ModernGekko/releases/download/kirby/KirbyWiiRecomp-Windows-x86_64.zip",
      size: "42.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/kirby-s-return-to-dream-land-kirby-wii-recomp.svg",
    alt: "Kirby's Return to Dream Land (Kirby Wii Recomp) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Runtime for recompilations of GameCube games.",
  notesEs: "Runtime para recompilaciones de juegos de GameCube.",
};
