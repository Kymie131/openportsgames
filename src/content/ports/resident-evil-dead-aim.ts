import type { Port } from "@/lib/ports/schema";

export const ResidentEvilDeadAim: Port = {
  schema: "port",
  id: "resident-evil-dead-aim",
  title: "Resident Evil: Dead Aim",
  game: "Resident Evil: Dead Aim",
  developers: ["cakehonolulu"],
  publisher: "Capcom",
  originalYear: 2003,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/cakehonolulu/Bullseye"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Resident%20Evil%20-%20Dead%20Aim%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Resident Evil: Dead Aim (box art)",
    credit: "Box art",
  },
  summary: "Resident Evil: Dead Aim is a light gun shooter video game developed by Cavia and published by Capcom. It is the third Gun Survivor title in the Resident Evil series, and the fourth and final installment in the Gun Survivor series. It is also the third in the franchise to feature first-person shooting in the Resident Evil series.",
  summaryEs: "Resident Evil: Dead Aim, conocido en Japón como Gun Survivor 4 Biohazard Heroes Never Die(REDA) , es un videojuego de disparos con pistola de luz para PlayStation 2. Es el cuarto capítulo de la serie Gun Survivor, y fue programado por Cavia.",
  notes:
    "A work-in-progress decompilation of Capcom's Sony PlayStation 2 game, Resident Evil: Dead Aim.",
  notesEs: "Decompilación de Resident Evil: Dead Aim de Capcom para PlayStation 2, en desarrollo.",
};
