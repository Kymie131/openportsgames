import type { Port } from "@/lib/ports/schema";

export const sonicMania: Port = {
  schema: "port",
  id: "sonic-mania-decomp",
  title: "Sonic Mania Decompilation",
  game: "Sonic Mania",
  developers: ["Headcannon", "PagodaWest Games"],
  publisher: "Sega",
  originalYear: 2017,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.1", date: "2025-11-01" },
  sources: ["https://github.com/RSDKModding/Sonic-Mania-Decompilation"],
  license: {
    spdx: "NOASSERTION",
    note: "community Retro Engine license, not an SPDX identifier",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  summary: "Sonic Mania is a 2017 platform game developed by Christian Whitehead, PagodaWest Games and Headcannon and published by Sega. Produced in commemoration of the Sonic the Hedgehog series' 25th anniversary, Sonic Mania pays homage to the original Sega Genesis Sonic games, featuring speedy side-scrolling gameplay. It takes place over 13 levels, including several redesigned from past games. The story follows Sonic, Tails and Knuckles as they venture to defeat Doctor Eggman and his robotic henchmen, the Hard-Boiled Heavies.",
  summaryEs: "Sonic Mania es un videojuego de plataformas en 2D desarrollado por Christian Whitehead, Headcannon y PagodaWest Games, supervisado por Sonic Team y publicado por Sega para Nintendo Switch, PlayStation 4, Xbox One, Windows (Steam) y para Android e iOS posteriormente.",
  notes:
    "Decompilation of Sonic Mania (Retro Engine v5) that rebuilds the game on PC, Mac and Linux and opens the door to extensive modding. Requires a legally acquired copy of the Sonic Mania data files.",
  notesEs:
    "Decompilación de Sonic Mania (Retro Engine v5) que reconstruye el juego en PC, Mac y Linux y abre la puerta a un modding extenso. Requiere una copia adquirida legalmente de los archivos de datos de Sonic Mania.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sonic_Mania_%28artwork%29.jpg",
    alt: "Sonic Mania (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
