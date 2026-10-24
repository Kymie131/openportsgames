import type { Port } from "@/lib/ports/schema";

export const megaManZeroRecomp: Port = {
  schema: "port",
  id: "mega-man-zero-recomp",
  title: "Mega Man Zero Recompiled",
  game: "Mega Man Zero",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManZeroRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  summary: "Mega Man Zero is a 2002 hack and slash platform game developed by Inti Creates and published by Capcom for the Game Boy Advance. It is the first installment in the Mega Man Zero series, the fifth series in Capcom's Mega Man video game franchise. The game is set 100 years after the events of the Mega Man X series and follows Zero, a Reploid awakened from his sleep to aid a human scientist named Ciel and her resistance force in a fight against the utopia of Neo Arcadia.",
  summaryEs: "Mega Man Zero, conocido en Japón como Rockman Zero , es un videojuego creado por Keiji Inafune, desarrollado por Inti Creates, distribuida por la compañía Capcom para la consola Game Boy Advance en 26 de abril del año 2002 solo en Japón. El primer juego de la serie, y la quinta serie de la Franquicia de Megaman.",
  notes:
    "Static recompilation of Mega Man Zero (GBA) with the gbarecomp framework. It requires your own game files.",
  notesEs:
    "Recompilación estática de Mega Man Zero (GBA) con el framework gbarecomp. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mega%20Man%20Zero%20(USA)%20(Virtual%20Console).png",
    alt: "Mega Man Zero (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Mega%20Man%20Zero%20(USA)%20(Virtual%20Console).png",
      alt: "Mega Man Zero (screenshot)",
      credit: "Libretro",
    },
  ],
};
