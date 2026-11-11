import type { Port } from "@/lib/ports/schema";

export const Ambermoon: Port = {
  schema: "port",
  id: "ambermoon",
  title: "Ambermoon",
  game: "Ambermoon",
  developers: ["Pyrdacor"],
  publisher: "Thalion Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.15.2", date: "2026-11-08" },
  sources: ["https://github.com/Pyrdacor/Ambermoon.net"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/Ambermoon.net-Linux.tar.gz",
      size: "86.3 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/Ambermoon.net-Mac-ARM.zip",
      size: "81.8 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/Ambermoon.net-Mac.zip",
      size: "83.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/Ambermoon.net-Windows.zip",
      size: "85.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/Ambermoon.net-Windows32Bit.zip",
      size: "82.8 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/Pyrdacor/Ambermoon.net/releases/download/v1.15.2/AmbermoonInstall.exe",
      size: "76.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/91/Ambermoon_German_Cover_art.jpg",
    alt: "Ambermoon (cover)",
    credit: "Wikipedia",
  },
  summary: "Ambermoon is a role-playing game developed and published by Thalion Software, released in 1993 for the Amiga. It was the second part of an unfinished trilogy.",
  summaryEs: "Ambermoon es un videojuego de acción y aventura publicado por Thalion Software en 1993.",
  notes: "Ambermoon rewrite in C#.",
  notesEs: "Reescritura de Ambermoon en C#.",
};
