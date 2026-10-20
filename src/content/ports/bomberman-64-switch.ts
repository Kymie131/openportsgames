import type { Port } from "@/lib/ports/schema";

export const bomberman64Switch: Port = {
  schema: "port",
  id: "bomberman-64-switch",
  title: "Bomberman 64 (Switch)",
  game: "Bomberman 64",
  developers: ["paulodiasred"],
  publisher: "Hudson Soft",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-10-17" },
  sources: ["https://github.com/paulodiasred/BM64Switch"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  related: ["bomberman-64-recomp"],
  notes:
    "Bomberman 64 (Hudson Soft, 1997) running natively on Nintendo Switch through N64Recomp and libultraship. It requires your own ROM and ships no game assets.",
  notesEs:
    "Bomberman 64 (Hudson Soft, 1997) en Nintendo Switch de forma nativa mediante N64Recomp y libultraship. Requiere tu propia ROM y no incluye recursos del juego.",
};
