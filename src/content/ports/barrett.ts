import type { Port } from "@/lib/ports/schema";

export const Barrett: Port = {
  schema: "port",
  kind: "tool",
  id: "barrett",
  title: "Barrett (Rise of the Triad)",
  game: "Rise of the Triad",
  developers: ["lunarmeadow"],
  publisher: "Apogee Software",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.3-beta", date: "2026-06-14" },
  sources: ["https://github.com/lunarmeadow/barrett"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Barrett is a source port of Rise of the Triad for modern systems. The original 1995 shooter was developed by 3D Realms and published by Apogee Software.",
  summaryEs: "Barrett es un port de código de Rise of the Triad para sistemas modernos. El shooter original de 1995 fue desarrollado por 3D Realms y publicado por Apogee Software.",  downloads: [
    {
      label: "macOS",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-macOS.zip",
      size: "906 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-linux.zip",
      size: "901 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-win64.zip",
      size: "1.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/barrett.svg",
    alt: "Barrett (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Advanced and featureful Rise of the Triad source port for modern systems.",
  notesEs:
    "Port avanzado y completo del código fuente de Rise of the Triad para sistemas modernos.",
};
