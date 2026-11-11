import type { Port } from "@/lib/ports/schema";

export const sonic1Forever: Port = {
  schema: "port",
  id: "sonic-1-forever",
  title: "Sonic 1 Forever",  game: "Sonic the Hedgehog",
  developers: ["ElspethThePict"],  publisher: "Sega",  originalYear: 1991,
  portType: "decompilation",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.5.1", date: "2024-10-16" },
  sources: ["https://github.com/ElspethThePict/S1Forever"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Sega Mega Drive / Genesis"],  summary: "Sonic the Hedgehog is a 1991 platform game developed by Sonic Team and published by Sega for the Mega Drive. Sonic races through Green Hill and other zones to rescue animals from Doctor Robotnik.",  summaryEs: "Sonic the Hedgehog es un juego de plataformas de 1991 desarrollado por Sonic Team y publicado por Sega para Mega Drive. Sonic recorre Green Hill y otras zonas para rescatar a los animales del Doctor Robotnik.",  downloads: [
    {
      label: "Android",
      url: "https://github.com/ElspethThePict/S1Forever/releases/download/1.5.1/SonicForever_1.5.1_Android.zip",
      size: "18.6 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/sonic-1-forever.svg",
    alt: "Sonic 1 Forever (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Sonic 1 Forever (Sega, 1991) for Android (decompilation). Latest release: 1.5.1. Needs your own copy of the game (Data.rsdk).",
  notesEs: "Sonic 1 Forever (Sega, 1991) para Android (decompilación). Última release: 1.5.1. Necesita tu propia copia del juego.",
};
