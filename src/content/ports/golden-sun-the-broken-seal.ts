import type { Port } from "@/lib/ports/schema";

export const GoldenSunTheBrokenSeal: Port = {
  schema: "port",
  id: "golden-sun-the-broken-seal",
  title: "Golden Sun: The Broken Seal",
  game: "Golden Sun: The Broken Seal",
  developers: ["Coaltergeist"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Coaltergeist/goldensun-decomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f8/Golden_Sun_video_game_box_art.jpg",
    alt: "Golden Sun: The Broken Seal (cover)",
    credit: "Wikipedia",
  },
  summary:
    "Golden Sun: The Broken Seal is the Japanese title of Golden Sun, a 2001 role-playing game developed by Camelot and published by Nintendo for the Game Boy Advance. Adepts Isaac and Garet set out to stop the release of Alchemy after their village is attacked.",
  summaryEs:
    "Golden Sun: The Broken Seal es el título japonés de Golden Sun, un videojuego de rol de 2001 desarrollado por Camelot y publicado por Nintendo para Game Boy Advance. Los Adeptos Isaac y Garet parten para impedir la liberación de la Alquimia tras el ataque a su aldea.",
  notes: "Work-in-progress decompilation of Golden Sun (GBA, 2001). Builds a byte-identical ROM.",
  notesEs:
    "Decompilación de Golden Sun (GBA, 2001), en desarrollo. Genera una ROM idéntica byte a byte.",
};
