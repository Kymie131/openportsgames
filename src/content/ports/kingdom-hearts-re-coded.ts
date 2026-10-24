import type { Port } from "@/lib/ports/schema";

export const KingdomHeartsReCoded: Port = {
  schema: "port",
  id: "kingdom-hearts-re-coded",
  title: "Kingdom Hearts Re:coded",
  game: "Kingdom Hearts Re:coded",
  developers: ["kh-recoded-decomp"],
  publisher: "Unknown",
  originalYear: 2010,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kh-recoded-decomp/kh-recoded-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Kingdom Hearts Coded is an episodic action role-playing puzzle video game developed and published by Square Enix, in collaboration with Disney Interactive Studios, for mobile phones. Coded was a Japan-only release announced at the 2007 Tokyo Game Show. A Nintendo DS remake, titled Kingdom Hearts Re:coded, was released in Japan, North America, Europe, and Australia. A cinematic remake of the game was included in the Kingdom Hearts HD 2.5 Remix video game compilation for the PlayStation 3, PlayStation 4, Xbox One, Windows, and Nintendo Switch.",
  summaryEs: "Kingdom Hearts Re:coded es un videojuego de acción y aventura en 2010.",
  notes:
    "Matching decompilation of Kingdom Hearts Re:coded (US/EU). EU: 88.65% C code and 99.98% DATA, byte-exact.",
  notesEs:
    "Decompilación que coincide de Kingdom Hearts Re:coded (US/EU). Versión EU: 88,65% de código C y 99,98% de datos, idénticos byte a byte.",
};
