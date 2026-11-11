import type { Port } from "@/lib/ports/schema";

export const sonicManiaDecompilationAndroid: Port = {
  schema: "port",
  id: "sonic-mania-decompilation-android",
  title: "Sonic Mania Decompilation (Android)",
  game: "Sonic Mania Plus",
  developers: ["RSDKModding"],
  publisher: "Sega",
  originalYear: 2017,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.1.1", date: "2025-11-01" },
  sources: ["https://github.com/RSDKModding/RSDKv5-Decompilation"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Sonic Mania is a 2017 platform game developed by Christian Whitehead, PagodaWest Games and Headcannon and published by Sega. Produced in commemoration of the Sonic the Hedgehog series' 25th anniversary, Sonic Mania pays homage to the original Sega Genesis Sonic games, featuring speedy side-scrolling gameplay. It takes place over 13 levels, including several redesigned from past games. The story follows Sonic, Tails and Knuckles as they venture to defeat Doctor Eggman and his robotic henchmen, the Hard-Boiled Heavies.",
  summaryEs: "Sonic Mania es un videojuego de plataformas en 2D desarrollado por Christian Whitehead, Headcannon y PagodaWest Games, supervisado por Sonic Team y publicado por Sega para Nintendo Switch, PlayStation 4, Xbox One, Windows (Steam) y para Android e iOS posteriormente.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/RSDKModding/RSDKv5-Decompilation/releases/download/v1.1.1/v5-android.zip",
      size: "15.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/RSDKModding/RSDKv5-Decompilation/releases/download/v1.1.1/v5-linux.zip",
      size: "1.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/RSDKModding/RSDKv5-Decompilation/releases/download/v1.1.1/v5-windows-x64.zip",
      size: "1.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/RSDKModding/RSDKv5-Decompilation/releases/download/v1.1.1/v5-windows.zip",
      size: "1.3 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/sonic-mania-plus.svg",
    alt: "Sonic Mania Plus (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Sonic Mania Plus (Sega, 2017) for Android (decompilation). Latest release: v1.1.1. Needs your own copy of the game (Game Files).",
  notesEs: "Sonic Mania Plus (Sega, 2017) para Android (decompilación). Última release: v1.1.1. Necesita tu propia copia del juego.",
};
