import type { Port } from "@/lib/ports/schema";

export const starcraft64Recomp: Port = {
  schema: "port",
  id: "starcraft-64-recomp",
  title: "StarCraft 64 Recompiled",
  game: "StarCraft 64",
  developers: ["n0madic"],
  publisher: "Blizzard Entertainment",
  originalYear: 2000,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-10-13" },
  sources: ["https://github.com/n0madic/StarCraft64-recomp"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "StarCraft is a real-time strategy video game developed and published by Blizzard Entertainment for Microsoft Windows. The first installment of the video game series of the same name, it was released in 1998. A Classic Mac OS version was released in 1999, and a Nintendo 64 port co-developed with Mass Media and published by Nintendo was released in 2000.",
  summaryEs: "StarCraft 64 es un videojuego de estrategia publicado por Nintendo en 2000.",
  notes:
    "StarCraft 64 (Blizzard, 2000) rebuilt as a native port for Windows, Linux, Mac and Android with N64Recomp. It requires your own ROM.",
  notesEs:
    "StarCraft 64 (Blizzard, 2000) reconstruido como port nativo para Windows, Linux, Mac y Android con N64Recomp. Requiere tu propia ROM.",
};
