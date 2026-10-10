import type { Port } from "@/lib/ports/schema";

export const apeEscapeRecomp: Port = {
  schema: "port",
  id: "ape-escape-recomp",
  title: "ApeEscapeRecomp",
  game: "Ape Escape",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ApeEscapeRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Ape Escape (USA, SCUS-94423) with PSXRecomp. The releases precompile 47 disc overlays and two minigames; two archive members remain unresolved.",
  notesEs:
    "Recompilación estática de Ape Escape (USA, SCUS-94423) con PSXRecomp. Las releases precompilan 47 overlays del disco y dos minijuegos; quedan dos miembros de archivo sin resolver.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ape%20Escape%20(USA).png",
    alt: "Ape Escape (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Ape%20Escape%20(USA).png",
      alt: "Ape Escape (screenshot)",
      credit: "Libretro",
    },
  ],
};
