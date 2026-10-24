import type { Port } from "@/lib/ports/schema";

export const GoldeneyePcPort: Port = {
  schema: "port",
  id: "goldeneye-pc-port",
  title: "GoldenEye PC Port",
  game: "GoldenEye PC Port",
  developers: ["jkdansereau"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jkdansereau/goldeneye-pc-port"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "GoldenEye is a 1995 spy film, the seventeenth in the James Bond series produced by Eon Productions, and the first to star Pierce Brosnan as the fictional MI6 agent James Bond. Directed by Martin Campbell, it was the first in the series not to use any story elements from the works of novelist Ian Fleming. It was also the first James Bond film not produced by Albert R. Broccoli, following his stepping down from Eon Productions and replacement by his daughter, Barbara Broccoli. The story was conceived and written by Michael France, with later collaboration by other writers.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "GoldenEye 007 (N64, 1997) as a native PC game for Windows, Linux, Steam Deck and macOS. Built from the open decompilation, with widescreen, mouse and keyboard or controller, and split-screen. Not an emulator.",
  notesEs:
    "GoldenEye 007 (N64, 1997) como juego nativo de PC para Windows, Linux, Steam Deck y macOS. Hecho desde la decompilación abierta, con panorámico, ratón y teclado o mando, y pantalla dividida. No es un emulador.",
};
