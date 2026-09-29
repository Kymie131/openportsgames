import type { Port } from "@/lib/ports/schema";

export const bomberman64Recomp: Port = {
  schema: "port",
  id: "bomberman-64-recomp",
  title: "Bomberman 64: Recompiled",
  game: "Bomberman 64",
  developers: ["Hudson Soft"],
  publisher: "Hudson Soft",
  originalYear: 1996,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.0", date: "2026-03-22" },
  sources: ["https://github.com/RevoSucks/BM64Recomp"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "High framerate support",
    "Widescreen and ultrawide support",
    "Low input lag and instant load times",
    "Linux binary with documented Steam Deck support",
  ],
  notes:
    "Bomberman 64 rebuilt with N64: Recompiled. The repository and its releases contain no game assets, so the player must supply their own legally obtained game.",
};
