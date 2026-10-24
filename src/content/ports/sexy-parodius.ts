import type { Port } from "@/lib/ports/schema";

export const SexyParodius: Port = {
  schema: "port",
  id: "sexy-parodius",
  title: "Sexy Parodius",
  game: "Sexy Parodius",
  developers: ["NJH-1001"],
  publisher: "Konami",
  originalYear: 1996,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NJH-1001/SexyParoRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/09/Sexy_Parodius.jpg",
    alt: "Sexy Parodius (box art)",
    credit: "Wikipedia",
  },
  summary: "Sexy Parodius is a 1996 horizontal-scrolling shooter arcade game developed by Konami. It is the fifth installment of the Parodius series. Like the rest of the series, it is a parody of the Gradius series and other Konami games. As implied in the title, the game contains sexual elements.",
  summaryEs: "Sexy Parodius es un videojuego arcade de Matamarcianos con scroll horizontal publicado por Konami en 1996. Este es el quinto juego de la serie Parodius, marcando el cierre de la etapa de los shoot'em ups a la serie. Una saga que parodia al popular Gradius, otro juego de la misma compañía.",
  notes: "Owned-input Windows x86-64 PSXRecomp project for Sexy Parodius (Japan, SLPM-86009).",
  notesEs:
    "Proyecto PSXRecomp para Windows x86-64 con entrada propia de Sexy Parodius (Japón, SLPM-86009).",
};
