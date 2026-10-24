import type { Port } from "@/lib/ports/schema";

export const sonicAdventureRecomp: Port = {
  schema: "port",
  id: "sonic-adventure-recomp",
  title: "Sonic Adventure Recompiled",
  game: "Sonic Adventure",
  developers: ["sonicfreak1337"],
  publisher: "Sega",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicfreak1337/SARecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Dreamcast"],
  summary: "Sonic Adventure is a 1998 platform game developed by Sonic Team and published by Sega for the Dreamcast. It was the first main Sonic the Hedgehog game to feature 3D gameplay. It follows Sonic the Hedgehog, Miles \"Tails\" Prower, Knuckles the Echidna, Amy Rose, Big the Cat, and E-102 Gamma in their quests to collect the Chaos Emeralds and stop Doctor Ivo Robotnik from unleashing Chaos, an ancient evil. Controlling one of the six characters—each with their own abilities—players complete levels to progress the story.",
  summaryEs: "Sonic Adventure es un videojuego de plataformas de 1998 desarrollado por Sonic Team y publicado por Sega para Dreamcast. Fue el primer título principal de Sonic the Hedgehog en contar con jugabilidad en 3D. Sigue a Sonic, Miles «Tails» Prower, Knuckles the Echidna, Amy Rose, Big the Cat y E-102 Gamma en sus misiones para recolectar las Chaos Emeralds y evitar que el Doctor Eggman desate a Chaos, un antiguo ente maligno. Controlando a uno de los seis personajes, cada uno con sus propias habilidades, se completan niveles para progresar en la historia.",
  notes:
    "Native port of Sonic Adventure built on KatanaRecomp, playable on Windows, Linux and Steam Deck. It is a work in progress and needs your own game data.",
  notesEs:
    "Port nativo de Sonic Adventure construido sobre KatanaRecomp, jugable en Windows, Linux y Steam Deck. Es un trabajo en progreso y necesita tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Boxarts/Sonic%20Adventure%20(Europe)%20(En,Ja,Fr,De,Es).png",
    alt: "Sonic Adventure (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%20Dreamcast/Named_Snaps/Sonic%20Adventure%20(Europe)%20(En,Ja,Fr,De,Es).png",
      alt: "Sonic Adventure (screenshot)",
      credit: "Libretro",
    },
  ],
};
