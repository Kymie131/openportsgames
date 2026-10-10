import type { Port } from "@/lib/ports/schema";

export const jadeCocoonRecomp: Port = {
  schema: "port",
  id: "jade-cocoon-recomp",
  title: "Jade Cocoon: Story of the Tamamayu Recompiled",
  game: "Jade Cocoon: Story of the Tamamayu",
  developers: ["alexbeavs"],
  publisher: "Crave Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/jade-cocoon-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Jade Cocoon: Story of the Tamamayu (PS1, USA SLUS-00854) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Jade Cocoon: Story of the Tamamayu (PS1, USA SLUS-00854) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Jade%20Cocoon%20-%20Story%20of%20the%20Tamamayu%20(Europe).png",
    alt: "Jade Cocoon: Story of the Tamamayu (box art)",
    credit: "Box art",
  },
};
