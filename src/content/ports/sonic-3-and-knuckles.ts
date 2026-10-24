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
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Sonic3AndKnucklesRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Sega Mega Drive / Genesis"],
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
