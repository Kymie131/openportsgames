import type { Port } from "@/lib/ports/schema";

export const rivalSchoolsEvolutionRecomp: Port = {
  schema: "port",
  id: "rival-schools-evolution-recomp",
  title: "Rival Schools: Evolution Disc Recompiled",  game: "Rival Schools: United by Fate",
  developers: ["alexbeavs"],  publisher: "Capcom",  originalYear: 1998,
  portType: "recompilation",  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.0", date: "2026-09-14" },
  sources: ["https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,  originalSystems: ["PlayStation"],  summary: "Rival Schools: United by Fate is a 1998 3D fighting game developed and published by Capcom. Students from several Japanese schools investigate a series of kidnappings, with tag-team fights and a story mode.",  summaryEs: "Rival Schools: United by Fate es un juego de lucha 3D de 1998 desarrollado y publicado por Capcom. Estudiantes de varios institutos japoneses investigan una serie de secuestros, con combates por parejas y modo historia.",  notes:
    "Recompilation of Rival Schools: Evolution Disc (PS1, USA SLUS-00771) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Rival Schools: Evolution Disc (PS1, USA SLUS-00771) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp/releases/download/v0.1.0/rivalschoolsevolution-0.1.0-windows-x64.zip",
      size: "25.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp/releases/download/v0.1.0/rivalschoolsevolution-0.1.0-linux-x64.zip",
      size: "23.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp/releases/download/v0.1.0/rivalschoolsevolution-0.1.0-macos-x64.zip",
      size: "23.2 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp/releases/download/v0.1.0/rivalschoolsevolution-0.1.0-macos-arm64.zip",
      size: "22.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rival%20Schools%20-%20United%20by%20Fate%20(USA)%20(Disc%202)%20(Evolution%20Disc).png",
    alt: "Rival Schools: Evolution Disc (cover)",
    credit: "Box art",
  },
};
