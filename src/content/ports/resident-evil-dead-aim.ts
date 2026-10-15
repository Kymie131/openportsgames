import type { Port } from "@/lib/ports/schema";

export const ResidentEvilDeadAim: Port = {
  schema: "port",
  id: "resident-evil-dead-aim",
  title: "Resident Evil: Dead Aim",
  game: "Resident Evil: Dead Aim",
  developers: ["cakehonolulu"],
  publisher: "Unknown",
  originalYear: 2000,
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
  notes:
    "A work-in-progress decompilation of Capcom's Sony PlayStation 2 game, Resident Evil: Dead Aim.",
  notesEs: "Decompilación de Resident Evil: Dead Aim de Capcom para PlayStation 2, en desarrollo.",
};
