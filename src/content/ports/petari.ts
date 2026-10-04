import type { Port } from "@/lib/ports/schema";

export const petari: Port = {
  schema: "port",
  id: "petari",
  title: "Petari",
  game: "Super Mario Galaxy",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SMGCommunity/Petari"],
  discord: "https://discord.gg/ZxEqyYeZbf",
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystem: "Wii",
  notes:
    "Ongoing decompilation of Super Mario Galaxy (Wii). No tagged releases yet; builds track the repository and still require assets from the original game.",
  notesEs:
    "Decompilación en curso de Super Mario Galaxy (Wii). Aún sin releases etiquetadas; las builds siguen el repositorio y todavía requieren recursos del juego original.",
};
