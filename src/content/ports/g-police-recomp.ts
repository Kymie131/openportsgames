import type { Port } from "@/lib/ports/schema";

export const gPoliceRecomp: Port = {
  schema: "port",
  id: "g-police-recomp",
  title: "G-Police Recompiled",
  game: "G-Police",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/g-police-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "G-Police is a 1997 combat flight simulation video game developed and published by Psygnosis for PlayStation and Microsoft Windows.",
  summaryEs: "G-Police es un videojuego de simulación de combate aéreo de 1997 desarrollado y publicado por Psygnosis para PlayStation y Windows.",
  notes:
    "Recompilation of G-Police (PS1, USA SLUS-00544) with PSXRecomp and the recomp-ui launcher. It needs your disc and a European SCPH-5502/5552 BIOS; the wizard handles generating and compiling. Release candidate 0.1.0, with gameplay validation still pending.",
  notesEs:
    "Recompilación de G-Police (PS1, USA SLUS-00544) con PSXRecomp y el lanzador recomp-ui. Necesita tu disco y una BIOS europea SCPH-5502/5552; el asistente se encarga de generar y compilar. Versión candidata 0.1.0, pendiente de validar el gameplay.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-recomp/releases/download/v0.1.1/g-police-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-recomp/releases/download/v0.1.1/g-police-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-recomp/releases/download/v0.1.1/g-police-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-recomp/releases/download/v0.1.1/g-police-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/G-Police%20(USA).png",
    alt: "G-Police (box art)",
    credit: "Box art",
  },
};
