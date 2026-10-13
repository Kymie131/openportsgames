import type { Port } from "@/lib/ports/schema";

export const godOfWar3Recomp: Port = {
  schema: "port",
  id: "god-of-war-3-recomp",
  title: "God of War III Remastered Recompiled",
  game: "God of War III Remastered",
  developers: ["FelipePrado0"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2010,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/FelipePrado0/gow3_pc"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 4",
  notes:
    "Windows port of God of War III Remastered (PS4): the original x86-64 executable runs directly on the CPU through a custom runtime, with graphics on shadPS4's Vulkan video core and cuesta4's fixes. Playable start to finish, with a 240 FPS patch, launcher and in-game menu. It needs your own dump (CUSA01623 v1.02).",
  notesEs:
    "Port para Windows de God of War III Remastered (PS4): el ejecutable original x86-64 corre directamente en la CPU mediante un runtime propio, con gráficos sobre el núcleo Vulkan de shadPS4 y los arreglos de cuesta4. Jugable de principio a fin, con parche de 240 FPS, lanzador y menú in-game. Necesita tu propio volcado (CUSA01623 v1.02).",
  cover: {
    src: "https://images.launchbox-app.com//1eb8d6bc-e4f2-4296-8e44-42c6e698528d.jpg",
    alt: "God of War III Remastered (cover)",
    credit: "LaunchBox Games Database",
  },
};
