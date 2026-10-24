import type { Port } from "@/lib/ports/schema";

export const sonicCdDecompilation: Port = {
  schema: "port",
  id: "sonic-cd-decompilation",
  title: "Sonic CD (2011) Decompilation",
  game: "Sonic CD",
  developers: ["Rubberduckycooly"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.3.3", date: "2025-11-02" },
  sources: ["https://github.com/Rubberduckycooly/Sonic-CD-11-Decompilation"],
  license: { spdx: "NOASSERTION", note: "community Retro Engine license, not an SPDX identifier" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-21",
  originalSystems: ["Sega CD / Mega-CD"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e1/Sonic_CD_North_American_cover_art.jpg",
    alt: "Sonic CD (box art)",
    credit: "Wikipedia",
  },
  summary: "Sonic CD, also known as Sonic the Hedgehog CD, is a 1993 platform game developed and published by Sega for the Sega CD. As Sonic the Hedgehog, the player attempts to protect an extraterrestrial body, Little Planet, from Doctor Robotnik. Like other Sonic games, Sonic runs through themed levels while collecting rings and defeating robots. Sonic CD introduces time travel as a game mechanic. By traveling through time, players can access different versions of stages, featuring alternative layouts, music, and graphics. Sonic CD introduced the characters Amy Rose and Metal Sonic.",
  summaryEs: "Sonic the Hedgehog CD es un juego de plataformas de 1993 desarrollado por Sega para ser usado mediante el periférico Sega CD/Mega-CD acoplado en la videoconsola Mega Drive/Genesis. Como Sonic the Hedgehog, el jugador intenta proteger un cuerpo extraterrestre, Little Planet, del Doctor Ivo Robotnik. Como en otros juegos de Sonic, Sonic recorre niveles temáticos mientras recoge anillos y derrota robots. Sonic CD introduce el viaje en el tiempo como mecánica de juego.",
  notes: "Complete decompilation of the 2011 Sonic CD remaster (Retro Engine v3), playable on Windows, Linux and macOS with both soundtracks and Tails. Requires the 2011 game data.",
  notesEs: "DescompilaciÃ³n completa del remaster de Sonic CD de 2011 (Retro Engine v3), jugable en Windows, Linux y macOS con ambas bandas sonoras y Tails. Requiere los datos del juego de 2011.",
};

