import type { Port } from "@/lib/ports/schema";

export const armyOfTwoRecomp: Port = {
  schema: "port",
  id: "army-of-two-recomp",
  title: "Army of Two Recompiled",
  game: "Army of Two",
  developers: ["nikolaygorb"],
  publisher: "Electronic Arts",
  originalYear: 2008,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/ArmyOfTwoRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Army of Two is a third-person shooter video game developed and published by Electronic Arts and released on March 4, 2008 for the Xbox 360 and PlayStation 3 consoles. The game is centered upon two mercenaries fighting through war, political turmoil, and a conspiracy from 1993 to 2009. Focusing on cooperative strategies, Army of Two's main feature is the necessity to use coordinated teamwork to accomplish the game's goals.",
  summaryEs: "Army of Two es un juego desarrollado por Electronic Arts, para las consolas PlayStation 3 y Xbox 360 y lanzado el 6 de marzo de 2008.",
  notes:
    "Static recompilation of Army of Two (Xbox 360) with the ReXGlue SDK to native Windows and Linux. It offers Vulkan or Direct3D 12 output and a 60 FPS option, and requires your own game data.",
  notesEs:
    "Recompilación estática de Army of Two (Xbox 360) con el SDK ReXGlue a Windows y Linux nativos. Ofrece salida Vulkan o Direct3D 12 y una opción de 60 FPS, y requiere tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/72/ArmyofTwo_front-1-.jpg",
    alt: "Army of Two (box art)",
    credit: "Wikipedia",
  },
};
