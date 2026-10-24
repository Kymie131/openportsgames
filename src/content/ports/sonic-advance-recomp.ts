import type { Port } from "@/lib/ports/schema";

export const sonicAdvanceRecomp: Port = {
  schema: "port",
  id: "sonic-advance-recomp",
  title: "Sonic Advance Recompiled",
  game: "Sonic Advance",
  developers: ["smiluredev"],
  publisher: "Sega",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/smiluredev/SonicAdvanceRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Sonic Advance is a 2001 platform game developed by Sonic Team and Dimps and published by Sega for the Game Boy Advance. It was one of the first Sonic the Hedgehog games to be released on a Nintendo console along with Sonic Adventure 2: Battle on the GameCube, and was produced in commemoration of the series' tenth anniversary. The story follows Sonic, Tails, Knuckles, and Amy as they journey to stop Doctor Eggman from taking over the world. Controlling a character, players are tasked with completing each level, defeating Eggman and his robot army, and collecting the seven Chaos Emeralds.",
  summaryEs: "Sonic Advance es un videojuego de plataformas de acción de desplazamiento lateral de 2001 desarrollado por Dimps y publicado originalmente por Sega, THQ e Infogrames para Game Boy Advance (GBA). Fue el primer juego de Sonic the Hedgehog lanzado en una consola de Nintendo junto con Sonic Adventure 2 Battle en Nintendo GameCube (GCN), y fue producido en conmemoración del décimo aniversario de la serie. La historia sigue a Sonic, Tails, Knuckles y Amy en su viaje para salvar la Isla Sur y evitar que el Doctor Eggman se apodere del mundo.",
  notes:
    "Static recompilation of Sonic Advance (Game Boy Advance) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Sonic Advance (Game Boy Advance) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Sonic%20Advance%20(USA)%20(En,Ja).png",
    alt: "Sonic Advance (box art)",
    credit: "Box art",
  },
};
