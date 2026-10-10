import type { Port } from "@/lib/ports/schema";

export const castlevaniaCircleOfTheMoonRecomp: Port = {
  schema: "port",
  id: "castlevania-circle-of-the-moon-recomp",
  title: "Castlevania: Circle of the Moon Recompiled",
  game: "Castlevania: Circle of the Moon",
  developers: ["Zaxaerith"],
  publisher: "Konami",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Zaxaerith/CastlevaniaCircleOfTheMoonRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Castlevania: Circle of the Moon (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Castlevania: Circle of the Moon (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Castlevania%20-%20Circle%20of%20the%20Moon%20(USA)%20(Virtual%20Console).png",
    alt: "Castlevania: Circle of the Moon (box art)",
    credit: "Box art",
  },
};
