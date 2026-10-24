import type { Port } from "@/lib/ports/schema";

export const tf15Client: Port = {
  schema: "port",
  id: "tf15-client",
  title: "TF15-Client",
  game: "Team Fortress Classic",
  developers: ["Velaron"],
  publisher: "Valve",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Velaron/tf15-client"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Team Fortress Classic is a 1999 first-person shooter game developed by Valve and published by Sierra Studios. It was originally released in April 1999 as a mod for Valve's 1998 Windows game Half-Life, and is based on Team Fortress, a mod for the 1996 game Quake.",
  summaryEs: "Team Fortress Classic es uno de los mods oficiales de Valve, incluido en la actualización 1.1.1.0 de Half-Life, junto a Deathmatch Classic y Ricochet. Un juego FPS que combina acción y estrategia en dos o más equipos rivales con diferentes clases de soldado a elegir por cada jugador. Está basado en el juego original Team Fortress.",
  notes:
    "Reverse-engineered client for Team Fortress Classic, distributed for Android, Windows and Linux and run through Xash3D FWGS. It needs the original game data.",
  notesEs:
    "Cliente reversado de Team Fortress Classic, distribuido para Android, Windows y Linux y ejecutado mediante Xash3D FWGS. Necesita los datos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c2/Team_Fortress_Classic_box.jpg",
    alt: "Team Fortress Classic (box art)",
    credit: "Wikipedia",
  },
};
