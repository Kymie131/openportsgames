import type { Port } from "@/lib/ports/schema";

export const unrealTournamentAndroid: Port = {
  schema: "port",
  id: "unreal-tournament-android",
  title: "Unreal Tournament (Android)",
  game: "Unreal Tournament",
  developers: ["Andiweli"],
  publisher: "Epic Games",
  originalYear: 1999,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Andiweli/UT99-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Unreal Tournament is a 1999 first-person shooter game developed by Epic Games and Digital Extremes. The second installment in the Unreal series, it was first published by GT Interactive in 1999 for Windows, and later released on the PlayStation 2 and Dreamcast by Infogrames in 2000 and 2001, respectively. Players compete in a series of matches of various types, with the general aim of out-killing opponents. The PC and Dreamcast versions support multiplayer online or over a local area network.",
  summaryEs: "Unreal Tournament, también conocido como UT y llamado en ocasiones UT99, UT Classic, UT1, o UT:GOTY para diferenciarlo de sus sucesores, es un videojuego de disparos en primera persona. Lanzado al mercado en 1999, es la continuación del juego Unreal de Epic Games, y su principal enfoque es la acción para multijugador. Compite directamente con el juego Quake III Arena de id Software, que salió al mercado diez días después.",
  notes:
    "Android port of Unreal Tournament 99 (v400) for 32 and 64-bit devices, playable with a controller, touchscreen or keyboard and mouse. It needs the original game files.",
  notesEs:
    "Port a Android de Unreal Tournament 99 (v400) para dispositivos de 32 y 64 bits, jugable con mando, pantalla táctil o teclado y ratón. Necesita los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f4/Unrealtournament.jpg",
    alt: "Unreal Tournament (box art)",
    credit: "Wikipedia",
  },
};
