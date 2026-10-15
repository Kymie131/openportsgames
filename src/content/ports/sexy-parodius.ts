import type { Port } from "@/lib/ports/schema";

export const SexyParodius: Port = {
  schema: "port",
  id: "sexy-parodius",
  title: "Sexy Parodius",
  game: "Sexy Parodius",
  developers: ["NJH-1001"],
  publisher: "Unknown",
  originalYear: 2000,
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
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/09/Sexy_Parodius.jpg",
    alt: "Sexy Parodius (box art)",
    credit: "Wikipedia",
  },
  notes: "Owned-input Windows x86-64 PSXRecomp project for Sexy Parodius (Japan, SLPM-86009).",
  notesEs:
    "Proyecto PSXRecomp para Windows x86-64 con entrada propia de Sexy Parodius (Japón, SLPM-86009).",
};
