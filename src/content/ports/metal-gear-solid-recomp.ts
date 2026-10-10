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
  originalSystem: "PlayStation",
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
