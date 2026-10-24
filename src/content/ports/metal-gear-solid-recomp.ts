import type { Port } from "@/lib/ports/schema";

export const metalGearSolidRecomp: Port = {
  schema: "port",
  id: "metal-gear-solid-recomp",
  title: "Metal Gear Solid Recompiled",
  game: "Metal Gear Solid",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/metal-gear-solid-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Metal Gear Solid is a 1998 action-adventure stealth game developed and published by Konami for the PlayStation. Directed, produced, and written by Hideo Kojima, the game is the third mainline installment in the Metal Gear series and serves as a sequel to the MSX2 game Metal Gear 2: Solid Snake (1990). The game's story follows Solid Snake, a former Special Forces operative who is pulled out of retirement by the U.S. government to infiltrate Shadow Moses, a nuclear weapons facility that has been taken over by rogue unit FOXHOUND, led by Liquid Snake.",
  summaryEs: "Metal Gear Solid es un videojuego de acción-aventura y sigilo de 1998 desarrollado por Konami Computer Entertainment Japan, publicado por Konami para la consola PlayStation y dirigido por Hideo Kojima. Fue lanzado el 3 de septiembre de 1998 en Japón, el 21 de octubre de 1998 en Norteamérica y el 26 de febrero de 1999 en Europa. El juego fue desarrollado y pensado únicamente para la consola Playstation, según la entrevista que dio Kojima a la Revista Famitsu en la celebración de los 20 años de Playstatión.",
  notes:
    "Recompilation of Metal Gear Solid (PS1, Europe SLES-01370 / SLES-11370) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Metal Gear Solid (PS1, Europe SLES-01370 / SLES-11370) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Metal%20Gear%20Solid%20(Europe).png",
    alt: "Metal Gear Solid (box art)",
    credit: "Box art",
  },
};
