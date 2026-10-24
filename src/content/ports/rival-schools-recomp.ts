import type { Port } from "@/lib/ports/schema";

export const rivalSchoolsRecomp: Port = {
  schema: "port",
  id: "rival-schools-recomp",
  title: "Rival Schools: United by Fate Recompiled",
  game: "Rival Schools: United by Fate",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/rival-schools-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Rival Schools: United by Fate, known in Japan as Private Justice Academy: Legion of Heroes, is a 1997 3D fighting game produced by Capcom originally released as an arcade game on Sony ZN-2 hardware. Rival Schools revolves around tag team battles between groups of students from various schools in a Japanese city, and uses a comical and humorous style. Sakura Kasugano from Capcom's Street Fighter series also appears as a character in the game.",
  summaryEs: "Para la banda de post-hardcore, véase Rival Schools",
  notes:
    "Recompilation of Rival Schools: United by Fate (PS1, USA SLUS-00681) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Rival Schools: United by Fate (PS1, USA SLUS-00681) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rival%20Schools%20-%20United%20by%20Fate%20(Europe).png",
    alt: "Rival Schools: United by Fate (box art)",
    credit: "Box art",
  },
};
