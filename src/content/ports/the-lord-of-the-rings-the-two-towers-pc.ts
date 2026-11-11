import type { Port } from "@/lib/ports/schema";

export const theLordOfTheRingsTheTwoTowersPc: Port = {
  schema: "port",
  id: "the-lord-of-the-rings-the-two-towers-pc",
  title: "The Lord of the Rings: The Two Towers (PC)",
  game: "The Lord of the Rings: The Two Towers",
  developers: ["Gumpolas"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "2.0.0", date: "2026-11-08" },
  sources: ["https://github.com/Gumpolas/TooTawersRecomp"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  summary: "The Lord of the Rings: The Two Towers is a 2002 epic fantasy film directed by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Stephen Sinclair, and Jackson, based on 1954's The Two Towers, the second volume of the novel The Lord of the Rings by J. R. R. Tolkien. The sequel to 2001's The Lord of the Rings: The Fellowship of the Ring, the film is the second instalment in the Lord of the Rings trilogy.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Gumpolas/TooTawersRecomp/releases/download/2.0.0/readmeslanguages.zip",
      size: "449 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/Gumpolas/TooTawersRecomp/releases/download/2.0.0/TwoTowers-Recompiled-v2.0.0-linux-x86_64.tar.gz",
      size: "170.2 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/Gumpolas/TooTawersRecomp/releases/download/2.0.0/TwoTowers-Recompiled-v2.0.0-macos-x86_64.tar.gz",
      size: "165.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Gumpolas/TooTawersRecomp/releases/download/2.0.0/TwoTowers-Recompiled-v2.0.0-win64.zip",
      size: "169.8 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/Gumpolas/TooTawersRecomp/releases/download/2.0.0/TwoTowers-Recompiled-v2.0.0-x86_64.AppImage",
      size: "172.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/the-lord-of-the-rings-the-two-towers.svg",
    alt: "The Lord of the Rings: The Two Towers (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "The Lord of the Rings: The Two Towers (Electronic Arts, 2002) running on Windows through static recompilation. Latest release: 1.9.2. You need your own copy of the game.",
  notesEs: "The Lord of the Rings: The Two Towers (Electronic Arts, 2002) en Windows mediante recompilación estática. Última release: 1.9.2. Necesitas tu propia copia del juego.",
};
