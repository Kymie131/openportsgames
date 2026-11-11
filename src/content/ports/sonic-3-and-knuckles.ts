import type { Port } from "@/lib/ports/schema";

export const Sonic3AndKnuckles: Port = {
  schema: "port",
  id: "sonic-3-and-knuckles",
  title: "Sonic 3 & Knuckles",
  game: "Sonic 3 & Knuckles",
  developers: ["mstan"],
  publisher: "Unknown",
  originalYear: 1994,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.8.1", date: "2026-11-11" },
  sources: ["https://github.com/mstan/Sonic3AndKnucklesRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Sega Mega Drive / Genesis"],
  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/Sonic3KRecomp-linux-x86_64-v0.8.1.AppImage",
      size: "40.1 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/Sonic3KRecomp-windows-x64-v0.8.1.zip",
      size: "36.4 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/SonicAndKnucklesRecomp-linux-x86_64-v0.8.1.AppImage",
      size: "19.2 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/Sonic3Recomp-linux-x86_64-v0.8.1.AppImage",
      size: "15.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/SonicAndKnucklesRecomp-windows-x64-v0.8.1.zip",
      size: "13.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/mstan/Sonic3AndKnucklesRecomp/releases/download/v0.8.1/Sonic3Recomp-windows-x64-v0.8.1.zip",
      size: "9.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/07/Sonic3-box-us-225.jpg",
    alt: "Sonic 3 & Knuckles (box art)",
    credit: "Wikipedia",
  },
  summary: "Sonic the Hedgehog 3 is a 1994 platform game developed by Sega Technical Institute and published by Sega for the Sega Genesis. Like previous Sonic games, players traverse side-scrolling levels while collecting rings and defeating enemies. They control Sonic and Tails, who attempt to retrieve the Chaos Emeralds to stop Doctor Robotnik from relaunching his space station, the Death Egg, after it crash-lands on a mysterious floating island. Sonic 3 introduces Knuckles the Echidna, the island guardian, who lays traps for Sonic and Tails.",
  summaryEs: "Sonic the Hedgehog 3 es un videojuego de plataformas de 1994 desarrollado y publicado por Sega para Sega Genesis. Al igual que los juegos anteriores de Sonic, los jugadores recorren niveles de desplazamiento lateral mientras recolectan anillos y derrotan enemigos. Controlan a Sonic y Tails, quienes intentan recuperar las Chaos Emeralds para evitar que el Doctor Robotnik relance su estación espacial, el Death Egg, después de que se estrelle en una misteriosa isla flotante. Sonic 3 presenta a Knuckles the Echidna, el guardián de la isla, que pone trampas para Sonic y Tails.",
  notes:
    "Sonic 3 & Knuckles recompiled for the Sega Genesis using segagenesisrecomp · Part of the R.A.I.D. community.",
  notesEs:
    "Sonic 3 & Knuckles recompilado para Sega Genesis con segagenesisrecomp, parte de la comunidad R.A.I.D.",
};
