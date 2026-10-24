import type { Port } from "@/lib/ports/schema";

export const FinalFantasyXiv10: Port = {
  schema: "port",
  id: "final-fantasy-xiv-1-0",
  title: "Final Fantasy XIV (1.0)",
  game: "Final Fantasy XIV (1.0)",
  developers: ["swstegall"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/swstegall/meteor-decomp"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Final Fantasy XIV is a subscription-based massively multiplayer online role-playing game (MMORPG) developed and published by Square Enix. Directed and produced by Naoki Yoshida and released worldwide for PlayStation 3 and Windows in August 2013, it replaced the failed 2010 version, with subsequent support for PlayStation 4 in April 2014, macOS in July 2015, PlayStation 5 in May 2021, Xbox Series X/S in March 2024, and Nintendo Switch 2 in August 2026.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://openportsgames.com/covers/generated/final-fantasy-xiv-1-0.svg",
    alt: "Final Fantasy XIV (1.0) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Clean-room decompilation of the FINAL FANTASY XIV 1.23b Windows client binaries (ffxivgame/boot/login/updater/config). Hybrid matching + functional/wire reverse-engineering under Ghidra and a byte-identical VS2005+PSDK recompilation toolchain.",
  notesEs:
    "Decompilación de sala limpia de los binarios del cliente de Windows de FINAL FANTASY XIV 1.23b (ffxivgame/boot/login/updater/config). Coincidencia híbrida e ingeniería inversa funcional y de protocolo con Ghidra y una cadena de recompilación byte a byte en VS2005+PSDK.",
};
