import type { Port } from "@/lib/ports/schema";

export const ThiefDeadlyShadows: Port = {
  schema: "port",
  id: "thief-deadly-shadows",
  title: "Thief: Deadly Shadows",
  game: "Thief: Deadly Shadows",
  developers: ["Veradictus"],
  publisher: "Eidos Interactive",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.3", date: "2026-11-04" },
  sources: ["https://github.com/Veradictus/Thief3-Decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "T3SDK-Launcher_0.3.3_portable",
      url: "https://github.com/Veradictus/Thief3-Decomp/releases/download/v0.3.3/T3SDK-Launcher_0.3.3_portable.zip",
      size: "45.7 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/Veradictus/Thief3-Decomp/releases/download/v0.3.3/T3SDK-Launcher_0.3.3_x64-setup.exe",
      size: "29.9 MB",
    },
    {
      label: "T3SDK_0.3.3_x86",
      url: "https://github.com/Veradictus/Thief3-Decomp/releases/download/v0.3.3/T3SDK_0.3.3_x86.zip",
      size: "31.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Thief_Deadly_Shadows_boxart.jpg",
    alt: "Thief: Deadly Shadows (box art)",
    credit: "Wikipedia",
  },
  summary: "Thief: Deadly Shadows is a 2004 stealth video game developed by Ion Storm for Microsoft Windows and Xbox that was released in 2004, on May 25 in North America and on June 11 in Europe. It is the third video game in the Thief series.",
  summaryEs: "Thief: Deadly Shadows es un videojuego de sigilo de 2004 desarrollado por Ion Storm para Microsoft Windows y Xbox. Se lanzó el 25 de mayo de 2004 en Norteamérica y el 11 de junio en Europa. Es el tercer videojuego de la saga Thief.",
  notes: "Decompilation, modding, and map editing for Thief: Deadly Shadows.",
  notesEs: "Decompilación, modding y edición de mapas de Thief: Deadly Shadows.",
};
