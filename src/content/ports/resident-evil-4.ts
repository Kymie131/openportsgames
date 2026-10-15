import type { Port } from "@/lib/ports/schema";

export const ResidentEvil4: Port = {
  schema: "port",
  id: "resident-evil-4",
  title: "Resident Evil 4",
  game: "Resident Evil 4",
  developers: ["adonis-singh"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/adonis-singh/re4"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Resident%20Evil%204%20(Australia)%20(En,Fr,De,Es,It)%20(Bonus%20Disc).png",
    alt: "Resident Evil 4 (box art)",
    credit: "Box art",
  },
  notes:
    "Resident Evil 4 (GameCube, G4BE08 debug build) — complete byte-identical decompilation to C/C++.",
  notesEs:
    "Resident Evil 4 (GameCube, build de depuración G4BE08): decompilación completa byte a byte a C/C++.",
};
