import type { Port } from "@/lib/ports/schema";

export const megaManX4Recomp: Port = {
  schema: "port",
  id: "mega-man-x4-recomp",
  title: "MegaManX4Recomp",
  game: "Mega Man X4",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX4Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Mega Man X4 (USA, SLUS-00561) with the PSXRecomp framework. The MIPS code is translated to C and runs on a simulation of PS1 hardware plus a recompiled BIOS.",
  notesEs:
    "Recompilación estática de Mega Man X4 (USA, SLUS-00561) con el framework PSXRecomp. El código MIPS se traduce a C y corre sobre una simulación del hardware de PS1 más una BIOS recompilada.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X4%20(USA).png",
    alt: "Mega Man X4 (box art)",
    credit: "Box art",
  },
};
